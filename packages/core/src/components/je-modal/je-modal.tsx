import { Component, Host, h, Element, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'je-modal',
  styleUrl: 'je-modal.scss',
  shadow: true,
})
export class JeModal {
  @Element() el!: HTMLJeModalElement;

  /** The id of the element that will present the modal on click. If not provided, you will have to manually present the modal using openModal(). */
  @Prop() trigger?: string;

  /** Whether or not the backdrop will be visible to the user */
  @Prop() showBackdrop = true;

  /** Backdrop will close the modal on click when enabled */
  @Prop() backdropClose = true;

  @State() isOpen = false;

  /** Emits whenever the modal has opened. Does not emit any data */
  @Event({ bubbles: false }) didPresent: EventEmitter;

  /** Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method. */
  @Event({ bubbles: false }) didDismiss: EventEmitter<{ role: string, data: any }>;

  protected parentEl!: HTMLElement;
  protected triggerElement!: HTMLElement;
  protected contentEl!: HTMLElement;
  protected backdropEl!: HTMLElement;
  protected pageEl!: HTMLElement;

  componentDidLoad() {
    this.pageEl = this.el.closest('je-page');
    this.parentEl = this.el.parentElement;
    if (this.trigger) {
      this.triggerElement = document.getElementById(this.trigger);
      if (this.triggerElement) {
        this.triggerElement.addEventListener('click', () => this.present());
      } else {
        console.error('Failed to find modal trigger element!');
      }
    }
  }

  @Method()
  async present() {
    if (!this.isOpen) {
      this.el.remove();
      if (this.pageEl) {
        this.pageEl.append(this.el);
      } else {
        document.body.append(this.el);
      }
      this.isOpen = true;

      return new Promise<void>(resolve => {
        this.contentEl.addEventListener('transitionend', () => {
          this.didPresent.emit();
          resolve();
        }, { once: true });
        this.backdropEl.classList.add('fade');
        this.contentEl.classList.add('open');
      });
    }
  }

  @Method()
  async dismiss(role = 'manualClose', data?: any) {
    if (this.isOpen) {
      return new Promise<void>(resolve => {
        this.contentEl.addEventListener('transitionend', () => {
          this.el.remove();
          this.parentEl.append(this.el);
          this.isOpen = false;
          this.didDismiss.emit({ role: role, data: data });
          resolve();
        }, { once: true });
        this.backdropEl.classList.remove('fade');
        this.contentEl.classList.remove('open');
      });
    }
  }

  private handleBackdropClick = () => {
    if (this.isOpen && this.backdropClose) {
      this.dismiss('backdropClose');
    }
  }

  render() {
    return (
      <Host slot="overlay">
        <div ref={el => this.contentEl = el} class={{ 'modal-transition': true, 'modal': this.isOpen }}>
          {this.isOpen && <slot></slot>}
        </div>

        <div
          ref={el => this.backdropEl = el}
          onClick={this.handleBackdropClick}
          class={{ 'backdrop-transition': true, 'backdrop': this.isOpen, 'clear': !this.showBackdrop && this.isOpen }}>
        </div>
      </Host>
    );
  }
}
