import { Component, Element, Listen, h } from '@stencil/core';
import { JeDetailsCustomEvent } from '../../components';

/**
 * Accordions are wrappers for [JeDetails](../je-details). When an inner detail is opened, the others are automatically closed.
 *
 * The implementation follows the [aria implementation of an accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
 *
 * ::: live-code-demo
 * ```html
 * <je-card class="je-radius-lg je-elevation-lg je-padding">
 *  <je-accordion>
 *    <je-details summary="Detail A" open>
 *      Inner content
 *    </je-details>
 *    <je-divider></je-divider>
 *    <je-details summary="Detail B">
 *      Inner content
 *    </je-details>
 *    <je-divider></je-divider>
 *    <je-details summary="Detail C">
 *      Inner content
 *    </je-details>
 *  </je-accordion>
 * </je-card>
 * ```
 * ```javascript
 * console.log('yolo')
 * ```
 * :::
 */
@Component({
  tag: 'je-accordion',
  styleUrl: 'je-accordion.css',
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
