import { AfterViewInit, EventEmitter, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoLookupAdvancedFilter } from './interfaces/po-lookup-advanced-filter.interface';
import { PoLookupColumn } from './interfaces/po-lookup-column.interface';
import { PoLookupFilter } from './interfaces/po-lookup-filter.interface';
import { PoLookupLiterals } from './interfaces/po-lookup-literals.interface';
import { PoLookupFilterService } from './services/po-lookup-filter.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um serviço. Nesta janela é possível buscar e
 * selecionar um ou mais registros que serão enviados para o campo. O `po-lookup` permite que o usuário digite um valor e pressione a tecla *TAB* para
 * buscar um registro.
 *
 * > Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo será limpado.
 * No segundo caso ocorrerá após este perder o foco; ambos os casos o campo ficará inválido quando requerido.
 *
 * > Enquanto o componente realiza a requisição ao servidor, o componente ficará desabilitado e com o status interno do
 * [modelo](https://angular.io/guide/form-validation#creating-asynchronous-validators) como `pending`.
 *
 * Este componente não é recomendado quando a busca dos dados possuir poucas informações, para isso utilize outros componentes como o
 * `po-select` ou o `po-combo`.
 */
export declare abstract class PoLookupBaseComponent implements ControlValueAccessor, OnDestroy, OnInit, Validator, AfterViewInit, OnChanges {
    private defaultService;
    private injector;
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
    /**
     * Label do campo.
     *
     * > Quando utilizar esta propriedade o seu valor será utilizado como título da modal do componente caso não tenha
     * sido definido um `modalTitle` na propriedade `p-literals`.
     */
    label?: string;
    /**
     * @description
     *
     * Objeto com as literais usadas no `po-lookup`.
     *
     * Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:
     *
     * ```
     *  const customLiterals: PoLookupLiterals = {
     *    modalPrimaryActionLabel: 'Select',
     *    modalSecondaryActionLabel: 'Cancel',
     *    modalPlaceholder: 'Search Value',
     *    modalTableNoColumns: 'No columns',
     *    modalTableNoData: 'No data',
     *    modalTableLoadingData: 'Loading data',
     *    modalTableLoadMoreData: 'Load more',
     *    modalTitle: 'Select a user',
     *    modalAdvancedSearch: 'Advanced search',
     *    modalAdvancedSearchTitle: 'Advanced search',
     *    modalAdvancedSearchPrimaryActionLabel: 'Filter',
     *    modalAdvancedSearchSecondaryActionLabel: 'Return',
     *    modalDisclaimerGroupTitle: 'Presenting results filtered by:'
     *  };
     * ```
     *
     * Ou passando apenas as literais que deseja customizar:
     *
     * ```
     *  const customLiterals: PoLookupLiterals = {
     *    modalPrimaryActionLabel: 'Select'
     *  };
     * ```
     *
     * E para carregar as literais customizadas, basta apenas passar o objeto para o componente.
     *
     * ```
     * <po-lookup
     *   [p-literals]="customLiterals">
     * </po-lookup>
     * ```
     *
     * > O objeto padrão de literais será traduzido de acordo com o idioma do
     * [`PoI18nService`](/documentation/po-i18n) ou do browser.
     */
    literals?: PoLookupLiterals;
    /** Texto de apoio do campo. */
    help?: string;
    /** Mensagem que aparecerá enquanto o campo não estiver preenchido. */
    set placeholder(value: string);
    get placeholder(): string;
    /** Nome e Id do componente. */
    name: string;
    /**
     * @description
     *
     * Indica a coluna que será utilizada como valor do campo.
     *
     * > Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.
     */
    fieldValue: string;
    /** Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela. */
    set fieldLabel(value: string);
    get fieldLabel(): string;
    /** Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `PoLookupFilter`. */
    filterParams?: any;
    /**
     * @optional
     *
     * @description
     *
     * Formato de exibição do campo.
     *
     * Recebe uma função que deve retornar uma *string* com o/os valores do objeto formatados para exibição, por exemplo:
     *
     * ```
     * fieldFormat(obj) {
     *   return `${obj.id} - ${obj.name}`;
     * }
     * ```
     * > Esta propriedade sobrepõe o valor da propriedade `p-field-label` na descrição do campo.
     *
     * Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:
     * ```
     * <po-lookup
     *  ...
     *  [p-field-format]="['id','nickname']"
     *  ...
     * >
     *
     * Objeto retornado:
     *   {
     *      id:123,
     *      name: 'Kakaroto',
     *      nickname: 'Goku',
     *   }
     * Apresentação no campo: 123 - Goku
     * ```
     *
     * > Será utilizado ` - ` como separador.
     */
    fieldFormat?: ((value: any) => string) | Array<string>;
    /**
     * Lista das colunas da tabela.
     * Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.
     */
    columns?: Array<PoLookupColumn>;
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
    /**
     *
     * @optional
     *
     * @description
     *
     * Lista de objetos dos campos que serão criados na busca avançada.
     *
     * > Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.
     *
     * Exemplo de URL com busca avançada:
     *
     * ```
     * url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
     * ```
     *
     * Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula.
     * Exemplo:
     *
     * ```
     * url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
     * ```
     *
     */
    advancedFilters: Array<PoLookupAdvancedFilter>;
    /**
     * @optional
     *
     * @description
     *
     * Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.
     *
     * @default `false`
     */
    infiniteScroll: boolean;
    /** Exibe um ícone que permite limpar o campo. */
    clean: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Permite a seleção de múltiplos itens.
     *
     * > Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `[ 12345, 67890 ]`
     *
     * @default `false`
     */
    multiple: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo
     * com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.
     *
     * @default `false`
     */
    autoHeight: boolean;
    /**
     * Evento será disparado quando ocorrer algum erro na requisição de busca do item.
     * Será passado por parâmetro o objeto de erro retornado.
     */
    onError: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento será disparado quando ocorrer alguma seleção.
     * Será passado por parâmetro o objeto com o valor selecionado.
     */
    selected: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     *  Evento que será disparado ao alterar o model.
     *  Por parâmetro será passado o novo valor.
     */
    change: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
     *
     * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
     * Por exemplo: ["idCard", "name", "hireStatus", "age"].
     */
    changeVisibleColumns: EventEmitter<string[]>;
    /**
     * @optional
     *
     * @description
     * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
     *
     * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
     * Por exemplo: ["idCard", "name", "hireStatus", "age"].
     */
    columnRestoreManager: EventEmitter<String[]>;
    service: any;
    protected selectedOptions: any[];
    protected getSubscription: Subscription;
    protected keysDescription: Array<any>;
    protected oldValue: string;
    protected valueToModel: any;
    protected oldValueToModel: any;
    protected onTouched: any;
    protected resizeListener: () => void;
    private _disabled?;
    private _fieldLabel;
    private _filterService;
    private _noAutocomplete;
    private _placeholder;
    private _required?;
    private _autoHeight;
    private autoHeightInitialValue;
    private onChangePropagate;
    private validatorChange;
    private control;
    /**
     * Serviço responsável por buscar os dados da tabela na janela. Pode ser informado um serviço que implemente a interface
     * `PoLookupFilter` ou uma URL.
     *
     * Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:
     *
     * ```
     * url + ?page=1&pageSize=20&filter=Peter
     * ```
     *
     * Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `order`, por exemplo:
     * - Coluna decrescente:
     * ```
     *  url + ?page=1&pageSize=20&filter=Peter&order=-name
     * ```
     *
     * - Coluna ascendente:
     * ```
     *  url + ?page=1&pageSize=20&filter=Peter&order=name
     * ```
     *
     * Se for definido a propriedade `p-filter-params`, o mesmo também será concatenado. Por exemplo, para o
     * parâmetro `{ age: 23 }` a URL ficaria:
     *
     * ```
     * url + ?page=1&pageSize=20&age=23&filter=Peter
     * ```
     *
     * Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:
     * ```
     * model = 1234;
     *
     * GET url/1234
     * ```
     *
     * Caso estiver com múltipla seleção habilitada:
     * ```
     * model = [1234, 5678]
     *
     * GET url?${fieldValue}=1234,5678
     * ```
     *
     * > Esta URL deve retornar e receber os dados no padrão de [API do PO UI](https://po-ui.io/guides/api) e utiliza os valores
     * definidos nas propriedades `p-field-label` e `p-field-value` para a construção do `po-lookup`.
     *
     * Caso o usuário digite um valor e pressione a tecla *TAB* para realizar a busca de um registro específico, o valor que se
     * deseja filtrar será codificado utilizando a função [encodeURIComponent](https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent)
     * e concatenado na URL da seguinte forma:
     *
     * ```
     * url/valor%20que%20se%20deseja%20filtrar
     * ```
     *
     * > Quando informado um serviço que implemente a interface `PoLookupFilter` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.
     *
     */
    set filterService(filterService: PoLookupFilter | string);
    get filterService(): PoLookupFilter | string;
    /**
     * @optional
     *
     * @description
     *
     * Define a propriedade nativa `autocomplete` do campo como `off`.
     *
     * @default `false`
     */
    set noAutocomplete(value: boolean);
    get noAutocomplete(): boolean;
    /**
     * @optional
     * @description
     *
     * Indica que o campo será obrigatório. Esta propriedade é desconsiderada quando o campo está desabilitado (p-disabled).
     *
     * @default `false`
     */
    set required(required: boolean);
    get required(): boolean;
    /**
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default false
     * @optional
     */
    set disabled(disabled: boolean);
    get disabled(): boolean;
    constructor(defaultService: PoLookupFilterService, injector: Injector);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    cleanModel(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnValidatorChange(fn: () => void): void;
    registerOnChange(func: any): void;
    registerOnTouched(func: any): void;
    selectValue(valueSelected: any): void;
    callOnChange(value: any): void;
    searchById(value: any): void;
    validate(abstractControl: AbstractControl): {
        [key: string]: any;
    };
    writeValue(value: any): void;
    protected cleanViewValue(): void;
    protected getFormattedLabel(value: any): string;
    protected selectModel(options: Array<any>): void;
    protected validateModel(model: any): void;
    private setService;
    private setControl;
    private initializeColumn;
    abstract setViewValue(value: any, object: any): void;
    abstract openLookup(): void;
    abstract setDisclaimers(a: any): any;
    abstract updateVisibleItems(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLookupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoLookupBaseComponent, never, never, { "autoFocus": "p-auto-focus"; "label": "p-label"; "literals": "p-literals"; "help": "p-help"; "placeholder": "p-placeholder"; "name": "name"; "fieldValue": "p-field-value"; "fieldLabel": "p-field-label"; "filterParams": "p-filter-params"; "fieldFormat": "p-field-format"; "columns": "p-columns"; "optional": "p-optional"; "advancedFilters": "p-advanced-filters"; "infiniteScroll": "p-infinite-scroll"; "clean": "p-clean"; "multiple": "p-multiple"; "autoHeight": "p-auto-height"; "filterService": "p-filter-service"; "noAutocomplete": "p-no-autocomplete"; "required": "p-required"; "disabled": "p-disabled"; }, { "onError": "p-error"; "selected": "p-selected"; "change": "p-change"; "changeVisibleColumns": "p-change-visible-columns"; "columnRestoreManager": "p-restore-column-manager"; }, never, never, false>;
}