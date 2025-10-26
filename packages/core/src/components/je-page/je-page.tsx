import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'je-page',
  styleUrl: 'je-page.css'
})
export class JePage {
  @Element() el!: HTMLElement
  private get header() {
    return this.el.querySelector(':scope > header')
  }
  private get footer() {
    return this.el.querySelector(':scope > footer')
  }
  private watchHeaderAndFooter = () => {
    const { header, footer } = this
    if (header) {
      this.resizeObserver.observe(header)
    }
    if (footer) {
      this.resizeObserver.observe(footer)
    }
  }
  private setVars = () => {
    const { header, footer } = this
    if (header) {
      this.el.style.setProperty('--head-height', `${header.clientHeight + 1}px`)
    }
    if (footer) {
      this.el.style.setProperty('--foot-height', `${footer.clientHeight + 1}px`)
    }
  }
  private resizeObserver = new ResizeObserver(this.setVars)
  private mutationObserver = new MutationObserver(() => {
    this.resizeObserver.disconnect()
    this.watchHeaderAndFooter()
  })

  connectedCallback() {
    this.setVars()
    this.watchHeaderAndFooter()
    this.mutationObserver.observe(this.el, {
      childList: true,
    })
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect()
    this.mutationObserver.disconnect()
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
