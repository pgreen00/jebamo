import { Component, Event, EventEmitter, Listen, Method, h } from '@stencil/core';
import { buffer, debounceTime, firstValueFrom, share, Subject, Subscription, take } from 'rxjs';

@Component({
  tag: 'je-form',
  styleUrl: 'je-form.css',
  scoped: true
})
export class JeForm {
  private el: HTMLFormElement;
  private sub?: Subscription;
  private invalidElements$ = new Subject<HTMLElement>();
  private buffer$ = this.invalidElements$.pipe(
    buffer(this.invalidElements$.pipe(debounceTime(100))),
    share()
  );

  @Event() dataSubmit: EventEmitter<Record<string, any>>;

  connectedCallback() {
    this.sub = this.buffer$.subscribe();
  }

  disconnectedCallback() {
    this.sub?.unsubscribe();
  }

  @Listen('submit')
  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(this.el);
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
    this.dataSubmit.emit(json);
  }

  @Listen('keydown')
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.el.querySelector<HTMLButtonElement>('button[type=submit]')?.click()
    }
  }

  @Method()
  async addInvalidSubmission(element: HTMLElement) {
    this.invalidElements$.next(element)
    const elements = await firstValueFrom(this.buffer$.pipe(take(1)))
    return element === elements[0]
  }

  render() {
    return (
      <form ref={el => this.el = el}>
        <slot />
      </form>
    );
  }
}
