/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'jebamo/dist/components';

import { defineCustomElement as defineJeAlert } from 'jebamo/dist/components/je-alert.js';
import { defineCustomElement as defineJeBranch } from 'jebamo/dist/components/je-branch.js';
import { defineCustomElement as defineJeButton } from 'jebamo/dist/components/je-button.js';
import { defineCustomElement as defineJeCard } from 'jebamo/dist/components/je-card.js';
import { defineCustomElement as defineJeCheckbox } from 'jebamo/dist/components/je-checkbox.js';
import { defineCustomElement as defineJeCheckboxGroup } from 'jebamo/dist/components/je-checkbox-group.js';
import { defineCustomElement as defineJeCheckboxOption } from 'jebamo/dist/components/je-checkbox-option.js';
import { defineCustomElement as defineJeColor } from 'jebamo/dist/components/je-color.js';
import { defineCustomElement as defineJeColumn } from 'jebamo/dist/components/je-column.js';
import { defineCustomElement as defineJeColumnGroup } from 'jebamo/dist/components/je-column-group.js';
import { defineCustomElement as defineJeDatepicker } from 'jebamo/dist/components/je-datepicker.js';
import { defineCustomElement as defineJeDetails } from 'jebamo/dist/components/je-details.js';
import { defineCustomElement as defineJeDivider } from 'jebamo/dist/components/je-divider.js';
import { defineCustomElement as defineJeDrawer } from 'jebamo/dist/components/je-drawer.js';
import { defineCustomElement as defineJeDropzone } from 'jebamo/dist/components/je-dropzone.js';
import { defineCustomElement as defineJeForm } from 'jebamo/dist/components/je-form.js';
import { defineCustomElement as defineJeIcon } from 'jebamo/dist/components/je-icon.js';
import { defineCustomElement as defineJeInfinite } from 'jebamo/dist/components/je-infinite.js';
import { defineCustomElement as defineJeInput } from 'jebamo/dist/components/je-input.js';
import { defineCustomElement as defineJeLink } from 'jebamo/dist/components/je-link.js';
import { defineCustomElement as defineJeLoading } from 'jebamo/dist/components/je-loading.js';
import { defineCustomElement as defineJeMenu } from 'jebamo/dist/components/je-menu.js';
import { defineCustomElement as defineJeMenuOption } from 'jebamo/dist/components/je-menu-option.js';
import { defineCustomElement as defineJeModal } from 'jebamo/dist/components/je-modal.js';
import { defineCustomElement as defineJeMultiselect } from 'jebamo/dist/components/je-multiselect.js';
import { defineCustomElement as defineJeMultiselectOption } from 'jebamo/dist/components/je-multiselect-option.js';
import { defineCustomElement as defineJePage } from 'jebamo/dist/components/je-page.js';
import { defineCustomElement as defineJePill } from 'jebamo/dist/components/je-pill.js';
import { defineCustomElement as defineJePlaceholder } from 'jebamo/dist/components/je-placeholder.js';
import { defineCustomElement as defineJePopover } from 'jebamo/dist/components/je-popover.js';
import { defineCustomElement as defineJeRadio } from 'jebamo/dist/components/je-radio.js';
import { defineCustomElement as defineJeRadioGroup } from 'jebamo/dist/components/je-radio-group.js';
import { defineCustomElement as defineJeSelect } from 'jebamo/dist/components/je-select.js';
import { defineCustomElement as defineJeSelectOption } from 'jebamo/dist/components/je-select-option.js';
import { defineCustomElement as defineJeTab } from 'jebamo/dist/components/je-tab.js';
import { defineCustomElement as defineJeTabs } from 'jebamo/dist/components/je-tabs.js';
import { defineCustomElement as defineJeTextarea } from 'jebamo/dist/components/je-textarea.js';
import { defineCustomElement as defineJeToast } from 'jebamo/dist/components/je-toast.js';
import { defineCustomElement as defineJeToggle } from 'jebamo/dist/components/je-toggle.js';
import { defineCustomElement as defineJeToolbar } from 'jebamo/dist/components/je-toolbar.js';
import { defineCustomElement as defineJeTree } from 'jebamo/dist/components/je-tree.js';
@ProxyCmp({
  defineCustomElementFn: defineJeAlert,
  inputs: ['backdropClose', 'buttons', 'controls', 'header', 'icon', 'message', 'showBackdrop', 'trigger'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'je-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropClose', 'buttons', 'controls', 'header', 'icon', 'message', 'showBackdrop', 'trigger'],
  standalone: true
})
export class JeAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss', 'didSubmit']);
  }
}


