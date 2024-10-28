import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-textarea',
  styleUrl: 'je-textarea.scss',
  shadow: true,
  formAssociated: true
})
export class JeTextarea {
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop() disabled?: boolean;
  @Prop() readonly?: boolean;
  @Prop() required?: boolean;
  @Prop() debounce = 0;
  @Prop() maxLength?: number;

  render() {
    return (
      <Host>
        {this.label && <label>{this.label}</label>}
        <textarea
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          readonly={this.readonly}
          maxLength={this.maxLength}
          title={this.label}/>
        <slot name="top-right"/>
      </Host>
    );
  }
}
