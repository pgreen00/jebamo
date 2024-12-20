import { Component, h, Element, Event, EventEmitter, Listen, Prop, Watch, AttachInternals, State, Method, forceUpdate } from '@stencil/core';
import { setName } from '../../../utils/utils';

@Component({
  tag: 'je-checkbox-group',
  styleUrl: 'je-checkbox-group.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeCheckboxGroup {
  @Element() el!: HTMLJeCheckboxGroupElement;
  @AttachInternals() internals: ElementInternals;
  @State() isTouched = false;
  private errorEl?: HTMLElement;

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
  @Prop({ reflect: true }) required = false;

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
    if (!Array.isArray(this.value))
      this.value = [];

    if (!this.defaultValue)
      this.defaultValue = this.value;

    setName(this.el, this.label);

    if (!this.el.getAttribute('tabindex'))
      this.el.setAttribute('tabindex', '0');
  }

  componentDidLoad() {
    const checkboxes = this.getChecks();
    for (let item of checkboxes) {
      item.checked = this.value.includes(item.value);
      if (this.disabled)
        item.disabled = true;
      if (this.readonly)
        item.readonly = true;
    }
  }

  connectedCallback() {
    this.internals.setFormValue(this.value.toString());
  }

  formResetCallback() {
    this.value = this.defaultValue;
    this.isTouched = false;
  }

  componentWillRender() {
    if (this.required && !this.getChecks().filter(t => t.checked).length) {
      this.internals.setValidity({ valueMissing: true }, 'Please select at least one option');
    } else {
      this.internals.setValidity({});
    }
    if (this.isTouched) {
      this.internals.reportValidity();
    }
  }

  componentDidRender() {
    if (this.isTouched && !this.internals.checkValidity()) {
      this.errorEl?.click();
    }
  }

  private getChecks() {
    const elements = this.el.querySelectorAll('je-checkbox-option');
    return Array.from(elements);
  }

  private isOption(target: EventTarget): target is HTMLJeCheckboxOptionElement {
    return target instanceof HTMLElement && target.tagName.toLowerCase() === 'je-checkbox-option';
  }

  @Watch('value')
  handleValueChange() {
    this.valueChange.emit(this.value);
    this.internals.setFormValue(this.value.toString());
    const checkboxes = this.getChecks();
    for (let checkbox of checkboxes) {
      checkbox.checked = this.value.includes(checkbox.value);
    }
  }

  @Listen('click')
  onClick(ev: PointerEvent) {
    const { target } = ev;
    if (this.isOption(target)) {
      target.checked = !target.checked;
      if (target.checked) {
        this.value = [...this.value, target.value];
      } else {
        this.value = this.value.filter(t => t !== target.value);
      }
    }
  }

    @Listen('focus')
    onFocus() {
      if (this.isTouched)
        forceUpdate(this.el)
      else
        this.isTouched = true
    }

    @Listen('blur')
    onBlur() {
      const po = this.el.shadowRoot.querySelector('je-popover')
      if (po) {
        po.open = false;
      }
    }

  @Method()
  async markAsTouched() {
    this.isTouched = true;
  }

  @Method()
  async reset() {
    this.formResetCallback();
  }

  render() {
    return (
      <div part='base' tabindex={0}>
        <slot name='label'>
          {this.label && <label part='label'>{this.label}</label>}
        </slot>
        <slot></slot>
        <slot name='helper-text'>
          {this.helperText && <small part='helper-text'>{this.helperText}</small>}
        </slot>
        <div part='fixed-container'>
          {this.isTouched && !this.internals.checkValidity() && (
            <je-popover renderBackdrop={false} placement='bottom' arrow={true}>
              <je-color ref={el => this.errorEl = el} slot='trigger' color='error'>
                <je-icon size='sm' fill={true} icon='error' />
              </je-color>
              <div part='error-message'>{this.internals.validationMessage}</div>
            </je-popover>
          )}
          <slot name='fixed' />
        </div>
      </div>
    );
  }
}
