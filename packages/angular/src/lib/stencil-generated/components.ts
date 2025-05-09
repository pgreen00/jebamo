/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'jebamo';


@ProxyCmp({
})
@Component({
  selector: 'je-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeAccordion extends Components.JeAccordion {}


@ProxyCmp({
  inputs: ['destroy', 'init', 'maxPercent', 'midPercent', 'minPercent', 'open'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['destroy', 'init', 'maxPercent', 'midPercent', 'minPercent', 'open'],
})
export class JeActionSheet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['present', 'dismiss']);
  }
}


import type { OverlayData as IJeActionSheetOverlayData } from 'jebamo';

export declare interface JeActionSheet extends Components.JeActionSheet {
  /**
   * Emits whenever the drawer has opened. Does not emit any data
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method.
   */
  dismiss: EventEmitter<CustomEvent<IJeActionSheetOverlayData>>;
}


@ProxyCmp({
  inputs: ['closable', 'color', 'duration', 'header', 'icon', 'message', 'open', 'progress'],
  methods: ['show', 'hide', 'didDismiss']
})
@Component({
  selector: 'je-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'color', 'duration', 'header', 'icon', 'message', 'open', 'progress'],
})
export class JeAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['present', 'dismiss']);
  }
}


import type { OverlayData as IJeAlertOverlayData } from 'jebamo';

export declare interface JeAlert extends Components.JeAlert {

  present: EventEmitter<CustomEvent<any>>;

  dismiss: EventEmitter<CustomEvent<IJeAlertOverlayData>>;
}


@ProxyCmp({
  inputs: ['indentation', 'label', 'open', 'selected', 'selection', 'value'],
  methods: ['isLeaf']
})
@Component({
  selector: 'je-branch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indentation', 'label', 'open', 'selected', 'selection', 'value'],
})
export class JeBranch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeBranch extends Components.JeBranch {}


@ProxyCmp({
})
@Component({
  selector: 'je-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeBreadcrumb extends Components.JeBreadcrumb {}


@ProxyCmp({
  inputs: ['itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems']
})
@Component({
  selector: 'je-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems'],
})
export class JeBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandClick']);
  }
}


export declare interface JeBreadcrumbs extends Components.JeBreadcrumbs {

  expandClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'disabled', 'expand', 'fill', 'form', 'pending', 'size', 'type']
})
@Component({
  selector: 'je-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'expand', 'fill', 'form', 'pending', 'size', 'type'],
})
export class JeButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeButton extends Components.JeButton {}


@ProxyCmp({
})
@Component({
  selector: 'je-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeButtonGroup extends Components.JeButtonGroup {}


@ProxyCmp({
})
@Component({
  selector: 'je-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeCalendar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeCalendar extends Components.JeCalendar {}


@ProxyCmp({
  inputs: ['button', 'color']
})
@Component({
  selector: 'je-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color'],
})
export class JeCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeCard extends Components.JeCard {}


@ProxyCmp({
  inputs: ['data', 'indeterminate', 'labelPlacement', 'originalValue', 'required', 'value']
})
@Component({
  selector: 'je-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'indeterminate', 'labelPlacement', 'originalValue', 'required', 'value'],
})
export class JeCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeCheckbox extends Components.JeCheckbox {
  /**
   * Emits the current value whenever it's state changes
   */
  valueChange: EventEmitter<CustomEvent<boolean | undefined>>;
}


@ProxyCmp({
  inputs: ['color', 'dark', 'light']
})
@Component({
  selector: 'je-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'dark', 'light'],
})
export class JeColor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeColor extends Components.JeColor {}


@ProxyCmp({
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'je-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'],
})
export class JeColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeColumn extends Components.JeColumn {}


@ProxyCmp({
  inputs: ['align', 'columns', 'gap', 'justify', 'wrap']
})
@Component({
  selector: 'je-column-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'columns', 'gap', 'justify', 'wrap'],
})
export class JeColumnGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeColumnGroup extends Components.JeColumnGroup {}


@ProxyCmp({
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value']
})
@Component({
  selector: 'je-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value'],
})
export class JeDatepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeDatepicker extends Components.JeDatepicker {

  valueChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['iconSide', 'iconToggle', 'open', 'summary']
})
@Component({
  selector: 'je-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['iconSide', 'iconToggle', 'open', 'summary'],
})
export class JeDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expand', 'collapse']);
  }
}


