import { Component, EventEmitter, Host, Listen, Prop, Watch, h, Event } from '@stencil/core';

@Component({
  tag: 'je-toggle',
  styleUrl: 'je-toggle.scss',
  shadow: true,
})
export class JeToggle {
  /**
   * Whether or not the toggle is active
   */
  @Prop({ reflect: true, mutable: true }) checked = false;

  /**
   * If the label should be placed at the start or end of the toggle
   */
  @Prop() labelPlacement: 'start' | 'end' = 'end';

  /**
   * Emits the new value whenever toggle is clicked
   */
  @Event() toggled: EventEmitter<boolean>;

  @Listen('click', { capture: true })
  toggle() {
    this.checked = !this.checked;
    this.toggled.emit(this.checked);
  }

  @Watch('checked')
  onCheckedChange(newVal: boolean) {
    if (newVal !== this.checked) {
      this.checked = newVal;
    }
  }

  render() {
    return (
      <Host>
        {this.labelPlacement == 'start' && <slot></slot>}
        <div class="toggle-container">
          <div class={{ 'toggle-thumb': true, 'checked': this.checked }}></div>
        </div>
        {this.labelPlacement == 'end' && <slot></slot>}
      </Host>
    );
  }
}
