import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'je-label',
  styleUrl: 'je-label.scss',
  shadow: true,
})
export class JeLabel {
  @Prop() for?: string;

  @Prop() required?: boolean;

  render() {
    return (
      <label part='label' htmlFor={this.for} class={{required: this.required}}>
        <slot/>
      </label>
    );
  }
}