export declare interface JeDetails extends Components.JeDetails {

  expand: EventEmitter<CustomEvent<any>>;

  collapse: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['spacing', 'type']
})
@Component({
  selector: 'je-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['spacing', 'type'],
})
export class JeDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDivider extends Components.JeDivider {}


@ProxyCmp({
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side'],
})
export class JeDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['present', 'dismiss', 'backdropClick']);
  }
}


import type { OverlayData as IJeDrawerOverlayData } from 'jebamo';

export declare interface JeDrawer extends Components.JeDrawer {
  /**
   * Emits whenever the drawer has opened. Does not emit any data
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method.
   */
  dismiss: EventEmitter<CustomEvent<IJeDrawerOverlayData>>;
  /**
   * Emits whenever the backdrop is clicked. Does not emit any data
   */
  backdropClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-dropzone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeDropzone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dataDrop']);
  }
}


export declare interface JeDropzone extends Components.JeDropzone {

  dataDrop: EventEmitter<CustomEvent<DataTransfer>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formData']);
  }
}


export declare interface JeForm extends Components.JeForm {

  formData: EventEmitter<CustomEvent<Record<string, any>>>;
}


@ProxyCmp({
  inputs: ['fill', 'grade', 'size', 'weight']
})
@Component({
  selector: 'je-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fill', 'grade', 'size', 'weight'],
})
export class JeIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeIcon extends Components.JeIcon {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'fill', 'icon', 'pending', 'size', 'type']
})
@Component({
  selector: 'je-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'fill', 'icon', 'pending', 'size', 'type'],
})
export class JeIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeIconButton extends Components.JeIconButton {}


@ProxyCmp({
  inputs: ['loading', 'rootMargin', 'threshold']
})
@Component({
  selector: 'je-infinite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loading', 'rootMargin', 'threshold'],
})
export class JeInfinite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['intersect']);
  }
}


export declare interface JeInfinite extends Components.JeInfinite {
  /**
   * Emitted when the bottom of the scroll container is in the viewport
   */
  intersect: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeItem extends Components.JeItem {}


@ProxyCmp({
  inputs: ['required']
})
@Component({
  selector: 'je-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['required'],
})
export class JeLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeLabel extends Components.JeLabel {}


@ProxyCmp({
  inputs: ['bold', 'download', 'href', 'rel', 'target', 'underline']
})
@Component({
  selector: 'je-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'download', 'href', 'rel', 'target', 'underline'],
})
export class JeLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeLink extends Components.JeLink {}


@ProxyCmp({
})
@Component({
  selector: 'je-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeLoading extends Components.JeLoading {}


@ProxyCmp({
})
@Component({
  selector: 'je-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeMenu extends Components.JeMenu {}


@ProxyCmp({
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'showBackdrop', 'size'],
  methods: ['show', 'hide', 'didDismiss']
})
@Component({
  selector: 'je-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'showBackdrop', 'size'],
})
export class JeModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['present', 'dismiss', 'backdropClick']);
  }
}


import type { OverlayData as IJeModalOverlayData } from 'jebamo';

export declare interface JeModal extends Components.JeModal {
  /**
   * Emits whenever the modal has opened. Does not emit any data
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the modal has finished closing. Emits the role and optional data object passed to the hide() method.
   */
  dismiss: EventEmitter<CustomEvent<IJeModalOverlayData>>;
  /**
   * Emits whenever the backdrop is clicked. Does not emit any data
   */
  backdropClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['mode']
})
@Component({
  selector: 'je-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode'],
})
export class JeNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeNav extends Components.JeNav {}


@ProxyCmp({
  inputs: ['invalid']
})
@Component({
  selector: 'je-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['invalid'],
})
export class JeNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeNote extends Components.JeNote {}


@ProxyCmp({
  inputs: ['disabled', 'selected', 'value']
})
@Component({
  selector: 'je-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'value'],
})
export class JeOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeOption extends Components.JeOption {}


@ProxyCmp({
  inputs: ['layout']
})
@Component({
  selector: 'je-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout'],
})
export class JePage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePage extends Components.JePage {}


@ProxyCmp({
  inputs: ['outline']
})
@Component({
  selector: 'je-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['outline'],
})
export class JePill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePill extends Components.JePill {}


@ProxyCmp({
  inputs: ['animated']
})
@Component({
  selector: 'je-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated'],
})
export class JePlaceholder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePlaceholder extends Components.JePlaceholder {}


