/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'jebamo';


@ProxyCmp({
  inputs: ['backdropDismiss', 'buttons', 'controls', 'header', 'icon', 'message', 'showBackdrop'],
  methods: ['getModalElement', 'present', 'dismiss']
})
@Component({
  selector: 'je-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'buttons', 'controls', 'header', 'icon', 'message', 'showBackdrop'],
})
export class JeAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeAlert extends Components.JeAlert {}


@ProxyCmp({
  inputs: ['label', 'open', 'selected', 'value'],
  methods: ['isLeaf', 'getParentBranch']
})
@Component({
  selector: 'je-branch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'open', 'selected', 'value'],
})
export class JeBranch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['branchSelect']);
  }
}


export declare interface JeBranch extends Components.JeBranch {

  branchSelect: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['color', 'darkModeColor', 'disabled', 'expand', 'fill', 'iconOnly', 'lightModeColor', 'size', 'type']
})
@Component({
  selector: 'je-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'darkModeColor', 'disabled', 'expand', 'fill', 'iconOnly', 'lightModeColor', 'size', 'type'],
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
  inputs: ['disabled', 'indeterminate', 'labelPlacement', 'readonly', 'required', 'value']
})
@Component({
  selector: 'je-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'indeterminate', 'labelPlacement', 'readonly', 'required', 'value'],
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
  inputs: ['defaultValue', 'disabled', 'helperText', 'label', 'readonly', 'required', 'value'],
  methods: ['markAsTouched', 'reset']
})
@Component({
  selector: 'je-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'helperText', 'label', 'readonly', 'required', 'value'],
})
export class JeCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeCheckboxGroup extends Components.JeCheckboxGroup {
  /**
   * Emits the current selected values whenever they change
   */
  valueChange: EventEmitter<CustomEvent<string[]>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'readonly', 'value']
})
@Component({
  selector: 'je-checkbox-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'readonly', 'value'],
})
export class JeCheckboxOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeCheckboxOption extends Components.JeCheckboxOption {}


@ProxyCmp({
  inputs: ['color', 'darkModeColor', 'lightModeColor']
})
@Component({
  selector: 'je-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'darkModeColor', 'lightModeColor'],
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

  valueChange: EventEmitter<CustomEvent<number | undefined>>;
}


@ProxyCmp({
  inputs: ['state', 'summary']
})
@Component({
  selector: 'je-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['state', 'summary'],
})
export class JeDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDetails extends Components.JeDetails {}


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
  inputs: ['side', 'state']
})
@Component({
  selector: 'je-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['side', 'state'],
})
export class JeDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeDrawer extends Components.JeDrawer {}


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

  formData: EventEmitter<CustomEvent<Record<string, FormDataEntryValue>>>;
}


@ProxyCmp({
  inputs: ['fill', 'grade', 'icon', 'size', 'weight']
})
@Component({
  selector: 'je-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fill', 'grade', 'icon', 'size', 'weight'],
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
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'expand', 'format', 'helperText', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'step', 'transform', 'type', 'validators', 'value'],
  methods: ['getInputElement', 'markAsTouched', 'getErrors', 'reset']
})
@Component({
  selector: 'je-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'debounce', 'disabled', 'expand', 'format', 'helperText', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'step', 'transform', 'type', 'validators', 'value'],
})
export class JeInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeInput extends Components.JeInput {
  /**
   * Emits as the user types
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['bold', 'color', 'darkModeColor', 'download', 'href', 'lightModeColor', 'rel', 'target', 'underline']
})
@Component({
  selector: 'je-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'color', 'darkModeColor', 'download', 'href', 'lightModeColor', 'rel', 'target', 'underline'],
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
  inputs: ['type', 'value']
})
@Component({
  selector: 'je-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type', 'value'],
})
export class JeMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface JeMenu extends Components.JeMenu {

  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'value']
})
@Component({
  selector: 'je-menu-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'value'],
})
export class JeMenuOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuOptionSelect']);
  }
}


export declare interface JeMenuOption extends Components.JeMenuOption {

  menuOptionSelect: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['backdropDismiss', 'open', 'showBackdrop'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'je-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'open', 'showBackdrop'],
})
export class JeModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modalPresent', 'modalDismiss']);
  }
}


export declare interface JeModal extends Components.JeModal {
  /**
   * Emits whenever the modal has opened. Does not emit any data
   */
  modalPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method.
   */
  modalDismiss: EventEmitter<CustomEvent<{ role: string, data: any }>>;
}


