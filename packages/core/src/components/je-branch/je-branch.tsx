import { Component, Element, Host, Method, Prop, forceUpdate, h } from '@stencil/core';

@Component({
  tag: 'je-branch',
  styleUrl: 'je-branch.css',
  shadow: {
    delegatesFocus: true
  }
})
export class JeBranch {
  private hasChildren = false;
  @Element() element: HTMLJeBranchElement;
  @Prop() selection?: 'single' | 'multiple' | 'leaf';
  @Prop() indentation = false;
  @Prop({ mutable: true }) open = false;
  @Prop() value?: string;
  @Prop() label?: string;
  @Prop() selected: boolean | null = false;

  componentWillRender() {
    this.hasChildren = this.element.querySelector('je-branch') !== null;
  }

  @Method()
  async isLeaf() {
    return !this.hasChildren;
  }

  private handleIconClick = (ev: MouseEvent) => {
    if (this.selection != 'leaf') {
      ev.stopPropagation();
      this.open = !this.open;
    }
  };

  private getLevel(el: HTMLElement, level = 0) {
    const parent = el.parentElement;
    if (this.selection && parent.tagName == 'JE-BRANCH') {
      return this.getLevel(parent, level + 1);
    }
    return level;
  }

  render() {
    const levels = new Array(this.getLevel(this.element)).fill(0)
    return (
      <Host>
        <style>{`:host{--level:${levels.length};`}</style>
        <button tabindex={0} class={{ selected: this.selected, [this.selection]: true }}>
          {levels.map(() => <div class='level'></div>)}
          {this.hasChildren ? (
            <je-icon size='sm' class={{ open: this.open, toggle: true }} onClickCapture={this.handleIconClick}>chevron_right</je-icon>
          ) : (
            <div class='icon-placeholder'></div>
          )}
          {this.selection === 'multiple' && (
            <je-icon size='sm' weight={300} fill class='multi-icon'>{this.selected === true ? 'check_box' : this.selected === false ? 'check_box_outline_blank' : 'indeterminate_check_box'}</je-icon>
          )}
          <slot name="label">{this.label && <span>{this.label}</span>}</slot>
        </button>
        <div class={{ open: this.open, indentation: this.indentation }} part="branch-container">
          <div part='inner-branch-container'>
            <slot onSlotchange={() => forceUpdate(this.element)} />
          </div>
        </div>
      </Host>
    );
  }
}
