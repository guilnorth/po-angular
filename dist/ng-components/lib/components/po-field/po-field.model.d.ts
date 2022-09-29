import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare abstract class PoFieldModel<T> implements ControlValueAccessor {
    /** Rótulo exibido pelo componente. */
    label: string;
    /** Nome do componente. */
    name: string;
    /** Texto de apoio para o campo. */
    help: string;
    /**
     * @optional
     *
     * @description
     *
     * Indica se o campo será desabilitado.
     *
     * @default `false`
     */
    disabled: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Evento disparado ao alterar valor do campo.
     */
    change: EventEmitter<T>;
    value: T;
    protected onTouched: any;
    private propagateChange;
    constructor();
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: T): void;
    emitChange(value: any): void;
    protected updateModel(value: T): void;
    abstract onWriteValue(value: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoFieldModel<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoFieldModel<any>, never, never, { "label": "p-label"; "name": "name"; "help": "p-help"; "disabled": "p-disabled"; }, { "change": "p-change"; }, never, never, false>;
}