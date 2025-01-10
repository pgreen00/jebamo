import { Component, Host, h, Element, EventEmitter, Listen, Prop, Event, Watch } from '@stencil/core';
import { arrow, autoPlacement, autoUpdate, computePosition, flip, offset, Placement, shift, size } from '@floating-ui/dom';
import { animationUpdate } from '../../utils/utils';

@Component({
  tag: 'je-popover',
  styleUrl: 'je-popover.scss',
  shadow: true,
})
export class JePopover {
  @Element() el!: HTMLJePopoverElement;

  private containerEl!: HTMLElement;

  private backdropEl?: HTMLElement;

  private arrowEl?: HTMLElement;

  private triggerElement!: Element | null;

  private mouseEvent?: MouseEvent;

  private cleanup?: () => void;

  private referenceEl?: Element | {
    getBoundingClientRect: () => DOMRect;
  };

  /**
   * Opens/closes the popover
   */
  @Prop({ mutable: true }) open = false;

  /**
   * Where the popover should be placed
   */
  @Prop() placement: Placement | 'auto' = 'bottom';

  /** Whether or not the backdrop will be rendered */
  @Prop() renderBackdrop = true;

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
   * If the popover should position itself using the mouse event or
   * the triggerElement.
   */
  @Prop() positionStrategy: 'click' | 'element' = 'element';

  /** Horizontal offset used when auto positioning the popover content */
  @Prop() offsetX = 0;

  /** Vertical offset used when auto positioning the popover content */
  @Prop() offsetY = 10;

  /**
   * @click Popover will show on left click or tap on mobile.
   * @context-menu Popover will show on right click or press on mobile.
   * @hover Popover will show on hover or tap on mobile. No backdrop will be rendered.
   */
  @Prop() triggerAction: 'click' | 'hover' | 'context-menu' | 'manual' = 'click';

  /**
   * If the popover should match the width of the trigger element
   */
  @Prop() matchWidth = false;

  /**
   * Renders an arrow pointing to the trigger
   */
  @Prop() arrow = false;

  /**
   * Emits when the popover is opened
   */
  @Event() popoverPresent: EventEmitter;

  /**
   * Emits when the popover is closed
   */
  @Event() popoverDismiss: EventEmitter;

  componentDidLoad() {
    this.triggerElement = this.el.querySelector('[slot="trigger"]') ?? null;
  }

  componentWillRender() {
    if (this.triggerElement && this.matchWidth) {
      this.el.style.setProperty('--content-width', `${this.triggerElement.clientWidth}px`);
    }
  }

  @Listen('themeChange', { target: 'window' })
  handleThemeChange(e: CustomEvent<'light' | 'dark'>) {
    this.el.toggleAttribute('darkmode', e.detail == 'dark');
  }

  @Listen('click', { capture: true, target: 'window' })
  handleWindowClick(ev: MouseEvent) {
    if (this.triggerAction == 'click') this.mouseEvent = ev;
  }

  @Listen('contextmenu', { capture: true, target: 'window' })
  handleWindowContextMenu(ev: MouseEvent) {
    if (this.triggerAction == 'context-menu') this.mouseEvent = ev;
  }

  @Watch('open')
  async handleOpenChange(open: boolean) {
    if (open) {
      this.referenceEl = this.positionStrategy === 'element' ? this.triggerElement : {
        getBoundingClientRect: () => {
          return new DOMRect(this.mouseEvent!.clientX, this.mouseEvent!.clientY, 0, 0);
        },
      };
      const { x, y, middlewareData, placement } = await computePosition(this.referenceEl, this.containerEl, {
        placement: this.placement === 'auto' ? undefined : this.placement,
        strategy: 'fixed',
        middleware: [
          this.placement === 'auto' ? autoPlacement() : flip(),
          this.placement == 'auto' ? false : shift(),
          offset({
            mainAxis: this.offsetY,
            crossAxis: this.offsetX,
          }),
          size({
            apply: ({ availableHeight }) => {
              this.containerEl.style.setProperty('--available-height', `${availableHeight - this.offsetY}px`);
            },
          }),
          this.arrowEl ? arrow({
            element: this.arrowEl
          }) : false
        ],
      });
      if (middlewareData.arrow) {
        this.arrowEl.removeAttribute('class')
        this.arrowEl.classList.add(placement)
        if (middlewareData.arrow.x) {
          this.arrowEl.style.left = `${middlewareData.arrow.x}px`
        } else if (middlewareData.arrow.y) {
          this.arrowEl.style.top = `${middlewareData.arrow.y}px`
        }
      }
      this.containerEl.style.left = `${x}px`;
      this.containerEl.style.top = `${y}px`;
      this.containerEl.classList.add('open');
      this.backdropEl?.classList.add('open');
      await animationUpdate();
      this.containerEl.style.opacity = '1';
      this.backdropEl?.style.setProperty('opacity', '1');
      this.popoverPresent.emit();
    } else {
      this.containerEl.style.removeProperty('opacity');
      this.backdropEl?.removeAttribute('style');
      this.popoverDismiss.emit();
    }
  }

