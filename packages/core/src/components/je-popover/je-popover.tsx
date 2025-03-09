import { Component, Host, h, Element, EventEmitter, Listen, Prop, Event, Watch } from '@stencil/core';
import { arrow, autoPlacement, autoUpdate, computePosition, ComputePositionReturn, flip, offset, Placement, shift, size } from '@floating-ui/dom';
import { animationUpdate, teleportOverlay, generateShortId } from '../../utils/utils';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  tag: 'je-popover',
  styleUrl: 'je-popover.scss',
  shadow: true,
})
export class JePopover {
  @Element() el!: HTMLJePopoverElement;

  private containerEl!: HTMLElement;

  private arrowEl?: HTMLElement;

  private get triggerElement() {
    return this.el.querySelector('[slot=trigger]') ?? this.placeholder.parentNode?.querySelector(`[data-trigger=${this.triggerDataId}]`);
  }

  private mouseEvent?: MouseEvent;

  private cleanup?: () => void;

  private get referenceEl() {
    return {
      getBoundingClientRect: () => {
        if (this.positionStrategy === 'element') {
          return this.getRangeBoundingClientRect(this.triggerElement)
        } else {
          return new DOMRect(this.mouseEvent?.clientX, this.mouseEvent?.clientY)
        }
      }
    };
  }

  private mouseMoveSub?: Subscription;

  private placeholder = document.createComment('je-popover-teleport')

  private triggerDataId = generateShortId()

  /**
   * Opens/closes the popover
   */
  @Prop({ mutable: true }) open = false;

  /**
   * Where the popover should be placed
   */
  @Prop() placement?: Placement;

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
  @Prop() triggerAction: 'click' | 'hover' | 'context-menu' | 'content-hover' = 'click';

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

  connectedCallback() {
    this.mouseMoveSub = fromEvent(window, 'mousemove').pipe(debounceTime(10)).subscribe(this.onMouseMove);
  }

  disconnectedCallback() {
    this.mouseMoveSub?.unsubscribe();
  }

  componentWillRender() {
    if (this.triggerElement && this.matchWidth) {
      this.el.style.setProperty('--content-width', `${this.triggerElement.clientWidth}px`);
    }
  }

  @Watch('open')
  async handleOpenChange(open: boolean) {
    if (open) {
      this.setPosition(await this.computePosition());
      this.cleanup = autoUpdate(this.referenceEl, this.containerEl, () => this.computePosition().then(this.setPosition));
      this.containerEl.classList.add('open');
      teleportOverlay(this.el, this.placeholder, this.triggerDataId)
      await animationUpdate();
      this.containerEl.style.opacity = '1';
    } else {
      this.containerEl.style.removeProperty('opacity');
      if (this.cleanup) {
        this.cleanup();
      }
    }
  }

  @Listen('click', { capture: true, target: 'window' })
  handleWindowClick(ev: MouseEvent) {
    if (this.triggerAction == 'click' && !this.open) {
      this.mouseEvent = ev;
      if (this.triggerElement?.contains(ev.target as Node)) {
        this.open = true;
      }
    }

    if (this.dismissOnClick && this.open && this.el.contains(ev.target as Node)) {
      this.open = false;
    }

    if (this.backdropDismiss && this.open && !this.el.contains(ev.target as Node) && !this.triggerElement?.contains(ev.target as Node)) {
      this.open = false;
    }
  }

  @Listen('contextmenu', { capture: true, target: 'window' })
  handleWindowContextMenu(ev: MouseEvent) {
    if (this.triggerAction == 'context-menu' && !this.open) {
      this.mouseEvent = ev;
      if (this.triggerElement?.contains(ev.target as Node)) {
        ev.preventDefault();
        this.open = true;
      }
    }
  }

  private computePosition = () =>
    computePosition(this.referenceEl, this.containerEl, {
      placement: this.placement,
      strategy: 'fixed',
      middleware: [
        this.placement ? flip() : autoPlacement(),
        this.placement ? shift() : false,
        offset({
          mainAxis: this.offsetY,
          crossAxis: this.offsetX,
        }),
        size({
          apply: ({ availableHeight }) => {
            this.containerEl.style.setProperty('--available-height', `${availableHeight - this.offsetY}px`);
          },
        }),
        this.arrowEl
          ? arrow({
              element: this.arrowEl,
            })
          : false,
      ],
    });

  private setPosition = ({ x, y, middlewareData, placement }: ComputePositionReturn) => {
    if (middlewareData.arrow) {
      this.arrowEl.removeAttribute('class');
      this.arrowEl.classList.add(placement);
      if (middlewareData.arrow.x) {
        this.arrowEl.style.left = `${middlewareData.arrow.x}px`;
      } else if (middlewareData.arrow.y) {
        this.arrowEl.style.top = `${middlewareData.arrow.y}px`;
      }
    }
    this.containerEl.style.left = `${x}px`;
    this.containerEl.style.top = `${y}px`;
  };

  private onMouseMove = (ev: MouseEvent) => {
    const { triggerAction, triggerElement, el } = this;
    if (triggerAction === 'content-hover' || triggerAction === 'hover') {
      if ((triggerAction === 'content-hover' && (el.contains(ev.target as Node) || triggerElement?.contains(ev.target as Node))) || (triggerAction === 'hover' && triggerElement?.contains(ev.target as Node))) {
        this.mouseEvent = ev;
        this.open = true;
      } else {
        this.open = false;
      }
    }
  };

  private handleContentTransitionEnd = () => {
    if (!this.open) {
      this.containerEl.classList.remove('open');
      this.containerEl.removeAttribute('style');
      teleportOverlay(this.el, this.placeholder, this.triggerDataId, true)
    }
  };

  private getRangeBoundingClientRect(element: Element) {
    const rects = [];
    let nodes: Element[];

    if (element.shadowRoot) {
      nodes = Array.from(element.shadowRoot.children);
    } else {
      nodes = Array.from(element.children);
    }

    nodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE && !['STYLE', 'SCRIPT', 'LINK'].includes(node.tagName)) {
        const computedStyle = window.getComputedStyle(node);
        if (computedStyle.display !== 'contents') {
          rects.push(node.getBoundingClientRect());
        }
      }
    });

    if (rects.length === 0) return new DOMRect();

    const left = Math.min(...rects.map(r => r.left));
    const top = Math.min(...rects.map(r => r.top));
    const right = Math.max(...rects.map(r => r.right));
    const bottom = Math.max(...rects.map(r => r.bottom));

    return new DOMRect(left, top, right - left, bottom - top);
  }

  render() {
    return (
      <Host>
        <slot name="trigger" />
        <div part="content-container" ref={el => this.containerEl = el} onTransitionEnd={this.handleContentTransitionEnd}>
          <div part="content">
            <slot />
          </div>
          {this.arrow && <div ref={el => this.arrowEl = el} part="arrow"></div>}
        </div>
      </Host>
    );
  }
}
