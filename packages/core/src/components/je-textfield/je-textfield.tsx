import { Component, Host, Prop, h, Element, State, Event, EventEmitter, AttachInternals, forceUpdate, Method, Listen, Watch } from '@stencil/core';
import { format, parseISO } from 'date-fns';
import { debounceEvent } from '../../utils/debounce-event';

export type InputTransformer<T = any> = {
  to?: (value: string) => T;
  from?: (value: T) => string;
}

export type FormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => string | Promise<string>;

export type ValidationFn = (value: string) => string[];

@Component({
  tag: 'je-textfield',
  styleUrl: 'je-textfield.css',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeTextfield {
  private inputEl!: HTMLInputElement | HTMLTextAreaElement;
  private invalid = false;
  //private containerEl!: HTMLElement;

  @Element() hostEl!: HTMLJeTextfieldElement;
  @AttachInternals() internals: ElementInternals;
  @State() touched = false;
  @State() showPassword = false;

  /**
   * The default value the control will reset to in a form.
   * If not set, will default to the inital value of the "value" property.
   */
  @Prop({ mutable: true }) originalValue?: string;

  /**
   * Current value of the input
   */
  @Prop({ mutable: true }) value: any;

  /**
   * Text above the control
   */
  @Prop() label?: string;

  /**
   * Informational message directly below the control
   */
  @Prop() note?: string;

  /**
   * Renders input as disabled and prevents changes
   */
  @Prop() disabled = false;

  /**
   * Renders input as read only and prevents changes
   */
  @Prop() readonly = false;

  /**
   * Passed to native input
   */
  @Prop() autoCapitalize = 'off';

  /**
   * Passed to native input
   */
  @Prop() autoComplete = 'off';

  /**
   * Passed to native input
   */
  @Prop() autoCorrect: 'off' | 'on' = 'off';

  /**
   * Passed to native input
   */
  @Prop() autoFocus?: boolean;

  /**
   * Passed to native input
   */
  @Prop() inputMode: string;

  /**
   * Passed to native input
   */
  @Prop() min?: any;

  /**
   * Passed to native input
   */
  @Prop() max?: any;

  /**
   * Passed to native input
   */
  @Prop() minlength?: number;

  /**
   * Passed to native input
   */
  @Prop() maxlength?: number;

  /**
   * Passed to native textarea
   */
  @Prop() wrap?: string;

  /**
   * Passed to native input
   */
  @Prop() pattern?: string;

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
   * Container size
   */
  @Prop() size: 'md' | 'lg' | 'sm' = 'md';

  /**
   * Input placeholder text
   */
  @Prop() placeholder?: string;

  /**
   * Optional debounce of the didInput event
   */
  @Prop() debounce = 0;

  /**
   * Formatters functions that are applied as the user types
   */
  @Prop() format?: FormatterFn;

  /**
   * Validator function for form participation
   */
  @Prop() validate?: ValidationFn;

  /**
   * Transforms the value before it is passed to the input (from) and after the input emits a new value (to).
   *
   * There are built-in transformers for 'number', 'date', and 'datetime'.
   */
  @Prop() transform?: InputTransformer | 'number' | 'date' | 'datetime' | 'password';

  /**
   * Whether the control is a multiline textarea
   */
  @Prop() multiline = false;

  /**
   * Emits as the user types
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<any>;

  componentWillLoad() {
    if (!this.originalValue) this.originalValue = this.value;
    if (this.debounce) this.valueChange = debounceEvent(this.valueChange, this.debounce);
  }

  componentDidLoad() {
    this.internals.role = 'textbox';
    if (this.value) this.internals.setFormValue(this.value);
  }

  async componentWillRender() {
    const { hasError, minLengthError, maxLengthError, requiredError, patternError, customErrors } = await this.getErrors();
    this.invalid = hasError;
    if (hasError) {
      const errorMessage = requiredError
        ? 'This field is required'
        : minLengthError
          ? `This field must be at least ${this.minlength} characters long`
          : maxLengthError
            ? `This field must be less than ${this.maxlength} characters long`
            : patternError
              ? `Invalid pattern`
              : customErrors[0];
      this.internals.setValidity(
        {
          valueMissing: requiredError,
          tooShort: minLengthError,
          tooLong: maxLengthError,
          patternMismatch: patternError,
          customError: customErrors.length > 0,
        },
        errorMessage,
      );
      if (this.touched) {
        this.internals.reportValidity();
      }
    } else {
      this.internals.setValidity({});
    }
  }

  componentDidRender() {
    this.internals.ariaLabel = this.label || this.hostEl.querySelector('[slot=label]')?.textContent
    this.internals.ariaDescription = this.note || this.hostEl.querySelector('[slot=note]')?.textContent
    this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false'
    this.internals.ariaRequired = this.required ? 'true' : 'false'
    this.internals.ariaDisabled = this.disabled ? 'true' : 'false'
    this.internals.ariaReadOnly = this.readonly ? 'true' : 'false'
    this.internals.ariaMultiLine = this.multiline ? 'true' : 'false'
    this.internals.ariaPlaceholder = this.placeholder || this.hostEl.querySelector('[slot=placeholder]')?.textContent
    this.internals.ariaAutoComplete = this.autoComplete

    this.internals.states.clear()
    this.internals.states.add(this.invalid ? '--invalid' : '--valid');
    if (this.touched) this.internals.states.add(this.invalid ? '--user-invalid' : '--user-valid')
    this.internals.states.add(this.required ? '--required' : '--optional')
    this.internals.states.add(this.disabled ? '--disabled' : '--enabled')
    this.internals.states.add(this.readonly ? '--readonly' : '--readwrite')
    this.internals.states.add(this.multiline ? '--multiline' : '--singleline')
    this.internals.states.add(this.value ? '--filled' : '--empty')
  }

  formResetCallback() {
    this.touched = false;
    this.value = this.originalValue;
    this.valueChange.emit(this.value);
  }

  @Watch('value')
  handleValueChange() {
    this.internals.setFormValue(this.value || null);
  }

  @Method()
  async getInputElement() {
    return this.inputEl;
  }

  @Method()
  async markAsTouched() {
    this.touched = true;
  }

  @Method()
  async getErrors() {
    const requiredError = this.required && (this.value ?? '') === '';
    const minLengthError = this.minlength && (this.value ?? '').length < this.minlength;
    const maxLengthError = this.maxlength && (this.value ?? '').length > this.maxlength;
    const patternError = this.pattern && !new RegExp(this.pattern).test(this.value ?? '');
    const customErrors = this.validate?.(this.value) || [];
    return {
      requiredError,
      minLengthError,
      maxLengthError,
      patternError,
      customErrors,
      hasError: requiredError || minLengthError || maxLengthError || patternError || customErrors.length > 0,
    };
  }

  @Method()
  async isTouched() {
    return this.touched;
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (this.multiline && ev.key === 'Enter' && ev.shiftKey)
      ev.stopPropagation()
  }

  @Listen('invalid')
  handleInvalid(ev: Event) {
    //ev.stopPropagation();
    console.log(ev.composedPath())
  }

  private getTransformer = () => {
    if (this.transform === 'number') {
      return {
        to: (value: string) => parseFloat(value),
        from: (value: number) => value.toString(),
      };
    } else if (this.transform === 'date') {
      return {
        to: (value: string) => (value ? parseISO(value).getTime() : value),
        from: (value: any) => (value ? format(value, 'yyyy-MM-dd') : value),
      };
    } else if (this.transform === 'datetime') {
      return {
        to: (value: string) => (value ? parseISO(value).getTime() : value),
        from: (value: any) => (value ? format(value, "yyyy-MM-dd'T'HH:mm:ss") : value),
      };
    } else if (this.transform === 'password') {
      return {
        to: (value: string) => value && '•'.repeat(value.length),
        from: () => this.value,
      };
    } else {
      return this.transform;
    }
  };

  private formatInput = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input && this.format) {
      input.value = await this.format(input.value, this.value, ev);
    }
  };

  private handleInput = (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      const transformer = this.getTransformer();
      this.value = transformer?.to ? transformer.to(input.value) : input.value;
      this.valueChange.emit(this.value);
    }
  };

  private onFocus = () => {
    if (this.touched) forceUpdate(this.hostEl);
    else this.touched = false;
  }

  render() {
    const transformer = this.getTransformer();
    return (
      <Host>
        <div part="container" class={{ [this.size]: true, disabled: this.disabled, multiline: this.multiline }}>
          <slot name="start" />

          <slot name='label'>
            {this.label && <je-label part='label' required={this.required}>{this.label}</je-label>}
          </slot>

          {this.multiline ? (
            <textarea
              part="textarea"
              tabindex={0}
              ref={el => (this.inputEl = el)}
              onInputCapture={this.formatInput}
              onInput={this.handleInput}
              onFocus={this.onFocus}
              autoCapitalize={this.autoCapitalize}
              autoComplete={this.autoComplete}
              autoCorrect={this.autoCorrect}
              autoFocus={this.autoFocus}
              disabled={this.disabled}
              maxLength={this.maxlength}
              minLength={this.minlength}
              placeholder={this.placeholder}
              readonly={this.readonly}
              required={this.required}
              spellcheck={this.spellcheck}
              wrap={this.wrap}
              value={transformer?.from ? transformer.from(this.value) : this.value}
            />
          ) : (
            <input
              part='input'
              tabindex={0}
              ref={el => (this.inputEl = el)}
              onInputCapture={this.formatInput}
              onInput={this.handleInput}
              onFocus={this.onFocus}
              disabled={this.disabled}
              autoCapitalize={this.autoCapitalize}
              autoComplete={this.autoComplete}
              autoCorrect={this.autoCorrect}
              autoFocus={this.autoFocus}
              inputMode={this.inputMode}
              min={this.min}
              max={this.max}
              minLength={this.minlength}
              maxLength={this.maxlength}
              pattern={this.pattern}
              readOnly={this.readonly}
              required={this.required}
              spellcheck={this.spellcheck}
              step={this.step}
              value={transformer?.from ? transformer.from(this.value) : this.value}
              placeholder={this.placeholder}
            />
          )}

          {this.transform === 'password' && (
            <je-button size="sm" onClick={() => (this.showPassword = !this.showPassword)}>
              {this.showPassword ? eyeOff : eye}
            </je-button>
          )}

          <slot name="end" />
        </div>

        <slot name='note'>
          {this.invalid && this.touched ? (
            <je-note part='note' invalid>{this.internals.validationMessage}</je-note>
          ) : this.note ? (
            <je-note part='note'>{this.note}</je-note>
          ) : null}
        </slot>
      </Host>
    );
  }
}

const eye = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>;
const eyeOff = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>;
