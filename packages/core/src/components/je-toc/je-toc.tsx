import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'je-toc',
  styleUrl: 'je-toc.css',
  shadow: true,
})
export class JeToc {
  render() {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-toc]')
    )
    return (
      <Host role="navigation">
        {links.map(t => (
          <div>
            <je-link href={t.href}>{t.textContent}</je-link>
          </div>
        ))}
      </Host>
    );
  }
}
