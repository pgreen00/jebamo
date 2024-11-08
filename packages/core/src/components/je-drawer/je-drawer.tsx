import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

export type DrawerState = 'open' | 'closed';

@Component({
  tag: 'je-drawer',
  styleUrl: 'je-drawer.scss',
  shadow: true,
})
export class JeDrawer {
  @Element() el!: HTMLElement;
  private backdropEl!: HTMLElement;
  private containerEl!: HTMLElement;
  @Prop({ mutable: true }) state: DrawerState = 'closed';
  @Prop({ reflect: true }) side: 'left' | 'right' | 'bottom' = 'left';

  @Watch('state')
  async stateChangeHandler(newValue: DrawerState) {
    if (newValue == 'open') {
      this.backdropEl.classList.add('open');
      this.backdropEl.style.opacity = '1';
      this.containerEl.classList.add('open');
      if (this.side == 'left') {
        this.containerEl.style.marginLeft = '0';
      } else if (this.side == 'right') {
        this.containerEl.style.marginRight = '0';
      } else {
        this.containerEl.style.marginBottom = '0';
      }
    } else {
      this.containerEl.removeAttribute('style');
      this.backdropEl.removeAttribute('style');
    }
  }

  private handleBackdropTransitionEnd = () => {
    if (this.state == 'closed') {
      this.backdropEl.classList.remove('open');
    }
  }

  private handleContainerTransitionEnd = () => {
    if (this.state == 'closed') {
      this.containerEl.classList.remove('open');
    }
  }

  render() {
    return (
      <Host>
        <div ref={el => this.containerEl = el} part='container' onTransitionEnd={this.handleContainerTransitionEnd}>
          <slot/>
        </div>
        <div ref={el => this.backdropEl = el} onClick={() => this.state = 'closed' } onTransitionEnd={this.handleBackdropTransitionEnd} class='backdrop'></div>
      </Host>
    );
  }
}
