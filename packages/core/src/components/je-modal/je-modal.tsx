import { Component, Host, h, Element, Event, EventEmitter, Method, Prop, Watch, Listen } from '@stencil/core';
import { OverlayData } from '../../utils/utils';

@Component({
  tag: 'je-modal',
  styleUrl: 'je-modal.scss',
  shadow: true,
})
export class JeModal {
  private role?: string;
  private data?: any;
  private dialogEl!: HTMLDialogElement;

  @Element() el!: HTMLJeModalElement;

  /** Whether or not the backdrop will be visible to the user */
  @Prop() showBackdrop = true;

  /** Backdrop will close the modal on click when enabled */
  @Prop() backdropDismiss = true;

  /** Opens and closes modal */
  @Prop({ mutable: true }) open = false;

  /** Size of the modal */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'lg';

  /** Optionally execute a promise before presentation begins */
  @Prop() init?: () => void | Promise<void>;

  /** Optionally execute a promise before closing begins */
  @Prop() destroy?: () => void | Promise<void>;

  /** Emits whenever the modal has opened. Does not emit any data */
  @Event() present: EventEmitter;

  /** Emits whenever the modal has finished closing. Emits the role and optional data object passed to the hide() method. */
  @Event() dismiss: EventEmitter<OverlayData>;

  /** Emits whenever the backdrop is clicked. Does not emit any data */
  @Event() backdropClick: EventEmitter;

  @Watch('open')
  async onOpenChange(open: boolean) {
    if (open) {
      if (this.init) {
        await this.init();
      }
      this.dialogEl.showModal();
    } else {
      this.dialogEl.close();
    }
  }

  @Listen('click')
  onClick(event: MouseEvent) {
    if (event.composedPath().includes(this.dialogEl)) {
      this.backdropClick.emit();
      if (this.backdropDismiss)
        this.hide('backdropDismiss')
    } else if (event.target === this.el.querySelector(':scope > [slot=trigger]')) {
      this.show()
    }
  }

  @Method()
  async show() {
    this.open = true;
  }

  @Method()
  async hide(role = 'manualClose', data?: any) {
    this.role = role;
    this.data = data;
    this.open = false;
  }

  @Method()
  didDismiss() {
    return new Promise<OverlayData>(resolve => this.el.addEventListener('dismiss', ev => resolve(ev.detail), { once: true }));
  }

  private onTransitionEnd = async (event: TransitionEvent) => {
    if (event.target === this.dialogEl && event.propertyName === 'opacity') {
      if (this.open) {
        this.present.emit();
      } else {
        if (this.destroy) {
          await this.destroy();
        }
        this.dismiss.emit({ role: this.role, data: this.data });
        this.role = undefined;
        this.data = undefined;
      }
    }
  }

  render() {
    return (
      <Host>
        <slot name='trigger' />
        <dialog ref={el => this.dialogEl = el} part='dialog' class={{ show: this.showBackdrop, dismiss: this.backdropDismiss }} onTransitionEnd={this.onTransitionEnd}>
          <div part='inner-container' onClick={e => e.stopPropagation()}>
            <slot/>
          </div>
        </dialog>
      </Host>
    );
  }
}
