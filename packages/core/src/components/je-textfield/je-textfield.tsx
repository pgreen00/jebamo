import { Component, Host, Prop, h, Element, State, Event, EventEmitter, AttachInternals, forceUpdate, Method, Listen, Watch } from '@stencil/core';
import { format, parseISO } from 'date-fns';
import { debounceEvent } from '../../utils/utils';

export type InputTransformer<T = any> = {
  to?: (value: string) => T;
  from?: (value: T) => string;
}

export type FormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => string | Promise<string>;

export type ValidationFn = (value: string) => string[] | Promise<string[]>;

@Component({
  tag: 'je-textfield',
  styleUrl: 'je-textfield.scss',
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
   * Text above the control
   */
  @Prop() label?: string;

  /**
   * Renders input as disabled and prevents changes
   */
  @Prop() disabled = false;

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
   * Container size
   */
  @Prop() size: 'md' | 'lg' | 'sm' = 'md';

  /**
   * Passed to native input
   */
  @Prop({ mutable: true }) type = 'text';

  /**
   * Current value of the input
   */
  @Prop({ mutable: true }) value: any;

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
   * Validator functions for form participation
   */
  @Prop() validators?: ValidationFn[];

  /**
   * Informational message directly below the control
   */
  @Prop() note?: string;

  /**
   * Transforms the value before it is passed to the input (from) and after the input emits a new value (to).
   *
   * There are built-in transformers for 'number', 'date', and 'datetime'.
   */
  @Prop() transform?: InputTransformer | 'number' | 'date' | 'datetime';

  /**
   * Whether the control is a multiline textarea
   */
  @Prop() multiline = false;

  /**
   * Shows a loading indicator in the end slot when true
   */
  @Prop() pending = false;

  private internalErrorProp?: boolean | string;
  /**
   * Shows an error icon in the end slot when true. If a string is passed in, it will render the icon as a tooltip.
   * Has no effect on form validation
   */
  @Prop() get error() {
    return this.internalErrorProp;
  }
  set error(value: any) {
    if (value === 'true' || value === '') {
      this.internalErrorProp = true;
    } else if (value === 'false') {
      this.internalErrorProp = false;
    } else {
      this.internalErrorProp = value;
    }
  }

  /**
   * Shows a success icon in the end slot when true. Has no effect on form validation
   */
  @Prop() success = false;

  /**
   * Emits as the user types
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<any>;

  componentWillLoad() {
    if (!this.originalValue) this.originalValue = this.value;
    if (this.debounce) this.valueChange = debounceEvent(this.valueChange, this.debounce);
  }

  componentDidLoad() {
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
  }

  @Watch('value')
  handleValueChange() {
    this.internals.setFormValue(this.value || null);
    this.valueChange.emit(this.value);
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
    ev.preventDefault();
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
    }
  };

  private onFocus = () => {
    if (this.touched) forceUpdate(this.hostEl);
    else this.touched = true;
  }

  render() {
    const transformer = this.getTransformer();
    const noLabel = { empty: !this.label && !this.hostEl.querySelector('[slot=label]') };
    const noNote = { empty: !this.note && !this.hostEl.querySelector('[slot=note]') };
    return (
      <Host>
        <div part="container" class={{ [this.size]: true, disabled: this.disabled, multiline: this.multiline }}>
          <slot name="start" />

          <je-label aria-hidden="true" id='label' part='label' required={this.required}>
            <slot name="label" { ...noLabel } onSlotchange={() => forceUpdate(this.hostEl)}>
              {this.label && <span>{this.label}</span>}
            </slot>
          </je-label>

          {this.multiline ? (
            <textarea
              part="textarea"
              aria-describedby='note'
              aria-labelledby='label'
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
              aria-describedby='note'
              aria-labelledby='label'
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
              type={this.type == 'password' && this.showPassword ? 'text' : this.type}
              value={transformer?.from ? transformer.from(this.value) : this.value}
              placeholder={this.placeholder}
            />
          )}

          {this.type === 'password' && (
            <je-icon-button size="sm" icon={this.showPassword ? 'visibility_off' : 'visibility'} onClick={() => (this.showPassword = !this.showPassword)} />
          )}

          <slot name="end" />

          {this.pending && <je-loading/>}
          {this.success && <je-color color="success"><je-icon fill size="sm">check_circle</je-icon></je-color>}
          {this.error && typeof this.error === 'string' ? (
            <je-tooltip>
              <je-color color="danger">
                <je-icon fill size="sm">error</je-icon>
              </je-color>
              <div slot="content">{this.error}</div>
            </je-tooltip>
          ) : this.error ? (
            <je-color color="danger">
              <je-icon fill size="sm">error</je-icon>
            </je-color>
          ) : null}
        </div>

        <je-note aria-hidden="true" id='note' part='note' invalid={this.invalid && this.touched}>
          {this.invalid && this.touched ? (
            <span>{this.internals.validationMessage}</span>
          ) : (
            <slot name="note" { ...noNote } onSlotchange={() => forceUpdate(this.hostEl)}>
              {this.note && <span>{this.note}</span>}
            </slot>
          )}
        </je-note>
      </Host>
    );
  }
}
