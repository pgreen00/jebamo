import { Component, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss',
  scoped: true
})
export class JeForm {
  private el!: HTMLFormElement;

  @Event() formData: EventEmitter<FormData>;

  /**
   * Removes the default gap between elements passed in
   */
  @Prop() gap: 'none' | 'default' = 'default';

  @Listen('submit')
  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(this.el);
    this.formData.emit(formData)
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
