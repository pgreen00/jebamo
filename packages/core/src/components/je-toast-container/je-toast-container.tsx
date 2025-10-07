import { Component, Host, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'je-toast-container',
  styleUrl: 'je-toast-container.css',
  shadow: true,
})
export class JeToastContainer {
  @Element() el: HTMLJeToastContainerElement
  @Prop({ reflect: true }) position: 'top' | 'bottom' | 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' = 'bottom-start';

  private onSlotChange = () => {
    if (!this.el.querySelector('je-alert') && this.el.matches(':popover-open')) {
      this.el.hidePopover()
    }
  }

  render() {
    return (
      <Host>
        <slot onSlotchange={this.onSlotChange} />
      </Host>
    );
  }
}
