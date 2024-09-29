import { Component, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss',
  scoped: true
})
export class JeForm {
  private el!: HTMLFormElement;

  /**
   * Removes the default gap between elements passed in
   */
  @Prop() gap: 'none' | 'default' = 'default';

  @Listen('submit', { capture: true })
  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (!this.el.checkValidity()) {
      event.stopImmediatePropagation();
    }
  }

  @Listen('keydown')
  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const submitButton = this.el.querySelector('button[type=submit]') as HTMLButtonElement | null;
      if (submitButton) {
        submitButton.click();
      }
    }
  }

  render() {
    return (
      <form ref={el => this.el = el}>
        <slot />
      </form>
    );
  }
}
