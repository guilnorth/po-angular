import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoInputBaseComponent } from '../po-input/po-input-base.component';
import * as i0 from "@angular/core";
/**
 *
 * @docsExtends PoInputBaseComponent
 *
 * @description
 *
 * <br>
 * - O `po-decimal` é um *input* específico para receber apenas números decimais, por isso recebe as seguintes características:
 *  + Aceita apenas números;
 *  + Utiliza ',' como separador de decimal;
 *  + Utiliza '.' para separação de milhar;
 *  + É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.
 *
 * > **Importante:**
 * Atualmente o JavaScript limita-se a um conjunto de dados de `32 bits`, e para que os valores comportem-se devidamente,
 * o `po-decimal` contém um tratamento que limita em 16 o número total de casas antes e após a vírgula.
 * Veja abaixo as demais regras nas documentações de `p-decimals-length` e `p-thousand-maxlength`.
 *
 * @example
 *
 * <example name="po-decimal-basic" title="PO Decimal Basic">
 *  <file name="sample-po-decimal-basic/sample-po-decimal-basic.component.html"> </file>
 *  <file name="sample-po-decimal-basic/sample-po-decimal-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-labs" title="PO Decimal Labs">
 *  <file name="sample-po-decimal-labs/sample-po-decimal-labs.component.html"> </file>
 *  <file name="sample-po-decimal-labs/sample-po-decimal-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-hourly-wage" title="PO Decimal - Hourly Wage">
 *  <file name="sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"> </file>
 *  <file name="sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"> </file>
 * </example>
 *
 * <example name="po-decimal-hourly-wage-reactive-form" title="PO Decimal - Hourly Wage Reactive Form">
 *  <file name="sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"> </file>
 *  <file name="sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"> </file>
 * </example>
 */
export declare class PoDecimalComponent extends PoInputBaseComponent implements AfterViewInit, OnInit {
    private el;
    private poLanguageService;
    inputEl: ElementRef;
    private _decimalsLength?;
    private _thousandMaxlength?;
    private _locale?;
    private _min?;
    private _max?;
    private decimalSeparator;
    private fireChange;
    private isKeyboardAndroid;
    private minusSign;
    private oldDotsLength;
    private thousandSeparator;
    private valueBeforeChange;
    private regex;
    get autocomplete(): "on" | "off";
    /**
     * @optional
     *
     * @description
     *
     * Quantidade máxima de casas decimais.
     *
     * > **Importante:**
     * - O valor máximo permitido é 15;
     * - A soma total de `p-decimals-length` com `p-thousand-maxlength` limita-se à 16;
     * - Esta propriedade sobrepõe apenas o valor **padrão** de `p-thousand-maxlength`;
     * - Caso `p-thousand-maxlength` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).
     *
     * @default `2`
     */
    set decimalsLength(value: number);
    get decimalsLength(): number;
    /**
     * @optional
     *
     * @description
     *
     * Quantidade máxima de dígitos antes do separador decimal.
     *
     * > **Importante:**
     * - O valor máximo permitido é 13;
     * - A soma total de `p-decimals-length` com `p-thousand-maxlength` limita-se à 16;
     * - Esta propriedade sobrepõe o valor definido em `p-decimals-length`.
     *
     * @default `13`
     */
    set thousandMaxlength(value: number);
    get thousandMaxlength(): number;
    /**
     * @optional
     *
     * @description
     *
     * Informa o locale(país) para a formatação do valor.
     * Por padrão o valor será configurado segundo a o módulo [`I18n`](documentation/po-i18n)
     *
     * > Para ver quais linguagens suportadas acesse [`I18n`](documentation/po-i18n)
     *
     */
    set locale(locale: string);
    /**
     * @optional
     *
     * @description
     *
     * Valor mínimo.
     */
    set min(value: number);
    get min(): number;
    /**
     * @optional
     *
     * @description
     *
     * Valor máximo.
     */
    set max(value: number);
    get max(): number;
    constructor(el: ElementRef, poLanguageService: PoLanguageService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    setNumbersSeparators(): void;
    ngAfterViewInit(): void;
    clear(value: any): void;
    extraValidation(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    focus(): void;
    getScreenValue(): any;
    hasInvalidClass(): boolean;
    hasLetters(value?: string): RegExpMatchArray;
    isValidNumber(event: any): boolean;
    onBlur(event: any): void;
    onFocus(event: FocusEvent): void;
    onInput(event: any): void;
    onInputKeyboardAndroid(event: any): any;
    onKeyPress(event: KeyboardEvent): void;
    setPaddingInput(): void;
    writeValueModel(value: any): void;
    getErrorPatternMessage(): string;
    private addZeroBefore;
    private containsComma;
    private containsMoreThanOneDecimalSeparator;
    private controlChangeEmitter;
    private formatMask;
    private formatToModelValue;
    private formatToViewValue;
    private formatValueWithoutThousandSeparator;
    private getValueAfterSeparator;
    private getValueBeforeSeparator;
    private hasLessDot;
    private hasMoreDot;
    private hasMinusSignInvalidPosition;
    private isInvalidKey;
    private isGreaterThanTotalLengthLimit;
    private isKeyDecimalSeparator;
    private isPositionAfterDecimalSeparator;
    private isSelectionStartDifferentSelectionEnd;
    private isValidKey;
    private isValueBetweenAllowed;
    private verifyDecimalLengthIsZeroAndKeyPressedIsComma;
    private verifyAutoFocus;
    private setInitialSelectionRange;
    private replaceAt;
    private replaceCommaToDot;
    private setCursorInput;
    private setPositionValue;
    private setViewValue;
    private validateCursorPositionBeforeSeparator;
    private verifyThousandLength;
    private verifyInsertComma;
    private verifyInsertMinusSign;
    private verifyValueAfterComma;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDecimalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoDecimalComponent, "po-decimal", never, { "decimalsLength": "p-decimals-length"; "thousandMaxlength": "p-thousand-maxlength"; "locale": "p-locale"; "min": "p-min"; "max": "p-max"; }, {}, never, never, false>;
}
