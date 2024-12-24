import { Component, Element, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import { JeMenuOptionCustomEvent } from '../../../components';

@Component({
  tag: 'je-menu',
  styleUrl: 'je-menu.scss',
  shadow: true,
})
export class JeMenu {
  @Element() el: HTMLElement;
  @Prop() type?: 'select' | 'multiselect';
  @Prop({ mutable: true }) value?: string;
  @Event() valueChange: EventEmitter<string>;

  @Listen('menuOptionSelect')
  onMenuOptionSelect(event: JeMenuOptionCustomEvent<string>) {
    this.value = event.detail;
    this.valueChange.emit(this.value);
    if (this.type == 'select') {
      const menuOptions = Array.from(this.el.querySelectorAll('je-menu-option'));
      menuOptions.forEach(option => option.checked = option.value == this.value);
    } else if (this.type == 'multiselect') {
      event.target.checked = !event.target.checked;
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
