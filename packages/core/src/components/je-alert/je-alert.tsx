import { Component, Host, h, Element, EventEmitter, Event, Method, Prop, State } from '@stencil/core';
import { AsyncValidationFn, ValidationFn } from '../je-input/je-input';

export type DialogButton = {
  text: string,
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'light' | 'dark',
  fill: 'solid' | 'outline' | 'clear',
  handler: (dialog: HTMLJeAlertElement) => void | Promise<void>,
  type?: string
}

export type DialogControl = {
  label?: string,
  placeholder?: string,
  validators?: (ValidationFn | AsyncValidationFn)[],
  required?: boolean,
  type?: string
}

@Component({
  tag: 'je-alert',
  styleUrl: 'je-alert.scss',
  shadow: true,
})
export class JeAlert {
  @Element() el!: HTMLJeAlertElement;
  @State() isOpen = false;
  protected parentEl!: HTMLElement;
  protected triggerElement!: HTMLElement;
  protected contentEl!: HTMLElement;
  protected backdropEl!: HTMLElement;
  protected pageEl!: HTMLElement;

  /**
   * Emitted when the dialog is presented
   */
  @Event({ bubbles: false }) didPresent: EventEmitter;

  /**
   * Emitted when the dialog is dismissed
   */
  @Event({ bubbles: false }) didDismiss: EventEmitter<{ role: string, data: any }>;

  /**
   * Emitted when the inner form submission is triggered
   */
  @Event({ bubbles: false }) didSubmit: EventEmitter<SubmitEvent>;

  /**
   * Title of the dialog
   */
  @Prop() header?: string;

  /**
   * Message text below the title
   */
  @Prop() message?: string;

  /**
   * Icon that goes to the left of the header
   */
  @Prop() icon?: string;

  /**
   * Buttons for user interaction
   */
  @Prop() buttons?: DialogButton[];

  /**
   * Controls that are wrapped in a form
   */
  @Prop() controls?: DialogControl[];

  /**
   * Trigger element id
   */
  @Prop() trigger?: string;

  /**
   * Whether or not to render the backdrop
   */
  @Prop() showBackdrop = true;

  /**
   * Whether or not the user can close the dialog by clicking the backdrop
   */
  @Prop() backdropClose = true;

  componentDidLoad() {
    this.pageEl = this.el.closest('je-page');
    this.parentEl = this.el.parentElement;
    if (this.trigger) {
      this.triggerElement = document.getElementById(this.trigger);
      if (this.triggerElement) {
        this.triggerElement.addEventListener('click', () => this.present());
      } else {
        console.error('USS Core: Failed to find modal trigger element!');
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
    const content = <je-form onSubmit={(ev: SubmitEvent) => this.didSubmit.emit(ev)}><div class="content-container">
      {this.header && <div class="header">
        {this.icon && <je-icon icon={this.icon}></je-icon>}
        <h1>{this.header}</h1>
        <je-button fill='clear' icon-only class="close" onClick={() => this.dismiss()}>
          <je-icon icon="close"></je-icon>
        </je-button>
      </div>}
      {this.message && <div class="message">{this.message}</div>}
      {this.controls && <div class="controls">{this.controls.map(control => (
        <je-input type={control.type} required={control.required} label={control.label} placeholder={control.placeholder} validators={control.validators}></je-input>
      ))}</div>}
      {this.buttons && <div class="buttons">{this.buttons.map(button => (
        <je-button fill={button.fill} type={button.type} color={button.color} onClick={() => button.handler(this.el)}>{button.text}</je-button>
      ))}</div>}
    </div></je-form>

    return (
      <Host slot='overlay'>
        <div ref={el => this.contentEl = el} class={{ 'modal-transition': true, 'modal': this.isOpen }}>
          {this.isOpen && content}
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
