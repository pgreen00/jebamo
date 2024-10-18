import { Component, Element, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-select-option',
  styleUrl: 'je-select-option.scss',
  shadow: true,
})
export class JeSelectOption {
  @Element() hostEl!: HTMLElement;
  @Prop() value: string;
  @Prop({ reflect: true }) selected = false;
  @Event() optionSelected: EventEmitter<string>;

  @Listen('click')
  handleClick() {
    this.optionSelected.emit(this.value);
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.hostEl.toggleAttribute('darkmode', e.detail == 'dark')
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
