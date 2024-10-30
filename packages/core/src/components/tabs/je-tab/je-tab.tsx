import { Component, Element, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-tab',
  styleUrl: 'je-tab.scss',
  shadow: true,
})
export class JeTab {
  @Element() el: HTMLJeTabElement;
  @Prop() value?: string;
  @Prop() active = false;
  @Event() tabClick: EventEmitter<string>;

  @Listen('click')
  onClick() {
    this.tabClick.emit(this.value ?? this.el.textContent);
  }

  render() {
    return (
      <Host class={{ active: this.active == true }}>
        <slot></slot>
      </Host>
    );
  }
}