export declare interface JeAlert extends Components.JeAlert {
  /**
   * Emitted when the dialog is presented
   */
  didPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the dialog is dismissed
   */
  didDismiss: EventEmitter<CustomEvent<{ role: string, data: any }>>;
  /**
   * Emitted when the inner form submission is triggered
   */
  didSubmit: EventEmitter<CustomEvent<SubmitEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeBranch
})
@Component({
  selector: 'je-branch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeButton,
  inputs: ['color', 'darkModeColor', 'disabled', 'expand', 'fill', 'iconOnly', 'lightModeColor', 'size', 'type']
})
@Component({
  selector: 'je-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'darkModeColor', 'disabled', 'expand', 'fill', 'iconOnly', 'lightModeColor', 'size', 'type'],
  standalone: true
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
  defineCustomElementFn: defineJeCard,
  inputs: ['button', 'color']
})
@Component({
  selector: 'je-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'color'],
  standalone: true
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
  defineCustomElementFn: defineJeCheckbox,
  inputs: ['disabled', 'indeterminate', 'labelOnly', 'labelPlacement', 'readonly', 'value']
})
@Component({
  selector: 'je-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'indeterminate', 'labelOnly', 'labelPlacement', 'readonly', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeCheckboxGroup,
  inputs: ['label', 'value']
})
@Component({
  selector: 'je-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeCheckboxOption,
  inputs: ['checked', 'disabled', 'readonly', 'value']
})
@Component({
  selector: 'je-checkbox-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'readonly', 'value'],
  standalone: true
})
export class JeCheckboxOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['check', 'uncheck']);
  }
}


export declare interface JeCheckboxOption extends Components.JeCheckboxOption {
  /**
   * Emits the value whenever it is checked
   */
  check: EventEmitter<CustomEvent<any>>;
  /**
   * Emits the value whenever it is unchecked
   */
  uncheck: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeColor,
  inputs: ['color', 'darkModeColor', 'lightModeColor']
})
@Component({
  selector: 'je-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'darkModeColor', 'lightModeColor'],
  standalone: true
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
  defineCustomElementFn: defineJeColumn,
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'je-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'],
  standalone: true
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
  defineCustomElementFn: defineJeColumnGroup,
  inputs: ['columns']
})
@Component({
  selector: 'je-column-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns'],
  standalone: true
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
  defineCustomElementFn: defineJeDatepicker,
  inputs: ['value']
})
@Component({
  selector: 'je-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
  standalone: true
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

  valueChange: EventEmitter<CustomEvent<Date | undefined>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeDetails,
  inputs: ['state', 'summary']
})
@Component({
  selector: 'je-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['state', 'summary'],
  standalone: true
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
  defineCustomElementFn: defineJeDivider,
  inputs: ['spacing', 'type']
})
@Component({
  selector: 'je-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['spacing', 'type'],
  standalone: true
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
  defineCustomElementFn: defineJeDrawer,
  inputs: ['state']
})
@Component({
  selector: 'je-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['state'],
  standalone: true
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
  defineCustomElementFn: defineJeDropzone
})
@Component({
  selector: 'je-dropzone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeForm,
  inputs: ['gap']
})
@Component({
  selector: 'je-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['gap'],
  standalone: true
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

  formData: EventEmitter<CustomEvent<FormData>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeIcon,
  inputs: ['fill', 'grade', 'icon', 'size', 'weight']
})
@Component({
  selector: 'je-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fill', 'grade', 'icon', 'size', 'weight'],
  standalone: true
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
  defineCustomElementFn: defineJeInfinite,
  inputs: ['loading', 'rootMargin', 'threshold']
})
@Component({
  selector: 'je-infinite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loading', 'rootMargin', 'threshold'],
  standalone: true
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
  defineCustomElementFn: defineJeInput,
  inputs: ['autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'debounce', 'disabled', 'dismissOnClick', 'dropdown', 'expand', 'format', 'helperText', 'inputMode', 'label', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'noTyping', 'pattern', 'placeholder', 'readOnly', 'required', 'spellcheck', 'step', 'type', 'validators', 'value'],
  methods: ['getInputElement', 'dismissDropdown', 'markAsTouched', 'hasError', 'reset']
})
@Component({
  selector: 'je-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'debounce', 'disabled', 'dismissOnClick', 'dropdown', 'expand', 'format', 'helperText', 'inputMode', 'label', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'noTyping', 'pattern', 'placeholder', 'readOnly', 'required', 'spellcheck', 'step', 'type', 'validators', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeLink,
  inputs: ['bold', 'color', 'darkModeColor', 'download', 'href', 'lightModeColor', 'rel', 'target', 'underline']
})
@Component({
  selector: 'je-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'color', 'darkModeColor', 'download', 'href', 'lightModeColor', 'rel', 'target', 'underline'],
  standalone: true
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
  defineCustomElementFn: defineJeLoading
})
@Component({
  selector: 'je-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeMenu
})
@Component({
  selector: 'je-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeMenuOption
})
@Component({
  selector: 'je-menu-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class JeMenuOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeMenuOption extends Components.JeMenuOption {}


@ProxyCmp({
  defineCustomElementFn: defineJeModal,
  inputs: ['backdropClose', 'showBackdrop', 'trigger'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'je-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropClose', 'showBackdrop', 'trigger'],
  standalone: true
})
export class JeModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss']);
  }
}