  @Listen('popoverPresent')
  handlePopoverPresent() {
    this.cleanup = autoUpdate(this.referenceEl, this.containerEl, () => {
      computePosition(this.referenceEl, this.containerEl, {
        placement: this.placement === 'auto' ? undefined : this.placement,
        strategy: 'fixed',
        middleware: [
          this.placement === 'auto' ? autoPlacement() : flip(),
          this.placement == 'auto' ? false : shift(),
          offset({
            mainAxis: this.offsetY,
            crossAxis: this.offsetX,
          }),
          size({
            apply: ({ availableHeight }) => {
              this.containerEl.style.setProperty('--available-height', `${availableHeight - this.offsetY}px`);
            },
          }),
          this.arrowEl ? arrow({
            element: this.arrowEl
          }) : false
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        this.containerEl.style.left = `${x}px`;
        this.containerEl.style.top = `${y}px`;
        if (middlewareData.arrow) {
          this.arrowEl.removeAttribute('class')
          this.arrowEl.classList.add(placement)
          if (middlewareData.arrow.x) {
            this.arrowEl.style.left = `${middlewareData.arrow.x}px`
          } else if (middlewareData.arrow.y) {
            this.arrowEl.style.top = `${middlewareData.arrow.y}px`
          }
        }
      });
    });
  }

  @Listen('popoverDismiss')
  handlePopoverDismiss() {
    if (this.cleanup) {
      this.cleanup();
    }
  }

  private handleContentClick = () => {
    if (this.open && this.dismissOnClick) {
      this.open = false;
    }
  };

  private handleBackdropClick = () => {
    if (this.open && this.backdropDismiss) {
      this.open = false;
    }
  };

  private handleTriggerClick = (ev: MouseEvent) => {
    if (this.triggerAction === 'click') {
      this.mouseEvent = ev;
      this.open = true;
    }
  };

  private handleContextMenu = (ev: MouseEvent) => {
    if (this.triggerAction === 'context-menu') {
      ev.preventDefault();
      this.mouseEvent = ev;
      this.open = true;
    }
  };

  private handleMouseEnter = (ev: MouseEvent) => {
    if (this.triggerAction === 'hover') {
      this.mouseEvent = ev;
      this.open = true;
    }
  };

  private handleMouseLeave = (ev: MouseEvent) => {
    if (this.triggerAction === 'hover') {
      this.mouseEvent = ev;
      this.open = false;
    }
  };

  private handleContentTransitionEnd = () => {
    if (!this.open) {
      this.containerEl.classList.remove('open');
      this.containerEl.removeAttribute('style');
    }
  };

  private handleBackdropTransitionEnd = () => {
    if (!this.open) {
      this.backdropEl?.classList.remove('open');
    }
  };

  render() {
    return (
      <Host>
        <div
          part="trigger-container"
          onClick={this.handleTriggerClick}
          onContextMenu={this.handleContextMenu}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <slot name="trigger" />
        </div>
        <div part='content-container' ref={el => (this.containerEl = el)} onClick={this.handleContentClick} onTransitionEnd={this.handleContentTransitionEnd}>
          <div part="content">
            <slot />
          </div>
          {this.arrow && this.positionStrategy == 'element' && (
            <div ref={el => this.arrowEl = el} part='arrow'></div>
          )}
        </div>
        {this.triggerAction !== 'hover' && this.renderBackdrop && (
          <div
            part="backdrop"
            ref={el => (this.backdropEl = el)}
            onClick={this.handleBackdropClick}
            class={{ clear: !this.showBackdrop, pointer: this.backdropDismiss }}
            onTransitionEnd={this.handleBackdropTransitionEnd}
          ></div>
        )}
      </Host>
    );
  }
}
