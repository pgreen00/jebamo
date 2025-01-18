import { Component, Host, h, Element, Listen, Prop, State, Watch, AttachInternals } from '@stencil/core';

@Component({
  tag: 'je-multiselect',
  styleUrl: 'je-multiselect.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeMultiselect {
  @Element() el: HTMLElement;
  @AttachInternals() internals: ElementInternals;
  @State() isTouched = false;
  @State() open = false;
  private containerEl!: HTMLDivElement;
  private originalValue: string[] = [];
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop({ mutable: true }) value: string[] = [];
  @Prop() expand?: boolean;
  @Prop() required?: boolean;

  componentDidLoad() {
    this.originalValue = this.value;
  }

  componentWillLoad() {
    if (!this.el.getAttribute('name') && this.label) {
      this.el.setAttribute('name', this.label);
    }

    if (!Array.isArray(this.value)) {
      this.value = [this.value];
    }
  }

  formResetCallback() {
    this.value = this.originalValue;
  }

  @Listen('didPresent')
  handlePopoverPresent() {
    this.open = true;
  }

  @Listen('didDismiss')
  handlePopoverDismiss() {
    this.open = false;
    this.el.style.removeProperty('--je-content-width')
    this.containerEl.classList.remove('focus');
  }

  @Listen('themeChange', { target: 'body' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark')
  }

  @Listen('optionChecked')
  handleOptionChecked(event: CustomEvent<string>) {
    this.value = [...this.value, event.detail];
  }

  @Listen('optionUnchecked')
  handleOptionUnchecked(event: CustomEvent<string>) {
    this.value = this.value.filter(t => t !== event.detail);
  }

  @Listen('focus')
  handleFocus() {
    this.containerEl.classList.add('focus');
  }

  @Listen('blur')
  handleBlur() {
    this.isTouched = true;
    if (!this.open) {
      this.containerEl.classList.remove('focus');
    }
  }

  @Watch('value')
  handleValueChange() {
    const options = this.el.querySelectorAll('je-multiselect-option');
    options.forEach(option => {
      if (this.value.includes(option.value)) {
        option.checked = true;
      } else {
        option.checked = false;
      }
    });
  }

  render() {
    const options = Array.from(this.el.querySelectorAll('je-multiselect-option'));
    const requiredIcon = <je-icon style={{ fontSize: '10px', color: 'var(--je-error-500)' }} icon="asterisk" />;
    const label = <label part='label' style={{ display: 'flex' }}>{this.label} {this.required && requiredIcon}</label>;
    const invalid = this.required && ((this.value ?? '') === '');
    const containerClasses = {
      //disabled: this.disabled,
      touched: this.isTouched
    };

    if (invalid && this.isTouched) {
      this.internals.reportValidity();
    }

    return (
      <Host>
        <je-popover placement='bottom-start' exportparts='content' matchWidth={true}>
          <div slot="trigger" ref={el => this.containerEl = el} part='outer-container' class={containerClasses}>
            <div part='start-container'>
              <slot name='start'/>
              {this.label && label}
            </div>

            <div tabindex={0} part='main-container'>
              {this.value.length > 0 && options.filter(t => this.value.includes(t.value)).map(t => <je-pill>{t.textContent}</je-pill>)}
              {(this.value.length < 1 && this.placeholder) && this.placeholder}
            </div>

            <div part='end-container'>
              <slot name='end'/>
              <je-icon icon='expand_more' class={{ open: this.open }} />
            </div>
          </div>
          <slot></slot>
        </je-popover>
      </Host>
    );
  }
}
