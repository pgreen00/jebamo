import { Component, EventEmitter, Host, Prop, State, h, Element, Event, Listen } from '@stencil/core';

@Component({
  tag: 'je-radio',
  styleUrl: 'je-radio.scss',
  shadow: true,
})
export class JeRadio {
  @Element() el!: HTMLElement;
  @State() readonly = false;
  @State() disabled = false;

  /**
   * The value of this option and the radio group will compare against
   */
  @Prop() value: any;

  /**
   * Whether or not the label will appear before or after the control
   */
  @Prop() labelPlacement: 'start' | 'end' = 'end';

  /**
   * If the option is currently selected
   */
  @Prop() selected: boolean;

  /**
   * Emits the value whenever it is selected
   */
  @Event() radioSelect: EventEmitter<any>;

  connectedCallback() {
    const parent = this.el.closest('je-radio-group');
    if (parent) {
      this.disabled = parent.disabled;
      this.readonly = parent.readonly;
    }
  }

  @Listen('click')
  handleClick() {
    if (!this.disabled && !this.readonly && this.selected !== true) {
      this.radioSelect.emit(this.value);
    }
  }

  render() {
    return (
      <Host>
        {this.labelPlacement == 'start' && <slot></slot>}
        <je-icon icon={this.selected ? 'radio_button_checked' : 'radio_button_unchecked'} />
        {this.labelPlacement == 'end' && <slot></slot>}
      </Host>
    );
  }
}
