import { Component, h, Element, Prop, Method } from '@stencil/core';
import { Color } from '../../utils/utils';

export type DialogButton = {
  text: string;
  color?: Color;
  fill: 'solid' | 'outline' | 'clear';
  handler: (dialog: HTMLJeDialogElement) => void | Promise<void>;
  type?: 'reset' | 'submit';
};

export type DialogControl = {
  label?: string;
  placeholder?: string;
  //validators?: HTMLJeInputElement['validators']
  required?: boolean;
  type?: string;
};

@Component({
  tag: 'je-dialog',
  styleUrl: 'je-dialog.scss',
  shadow: true,
})
export class JeDialog {
  @Element() el!: HTMLJeDialogElement;
  private modalEl!: HTMLJeModalElement;

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
   * Whether or not to render the backdrop
   */
  @Prop() showBackdrop = true;

  /**
   * Whether or not the user can close the alert by clicking the backdrop
   */
  @Prop() backdropDismiss = true;

  @Method()
  async getModalElement() {
    return this.modalEl;
  }

  @Method()
  async show() {
    this.modalEl.show();
  }

  @Method()
  async hide(role?: string, data?: any) {
    this.modalEl.hide(role, data);
  }

  render() {
    const content = (
      <je-form>
        <div class="content-container">
          {this.header && (
            <div class="header">
              {this.icon && <je-icon>{this.icon}</je-icon>}
              <h1>{this.header}</h1>
              <je-icon button class="close" onClick={() => (this.modalEl.open = false)}>close</je-icon>
            </div>
          )}
          {this.message && <div class="message">{this.message}</div>}
          {this.controls && (
            <div class="controls">
              {this.controls.map(control => (
                <je-input type={control.type} required={control.required} label={control.label} placeholder={control.placeholder}></je-input>
              ))}
            </div>
          )}
          {this.buttons && (
            <div class="buttons">
              {this.buttons.map(button => (
                <je-button fill={button.fill} type={button.type} color={button.color} onClick={() => button.handler(this.el)}>
                  {button.text}
                </je-button>
              ))}
            </div>
          )}
        </div>
      </je-form>
    );

    return (
      <je-modal ref={el => (this.modalEl = el)} backdropDismiss={this.backdropDismiss} showBackdrop={this.showBackdrop}>
        <slot name="trigger" slot="trigger" />
        <slot>{content}</slot>
      </je-modal>
    );
  }
}
