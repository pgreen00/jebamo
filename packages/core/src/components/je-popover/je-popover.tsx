import { Component, Host, h, Element, EventEmitter, Listen, Method, Prop, State, Event } from '@stencil/core';
import { animationUpdate } from '../../utils/utils';

export type PositionStrategy = 'none' | 'click' | 'element';
export type Target<T extends PositionStrategy> = T extends 'click' ? MouseEvent | undefined : T extends 'element' ? HTMLElement | undefined : never;

@Component({
  tag: 'je-popover',
  styleUrl: 'je-popover.scss',
  shadow: true,
})
export class JePopover {
  @Element() el!: HTMLJePopoverElement;

  protected parentEl!: HTMLElement;

  protected triggerElement!: HTMLElement;

  protected contentEl!: HTMLElement;

  protected backdropEl!: HTMLElement;

  protected pagEl!: HTMLElement;

  private mouseEvent?: MouseEvent;

  @State() isOpen = false;

  /**
   * The id of the element that will present the menu on click.
   * If not provided, you will have to manually present the popover
   * using present().
   */
  @Prop() trigger?: string;

  /** Whether or not the backdrop will be visible to the user */
  @Prop() showBackdrop = false;

  /** Backdrop will dismiss the popover on click when enabled */
  @Prop() backdropDismiss = true;

  /**
   * Popover will automatically dismiss itself when something is
   * clicked in the popover when enabled
   */
  @Prop() dismissOnClick = false;

  /**
   * If the popover should auto position itself using the mouse event or
   * the triggerElement.
   */
  @Prop() position: PositionStrategy = 'element';

  /** Horizontal offset used when auto positioning the popover content */
  @Prop() offsetX = 10;

  /** Vertical offset used when auto positioning the popover content */
  @Prop() offsetY = 10;

  /**
   * @click Popover will show on left click or tap on mobile.
   * @context-menu Popover will show on right click or press on mobile.
   * @hover Popover will show on hover or tap on mobile. No backdrop will be rendered.
   */
  @Prop() triggerAction: 'click' | 'hover' | 'context-menu' = 'click';

  /** Emits whenever the popover has presented. Does not emit any data */
  @Event({ composed: true }) didPresent: EventEmitter;

  /**
   * Emits whenever the popover has finished dismissing. Emits the role
   * and optional data object passed to the dismiss() method.
   */
  @Event({ composed: true }) didDismiss: EventEmitter<{ role?: string, data?: any }>;

  /** Emits before the popover starts presenting itself. Does not emit any data */
  @Event({ composed: true }) willPresent: EventEmitter;

  /** Emits before the popover starts dismissing itself. Does not emit any data */
  @Event({ composed: true }) wilDismiss: EventEmitter;

  componentDidLoad() {
    this.pagEl = this.el.closest('je-page') as HTMLElement;
    this.parentEl = this.el.parentElement;
    if (this.trigger) {
      this.triggerElement = document.getElementById(this.trigger);
      if (this.triggerElement && this.triggerAction == 'click') {
        this.triggerElement.addEventListener("click", () => this.present(this.position));
      } else if (this.triggerElement && this.triggerAction == 'hover') {
        this.triggerElement.addEventListener("mouseover", async ev => {
          await this.present(this.position, ev);
          this.triggerElement.addEventListener(
            "mouseleave",
            () => this.dismiss('hoverDismiss'),
            { once: true });
        });
      } else if (this.triggerElement && this.triggerAction == 'context-menu') {
        this.triggerElement.addEventListener("contextmenu", ev => {
          ev.preventDefault();
          this.present(this.position, ev);
        });
      } else {
        console.error('Failed to find popover trigger element:', this.trigger);
      }
    }
  }

  private handleContentClick = () => {
    if (this.isOpen && this.dismissOnClick) {
      this.dismiss('contentClickDismiss');
    }
  }

  @Listen('click', { capture: true, target: 'window' })
  protected handleWindowClick(ev: MouseEvent) {
    this.mouseEvent = ev;
  }

