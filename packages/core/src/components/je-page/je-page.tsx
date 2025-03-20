import { Component, Element, Host, Prop, h } from '@stencil/core';

export type PanelState = 'open' | 'closed' | 'minimized';

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

  @Prop({ reflect: true }) layout: 'sticky' | 'grid' = 'grid';

  private moveProjectedContent = () => {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();

    const { bodySlot, headerSlot, footerSlot, leftPanelSlot, rightPanelSlot } = this;

    // Optional little helper to ensure we only move if needed
    const maybeAppend = (node: Node | null, container: HTMLElement) => {
      if (node && node.parentNode !== container) {
        container.appendChild(node);
      }
    };

    const body = this.el.querySelector('main');
    const headerNodes = Array.from(this.el.querySelectorAll('header'));
    const footer = this.el.querySelector('footer');
    const leftPanel = this.el.querySelector('aside:not([right])');
    const rightPanel = this.el.querySelector('aside[right]');

    maybeAppend(body, bodySlot);
    for (const h of headerNodes) {
      maybeAppend(h, headerSlot);
      this.resizeObserver.observe(h);
    }
    maybeAppend(footer, footerSlot);
    maybeAppend(leftPanel, leftPanelSlot);
    maybeAppend(rightPanel, rightPanelSlot);

    // Reattach observers after we’ve done the minimal movement
    this.mutationObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });
  };

  connectedCallback() {
    this.mutationObserver = new MutationObserver(this.moveProjectedContent)
    this.mutationObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });

    this.resizeObserver = new ResizeObserver(_entries => {
      const height = Array.from(this.el.querySelectorAll('header'))
        .map(t => t.clientHeight)
        .reduce((a, b) => a + b, 0);
      const sub = this.el.querySelector<HTMLElement>('header:first-of-type')?.clientHeight;
      this.el.style.setProperty('--header-height', `${height}px`);
      if (sub) {
        this.el.style.setProperty('--sub-top', `${sub}px`);
      }
    });
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  componentDidLoad() {
    this.moveProjectedContent();
  }

  render() {
    return (
      <Host>
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
