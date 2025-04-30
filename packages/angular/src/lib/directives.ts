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
    '(valueChange)': 'handleChange($event.target.value)',
    '[value]': 'jeModel()'
  },
  exportAs: 'jeModel'
})
export class JeModelDirective {
  jeModel = input();
  jeModelChange = output<unknown>();

  handleChange(value: unknown) {
    this.jeModelChange.emit(value);
  }
}

/**
 * Directive for automatically embedding and removing ng-templates from overlays on show/hide.
 *
 * @usageNotes
 * Overlay components this will work with include JePopover, JeDrawer, and JeModal
 *
 * @example
 * <je-modal>
 *   <je-button slot="trigger">Open Modal</je-button>
 *   <ng-template>
 *     <h1>Modal Title</h1>
 *     <p>Modal content</p>
 *   </ng-template>
 * </je-modal>
 */
@Directive({
  selector: 'je-popover > ng-template, je-drawer > ng-template, je-modal > ng-template',
  exportAs: 'overlay'
})
export class JeOverlayDirective {
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
