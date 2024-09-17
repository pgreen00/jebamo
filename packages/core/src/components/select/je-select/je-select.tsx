import { Component, Host, Prop, h, Element, forceUpdate, State, Listen } from '@stencil/core';

@Component({
  tag: 'je-select',
  styleUrl: 'je-select.scss',
  shadow: true,
})
export class JeSelect {
  @Element() el: HTMLElement;
  @State() open = false;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop({ reflect: true }) expand?: boolean;
  @Prop({ reflect: true }) native?: boolean;

  @Listen('click')
  handleClick() {
    this.open = !this.open;
  }

  render() {
    if (this.native) {
      const slot = this.el.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
      const assignedNodes = slot?.assignedNodes({ flatten: true }).filter(t => t.nodeName === 'JE-SELECT-OPTION');
      return (
        <Host>
          <div part='outer-container'>
            <div part='start-container'>
              <slot name='start' />
              {this.label && <label>{this.label}</label>}
            </div>

            <select part='native-select'>
              {assignedNodes?.length && assignedNodes.map(node => <option>
                {node.textContent}
              </option>)}
            </select>

            <div part='end-container'>
              <slot name='end' />
              <je-icon icon='expand_more' />
            </div>
          </div>
          <div style={{ display: 'none' }}>
            <slot onSlotchange={() => forceUpdate(this.el)} />
          </div>
        </Host>
      );
    } else {
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
            dismissOnClick={true}
          >
            <slot slot='dropdown'></slot>
            <je-icon slot='end' icon='expand_more' class={{ open: this.open }} />
          </je-input>
        </Host>
      );
    }
  }
}
