import { Component, Host, h, Prop, Listen, Element, AttachInternals } from '@stencil/core';

/**
 * @slot - Place the label in the default slot
 * @part icon - The je-icon element
 */
@Component({
  tag: 'je-checkbox-option',
  styleUrl: 'je-checkbox-option.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeCheckboxOption {
  @Element() element!: HTMLJeCheckboxOptionElement;
  @AttachInternals() internals: ElementInternals;

  /**
   * Value of this option that the checkbox group will compare against
   */
  @Prop() value: any;

  /**
   * Whether or not this option is currently checked
   */
  @Prop() checked = false;

  /**
   * Shows readonly state and prevents changes to this option
   */
  @Prop() readonly = false;

  /**
   * Shows disabled state and prevents changes to this option
   */
  @Prop() disabled = false;

  @Listen('click', { capture: true })
  onClick(ev: MouseEvent) {
    if (this.readonly || this.disabled) {
      ev.stopPropagation();
    }
  }

  render() {
    return (
      <Host>
        <je-icon tabindex={0} part='icon' icon={this.checked ? 'check_box' : 'check_box_outline_blank'} />
        <slot></slot>
      </Host>
    );
  }

  componentDidRender() {
    this.internals.states.clear()
    if (this.checked) {
      this.internals.states.add('--checked')
    }
    if (this.readonly) {
      this.internals.states.add('--readonly')
    }
    if (this.disabled) {
      this.internals.states.add('--disabled')
    }
  }
}
