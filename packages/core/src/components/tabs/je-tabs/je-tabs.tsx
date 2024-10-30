import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'je-tabs',
  styleUrls: {
    mobile: 'je-tabs.mobile.scss',
    pill: 'je-tabs.pill.scss',
    segment: 'je-tabs.segment.scss',
  },
  shadow: true,
})
export class JeTabs {
  @Element() el: HTMLJeTabsElement;

  @Prop({ reflect: true }) mode: 'mobile' | 'pill' | 'segment' = 'segment';

  @State() activeTabRect: DOMRect | null = null;

  @Listen('tabClick')
  onTabClick(ev: CustomEvent<string>) {
    const tabs = this.el.querySelectorAll('je-tab');
    tabs.forEach(tab => {
      tab.active = (tab.value ?? tab.textContent) === ev.detail;
      if (tab.active) {
        this.activeTabRect = tab.getBoundingClientRect();
      }
    });
  }

  getBackgroundStyle() {
    if (!this.activeTabRect) return {};

    const { width, left, height } = this.activeTabRect;
    const hostRect = this.el.getBoundingClientRect();
    const xOffset = left - hostRect.left;

    return {
      width: `${width}px`,
      transform: `translateX(${xOffset}px)`,
      transition: 'transform 250ms ease',
      height: `${height}px`
    };
  }

  render() {
    return (
      <Host>
        <div part='indicator' style={this.getBackgroundStyle()}></div>
        <slot></slot>
      </Host>
    );
  }
}
