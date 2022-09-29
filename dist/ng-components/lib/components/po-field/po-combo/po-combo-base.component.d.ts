import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoComboFilter } from './interfaces/po-combo-filter.interface';
import { PoComboFilterMode } from './po-combo-filter-mode.enum';
import { PoComboFilterService } from './po-combo-filter.service';
import { PoComboGroup } from './interfaces/po-combo-group.interface';
import { PoComboLiterals } from './interfaces/po-combo-literals.interface';
import { PoComboOption } from './interfaces/po-combo-option.interface';
import { PoComboOptionGroup } from './interfaces/po-combo-option-group.interface';
import * as i0 from "@angular/core";
export declare const poComboLiteralsDefault: {
    en: PoComboLiterals;
    es: PoComboLiterals;
    pt: PoComboLiterals;
    ru: PoComboLiterals;
};
/**
 * @description
 *
 * O `po-combo` exibe uma lista de opções com fácil seleção e filtragem.
 *
 * Além da exibição padrão, nele é possível listar as opões em agrupamentos.
 *
 * É possível selecionar e navegar entre as opções da lista tanto através do *mouse* quanto do teclado. No teclado navegue com
 * as setas e pressione *Enter* na opção que desejar.
 *
 * Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `p-filter-service`.
 *
 * Em `p-filter-mode`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.
 *
 * O `po-combo` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando *Esc*. Caso seja digitado no
 * campo de busca a descrição completa de um item, então a seleção será automaticamente efetuada ao deixar o campo ou pressionando *Enter*.
 */
