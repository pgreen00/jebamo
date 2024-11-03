import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'je-branch',
  styleUrl: 'je-branch.scss',
  shadow: true,
})
export class JeBranch {
  @Element() element: HTMLJeBranchElement;;
  @Prop() open = false;
  @Prop() value?: string;
  @Prop() label?: string;
  @Prop() selected: boolean | null = false;
  @State() selection: 'single' | 'multiple' | 'leaf' | null = null;
  @State() hasChildren = false;
  @Event() branchSelect: EventEmitter<string>;

  componentWillLoad() {
    this.onSlotChange();
    this.selection = this.element.closest('je-tree')?.selection ?? null;
  }

  @Listen('click')
  async onClick(ev: Event) {
    ev.stopPropagation();
    const value = this.value || this.element.textContent;
    const isLeaf = await this.isLeaf();
    if ((this.selection == 'leaf' && isLeaf) || this.selection != null) {
      this.branchSelect.emit(value);
    }
  }

  @Listen('slotChange')
  onSlotChange() {
    this.hasChildren = this.element.querySelector('je-branch') !== null;
  }

  @Method()
  async isLeaf() {
    return !this.hasChildren;
  }

  @Method()
  async getParentBranch(): Promise<HTMLJeBranchElement | null> {
    const parentElement = this.element.parentElement;
    if (parentElement && parentElement.tagName === 'JE-BRANCH') {
      return parentElement as HTMLJeBranchElement;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Host>
        <div part="container">
          <je-icon icon={this.open ? 'expand_more' : 'chevron_right'} style={{opacity: this.hasChildren ? '1' : '0'}}/>
          {this.selection === 'multiple' && <je-icon icon={this.selected === true ? 'check_box' : this.selected === false ? 'check_box_outline_blank' : 'indeterminate_check_box'} />}
          <slot name="label">
            {this.label && <span>{this.label}</span>}
          </slot>
        </div>
        <slot/>
      </Host>
    );
  }
}
