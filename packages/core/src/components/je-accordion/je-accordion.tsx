import { Component, Element, Listen, h } from '@stencil/core';
import { JeDetailsCustomEvent } from '../../components';

@Component({
  tag: 'je-accordion',
  styleUrl: 'je-accordion.scss',
  shadow: true,
})
export class JeAccordion {
  @Element() el: HTMLJeAccordionElement;

  @Listen('expand')
  onExpand(ev: JeDetailsCustomEvent<void>) {
    const { target } = ev;
    const sections = Array.from(this.el.querySelectorAll('je-details'));
    sections.forEach(section => {
      if (section !== target) {
        section.open = false;
      }
    });
  }

  @Listen('keydown')
  onKeydown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault()
      const sections = Array.from(this.el.querySelectorAll('je-details'));
      const index = sections.indexOf(ev.target as HTMLJeDetailsElement);
      const nextIndex = ev.key === 'ArrowDown' ? index + 1 : index - 1;
      if (nextIndex >= 0 && nextIndex < sections.length) {
        sections[nextIndex].focus();
      }
    }
    if (ev.key === 'Home') {
      ev.preventDefault()
      const sections = Array.from(this.el.querySelectorAll('je-details'));
      sections[0].focus();
    }
    if (ev.key === 'End') {
      ev.preventDefault()
      const sections = Array.from(this.el.querySelectorAll('je-details'));
      sections[sections.length - 1].focus();
    }
  }

  render() {
    return <slot/>
  }
}
