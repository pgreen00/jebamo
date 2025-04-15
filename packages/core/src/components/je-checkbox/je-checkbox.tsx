import { AttachInternals, Component, EventEmitter, Host, Prop, h, Element, Event, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'je-checkbox',
  styleUrl: 'je-checkbox.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeCheckbox {
  @AttachInternals() internals: ElementInternals;
  @Element() el!: HTMLElement;
  private iconEl!: HTMLElement;
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
  @Prop() indeterminate = false;

  /**
   * Shows the readonly state and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Shows the disabled state and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Marks the control as required in the form. This will only affect indeterminate checkboxes.
   */
  @Prop() required = false;

  /**
   * Data to submit to the form
   */
  @Prop() data?: string;

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

  componentDidLoad() {
    //this.handleValueChange();
  }

  formResetCallback() {
    if (this.value !== this.originalValue) {
      this.value = this.originalValue;
      this.valueChange.emit(this.value);
    }
  }

  @Listen('click')
  onClick() {
    if (!this.readonly && !this.disabled) {
      this.value = !this.value;
      this.valueChange.emit(this.value);
    }
  }

  @Watch('value')
  handleValueChange() {
    this.internals.setFormValue(this.value ? this.data || 'true' : null);
    if (this.value === undefined && this.required) {
      this.internals.setValidity({ valueMissing: true }, 'This field is required', this.iconEl);
    } else {
      this.internals.setValidity({});
    }
  }

  render() {
    const icon = this.value === true ? 'check_box' : this.value === false ? 'check_box_outline_blank' : 'indeterminate_check_box';
    return (
      <Host class={{ disabled: this.disabled, readonly: this.readonly }}>
        {this.labelPlacement == 'start' && <slot />}
        <je-icon ref={el => this.iconEl = el} tabIndex={0} fill={this.value} part='icon'>{icon}</je-icon>
        {this.labelPlacement == 'end' && <slot />}
      </Host>
    );
  }
}
