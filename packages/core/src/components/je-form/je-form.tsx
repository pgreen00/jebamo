import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';
import { buffer, debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss'
})
export class JeForm {
  private el!: HTMLFormElement;

  @Event() formData: EventEmitter<Record<string, FormDataEntryValue>>;

  componentDidLoad() {
    fromEvent(this.el, 'invalid', { capture: true }).pipe(
      tap(ev => ev.preventDefault()),
      buffer(fromEvent(this.el, 'invalid', { capture: true }).pipe(debounceTime(100)))
    ).subscribe(events => {
      const firstInvalidElement = events[0].target as HTMLElement;
      if (firstInvalidElement && !firstInvalidElement.matches(':focus')) {
        firstInvalidElement.focus();
      }
    })
  }

  @Listen('submit')
  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(this.el);
    const json = Object.fromEntries(formData.entries());
    this.formData.emit(json);
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