export declare abstract class PoComboBaseComponent implements ControlValueAccessor, OnInit, Validator {
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
    /** Nome do componente. */
    name: string;
    /**
     * @optional
     *
     * @description
     * Nesta propriedade deve ser informada a URL do serviço em que será realizado o filtro para carregamento da lista de
     * itens no componente.
     * Caso haja a necessidade de customização, então pode ser informado um serviço implementando a interface PoComboFilter.
     *
     * Caso utilizado uma URL, o serviço deve ser retornado no padrão API TOTVS e utiliza as propriedades
     * `p-field-label` e `p-field-value` para a construção da lista de itens.
     *
     * Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:
     * ```
     * url + ?filter=Peter
     * ```
     *
     * Se for definida a propriedade `p-filter-params`, a mesma também será concatenada. Por exemplo, para o
     * parâmetro `{ age: 23 }` a URL ficaria:
     *
     * ```
     * url + ?page=1&pageSize=20&age=23&filter=Peter
     * ```
     */
    filterService: PoComboFilter | string;
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.
     *
     * @default `false`
     */
    set infiniteScroll(value: boolean);
    get infiniteScroll(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define o percentual necessário para disparar o evento `show-more`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.
     *
     * **Exemplos**
     * - p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `show-more` será disparado.
     */
    set infiniteScrollDistance(value: number);
    get infiniteScrollDistance(): number;
    /**
     * @optional
     *
     * @description
     *
     * Define o ícone que será exibido no início do campo.
     *
     * É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-combo p-icon="po-icon-user" p-label="PO combo"></po-combo>
     * ```
     * Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     */
    icon?: string | TemplateRef<void>;
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
    /** Se verdadeiro, o campo receberá um botão para ser limpo. */
    clean?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro, o evento `p-change` receberá como argumento o `PoComboOption` referente à opção selecionada.
     *
     * @default `false`
     */
    emitObjectValue?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro, desabilitará a busca de um item via TAB.
     *
     * @default `false`
     */
    disabledTabFilter?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.
     *
     * > Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `p-emit-object-value`.
     */
    change: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.
     *
     * Na versão 12.2.0 do Angular a verificação `strictTemplates` vem true como default. Portanto, para utilizar
     * two-way binding no componente deve se utilizar da seguinte forma:
     *
     * ```
     * <po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
     * ```
     *
     */
    ngModelChange: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.
     *
     */
    inputChange: EventEmitter<string>;
    cacheOptions: Array<any>;
    defaultService: PoComboFilterService;
    firstInWriteValue: boolean;
    isFirstFilter: boolean;
    isFiltering: boolean;
    keyupSubscribe: any;
    onModelChange: any;
    previousSearchValue: string;
    selectedOption: any;
    selectedValue: any;
    selectedView: any;
    service: PoComboFilterService;
    visibleOptions: Array<any>;
    page: number;
    pageSize: number;
    loading: boolean;
    dynamicLabel: string;
    dynamicValue: string;
    protected cacheStaticOptions: Array<any>;
    protected comboOptionsList: Array<any>;
    protected onModelTouched: any;
    private _changeOnEnter?;
    private _debounceTime?;
    private _disabled?;
    private _disabledInitFilter?;
    private _fieldLabel?;
    private _fieldValue?;
    private _filterMinlength?;
    private _filterMode?;
    private _filterParams?;
    private _literals?;
    private _options;
    private _placeholder;
    private _required?;
    private _sort?;
    private language;
    private _infiniteScrollDistance?;
    private _infiniteScroll?;
    private _height?;
    private fromWriteValue;
    private validatorChange;
    /** Mensagem apresentada enquanto o campo estiver vazio. */
    set placeholder(value: string);
    get placeholder(): string;
    /**
     * @optional
     *
     * @description
     * Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.
     * Será utilizada apenas quando houver serviço (`p-filter-service`).
     *
     * @default `400`
     */
    set debounceTime(value: number);
    get debounceTime(): number;
    /**
     * @optional
     *
     * @description
     * Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.
     *
     * @default `false`
     *
     */
    set disabledInitFilter(value: boolean);
    get disabledInitFilter(): boolean;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo valor de cada item da lista.
     *
     * Necessário quando informar o serviço como URL e o mesmo não estiver retornando uma lista de objetos no padrão da interface
     * PoComboOption.
     *
     * @default `value`
     */
    set fieldValue(value: string);
    get fieldValue(): string;
    /**
     * @optional
     *
     * @description
     * Deve ser informado o nome da propriedade do objeto que será utilizado para a conversão dos itens apresentados na lista do componente
     * (`p-options`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.
     *
     * Necessário quando informar o serviço como URL e o mesmo não estiver retornando uma lista de objetos no padrão da interface
     * PoComboOption.
     *
     * @default `label`
     */
    set fieldLabel(value: string);
    get fieldLabel(): string;
    /**
     * @optional
     *
     * @description
     * Valor mínimo de caracteres para realizar o filtro no serviço.
     *
     * @default `0`
     */
    set filterMinlength(value: number);
    get filterMinlength(): number;
    /**
     * @optional
     *
     * @description
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    /**
     * @optional
     *
     * @description
     * Indica que o evento `p-change` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.
     *
     * @default `false`
     */
    set changeOnEnter(changeOnEnter: boolean);
    get changeOnEnter(): boolean;
    /**
     * @optional
     *
     * @description
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    /** Indica que a lista definida na propriedade p-options será ordenada pela descrição. */
    set sort(sort: boolean);
    get sort(): boolean;
    /**
     * Nesta propriedade define a lista de opções do `po-combo`.
     *
     * > A lista pode ser definida utilizando um array com o valor representando o `value` e o `label` das seguintes formas:
     *
     * ```
     * <po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
     * ```
     *
     * ```
     * <po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
     * ```
     *
     * - Aconselha-se utilizar valores distintos no `label` e `value` dos itens.
     */
    set options(options: Array<PoComboOption | PoComboOptionGroup | any>);
    get options(): Array<PoComboOption | PoComboOptionGroup | any>;
    /**
     * @optional
     *
     * @description
     *
     * Define o modo de pesquisa utilizado no filtro da lista de seleção: `startsWith`, `contains` ou `endsWith`.
     *
     * > Quando utilizar a propriedade `p-filter-service` esta propriedade será ignorada.
     *
     * @default `startsWith`
     */
    set filterMode(filterMode: PoComboFilterMode);
    get filterMode(): PoComboFilterMode;
    /**
     * @optional
     *
     * @description
     *
     * Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface *PoComboFilter*.
     *
     * > Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.
     */
    set filterParams(filterParams: any);
    get filterParams(): any;
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as literais usadas no `po-combo`.
     *
     * Para utilizar basta passar a literal que deseja customizar:
     *
     * ```
     *  const customLiterals: PoComboLiterals = {
     *    noData: 'Nenhum valor'
     *  };
     * ```
     *
     * E para carregar a literal customizada, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-combo
     *   [p-literals]="customLiterals">
     * </po-combo>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    set literals(value: PoComboLiterals);
    get literals(): PoComboLiterals;
    constructor(languageService: PoLanguageService);
    get isOptionGroupList(): boolean;
    ngOnInit(): void;
    onInitService(): void;
    setService(service: PoComboFilter | string): void;
    compareMethod(search: string, option: PoComboOption | PoComboGroup, filterMode: PoComboFilterMode): any;
    startsWith(search: string, option: any): any;
    contains(search: string, option: any): boolean;
    endsWith(search: string, option: any): any;
    getOptionFromValue(value: any, options: any): any;
    getOptionFromLabel(label: any, options: any): any;
    updateSelectedValue(option: any, isUpdateModel?: boolean): void;
    callModelChange(value: any): any;
    isEqual(value: any, inputValue: any): boolean;
    searchForLabel(search: string, options: Array<any>, filterMode: PoComboFilterMode): void;
    updateComboList(options?: Array<any>): void;
    getNextOption(value: any, options: Array<any>, reverse?: boolean): any;
    getIndexSelectedView(): number;
    compareObjects(obj1: any, obj2: any): boolean;
    verifyValidOption(): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    clear(value: any): void;
    protected configAfterSetFilterService(service: PoComboFilter | string): void;
    protected unsubscribeKeyupObservable(): void;
    protected validateModel(model: any): void;
    private comboListDefinitions;
    private checkIfService;
    private compareOptions;
    private hasDuplicatedOption;
    private listingComboOptions;
    private sortOptions;
    private validateValue;
    private verifyComboOptions;
    private verifyComboOptionsGroup;
    private verifyIfHasLabel;
    private updateInternalVariables;
    private updateModel;
    private updateSelectedValueWithOldOption;
    abstract setInputValue(value: any): void;
    abstract applyFilter(value: string): void;
    abstract getObjectByValue(value: string): void;
    abstract getInputValue(): string;
    abstract initInputObservable(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoComboBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoComboBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "label": "p-label"; "help": "p-help"; "name": "name"; "filterService": "p-filter-service"; "infiniteScroll": "p-infinite-scroll"; "infiniteScrollDistance": "p-infinite-scroll-distance"; "icon": "p-icon"; "optional": "p-optional"; "clean": "p-clean"; "emitObjectValue": "p-emit-object-value"; "disabledTabFilter": "p-disabled-tab-filter"; "placeholder": "p-placeholder"; "debounceTime": "p-debounce-time"; "disabledInitFilter": "p-disabled-init-filter"; "fieldValue": "p-field-value"; "fieldLabel": "p-field-label"; "filterMinlength": "p-filter-minlength"; "required": "p-required"; "changeOnEnter": "p-change-on-enter"; "disabled": "p-disabled"; "sort": "p-sort"; "options": "p-options"; "filterMode": "p-filter-mode"; "filterParams": "p-filter-params"; "literals": "p-literals"; }, { "change": "p-change"; "ngModelChange": "ngModelChange"; "inputChange": "p-input-change"; }, never, never, false>;
}