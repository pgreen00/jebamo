import { Component, h, Element, Event, EventEmitter, Listen, Prop, Watch, AttachInternals, State, Method, Host } from '@stencil/core';
import { setName } from '../../utils/utils';

@Component({
  tag: 'je-checkbox-group',
  styleUrl: 'je-checkbox-group.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class JeCheckboxGroup {
  @Element() el!: HTMLJeCheckboxGroupElement;
  @AttachInternals() internals: ElementInternals;
  @State() customError?: string;
  private popoverEl!: HTMLJePopoverElement;

  /**
   * Default value the control will reset to when used in a form. Will be set automatically when the component loads.
   */
  @Prop({ mutable: true }) defaultValue?: string[];

  /**
   * Label that shows above the controls
   */
  @Prop() label?: string;

  /**
   * Helper text that shows below the controls
   */
  @Prop() helperText?: string;

  /**
   * Requires at least one option to be selected when used in a form
   */
  @Prop() required = false;

  /**
   * Shows disabled state and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Shows readonly state and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Current selected values
   */
  @Prop({ mutable: true }) value: string[] = [];

  /**
   * Emits the current selected values whenever they change
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<string[]>;

  componentWillLoad() {
    if (!Array.isArray(this.value)) this.value = [];

    if (!this.defaultValue) this.defaultValue = this.value;

    setName(this.el, this.label);
  }

  connectedCallback() {
    this.internals.setFormValue(this.value.toString());
  }

  formResetCallback() {
    this.value = this.defaultValue;
  }

  componentWillRender() {
    if (this.customError) {
      this.internals.setValidity({ customError: true }, this.customError);
    } else if (this.required && this.getChecks().every(t => !t.checked)) {
      this.internals.setValidity({ valueMissing: true }, 'Please select at least one option');
    } else {
      this.internals.setValidity({});
      //this.popoverEl.open = false;
    }
  }

  componentDidRender() {
    const checkboxes = this.getChecks();
    for (let item of checkboxes) {
      item.checked = this.value.includes(item.value);
      if (this.disabled) item.disabled = true;
      if (this.readonly) item.readonly = true;
    }

    this.internals.states.clear()
    if (this.disabled) {
      this.internals.states.add('--disabled')
    }
    if (this.readonly) {
      this.internals.states.add('--readonly')
    }
    if (this.required) {
      this.internals.states.add('--required')
    }
  }

  private getChecks() {
    const elements = this.el.querySelectorAll('je-checkbox-option');
    return Array.from(elements);
  }

  @Watch('value')
  handleValueChange() {
    this.valueChange.emit(this.value);
    this.internals.setFormValue(this.value.toString());
  }

  @Listen('click')
  onClick(ev: PointerEvent) {
    if (ev.target instanceof HTMLElement) {
      const checkbox = ev.target.closest('je-checkbox-option');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          this.value = [...this.value, checkbox.value];
        } else {
          this.value = this.value.filter(t => t !== checkbox.value);
        }
      }
    }
  }

  @Listen('blur')
  onBlur() {
    this.popoverEl.open = false
  }

  @Method()
  async reset() {
    this.formResetCallback();
  }

  @Method()
  async setCustomValidity(message?: string) {
    this.customError = message;
  }

  @Method()
  async checkValidity() {
    return this.internals.validity.valid;
  }

  @Method()
  async reportValidity() {
    if (this.internals.validity.valid) {
      return true;
    } else {
      this.popoverEl.open = true;
      this.el.focus();
      return false;
    }
  }

  render() {
    return (
      <Host>
        <je-popover triggerAction='manual' placement='top' arrow={true} ref={el => this.popoverEl = el} renderBackdrop={false}>
          <div slot='trigger' tabindex={0}>
            <slot name="label">
              {this.label && <label part="label">{this.label}</label>}
            </slot>
          </div>
          <div part="error-message">{this.internals.validationMessage}</div>
        </je-popover>
        <div>
          <slot />
        </div>
        <slot name="helper-text">
          {this.helperText && <small part="helper-text">{this.helperText}</small>}
        </slot>
      </Host>
    );
  }
}
