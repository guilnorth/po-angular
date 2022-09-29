import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoMultiselectFilterMode } from './po-multiselect-filter-mode.enum';
import { PoMultiselectLiterals } from './po-multiselect-literals.interface';
import { PoMultiselectOption } from './po-multiselect-option.interface';
import { PoMultiselectFilter } from './po-multiselect-filter.interface';
import { PoMultiselectFilterService } from './po-multiselect-filter.service';
import * as i0 from "@angular/core";
export declare const poMultiselectLiteralsDefault: {
    en: PoMultiselectLiterals;
    es: PoMultiselectLiterals;
    pt: PoMultiselectLiterals;
    ru: PoMultiselectLiterals;
};
/**
 * @description
 *
 * O po-multiselect é um componente de múltipla seleção.
 * Este componente é recomendado para dar ao usuário a opção de selecionar vários itens em uma lista.
 *
 * Quando a lista possuir poucos itens, deve-se dar preferência para o uso do po-checkbox-group, por ser mais simples
 * e mais rápido para a seleção do usuário.
 *
 * Este componente também não deve ser utilizado em casos onde a seleção seja única. Nesses casos, deve-se utilizar o
 * po-select, po-combo ou po-radio-group.
 *
 * Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `p-filter-service`.
 */
export declare abstract class PoMultiselectBaseComponent implements ControlValueAccessor, OnInit, Validator {
    /**
     * @optional
     *
     * @description
     *
     * Aplica foco no elemento ao ser iniciado.
     *
     * > Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.
     *
     * @default `false`
     */
    autoFocus: boolean;
    /** Label no componente. */
    label?: string;
    /** Texto de apoio para o campo. */
    help?: string;
    /**
     * @optional
     *
     * @description
     *
     * Define se a indicação de campo opcional será exibida.
     *
     * > Não será exibida a indicação se:
     * - O campo conter `p-required`;
     * - Não possuir `p-help` e/ou `p-label`.
     *
     * @default `false`
     */
    optional: boolean;
    /** Mensagem apresentada enquanto o campo estiver vazio. */
    placeholder?: string;
    /**
     * @description
     *
     * Placeholder do campo de pesquisa.
     *
     * > Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).
     *
     * @default `Buscar`
     */
    placeholderSearch?: string;
    /** Nome do componente. */
    name: string;
    /**
     * @optional
     *
     * @description
     *
     * Indica se o campo "Selecionar todos" será escondido.
     *
     * @default `false`
     */
    hideSelectAll: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Pode ser informada uma função que será disparada quando houver alterações no ngModel.
     */
    change: EventEmitter<any>;
    selectedOptions: Array<PoMultiselectOption | any>;
    visibleOptionsDropdown: Array<PoMultiselectOption | any>;
    visibleDisclaimers: any[];
    isServerSearching: boolean;
    isFirstFilter: boolean;
    filterSubject: Subject<unknown>;
    service: PoMultiselectFilterService;
    defaultService: PoMultiselectFilterService;
    protected onModelTouched: any;
    protected clickOutListener: () => void;
    protected resizeListener: () => void;
    protected getObjectsByValuesSubscription: Subscription;
    private _filterService?;
    private _debounceTime?;
    private _disabled?;
    private _filterMode?;
    private _hideSearch?;
    private _literals;
    private _options;
    private _required?;
    private _sort?;
    private _autoHeight;
    private _fieldLabel?;
    private _fieldValue?;
    private language;
    private lastLengthModel;
    private onModelChange;
    private validatorChange;
    private autoHeightInitialValue;
    /**
     * @optional
     *
     * @description
     * Nesta propriedade pode ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de itens no componente.
     *
     *Também existe a possibilidade de informar um serviço implementando a interface `PoMultiselectFilter`.
     *
     *Caso utilizado uma URL, o serviço deve ser retornado no padrão [API PO UI](https://po-ui.io/guides/api) e utilizar as propriedades `p-field-label` e `p-field-value` para a construção da lista de itens.
     *
     *Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:
     *
     *```
     * // caso filtrar por "Peter"
     *  https://localhost:8080/api/heroes?filter=Peter
     *```
     *
     *E caso iniciar o campo com valor, os itens serão buscados da seguinte forma:
     *
     *```
     * // caso o valor do campo for [1234, 5678];
     *  https://localhost:8080/api/heroes?value=1234,5678
     *
     * //O *value* é referente ao `fieldValue`.
     *```
     *
     */
    set filterService(value: PoMultiselectFilter | string);
    get filterService(): PoMultiselectFilter | string;
    /**
     * @optional
     *
     * @description
     *
     * Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo
     * com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.
     *
     * > O valor padrão será `true` quando houver serviço (`p-filter-service`).
     *
     * @default `false`
     */
    set autoHeight(value: boolean);
    get autoHeight(): boolean;
    /**
     * @optional
     *
     * @description
     * Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.
     *
     * > Será utilizada apenas quando houver serviço (`p-filter-service`) e somente será aceito valor maior do que *zero*.
     *
     * @default `400`
     */
    set debounceTime(value: number);
    get debounceTime(): number;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-multiselect`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoMultiselectLiterals = {
     *    noData: 'Nenhum dado encontrado',
     *    placeholderSearch: 'Buscar'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoMultiselectLiterals = {
     *    noData: 'Sem dados'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente:
     *
     * ```
     * <po-multiselect
     *   [p-literals]="customLiterals">
     * </po-po-multiselect>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoMultiselectLiterals);
    get literals(): PoMultiselectLiterals;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório. Esta propriedade é desconsiderada quando o campo está desabilitado (p-disabled).
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.
     *
     * @default `false`
     */
    set hideSearch(hideSearch: boolean);
    get hideSearch(): boolean;
    /**
     * @description
     *
     * Nesta propriedade deve ser definida uma lista de objetos que será exibida no multiselect.
     * Esta lista deve conter os valores e os labels que serão apresentados na tela.
     *
     * > Essa propriedade é imutável, ou seja, sempre que quiser atualizar a lista de opções disponíveis
     * atualize a referência do objeto:
     *
     * ```
     * // atualiza a referência do objeto garantindo a atualização do template
     * this.options = [...this.options, { value: 'x', label: 'Nova opção' }];
     *
     * // evite, pois não atualiza a referência do objeto podendo gerar atrasos na atualização do template
     * this.options.push({ value: 'x', label: 'Nova opção' });
     * ```
     * > A lista pode ser definida utilizando um array com o valor representando `value` e `label` das seguintes formas:
     *
     * ```
     * <po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
     * ```
     *
     * ```
     * <po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
     * ```
     *
     * - Aconselha-se utilizar valores distintos no `label` e `value` dos itens.
     */
    set options(options: Array<PoMultiselectOption | any>);
    get options(): Array<PoMultiselectOption | any>;
    /**
     * @optional
     *
     * @description
     *
     * Indica que a lista definida na propriedade p-options será ordenada pelo label antes de ser apresentada no
     * dropdown.
     *
     * @default `false`
     */
    set sort(sort: boolean);
    get sort(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
     * Valores definidos no enum: PoMultiselectFilterMode
     *
     * @default `startsWith`
     */
    set filterMode(filterMode: PoMultiselectFilterMode);
    get filterMode(): PoMultiselectFilterMode;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.
     *
     * Necessário quando informar o serviço como URL e o mesmo não estiver retornando uma lista de objetos no padrão da interface
     * `PoMultiSelectOption`.
     *
     * @default `label`
     */
    set fieldLabel(value: string);
    get fieldLabel(): string;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo valor de cada item da lista.
     *
     * Necessário quando informar o serviço como URL e o mesmo não estiver retornando uma lista de objetos no padrão da interface
     * `PoMultiSelectOption`.
     *
     * @default `value`
     */
    set fieldValue(value: string);
    get fieldValue(): string;
    constructor(languageService: PoLanguageService);
    ngOnInit(): void;
    setService(service: PoMultiselectFilter | string): void;
    validAndSortOptions(): void;
    setUndefinedLabels(options: any): void;
    updateList(options: Array<PoMultiselectOption | any>): void;
    callOnChange(selectedOptions: Array<PoMultiselectOption | any>): void;
    eventChange(selectedOptions: any): void;
    getValuesFromOptions(selectedOptions: Array<PoMultiselectOption | any>): any[];
    getLabelByValue(value: any): any;
    searchByLabel(search: string, options: Array<PoMultiselectOption | any>, filterMode: PoMultiselectFilterMode): void;
    compareMethod(search: string, option: PoMultiselectOption, filterMode: PoMultiselectFilterMode): any;
    startsWith(search: string, option: PoMultiselectOption): any;
    contains(search: string, option: PoMultiselectOption): boolean;
    endsWith(search: string, option: PoMultiselectOption): any;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    updateSelectedOptions(newOptions: Array<any>, options?: any[]): void;
    writeValue(values: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: () => void): void;
    private validateModel;
    abstract applyFilter(value?: string): Observable<Array<PoMultiselectOption | any>>;
    abstract updateVisibleItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMultiselectBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoMultiselectBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "label": "p-label"; "help": "p-help"; "optional": "p-optional"; "placeholder": "p-placeholder"; "placeholderSearch": "p-placeholder-search"; "name": "name"; "hideSelectAll": "p-hide-select-all"; "filterService": "p-filter-service"; "autoHeight": "p-auto-height"; "debounceTime": "p-debounce-time"; "literals": "p-literals"; "required": "p-required"; "disabled": "p-disabled"; "hideSearch": "p-hide-search"; "options": "p-options"; "sort": "p-sort"; "filterMode": "p-filter-mode"; "fieldLabel": "p-field-label"; "fieldValue": "p-field-value"; }, { "change": "p-change"; }, never, never, false>;
}