import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'je-branch',
  styleUrl: 'je-branch.scss',
  shadow: {
    delegatesFocus: true
  }
})
export class JeBranch {
  @Element() element: HTMLJeBranchElement;
  @State() selection: 'single' | 'multiple' | 'leaf' | null = null;
  @State() hasChildren = false;
  @State() indentation = false;
  @Prop({ mutable: true }) open = false;
  @Prop() value?: string;
  @Prop() label?: string;
  @Prop() selected: boolean | null = false;
  @Event() branchSelect: EventEmitter<string>;
  private mainContainerEl: HTMLElement;

  componentWillLoad() {
    this.onSlotChange();
    const tree = this.element.closest('je-tree');
    this.selection = tree?.selection ?? null;
    this.indentation = tree?.indentation ?? false;
  }

  @Listen('keydown')
  onKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowRight' && this.hasChildren && !this.open) {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      this.open = true;
    } else if (ev.key === 'ArrowLeft' && this.open) {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      this.open = false;
    } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      let previousSibling = this.element.previousElementSibling;
      while (previousSibling && !(previousSibling.tagName === 'JE-BRANCH')) {
        previousSibling = previousSibling.previousElementSibling;
      }
      if (previousSibling?.tagName === 'JE-BRANCH') {
        this.mainContainerEl.blur();
        if (previousSibling.querySelector('je-branch') !== null && (previousSibling as HTMLJeBranchElement).open) {
          const children = previousSibling.querySelectorAll('je-branch');
          children[children.length - 1].focus();
        } else {
          (previousSibling as HTMLJeBranchElement).focus();
        }
      } else {
        const parentBranch = this.element.parentElement.closest('je-branch');
        if (parentBranch) {
          this.mainContainerEl.blur();
          parentBranch.focus();
        }
      }
    } else if (ev.key === 'ArrowDown' || ev.key == 'ArrowRight') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      if (this.hasChildren && this.open) {
        this.mainContainerEl.blur();
        this.element.querySelector('je-branch')?.focus();
      } else {
        let nextSibling = this.element.nextElementSibling;
        while (nextSibling && !(nextSibling.tagName === 'JE-BRANCH')) {
          nextSibling = nextSibling.querySelector('je-branch') ?? nextSibling.nextElementSibling;
        }
        if (!nextSibling && this.element.parentElement.tagName === 'JE-BRANCH') {
          nextSibling = this.element.parentElement.nextElementSibling;
          while (nextSibling && !(nextSibling.tagName === 'JE-BRANCH')) {
            nextSibling = nextSibling.nextElementSibling;
          }
        }
        if (nextSibling?.tagName === 'JE-BRANCH') {
          this.mainContainerEl.blur();
          (nextSibling as HTMLJeBranchElement).focus();
        }
      }
    } else if (ev.key === ' ' || ev.key === 'Enter') {
      ev.stopImmediatePropagation();
      ev.preventDefault();
      this.element.click();
    }
  }

  @Listen('click')
  async onClick(ev: Event) {
    ev.stopPropagation();
    this.branchSelect.emit(this.value);
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

  private handleIconClick = (ev: MouseEvent) => {
    if ((this.selection == 'single' || this.selection == 'multiple') && this.hasChildren) {
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
    const level = this.getLevel(this.element);
    return (
      <Host>
        <style>{`:host{--level:${level * 20}px;}`}</style>
        <div ref={el => this.mainContainerEl = el} tabindex={0} part="main-container" class={{ highlight: this.selected && (this.selection == 'single' || this.selection == 'leaf') }}>
          <div part="level"></div>
          <je-icon class={{ open: this.open }} onClickCapture={this.handleIconClick} style={{ opacity: this.hasChildren ? '1' : '0' }}>chevron_right</je-icon>
          {this.selection === 'multiple' && (
            <je-icon>{this.selected === true ? 'check_box' : this.selected === false ? 'check_box_outline_blank' : 'indeterminate_check_box'}</je-icon>
          )}
          <span part="label">
            <slot name="label">{this.label && <span>{this.label}</span>}</slot>
          </span>
        </div>
        <div class={{ open: this.open, indentation: this.indentation }} part="branch-container">
          <div part='inner-branch-container'>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
