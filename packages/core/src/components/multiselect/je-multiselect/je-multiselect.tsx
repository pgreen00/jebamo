import { Component, Host, h, Element, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'je-multiselect',
  styleUrl: 'je-multiselect.scss',
  shadow: true,
  formAssociated: true
})
export class JeMultiselect {
  @Element() el: HTMLElement;
  private inputEl!: HTMLJeInputElement;
  private originalValue?: string;
  @State() open = false;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop({ mutable: true }) value?: string;
  @Prop() expand?: boolean;
  @Prop() required?: boolean;

  componentDidLoad() {
    this.originalValue = this.value;
  }

  componentWillLoad() {
    if (!this.el.getAttribute('name') && this.label) {
      this.el.setAttribute('name', this.label);
    }
  }

  formResetCallback() {
    this.value = this.originalValue;
    const options = Array.from(this.el.querySelectorAll('je-select-option'));
    if (!options.some(t => t.value === this.value)) {
      this.inputEl.value = '';
    }
  }

  @Listen('didPresent')
  handlePopoverPresent() {
    this.open = true;
  }

  @Listen('didDismiss')
  handlePopoverDismiss() {
    this.open = false;
    const options = this.el.querySelectorAll('je-select-option');
    options.forEach(option => option.classList.remove('focus'));
  }

  @Listen('optionSelected')
  handleOptionSelected(event: CustomEvent<string>) {
    this.value = event.detail;
  }

  @Watch('value')
  handleValueChange() {
    const options = this.el.querySelectorAll('je-select-option');
    options.forEach(option => {
      if (option.value === this.value) {
        option.selected = true;
        this.inputEl.value = option.textContent || option.value;
      } else {
        option.selected = false;
      }
    });
  }

  render() {
    return (
      <Host>
        <je-input ref={el => this.inputEl = el}
          exportparts='outer-container, start-container, end-container, native-input, content'
          dropdown={true}
          label={this.label}
          placeholder={this.placeholder}
          noTyping={true}
          expand={this.expand}
          dismissOnClick={true}
          required={this.required}
        >
          <slot onSlotchange={() => this.handleValueChange()} slot='dropdown' />
          <je-icon slot='end' icon='expand_more' class={{ open: this.open }} />
        </je-input>
      </Host>
    );
  }
}
