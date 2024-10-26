import { Component, Host, h, Element, Event, EventEmitter, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'je-checkbox-group',
  styleUrl: 'je-checkbox-group.scss',
  shadow: true,
  formAssociated: true
})
export class JeCheckboxGroup {
  @Element() el!: HTMLJeCheckboxGroupElement;
  private originalValue?: string[];

  /**
   * Label that shows above the controls
   */
  @Prop() label?: string;

  /**
   * Current selected values
   */
  @Prop({ mutable: true }) value: string[] = [];

  /**
   * Emits the current selected values whenever they change
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<string[]>;

  componentWillLoad() {
    if (!Array.isArray(this.value)) {
      this.value = [];
    }

    this.originalValue = this.value;

    if (this.label) {
      this.el.setAttribute('name', this.label);
    }
  }

  componentDidLoad() {
    if (this.value) {
      const checkboxes = this.getChecks();
      for (let item of checkboxes) {
        item.checked = this.value.includes(item.value);
      }
    }
  }

  formResetCallback() {
    this.value = this.originalValue;
  }

  private getChecks() {
    const elements = this.el.querySelectorAll('je-checkbox-option');
    return Array.from(elements);
  }

  @Watch('value')
  handleValueChange() {
    this.valueChange.emit(this.value);
    const checkboxes = this.getChecks();
    for (let checkbox of checkboxes) {
      const includes = this.value.includes(checkbox.value);
      if (checkbox.checked != includes) {
        checkbox.checked = includes;
      }
    }
  }

  @Listen('check')
  handleCheck(ev: CustomEvent<any>) {
    this.value = [ev.detail, ...this.value];
  }

  @Listen('uncheck')
  handleUncheck(ev: CustomEvent<any>) {
    this.value = this.value.filter(t => t !== ev.detail);
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
