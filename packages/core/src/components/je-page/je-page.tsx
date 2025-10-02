import { Component, Element, Host, forceUpdate, h } from '@stencil/core';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.scss'
})
export class JePage {
  @Element() el: HTMLElement
  private get header() {
    return this.el.querySelector(':scope > header:first-child')
  }
  private get sub() {
    return this.el.querySelector(':scope > header + header')
  }
  private get leftPanel() {
    return this.el.querySelector(':scope > aside:not(main + aside)')
  }
  private get rightPanel() {
    return this.el.querySelector(':scope > main + aside')
  }
  private get footer() {
    return this.el.querySelector(':scope > footer')
  }
  private resizeObserver = new ResizeObserver(() => forceUpdate(this.el))
  private mutationObserver = new MutationObserver(() => forceUpdate(this.el))

  connectedCallback() {
    this.mutationObserver.observe(this.el, { childList: true })
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect()
  }

  componentDidRender() {
    const { header, sub, resizeObserver, footer } = this
    resizeObserver.disconnect()
    if (header) resizeObserver.observe(header)
    if (sub) resizeObserver.observe(sub)
    if (footer) resizeObserver.observe(footer)
  }

  render() {
    const { header, sub, leftPanel, rightPanel, footer } = this
    const columns = (leftPanel && rightPanel) ? 3 : (leftPanel || rightPanel) ? 2 : 1
    const template = [
      header ? `"${Array.from({length: columns}, () => 'head').join(' ')}"` : null,
      sub ? `"${Array.from({length: columns}, () => 'sub').join(' ')}"` : null,
      (leftPanel && rightPanel) ? `"left body right"`
        : leftPanel ? `"left body"`
        : rightPanel ? `"body right"`
        : '"body"',
      footer ? `"${Array.from({length: columns}, () => 'foot').join(' ')}"` : null
    ]
    return (
      <Host style={{
        'grid-template-areas': template.filter(val => val !== null).join(' '),
        'grid-template-columns': (leftPanel && rightPanel) ? 'auto 1fr auto' : leftPanel ? 'auto 1fr' : rightPanel ? '1fr auto' : 'auto',
        ...(header ? {'--head-height': `${header.clientHeight}px`} : {}),
        ...(sub ? {'--sub-height': `${sub.clientHeight}px`} : {}),
        ...(footer ? {'--foot-height': `${footer.clientHeight}px`} : {}),
      }}>
        <slot />
      </Host>
    )
  }
}
