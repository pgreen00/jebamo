import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';
import { AsyncSubject, buffer, debounceTime, fromEvent, Subscription, switchMap } from 'rxjs';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.css',
  scoped: true
})
export class JeForm {
  private el$ = new AsyncSubject<HTMLFormElement>();
  private sub?: Subscription;

  @Event() formData: EventEmitter<Record<string, any>>;

  connectedCallback() {
    this.sub = this.el$.pipe(switchMap(el => {
      const ev$ = fromEvent(el, 'invalid', { capture: true })
      return ev$.pipe(buffer(ev$.pipe(debounceTime(100))))
    })).subscribe(events => {
      const firstInvalidElement = events[0].target as HTMLElement;
      if (firstInvalidElement && !firstInvalidElement.matches(':focus'))
        firstInvalidElement.focus();
    });
  }

  disconnectedCallback() {
    this.sub?.unsubscribe();
  }

  @Listen('submit')
  async onSubmit(event: SubmitEvent) {
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
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.el$.subscribe(el => el.querySelector<HTMLButtonElement>('button[type=submit]')?.click())
    }
  }

  private formElementInit = (el: HTMLFormElement) => {
    this.el$.next(el);
    this.el$.complete();
  }

  render() {
    return (
      <form ref={this.formElementInit}>
        <slot />
      </form>
    );
  }
}