@ProxyCmp({
  inputs: ['expand', 'label', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'je-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expand', 'label', 'placeholder', 'required', 'value'],
})
export class JeMultiselect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeMultiselect extends Components.JeMultiselect {}


@ProxyCmp({
  inputs: ['checked', 'value']
})
@Component({
  selector: 'je-multiselect-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'value'],
})
export class JeMultiselectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionChecked', 'optionUnchecked']);
  }
}


export declare interface JeMultiselectOption extends Components.JeMultiselectOption {

  optionChecked: EventEmitter<CustomEvent<string>>;

  optionUnchecked: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['footer', 'leftPanel', 'rightPanel', 'theme'],
  methods: ['getCurrentTheme', 'presentToast']
})
@Component({
  selector: 'je-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footer', 'leftPanel', 'rightPanel', 'theme'],
})
export class JePage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['themeChange']);
  }
}


export declare interface JePage extends Components.JePage {

  themeChange: EventEmitter<CustomEvent<'light' | 'dark'>>;
}


@ProxyCmp({
  inputs: ['button', 'disabled', 'outline']
})
@Component({
  selector: 'je-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'disabled', 'outline'],
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
  inputs: ['arrow', 'backdropDismiss', 'dismissOnClick', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'renderBackdrop', 'showBackdrop', 'triggerAction']
})
@Component({
  selector: 'je-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrow', 'backdropDismiss', 'dismissOnClick', 'matchWidth', 'offsetX', 'offsetY', 'open', 'placement', 'positionStrategy', 'renderBackdrop', 'showBackdrop', 'triggerAction'],
})
export class JePopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['popoverPresent', 'popoverDismiss']);
  }
}


export declare interface JePopover extends Components.JePopover {
  /**
   * Emits when the popover is opened
   */
  popoverPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the popover is closed
   */
  popoverDismiss: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['labelPlacement', 'selected', 'value']
})
@Component({
  selector: 'je-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['labelPlacement', 'selected', 'value'],
})
export class JeRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['radioSelect']);
  }
}


export declare interface JeRadio extends Components.JeRadio {
  /**
   * Emits the value whenever it is selected
   */
  radioSelect: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'readonly', 'value']
})
@Component({
  selector: 'je-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'readonly', 'value'],
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
  inputs: ['expand', 'label', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'je-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expand', 'label', 'placeholder', 'required', 'value'],
})
export class JeSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeSelect extends Components.JeSelect {}


@ProxyCmp({
  inputs: ['selected', 'value']
})
@Component({
  selector: 'je-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'value'],
})
export class JeSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionSelected']);
  }
}


export declare interface JeSelectOption extends Components.JeSelectOption {

  optionSelected: EventEmitter<CustomEvent<string>>;
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
    proxyOutputs(this, this.el, ['tabClick']);
  }
}


export declare interface JeTab extends Components.JeTab {

  tabClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['mode']
})
@Component({
  selector: 'je-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['mode'],
})
export class JeTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTabs extends Components.JeTabs {}


@ProxyCmp({
  inputs: ['debounce', 'disabled', 'label', 'maxLength', 'placeholder', 'readonly', 'required', 'value']
})
@Component({
  selector: 'je-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['debounce', 'disabled', 'label', 'maxLength', 'placeholder', 'readonly', 'required', 'value'],
})
export class JeTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTextarea extends Components.JeTextarea {}


@ProxyCmp({
  inputs: ['closable', 'color', 'duration', 'fixed', 'header', 'icon', 'message', 'open', 'position', 'progress', 'type'],
  methods: ['present', 'dismiss', 'didDismiss']
})
@Component({
  selector: 'je-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closable', 'color', 'duration', 'fixed', 'header', 'icon', 'message', 'open', 'position', 'progress', 'type'],
})
export class JeToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toastPresent', 'toastDismiss']);
  }
}


import type { OverlayData as IJeToastOverlayData } from 'jebamo';

export declare interface JeToast extends Components.JeToast {

  toastPresent: EventEmitter<CustomEvent<any>>;

  toastDismiss: EventEmitter<CustomEvent<IJeToastOverlayData>>;
}


@ProxyCmp({
  inputs: ['checked', 'labelPlacement']
})
@Component({
  selector: 'je-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'labelPlacement'],
})
export class JeToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggled']);
  }
}


export declare interface JeToggle extends Components.JeToggle {
  /**
   * Emits the new value whenever toggle is clicked
   */
  toggled: EventEmitter<CustomEvent<boolean>>;
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

  valueChange: EventEmitter<CustomEvent<string>>;
}


