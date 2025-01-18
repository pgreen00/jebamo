import { Component, h, Element, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'je-multiselect-option',
  styleUrl: 'je-multiselect-option.scss',
  shadow: true,
})
export class JeMultiselectOption {
  @Element() hostEl!: HTMLElement;
  @Prop() value: string;
  @Prop({ reflect: true }) checked = false;
  @Event() optionChecked: EventEmitter<string>;
  @Event() optionUnchecked: EventEmitter<string>;

  @Listen('click')
  handleClick() {
    if (this.checked) {
      this.optionUnchecked.emit(this.value);
    } else {
      this.optionChecked.emit(this.value);
    }
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.hostEl.toggleAttribute('darkmode', e.detail == 'dark')
  }

  render() {
    return (
      <span part='container'>
        <je-icon icon={this.checked ? 'check_box' : 'check_box_outline_blank'}/>
        <slot></slot>
      </span>
    );
  }
}