export declare interface JeModal extends Components.JeModal {
  /**
   * Emits whenever the modal has opened. Does not emit any data
   */
  didPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the modal has finished closing. Emits the role and optional data object passed to the closeModal() method.
   */
  didDismiss: EventEmitter<CustomEvent<{ role: string, data: any }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeMultiselect,
  inputs: ['expand', 'label', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'je-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expand', 'label', 'placeholder', 'required', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeMultiselectOption,
  inputs: ['checked', 'value']
})
@Component({
  selector: 'je-multiselect-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJePage,
  inputs: ['leftPanel', 'rightPanel', 'theme']
})
@Component({
  selector: 'je-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['leftPanel', 'rightPanel', 'theme'],
  standalone: true
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
  defineCustomElementFn: defineJePill,
  inputs: ['button', 'disabled', 'outline']
})
@Component({
  selector: 'je-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['button', 'disabled', 'outline'],
  standalone: true
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
  defineCustomElementFn: defineJePlaceholder,
  inputs: ['animated']
})
@Component({
  selector: 'je-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated'],
  standalone: true
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
  defineCustomElementFn: defineJePopover,
  inputs: ['backdropDismiss', 'dismissOnClick', 'offsetX', 'offsetY', 'position', 'showBackdrop', 'trigger', 'triggerAction'],
  methods: ['present', 'dismiss']
})
@Component({
  selector: 'je-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['backdropDismiss', 'dismissOnClick', 'offsetX', 'offsetY', 'position', 'showBackdrop', 'trigger', 'triggerAction'],
  standalone: true
})
export class JePopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['didPresent', 'didDismiss']);
  }
}


export declare interface JePopover extends Components.JePopover {
  /**
   * Emits whenever the popover has presented. Does not emit any data
   */
  didPresent: EventEmitter<CustomEvent<any>>;
  /**
   * Emits whenever the popover has finished dismissing. Emits the role
and optional data object passed to the dismiss() method.
   */
  didDismiss: EventEmitter<CustomEvent<{ role?: string, data?: any }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineJeRadio,
  inputs: ['labelPlacement', 'selected', 'value']
})
@Component({
  selector: 'je-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['labelPlacement', 'selected', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeRadioGroup,
  inputs: ['disabled', 'label', 'readonly', 'value']
})
@Component({
  selector: 'je-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'readonly', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeSelect,
  inputs: ['expand', 'label', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'je-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expand', 'label', 'placeholder', 'required', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeSelectOption,
  inputs: ['selected', 'value']
})
@Component({
  selector: 'je-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeTab
})
@Component({
  selector: 'je-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeTabs
})
@Component({
  selector: 'je-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeTextarea,
  inputs: ['debounce', 'disabled', 'label', 'maxLength', 'placeholder', 'readonly', 'required', 'value']
})
@Component({
  selector: 'je-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['debounce', 'disabled', 'label', 'maxLength', 'placeholder', 'readonly', 'required', 'value'],
  standalone: true
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
  defineCustomElementFn: defineJeToast
})
@Component({
  selector: 'je-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class JeToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeToast extends Components.JeToast {}


@ProxyCmp({
  defineCustomElementFn: defineJeToggle,
  inputs: ['checked', 'labelPlacement']
})
@Component({
  selector: 'je-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'labelPlacement'],
  standalone: true
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
  defineCustomElementFn: defineJeToolbar
})
@Component({
  selector: 'je-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
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
  defineCustomElementFn: defineJeTree
})
@Component({
  selector: 'je-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class JeTree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface JeTree extends Components.JeTree {}


