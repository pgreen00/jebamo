import { Component, Host, Prop, h, Element, Event, AttachInternals, EventEmitter, Method, State, Watch } from '@stencil/core';
import { debounceEvent } from '../../utils/utils';

export type FormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => string;
export type AsyncFormatterFn = (newValue: string, oldValue?: string, ev?: InputEvent) => Promise<string>;

export type ValidationFn = (value: string) => string[];
export type AsyncValidationFn = (value: string) => Promise<string[]>;

@Component({
  tag: 'je-input',
  styleUrl: 'je-input.scss',
  shadow: true,
  formAssociated: true
})
export class JeInput {
  private popoverEl!: HTMLJePopoverElement;
  private containerEl!: HTMLDivElement;
  private inputEl!: HTMLInputElement;
  private showPassword = false;
  private errors: string[] = [];
  private originalValue = '';

  @Element() hostEl!: HTMLJeInputElement;
  @AttachInternals() internals: ElementInternals;

  @State() isTouched = false;
  @State() open = false;

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
  @Prop() min?: number | string;

  /**
   * Passed to native input
   */
  @Prop() max?: number | string;

  /**
   * Passed to native input
   */
  @Prop() minLength?: number;

  /**
   * Passed to native input
   */
  @Prop() maxLength?: number;

  /**
   * Passed to native input
   */
  @Prop() multiple = false;

  /**
   * Name used in form, defaults to label value if not provided
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Passed to native input
   */
  @Prop() pattern?: string;

  /**
   * Renders input as read only and prevents changes
   */
  @Prop() readOnly = false;

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
   * Formatter function that gets applied as the user types
   */
  @Prop() format?: FormatterFn | AsyncFormatterFn;

  /**
   * Custom validator functions for form participation
   */
  @Prop() validators?: (ValidationFn | AsyncValidationFn)[];

  /**
   * Will prevent changes, does not change the input's state in any way
   */
  @Prop() noTyping = false;

  /**
   * Helper text directly below the control
   */
  @Prop() helperText?: string;

  /**
   * Whether or not to render a dropdown when input is focused
   */
  @Prop() dropdown = false;

  /**
   * Whether or not the input should expand to the full width of it's container
   */
  @Prop({ reflect: true }) expand?: boolean;

  /**
   * Emits as the user types
   */
  @Event({ bubbles: false }) valueChange: EventEmitter<any>;

  componentWillLoad() {
    if (this.label && !this.name) {
      this.hostEl.setAttribute('name', this.label)
    }
  }

  async componentDidLoad() {
    this.originalValue = this.value;
    const { valueChange, debounce } = this;
    if (debounce) {
      this.valueChange = debounceEvent(valueChange, debounce);
    }
    if (this.format) {
      this.value = await this.format(this.value);
    } else {
      this.validatorsChanged();
    }
  }

  async formResetCallback() {
    this.isTouched = false;
    if (this.value !== this.originalValue && this.hostEl.parentElement.tagName.toLowerCase() !== 'je-select') {
      if (this.format) {
        this.value = await this.format(this.originalValue);
      } else {
        this.value = this.originalValue;
      }
    }
  }

  @Watch('validators')
  async validatorsChanged() {
    this.errors = [];
    if (this.validators) {
      for (const validator of this.validators) {
        const res = await validator(this.value);
        this.errors = [...this.errors, ...res];
      }
    }
    this.setValidity();
  }

  @Watch('required')
  requiredChanged() {
    this.setValidity();
  }

  @Watch('value')
  async valueChanged() {
    if (this.inputEl && this.inputEl.value !== this.value) {
      this.inputEl.value = this.value;
    }
    this.validatorsChanged();
  }

  @Method()
  markAsTouched() {
    return new Promise<void>(resolve => {
      this.isTouched = true;
      resolve();
    });
  }

  @Method()
  hasError() {
    return Promise.resolve(this.errors.length > 0 || (this.required && ((this.value ?? '') === '')));
  }

  @Method()
  reset() {
    return this.formResetCallback();
  }

  private togglePassword = () => {
    this.showPassword = !this.showPassword;
    this.type = this.type == 'text' ? 'password' : 'text';
  }

  private formatInput = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input && this.format) {
      input.value = await this.format(input.value, this.value, ev);
    }
  }

  private handleInput = async (ev: InputEvent) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
      this.valueChange.emit(this.value);
    }
  }

  private handleFocus = async () => {
    this.containerEl.classList.add('focus');
    if (this.dropdown) {
      this.open = true;
      this.hostEl.style.setProperty('--content-width', `${this.hostEl.clientWidth}px`);
      await this.popoverEl.present('element', this.hostEl);
    }
  }

  private handleBlur = () => {
    this.isTouched = true;
    this.containerEl.classList.remove('focus');
    if (this.open) {
      this.popoverEl.dismiss('inputBlur');
      this.open = false;
    }
  }

  private setValidity() {
    const requiredError = this.required && ((this.value ?? '') === '');
    const hasError = this.errors.length > 0 || requiredError;
    if (hasError) {
      if (requiredError) {
        this.internals.setValidity({ valueMissing: true }, `${this.label || 'This field'} is required`, this.inputEl);
      } else {
        this.internals.setValidity({ customError: true }, this.errors[0], this.inputEl);
      }
    } else {
      this.internals.setValidity({});
    }
  }

  render() {
    const requiredIcon = <je-icon style={{ fontSize: '10px', color: 'var(--je-error-500)' }} icon="asterisk"></je-icon>;
    const label = <label part='label' style={{ display: 'flex' }}>{this.label} {this.required && requiredIcon}</label>;
    const invalid = this.errors.length > 0 || (this.required && ((this.value ?? '') === ''));
    const containerClasses = {
      disabled: this.disabled,
      invalid: invalid,
      touched: this.isTouched
    };

    if (invalid && this.isTouched) {
      this.internals.reportValidity();
    }

    return (
      <Host>
        <div ref={el => this.containerEl = el} part='outer-container' class={containerClasses}>
          <div part='start-container'>
            <slot name='start'/>
            {this.label && label}
          </div>

          <input part="native-input"
            ref={el => this.inputEl = el}
            onInputCapture={this.formatInput}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            disabled={this.disabled}
            autoCapitalize={this.autoCapitalize}
            autoComplete={this.autoComplete}
            autoCorrect={this.autoCorrect}
            autoFocus={this.autoFocus}
            inputMode={this.inputMode}
            min={this.min}
            max={this.max}
            minLength={this.minLength}
            maxLength={this.maxLength}
            multiple={this.multiple}
            name={this.name}
            pattern={this.pattern}
            readOnly={this.readOnly || this.noTyping}
            required={this.required}
            spellcheck={this.spellcheck}
            step={this.step}
            type={this.type}
            value={this.value}
            placeholder={this.placeholder} />

          <div part='end-container'>
            <slot name='end'/>
            {!this.showPassword && this.type == 'password' && <je-icon icon="visibility" fill onClick={this.togglePassword}></je-icon>}
            {this.showPassword && this.type == 'text' && <je-icon icon="visibility_off" fill onClick={this.togglePassword}></je-icon>}
          </div>
        </div>

        {this.helperText && <small class="helper">{this.helperText}</small>}

        {this.dropdown && <je-popover exportparts='content' backdropDismiss={false} ref={el => this.popoverEl = el}>
          <slot name='dropdown'></slot>
        </je-popover>}
      </Host>
    );
  }
}
