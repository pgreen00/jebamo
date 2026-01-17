/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'jebamo/components';

import { defineCustomElement as defineJeAccordion } from 'jebamo/components/je-accordion.js';
import { defineCustomElement as defineJeAlert } from 'jebamo/components/je-alert.js';
import { defineCustomElement as defineJeBranch } from 'jebamo/components/je-branch.js';
import { defineCustomElement as defineJeBreadcrumb } from 'jebamo/components/je-breadcrumb.js';
import { defineCustomElement as defineJeBreadcrumbs } from 'jebamo/components/je-breadcrumbs.js';
import { defineCustomElement as defineJeButton } from 'jebamo/components/je-button.js';
import { defineCustomElement as defineJeButtonGroup } from 'jebamo/components/je-button-group.js';
import { defineCustomElement as defineJeCalendar } from 'jebamo/components/je-calendar.js';
import { defineCustomElement as defineJeCard } from 'jebamo/components/je-card.js';
import { defineCustomElement as defineJeCheckbox } from 'jebamo/components/je-checkbox.js';
import { defineCustomElement as defineJeColor } from 'jebamo/components/je-color.js';
import { defineCustomElement as defineJeComp } from 'jebamo/components/je-comp.js';
import { defineCustomElement as defineJeControl } from 'jebamo/components/je-control.js';
import { defineCustomElement as defineJeDatepicker } from 'jebamo/components/je-datepicker.js';
import { defineCustomElement as defineJeDaw } from 'jebamo/components/je-daw.js';
import { defineCustomElement as defineJeDetails } from 'jebamo/components/je-details.js';
import { defineCustomElement as defineJeDiscardForm } from 'jebamo/components/je-discard-form.js';
import { defineCustomElement as defineJeDivider } from 'jebamo/components/je-divider.js';
import { defineCustomElement as defineJeDropzone } from 'jebamo/components/je-dropzone.js';
import { defineCustomElement as defineJeEq } from 'jebamo/components/je-eq.js';
import { defineCustomElement as defineJeForm } from 'jebamo/components/je-form.js';
import { defineCustomElement as defineJeGrid } from 'jebamo/components/je-grid.js';
import { defineCustomElement as defineJeIcon } from 'jebamo/components/je-icon.js';
import { defineCustomElement as defineJeItem } from 'jebamo/components/je-item.js';
import { defineCustomElement as defineJeKnob } from 'jebamo/components/je-knob.js';
import { defineCustomElement as defineJeLabel } from 'jebamo/components/je-label.js';
import { defineCustomElement as defineJeLink } from 'jebamo/components/je-link.js';
import { defineCustomElement as defineJeList } from 'jebamo/components/je-list.js';
import { defineCustomElement as defineJeLoading } from 'jebamo/components/je-loading.js';
import { defineCustomElement as defineJeMidi } from 'jebamo/components/je-midi.js';
import { defineCustomElement as defineJeNote } from 'jebamo/components/je-note.js';
import { defineCustomElement as defineJeOption } from 'jebamo/components/je-option.js';
import { defineCustomElement as defineJeOverlay } from 'jebamo/components/je-overlay.js';
import { defineCustomElement as defineJeOverlayContent } from 'jebamo/components/je-overlay-content.js';
import { defineCustomElement as defineJePage } from 'jebamo/components/je-page.js';
import { defineCustomElement as defineJePill } from 'jebamo/components/je-pill.js';
import { defineCustomElement as defineJePlaceholder } from 'jebamo/components/je-placeholder.js';
import { defineCustomElement as defineJePopover } from 'jebamo/components/je-popover.js';
import { defineCustomElement as defineJeRadio } from 'jebamo/components/je-radio.js';
import { defineCustomElement as defineJeRadioButton } from 'jebamo/components/je-radio-button.js';
import { defineCustomElement as defineJeRadioGroup } from 'jebamo/components/je-radio-group.js';
import { defineCustomElement as defineJeRange } from 'jebamo/components/je-range.js';
import { defineCustomElement as defineJeReorderItem } from 'jebamo/components/je-reorder-item.js';
import { defineCustomElement as defineJeReorderList } from 'jebamo/components/je-reorder-list.js';
import { defineCustomElement as defineJeRichText } from 'jebamo/components/je-rich-text.js';
import { defineCustomElement as defineJeSelect } from 'jebamo/components/je-select.js';
import { defineCustomElement as defineJeSplitPanel } from 'jebamo/components/je-split-panel.js';
import { defineCustomElement as defineJeSplitView } from 'jebamo/components/je-split-view.js';
import { defineCustomElement as defineJeStack } from 'jebamo/components/je-stack.js';
import { defineCustomElement as defineJeSynth } from 'jebamo/components/je-synth.js';
import { defineCustomElement as defineJeTab } from 'jebamo/components/je-tab.js';
import { defineCustomElement as defineJeTabs } from 'jebamo/components/je-tabs.js';
import { defineCustomElement as defineJeTextfield } from 'jebamo/components/je-textfield.js';
import { defineCustomElement as defineJeToc } from 'jebamo/components/je-toc.js';
import { defineCustomElement as defineJeToggle } from 'jebamo/components/je-toggle.js';
import { defineCustomElement as defineJeToolbar } from 'jebamo/components/je-toolbar.js';
import { defineCustomElement as defineJeTooltip } from 'jebamo/components/je-tooltip.js';
import { defineCustomElement as defineJeTree } from 'jebamo/components/je-tree.js';
import { defineCustomElement as defineJeWizard } from 'jebamo/components/je-wizard.js';
@ProxyCmp({
  defineCustomElementFn: defineJeAccordion
})
@Component({
  selector: 'je-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeAlert,
  inputs: ['closable', 'color', 'duration', 'open'],
  methods: ['show', 'hide', 'didDismiss']
})
@Component({
  selector: 'je-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'color', 'duration', 'open'],
  outputs: ['present', 'dismiss'],
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


import type { OverlayData as IJeAlertOverlayData } from 'jebamo/components';

export declare interface JeAlert extends Components.JeAlert {

  present: EventEmitter<CustomEvent<any>>;

  dismiss: EventEmitter<CustomEvent<IJeAlertOverlayData>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeBranch,
  inputs: ['href', 'indentation', 'label', 'open', 'selected', 'selection', 'value'],
  methods: ['isLeaf']
})
@Component({
  selector: 'je-branch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'indentation', 'label', 'open', 'selected', 'selection', 'value'],
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
  defineCustomElementFn: defineJeBreadcrumb
})
@Component({
  selector: 'je-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeBreadcrumbs,
  inputs: ['itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems']
})
@Component({
  selector: 'je-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems'],
  outputs: ['expandClick'],
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
  defineCustomElementFn: defineJeButton,
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
  protected el: HTMLJeButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeButton extends Components.JeButton {}


@ProxyCmp({
  defineCustomElementFn: defineJeButtonGroup
})
@Component({
  selector: 'je-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeCalendar
})
@Component({
  selector: 'je-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeCard
})
@Component({
  selector: 'je-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeCheckbox,
  inputs: ['data', 'indeterminate', 'labelPlacement', 'originalValue', 'required', 'value']
})
@Component({
  selector: 'je-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'indeterminate', 'labelPlacement', 'originalValue', 'required', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeColor,
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
  protected el: HTMLJeColorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeColor extends Components.JeColor {}


@ProxyCmp({
  defineCustomElementFn: defineJeComp
})
@Component({
  selector: 'je-comp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeComp {
  protected el: HTMLJeCompElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeComp extends Components.JeComp {}


@ProxyCmp({
  defineCustomElementFn: defineJeControl
})
@Component({
  selector: 'je-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeDatepicker,
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value']
})
@Component({
  selector: 'je-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['includeSeconds', 'isDateDisabled', 'max', 'min', 'type', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeDaw
})
@Component({
  selector: 'je-daw',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeDaw {
  protected el: HTMLJeDawElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDaw extends Components.JeDaw {}


@ProxyCmp({
  defineCustomElementFn: defineJeDetails,
  inputs: ['iconSide', 'iconToggle', 'open', 'summary']
})
@Component({
  selector: 'je-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['iconSide', 'iconToggle', 'open', 'summary'],
  outputs: ['expand', 'collapse'],
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
  defineCustomElementFn: defineJeDiscardForm
})
@Component({
  selector: 'je-discard-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeDivider,
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
  protected el: HTMLJeDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDivider extends Components.JeDivider {}


@ProxyCmp({
  defineCustomElementFn: defineJeDropzone
})
@Component({
  selector: 'je-dropzone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['dataDrop'],
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
  defineCustomElementFn: defineJeEq
})
@Component({
  selector: 'je-eq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeEq {
  protected el: HTMLJeEqElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeEq extends Components.JeEq {}


@ProxyCmp({
  defineCustomElementFn: defineJeForm,
  methods: ['addInvalidSubmission']
})
@Component({
  selector: 'je-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['dataSubmit'],
})
export class JeForm {
  protected el: HTMLJeFormElement;
  @Output() dataSubmit = new EventEmitter<CustomEvent<Record<string, any>>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeForm extends Components.JeForm {

  dataSubmit: EventEmitter<CustomEvent<Record<string, any>>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeGrid,
  inputs: ['space']
})
@Component({
  selector: 'je-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['space'],
})
export class JeGrid {
  protected el: HTMLJeGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeGrid extends Components.JeGrid {}


@ProxyCmp({
  defineCustomElementFn: defineJeIcon,
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
  protected el: HTMLJeIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeIcon extends Components.JeIcon {}


@ProxyCmp({
  defineCustomElementFn: defineJeItem
})
@Component({
  selector: 'je-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeKnob
})
@Component({
  selector: 'je-knob',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeKnob {
  protected el: HTMLJeKnobElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeKnob extends Components.JeKnob {}


@ProxyCmp({
  defineCustomElementFn: defineJeLabel,
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
  protected el: HTMLJeLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeLabel extends Components.JeLabel {}


@ProxyCmp({
  defineCustomElementFn: defineJeLink,
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
  protected el: HTMLJeLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeLink extends Components.JeLink {}


@ProxyCmp({
  defineCustomElementFn: defineJeList
})
@Component({
  selector: 'je-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeList {
  protected el: HTMLJeListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeList extends Components.JeList {}


@ProxyCmp({
  defineCustomElementFn: defineJeLoading
})
@Component({
  selector: 'je-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeMidi
})
@Component({
  selector: 'je-midi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeMidi {
  protected el: HTMLJeMidiElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeMidi extends Components.JeMidi {}


@ProxyCmp({
  defineCustomElementFn: defineJeNote,
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
  protected el: HTMLJeNoteElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeNote extends Components.JeNote {}


@ProxyCmp({
  defineCustomElementFn: defineJeOption,
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
  protected el: HTMLJeOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeOption extends Components.JeOption {}


@ProxyCmp({
  defineCustomElementFn: defineJeOverlay,
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side', 'size'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'destroy', 'init', 'open', 'side', 'size'],
  outputs: ['present', 'dismiss'],
})
export class JeOverlay {
  protected el: HTMLJeOverlayElement;
  @Output() present = new EventEmitter<CustomEvent<any>>();
  @Output() dismiss = new EventEmitter<CustomEvent<IJeOverlayOverlayData>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { OverlayData as IJeOverlayOverlayData } from 'jebamo/components';

export declare interface JeOverlay extends Components.JeOverlay {
  /**
   * Emits whenever the overlay has opened. Does not emit any data
   */
  present: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the overlay has finished closing. Emits the role and optional data object passed to the hide() method.
   */
  dismiss: EventEmitter<CustomEvent<IJeOverlayOverlayData>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeOverlayContent,
  inputs: ['closable', 'label']
})
@Component({
  selector: 'je-overlay-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'label'],
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
  defineCustomElementFn: defineJePage
})
@Component({
  selector: 'je-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJePill,
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
  protected el: HTMLJePillElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePill extends Components.JePill {}


@ProxyCmp({
  defineCustomElementFn: defineJePlaceholder,
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
  protected el: HTMLJePlaceholderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePlaceholder extends Components.JePlaceholder {}


@ProxyCmp({
  defineCustomElementFn: defineJePopover,
  inputs: ['arrow', 'arrowPadding', 'backdropDismiss', 'destroy', 'dismissOnClick', 'init', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'triggerAction'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'je-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrow', 'arrowPadding', 'backdropDismiss', 'destroy', 'dismissOnClick', 'init', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'triggerAction'],
  outputs: ['presentStart', 'presentEnd', 'dismissStart', 'dismissEnd', 'ready'],
})
export class JePopover {
  protected el: HTMLJePopoverElement;
  @Output() presentStart = new EventEmitter<CustomEvent<any>>();
  @Output() presentEnd = new EventEmitter<CustomEvent<any>>();
  @Output() dismissStart = new EventEmitter<CustomEvent<any>>();
  @Output() dismissEnd = new EventEmitter<CustomEvent<any>>();
  @Output() ready = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JePopover extends Components.JePopover {
  /**
   * Emits before the popover starts opening
   */
  presentStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover is opened
   */
  presentEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emits before the popover starts dismissing
   */
  dismissStart: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover is closed
   */
  dismissEnd: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover has completed it's initial render
   */
  ready: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeRadio,
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
  protected el: HTMLJeRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRadio extends Components.JeRadio {}


@ProxyCmp({
  defineCustomElementFn: defineJeRadioButton,
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
  protected el: HTMLJeRadioButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRadioButton extends Components.JeRadioButton {}


@ProxyCmp({
  defineCustomElementFn: defineJeRadioGroup,
  inputs: ['disabled', 'label', 'note', 'originalValue', 'required', 'value']
})
@Component({
  selector: 'je-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'note', 'originalValue', 'required', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeRange
})
@Component({
  selector: 'je-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeRange {
  protected el: HTMLJeRangeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeRange extends Components.JeRange {}


@ProxyCmp({
  defineCustomElementFn: defineJeReorderItem
})
@Component({
  selector: 'je-reorder-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeReorderList
})
@Component({
  selector: 'je-reorder-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeRichText,
  inputs: ['disabled', 'maxHeight', 'minHeight', 'placeholder', 'readonly', 'showWordCount', 'value'],
  methods: ['getContent', 'getText', 'setContent', 'clear']
})
@Component({
  selector: 'je-rich-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'maxHeight', 'minHeight', 'placeholder', 'readonly', 'showWordCount', 'value'],
  outputs: ['editorChange', 'editorFocus', 'editorBlur'],
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


import type { EditorChangeEvent as IJeRichTextEditorChangeEvent } from 'jebamo/components';

export declare interface JeRichText extends Components.JeRichText {

  editorChange: EventEmitter<CustomEvent<IJeRichTextEditorChangeEvent>>;

  editorFocus: EventEmitter<CustomEvent<FocusEvent>>;

  editorBlur: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeSelect,
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value']
})
@Component({
  selector: 'je-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'multiple', 'note', 'options', 'originalValue', 'placeholder', 'required', 'size', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeSplitPanel
})
@Component({
  selector: 'je-split-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeSplitView
})
@Component({
  selector: 'je-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineJeStack,
  inputs: ['align', 'justify', 'mode', 'space']
})
@Component({
  selector: 'je-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'justify', 'mode', 'space'],
})
export class JeStack {
  protected el: HTMLJeStackElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeStack extends Components.JeStack {}


@ProxyCmp({
  defineCustomElementFn: defineJeSynth
})
@Component({
  selector: 'je-synth',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeSynth {
  protected el: HTMLJeSynthElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeSynth extends Components.JeSynth {}


@ProxyCmp({
  defineCustomElementFn: defineJeTab,
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
  protected el: HTMLJeTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTab extends Components.JeTab {}


@ProxyCmp({
  defineCustomElementFn: defineJeTabs,
  inputs: ['mode', 'value']
})
@Component({
  selector: 'je-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeTextfield,
  inputs: ['debounce', 'disabled', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiline', 'note', 'originalValue', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value', 'wrap'],
  methods: ['markAsTouched', 'isTouched']
})
@Component({
  selector: 'je-textfield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['debounce', 'disabled', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiline', 'note', 'originalValue', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'step', 'type', 'value', 'wrap'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeToc
})
@Component({
  selector: 'je-toc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class JeToc {
  protected el: HTMLJeTocElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeToc extends Components.JeToc {}


@ProxyCmp({
  defineCustomElementFn: defineJeToggle,
  inputs: ['labelPlacement', 'originalValue', 'value']
})
@Component({
  selector: 'je-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['labelPlacement', 'originalValue', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeToolbar,
  inputs: ['flank', 'mode', 'space']
})
@Component({
  selector: 'je-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['flank', 'mode', 'space'],
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
  defineCustomElementFn: defineJeTooltip,
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
  protected el: HTMLJeTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTooltip extends Components.JeTooltip {}


@ProxyCmp({
  defineCustomElementFn: defineJeTree,
  inputs: ['indentation', 'selection', 'value']
})
@Component({
  selector: 'je-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indentation', 'selection', 'value'],
  outputs: ['valueChange'],
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
  defineCustomElementFn: defineJeWizard,
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


