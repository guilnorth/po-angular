import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { PoTimePipe } from '../../../pipes/po-time/po-time.pipe';
import { PoDynamicViewField } from './po-dynamic-view-field.interface';
import { PoDynamicViewService } from './po-dynamic-view.service';
import * as i0 from "@angular/core";
/**
 *
 * @description
 *
 * Componente para listar dados dinamicamente a partir de uma lista de objetos.
 *
 * > Por padrão esse componente cria `po-info` para exibição, é possível criar `po-tag` passando a propriedade { tag: true }.
 *
 */
export declare class PoDynamicViewBaseComponent {
    private currencyPipe;
    private datePipe;
    private decimalPipe;
    private timePipe;
    private titleCasePipe;
    protected dynamicViewService: PoDynamicViewService;
    /**
     * @optional
     *
     * @description
     *
     * Possibilita executar uma função quando o componente é inicializado.
     *
     * A propriedade aceita os seguintes tipos:
     * - **String**: Endpoint usado pelo componente para requisição via `POST`.
     * - **Function**: Método que será executado na inicialização do componente.
     *
     * Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:
     *
     * ```
     * {
     *   value: {
     *     cnpj: '**************', // altera valor do campo
     *     updated: (new Date()).toString() // atribui valor ao campo novo
     *   },
     *   fields: [
     *     { property: 'cnpj', tag: true, inverse: true }, // atribui novas propriedades ao field
     *     { property: 'updated', tag: true } // inclui campo novo
     *   ]
     * }
     * ```
     * > **value**: any = atribui novo valor do model.
     *
     * > **fields**: `Array<PoDynamicViewField>` = Lista de campos que deseja alterar as propriedades,
     * caso enviar um campo a mais será criado um novo campo.
     *
     * - Para esconder/remover campos precisa informar no field a propriedade `visible = false`.
     *
     */
    load: string | Function;
    visibleFields: any[];
    private _fields;
    private _showAllValue;
    private _value;
    /**
     * @optional
     *
     * @description
     *
     * Lista de objetos que implementam a interface `PoDynamicView`.
     *
     * > Ex: `[ { property: 'age' } ]`
     *
     * Regras de tipagem e formatação dos valores exibidos:
     *
     * - Caso o *type* informado seja *currency* e não seja informado o *format* o mesmo recebe "'BRL', 'symbol', '1.2-2'"
     * como formato padrão.
     * - Caso o *type* informado seja *date* e não seja informado o *format* o mesmo recebe 'dd/MM/yyyy' como formato padrão.
     * - Caso o *type* informado seja *dateTime* e não seja informado o *format* o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.
     * - Caso o *type* informado seja *number* e não seja informado o *format* o mesmo não será formatado.
     * - Caso o *type* informado seja *time* e não seja informado o *format* o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.
     *
     * > As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `p-value`.
     *
     * @default `[]`
     */
    set fields(fields: Array<PoDynamicViewField>);
    get fields(): Array<PoDynamicViewField>;
    /**
     * @optional
     *
     * @description
     *
     * Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `p-value`.
     *
     * @default `false`
     */
    set showAllValue(value: boolean);
    get showAllValue(): boolean;
    /**
     * @description
     *
     * Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo *property*
     * dos objetos contidos na propridade `p-fields`.
     *
     * > Ex: `{ age: '35' }`
     */
    set value(value: object);
    get value(): object;
    constructor(currencyPipe: CurrencyPipe, datePipe: DatePipe, decimalPipe: DecimalPipe, timePipe: PoTimePipe, titleCasePipe: TitleCasePipe, dynamicViewService: PoDynamicViewService);
    protected getConfiguredFields(): any[];
    protected getMergedFields(): any[];
    protected getValueFields(): {
        tag?: boolean;
        color?: string;
        icon?: string;
        inverse?: boolean;
        format?: string;
        order?: number;
        key?: boolean;
        property: string;
        label: string;
        gridColumns?: number;
        gridSmColumns?: number;
        gridMdColumns?: number;
        gridLgColumns?: number;
        gridXlColumns?: number;
        offsetColumns?: number;
        offsetSmColumns?: number;
        offsetMdColumns?: number;
        offsetLgColumns?: number;
        offsetXlColumns?: number;
        gridSmPull?: number;
        gridMdPull?: number;
        gridLgPull?: number;
        gridXlPull?: number;
        visible?: boolean;
        divider?: string;
        type?: string;
        value: any;
        cssClass: string;
    }[];
    private createField;
    private transformValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicViewBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDynamicViewBaseComponent, never, never, { "load": "p-load"; "fields": "p-fields"; "showAllValue": "p-show-all-value"; "value": "p-value"; }, {}, never, never, false>;
}