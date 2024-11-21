import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';
import { animationUpdate } from '../../utils/utils';

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
  private templateEl: HTMLTemplateElement;
  @Prop() template?: string;
  @Prop({ mutable: true }) state: DrawerState = 'closed';
  @Prop({ reflect: true }) side: 'left' | 'right' | 'bottom' = 'left';

  componentDidLoad() {
    if (this.template) {
      this.templateEl = document.getElementById(this.template) as HTMLTemplateElement;
    }
  }

  @Watch('state')
  async stateChangeHandler(newValue: DrawerState) {
    if (newValue == 'open') {
      if (this.templateEl) {
        this.containerEl.innerHTML = '';
        this.containerEl.appendChild(this.templateEl.content.cloneNode(true));
      }
      this.backdropEl.classList.add('open');
      this.containerEl.classList.add('open');
      await animationUpdate();
      this.backdropEl.style.opacity = '1';
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
      if (this.templateEl) {
        this.containerEl.innerHTML = '';
      }
    }
  }

  render() {
    return (
      <Host>
        <div part='trigger' onClick={() => this.state = 'open' }>
          <slot name='trigger'/>
        </div>
        <div ref={el => this.containerEl = el} part='container' onTransitionEnd={this.handleContainerTransitionEnd}>
          <slot/>
        </div>
        <div ref={el => this.backdropEl = el} onClick={() => this.state = 'closed' } onTransitionEnd={this.handleBackdropTransitionEnd} class='backdrop'></div>
      </Host>
    );
  }
}
