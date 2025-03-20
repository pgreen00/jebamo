import { Component, h, Element, EventEmitter, Host, Listen, Method, Prop, Watch, Event, State } from '@stencil/core';
import { OverlayData } from '../../utils/utils';

@Component({
  tag: 'je-action-sheet',
  styleUrl: 'je-action-sheet.scss',
  shadow: true
})
export class JeActionSheet {
  private role?: string;
  private data?: any;
  private dialogEl!: HTMLDialogElement;
  private startY = 0;
  private startHeightPx = 0;
  private dragging = false;
  private get minPx() {
    return window.innerHeight * (this.minPercent / 100);
  }
  private get midPx() {
    return window.innerHeight * (this.midPercent / 100);
  }
  private get maxPx() {
    return window.innerHeight * (this.maxPercent / 100);
  }
  @Element() el!: HTMLElement;

  @State() currentHeightPx = 0;

  /** Opens and closes modal */
  @Prop({ mutable: true }) open = false;

  /** Optionally execute a promise before presentation begins */
  @Prop() init?: () => void | Promise<void>;

  /** Optionally execute a promise before closing begins */
  @Prop() destroy?: () => void | Promise<void>;

  /** Minimum height (collapsed state). */
  @Prop() minPercent = 30;

  /** Intermediate height (mid state). */
  @Prop() midPercent = 60;

  /** Maximum height (expanded fullscreen). */
  @Prop() maxPercent = 90;

  /** Emits whenever the drawer has opened. Does not emit any data */
  @Event() present: EventEmitter;

  /** Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method. */
  @Event() dismiss: EventEmitter<OverlayData>;

  componentWillLoad() {
    this.currentHeightPx = this.minPx;
  }

  @Watch('open')
  async onOpenChange(open: boolean) {
    if (open) {
      if (this.init) {
        await this.init();
      }
      this.dialogEl.showModal();
    } else {
      this.dialogEl.style.removeProperty('--drag-transition');
      this.dialogEl.close();
    }
  }

  @Listen('click')
  onClick(event: MouseEvent) {
    if (event.composedPath().includes(this.dialogEl)) {
      this.hide('backdropDismiss');
    } else if (event.target === this.el.querySelector(':scope > [slot=trigger]')) {
      this.show();
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

  private onTransitionEnd = async (event: TransitionEvent) => {
    if (event.target === this.dialogEl && event.propertyName === 'opacity') {
      if (this.open) {
        this.dialogEl.style.setProperty('--drag-transition', '50ms');
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
  };

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
        <style>{this.open ? `:host{--height:${this.currentHeightPx}px;}` : ''}</style>
        <slot name="trigger" />
        <dialog ref={el => (this.dialogEl = el)} part="dialog" onTransitionEnd={this.onTransitionEnd}>
          <div part="inner-container" onClick={e => e.stopPropagation()}>
            <div class="drag-container" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
              <div class="drag-handle"></div>
            </div>
            <div class="slot-container">
              <slot />
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
