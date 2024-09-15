import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-select',
  styleUrl: 'je-select.scss',
  shadow: true,
})
export class JeSelect {
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop() expand?: boolean;

  render() {
    return (
      <Host>
        <je-input
          exportparts='outer-container, start-container, end-container, native-input, content'
          dropdown={true}
          label={this.label}
          placeholder={this.placeholder}
          noTyping={true}
          value={this.value}
          expand={this.expand}
        >
          <slot slot='dropdown'></slot>
        </je-input>
      </Host>
    );
  }
}
