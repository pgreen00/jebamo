import { Component, Listen, Method, Prop, h } from '@stencil/core';

export type FormValidationFn = (elements: HTMLFormControlsCollection) => Promise<string[]>;

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss'
})
export class JeForm {
  private el!: HTMLFormElement;

  /** Form level validators */
  @Prop() validators?: FormValidationFn[];

  @Listen('submit', { capture: true })
  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.markAllAsTouched();
    let errors: string[] = [];
    if (this.validators) {
      for (const validator of this.validators) {
        const result = await validator(this.el.elements);
        errors = [...errors, ...result];
      }
    }
    if (!this.el.checkValidity() || errors.length) {
      event.stopImmediatePropagation();
    }
  }

  @Listen('keydown', { capture: true })
  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.el.dispatchEvent(new Event('submit', {
        bubbles: true,
        cancelable: true
      }));
    }
  }

  @Method()
  markAllAsTouched() {
    return new Promise<void>(resolve => {
      const elements = this.el.querySelectorAll('je-select, je-input');
      elements.forEach((el: any) => {
        el.markAsTouched();
      });
      resolve();
    });
  }

  render() {
    return (
      <form ref={el => this.el = el}>
        <slot />
      </form>
    );
  }
}
