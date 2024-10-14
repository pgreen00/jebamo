import { AttachInternals, Component, EventEmitter, Host, Prop, h, Element, Event, Listen } from '@stencil/core';

@Component({
  tag: 'je-checkbox',
  styleUrl: 'je-checkbox.scss',
  shadow: true,
  formAssociated: true
})
export class JeCheckbox {
  @AttachInternals() internals: ElementInternals;
  @Element() el!: HTMLElement;
  private originalValue?: boolean;

  /**
   * Whether or not the checkbox is active
   */
  @Prop({ mutable: true }) value?: boolean;

  /**
   * Whether or not the label should go before or after the checkbox
   */
  @Prop() labelPlacement: 'start' | 'end' = 'end';

  /**
   * If the checkbox should contain a 3rd indeterminate state
   */
  @Prop({ reflect: true }) indeterminate = false;

  /**
   * Will hide the checkbox and just display the label
   */
  @Prop() labelOnly = false;

  /**
   * Shows the readonly state and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Shows the disabled state and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Emits the current value whenever it's state changes
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<boolean | undefined>;

  componentWillLoad() {
    if (this.value === undefined && !this.indeterminate) {
      this.value = false;
    }
    this.originalValue = this.value;
  }

  formResetCallback() {
    if (this.value !== this.originalValue) {
      this.value = this.originalValue;
    }
  }

  @Listen('click')
  onClick() {
    if (!this.readonly && !this.disabled) {
      if (!this.indeterminate) {
        this.value = !this.value;
      } else {
        // when indeterminate, the flow is false -> true -> null
        this.value = this.value == false ? true : this.value == true ? null : false;
      }
      this.valueChange.emit(this.value);
    }
  }

  render() {
    return (
      <Host>
        {this.labelPlacement == 'start' && <slot></slot>}
        <je-icon icon={this.value === true ? 'check_box' : this.value === false ? 'check_box_outline_blank' : 'indeterminate_check_box'} />
        {this.labelPlacement == 'end' && <slot></slot>}
      </Host>
    );
  }
}
