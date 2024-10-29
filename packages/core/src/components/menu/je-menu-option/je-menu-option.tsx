import { Component, Element, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-menu-option',
  styleUrl: 'je-menu-option.scss',
  shadow: true
})
export class JeMenuOption {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) value?: string;
  @Prop() checked = false;
  @Prop() disabled?: boolean;
  @Event() menuOptionSelect: EventEmitter<string>;

  componentDidLoad() {
    if (!this.value) {
      this.value = this.el.textContent;
    }
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark')
  }

  @Listen('click')
  onClick() {
    this.menuOptionSelect.emit(this.value);
  }

  render() {
    return (
      <je-toolbar>
        <div slot='start'>
          {this.checked && <je-icon size='sm' icon='check' />}
          <slot name='start'/>
        </div>
        <slot/>
        <div slot='end'>
          <slot name='end'/>
        </div>
      </je-toolbar>
    );
  }
}
