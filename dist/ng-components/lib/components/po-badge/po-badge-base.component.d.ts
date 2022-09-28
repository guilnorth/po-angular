import * as i0 from "@angular/core";
/**
 * @description
 *
 * @docsPrivate
 *
 * Componente utilizado no `po-menu` para exibir por exemplo a quantidade de tarefas pendentes.
 */
export declare class PoBadgeBaseComponent {
    badgeValue: string;
    private _color;
    private _value;
    /**
     * @optional
     *
     * @description
     *
     * Define a cor de fundo do componente e aceita os valores:
     *
     * <span class="dot po-color-01"></span> `color-01`
     *
     * <span class="dot po-color-02"></span> `color-02`
     *
     * <span class="dot po-color-03"></span> `color-03`
     *
     * <span class="dot po-color-04"></span> `color-04`
     *
     * <span class="dot po-color-05"></span> `color-05`
     *
     * <span class="dot po-color-06"></span> `color-06`
     *
     * <span class="dot po-color-07"></span> `color-07`
     *
     * <span class="dot po-color-08"></span> `color-08`
     *
     * <span class="dot po-color-09"></span> `color-09`
     *
     * <span class="dot po-color-10"></span> `color-10`
     *
     * <span class="dot po-color-11"></span> `color-11`
     *
     * <span class="dot po-color-12"></span> `color-12`
     *
     * @default `color-07`
     */
    set color(value: string);
    get color(): string;
    /**
     * @description
     *
     * Número exibido no componente, caso o mesmo seja maior que 99 o valor exibido será 99+.
     */
    set value(value: number);
    get value(): number;
    private setBadgeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoBadgeBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoBadgeBaseComponent, never, never, { "color": "p-color"; "value": "p-value"; }, {}, never, never, false>;
}
