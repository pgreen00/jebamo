import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-input',
  styleUrl: 'je-input.scss',
  shadow: true,
})
export class JeInput {
  private containerEl!: HTMLElement;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() expand?: boolean;

  render() {
    return (
      <Host>
        <div ref={el => this.containerEl = el} part='outer-container'>
          <div part='start-container'>
            <slot name='start'/>
            {this.label && <label part='label'>{this.label}</label>}
          </div>
          <input part='native-input'
            onFocus={() => this.containerEl.classList.add('focused')}
            onBlur={() => this.containerEl.classList.remove('focused')}
            placeholder={this.placeholder}/>
          <div part='end-container'>
            <slot name='end'/>
          </div>
        </div>
      </Host>
    );
  }
}
