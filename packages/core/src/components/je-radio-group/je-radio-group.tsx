import { Component, Host, h, Element, EventEmitter, Prop, Event, Watch, Listen, AttachInternals } from '@stencil/core';

@Component({
  tag: 'je-radio-group',
  styleUrl: 'je-radio-group.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeRadioGroup {
  @AttachInternals() internals!: ElementInternals;
  @Element() el!: HTMLJeRadioGroupElement;

  /**
   * Requires a value before the form can be submitted
   */
  @Prop() required?: boolean;

  /**
   * Value the form will reset to. Defaults to initial value if not specified
   */
  @Prop({ mutable: true }) originalValue?: any;

  /**
   * Label that shows above the controls
   */
  @Prop() label?: string;

  /**
   * The currently selected value
   */
  @Prop({ mutable: true }) value?: any;

  /**
   * Emits the selected value whenever it changes
   */
  @Event({ bubbles: false }) valueChange!: EventEmitter<any>;

  componentDidLoad() {
    this.internals.setFormValue(this.value);
    if (!this.originalValue) this.originalValue = this.value;
  }

  componentWillRender() {
    this.getRadios().forEach(radio => radio.selected = radio.value === this.value);
  }

  componentDidRender() {
    this.internals.states.clear()
    if (this.required) {
      this.internals.states.add('--required');
      if (this.getRadios().every(t => t.selected)) {
        this.internals.states.add('--valid');
      } else {
        this.internals.setValidity({ customError: true }, 'Please select an option.')
        this.internals.states.add('--invalid');
      }
    }
  }

  formResetCallback() {
    if (this.value !== this.originalValue) {
      this.value = this.originalValue;
    }
  }

  private getRadios() {
    return Array.from(this.el.querySelectorAll('je-radio'));
  }

  private isRadio(target: EventTarget | null): target is HTMLJeRadioElement {
    return target instanceof HTMLElement && target.tagName == 'JE-RADIO'
  }

  @Watch('value')
  handleValueChange() {
    this.valueChange.emit(this.value);
    this.internals.setFormValue(this.value);
  }

  @Listen('click')
  handleNewValue(ev: Event) {
    const { target } = ev;
    if (this.isRadio(target)) {
      this.value = target.value;
    }
  }

  render() {
    return (
      <Host>
        <slot name='label'>
          {this.label && <label tabindex={0}>{this.label}</label>}
        </slot>
        <slot></slot>
      </Host>
    );
  }
}
