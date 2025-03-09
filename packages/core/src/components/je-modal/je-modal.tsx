import { Component, Host, h, Element, Event, EventEmitter, Method, Prop, Watch } from '@stencil/core';
import { animationUpdate } from '../../utils/utils';

@Component({
  tag: 'je-modal',
  styleUrl: 'je-modal.scss',
  shadow: true,
})
export class JeModal {
  @Element() el!: HTMLJeModalElement;

  /** Whether or not the backdrop will be visible to the user */
  @Prop() showBackdrop = true;

  /** Backdrop will close the modal on click when enabled */
  @Prop() backdropDismiss = true;

  /** Opens and closes modal */
  @Prop({ mutable: true }) open = false;

  /** Emits whenever the modal has opened. Does not emit any data */
  @Event() modalPresent: EventEmitter;

  /** Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method. */
  @Event() modalDismiss: EventEmitter<{ role: string, data: any }>;

  protected contentEl!: HTMLElement;
  protected backdropEl!: HTMLElement;
  protected templateEl: HTMLTemplateElement;

  componentDidLoad() {
    this.templateEl = this.el.querySelector('template');
  }

  @Watch('open')
  handleOpenChange(open: boolean) {
    if (open) {
      this.present()
    } else {
      this.dismiss('openChange')
    }
  }

  @Method()
  async present() {
    if (this.templateEl) {
      this.contentEl.innerHTML = '';
      this.contentEl.appendChild(this.templateEl.content.cloneNode(true));
    }
    this.contentEl.classList.add('open');
    this.backdropEl.classList.add('open');
    await animationUpdate();
    this.contentEl.style.opacity = '1';
    this.backdropEl.style.opacity = '1';
    this.modalPresent.emit();
    if (!this.open)
      this.open = true;
  }

  @Method()
  async dismiss(role = 'manualClose', data?: any) {
    this.contentEl.removeAttribute('style');
    this.backdropEl.removeAttribute('style');
    this.modalDismiss.emit({ role, data });
    if (this.open)
      this.open = false;
  }

  private handleBackdropClick = () => {
    if (this.open && this.backdropDismiss) {
      this.dismiss('backdropClose');
    }
  }

  private handleContentTransitionEnd = () => {
    if (!this.open) {
      this.contentEl.classList.remove('open');
      if (this.templateEl) {
        this.contentEl.innerHTML = '';
      }
    }
  }

  private handleBackdropTransitionEnd = () => {
    if (!this.open) {
      this.backdropEl.classList.remove('open');
    }
  }

  render() {
    return (
      <Host>
        <div part="trigger-container" onClick={() => this.open = true}>
          <slot name='trigger' />
        </div>

        <div ref={el => this.contentEl = el} part='content' onTransitionEnd={this.handleContentTransitionEnd}>
          <slot/>
        </div>

        <div part="backdrop" ref={el => this.backdropEl = el} onClick={this.handleBackdropClick} onTransitionEnd={this.handleBackdropTransitionEnd} class={{ pointer: this.backdropDismiss, clear: !this.showBackdrop }}></div>
      </Host>
    );
  }
}
