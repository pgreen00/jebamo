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
    } else if (this.selection == 'multiple' && isLeaf) {
      event.target.selected = !event.target.selected;
      if (Array.isArray(this.value)) {
        if (event.target.selected) {
          this.value = [...this.value, event.detail]
        } else {
          this.value = this.value.filter(v => v != event.detail)
        }
      } else if (event.target.selected) {
        this.value = [event.detail];
      }
      const parentBranch = await event.target.getParentBranch();
      if (parentBranch) {
        const children = Array.from(parentBranch.querySelectorAll('je-branch'));
        parentBranch.selected = children.every(child => child.selected) ? true : children.some(child => child.selected) ? null : false;
      }
    } else if (this.selection == 'multiple' && !isLeaf) {
      event.target.selected = event.target.selected !== true;
      if (event.target.selected) {
        event.target.querySelectorAll('je-branch').forEach(branch => branch.selected = true);
      } else {
        event.target.querySelectorAll('je-branch').forEach(branch => branch.selected = false);
      }
      const parentBranch = await event.target.getParentBranch();
      if (parentBranch) {
        const children = Array.from(parentBranch.querySelectorAll('je-branch'));
        parentBranch.selected = children.every(child => child.selected) ? true : children.some(child => child.selected) ? null : false;
      }
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
