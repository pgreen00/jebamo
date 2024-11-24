import { Component, Element, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import { JeBranchCustomEvent } from '../../../components';

@Component({
  tag: 'je-tree',
  styleUrl: 'je-tree.scss',
  shadow: true,
})
export class JeTree {
  @Element() element: HTMLJeTreeElement;
  @Prop({ mutable: true }) value?: string | string[];
  @Prop() selection: 'single' | 'multiple' | 'leaf' = 'leaf';
  @Prop() indentation = false;
  @Event() valueChange: EventEmitter<string>;

  @Listen('branchSelect')
  async branchSelectedHandler(event: JeBranchCustomEvent<string>) {
    const isLeaf = await event.target.isLeaf();
    if ((this.selection == 'leaf' && isLeaf) || this.selection == 'single') {
      this.value = event.detail;
      event.target.selected = true;
      Array.from(this.element.querySelectorAll('je-branch'))
        .filter(t => !t.isSameNode(event.target))
        .forEach(branch => branch.selected = false);
    } else if (this.selection == 'leaf') {
      event.target.open = !event.target.open;
    } else if (this.selection == 'multiple') {
      if (!Array.isArray(this.value)) {
        this.value = [];
      }
      event.target.selected = !event.target.selected;
      if (isLeaf && event.target.selected) {
        this.value = [...this.value, event.detail]
      } else if (isLeaf) {
        this.value = this.value.filter(v => v != event.detail)
      } else {
        event.target.querySelectorAll('je-branch').forEach(branch => branch.selected = event.target.selected);
      }
      this.setParents(event.target);
    }
  }

  private async setParents(branch: HTMLJeBranchElement) {
    const parentBranch = await branch.getParentBranch();
    if (parentBranch) {
      const children = Array.from(parentBranch.querySelectorAll('je-branch'));
      parentBranch.selected = children.every(child => child.selected) ? true : children.some(child => child.selected) ? null : false;
      this.setParents(parentBranch);
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
