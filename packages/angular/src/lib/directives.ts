import { Directive, input, output } from "@angular/core";

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