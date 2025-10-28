import { Directive, ElementRef, inject, input, output, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * Directive for two-way binding of a value to a form control.
 *
 * @usageNotes
 * Form controls in the jebamo component library are defined as any component with a [value] property and a (valueChange) event.
 *
 * @example
 * <je-input [(jeModel)]="name" />
 * <je-checkbox [(jeModel)]="likesHats">Do you like hats?</je-checkbox>
 */
@Directive({
  selector: '[jeModel]',
  host: {
    '(valueChange)': 'jeModelChange.emit($event.target.value)',
    '[value]': 'jeModel()'
  },
  exportAs: 'jeModel'
})
export class JeModelDirective {
  jeModel = input();
  jeModelChange = output<unknown>();
}

/**
 * Directive for automatically embedding and removing ng-templates from overlays on show/hide.
 *
 * @example
 * <je-overlay>
 *   <je-button slot="trigger">Open Modal</je-button>
 *   <ng-template>
 *     <h1>Modal Title</h1>
 *     <p>Modal content</p>
 *   </ng-template>
 * </je-overlay>
 */
@Directive({
  selector: 'je-overlay > ng-template',
  exportAs: 'jeOverlayTemplate'
})
export class JeOverlayTemplateDirective {
  private viewContainerRef = inject(ViewContainerRef);
  private template = inject(TemplateRef);
  private elementRef = inject(ElementRef);

  public createTemplate = () => {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  public destroyTemplate = () => {
    this.viewContainerRef.remove();
  }

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement.parentElement;
    if (el) {
      el.init = this.createTemplate;
      el.destroy = this.destroyTemplate;
    }
  }
}
