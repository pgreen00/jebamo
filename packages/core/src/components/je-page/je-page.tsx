import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { concatMap, debounceTime, from, Subject, Subscription } from 'rxjs';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.scss'
})
export class JePage {
  @Element() el!: HTMLJePageElement;
  private bodySlot!: HTMLDivElement;
  private headerSlot!: HTMLDivElement;
  private footerSlot!: HTMLDivElement;
  private leftPanelSlot!: HTMLDivElement;
  private rightPanelSlot!: HTMLDivElement;
  private mutationObserver!: MutationObserver;
  private resizeObserver!: ResizeObserver;
  private moveContent$ = new Subject<void>();
  private sub?: Subscription;
  @State() headerHeight = 0;
  @State() subTop = 0;
  @State() footerHeight = 0;

  /**
   * Changes certain aspects of the page layout.
   * - Sticky will make the entire page scrollable, and the footer will not be visible when the page is overflowing
   * - Flex will make the main element scrollable, and the footer will always be visible
   */
  @Prop({ reflect: true }) layout: 'sticky' | 'flex' = 'flex';

  connectedCallback() {
    this.sub = this.moveContent$.pipe(
      debounceTime(50),
      concatMap(() => from(this.moveProjectedContent()))
    ).subscribe();
    this.mutationObserver = new MutationObserver(() => this.moveContent$.next())
    this.resizeObserver = new ResizeObserver(this.setCssVars);
  }

  disconnectedCallback() {
    this.sub?.unsubscribe();
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
  }

  componentDidLoad() {
    this.moveProjectedContent()
  }

  private maybeAppend = (node: Node | null, container: HTMLElement) => {
    if (container && node && node.parentNode !== container) {
      container.appendChild(node);
    }
  };

  private moveProjectedContent = async () => {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();

    const { bodySlot, headerSlot, footerSlot, leftPanelSlot, rightPanelSlot, maybeAppend } = this;

    const body = this.el.querySelector('main');
    const headerNodes = Array.from(this.el.querySelectorAll('header'));
    const footer = this.el.querySelector('footer');
    const leftPanel = this.el.querySelector('aside:not([right])');
    const rightPanel = this.el.querySelector('aside[right]');

    maybeAppend(body, bodySlot);
    maybeAppend(leftPanel, leftPanelSlot);
    maybeAppend(rightPanel, rightPanelSlot);

    for (const h of headerNodes) {
      maybeAppend(h, headerSlot);
      this.resizeObserver.observe(h);
    }

    maybeAppend(footer, footerSlot);
    if (footer) this.resizeObserver.observe(footer);

    this.mutationObserver.observe(this.el, { childList: true, subtree: true });
  };

  private setCssVars = () => {
    this.headerHeight = Array.from(this.el.querySelectorAll('header'))
      .map(t => t.clientHeight)
      .reduce((a, b) => a + b, 0);

    this.subTop = this.el.querySelector<HTMLElement>('header:first-of-type')?.clientHeight ?? 0;

    this.footerHeight = this.el.querySelector<HTMLElement>('footer')?.clientHeight ?? 0;
  }

  render() {
    const style = {
      '--header-height': `${this.headerHeight}px`,
      '--sub-top': `${this.subTop}px`,
      '--footer-height': `${this.footerHeight}px`
    };
    return (
      <Host style={style}>
        <div class="__slot" ref={el => this.headerSlot = el}></div>
        <div class="__body_container">
          <div class="__slot" ref={el => this.leftPanelSlot = el}></div>
          <div class="__slot" ref={el => this.bodySlot = el}></div>
          <div class="__slot" ref={el => this.rightPanelSlot = el}></div>
        </div>
        <div class="__slot" ref={el => this.footerSlot = el}></div>
      </Host>
    )
  }
}
