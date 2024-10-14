import { Component, Host, h, Element, EventEmitter, Prop, Event, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'je-radio-group',
  styleUrl: 'je-radio-group.scss',
  shadow: true,
  formAssociated: true
})
export class JeRadioGroup {
  @Element() el!: HTMLJeRadioGroupElement;
  private originalValue?: any;

  /**
   * Label that shows above the controls
   */
  @Prop() label?: string;

  /**
   * The currently selected value
   */
  @Prop({ mutable: true }) value?: any;

  /**
   * Shows readonly state for all the controls and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Shows disabled state for all the controls and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Emits the selected value whenever it changes
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<any>;

  componentWillLoad() {
    if (this.label) {
      this.el.setAttribute('name', this.label)
    }
  }

  componentDidLoad() {
    this.originalValue = this.value;
    if (this.value) {
      const radios = this.getRadios();
      for (let item of radios) {
        if (item.value === this.value) {
          item.selected = true;
        }
      }
    }
  }

  formResetCallback() {
    if (this.value !== this.originalValue) {
      this.value = this.originalValue;
    }
  }

  private getRadios() {
    const elements = this.el.querySelectorAll('je-radio');
    return Array.from(elements);
  }

  @Watch('value')
  handleValueChange() {
    this.valueChange.emit(this.value);
    const radios = this.getRadios();
    for (let radio of radios) {
      if (radio.value !== this.value && radio.selected !== false)
        radio.selected = false;
      else if (radio.value === this.value && radio.selected !== true)
        radio.selected = true;
    }
  }

  @Listen('radioSelect')
  handleNewValue(ev: CustomEvent<any>) {
    this.value = ev.detail;
  }

  render() {
    return (
      <Host>
        {this.label && <label>{this.label}</label>}
        <slot></slot>
      </Host>
    );
  }
}
