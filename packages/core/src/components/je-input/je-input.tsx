import { Component, Host, Prop, h, Element, Event, AttachInternals, EventEmitter, Method, State, Watch, Listen, forceUpdate } from '@stencil/core';
import { AsyncFormatterFn, AsyncValidationFn, debounceEvent, FormatterFn, InputTransformer, setName, ValidationFn } from '../../utils/utils';
import { format, parseISO } from 'date-fns';

@Component({
  tag: 'je-input',
  styleUrl: 'je-input.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeInput {
  @Element() hostEl!: HTMLJeInputElement;
  @AttachInternals() internals: ElementInternals;
  @State() isTouched = false;
  @State() showPassword = false;
  private inputEl!: HTMLInputElement;
  private originalValue = '';
  private errorEl?: HTMLElement;
  private invalid = false;

  /**
   * Text above the control
   */
  @Prop() label = '';

  /**
   * Renders input as disabled and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Passed to native input
   */
  @Prop() autocapitalize = 'off';

  /**
   * Passed to native input
   */
  @Prop() autocomplete = 'off';

  /**
   * Passed to native input
   */
  @Prop() autocorrect: 'off' | 'on' = 'off';

  /**
   * Passed to native input
   */
  @Prop() autofocus: boolean;

  /**
   * Passed to native input
   */
  @Prop() inputmode: string;

  /**
   * Passed to native input
   */
  @Prop() min?: number | string;

  /**
   * Passed to native input
   */
  @Prop() max?: number | string;

  /**
   * Passed to native input
   */
  @Prop() minlength?: number;

  /**
   * Passed to native input
   */
  @Prop() maxlength?: number;

  /**
   * Passed to native input
   */
  @Prop() multiple = false;

  /**
   * Passed to native input
   */
  @Prop() pattern?: string;

  /**
   * Renders input as read only and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Marks as required in form and adds asterisk to the end of the label
   */
  @Prop() required = false;

  /**
   * Passed to native input
   */
  @Prop() spellcheck = false;

  /**
   * Passed to native input
   */
  @Prop() step?: string;

  /**
   * Passed to native input
   */
  @Prop({ mutable: true }) type = 'text';

  /**
   * Current value of the input
   */
  @Prop({ mutable: true }) value = '';

  /**
   * Input placeholder text
   */
  @Prop() placeholder = '';

  /**
   * Optional debounce of the didInput event
   */
  @Prop() debounce = 0;

  /**
   * Formatter function that gets applied directly to the input as the user types. Good for input masking.
   *
   * If you are using an input masking library, you can use the getInputElement() method to fetch the inner input.
   */
  @Prop() format?: FormatterFn | AsyncFormatterFn;

  /**
   * Transforms the value before it is passed to the input (from) and after the input emits a new value (to).
   *
   * There are built-in transformers for 'number', 'date', and 'datetime'.
   */
  @Prop() transform?: InputTransformer | 'number' | 'date' | 'datetime';

  /**
   * Custom validator functions for form participation
   */
  @Prop() validators?: (ValidationFn | AsyncValidationFn)[];

  /**
   * Helper text directly below the control
   */
  @Prop() helperText?: string;

  /**
   * Whether or not the input should expand to the full width of it's container
   */
  @Prop({ reflect: true }) expand?: boolean;

  /**
   * Emits as the user types
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<string>;

  connectedCallback() {
    this.internals.setFormValue(this.value);
  }

  componentDidLoad() {
    setName(this.hostEl, this.label);
    this.originalValue = this.value;
    if (this.debounce) {
      this.valueChange = debounceEvent(this.valueChange, this.debounce);
    }
  }

  async componentWillRender() {
    const {
      hasError,
      minLengthError,
      maxLengthError,
      requiredError,
      patternError,
      customErrors
    } = await this.getErrors();
    this.invalid = hasError;
    if (hasError) {
      const errorMessage = requiredError ? 'This field is required' :
        minLengthError ? `This field must be at least ${this.minlength} characters long` :
        maxLengthError ? `This field must be less than ${this.maxlength} characters long` :
        patternError ? `Invalid pattern` :
        customErrors[0];
      this.internals.setValidity({
        valueMissing: requiredError,
        tooShort: minLengthError,
        tooLong: maxLengthError,
        patternMismatch: patternError,
        customError: customErrors.length > 0
      }, errorMessage);
      if (this.isTouched) {
        this.internals.reportValidity();
      }
    } else {
      this.internals.setValidity({});
    }
  }

  componentDidRender() {
    if (this.isTouched && this.invalid) {
      this.errorEl?.click();
    }
    this.internals.states.clear();
    if (this.required) {
      this.internals.states.add('--je-required')
    } else {
      this.internals.states.add('--je-optional')
    }
    if (this.invalid) {
      this.internals.states.add('--je-invalid');
      if (this.isTouched) this.internals.states.add('--je-user-invalid')
    } else {
      this.internals.states.add('--je-valid');
      if (this.isTouched) this.internals.states.add('--je-user-valid')
    }
  }

  formResetCallback() {
    this.isTouched = false;
    this.value = this.originalValue;
  }

  @Listen('themeChange', { target: 'body' })
  onThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.hostEl.toggleAttribute('darkmode', e.detail == 'dark')
  }

  @Listen('focus')
  onFocus() {
    if (this.isTouched)
      forceUpdate(this.hostEl)
    else
      this.isTouched = true
  }

  @Listen('blur')
  onBlur() {
    const po = this.hostEl.shadowRoot.querySelector('je-popover')
    if (po) {
      po.open = false;
    }
  }

  @Watch('value')
  handleValueChange() {
    this.internals.setFormValue(this.value);
    this.valueChange.emit(this.value);
  }

  @Method()
  getInputElement() {
    return Promise.resolve(this.inputEl);
  }

  @Method()
  async markAsTouched() {
    this.isTouched = true;
  }

  @Method()
  async getErrors() {
    const requiredError = this.required && ((this.value ?? '') === '');
    const minLengthError = this.minlength && ((this.value ?? '').length < this.minlength);
    const maxLengthError = this.maxlength && ((this.value ?? '').length > this.maxlength);
    const patternError = this.pattern && !new RegExp(this.pattern).test(this.value ?? '');
    let customErrors: string[] = [];
    if (this.validators) {
      for (const validator of this.validators) {
        const res = await validator(this.value);
        customErrors = [...customErrors, ...res];
      }
    }
    return {
      requiredError,
      minLengthError,
      maxLengthError,
      patternError,
      customErrors,
      hasError: requiredError || minLengthError || maxLengthError || patternError || customErrors.length > 0
    }
  }

  @Method()
  async reset() {
    this.formResetCallback();
  }

  private formatInput = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input && this.format) {
      input.value = await this.format(input.value, this.value, ev);
    }
  }

  private handleInput = (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      const transformer = this.getTransformer();
      this.value = transformer?.to ? transformer.to(input.value) : input.value;
    }
  }

  private getTransformer = () => {
    if (this.transform === 'number') {
      return {
        to: (value: string) => parseFloat(value),
        from: (value: number) => value.toString()
      }
    } else if (this.transform === 'date') {
      return {
        to: (value: string) => parseISO(value).toISOString(),
        from: (value: any) => format(value, "yyyy-MM-dd")
      }
    } else if (this.transform === 'datetime') {
      return {
        to: (value: string) => parseISO(value).toISOString(),
        from: (value: any) => format(value, "yyyy-MM-dd'T'HH:mm:ss")
      }
    } else {
      return this.transform;
    }
  }

  render() {
    const transformer = this.getTransformer();
    return (
      <Host>
        <div part='outer-container' class={{ disabled: this.disabled, touched: this.isTouched }}>
          <div part='start-container'>
            {this.label && <label class={{ required: this.required }} part='label'>{this.label}</label>}
            <slot name='start'/>
          </div>

          <input
            tabindex={0}
            part="native-input"
            ref={el => this.inputEl = el}
            onInputCapture={this.formatInput}
            onInput={this.handleInput}
            disabled={this.disabled}
            autocapitalize={this.autocapitalize}
            autocomplete={this.autocomplete}
            autocorrect={this.autocorrect}
            autofocus={this.autofocus}
            inputmode={this.inputmode}
            min={this.min}
            max={this.max}
            minlength={this.minlength}
            maxlength={this.maxlength}
            multiple={this.multiple}
            pattern={this.pattern}
            readonly={this.readonly}
            required={this.required}
            spellcheck={this.spellcheck}
            step={this.step}
            type={this.type == 'password' && this.showPassword ? 'text' : this.type}
            value={transformer?.from ? transformer.from(this.value) : this.value}
            placeholder={this.placeholder} />

          <div part='end-container'>
            {this.isTouched && this.invalid && (
              <je-popover renderBackdrop={false} placement='top-end' arrow={true}>
                <je-color ref={el => this.errorEl = el} slot='trigger' color='error'>
                  <je-icon size='sm' fill={true} icon='error' />
                </je-color>
                <div part='error-message'>{this.internals.validationMessage}</div>
              </je-popover>
            )}
            <slot name='end'/>
            {this.type == 'password' && (
              <je-icon icon={this.showPassword ? 'visibility_off' : 'visibility'} fill={true} size='sm' onClick={() => (this.showPassword = !this.showPassword)} />
            )}
          </div>
        </div>
        {this.helperText && <small part="helper">{this.helperText}</small>}
      </Host>
    );
  }
}
