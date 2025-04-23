import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';
import { AsyncSubject, buffer, debounceTime, fromEvent, Subscription, tap } from 'rxjs';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.scss',
  scoped: true
})
export class JeForm {
  private el$ = new AsyncSubject<HTMLFormElement>();
  private sub?: Subscription;

  @Event() formData: EventEmitter<Record<string, any>>;

  connectedCallback() {
    this.el$.subscribe(this.setupEventListener);
  }

  disconnectedCallback() {
    this.sub?.unsubscribe();
  }

  @Listen('submit')
  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.el$.subscribe(el => {
      const formData = new FormData(el);
      let json: Record<string, any> = {};
      for (const [key, value] of formData.entries()) {
        if (Array.isArray(json[key])) {
          json[key].push(value);
        } else if (json[key]) {
          json[key] = [json[key], value];
        } else {
          json[key] = value;
        }
      }
      this.formData.emit(json);
    })
  }

  @Listen('keydown')
  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.el$.subscribe(el => el.querySelector<HTMLButtonElement>('button[type=submit]')?.click())
    }
  }

  private setupEventListener = (el: HTMLFormElement) => {
    const ev$ = fromEvent(el, 'invalid', { capture: true })
    this.sub = ev$.pipe(
      tap(ev => ev.preventDefault()),
      buffer(ev$.pipe(debounceTime(100)))
    ).subscribe(events => {
      const firstInvalidElement = events[0].target as HTMLElement;
      if (firstInvalidElement && 'reportValidity' in firstInvalidElement && typeof firstInvalidElement['reportValidity'] === 'function')
        firstInvalidElement.reportValidity();
      else if (firstInvalidElement && !firstInvalidElement.matches(':focus'))
        firstInvalidElement.focus();
    })
  }

  private formElementInit = (el: HTMLFormElement) => {
    this.el$.next(el);
    this.el$.complete();
  }

  render() {
    return (
      <form ref={this.formElementInit}>
        <slot/>
      </form>
    );
  }
}
