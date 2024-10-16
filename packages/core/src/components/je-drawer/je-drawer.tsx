import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

export type DrawerState = 'open' | 'closed';

@Component({
  tag: 'je-drawer',
  styleUrl: 'je-drawer.scss',
  shadow: true,
})
export class JeDrawer {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true, mutable: true }) state: DrawerState = 'closed';
  private pageEl: HTMLElement;
  private parentEl: HTMLElement;

  componentDidLoad() {
    this.pageEl = this.el.closest('je-page');
    this.parentEl = this.el.parentElement;
  }

  @Watch('state')
  async stateChangeHandler(newValue: DrawerState) {
    if (newValue == 'open') {
      this.el.remove();
      this.pageEl.append(this.el);
    } else {
      this.el.remove();
      this.parentEl.append(this.el);
    }
  }

  render() {
    return (
      <Host slot='overlay'>
        <div part='container'>
          <slot/>
        </div>
        <div onClick={() => this.state = 'closed' } class='backdrop'></div>
      </Host>
    );
  }
}