@ProxyCmp({
  inputs: ['arrow', 'arrowPadding', 'backdropDismiss', 'destroy', 'dismissOnClick', 'init', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'triggerAction'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrow', 'arrowPadding', 'backdropDismiss', 'destroy', 'dismissOnClick', 'init', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'triggerAction'],
})
export class JePopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['willPresent', 'present', 'dismiss', 'willDismiss', 'ready']);
  }
}


import type { OverlayData as IJePopoverOverlayData } from 'jebamo';

export declare interface JePopover extends Components.JePopover {
  /**
   * Emits before the popover starts opening
   */
  willPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover is opened
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover is closed
   */
  dismiss: EventEmitter<CustomEvent<IJePopoverOverlayData>>;
  /**
   * Emits before the popover starts dismissing
   */
  willDismiss: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover has completed it's initial render
   */
  ready: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['selected', 'value']
})
@Component({
  selector: 'je-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'value'],
})
export class JeRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRadio extends Components.JeRadio {}


@ProxyCmp({
  inputs: ['selected', 'value']
})
@Component({
  selector: 'je-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'value'],
})
export class JeRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRadioButton extends Components.JeRadioButton {}


@ProxyCmp({
  inputs: ['disabled', 'label', 'note', 'originalValue', 'required', 'value']
})
@Component({
  selector: 'je-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'note', 'originalValue', 'required', 'value'],
})
export class JeRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeRadioGroup extends Components.JeRadioGroup {
  /**
   * Emits the selected value whenever it changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-refresher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeRefresher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRefresher extends Components.JeRefresher {}


@ProxyCmp({
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value']
})
@Component({
  selector: 'je-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value'],
})
export class JeSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeSelect extends Components.JeSelect {

  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['active', 'value']
})
@Component({
  selector: 'je-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'value'],
})
export class JeTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTab extends Components.JeTab {}


@ProxyCmp({
  inputs: ['mode', 'value']
})
@Component({
  selector: 'je-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'value'],
})
export class JeTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeTabs extends Components.JeTabs {

  valueChange: EventEmitter<CustomEvent<string | undefined>>;
}


@ProxyCmp({
  inputs: ['autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'debounce', 'disabled', 'error', 'format', 'inputMode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiline', 'note', 'originalValue', 'pattern', 'pending', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'success', 'suppressDefaultBehavior', 'transform', 'type', 'validators', 'value', 'wrap'],
  methods: ['getInputElement', 'markAsTouched', 'getErrors', 'isTouched']
})
@Component({
  selector: 'je-textfield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'debounce', 'disabled', 'error', 'format', 'inputMode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiline', 'note', 'originalValue', 'pattern', 'pending', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'success', 'suppressDefaultBehavior', 'transform', 'type', 'validators', 'value', 'wrap'],
})
export class JeTextfield {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeTextfield extends Components.JeTextfield {
  /**
   * Emits as the user types
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['position']
})
@Component({
  selector: 'je-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
})
export class JeToastContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeToastContainer extends Components.JeToastContainer {}


@ProxyCmp({
  inputs: ['labelPlacement', 'originalValue', 'value']
})
@Component({
  selector: 'je-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['labelPlacement', 'originalValue', 'value'],
})
export class JeToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeToggle extends Components.JeToggle {
  /**
   * Emits the new value whenever toggle is clicked
   */
  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeToolbar extends Components.JeToolbar {}


@ProxyCmp({
  inputs: ['content', 'offsetX', 'offsetY']
})
@Component({
  selector: 'je-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'offsetX', 'offsetY'],
})
export class JeTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTooltip extends Components.JeTooltip {}


@ProxyCmp({
  inputs: ['indentation', 'selection', 'value']
})
@Component({
  selector: 'je-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indentation', 'selection', 'value'],
})
export class JeTree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeTree extends Components.JeTree {

  valueChange: EventEmitter<CustomEvent<string | string[]>>;
}


@ProxyCmp({
  inputs: ['steps'],
  methods: ['next', 'previous', 'skip', 'reset', 'canSkip']
})
@Component({
  selector: 'je-wizard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['steps'],
})
export class JeWizard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepChange', 'finish']);
  }
}


export declare interface JeWizard extends Components.JeWizard {

  stepChange: EventEmitter<CustomEvent<number>>;

  finish: EventEmitter<CustomEvent<void>>;
}


