import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-select-option',
  styleUrl: 'je-select-option.scss',
  shadow: true,
})
export class JeSelectOption {
  @Prop() value: string;
  @Prop({ reflect: true }) selected?: boolean;

  render() {
    return (
      <span part='container'>
        <slot></slot>
      </span>
    );
  }
}
