import { PoInfoOrientation } from './po-info-orietation.enum';
import * as i0 from "@angular/core";
export declare class PoInfoBaseComponent {
    /** Valor do rótulo a ser exibido. */
    label: string;
    /**
     * Ao informar uma URL, o conteúdo será exibido na forma de um *link* e ao ser clicado será redirecionado para a URL informada.
     *
     * > Caso informar `http://` será aberto uma nova aba.
     * Caso informar um caminho relativo, exemplo: `/customers`, será aberto na aba atual.
     *
     */
    url?: string;
    /** Valor do conteúdo a ser exibido. */
    value?: string;
    readonly poInfoOrientation: typeof PoInfoOrientation;
    private _labelSize;
    private _orientation;
    /**
     * @optional
     *
     * @description
     *
     * Quantidade de [colunas](/guides/grid-system) usadas para a exibição da `p-label` quando o componente for
     * utilizado na orientação horizontal.
     *
     * Valores válidos:
     *  - `[1 .. 11]`
     *
     * > A propriedade `p-value` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.
     */
    set labelSize(value: number);
    get labelSize(): number;
    /**
     * @optional
     *
     * @description
     *
     * Define o layout de exibição.
     *
     * > Quando definido na horizontal, pode-se utilizar a propriedade `p-label-size` para um maior controle das informações exibidas.
     *
     * @default `vertical`
     */
    set orientation(value: PoInfoOrientation);
    get orientation(): PoInfoOrientation;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoInfoBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoInfoBaseComponent, never, never, { "label": "p-label"; "url": "p-url"; "value": "p-value"; "labelSize": "p-label-size"; "orientation": "p-orientation"; }, {}, never, never, false>;
}
