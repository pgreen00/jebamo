import { AttachInternals, Component, Element, Event, EventEmitter, Host, Listen, Prop, State, forceUpdate, h } from '@stencil/core';

@Component({
  tag: 'je-select',
  styleUrl: 'je-select.scss',
  shadow: {
    delegatesFocus: true
  },
  formAssociated: true
})
export class JeSelect {
  @Element() hostEl!: HTMLJeSelectElement;
  @AttachInternals() internals: ElementInternals;
  @State() open = false;
  @State() content?: string;

  @Prop() value: any;
  @Prop() label?: string;
  @Prop() disabled = false;
  @Prop() required = false;
  @Prop() placeholder?: string;
  @Prop() note?: string;
  @Prop() multiple = false;
  @Prop() originalValue: any;
  @Prop() options?: { value: any, label: string }[];
  @Prop() size: 'md' | 'lg' | 'sm' = 'md';

  @Event() valueChange: EventEmitter<any>;

  componentWillLoad() {
    if (this.originalValue === undefined) this.originalValue = this.value;
  }

  componentDidLoad() {
    this.internals.setFormValue(this.value);
  }

  componentWillRender() {
    this.getOptions().forEach(option => option.selected = option.value === this.value);
  }

  componentDidRender() {
    this.internals.ariaLabel = this.label || this.hostEl.querySelector('[slot=label]')?.textContent
    this.internals.ariaDescription = this.note || this.hostEl.querySelector('[slot=note]')?.textContent
    this.internals.ariaInvalid = this.internals.validity.valid ? 'true' : 'false';
    this.hostEl.title = this.note || this.placeholder || this.label
  }

  private getOptions() {
    return Array.from(this.hostEl.querySelectorAll('je-option'));
  }

  private isOption(target: EventTarget | null): target is (HTMLJeOptionElement) {
    return target instanceof HTMLElement && (target.tagName == 'JE-OPTION')
  }

  @Listen('click')
  onClick(ev: Event) {
    const { target } = ev;
    if (this.isOption(target)) {
      this.value = target.value;
      this.valueChange.emit(this.value);
      this.content = target.textContent;
    }
  }

  render() {
    return (
      <Host role='listbox'>
        <je-popover arrow={false} placement='bottom' matchWidth={true} onWillPresent={() => this.open = true} onWillDismiss={() => this.open = false}>
          <button class={this.size} disabled={this.disabled} slot='trigger' tabindex={0} type='button'>
            <slot name='start'/>
            <slot name='label'>
              {this.label && <je-label required={this.required}>{this.label}</je-label>}
            </slot>
            <span part='content' class={{placeholder: !this.content && !!this.placeholder}}>{this.content || this.placeholder || null}</span>
            <slot name='end'/>
            <je-icon class={{open: this.open}}>keyboard_arrow_down</je-icon>
          </button>
          <div role='group'>
            <slot onSlotchange={() => forceUpdate(this.hostEl)}>
              {this.options?.map(option => (
                <je-option>{option.label}</je-option>
              ))}
            </slot>
          </div>
        </je-popover>
        <slot name='note'>
          {this.note && <je-note>{this.note}</je-note>}
        </slot>
      </Host>
    );
  }
}
