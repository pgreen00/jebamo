/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'jebamo';


@ProxyCmp({
})
@Component({
  selector: 'je-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeAccordion {
  protected el: HTMLJeAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeAccordion extends Components.JeAccordion {}


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
  outputs: ['present', 'dismiss'],
  standalone: false
})
export class JeAlert {
  protected el: HTMLJeAlertElement;
  @Output() present = new EventEmitter<CustomEvent<any>>();
  @Output() dismiss = new EventEmitter<CustomEvent<IJeAlertOverlayData>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeBranch {
  protected el: HTMLJeBranchElement;
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
  standalone: false
})
export class JeBreadcrumb {
  protected el: HTMLJeBreadcrumbElement;
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
  outputs: ['expandClick'],
  standalone: false
})
export class JeBreadcrumbs {
  protected el: HTMLJeBreadcrumbsElement;
  @Output() expandClick = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeButton {
  protected el: HTMLJeButtonElement;
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
  standalone: false
})
export class JeButtonGroup {
  protected el: HTMLJeButtonGroupElement;
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
  standalone: false
})
export class JeCalendar {
  protected el: HTMLJeCalendarElement;
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
  standalone: false
})
export class JeCard {
  protected el: HTMLJeCardElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeCheckbox {
  protected el: HTMLJeCheckboxElement;
  @Output() valueChange = new EventEmitter<CustomEvent<boolean | undefined>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeColor {
  protected el: HTMLJeColorElement;
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
  standalone: false
})
export class JeColumn {
  protected el: HTMLJeColumnElement;
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
  standalone: false
})
export class JeColumnGroup {
  protected el: HTMLJeColumnGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeColumnGroup extends Components.JeColumnGroup {}


@ProxyCmp({
})
@Component({
  selector: 'je-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeControl {
  protected el: HTMLJeControlElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeControl extends Components.JeControl {}


@ProxyCmp({
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value']
})
@Component({
  selector: 'je-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value'],
  outputs: ['valueChange'],
  standalone: false
})
export class JeDatepicker {
  protected el: HTMLJeDatepickerElement;
  @Output() valueChange = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  outputs: ['expand', 'collapse'],
  standalone: false
})
export class JeDetails {
  protected el: HTMLJeDetailsElement;
  @Output() expand = new EventEmitter<CustomEvent<any>>();
  @Output() collapse = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDetails extends Components.JeDetails {

  expand: EventEmitter<CustomEvent<any>>;

  collapse: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-discard-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeDiscardForm {
  protected el: HTMLJeDiscardFormElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDiscardForm extends Components.JeDiscardForm {}


@ProxyCmp({
  inputs: ['spacing', 'type']
})
@Component({
  selector: 'je-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['spacing', 'type'],
  standalone: false
})
export class JeDivider {
  protected el: HTMLJeDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDivider extends Components.JeDivider {}


@ProxyCmp({
})
@Component({
  selector: 'je-dropzone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['dataDrop'],
  standalone: false
})
export class JeDropzone {
  protected el: HTMLJeDropzoneElement;
  @Output() dataDrop = new EventEmitter<CustomEvent<DataTransfer>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  outputs: ['formData'],
  standalone: false
})
export class JeForm {
  protected el: HTMLJeFormElement;
  @Output() formData = new EventEmitter<CustomEvent<Record<string, any>>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeIcon {
  protected el: HTMLJeIconElement;
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
  standalone: false
})
export class JeIconButton {
  protected el: HTMLJeIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeIconButton extends Components.JeIconButton {}


@ProxyCmp({
})
@Component({
  selector: 'je-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeItem {
  protected el: HTMLJeItemElement;
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
  standalone: false
})
export class JeLabel {
  protected el: HTMLJeLabelElement;
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
  standalone: false
})
export class JeLink {
  protected el: HTMLJeLinkElement;
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
  standalone: false
})
export class JeLoading {
  protected el: HTMLJeLoadingElement;
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
  standalone: false
})
export class JeMenu {
  protected el: HTMLJeMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeMenu extends Components.JeMenu {}


@ProxyCmp({
  inputs: ['mode']
})
@Component({
  selector: 'je-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode'],
  standalone: false
})
export class JeNav {
  protected el: HTMLJeNavElement;
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
  standalone: false
})
export class JeNote {
  protected el: HTMLJeNoteElement;
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
  standalone: false
})
export class JeOption {
  protected el: HTMLJeOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeOption extends Components.JeOption {}


@ProxyCmp({
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side', 'size'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side', 'size'],
  outputs: ['present', 'dismiss', 'backdropClick'],
  standalone: false
})
export class JeOverlay {
  protected el: HTMLJeOverlayElement;
  @Output() present = new EventEmitter<CustomEvent<any>>();
  @Output() dismiss = new EventEmitter<CustomEvent<IJeOverlayOverlayData>>();
  @Output() backdropClick = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { OverlayData as IJeOverlayOverlayData } from 'jebamo';

export declare interface JeOverlay extends Components.JeOverlay {
  /**
   * Emits whenever the drawer has opened. Does not emit any data
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the drawer has finished closing. Emits the role and optional data object passed to the hide() method.
   */
  dismiss: EventEmitter<CustomEvent<IJeOverlayOverlayData>>;
  /**
   * Emits whenever the backdrop is clicked. Does not emit any data
   */
  backdropClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['closable', 'label']
})
@Component({
  selector: 'je-overlay-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'label'],
  standalone: false
})
export class JeOverlayContent {
  protected el: HTMLJeOverlayContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeOverlayContent extends Components.JeOverlayContent {}


@ProxyCmp({
  inputs: ['layout']
})
@Component({
  selector: 'je-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout'],
  standalone: false
})
export class JePage {
  protected el: HTMLJePageElement;
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
  standalone: false
})
export class JePill {
  protected el: HTMLJePillElement;
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
  standalone: false
})
export class JePlaceholder {
  protected el: HTMLJePlaceholderElement;
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
  outputs: ['willPresent', 'present', 'dismiss', 'willDismiss', 'ready'],
  standalone: false
})
export class JePopover {
  protected el: HTMLJePopoverElement;
  @Output() willPresent = new EventEmitter<CustomEvent<any>>();
  @Output() present = new EventEmitter<CustomEvent<any>>();
  @Output() dismiss = new EventEmitter<CustomEvent<IJePopoverOverlayData>>();
  @Output() willDismiss = new EventEmitter<CustomEvent<any>>();
  @Output() ready = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeRadio {
  protected el: HTMLJeRadioElement;
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
  standalone: false
})
export class JeRadioButton {
  protected el: HTMLJeRadioButtonElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeRadioGroup {
  protected el: HTMLJeRadioGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  selector: 'je-reorder-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeReorderItem {
  protected el: HTMLJeReorderItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeReorderItem extends Components.JeReorderItem {}


@ProxyCmp({
})
@Component({
  selector: 'je-reorder-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeReorderList {
  protected el: HTMLJeReorderListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeReorderList extends Components.JeReorderList {}


@ProxyCmp({
  inputs: ['disabled', 'maxHeight', 'minHeight', 'placeholder', 'readonly', 'showWordCount', 'value'],
  methods: ['getContent', 'getText', 'setContent', 'clear', 'focus']
})
@Component({
  selector: 'je-rich-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'maxHeight', 'minHeight', 'placeholder', 'readonly', 'showWordCount', 'value'],
  outputs: ['editorChange', 'editorFocus', 'editorBlur'],
  standalone: false
})
export class JeRichText {
  protected el: HTMLJeRichTextElement;
  @Output() editorChange = new EventEmitter<CustomEvent<IJeRichTextEditorChangeEvent>>();
  @Output() editorFocus = new EventEmitter<CustomEvent<FocusEvent>>();
  @Output() editorBlur = new EventEmitter<CustomEvent<FocusEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { EditorChangeEvent as IJeRichTextEditorChangeEvent } from 'jebamo';

export declare interface JeRichText extends Components.JeRichText {

  editorChange: EventEmitter<CustomEvent<IJeRichTextEditorChangeEvent>>;

  editorFocus: EventEmitter<CustomEvent<FocusEvent>>;

  editorBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value']
})
@Component({
  selector: 'je-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value'],
  outputs: ['valueChange'],
  standalone: false
})
export class JeSelect {
  protected el: HTMLJeSelectElement;
  @Output() valueChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeSelect extends Components.JeSelect {

  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'je-split-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeSplitPanel {
  protected el: HTMLJeSplitPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeSplitPanel extends Components.JeSplitPanel {}


@ProxyCmp({
})
@Component({
  selector: 'je-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeSplitView {
  protected el: HTMLJeSplitViewElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeSplitView extends Components.JeSplitView {}


@ProxyCmp({
})
@Component({
  selector: 'je-store',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class JeStore {
  protected el: HTMLJeStoreElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeStore extends Components.JeStore {}


@ProxyCmp({
  inputs: ['active', 'value']
})
@Component({
  selector: 'je-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'value'],
  standalone: false
})
export class JeTab {
  protected el: HTMLJeTabElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeTabs {
  protected el: HTMLJeTabsElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string | undefined>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeTextfield {
  protected el: HTMLJeTextfieldElement;
  @Output() valueChange = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeToastContainer {
  protected el: HTMLJeToastContainerElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeToggle {
  protected el: HTMLJeToggleElement;
  @Output() valueChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  standalone: false
})
export class JeToolbar {
  protected el: HTMLJeToolbarElement;
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
  standalone: false
})
export class JeTooltip {
  protected el: HTMLJeTooltipElement;
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
  outputs: ['valueChange'],
  standalone: false
})
export class JeTree {
  protected el: HTMLJeTreeElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string | string[]>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  outputs: ['stepChange', 'finish'],
  standalone: false
})
export class JeWizard {
  protected el: HTMLJeWizardElement;
  @Output() stepChange = new EventEmitter<CustomEvent<number>>();
  @Output() finish = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeWizard extends Components.JeWizard {

  stepChange: EventEmitter<CustomEvent<number>>;

  finish: EventEmitter<CustomEvent<void>>;
}


