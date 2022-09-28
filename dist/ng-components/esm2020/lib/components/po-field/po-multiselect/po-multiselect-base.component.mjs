import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { convertToBoolean, isTypeof, removeDuplicatedOptionsWithFieldValue, removeUndefinedAndNullOptionsWithFieldValue, sortOptionsByProperty } from '../../../utils/util';
import { requiredFailed } from './../validators';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { PoMultiselectFilterMode } from './po-multiselect-filter-mode.enum';
import { InputBoolean } from '../../../decorators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
const PO_MULTISELECT_DEBOUNCE_TIME_DEFAULT = 400;
const PO_MULTISELECT_FIELD_LABEL_DEFAULT = 'label';
const PO_MULTISELECT_FIELD_VALUE_DEFAULT = 'value';
export const poMultiselectLiteralsDefault = {
    en: {
        noData: 'No data found',
        placeholderSearch: 'Search',
        selectAll: 'Select all'
    },
    es: {
        noData: 'Datos no encontrados',
        placeholderSearch: 'Busca',
        selectAll: 'Seleccionar todo'
    },
    pt: {
        noData: 'Nenhum dado encontrado',
        placeholderSearch: 'Buscar',
        selectAll: 'Selecionar todos'
    },
    ru: {
        noData: 'Данные не найдены',
        placeholderSearch: 'искать',
        selectAll: 'Выбрать все'
    }
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
export class PoMultiselectBaseComponent {
    constructor(languageService) {
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
        this.autoFocus = false;
        /** Mensagem apresentada enquanto o campo estiver vazio. */
        this.placeholder = '';
        /**
         * @description
         *
         * Placeholder do campo de pesquisa.
         *
         * > Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).
         *
         * @default `Buscar`
         */
        this.placeholderSearch = '';
        /**
         * @optional
         *
         * @description
         *
         * Pode ser informada uma função que será disparada quando houver alterações no ngModel.
         */
        this.change = new EventEmitter();
        this.selectedOptions = [];
        this.visibleOptionsDropdown = [];
        this.visibleDisclaimers = [];
        this.isServerSearching = false;
        this.isFirstFilter = true;
        this.filterSubject = new Subject();
        // eslint-disable-next-line
        this.onModelTouched = null;
        this._debounceTime = 400;
        this._disabled = false;
        this._filterMode = PoMultiselectFilterMode.startsWith;
        this._hideSearch = false;
        this._required = false;
        this._sort = false;
        this._autoHeight = false;
        this._fieldLabel = PO_MULTISELECT_FIELD_LABEL_DEFAULT;
        this._fieldValue = PO_MULTISELECT_FIELD_VALUE_DEFAULT;
        this.language = languageService.getShortLanguage();
    }
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
    set filterService(value) {
        if (value) {
            this._filterService = value;
            this.autoHeight = this.autoHeightInitialValue !== undefined ? this.autoHeightInitialValue : true;
            this.options = [];
        }
    }
    get filterService() {
        return this._filterService;
    }
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
    set autoHeight(value) {
        this._autoHeight = value;
        this.autoHeightInitialValue = value;
    }
    get autoHeight() {
        return this._autoHeight;
    }
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
    set debounceTime(value) {
        const parsedValue = parseInt(value, 10);
        this._debounceTime = !isNaN(parsedValue) && parsedValue > 0 ? parsedValue : PO_MULTISELECT_DEBOUNCE_TIME_DEFAULT;
    }
    get debounceTime() {
        return this._debounceTime;
    }
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
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poMultiselectLiteralsDefault[poLocaleDefault],
                ...poMultiselectLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poMultiselectLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poMultiselectLiteralsDefault[this.language];
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será obrigatório. Esta propriedade é desconsiderada quando o campo está desabilitado (p-disabled).
     *
     * @default `false`
     */
    set required(required) {
        this._required = required === '' ? true : convertToBoolean(required);
        this.validateModel();
    }
    get required() {
        return this._required;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled) {
        this._disabled = disabled === '' ? true : convertToBoolean(disabled);
        this.validateModel();
        this.updateVisibleItems();
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect.
     *
     * @default `false`
     */
    set hideSearch(hideSearch) {
        this._hideSearch = hideSearch === '' ? true : convertToBoolean(hideSearch);
    }
    get hideSearch() {
        return this._hideSearch;
    }
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
    set options(options) {
        this._options = options;
    }
    get options() {
        return this._options;
    }
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
    set sort(sort) {
        this._sort = sort === '' ? true : convertToBoolean(sort);
        this.validAndSortOptions();
    }
    get sort() {
        return this._sort;
    }
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
    set filterMode(filterMode) {
        this._filterMode = filterMode in PoMultiselectFilterMode ? filterMode : PoMultiselectFilterMode.startsWith;
        switch (this._filterMode.toString()) {
            case 'startsWith':
                this._filterMode = PoMultiselectFilterMode.startsWith;
                break;
            case 'contains':
                this._filterMode = PoMultiselectFilterMode.contains;
                break;
            case 'endsWith':
                this._filterMode = PoMultiselectFilterMode.endsWith;
                break;
        }
    }
    get filterMode() {
        return this._filterMode;
    }
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
    set fieldLabel(value) {
        this._fieldLabel = value ? value : PO_MULTISELECT_FIELD_LABEL_DEFAULT;
        if (isTypeof(this.filterService, 'string') && this.service) {
            this.service.fieldLabel = this._fieldLabel;
        }
    }
    get fieldLabel() {
        return this._fieldLabel;
    }
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
    set fieldValue(value) {
        this._fieldValue = value ? value : PO_MULTISELECT_FIELD_VALUE_DEFAULT;
        if (isTypeof(this.filterService, 'string') && this.service) {
            this.service.fieldValue = this._fieldValue;
        }
    }
    get fieldValue() {
        return this._fieldValue;
    }
    ngOnInit() {
        if (this.filterService) {
            this.setService(this.filterService);
        }
        this.filterSubject
            .pipe(debounceTime(this.debounceTime), distinctUntilChanged(), tap(() => (this.isServerSearching = true)), switchMap((search) => this.applyFilter(search)), tap(() => (this.isServerSearching = false)))
            .subscribe();
        this.validAndSortOptions();
        this.updateList(this.options);
    }
    setService(service) {
        if (isTypeof(service, 'object')) {
            this.service = service;
        }
        else {
            this.service = this.defaultService;
            this.service.configProperties(service, this.fieldLabel, this.fieldValue);
        }
        this.isFirstFilter = true;
    }
    validAndSortOptions() {
        if (this.options && this.options.length) {
            removeUndefinedAndNullOptionsWithFieldValue(this.options, this.fieldValue);
            removeDuplicatedOptionsWithFieldValue(this.options, this.fieldValue);
            this.setUndefinedLabels(this.options);
            if (this.sort) {
                sortOptionsByProperty(this.options, this.fieldLabel);
            }
        }
    }
    setUndefinedLabels(options) {
        options.forEach(option => {
            if (!option[this.fieldLabel]) {
                option[this.fieldLabel] = option[this.fieldValue];
            }
        });
    }
    updateList(options) {
        if (options) {
            this.visibleOptionsDropdown = options;
        }
    }
    callOnChange(selectedOptions) {
        if (this.onModelChange) {
            this.onModelChange(this.getValuesFromOptions(selectedOptions));
            this.eventChange(selectedOptions);
        }
    }
    eventChange(selectedOptions) {
        if (selectedOptions && this.lastLengthModel !== selectedOptions.length) {
            this.change.emit(selectedOptions);
        }
        this.lastLengthModel = selectedOptions ? selectedOptions.length : null;
    }
    getValuesFromOptions(selectedOptions) {
        return selectedOptions && selectedOptions.length ? selectedOptions.map(option => option[this.fieldValue]) : [];
    }
    getLabelByValue(value) {
        const index = this.options.findIndex(option => option[this.fieldValue] === value);
        return this.options[index].label;
    }
    searchByLabel(search, options, filterMode) {
        if (search && options && options.length) {
            const newOptions = [];
            options.forEach(option => {
                if (option[this.fieldLabel] && this.compareMethod(search, option, filterMode)) {
                    newOptions.push(option);
                }
            });
            this.visibleOptionsDropdown = newOptions;
        }
        else {
            this.visibleOptionsDropdown = [...options];
        }
    }
    compareMethod(search, option, filterMode) {
        switch (filterMode) {
            case PoMultiselectFilterMode.startsWith:
                return this.startsWith(search, option);
            case PoMultiselectFilterMode.contains:
                return this.contains(search, option);
            case PoMultiselectFilterMode.endsWith:
                return this.endsWith(search, option);
        }
    }
    startsWith(search, option) {
        return option[this.fieldLabel].toLowerCase().startsWith(search.toLowerCase());
    }
    contains(search, option) {
        return option[this.fieldLabel].toLowerCase().indexOf(search.toLowerCase()) > -1;
    }
    endsWith(search, option) {
        return option[this.fieldLabel].toLowerCase().endsWith(search.toLowerCase());
    }
    validate(c) {
        if (requiredFailed(this.required, this.disabled, c.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
        return null;
    }
    updateSelectedOptions(newOptions, options = this.options) {
        this.selectedOptions = [];
        if (newOptions.length === 0) {
            this.lastLengthModel = undefined;
        }
        if (this.filterService) {
            this.selectedOptions = newOptions;
        }
        else {
            newOptions.forEach(newOption => {
                options.forEach(option => {
                    if (option[this.fieldValue] === newOption[this.fieldValue]) {
                        this.selectedOptions.push(option);
                    }
                });
            });
        }
        this.updateVisibleItems();
    }
    writeValue(values) {
        values = values || [];
        if (this.service && values.length) {
            this.getObjectsByValuesSubscription = this.service.getObjectsByValues(values).subscribe(options => {
                this.updateSelectedOptions(options);
                this.callOnChange(this.selectedOptions);
            });
        }
        else {
            // Validar se todos os items existem entre os options, senão atualizar o model
            this.updateSelectedOptions(values.map(value => ({ [this.fieldValue]: value })));
            if (this.selectedOptions && this.selectedOptions.length < values.length) {
                this.callOnChange(this.selectedOptions);
            }
        }
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validateModel() {
        if (this.validatorChange) {
            this.validatorChange();
        }
    }
}
PoMultiselectBaseComponent.ɵfac = function PoMultiselectBaseComponent_Factory(t) { return new (t || PoMultiselectBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoMultiselectBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoMultiselectBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], label: ["p-label", "label"], help: ["p-help", "help"], optional: ["p-optional", "optional"], placeholder: ["p-placeholder", "placeholder"], placeholderSearch: ["p-placeholder-search", "placeholderSearch"], name: "name", hideSelectAll: ["p-hide-select-all", "hideSelectAll"], filterService: ["p-filter-service", "filterService"], autoHeight: ["p-auto-height", "autoHeight"], debounceTime: ["p-debounce-time", "debounceTime"], literals: ["p-literals", "literals"], required: ["p-required", "required"], disabled: ["p-disabled", "disabled"], hideSearch: ["p-hide-search", "hideSearch"], options: ["p-options", "options"], sort: ["p-sort", "sort"], filterMode: ["p-filter-mode", "filterMode"], fieldLabel: ["p-field-label", "fieldLabel"], fieldValue: ["p-field-value", "fieldValue"] }, outputs: { change: "p-change" } });
__decorate([
    InputBoolean()
], PoMultiselectBaseComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], PoMultiselectBaseComponent.prototype, "hideSelectAll", void 0);
__decorate([
    InputBoolean()
], PoMultiselectBaseComponent.prototype, "autoHeight", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLanguageService }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], placeholderSearch: [{
            type: Input,
            args: ['p-placeholder-search']
        }], name: [{
            type: Input,
            args: ['name']
        }], hideSelectAll: [{
            type: Input,
            args: ['p-hide-select-all']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], filterService: [{
            type: Input,
            args: ['p-filter-service']
        }], autoHeight: [{
            type: Input,
            args: ['p-auto-height']
        }], debounceTime: [{
            type: Input,
            args: ['p-debounce-time']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], hideSearch: [{
            type: Input,
            args: ['p-hide-search']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], sort: [{
            type: Input,
            args: ['p-sort']
        }], filterMode: [{
            type: Input,
            args: ['p-filter-mode']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tbXVsdGlzZWxlY3QvcG8tbXVsdGlzZWxlY3QtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IscUNBQXFDLEVBQ3JDLDJDQUEyQyxFQUMzQyxxQkFBcUIsRUFDdEIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXJGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBSW5ELE1BQU0sb0NBQW9DLEdBQUcsR0FBRyxDQUFDO0FBQ2pELE1BQU0sa0NBQWtDLEdBQUcsT0FBTyxDQUFDO0FBQ25ELE1BQU0sa0NBQWtDLEdBQUcsT0FBTyxDQUFDO0FBRW5ELE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHO0lBQzFDLEVBQUUsRUFBeUI7UUFDekIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNELEVBQUUsRUFBeUI7UUFDekIsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixpQkFBaUIsRUFBRSxPQUFPO1FBQzFCLFNBQVMsRUFBRSxrQkFBa0I7S0FDOUI7SUFDRCxFQUFFLEVBQXlCO1FBQ3pCLE1BQU0sRUFBRSx3QkFBd0I7UUFDaEMsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixTQUFTLEVBQUUsa0JBQWtCO0tBQzlCO0lBQ0QsRUFBRSxFQUF5QjtRQUN6QixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsU0FBUyxFQUFFLGFBQWE7S0FDekI7Q0FDRixDQUFDO0FBRUY7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILE1BQU0sT0FBZ0IsMEJBQTBCO0lBeWE5QyxZQUFZLGVBQWtDO1FBeGE5Qzs7Ozs7Ozs7OztXQVVHO1FBQ29DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUF1QmxFLDJEQUEyRDtRQUNuQyxnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUVsRDs7Ozs7Ozs7V0FRRztRQUM0QixzQkFBaUIsR0FBWSxFQUFFLENBQUM7UUFnQi9EOzs7Ozs7V0FNRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEUsb0JBQWUsR0FBcUMsRUFBRSxDQUFDO1FBQ3ZELDJCQUFzQixHQUFxQyxFQUFFLENBQUM7UUFDOUQsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFJOUIsMkJBQTJCO1FBQ2pCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBTzdCLGtCQUFhLEdBQVksR0FBRyxDQUFDO1FBQzdCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBNkIsdUJBQXVCLENBQUMsVUFBVSxDQUFDO1FBQzNFLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBRzlCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsVUFBSyxHQUFhLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFZLGtDQUFrQyxDQUFDO1FBQzFELGdCQUFXLEdBQVksa0NBQWtDLENBQUM7UUF1VWhFLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQWhVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQkc7SUFDSCxJQUErQixhQUFhLENBQUMsS0FBbUM7UUFDOUUsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDcUMsSUFBSSxVQUFVLENBQUMsS0FBYztRQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQThCLFlBQVksQ0FBQyxLQUFhO1FBQ3RELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBTSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDO0lBQ25ILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0NHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLEtBQTRCO1FBQzVELElBQUksS0FBSyxZQUFZLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsR0FBRyw0QkFBNEIsQ0FBQyxlQUFlLENBQUM7Z0JBQ2hELEdBQUcsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsR0FBRyxLQUFLO2FBQ1QsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQXlCLFFBQVEsQ0FBQyxRQUFpQjtRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFRLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLFFBQWlCO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQVEsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUE0QixVQUFVLENBQUMsVUFBbUI7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBUSxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EyQkc7SUFDSCxJQUF3QixPQUFPLENBQUMsT0FBeUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBcUIsSUFBSSxDQUFDLElBQWE7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBUSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQTRCLFVBQVUsQ0FBQyxVQUFtQztRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7UUFDM0csUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25DLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztnQkFDdEQsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztnQkFDcEQsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztnQkFDcEQsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxJQUE0QixVQUFVLENBQUMsS0FBYTtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQztRQUV0RSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsSUFBNEIsVUFBVSxDQUFDLEtBQWE7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUM7UUFFdEUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFNRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLGFBQWE7YUFDZixJQUFJLENBQ0gsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDL0Isb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDLEVBQzFDLFNBQVMsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN2RCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FDNUM7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBcUM7UUFDOUMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQStCLE9BQU8sQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQVMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsMkNBQTJDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0UscUNBQXFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEQ7U0FDRjtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF5QztRQUNsRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLGVBQWlEO1FBQzVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLGVBQWU7UUFDekIsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RSxDQUFDO0lBRUQsb0JBQW9CLENBQUMsZUFBaUQ7UUFDcEUsT0FBTyxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pILENBQUM7SUFFRCxlQUFlLENBQUMsS0FBSztRQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWMsRUFBRSxPQUF5QyxFQUFFLFVBQW1DO1FBQzFHLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE1BQU0sVUFBVSxHQUFxQyxFQUFFLENBQUM7WUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRTtvQkFDN0UsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWMsRUFBRSxNQUEyQixFQUFFLFVBQW1DO1FBQzVGLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssdUJBQXVCLENBQUMsVUFBVTtnQkFDckMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFLLHVCQUF1QixDQUFDLFFBQVE7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkMsS0FBSyx1QkFBdUIsQ0FBQyxRQUFRO2dCQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBMkI7UUFDcEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWMsRUFBRSxNQUEyQjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBYyxFQUFFLE1BQTJCO1FBQ2xELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pELE9BQU87Z0JBQ0wsUUFBUSxFQUFFO29CQUNSLEtBQUssRUFBRSxLQUFLO2lCQUNiO2FBQ0YsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQscUJBQXFCLENBQUMsVUFBc0IsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFFMUIsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztTQUNsQztRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNuQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLDhFQUE4RTtZQUM5RSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsZ0VBQWdFO0lBQ2hFLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxFQUFjO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOztvR0EzbUJtQiwwQkFBMEI7NkVBQTFCLDBCQUEwQjtBQVlQO0lBQWYsWUFBWSxFQUFFOzZEQUE0QjtBQWlEdEI7SUFBZixZQUFZLEVBQUU7aUVBQXdCO0FBaUczQjtJQUFmLFlBQVksRUFBRTs0REFHdEM7dUZBakttQiwwQkFBMEI7Y0FEL0MsU0FBUztvRUFhK0IsU0FBUztrQkFBL0MsS0FBSzttQkFBQyxjQUFjO1lBR0gsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBR0MsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBZU0sUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBR0ssV0FBVztrQkFBbEMsS0FBSzttQkFBQyxlQUFlO1lBV1MsaUJBQWlCO2tCQUEvQyxLQUFLO21CQUFDLHNCQUFzQjtZQUdkLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQVcrQixhQUFhO2tCQUF4RCxLQUFLO21CQUFDLG1CQUFtQjtZQVNOLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQWdFYSxhQUFhO2tCQUEzQyxLQUFLO21CQUFDLGtCQUFrQjtZQXdCbUIsVUFBVTtrQkFBckQsS0FBSzttQkFBQyxlQUFlO1lBbUJRLFlBQVk7a0JBQXpDLEtBQUs7bUJBQUMsaUJBQWlCO1lBNkNDLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWTtZQXdCTSxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFrQk0sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBb0JTLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQW9DRSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFrQkcsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBb0JhLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQStCTSxVQUFVO2tCQUFyQyxLQUFLO21CQUFDLGVBQWU7WUF3Qk0sVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbnZlcnRUb0Jvb2xlYW4sXHJcbiAgaXNUeXBlb2YsXHJcbiAgcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnNXaXRoRmllbGRWYWx1ZSxcclxuICByZW1vdmVVbmRlZmluZWRBbmROdWxsT3B0aW9uc1dpdGhGaWVsZFZhbHVlLFxyXG4gIHNvcnRPcHRpb25zQnlQcm9wZXJ0eVxyXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4vLi4vdmFsaWRhdG9ycyc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHBvTG9jYWxlRGVmYXVsdCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3BvLWxhbmd1YWdlL3BvLWxhbmd1YWdlLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RGaWx0ZXJNb2RlIH0gZnJvbSAnLi9wby1tdWx0aXNlbGVjdC1maWx0ZXItbW9kZS5lbnVtJztcclxuaW1wb3J0IHsgUG9NdWx0aXNlbGVjdExpdGVyYWxzIH0gZnJvbSAnLi9wby1tdWx0aXNlbGVjdC1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb011bHRpc2VsZWN0T3B0aW9uIH0gZnJvbSAnLi9wby1tdWx0aXNlbGVjdC1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vLi4vZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RGaWx0ZXIgfSBmcm9tICcuL3BvLW11bHRpc2VsZWN0LWZpbHRlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb011bHRpc2VsZWN0RmlsdGVyU2VydmljZSB9IGZyb20gJy4vcG8tbXVsdGlzZWxlY3QtZmlsdGVyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgUE9fTVVMVElTRUxFQ1RfREVCT1VOQ0VfVElNRV9ERUZBVUxUID0gNDAwO1xyXG5jb25zdCBQT19NVUxUSVNFTEVDVF9GSUVMRF9MQUJFTF9ERUZBVUxUID0gJ2xhYmVsJztcclxuY29uc3QgUE9fTVVMVElTRUxFQ1RfRklFTERfVkFMVUVfREVGQVVMVCA9ICd2YWx1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9NdWx0aXNlbGVjdExpdGVyYWxzRGVmYXVsdCA9IHtcclxuICBlbjogPFBvTXVsdGlzZWxlY3RMaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICdObyBkYXRhIGZvdW5kJyxcclxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnU2VhcmNoJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwnXHJcbiAgfSxcclxuICBlczogPFBvTXVsdGlzZWxlY3RMaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICdEYXRvcyBubyBlbmNvbnRyYWRvcycsXHJcbiAgICBwbGFjZWhvbGRlclNlYXJjaDogJ0J1c2NhJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjY2lvbmFyIHRvZG8nXHJcbiAgfSxcclxuICBwdDogPFBvTXVsdGlzZWxlY3RMaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICdOZW5odW0gZGFkbyBlbmNvbnRyYWRvJyxcclxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnQnVzY2FyJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjaW9uYXIgdG9kb3MnXHJcbiAgfSxcclxuICBydTogPFBvTXVsdGlzZWxlY3RMaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICfQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3RiycsXHJcbiAgICBwbGFjZWhvbGRlclNlYXJjaDogJ9C40YHQutCw0YLRjCcsXHJcbiAgICBzZWxlY3RBbGw6ICfQktGL0LHRgNCw0YLRjCDQstGB0LUnXHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIHBvLW11bHRpc2VsZWN0IMOpIHVtIGNvbXBvbmVudGUgZGUgbcO6bHRpcGxhIHNlbGXDp8Ojby5cclxuICogRXN0ZSBjb21wb25lbnRlIMOpIHJlY29tZW5kYWRvIHBhcmEgZGFyIGFvIHVzdcOhcmlvIGEgb3DDp8OjbyBkZSBzZWxlY2lvbmFyIHbDoXJpb3MgaXRlbnMgZW0gdW1hIGxpc3RhLlxyXG4gKlxyXG4gKiBRdWFuZG8gYSBsaXN0YSBwb3NzdWlyIHBvdWNvcyBpdGVucywgZGV2ZS1zZSBkYXIgcHJlZmVyw6puY2lhIHBhcmEgbyB1c28gZG8gcG8tY2hlY2tib3gtZ3JvdXAsIHBvciBzZXIgbWFpcyBzaW1wbGVzXHJcbiAqIGUgbWFpcyByw6FwaWRvIHBhcmEgYSBzZWxlw6fDo28gZG8gdXN1w6FyaW8uXHJcbiAqXHJcbiAqIEVzdGUgY29tcG9uZW50ZSB0YW1iw6ltIG7Do28gZGV2ZSBzZXIgdXRpbGl6YWRvIGVtIGNhc29zIG9uZGUgYSBzZWxlw6fDo28gc2VqYSDDum5pY2EuIE5lc3NlcyBjYXNvcywgZGV2ZS1zZSB1dGlsaXphciBvXHJcbiAqIHBvLXNlbGVjdCwgcG8tY29tYm8gb3UgcG8tcmFkaW8tZ3JvdXAuXHJcbiAqXHJcbiAqIENvbSBlbGUgdGFtYsOpbSDDqSBwb3Nzw612ZWwgZGVmaW5pciB1bWEgbGlzdGEgw6AgcGFydGlyIGRhIHJlcXVpc2nDp8OjbyBkZSB1bSBzZXJ2acOnbyBkZWZpbmlkbyBlbSBgcC1maWx0ZXItc2VydmljZWAuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvTXVsdGlzZWxlY3RCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgVmFsaWRhdG9yIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBMYWJlbCBubyBjb21wb25lbnRlLiAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gcGFyYSBvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBhIGluZGljYcOnw6NvIGRlIGNhbXBvIG9wY2lvbmFsIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiA+IE7Do28gc2Vyw6EgZXhpYmlkYSBhIGluZGljYcOnw6NvIHNlOlxyXG4gICAqIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqIC0gTsOjbyBwb3NzdWlyIGBwLWhlbHBgIGUvb3UgYHAtbGFiZWxgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25hbCcpIG9wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuICAvKiogTWVuc2FnZW0gYXByZXNlbnRhZGEgZW5xdWFudG8gbyBjYW1wbyBlc3RpdmVyIHZhemlvLiAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyPzogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogUGxhY2Vob2xkZXIgZG8gY2FtcG8gZGUgcGVzcXVpc2EuXHJcbiAgICpcclxuICAgKiA+IENhc28gbyBtZXNtbyBuw6NvIHNlamEgaW5mb3JtYWRvLCBvIHZhbG9yIHBhZHLDo28gc2Vyw6EgdHJhZHV6aWRvIGNvbSBiYXNlIG5vIGlkaW9tYSBkbyBuYXZlZ2Fkb3IgKHB0LCBlcyBlIGVuKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBCdXNjYXJgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBsYWNlaG9sZGVyLXNlYXJjaCcpIHBsYWNlaG9sZGVyU2VhcmNoPzogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKiBOb21lIGRvIGNvbXBvbmVudGUuICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHNlIG8gY2FtcG8gXCJTZWxlY2lvbmFyIHRvZG9zXCIgc2Vyw6EgZXNjb25kaWRvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXNlbGVjdC1hbGwnKSBASW5wdXRCb29sZWFuKCkgaGlkZVNlbGVjdEFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFBvZGUgc2VyIGluZm9ybWFkYSB1bWEgZnVuw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBxdWFuZG8gaG91dmVyIGFsdGVyYcOnw7VlcyBubyBuZ01vZGVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlJykgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBzZWxlY3RlZE9wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+ID0gW107XHJcbiAgdmlzaWJsZU9wdGlvbnNEcm9wZG93bjogQXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4gPSBbXTtcclxuICB2aXNpYmxlRGlzY2xhaW1lcnMgPSBbXTtcclxuICBpc1NlcnZlclNlYXJjaGluZyA9IGZhbHNlO1xyXG4gIGlzRmlyc3RGaWx0ZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGZpbHRlclN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHNlcnZpY2U6IFBvTXVsdGlzZWxlY3RGaWx0ZXJTZXJ2aWNlO1xyXG4gIGRlZmF1bHRTZXJ2aWNlOiBQb011bHRpc2VsZWN0RmlsdGVyU2VydmljZTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHJvdGVjdGVkIG9uTW9kZWxUb3VjaGVkOiBhbnkgPSBudWxsO1xyXG5cclxuICBwcm90ZWN0ZWQgY2xpY2tPdXRMaXN0ZW5lcjogKCkgPT4gdm9pZDtcclxuICBwcm90ZWN0ZWQgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIGdldE9iamVjdHNCeVZhbHVlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIF9maWx0ZXJTZXJ2aWNlPzogUG9NdWx0aXNlbGVjdEZpbHRlciB8IHN0cmluZztcclxuICBwcml2YXRlIF9kZWJvdW5jZVRpbWU/OiBudW1iZXIgPSA0MDA7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZmlsdGVyTW9kZT86IFBvTXVsdGlzZWxlY3RGaWx0ZXJNb2RlID0gUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUuc3RhcnRzV2l0aDtcclxuICBwcml2YXRlIF9oaWRlU2VhcmNoPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzOiBQb011bHRpc2VsZWN0TGl0ZXJhbHM7XHJcbiAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT47XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc29ydD86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9hdXRvSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZmllbGRMYWJlbD86IHN0cmluZyA9IFBPX01VTFRJU0VMRUNUX0ZJRUxEX0xBQkVMX0RFRkFVTFQ7XHJcbiAgcHJpdmF0ZSBfZmllbGRWYWx1ZT86IHN0cmluZyA9IFBPX01VTFRJU0VMRUNUX0ZJRUxEX1ZBTFVFX0RFRkFVTFQ7XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGxhc3RMZW5ndGhNb2RlbDtcclxuICBwcml2YXRlIG9uTW9kZWxDaGFuZ2U6IGFueTtcclxuICBwcml2YXRlIHZhbGlkYXRvckNoYW5nZTogYW55O1xyXG4gIHByaXZhdGUgYXV0b0hlaWdodEluaXRpYWxWYWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBOZXN0YSBwcm9wcmllZGFkZSBwb2RlIHNlciBpbmZvcm1hZGEgYSBVUkwgZG8gc2VydmnDp28gZW0gcXVlIHNlcsOhIHJlYWxpemFkbyBvIGZpbHRybyBwYXJhIGNhcnJlZ2FtZW50byBkYSBsaXN0YSBkZSBpdGVucyBubyBjb21wb25lbnRlLlxyXG4gICAqXHJcbiAgICpUYW1iw6ltIGV4aXN0ZSBhIHBvc3NpYmlsaWRhZGUgZGUgaW5mb3JtYXIgdW0gc2VydmnDp28gaW1wbGVtZW50YW5kbyBhIGludGVyZmFjZSBgUG9NdWx0aXNlbGVjdEZpbHRlcmAuXHJcbiAgICpcclxuICAgKkNhc28gdXRpbGl6YWRvIHVtYSBVUkwsIG8gc2VydmnDp28gZGV2ZSBzZXIgcmV0b3JuYWRvIG5vIHBhZHLDo28gW0FQSSBQTyBVSV0oaHR0cHM6Ly9wby11aS5pby9ndWlkZXMvYXBpKSBlIHV0aWxpemFyIGFzIHByb3ByaWVkYWRlcyBgcC1maWVsZC1sYWJlbGAgZSBgcC1maWVsZC12YWx1ZWAgcGFyYSBhIGNvbnN0cnXDp8OjbyBkYSBsaXN0YSBkZSBpdGVucy5cclxuICAgKlxyXG4gICAqUXVhbmRvIHV0aWxpemFkYSB1bWEgVVJMIGRlIHNlcnZpw6dvLCBlbnTDo28gc2Vyw6EgY29uY2F0ZW5hZGEgbmVzdGEgVVJMIG8gdmFsb3IgcXVlIGRlc2VqYS1zZSBmaWx0cmFyIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICpgYGBcclxuICAgKiAvLyBjYXNvIGZpbHRyYXIgcG9yIFwiUGV0ZXJcIlxyXG4gICAqICBodHRwczovL2xvY2FsaG9zdDo4MDgwL2FwaS9oZXJvZXM/ZmlsdGVyPVBldGVyXHJcbiAgICpgYGBcclxuICAgKlxyXG4gICAqRSBjYXNvIGluaWNpYXIgbyBjYW1wbyBjb20gdmFsb3IsIG9zIGl0ZW5zIHNlcsOjbyBidXNjYWRvcyBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKlxyXG4gICAqYGBgXHJcbiAgICogLy8gY2FzbyBvIHZhbG9yIGRvIGNhbXBvIGZvciBbMTIzNCwgNTY3OF07XHJcbiAgICogIGh0dHBzOi8vbG9jYWxob3N0OjgwODAvYXBpL2hlcm9lcz92YWx1ZT0xMjM0LDU2NzhcclxuICAgKlxyXG4gICAqIC8vTyAqdmFsdWUqIMOpIHJlZmVyZW50ZSBhbyBgZmllbGRWYWx1ZWAuXHJcbiAgICpgYGBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXItc2VydmljZScpIHNldCBmaWx0ZXJTZXJ2aWNlKHZhbHVlOiBQb011bHRpc2VsZWN0RmlsdGVyIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fZmlsdGVyU2VydmljZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0aGlzLmF1dG9IZWlnaHRJbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuYXV0b0hlaWdodEluaXRpYWxWYWx1ZSA6IHRydWU7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZpbHRlclNlcnZpY2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgcXVlIGEgYWx0dXJhIGRvIGNvbXBvbmVudGUgc2Vyw6EgYXV0byBhanVzdMOhdmVsLCBwb3NzdWluZG8gdW1hIGFsdHVyYSBtaW5pbWEgcG9yw6ltIGEgYWx0dXJhIG3DoXhpbWEgc2Vyw6EgZGUgYWNvcmRvXHJcbiAgICogY29tIG8gbsO6bWVybyBkZSBpdGVucyBzZWxlY2lvbmFkb3MgZSBhIGV4dGVuc8OjbyBkb3MgbWVzbW9zLCBtYW50ZW5kby1vcyBzZW1wcmUgdmlzw612ZWlzLlxyXG4gICAqXHJcbiAgICogPiBPIHZhbG9yIHBhZHLDo28gc2Vyw6EgYHRydWVgIHF1YW5kbyBob3V2ZXIgc2VydmnDp28gKGBwLWZpbHRlci1zZXJ2aWNlYCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8taGVpZ2h0JykgQElucHV0Qm9vbGVhbigpIHNldCBhdXRvSGVpZ2h0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hdXRvSGVpZ2h0ID0gdmFsdWU7XHJcbiAgICB0aGlzLmF1dG9IZWlnaHRJbml0aWFsVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBhdXRvSGVpZ2h0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9IZWlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEVzdGEgcHJvcHJpZWRhZGUgZGVmaW5lIGVtIHF1YW50byB0ZW1wbyAoZW0gbWlsaXNzZWd1bmRvcyksIGFndWFyZGEgcGFyYSBhY2lvbmFyIG8gZXZlbnRvIGRlIGZpbHRybyBhcMOzcyBjYWRhIHByZXNzaW9uYW1lbnRvIGRlIHRlY2xhLlxyXG4gICAqXHJcbiAgICogPiBTZXLDoSB1dGlsaXphZGEgYXBlbmFzIHF1YW5kbyBob3V2ZXIgc2VydmnDp28gKGBwLWZpbHRlci1zZXJ2aWNlYCkgZSBzb21lbnRlIHNlcsOhIGFjZWl0byB2YWxvciBtYWlvciBkbyBxdWUgKnplcm8qLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDQwMGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGVib3VuY2UtdGltZScpIHNldCBkZWJvdW5jZVRpbWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcGFyc2VkVmFsdWUgPSBwYXJzZUludCg8YW55PnZhbHVlLCAxMCk7XHJcblxyXG4gICAgdGhpcy5fZGVib3VuY2VUaW1lID0gIWlzTmFOKHBhcnNlZFZhbHVlKSAmJiBwYXJzZWRWYWx1ZSA+IDAgPyBwYXJzZWRWYWx1ZSA6IFBPX01VTFRJU0VMRUNUX0RFQk9VTkNFX1RJTUVfREVGQVVMVDtcclxuICB9XHJcblxyXG4gIGdldCBkZWJvdW5jZVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWJvdW5jZVRpbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBsaXRlcmFpcyB1c2FkYXMgbm8gYHBvLW11bHRpc2VsZWN0YC5cclxuICAgKlxyXG4gICAqIEV4aXN0ZW0gZHVhcyBtYW5laXJhcyBkZSBjdXN0b21pemFyIG8gY29tcG9uZW50ZSwgcGFzc2FuZG8gdW0gb2JqZXRvIGNvbSB0b2RhcyBhcyBsaXRlcmFpcyBkaXNwb27DrXZlaXM6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvTXVsdGlzZWxlY3RMaXRlcmFscyA9IHtcclxuICAgKiAgICBub0RhdGE6ICdOZW5odW0gZGFkbyBlbmNvbnRyYWRvJyxcclxuICAgKiAgICBwbGFjZWhvbGRlclNlYXJjaDogJ0J1c2NhcidcclxuICAgKiAgfTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIE91IHBhc3NhbmRvIGFwZW5hcyBhcyBsaXRlcmFpcyBxdWUgZGVzZWphIGN1c3RvbWl6YXI6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvTXVsdGlzZWxlY3RMaXRlcmFscyA9IHtcclxuICAgKiAgICBub0RhdGE6ICdTZW0gZGFkb3MnXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBFIHBhcmEgY2FycmVnYXIgYXMgbGl0ZXJhaXMgY3VzdG9taXphZGFzLCBiYXN0YSBhcGVuYXMgcGFzc2FyIG8gb2JqZXRvIHBhcmEgbyBjb21wb25lbnRlOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLW11bHRpc2VsZWN0XHJcbiAgICogICBbcC1saXRlcmFsc109XCJjdXN0b21MaXRlcmFsc1wiPlxyXG4gICAqIDwvcG8tcG8tbXVsdGlzZWxlY3Q+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IE8gb2JqZXRvIHBhZHLDo28gZGUgbGl0ZXJhaXMgc2Vyw6EgdHJhZHV6aWRvIGRlIGFjb3JkbyBjb20gbyBpZGlvbWEgZG9cclxuICAgKiBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSBkbyBicm93c2VyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIHNldCBsaXRlcmFscyh2YWx1ZTogUG9NdWx0aXNlbGVjdExpdGVyYWxzKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9saXRlcmFscyA9IHtcclxuICAgICAgICAuLi5wb011bHRpc2VsZWN0TGl0ZXJhbHNEZWZhdWx0W3BvTG9jYWxlRGVmYXVsdF0sXHJcbiAgICAgICAgLi4ucG9NdWx0aXNlbGVjdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXSxcclxuICAgICAgICAuLi52YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSBwb011bHRpc2VsZWN0TGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgbGl0ZXJhbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGl0ZXJhbHMgfHwgcG9NdWx0aXNlbGVjdExpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6Egb2JyaWdhdMOzcmlvLiBFc3RhIHByb3ByaWVkYWRlIMOpIGRlc2NvbnNpZGVyYWRhIHF1YW5kbyBvIGNhbXBvIGVzdMOhIGRlc2FiaWxpdGFkbyAocC1kaXNhYmxlZCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlcXVpcmVkJykgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9yZXF1aXJlZCA9IDxhbnk+cmVxdWlyZWQgPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4ocmVxdWlyZWQpO1xyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVxdWlyZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIGRlc2FiaWxpdGFkby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gPGFueT5kaXNhYmxlZCA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEVzY29uZGUgbyBjYW1wbyBkZSBwZXNxdWlzYSBleGlzdGVudGUgZGVudHJvIGRvIGRyb3Bkb3duIGRvIHBvLW11bHRpc2VsZWN0LlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1oaWRlLXNlYXJjaCcpIHNldCBoaWRlU2VhcmNoKGhpZGVTZWFyY2g6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hpZGVTZWFyY2ggPSA8YW55PmhpZGVTZWFyY2ggPT09ICcnID8gdHJ1ZSA6IGNvbnZlcnRUb0Jvb2xlYW4oaGlkZVNlYXJjaCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZVNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oaWRlU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBOZXN0YSBwcm9wcmllZGFkZSBkZXZlIHNlciBkZWZpbmlkYSB1bWEgbGlzdGEgZGUgb2JqZXRvcyBxdWUgc2Vyw6EgZXhpYmlkYSBubyBtdWx0aXNlbGVjdC5cclxuICAgKiBFc3RhIGxpc3RhIGRldmUgY29udGVyIG9zIHZhbG9yZXMgZSBvcyBsYWJlbHMgcXVlIHNlcsOjbyBhcHJlc2VudGFkb3MgbmEgdGVsYS5cclxuICAgKlxyXG4gICAqID4gRXNzYSBwcm9wcmllZGFkZSDDqSBpbXV0w6F2ZWwsIG91IHNlamEsIHNlbXByZSBxdWUgcXVpc2VyIGF0dWFsaXphciBhIGxpc3RhIGRlIG9ww6fDtWVzIGRpc3BvbsOtdmVpc1xyXG4gICAqIGF0dWFsaXplIGEgcmVmZXLDqm5jaWEgZG8gb2JqZXRvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogLy8gYXR1YWxpemEgYSByZWZlcsOqbmNpYSBkbyBvYmpldG8gZ2FyYW50aW5kbyBhIGF0dWFsaXphw6fDo28gZG8gdGVtcGxhdGVcclxuICAgKiB0aGlzLm9wdGlvbnMgPSBbLi4udGhpcy5vcHRpb25zLCB7IHZhbHVlOiAneCcsIGxhYmVsOiAnTm92YSBvcMOnw6NvJyB9XTtcclxuICAgKlxyXG4gICAqIC8vIGV2aXRlLCBwb2lzIG7Do28gYXR1YWxpemEgYSByZWZlcsOqbmNpYSBkbyBvYmpldG8gcG9kZW5kbyBnZXJhciBhdHJhc29zIG5hIGF0dWFsaXphw6fDo28gZG8gdGVtcGxhdGVcclxuICAgKiB0aGlzLm9wdGlvbnMucHVzaCh7IHZhbHVlOiAneCcsIGxhYmVsOiAnTm92YSBvcMOnw6NvJyB9KTtcclxuICAgKiBgYGBcclxuICAgKiA+IEEgbGlzdGEgcG9kZSBzZXIgZGVmaW5pZGEgdXRpbGl6YW5kbyB1bSBhcnJheSBjb20gbyB2YWxvciByZXByZXNlbnRhbmRvIGB2YWx1ZWAgZSBgbGFiZWxgIGRhcyBzZWd1aW50ZXMgZm9ybWFzOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLW11bHRpc2VsZWN0IG5hbWU9XCJtdWx0aXNlbGVjdFwiIHAtbGFiZWw9XCJQTyBNdWx0aXNlbGVjdFwiIFtwLW9wdGlvbnNdPVwiW3t2YWx1ZTogMSwgbGFiZWw6ICdPbmUnfSwge3ZhbHVlOiAyLCBsYWJlbDogJ3R3byd9XVwiPiA8L3BvLW11bHRpc2VsZWN0PlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLW11bHRpc2VsZWN0IG5hbWU9XCJtdWx0aXNlbGVjdFwiIHAtbGFiZWw9XCJQTyBNdWx0aXNlbGVjdFwiIFtwLW9wdGlvbnNdPVwiW3tuYW1lOiAnUm9nZXInLCBhZ2U6IDI4fSwge25hbWU6ICdBbm5lJywgYWdlOiAzNX1dXCIgcC1maWVsZC1sYWJlbD1cIm5hbWVcIiBwLWZpZWxkLXZhbHVlPVwiYWdlXCI+IDwvcG8tbXVsdGlzZWxlY3Q+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAtIEFjb25zZWxoYS1zZSB1dGlsaXphciB2YWxvcmVzIGRpc3RpbnRvcyBubyBgbGFiZWxgIGUgYHZhbHVlYCBkb3MgaXRlbnMuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbnMnKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55Pikge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9ucygpOiBBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIGEgbGlzdGEgZGVmaW5pZGEgbmEgcHJvcHJpZWRhZGUgcC1vcHRpb25zIHNlcsOhIG9yZGVuYWRhIHBlbG8gbGFiZWwgYW50ZXMgZGUgc2VyIGFwcmVzZW50YWRhIG5vXHJcbiAgICogZHJvcGRvd24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXNvcnQnKSBzZXQgc29ydChzb3J0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zb3J0ID0gPGFueT5zb3J0ID09PSAnJyA/IHRydWUgOiBjb252ZXJ0VG9Cb29sZWFuKHNvcnQpO1xyXG5cclxuICAgIHRoaXMudmFsaWRBbmRTb3J0T3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNvcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyBtb2RvIGRlIHBlc3F1aXNhIHV0aWxpemFkbyBubyBjYW1wbyBkZSBidXNjYSwgcXVhbmRvIGhhYmlsaXRhZG8uXHJcbiAgICogVmFsb3JlcyBkZWZpbmlkb3Mgbm8gZW51bTogUG9NdWx0aXNlbGVjdEZpbHRlck1vZGVcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBzdGFydHNXaXRoYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWx0ZXItbW9kZScpIHNldCBmaWx0ZXJNb2RlKGZpbHRlck1vZGU6IFBvTXVsdGlzZWxlY3RGaWx0ZXJNb2RlKSB7XHJcbiAgICB0aGlzLl9maWx0ZXJNb2RlID0gZmlsdGVyTW9kZSBpbiBQb011bHRpc2VsZWN0RmlsdGVyTW9kZSA/IGZpbHRlck1vZGUgOiBQb011bHRpc2VsZWN0RmlsdGVyTW9kZS5zdGFydHNXaXRoO1xyXG4gICAgc3dpdGNoICh0aGlzLl9maWx0ZXJNb2RlLnRvU3RyaW5nKCkpIHtcclxuICAgICAgY2FzZSAnc3RhcnRzV2l0aCc6XHJcbiAgICAgICAgdGhpcy5fZmlsdGVyTW9kZSA9IFBvTXVsdGlzZWxlY3RGaWx0ZXJNb2RlLnN0YXJ0c1dpdGg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NvbnRhaW5zJzpcclxuICAgICAgICB0aGlzLl9maWx0ZXJNb2RlID0gUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUuY29udGFpbnM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VuZHNXaXRoJzpcclxuICAgICAgICB0aGlzLl9maWx0ZXJNb2RlID0gUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUuZW5kc1dpdGg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVyTW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJNb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBEZXZlIHNlciBpbmZvcm1hZG8gbyBub21lIGRhIHByb3ByaWVkYWRlIGRvIG9iamV0byBxdWUgc2Vyw6EgdXRpbGl6YWRvIHBhcmEgYSBjb252ZXJzw6NvIGRvcyBpdGVucyBhcHJlc2VudGFkb3MgbmEgbGlzdGEgZG8gY29tcG9uZW50ZVxyXG4gICAqIChgcC1vcHRpb25zYCksIGVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgcmVzcG9uc8OhdmVsIHBlbG8gdGV4dG8gZGUgYXByZXNlbnRhw6fDo28gZGUgY2FkYSBpdGVtIGRhIGxpc3RhLlxyXG4gICAqXHJcbiAgICogTmVjZXNzw6FyaW8gcXVhbmRvIGluZm9ybWFyIG8gc2VydmnDp28gY29tbyBVUkwgZSBvIG1lc21vIG7Do28gZXN0aXZlciByZXRvcm5hbmRvIHVtYSBsaXN0YSBkZSBvYmpldG9zIG5vIHBhZHLDo28gZGEgaW50ZXJmYWNlXHJcbiAgICogYFBvTXVsdGlTZWxlY3RPcHRpb25gLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGxhYmVsYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWVsZC1sYWJlbCcpIHNldCBmaWVsZExhYmVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ZpZWxkTGFiZWwgPSB2YWx1ZSA/IHZhbHVlIDogUE9fTVVMVElTRUxFQ1RfRklFTERfTEFCRUxfREVGQVVMVDtcclxuXHJcbiAgICBpZiAoaXNUeXBlb2YodGhpcy5maWx0ZXJTZXJ2aWNlLCAnc3RyaW5nJykgJiYgdGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5maWVsZExhYmVsID0gdGhpcy5fZmllbGRMYWJlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWVsZExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkbyBvIG5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBhIGNvbnZlcnPDo28gZG9zIGl0ZW5zIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBjb21wb25lbnRlXHJcbiAgICogKGBwLW9wdGlvbnNgKSwgZXN0YSBwcm9wcmllZGFkZSBzZXLDoSByZXNwb25zw6F2ZWwgcGVsbyB2YWxvciBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEuXHJcbiAgICpcclxuICAgKiBOZWNlc3PDoXJpbyBxdWFuZG8gaW5mb3JtYXIgbyBzZXJ2acOnbyBjb21vIFVSTCBlIG8gbWVzbW8gbsOjbyBlc3RpdmVyIHJldG9ybmFuZG8gdW1hIGxpc3RhIGRlIG9iamV0b3Mgbm8gcGFkcsOjbyBkYSBpbnRlcmZhY2VcclxuICAgKiBgUG9NdWx0aVNlbGVjdE9wdGlvbmAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgdmFsdWVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpZWxkLXZhbHVlJykgc2V0IGZpZWxkVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmllbGRWYWx1ZSA9IHZhbHVlID8gdmFsdWUgOiBQT19NVUxUSVNFTEVDVF9GSUVMRF9WQUxVRV9ERUZBVUxUO1xyXG5cclxuICAgIGlmIChpc1R5cGVvZih0aGlzLmZpbHRlclNlcnZpY2UsICdzdHJpbmcnKSAmJiB0aGlzLnNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmZpZWxkVmFsdWUgPSB0aGlzLl9maWVsZFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkVmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlU2VydmljZTogUG9MYW5ndWFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0U2hvcnRMYW5ndWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2V0U2VydmljZSh0aGlzLmZpbHRlclNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsdGVyU3ViamVjdFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gdHJ1ZSkpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoc2VhcmNoOiBzdHJpbmcpID0+IHRoaXMuYXBwbHlGaWx0ZXIoc2VhcmNoKSksXHJcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmlzU2VydmVyU2VhcmNoaW5nID0gZmFsc2UpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkQW5kU29ydE9wdGlvbnMoKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdCh0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VydmljZShzZXJ2aWNlOiBQb011bHRpc2VsZWN0RmlsdGVyIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNUeXBlb2Yoc2VydmljZSwgJ29iamVjdCcpKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZSA9IDxQb011bHRpc2VsZWN0RmlsdGVyU2VydmljZT5zZXJ2aWNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlID0gdGhpcy5kZWZhdWx0U2VydmljZTtcclxuICAgICAgdGhpcy5zZXJ2aWNlLmNvbmZpZ1Byb3BlcnRpZXMoPHN0cmluZz5zZXJ2aWNlLCB0aGlzLmZpZWxkTGFiZWwsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0ZpcnN0RmlsdGVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHZhbGlkQW5kU29ydE9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgcmVtb3ZlVW5kZWZpbmVkQW5kTnVsbE9wdGlvbnNXaXRoRmllbGRWYWx1ZSh0aGlzLm9wdGlvbnMsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgIHJlbW92ZUR1cGxpY2F0ZWRPcHRpb25zV2l0aEZpZWxkVmFsdWUodGhpcy5vcHRpb25zLCB0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFVuZGVmaW5lZExhYmVscyh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc29ydCkge1xyXG4gICAgICAgIHNvcnRPcHRpb25zQnlQcm9wZXJ0eSh0aGlzLm9wdGlvbnMsIHRoaXMuZmllbGRMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFVuZGVmaW5lZExhYmVscyhvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgaWYgKCFvcHRpb25bdGhpcy5maWVsZExhYmVsXSkge1xyXG4gICAgICAgIG9wdGlvblt0aGlzLmZpZWxkTGFiZWxdID0gb3B0aW9uW3RoaXMuZmllbGRWYWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdChvcHRpb25zOiBBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55Pikge1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy52aXNpYmxlT3B0aW9uc0Ryb3Bkb3duID0gb3B0aW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxPbkNoYW5nZShzZWxlY3RlZE9wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+KSB7XHJcbiAgICBpZiAodGhpcy5vbk1vZGVsQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLmdldFZhbHVlc0Zyb21PcHRpb25zKHNlbGVjdGVkT3B0aW9ucykpO1xyXG4gICAgICB0aGlzLmV2ZW50Q2hhbmdlKHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudENoYW5nZShzZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgIGlmIChzZWxlY3RlZE9wdGlvbnMgJiYgdGhpcy5sYXN0TGVuZ3RoTW9kZWwgIT09IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChzZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYXN0TGVuZ3RoTW9kZWwgPSBzZWxlY3RlZE9wdGlvbnMgPyBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc0Zyb21PcHRpb25zKHNlbGVjdGVkT3B0aW9uczogQXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4pIHtcclxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbnMgJiYgc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA/IHNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvblt0aGlzLmZpZWxkVmFsdWVdKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxCeVZhbHVlKHZhbHVlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5maW5kSW5kZXgob3B0aW9uID0+IG9wdGlvblt0aGlzLmZpZWxkVmFsdWVdID09PSB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zW2luZGV4XS5sYWJlbDtcclxuICB9XHJcblxyXG4gIHNlYXJjaEJ5TGFiZWwoc2VhcmNoOiBzdHJpbmcsIG9wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+LCBmaWx0ZXJNb2RlOiBQb011bHRpc2VsZWN0RmlsdGVyTW9kZSkge1xyXG4gICAgaWYgKHNlYXJjaCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG5ld09wdGlvbnM6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+ID0gW107XHJcbiAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25bdGhpcy5maWVsZExhYmVsXSAmJiB0aGlzLmNvbXBhcmVNZXRob2Qoc2VhcmNoLCBvcHRpb24sIGZpbHRlck1vZGUpKSB7XHJcbiAgICAgICAgICBuZXdPcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnZpc2libGVPcHRpb25zRHJvcGRvd24gPSBuZXdPcHRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlT3B0aW9uc0Ryb3Bkb3duID0gWy4uLm9wdGlvbnNdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcGFyZU1ldGhvZChzZWFyY2g6IHN0cmluZywgb3B0aW9uOiBQb011bHRpc2VsZWN0T3B0aW9uLCBmaWx0ZXJNb2RlOiBQb011bHRpc2VsZWN0RmlsdGVyTW9kZSkge1xyXG4gICAgc3dpdGNoIChmaWx0ZXJNb2RlKSB7XHJcbiAgICAgIGNhc2UgUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUuc3RhcnRzV2l0aDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydHNXaXRoKHNlYXJjaCwgb3B0aW9uKTtcclxuICAgICAgY2FzZSBQb011bHRpc2VsZWN0RmlsdGVyTW9kZS5jb250YWluczpcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWlucyhzZWFyY2gsIG9wdGlvbik7XHJcbiAgICAgIGNhc2UgUG9NdWx0aXNlbGVjdEZpbHRlck1vZGUuZW5kc1dpdGg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kc1dpdGgoc2VhcmNoLCBvcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRzV2l0aChzZWFyY2g6IHN0cmluZywgb3B0aW9uOiBQb011bHRpc2VsZWN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuZmllbGRMYWJlbF0udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5zKHNlYXJjaDogc3RyaW5nLCBvcHRpb246IFBvTXVsdGlzZWxlY3RPcHRpb24pIHtcclxuICAgIHJldHVybiBvcHRpb25bdGhpcy5maWVsZExhYmVsXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgfVxyXG5cclxuICBlbmRzV2l0aChzZWFyY2g6IHN0cmluZywgb3B0aW9uOiBQb011bHRpc2VsZWN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuZmllbGRMYWJlbF0udG9Mb3dlckNhc2UoKS5lbmRzV2l0aChzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcclxuICAgIGlmIChyZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCBjLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE9wdGlvbnMobmV3T3B0aW9uczogQXJyYXk8YW55Piwgb3B0aW9ucyA9IHRoaXMub3B0aW9ucykge1xyXG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICBpZiAobmV3T3B0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5sYXN0TGVuZ3RoTW9kZWwgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsdGVyU2VydmljZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdPcHRpb25zLmZvckVhY2gobmV3T3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgIGlmIChvcHRpb25bdGhpcy5maWVsZFZhbHVlXSA9PT0gbmV3T3B0aW9uW3RoaXMuZmllbGRWYWx1ZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZXM6IGFueSk6IHZvaWQge1xyXG4gICAgdmFsdWVzID0gdmFsdWVzIHx8IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnNlcnZpY2UgJiYgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmdldE9iamVjdHNCeVZhbHVlc1N1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5nZXRPYmplY3RzQnlWYWx1ZXModmFsdWVzKS5zdWJzY3JpYmUob3B0aW9ucyA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jYWxsT25DaGFuZ2UodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFZhbGlkYXIgc2UgdG9kb3Mgb3MgaXRlbXMgZXhpc3RlbSBlbnRyZSBvcyBvcHRpb25zLCBzZW7Do28gYXR1YWxpemFyIG8gbW9kZWxcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbnModmFsdWVzLm1hcCh2YWx1ZSA9PiAoeyBbdGhpcy5maWVsZFZhbHVlXTogdmFsdWUgfSkpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsT25DaGFuZ2UodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1vZGVsKCkge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdG9yQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBhcHBseUZpbHRlcih2YWx1ZT86IHN0cmluZyk6IE9ic2VydmFibGU8QXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4+O1xyXG4gIGFic3RyYWN0IHVwZGF0ZVZpc2libGVJdGVtcygpOiB2b2lkO1xyXG59XHJcbiJdfQ==