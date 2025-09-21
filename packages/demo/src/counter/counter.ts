import htmlTemplate from './counter.html?raw'
import cssTemplate from './counter.css?raw'
import { debounceTime, fromEvent, Subject, Subscription } from 'rxjs';

export class HTMLCounterElement extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }
  private render = new Subject<void>()
  private sub?: Subscription;
  private get count() {
    return parseInt(this.getAttribute('count') ?? '0')
  }
  private set count(value: number) {
    this.setAttribute('count', value.toString())
  }

  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssTemplate)
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.innerHTML = htmlTemplate
  }

  connectedCallback() {
    this.sub = new Subscription();
    const button = this.shadowRoot!.querySelector('button')!

    this.sub.add(this.render.pipe(debounceTime(50)).subscribe(() => {
      button.innerText = `Count: ${this.count}`
    }))

    this.sub.add(fromEvent(button, 'click').subscribe(() => {
      this.count++
    }))

    this.render.next()
  }

  disconnectedCallback() {
    this.sub?.unsubscribe()
  }

  attributeChangedCallback() {
    this.render.next()
  }
}

customElements.define('app-counter', HTMLCounterElement)
