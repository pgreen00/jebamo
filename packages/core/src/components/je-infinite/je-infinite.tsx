import { Component, Host, h, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'je-infinite',
  styleUrl: 'je-infinite.scss',
  shadow: true,
})
export class JeInfinite {
  @Element() element!: HTMLElement;
  private observer!: IntersectionObserver;
  private viewportEl!: HTMLElement;

  /**
   * This must be manually set to true/false to show/hide the intersecting content
   */
  @Prop() loading = false;

  /**
   * Emitted when the bottom of the scroll container is in the viewport
   */
  @Event() intersect: EventEmitter<void>;

  /**
   * Threshold passed to observer api
   */
  @Prop() threshold = 0.8;

  /**
   * Passed to observer api
   */
  @Prop() rootMargin = '0px';

  componentDidLoad() {
    this.observer = new IntersectionObserver(this.handleEntry, {
      root: this.element,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    });

    this.observer.observe(this.viewportEl);
  }

  private handleEntry: IntersectionObserverCallback = (entries) => {
    const intersecting = entries[0].isIntersecting;
    if (intersecting) {
      console.log('intersecting')
      this.intersect.emit();
    } else {
      console.log('not intersecting')
    }
  }

  render() {
    return (
      <Host>
        <div part='scroll-container'>
          <slot/>
        </div>
        <div part='intersect-container' style={{opacity: this.loading ? '1' : '0'}} ref={el => this.viewportEl = el}>
          <slot name='content'/>
        </div>
      </Host>
    );
  }
}
