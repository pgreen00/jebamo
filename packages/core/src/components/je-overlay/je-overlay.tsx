import { Component, Host, h, Prop, Element, Watch, Method, EventEmitter, Event, Listen, State } from '@stencil/core';
import { isFirefox, OverlayData } from '../../utils/utils';

@Component({
  tag: 'je-overlay',
  styleUrl: 'je-overlay.scss',
  shadow: true,
})
export class JeOverlay {
  private role?: string;
  private data?: any;
  private dialogEl!: HTMLDialogElement;
  private startY = 0;
  private startHeightPx = 0;
  private dragging = false;
  private get minPx() {
    return window.innerHeight * (30 / 100);
  }
  private get midPx() {
    return window.innerHeight * (80 / 100);
  }
  private get maxPx() {
    return window.innerHeight * (95 / 100);
  }
  @Element() el!: HTMLElement;
  @State() currentHeightPx = 0;

  /** Backdrop will close the modal on click when enabled */
  @Prop() backdropDismiss = true;

  /** Opens and closes modal */
  @Prop({ mutable: true }) open = false;

  /** Size of the overlay */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /** Side of the screen where the drawer will be displayed */
  @Prop({ reflect: true }) side?: 'left' | 'right' | 'bottom' | 'top';

  /** Optionally execute a promise before presentation begins */
  @Prop() init?: () => void | Promise<void>;

  /** Optionally execute a promise after closing completes */
  @Prop() destroy?: () => void | Promise<void>;

  /** Emits whenever the drawer has opened. Does not emit any data */
  @Event() present: EventEmitter;

  /** Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method. */
  @Event() dismiss: EventEmitter<OverlayData>;

  /** Emits whenever the backdrop is clicked. Does not emit any data */
  @Event() backdropClick: EventEmitter;

  private animateBackdrop(enter: boolean) {
    if (!isFirefox()) {
      const keyframes = [{ opacity: 0 }, { opacity: 1 }]
      if (!enter) keyframes.reverse()
      this.dialogEl.animate(keyframes, {
        duration: 200,
        pseudoElement: '::backdrop'
      })
    }
  }

  private animateDialog(enter: boolean) {
    const to = this.side ? { [this.side]: 'calc(var(--width) * -1)' } : { opacity: 0 }
    const from = this.side ? { [this.side]: '0' } : { opacity: 1 }
    const keyframes = [to, from]
    if (!enter) keyframes.reverse()
    this.animateBackdrop(enter)
    return this.dialogEl.animate(keyframes, 200)
  }

  @Watch('open')
  async onOpenChange(open: boolean) {
    if (open) {
      if (this.init) {
        await this.init();
      }
      this.dialogEl.showModal();
      const animation = this.animateDialog(open)
      animation.onfinish = () => {
        this.present.emit();
      }
    } else {
      const animation = this.animateDialog(open)
      animation.onfinish = async () => {
        this.dialogEl.close();
        if (this.destroy) {
          await this.destroy();
        }
        this.dismiss.emit({ role: this.role, data: this.data });
        this.role = undefined;
        this.data = undefined;
      }
    }
  }

  @Listen('click')
  onClick(event: MouseEvent) {
    if (event.target === this.el.querySelector(':scope > [slot=trigger]')) {
      this.show();
    }
  }

  @Listen('mousedown')
  onMouseDown(event: MouseEvent) {
    if (event.target === this.el) {
      this.backdropClick.emit();
      if (this.backdropDismiss) this.hide('backdropDismiss');
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

  private handleTouchStart = (event: TouchEvent) => {
    this.dragging = true;
    this.startY = event.touches[0].clientY;
    this.startHeightPx = this.currentHeightPx;
  };

  private handleTouchMove = (event: TouchEvent) => {
    if (!this.dragging) return;
    const deltaY = this.startY - event.touches[0].clientY;
    let newHeight = this.startHeightPx + deltaY;
    if (newHeight < this.minPx) newHeight = this.minPx;
    if (newHeight > this.maxPx) newHeight = this.maxPx;
    this.currentHeightPx = newHeight;
  };

  private handleTouchEnd = () => {
    this.dragging = false;
    if (this.currentHeightPx < this.midPx) {
      const midpoint = (this.minPx + this.midPx) / 2;
      this.currentHeightPx = this.currentHeightPx < midpoint ? this.minPx : this.midPx;
    } else {
      const midpoint = (this.midPx + this.maxPx) / 2;
      this.currentHeightPx = this.currentHeightPx < midpoint ? this.midPx : this.maxPx;
    }
  };

  render() {
    return (
      <Host>
        {this.open && this.side === 'bottom' && <style>{`dialog{@media (any-pointer: coarse) {--width:${this.currentHeightPx}px;}}`}</style>}
        <slot name="trigger" />
        <dialog ref={el => this.dialogEl = el} part="dialog">
          {this.side === 'bottom' && <div class="drag" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}/>}
          <slot />
        </dialog>
      </Host>
    );
  }
}
