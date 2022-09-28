import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { PoFieldModel } from '../po-field.model';
import { PoRadioSize } from './po-radio-size.enum';
import * as i0 from "@angular/core";
export declare class PoRadioComponent extends PoFieldModel<boolean> {
    private changeDetector;
    radioLabel: ElementRef;
    value: boolean;
    private _size;
    /** Define o valor do *radio* */
    radioValue: string;
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho do *radio*
     * @default `medium`
     */
    set size(value: PoRadioSize);
    get size(): PoRadioSize;
    required: boolean;
    /** Define o status do *radio* */
    checked: boolean;
    constructor(changeDetector: ChangeDetectorRef);
    /**
     * Função que atribui foco ao *radio*.
     *
     * Para utilizá-la é necessário capturar a referência do componente no DOM através do `ViewChild`, como por exemplo:
     *
     * ```
     * import { ViewChild } from '@angular/core';
     * import { PoRadioComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoRadioComponent, { static: true }) radio: PoRadioComponent;
     *
     * focusRadio() {
     * this.radio.focus();
     * }
     * ```
     *
     */
    focus(): void;
    onBlur(): void;
    onKeyDown(event: KeyboardEvent): void;
    changeValue(value: any): void;
    eventClick(): void;
    onWriteValue(value: any): void;
    focusIn(): void;
    focusOut(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoRadioComponent, "po-radio", never, { "radioValue": "p-value"; "size": "p-size"; "required": "p-required"; "checked": "p-checked"; }, {}, never, never, false>;
}
