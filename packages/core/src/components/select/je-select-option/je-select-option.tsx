import { Component, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-select-option',
  styleUrl: 'je-select-option.scss',
  shadow: true,
})
export class JeSelectOption {
  @Prop() value: string;
  @Prop({ reflect: true }) selected = false;
  @Event() optionSelected: EventEmitter<string>;

  @Listen('click')
  handleClick() {
    this.optionSelected.emit(this.value);
  }

  render() {
    return (
      <span part='container'>
        <je-icon icon={this.selected ? 'radio_button_checked' : 'radio_button_unchecked'}/>
        <slot></slot>
      </span>
    );
  }
}