  /**
   * Used internally to present the popover. Can also be used to manually
   * present it if needed. Will auto position itself using the specified
   * position strategy. If no target is provided, it will use the last mouse
   * event on the window or the trigger element.
   * @param positionStrategy The strategy to use when positioning the popover
   * @param target Can optionally override the target the popover bases it's position off of
   */
  @Method()
  async present<T extends PositionStrategy>(positionStrategy: T, target?: Target<T>) {
    if (!this.isOpen) {
      if (this.parentEl) {
        if (this.pagEl) {
          this.pagEl.append(this.el)
        } else {
          document.body.append(this.el);
        }
      }
      this.isOpen = true;

      if (positionStrategy !== 'none') {
        this.contentEl.removeAttribute('style');
        await animationUpdate();
        const { offsetX, offsetY } = this;
        const contentHeight = this.contentEl.clientHeight;
        const rightThreshold = window.innerWidth / 2;
        const bottomThreshold = window.innerHeight - 20 - contentHeight;

        if (positionStrategy == 'click') {
          target ??= this.mouseEvent as Target<T>;
          const { pageX, pageY } = target as MouseEvent;
          const isNearRight = pageX > rightThreshold;
          const isNearBottom = pageY > bottomThreshold;
          const isNearTop = pageY - offsetY - contentHeight < 0;
          if (isNearRight) {
            this.contentEl.style.left = `${pageX - offsetX - this.contentEl.clientWidth}px`;
          } else {
            this.contentEl.style.left = `${pageX + offsetX}px`;
          }

          if (isNearBottom && !isNearTop) {
            this.contentEl.style.top = `${pageY - offsetY - contentHeight}px`;
          } else if (isNearBottom && isNearTop) {
            this.contentEl.style.overflowY = 'auto';
            if (pageY > window.innerHeight - pageY) {
              this.contentEl.style.top = `${offsetY}px`;
              this.contentEl.style.maxHeight = `${pageY}px`;
            } else {
              this.contentEl.style.top = `${pageY + offsetY}px`;
              this.contentEl.style.maxHeight = `${window.innerHeight - 20 - pageY}px`;
            }
          } else {
            this.contentEl.style.top = `${pageY + offsetY}px`;
          }
        } else {
          target ??= (this.triggerElement ?? this.mouseEvent.target) as Target<T>;
          const boundingRect = (target as HTMLElement).getBoundingClientRect();
          const { x: pageX, y: pageY } = boundingRect;
          const isNearRight = pageX > rightThreshold;
          const isNearBottom = pageY > bottomThreshold;
          const isNearTop = pageY - offsetY - contentHeight < 0;
          const triggerElement = target as HTMLElement;
          const { left, bottom, top, right } = triggerElement.getBoundingClientRect();
          this.contentEl.style.boxSizing = 'border-box';
          if (isNearRight) {
            this.contentEl.style.left = `${right - this.contentEl.clientWidth}px`;
          } else {
            this.contentEl.style.left = `${left}px`;
          }

          if (isNearBottom && !isNearTop) {
            this.contentEl.style.top = `${top - offsetY - contentHeight}px`;
          } else if (isNearBottom && isNearTop) {
            this.contentEl.style.overflowY = 'auto';
            if (pageY > window.innerHeight - pageY) {
              this.contentEl.style.top = `${offsetY}px`;
              this.contentEl.style.maxHeight = `${top}px`;
            } else {
              this.contentEl.style.top = `${bottom + offsetY}px`;
              this.contentEl.style.maxHeight = `${window.innerHeight - 20 - bottom}px`;
            }
          } else {
            this.contentEl.style.top = `${bottom + offsetY}px`;
          }
        }
      }

      return new Promise<void>(resolve => {
        this.contentEl.addEventListener('transitionend', () => {
          this.didPresent.emit();
          resolve();
        }, { once: true });
        if (this.triggerAction !== 'hover') {
          this.backdropEl.classList.add('fade');
        }
        this.contentEl.classList.add('open');
      });
    }
  }

  /** Manually dismisses the popover. Role and data get passed to the didDismiss event. */
  @Method()
  async dismiss(role: string = 'manualDismiss', data?: any) {
    if (this.isOpen) {
      return new Promise<void>(resolve => {
        this.contentEl.addEventListener('transitionend', () => {
          if (this.parentEl) {
            this.el.remove();
            this.parentEl.append(this.el);
          }
          this.isOpen = false;
          this.didDismiss.emit({ role: role, data: data });
          resolve();
        }, { once: true });
        if (this.triggerAction !== 'hover') {
          this.backdropEl.classList.remove('fade');
        }
        this.contentEl.classList.remove('open');
      });
    }
  }

  private handleBackdropClick = () => {
    if (this.isOpen && this.backdropDismiss) {
      this.dismiss('backdropDismiss');
    }
  }

  render() {
    return (
      <Host slot="overlay">
        <div part="content" ref={el => this.contentEl = el} onClick={this.handleContentClick} class={{ 'content-transition': true, content: this.isOpen }}>
          {this.isOpen && <slot></slot>}
        </div>
        {this.triggerAction !== 'hover' &&
          <div ref={el => this.backdropEl = el} onClick={this.handleBackdropClick}
            class={{
              'backdrop-transition': true,
              backdrop: this.isOpen,
              clear: !this.showBackdrop && this.isOpen
            }}
          ></div>
        }
      </Host>
    );
  }
}
