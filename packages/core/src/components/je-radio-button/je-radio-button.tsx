import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-radio-button',
  styleUrl: 'je-radio-button.scss',
  shadow: {
    delegatesFocus: true
  },
})
export class JeRadioButton {
  /** The value for this option that bw-card-group will compare against */
  @Prop() value?: string;

  /** Changes the styling of the card to indicate it is selected */
  @Prop() selected = false;

  render() {
    return (
      <button tabindex={0} role="radio" class={{ selected: this.selected }}>
        <slot></slot>
      </button>
    );
  }
}
