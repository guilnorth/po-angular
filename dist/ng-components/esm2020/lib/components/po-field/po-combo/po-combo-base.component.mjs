import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, isTypeof, validValue } from '../../../utils/util';
import { poLocaleDefault } from '../../../services/po-language/po-language.constant';
import { InputBoolean } from '../../../decorators';
import { requiredFailed } from '../validators';
import { PoComboFilterMode } from './po-combo-filter-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
const PO_COMBO_DEBOUNCE_TIME_DEFAULT = 400;
const PO_COMBO_FIELD_LABEL_DEFAULT = 'label';
const PO_COMBO_FIELD_VALUE_DEFAULT = 'value';
export const poComboLiteralsDefault = {
    en: {
        noData: 'No data found'
    },
    es: {
        noData: 'Datos no encontrados'
    },
    pt: {
        noData: 'Nenhum dado encontrado'
    },
    ru: {
        noData: 'Данные не найдены'
    }
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
export class PoComboBaseComponent {
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
        /**
         * @optional
         *
         * @description
         *
         * Se verdadeiro, o evento `p-change` receberá como argumento o `PoComboOption` referente à opção selecionada.
         *
         * @default `false`
         */
        this.emitObjectValue = false;
        /**
         * @optional
         *
         * @description
         *
         * Se verdadeiro, desabilitará a busca de um item via TAB.
         *
         * @default `false`
         */
        this.disabledTabFilter = false;
        /**
         * @optional
         *
         * @description
         *
         * Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.
         *
         * > Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `p-emit-object-value`.
         */
        this.change = new EventEmitter();
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
        this.ngModelChange = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.
         *
         */
        this.inputChange = new EventEmitter();
        this.cacheOptions = [];
        this.firstInWriteValue = true;
        this.isFirstFilter = true;
        this.isFiltering = false;
        this.previousSearchValue = '';
        this.visibleOptions = [];
        this.page = 1;
        this.pageSize = 10;
        this.loading = false;
        this.dynamicLabel = 'label';
        this.dynamicValue = 'value';
        this.cacheStaticOptions = [];
        this.comboOptionsList = [];
        this.onModelTouched = null;
        this._changeOnEnter = false;
        this._debounceTime = 400;
        this._disabled = false;
        this._disabledInitFilter = false;
        this._fieldLabel = 'label';
        this._fieldValue = 'value';
        this._filterMinlength = 0;
        this._filterMode = PoComboFilterMode.startsWith;
        this._options = [];
        this._placeholder = '';
        this._required = false;
        this._sort = false;
        this._infiniteScrollDistance = 100;
        this._infiniteScroll = false;
        // utilizado para fazer o controle de atualizar o model.
        // não deve forçar a atualização se o gatilho for o writeValue para não deixar o campo dirty.
        this.fromWriteValue = false;
        this.language = languageService.getShortLanguage();
    }
    /**
     * @optional
     *
     * @description
     *
     * Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.
     *
     * @default `false`
     */
    set infiniteScroll(value) {
        this._infiniteScroll = convertToBoolean(value);
    }
    get infiniteScroll() {
        return this._infiniteScroll;
    }
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
    set infiniteScrollDistance(value) {
        this._infiniteScrollDistance = value > 100 || value < 0 ? 100 : value;
    }
    get infiniteScrollDistance() {
        return this._infiniteScrollDistance;
    }
    /** Mensagem apresentada enquanto o campo estiver vazio. */
    set placeholder(value) {
        this._placeholder = value || '';
    }
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @optional
     *
     * @description
     * Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla.
     * Será utilizada apenas quando houver serviço (`p-filter-service`).
     *
     * @default `400`
     */
    set debounceTime(value) {
        const parsedValue = parseInt(value, 10);
        this._debounceTime = !isNaN(parsedValue) && parsedValue > 0 ? parsedValue : PO_COMBO_DEBOUNCE_TIME_DEFAULT;
    }
    get debounceTime() {
        return this._debounceTime;
    }
    /**
     * @optional
     *
     * @description
     * Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.
     *
     * @default `false`
     *
     */
    set disabledInitFilter(value) {
        this._disabledInitFilter = convertToBoolean(value);
    }
    get disabledInitFilter() {
        return this._disabledInitFilter;
    }
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
    set fieldValue(value) {
        if (!this.service && !this.filterService) {
            this.dynamicValue = value;
        }
        this._fieldValue = value || PO_COMBO_FIELD_VALUE_DEFAULT;
        if (isTypeof(this.filterService, 'string') && this.service) {
            this.service.fieldValue = this._fieldValue;
        }
    }
    get fieldValue() {
        return this._fieldValue;
    }
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
    set fieldLabel(value) {
        if (!this.service && !this.filterService) {
            this.dynamicLabel = value;
        }
        this._fieldLabel = value || PO_COMBO_FIELD_LABEL_DEFAULT;
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
     * Valor mínimo de caracteres para realizar o filtro no serviço.
     *
     * @default `0`
     */
    set filterMinlength(value) {
        const parseValue = typeof value === 'string' ? parseInt(value, 10) : value;
        this._filterMinlength = Number.isInteger(parseValue) ? parseValue : 0;
    }
    get filterMinlength() {
        return this._filterMinlength;
    }
    /**
     * @optional
     *
     * @description
     * Indica que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel(this.selectedValue);
    }
    get required() {
        return this._required;
    }
    /**
     * @optional
     *
     * @description
     * Indica que o evento `p-change` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.
     *
     * @default `false`
     */
    set changeOnEnter(changeOnEnter) {
        this._changeOnEnter = convertToBoolean(changeOnEnter);
    }
    get changeOnEnter() {
        return this._changeOnEnter;
    }
    /**
     * @optional
     *
     * @description
     * Indica que o campo será desabilitado.
     *
     * @default `false`
     */
    set disabled(disabled) {
        this._disabled = convertToBoolean(disabled);
        this.validateModel(this.selectedValue);
    }
    get disabled() {
        return this._disabled;
    }
    /** Indica que a lista definida na propriedade p-options será ordenada pela descrição. */
    set sort(sort) {
        this._sort = convertToBoolean(sort);
        this.comboListDefinitions();
    }
    get sort() {
        return this._sort;
    }
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
    set options(options) {
        this._options = Array.isArray(options) ? options : [];
        this.comboListDefinitions();
    }
    get options() {
        return this._options;
    }
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
    set filterMode(filterMode) {
        this._filterMode = filterMode in PoComboFilterMode ? filterMode : PoComboFilterMode.startsWith;
        switch (this._filterMode.toString()) {
            case 'startsWith':
                this._filterMode = PoComboFilterMode.startsWith;
                break;
            case 'contains':
                this._filterMode = PoComboFilterMode.contains;
                break;
            case 'endsWith':
                this._filterMode = PoComboFilterMode.endsWith;
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
     *
     * Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface *PoComboFilter*.
     *
     * > Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.
     */
    set filterParams(filterParams) {
        this._filterParams = filterParams || filterParams === 0 || filterParams === false ? filterParams : undefined;
    }
    get filterParams() {
        return this._filterParams;
    }
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
    set literals(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._literals = {
                ...poComboLiteralsDefault[poLocaleDefault],
                ...poComboLiteralsDefault[this.language],
                ...value
            };
        }
        else {
            this._literals = poComboLiteralsDefault[this.language];
        }
    }
    get literals() {
        return this._literals || poComboLiteralsDefault[this.language];
    }
    get isOptionGroupList() {
        return this._options.length && this._options[0].hasOwnProperty('options');
    }
    ngOnInit() {
        this.dynamicValue = this.checkIfService('value');
        this.dynamicLabel = this.checkIfService('label');
        this.updateComboList();
    }
    onInitService() {
        if (this.filterService) {
            this.setService(this.filterService);
            this.initInputObservable();
        }
    }
    setService(service) {
        if (service) {
            if (isTypeof(service, 'object')) {
                this.service = service;
            }
            else {
                this.service = this.defaultService;
                this.service.configProperties(service, this.fieldLabel, this.fieldValue);
            }
        }
    }
    compareMethod(search, option, filterMode) {
        switch (filterMode) {
            case PoComboFilterMode.startsWith:
                return this.startsWith(search, option);
            case PoComboFilterMode.contains:
                return this.contains(search, option);
            case PoComboFilterMode.endsWith:
                return this.endsWith(search, option);
        }
    }
    startsWith(search, option) {
        return option[this.dynamicLabel].toLowerCase().startsWith(search.toLowerCase());
    }
    contains(search, option) {
        return option[this.dynamicLabel].toLowerCase().indexOf(search.toLowerCase()) > -1;
    }
    endsWith(search, option) {
        return option[this.dynamicLabel].toLowerCase().endsWith(search.toLowerCase());
    }
    getOptionFromValue(value, options) {
        return options ? options.find((option) => this.isEqual(option[this.dynamicValue], value)) : null;
    }
    getOptionFromLabel(label, options) {
        if (options) {
            return options.find((option) => option[this.dynamicLabel].toString().toLowerCase() === label.toString().toLowerCase());
        }
        else {
            return null;
        }
    }
    updateSelectedValue(option, isUpdateModel = true) {
        const optionLabel = (option && option[this.dynamicLabel]) || '';
        this.updateInternalVariables(option);
        // atualiza o valor do input quando for changeOnEnter apenas se for para atualizar o model.
        if (this.changeOnEnter && isUpdateModel) {
            this.setInputValue(optionLabel);
        }
        else if (!this.changeOnEnter) {
            this.setInputValue(optionLabel);
        }
        if (isUpdateModel) {
            const optionValue = option?.[this.dynamicValue] !== undefined ? option[this.dynamicValue] : undefined;
            this.updateModel(optionValue);
        }
    }
    callModelChange(value) {
        // Caso o componente estiver dentro de um form, terá acesso ao método onModelChange.
        return this.onModelChange ? this.onModelChange(value) : this.ngModelChange.emit(value);
    }
    isEqual(value, inputValue) {
        if ((value || value === 0) && inputValue) {
            return value.toString() === inputValue.toString();
        }
        if ((value === null && inputValue !== null) || (value === undefined && inputValue !== undefined)) {
            value = `${value}`; // Transformando em string
        }
        return value === inputValue;
    }
    searchForLabel(search, options, filterMode) {
        if (search && options && options.length) {
            const newOptions = [];
            let addedOptionsGroupTitle = false;
            let optionsGroupTitle;
            options.forEach(option => {
                if ('options' in option) {
                    addedOptionsGroupTitle = false;
                    return (optionsGroupTitle = option);
                }
                if (option[this.dynamicLabel] && (this.compareMethod(search, option, filterMode) || this.service)) {
                    if (this.isOptionGroupList && !addedOptionsGroupTitle) {
                        newOptions.push(optionsGroupTitle);
                        addedOptionsGroupTitle = true;
                    }
                    newOptions.push(option);
                }
            });
            this.selectedView = newOptions[this.isOptionGroupList ? 1 : 0];
            this.updateComboList(newOptions);
        }
        else {
            this.updateComboList();
        }
    }
    updateComboList(options) {
        const copyOptions = options || [...this.comboOptionsList];
        const newOptions = !options && !this.infiniteScroll && this.selectedValue ? [{ ...this.selectedOption }] : copyOptions;
        this.visibleOptions = newOptions;
        if (!this.selectedView && this.visibleOptions.length) {
            this.selectedView = copyOptions.find(option => option[this.dynamicValue] !== undefined);
        }
    }
    getNextOption(value, options, reverse = false) {
        const optionsList = reverse ? options.slice(0).reverse() : options.slice(0);
        let optionFound = null;
        let found = false;
        for (const option of optionsList) {
            if (option[this.dynamicValue] && !optionFound) {
                optionFound = option;
            }
            if (option[this.dynamicValue] && found) {
                return option;
            }
            if (this.isEqual(option[this.dynamicValue], value)) {
                found = true;
            }
        }
        return optionFound;
    }
    getIndexSelectedView() {
        for (let i = 0; i < this.visibleOptions.length; i++) {
            if (this.compareObjects(this.visibleOptions[i], this.selectedView)) {
                return i;
            }
        }
        return null;
    }
    compareObjects(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    verifyValidOption() {
        const inputValue = this.getInputValue();
        const optionFound = this.getOptionFromLabel(inputValue, this.comboOptionsList);
        if (!this.service) {
            this.updateComboList([...this.cacheStaticOptions]);
        }
        if (optionFound && optionFound[this.dynamicValue] !== this.selectedValue) {
            this.updateSelectedValue(optionFound);
            this.previousSearchValue = optionFound[this.dynamicLabel];
        }
        else if (this.selectedValue && this.selectedOption && this.selectedOption[this.dynamicLabel] !== inputValue) {
            this.updateSelectedValueWithOldOption();
            this.previousSearchValue = this.selectedOption[this.dynamicLabel];
            return;
        }
        else if (inputValue && !optionFound) {
            const isInputValueDiffSelectedLabel = !!(this.selectedOption && this.selectedOption[this.dynamicLabel] !== inputValue);
            this.updateSelectedValue(null, isInputValueDiffSelectedLabel || this.changeOnEnter);
            this.previousSearchValue = '';
            return;
        }
    }
    // Recebe as alterações do model
    writeValue(value) {
        this.fromWriteValue = true;
        if (validValue(value) && !this.service && this.comboOptionsList && this.comboOptionsList.length) {
            const option = this.getOptionFromValue(value, this.comboOptionsList);
            this.updateSelectedValue(option);
            this.updateComboList();
            return;
        }
        // Se houver serviço busca pelo model.
        if (value && this.service) {
            return this.getObjectByValue(value);
        }
        else {
            this.updateSelectedValue(null);
            this.updateComboList();
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
    validate(abstractControl) {
        if (requiredFailed(this.required, this.disabled, abstractControl.value)) {
            return {
                required: {
                    valid: false
                }
            };
        }
    }
    clear(value) {
        this.callModelChange(value);
        this.updateSelectedValue(null);
        this.updateComboList();
        this.initInputObservable();
    }
    configAfterSetFilterService(service) {
        if (service) {
            this.comboOptionsList = [];
            this.unsubscribeKeyupObservable();
            this.onInitService();
        }
        else {
            this.service = undefined;
            this.comboOptionsList = this.cacheStaticOptions;
        }
        this.visibleOptions = [];
        this.isFirstFilter = true;
    }
    unsubscribeKeyupObservable() {
        if (this.keyupSubscribe) {
            this.keyupSubscribe.unsubscribe();
        }
    }
    validateModel(model) {
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    comboListDefinitions() {
        this.comboOptionsList = this.options.length > 0 ? this.listingComboOptions(this.options) : this.options;
        this.cacheStaticOptions = this.comboOptionsList;
        this.updateComboList();
    }
    checkIfService(dynamicValue) {
        if ((this.service || this.filterService) && dynamicValue === 'label') {
            return PO_COMBO_FIELD_LABEL_DEFAULT;
        }
        if ((this.service || this.filterService) && dynamicValue === 'value') {
            return PO_COMBO_FIELD_VALUE_DEFAULT;
        }
        if (!this.service && dynamicValue === 'label') {
            return this.fieldLabel;
        }
        if (!this.service && dynamicValue === 'value') {
            return this.fieldValue;
        }
    }
    compareOptions(dynamicLabel) {
        return function (optionA, optionB) {
            const labelA = optionA[dynamicLabel].toString().toLowerCase();
            const labelB = optionB[dynamicLabel].toString().toLowerCase();
            return labelA < labelB ? -1 : labelA > labelB ? 1 : 0;
        };
    }
    hasDuplicatedOption(options, currentOption, accumulatedGroupOptions) {
        if (accumulatedGroupOptions) {
            return accumulatedGroupOptions.some(option => option[this.dynamicLabel] === currentOption);
        }
        else {
            return options.some(option => option[this.dynamicValue] === currentOption);
        }
    }
    listingComboOptions(comboOptions) {
        const comboOptionsList = comboOptions.concat();
        const verifiedComboOptionsList = this.verifyComboOptions(comboOptionsList);
        this.sortOptions(verifiedComboOptionsList);
        if (this.isOptionGroupList && verifiedComboOptionsList.length > 0) {
            return this.verifyComboOptionsGroup(verifiedComboOptionsList);
        }
        return verifiedComboOptionsList;
    }
    sortOptions(comboOptionsList) {
        if (comboOptionsList.length > 0 && this.sort) {
            return comboOptionsList.sort(this.compareOptions(this.dynamicLabel));
        }
    }
    validateValue(currentOption, verifyingOptionsGroup = false) {
        const { options } = currentOption;
        if (this.isOptionGroupList) {
            return ((validValue(currentOption[this.dynamicLabel]) && options && options.length > 0) ||
                (verifyingOptionsGroup === true && validValue(currentOption[this.dynamicValue])));
        }
        return validValue(currentOption[this.dynamicValue]) && !options;
    }
    verifyComboOptions(comboOptions, verifyingOptionsGroup = false, accumulatedGroupOptions) {
        return comboOptions.reduce((accumulatedOptions, currentOption) => {
            if (!this.verifyIfHasLabel(currentOption) ||
                this.hasDuplicatedOption(accumulatedOptions, currentOption[this.dynamicValue] || currentOption[this.dynamicLabel], accumulatedGroupOptions) ||
                !this.validateValue(currentOption, verifyingOptionsGroup)) {
                return accumulatedOptions;
            }
            accumulatedOptions.push(currentOption);
            return accumulatedOptions;
        }, []);
    }
    verifyComboOptionsGroup(comboOptionsList) {
        return comboOptionsList.reduce((accumulatedGroupOptions, currentOption) => {
            const { options } = currentOption;
            const verifiedComboOptionsGroupList = this.verifyComboOptions(options, true, accumulatedGroupOptions);
            if (verifiedComboOptionsGroupList.length > 0) {
                this.sortOptions(verifiedComboOptionsGroupList);
                accumulatedGroupOptions.push({ label: currentOption[this.dynamicLabel], options: true }, ...verifiedComboOptionsGroupList);
            }
            return accumulatedGroupOptions;
        }, []);
    }
    verifyIfHasLabel(currentOption = {}) {
        const { options } = currentOption;
        if ((this.isOptionGroupList && options && !currentOption[this.dynamicLabel]) ||
            (!currentOption[this.dynamicLabel] && !currentOption[this.dynamicValue]) ||
            (!this.isOptionGroupList && options)) {
            return false;
        }
        if (!currentOption[this.dynamicLabel]) {
            currentOption[this.dynamicLabel] = currentOption[this.dynamicValue].toString();
            return true;
        }
        return true;
    }
    updateInternalVariables(option) {
        if (option) {
            this.selectedView = option;
            this.selectedOption = option;
        }
        else {
            this.selectedView = undefined;
            this.selectedOption = undefined;
        }
    }
    updateModel(value) {
        if (value !== this.selectedValue) {
            if (!this.fromWriteValue) {
                this.callModelChange(value);
            }
            this.change.emit(this.emitObjectValue ? this.selectedOption : value);
        }
        this.selectedValue = value;
        this.fromWriteValue = false;
    }
    updateSelectedValueWithOldOption() {
        const oldOption = this.getOptionFromValue(this.selectedValue, this.comboOptionsList);
        if (oldOption && oldOption[this.dynamicLabel]) {
            return this.updateSelectedValue(oldOption);
        }
    }
}
PoComboBaseComponent.ɵfac = function PoComboBaseComponent_Factory(t) { return new (t || PoComboBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoComboBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoComboBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], label: ["p-label", "label"], help: ["p-help", "help"], name: "name", filterService: ["p-filter-service", "filterService"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], infiniteScrollDistance: ["p-infinite-scroll-distance", "infiniteScrollDistance"], icon: ["p-icon", "icon"], optional: ["p-optional", "optional"], clean: ["p-clean", "clean"], emitObjectValue: ["p-emit-object-value", "emitObjectValue"], disabledTabFilter: ["p-disabled-tab-filter", "disabledTabFilter"], placeholder: ["p-placeholder", "placeholder"], debounceTime: ["p-debounce-time", "debounceTime"], disabledInitFilter: ["p-disabled-init-filter", "disabledInitFilter"], fieldValue: ["p-field-value", "fieldValue"], fieldLabel: ["p-field-label", "fieldLabel"], filterMinlength: ["p-filter-minlength", "filterMinlength"], required: ["p-required", "required"], changeOnEnter: ["p-change-on-enter", "changeOnEnter"], disabled: ["p-disabled", "disabled"], sort: ["p-sort", "sort"], options: ["p-options", "options"], filterMode: ["p-filter-mode", "filterMode"], filterParams: ["p-filter-params", "filterParams"], literals: ["p-literals", "literals"] }, outputs: { change: "p-change", ngModelChange: "ngModelChange", inputChange: "p-input-change" } });
__decorate([
    InputBoolean()
], PoComboBaseComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], PoComboBaseComponent.prototype, "clean", void 0);
__decorate([
    InputBoolean()
], PoComboBaseComponent.prototype, "emitObjectValue", void 0);
__decorate([
    InputBoolean()
], PoComboBaseComponent.prototype, "disabledTabFilter", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComboBaseComponent, [{
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
        }], name: [{
            type: Input,
            args: ['name']
        }], filterService: [{
            type: Input,
            args: ['p-filter-service']
        }], infiniteScroll: [{
            type: Input,
            args: ['p-infinite-scroll']
        }], infiniteScrollDistance: [{
            type: Input,
            args: ['p-infinite-scroll-distance']
        }], icon: [{
            type: Input,
            args: ['p-icon']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], clean: [{
            type: Input,
            args: ['p-clean']
        }], emitObjectValue: [{
            type: Input,
            args: ['p-emit-object-value']
        }], disabledTabFilter: [{
            type: Input,
            args: ['p-disabled-tab-filter']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], ngModelChange: [{
            type: Output,
            args: ['ngModelChange']
        }], inputChange: [{
            type: Output,
            args: ['p-input-change']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], debounceTime: [{
            type: Input,
            args: ['p-debounce-time']
        }], disabledInitFilter: [{
            type: Input,
            args: ['p-disabled-init-filter']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], filterMinlength: [{
            type: Input,
            args: ['p-filter-minlength']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], changeOnEnter: [{
            type: Input,
            args: ['p-change-on-enter']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], sort: [{
            type: Input,
            args: ['p-sort']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], filterMode: [{
            type: Input,
            args: ['p-filter-mode']
        }], filterParams: [{
            type: Input,
            args: ['p-filter-params']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29tYm8tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tY29tYm8vcG8tY29tYm8tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU9oRSxNQUFNLDhCQUE4QixHQUFHLEdBQUcsQ0FBQztBQUMzQyxNQUFNLDRCQUE0QixHQUFHLE9BQU8sQ0FBQztBQUM3QyxNQUFNLDRCQUE0QixHQUFHLE9BQU8sQ0FBQztBQUU3QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQyxFQUFFLEVBQW1CO1FBQ25CLE1BQU0sRUFBRSxlQUFlO0tBQ3hCO0lBQ0QsRUFBRSxFQUFtQjtRQUNuQixNQUFNLEVBQUUsc0JBQXNCO0tBQy9CO0lBQ0QsRUFBRSxFQUFtQjtRQUNuQixNQUFNLEVBQUUsd0JBQXdCO0tBQ2pDO0lBQ0QsRUFBRSxFQUFtQjtRQUNuQixNQUFNLEVBQUUsbUJBQW1CO0tBQzVCO0NBQ0YsQ0FBQztBQUVGOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsTUFBTSxPQUFnQixvQkFBb0I7SUFtaEJ4QyxZQUFZLGVBQWtDO1FB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VztrQkFBdEMsS0FBSzttQkFBQyxlQUFlO1lBaUJRLFlBQVk7a0JBQXpDLEtBQUs7bUJBQUMsaUJBQWlCO1lBbUJhLGtCQUFrQjtrQkFBdEQsS0FBSzttQkFBQyx3QkFBd0I7WUFvQkgsVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlO1lBNEJNLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQXdCVyxlQUFlO2tCQUEvQyxLQUFLO21CQUFDLG9CQUFvQjtZQWtCRixRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFrQmEsYUFBYTtrQkFBNUMsS0FBSzttQkFBQyxtQkFBbUI7WUFnQkQsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBV0UsSUFBSTtrQkFBeEIsS0FBSzttQkFBQyxRQUFRO1lBd0JTLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVztZQXFCVSxVQUFVO2tCQUFyQyxLQUFLO21CQUFDLGVBQWU7WUE0QlEsWUFBWTtrQkFBekMsS0FBSzttQkFBQyxpQkFBaUI7WUFrQ0MsUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgaXNUeXBlb2YsIHZhbGlkVmFsdWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9Mb2NhbGVEZWZhdWx0IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2UuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgcmVxdWlyZWRGYWlsZWQgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcclxuXHJcbmltcG9ydCB7IFBvQ29tYm9GaWx0ZXIgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29tYm8tZmlsdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ29tYm9GaWx0ZXJNb2RlIH0gZnJvbSAnLi9wby1jb21iby1maWx0ZXItbW9kZS5lbnVtJztcclxuaW1wb3J0IHsgUG9Db21ib0ZpbHRlclNlcnZpY2UgfSBmcm9tICcuL3BvLWNvbWJvLWZpbHRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9Db21ib0dyb3VwIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNvbWJvLWdyb3VwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ29tYm9MaXRlcmFscyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jb21iby1saXRlcmFscy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NvbWJvT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNvbWJvLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NvbWJvT3B0aW9uR3JvdXAgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tY29tYm8tb3B0aW9uLWdyb3VwLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQT19DT01CT19ERUJPVU5DRV9USU1FX0RFRkFVTFQgPSA0MDA7XHJcbmNvbnN0IFBPX0NPTUJPX0ZJRUxEX0xBQkVMX0RFRkFVTFQgPSAnbGFiZWwnO1xyXG5jb25zdCBQT19DT01CT19GSUVMRF9WQUxVRV9ERUZBVUxUID0gJ3ZhbHVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwb0NvbWJvTGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9Db21ib0xpdGVyYWxzPntcclxuICAgIG5vRGF0YTogJ05vIGRhdGEgZm91bmQnXHJcbiAgfSxcclxuICBlczogPFBvQ29tYm9MaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICdEYXRvcyBubyBlbmNvbnRyYWRvcydcclxuICB9LFxyXG4gIHB0OiA8UG9Db21ib0xpdGVyYWxzPntcclxuICAgIG5vRGF0YTogJ05lbmh1bSBkYWRvIGVuY29udHJhZG8nXHJcbiAgfSxcclxuICBydTogPFBvQ29tYm9MaXRlcmFscz57XHJcbiAgICBub0RhdGE6ICfQlNCw0L3QvdGL0LUg0L3QtSDQvdCw0LnQtNC10L3RiydcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gYHBvLWNvbWJvYCBleGliZSB1bWEgbGlzdGEgZGUgb3DDp8O1ZXMgY29tIGbDoWNpbCBzZWxlw6fDo28gZSBmaWx0cmFnZW0uXHJcbiAqXHJcbiAqIEFsw6ltIGRhIGV4aWJpw6fDo28gcGFkcsOjbywgbmVsZSDDqSBwb3Nzw612ZWwgbGlzdGFyIGFzIG9ww7VlcyBlbSBhZ3J1cGFtZW50b3MuXHJcbiAqXHJcbiAqIMOJIHBvc3PDrXZlbCBzZWxlY2lvbmFyIGUgbmF2ZWdhciBlbnRyZSBhcyBvcMOnw7VlcyBkYSBsaXN0YSB0YW50byBhdHJhdsOpcyBkbyAqbW91c2UqIHF1YW50byBkbyB0ZWNsYWRvLiBObyB0ZWNsYWRvIG5hdmVndWUgY29tXHJcbiAqIGFzIHNldGFzIGUgcHJlc3Npb25lICpFbnRlciogbmEgb3DDp8OjbyBxdWUgZGVzZWphci5cclxuICpcclxuICogQ29tIGVsZSB0YW1iw6ltIMOpIHBvc3PDrXZlbCBkZWZpbmlyIHVtYSBsaXN0YSDDoCBwYXJ0aXIgZGEgcmVxdWlzacOnw6NvIGRlIHVtIHNlcnZpw6dvIGRlZmluaWRvIGVtIGBwLWZpbHRlci1zZXJ2aWNlYC5cclxuICpcclxuICogRW0gYHAtZmlsdGVyLW1vZGVgLCBvIGZpbHRybyBwb2RlcsOhIHNlciBjb25maWd1cmFkbyBwYXJhIGJ1c2NhciBvcMO1ZXMgcXVlIGNvcnJlc3BvbmRhbSBhbyBpbsOtY2lvLCBmaW0gb3UgcXVlIGNvbnRlbmhhIG8gdmFsb3IgZGlnaXRhZG8uXHJcbiAqXHJcbiAqIE8gYHBvLWNvbWJvYCBndWFyZGEgbyDDumx0aW1vIHZhbG9yIGNhc28gbyB1c3XDoXJpbyBkZXNpc3RhIGRlIHVtYSBidXNjYSwgZGVpeGFuZG8gbyBjYW1wbyBvdSBwcmVzc2lvbmFuZG8gKkVzYyouIENhc28gc2VqYSBkaWdpdGFkbyBub1xyXG4gKiBjYW1wbyBkZSBidXNjYSBhIGRlc2NyacOnw6NvIGNvbXBsZXRhIGRlIHVtIGl0ZW0sIGVudMOjbyBhIHNlbGXDp8OjbyBzZXLDoSBhdXRvbWF0aWNhbWVudGUgZWZldHVhZGEgYW8gZGVpeGFyIG8gY2FtcG8gb3UgcHJlc3Npb25hbmRvICpFbnRlciouXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvQ29tYm9CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgVmFsaWRhdG9yIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBMYWJlbCBubyBjb21wb25lbnRlLiAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gcGFyYSBvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqIE5vbWUgZG8gY29tcG9uZW50ZS4gKi9cclxuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogTmVzdGEgcHJvcHJpZWRhZGUgZGV2ZSBzZXIgaW5mb3JtYWRhIGEgVVJMIGRvIHNlcnZpw6dvIGVtIHF1ZSBzZXLDoSByZWFsaXphZG8gbyBmaWx0cm8gcGFyYSBjYXJyZWdhbWVudG8gZGEgbGlzdGEgZGVcclxuICAgKiBpdGVucyBubyBjb21wb25lbnRlLlxyXG4gICAqIENhc28gaGFqYSBhIG5lY2Vzc2lkYWRlIGRlIGN1c3RvbWl6YcOnw6NvLCBlbnTDo28gcG9kZSBzZXIgaW5mb3JtYWRvIHVtIHNlcnZpw6dvIGltcGxlbWVudGFuZG8gYSBpbnRlcmZhY2UgUG9Db21ib0ZpbHRlci5cclxuICAgKlxyXG4gICAqIENhc28gdXRpbGl6YWRvIHVtYSBVUkwsIG8gc2VydmnDp28gZGV2ZSBzZXIgcmV0b3JuYWRvIG5vIHBhZHLDo28gQVBJIFRPVFZTIGUgdXRpbGl6YSBhcyBwcm9wcmllZGFkZXNcclxuICAgKiBgcC1maWVsZC1sYWJlbGAgZSBgcC1maWVsZC12YWx1ZWAgcGFyYSBhIGNvbnN0cnXDp8OjbyBkYSBsaXN0YSBkZSBpdGVucy5cclxuICAgKlxyXG4gICAqIFF1YW5kbyB1dGlsaXphZGEgdW1hIFVSTCBkZSBzZXJ2acOnbywgZW50w6NvIHNlcsOhIGNvbmNhdGVuYWRhIG5lc3RhIFVSTCBvIHZhbG9yIHF1ZSBkZXNlamEtc2UgZmlsdHJhciBkYSBzZWd1aW50ZSBmb3JtYTpcclxuICAgKiBgYGBcclxuICAgKiB1cmwgKyA/ZmlsdGVyPVBldGVyXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBTZSBmb3IgZGVmaW5pZGEgYSBwcm9wcmllZGFkZSBgcC1maWx0ZXItcGFyYW1zYCwgYSBtZXNtYSB0YW1iw6ltIHNlcsOhIGNvbmNhdGVuYWRhLiBQb3IgZXhlbXBsbywgcGFyYSBvXHJcbiAgICogcGFyw6JtZXRybyBgeyBhZ2U6IDIzIH1gIGEgVVJMIGZpY2FyaWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB1cmwgKyA/cGFnZT0xJnBhZ2VTaXplPTIwJmFnZT0yMyZmaWx0ZXI9UGV0ZXJcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmlsdGVyLXNlcnZpY2UnKSBmaWx0ZXJTZXJ2aWNlOiBQb0NvbWJvRmlsdGVyIHwgc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogU2UgdmVyZGFkZWlybyBhdGl2YSBhIGZ1bmNpb25hbGlkYWRlIGRlIHNjcm9sbCBpbmZpbml0byBwYXJhIG8gY29tYm8sIEFvIGNoZWdhciBhbyBmaW0gZGEgdGFiZWxhIGV4ZWN1dGFyw6Egbm92YSBidXNjYSBkb3MgZGFkb3MgY29uZm9ybWUgcGFnaW5hw6fDo28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWluZmluaXRlLXNjcm9sbCcpIHNldCBpbmZpbml0ZVNjcm9sbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW5maW5pdGVTY3JvbGwgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBpbmZpbml0ZVNjcm9sbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmZpbml0ZVNjcm9sbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyBwZXJjZW50dWFsIG5lY2Vzc8OhcmlvIHBhcmEgZGlzcGFyYXIgbyBldmVudG8gYHNob3ctbW9yZWAsIHF1ZSDDqSByZXNwb25zw6F2ZWwgcG9yIGNhcnJlZ2FyIG1haXMgZGFkb3Mgbm8gY29tYm8uIENhc28gbyB2YWxvciBzZWphIG1haW9yIHF1ZSAxMDAgb3UgbWVub3IgcXVlIDAsIG8gdmFsb3IgcGFkcsOjbyBzZXLDoSAxMDAlLlxyXG4gICAqXHJcbiAgICogKipFeGVtcGxvcyoqXHJcbiAgICogLSBwLWluZmluaXRlLXNjcm9sbC1kaXN0YW5jZSA9IDgwOiBRdWFuZG8gYXRpbmdpciA4MCUgZG8gc2Nyb2xsIGRvIGNvbWJvLCBvIGBzaG93LW1vcmVgIHNlcsOhIGRpc3BhcmFkby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW5maW5pdGUtc2Nyb2xsLWRpc3RhbmNlJykgc2V0IGluZmluaXRlU2Nyb2xsRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5faW5maW5pdGVTY3JvbGxEaXN0YW5jZSA9IHZhbHVlID4gMTAwIHx8IHZhbHVlIDwgMCA/IDEwMCA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZmluaXRlU2Nyb2xsRGlzdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5maW5pdGVTY3JvbGxEaXN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyDDrWNvbmUgcXVlIHNlcsOhIGV4aWJpZG8gbm8gaW7DrWNpbyBkbyBjYW1wby5cclxuICAgKlxyXG4gICAqIMOJIHBvc3PDrXZlbCB1c2FyIHF1YWxxdWVyIHVtIGRvcyDDrWNvbmVzIGRhIFtCaWJsaW90ZWNhIGRlIMOtY29uZXNdKC9ndWlkZXMvaWNvbnMpLiBjb25mb3JtZSBleGVtcGxvIGFiYWl4bzpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tY29tYm8gcC1pY29uPVwicG8taWNvbi11c2VyXCIgcC1sYWJlbD1cIlBPIGNvbWJvXCI+PC9wby1jb21ibz5cclxuICAgKiBgYGBcclxuICAgKiBUYW1iw6ltIMOpIHBvc3PDrXZlbCB1dGlsaXphciBvdXRyYXMgZm9udGVzIGRlIMOtY29uZXMsIHBvciBleGVtcGxvIGEgYmlibGlvdGVjYSAqRm9udCBBd2Vzb21lKiwgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICogYGBgXHJcbiAgICogPHBvLWNvbWJvIHAtaWNvbj1cImZhIGZhLXBvZGNhc3RcIiBwLWxhYmVsPVwiUE8gY29tYm9cIj48L3BvLWNvbWJvPlxyXG4gICAqIGBgYFxyXG4gICAqIE91dHJhIG9ww6fDo28gc2VyaWEgYSBjdXN0b21pemHDp8OjbyBkbyDDrWNvbmUgYXRyYXbDqXMgZG8gYFRlbXBsYXRlUmVmYCwgY29uZm9ybWUgZXhlbXBsbyBhYmFpeG86XHJcbiAgICogYGBgXHJcbiAgICogPHBvLWNvbWJvIFtwLWljb25dPVwidGVtcGxhdGVcIiBwLWxhYmVsPVwiY29tYm8gdGVtcGxhdGUgaW9uaWNcIj48L3BvLWNvbWJvPlxyXG4gICAqXHJcbiAgICogPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cclxuICAgKiAgPGlvbi1pY29uIHN0eWxlPVwiZm9udC1zaXplOiBpbmhlcml0XCIgbmFtZT1cImhlYXJ0XCI+PC9pb24taWNvbj5cclxuICAgKiA8L25nLXRlbXBsYXRlPlxyXG4gICAqIGBgYFxyXG4gICAqID4gUGFyYSBvIMOtY29uZSBlbnF1YWRyYXIgY29ycmV0YW1lbnRlLCBkZXZlLXNlIHV0aWxpemFyIGBmb250LXNpemU6IGluaGVyaXRgIGNhc28gbyDDrWNvbmUgdXRpbGl6YWRvIG7Do28gYXBsaXF1ZS1vLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1pY29uJykgaWNvbj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogLSBPIGNhbXBvIGNvbnRlciBgcC1yZXF1aXJlZGA7XHJcbiAgICogLSBOw6NvIHBvc3N1aXIgYHAtaGVscGAgZS9vdSBgcC1sYWJlbGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbmFsJykgb3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBTZSB2ZXJkYWRlaXJvLCBvIGNhbXBvIHJlY2ViZXLDoSB1bSBib3TDo28gcGFyYSBzZXIgbGltcG8uICovXHJcbiAgQElucHV0KCdwLWNsZWFuJykgQElucHV0Qm9vbGVhbigpIGNsZWFuPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFNlIHZlcmRhZGVpcm8sIG8gZXZlbnRvIGBwLWNoYW5nZWAgcmVjZWJlcsOhIGNvbW8gYXJndW1lbnRvIG8gYFBvQ29tYm9PcHRpb25gIHJlZmVyZW50ZSDDoCBvcMOnw6NvIHNlbGVjaW9uYWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1lbWl0LW9iamVjdC12YWx1ZScpIEBJbnB1dEJvb2xlYW4oKSBlbWl0T2JqZWN0VmFsdWU/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBTZSB2ZXJkYWRlaXJvLCBkZXNhYmlsaXRhcsOhIGEgYnVzY2EgZGUgdW0gaXRlbSB2aWEgVEFCLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZC10YWItZmlsdGVyJykgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkVGFiRmlsdGVyPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGV2ZSBzZXIgaW5mb3JtYWRhIHVtYSBmdW7Dp8OjbyBxdWUgc2Vyw6EgZGlzcGFyYWRhIHF1YW5kbyBob3V2ZXIgYWx0ZXJhw6fDtWVzIG5vIG5nTW9kZWwuIEEgZnVuw6fDo28gcmVjZWJlcsOhIGNvbW8gYXJndW1lbnRvIG8gbW9kZWwgbW9kaWZpY2Fkby5cclxuICAgKlxyXG4gICAqID4gUG9kZS1zZSBvcHRhciBwZWxvIHJlY2ViaW1lbnRvIGRvIG9iamV0byBzZWxlY2lvbmFkbyBhbyBpbnbDqXMgZG8gbW9kZWwgYXRyYXbDqXMgZGEgcHJvcHJpZWRhZGUgYHAtZW1pdC1vYmplY3QtdmFsdWVgLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtY2hhbmdlJykgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRnVuw6fDo28gcGFyYSBhdHVhbGl6YXIgbyBuZ01vZGVsIGRvIGNvbXBvbmVudGUsIG5lY2Vzc8OhcmlvIHF1YW5kbyBuw6NvIGZvciB1dGlsaXphZG8gZGVudHJvIGRhIHRhZyBmb3JtLlxyXG4gICAqXHJcbiAgICogTmEgdmVyc8OjbyAxMi4yLjAgZG8gQW5ndWxhciBhIHZlcmlmaWNhw6fDo28gYHN0cmljdFRlbXBsYXRlc2AgdmVtIHRydWUgY29tbyBkZWZhdWx0LiBQb3J0YW50bywgcGFyYSB1dGlsaXphclxyXG4gICAqIHR3by13YXkgYmluZGluZyBubyBjb21wb25lbnRlIGRldmUgc2UgdXRpbGl6YXIgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiA8cG8tY29tYm8gLi4uIFtuZ01vZGVsXT1cImNvbWJvTW9kZWxcIiAobmdNb2RlbENoYW5nZSk9XCJjb21ib01vZGVsID0gJGV2ZW50XCI+IDwvcG8tY29tYm8+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKi9cclxuICBAT3V0cHV0KCduZ01vZGVsQ2hhbmdlJykgbmdNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkYSB1bWEgZnVuw6fDo28gcXVlIHNlcsOhIGRpc3BhcmFkYSBxdWFuZG8gaG91dmVyIGFsdGVyYcOnw7VlcyBubyBTZWFyY2ggaW5wdXQuIEEgZnVuw6fDo28gcmVjZWJlcsOhIGNvbW8gYXJndW1lbnRvIG8gaW5wdXQgbW9kaWZpY2Fkby5cclxuICAgKlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtaW5wdXQtY2hhbmdlJykgaW5wdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNhY2hlT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIGRlZmF1bHRTZXJ2aWNlOiBQb0NvbWJvRmlsdGVyU2VydmljZTtcclxuICBmaXJzdEluV3JpdGVWYWx1ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgaXNGaXJzdEZpbHRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgaXNGaWx0ZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBrZXl1cFN1YnNjcmliZTogYW55O1xyXG4gIG9uTW9kZWxDaGFuZ2U6IGFueTtcclxuICBwcmV2aW91c1NlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBzZWxlY3RlZE9wdGlvbjogYW55O1xyXG4gIHNlbGVjdGVkVmFsdWU6IGFueTtcclxuICBzZWxlY3RlZFZpZXc6IGFueTtcclxuICBzZXJ2aWNlOiBQb0NvbWJvRmlsdGVyU2VydmljZTtcclxuICB2aXNpYmxlT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgcGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBkeW5hbWljTGFiZWw6IHN0cmluZyA9ICdsYWJlbCc7XHJcbiAgZHluYW1pY1ZhbHVlOiBzdHJpbmcgPSAndmFsdWUnO1xyXG5cclxuICBwcm90ZWN0ZWQgY2FjaGVTdGF0aWNPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJvdGVjdGVkIGNvbWJvT3B0aW9uc0xpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcm90ZWN0ZWQgb25Nb2RlbFRvdWNoZWQ6IGFueSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX2NoYW5nZU9uRW50ZXI/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfZGVib3VuY2VUaW1lPzogbnVtYmVyID0gNDAwO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkSW5pdEZpbHRlcj86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9maWVsZExhYmVsPzogc3RyaW5nID0gJ2xhYmVsJztcclxuICBwcml2YXRlIF9maWVsZFZhbHVlPzogc3RyaW5nID0gJ3ZhbHVlJztcclxuICBwcml2YXRlIF9maWx0ZXJNaW5sZW5ndGg/OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2ZpbHRlck1vZGU/OiBQb0NvbWJvRmlsdGVyTW9kZSA9IFBvQ29tYm9GaWx0ZXJNb2RlLnN0YXJ0c1dpdGg7XHJcbiAgcHJpdmF0ZSBfZmlsdGVyUGFyYW1zPzogYW55O1xyXG4gIHByaXZhdGUgX2xpdGVyYWxzPzogUG9Db21ib0xpdGVyYWxzO1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PFBvQ29tYm9PcHRpb24gfCBQb0NvbWJvT3B0aW9uR3JvdXAgfCBhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgX3JlcXVpcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NvcnQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2luZmluaXRlU2Nyb2xsRGlzdGFuY2U/OiBudW1iZXIgPSAxMDA7XHJcbiAgcHJpdmF0ZSBfaW5maW5pdGVTY3JvbGw/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0PzogbnVtYmVyO1xyXG5cclxuICAvLyB1dGlsaXphZG8gcGFyYSBmYXplciBvIGNvbnRyb2xlIGRlIGF0dWFsaXphciBvIG1vZGVsLlxyXG4gIC8vIG7Do28gZGV2ZSBmb3LDp2FyIGEgYXR1YWxpemHDp8OjbyBzZSBvIGdhdGlsaG8gZm9yIG8gd3JpdGVWYWx1ZSBwYXJhIG7Do28gZGVpeGFyIG8gY2FtcG8gZGlydHkuXHJcbiAgcHJpdmF0ZSBmcm9tV3JpdGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHZhbGlkYXRvckNoYW5nZTogYW55O1xyXG5cclxuICAvKiogTWVuc2FnZW0gYXByZXNlbnRhZGEgZW5xdWFudG8gbyBjYW1wbyBlc3RpdmVyIHZhemlvLiAqL1xyXG4gIEBJbnB1dCgncC1wbGFjZWhvbGRlcicpIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFc3RhIHByb3ByaWVkYWRlIGRlZmluZSBlbSBxdWFudG8gdGVtcG8gKGVtIG1pbGlzc2VndW5kb3MpLCBhZ3VhcmRhIHBhcmEgYWNpb25hciBvIGV2ZW50byBkZSBmaWx0cm8gYXDDs3MgY2FkYSBwcmVzc2lvbmFtZW50byBkZSB0ZWNsYS5cclxuICAgKiBTZXLDoSB1dGlsaXphZGEgYXBlbmFzIHF1YW5kbyBob3V2ZXIgc2VydmnDp28gKGBwLWZpbHRlci1zZXJ2aWNlYCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgNDAwYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kZWJvdW5jZS10aW1lJykgc2V0IGRlYm91bmNlVGltZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KDxhbnk+dmFsdWUsIDEwKTtcclxuXHJcbiAgICB0aGlzLl9kZWJvdW5jZVRpbWUgPSAhaXNOYU4ocGFyc2VkVmFsdWUpICYmIHBhcnNlZFZhbHVlID4gMCA/IHBhcnNlZFZhbHVlIDogUE9fQ09NQk9fREVCT1VOQ0VfVElNRV9ERUZBVUxUO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlYm91bmNlVGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlYm91bmNlVGltZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRGVzYWJpbGl0YSBvIGZpbHRybyBpbmljaWFsIG5vIHNlcnZpw6dvLCBxdWUgw6kgZXhlY3V0YWRvIG5vIHByaW1laXJvIGNsaXF1ZSBubyBjYW1wby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1kaXNhYmxlZC1pbml0LWZpbHRlcicpIHNldCBkaXNhYmxlZEluaXRGaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkSW5pdEZpbHRlciA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkSW5pdEZpbHRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEluaXRGaWx0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkbyBvIG5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBhIGNvbnZlcnPDo28gZG9zIGl0ZW5zIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBjb21wb25lbnRlXHJcbiAgICogKGBwLW9wdGlvbnNgKSwgZXN0YSBwcm9wcmllZGFkZSBzZXLDoSByZXNwb25zw6F2ZWwgcGVsbyB2YWxvciBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEuXHJcbiAgICpcclxuICAgKiBOZWNlc3PDoXJpbyBxdWFuZG8gaW5mb3JtYXIgbyBzZXJ2acOnbyBjb21vIFVSTCBlIG8gbWVzbW8gbsOjbyBlc3RpdmVyIHJldG9ybmFuZG8gdW1hIGxpc3RhIGRlIG9iamV0b3Mgbm8gcGFkcsOjbyBkYSBpbnRlcmZhY2VcclxuICAgKiBQb0NvbWJvT3B0aW9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHZhbHVlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWVsZC12YWx1ZScpIHNldCBmaWVsZFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5zZXJ2aWNlICYmICF0aGlzLmZpbHRlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5keW5hbWljVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWVsZFZhbHVlID0gdmFsdWUgfHwgUE9fQ09NQk9fRklFTERfVkFMVUVfREVGQVVMVDtcclxuXHJcbiAgICBpZiAoaXNUeXBlb2YodGhpcy5maWx0ZXJTZXJ2aWNlLCAnc3RyaW5nJykgJiYgdGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5maWVsZFZhbHVlID0gdGhpcy5fZmllbGRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWVsZFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIERldmUgc2VyIGluZm9ybWFkbyBvIG5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIHF1ZSBzZXLDoSB1dGlsaXphZG8gcGFyYSBhIGNvbnZlcnPDo28gZG9zIGl0ZW5zIGFwcmVzZW50YWRvcyBuYSBsaXN0YSBkbyBjb21wb25lbnRlXHJcbiAgICogKGBwLW9wdGlvbnNgKSwgZXN0YSBwcm9wcmllZGFkZSBzZXLDoSByZXNwb25zw6F2ZWwgcGVsbyB0ZXh0byBkZSBhcHJlc2VudGHDp8OjbyBkZSBjYWRhIGl0ZW0gZGEgbGlzdGEuXHJcbiAgICpcclxuICAgKiBOZWNlc3PDoXJpbyBxdWFuZG8gaW5mb3JtYXIgbyBzZXJ2acOnbyBjb21vIFVSTCBlIG8gbWVzbW8gbsOjbyBlc3RpdmVyIHJldG9ybmFuZG8gdW1hIGxpc3RhIGRlIG9iamV0b3Mgbm8gcGFkcsOjbyBkYSBpbnRlcmZhY2VcclxuICAgKiBQb0NvbWJvT3B0aW9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGxhYmVsYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWVsZC1sYWJlbCcpIHNldCBmaWVsZExhYmVsKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5zZXJ2aWNlICYmICF0aGlzLmZpbHRlclNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5keW5hbWljTGFiZWwgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWVsZExhYmVsID0gdmFsdWUgfHwgUE9fQ09NQk9fRklFTERfTEFCRUxfREVGQVVMVDtcclxuXHJcbiAgICBpZiAoaXNUeXBlb2YodGhpcy5maWx0ZXJTZXJ2aWNlLCAnc3RyaW5nJykgJiYgdGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZS5maWVsZExhYmVsID0gdGhpcy5fZmllbGRMYWJlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWVsZExhYmVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkTGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFZhbG9yIG3DrW5pbW8gZGUgY2FyYWN0ZXJlcyBwYXJhIHJlYWxpemFyIG8gZmlsdHJvIG5vIHNlcnZpw6dvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpbHRlci1taW5sZW5ndGgnKSBzZXQgZmlsdGVyTWlubGVuZ3RoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHBhcnNlVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuX2ZpbHRlck1pbmxlbmd0aCA9IE51bWJlci5pc0ludGVnZXIocGFyc2VWYWx1ZSkgPyBwYXJzZVZhbHVlIDogMDtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJNaW5sZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyTWlubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6Egb2JyaWdhdMOzcmlvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb252ZXJ0VG9Cb29sZWFuKHJlcXVpcmVkKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy5zZWxlY3RlZFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCByZXF1aXJlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogSW5kaWNhIHF1ZSBvIGV2ZW50byBgcC1jaGFuZ2VgIHPDsyBzZXLDoSBkaXNwYXJhZG8gYW8gY2xpY2FyIG91IHByZXNzaW9uYXIgYSB0ZWNsYSBcIkVudGVyXCIgc29icmUgdW1hIG9ww6fDo28gc2VsZWNpb25hZGEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNoYW5nZS1vbi1lbnRlcicpIHNldCBjaGFuZ2VPbkVudGVyKGNoYW5nZU9uRW50ZXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NoYW5nZU9uRW50ZXIgPSBjb252ZXJ0VG9Cb29sZWFuKGNoYW5nZU9uRW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZU9uRW50ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlT25FbnRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIGRlc2FiaWxpdGFkby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogSW5kaWNhIHF1ZSBhIGxpc3RhIGRlZmluaWRhIG5hIHByb3ByaWVkYWRlIHAtb3B0aW9ucyBzZXLDoSBvcmRlbmFkYSBwZWxhIGRlc2NyacOnw6NvLiAqL1xyXG4gIEBJbnB1dCgncC1zb3J0Jykgc2V0IHNvcnQoc29ydDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc29ydCA9IGNvbnZlcnRUb0Jvb2xlYW4oc29ydCk7XHJcbiAgICB0aGlzLmNvbWJvTGlzdERlZmluaXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc29ydCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zb3J0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmVzdGEgcHJvcHJpZWRhZGUgZGVmaW5lIGEgbGlzdGEgZGUgb3DDp8O1ZXMgZG8gYHBvLWNvbWJvYC5cclxuICAgKlxyXG4gICAqID4gQSBsaXN0YSBwb2RlIHNlciBkZWZpbmlkYSB1dGlsaXphbmRvIHVtIGFycmF5IGNvbSBvIHZhbG9yIHJlcHJlc2VudGFuZG8gbyBgdmFsdWVgIGUgbyBgbGFiZWxgIGRhcyBzZWd1aW50ZXMgZm9ybWFzOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLWNvbWJvIG5hbWU9XCJjb21ib1wiIHAtbGFiZWw9XCJQTyBDb21ib1wiIFtwLW9wdGlvbnNdPVwiW3t2YWx1ZTogMSwgbGFiZWw6ICdPbmUnfSwge3ZhbHVlOiAyLCBsYWJlbDogJ3R3byd9XVwiPiA8L3BvLWNvbWJvPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLWNvbWJvIG5hbWU9XCJjb21ib1wiIHAtbGFiZWw9XCJQTyBDb21ib1wiIFtwLW9wdGlvbnNdPVwiW3tuYW1lOiAnUm9nZXInLCBhZ2U6IDI4fSwge25hbWU6ICdBbm5lJywgYWdlOiAzNX1dXCIgcC1maWVsZC1sYWJlbD1cIm5hbWVcIiBwLWZpZWxkLXZhbHVlPVwiYWdlXCI+IDwvcG8tY29tYm8+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAtIEFjb25zZWxoYS1zZSB1dGlsaXphciB2YWxvcmVzIGRpc3RpbnRvcyBubyBgbGFiZWxgIGUgYHZhbHVlYCBkb3MgaXRlbnMuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbnMnKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBBcnJheTxQb0NvbWJvT3B0aW9uIHwgUG9Db21ib09wdGlvbkdyb3VwIHwgYW55Pikge1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkob3B0aW9ucykgPyBvcHRpb25zIDogW107XHJcblxyXG4gICAgdGhpcy5jb21ib0xpc3REZWZpbml0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9wdGlvbnMoKTogQXJyYXk8UG9Db21ib09wdGlvbiB8IFBvQ29tYm9PcHRpb25Hcm91cCB8IGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gbW9kbyBkZSBwZXNxdWlzYSB1dGlsaXphZG8gbm8gZmlsdHJvIGRhIGxpc3RhIGRlIHNlbGXDp8OjbzogYHN0YXJ0c1dpdGhgLCBgY29udGFpbnNgIG91IGBlbmRzV2l0aGAuXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyB1dGlsaXphciBhIHByb3ByaWVkYWRlIGBwLWZpbHRlci1zZXJ2aWNlYCBlc3RhIHByb3ByaWVkYWRlIHNlcsOhIGlnbm9yYWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYHN0YXJ0c1dpdGhgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWZpbHRlci1tb2RlJykgc2V0IGZpbHRlck1vZGUoZmlsdGVyTW9kZTogUG9Db21ib0ZpbHRlck1vZGUpIHtcclxuICAgIHRoaXMuX2ZpbHRlck1vZGUgPSBmaWx0ZXJNb2RlIGluIFBvQ29tYm9GaWx0ZXJNb2RlID8gZmlsdGVyTW9kZSA6IFBvQ29tYm9GaWx0ZXJNb2RlLnN0YXJ0c1dpdGg7XHJcbiAgICBzd2l0Y2ggKHRoaXMuX2ZpbHRlck1vZGUudG9TdHJpbmcoKSkge1xyXG4gICAgICBjYXNlICdzdGFydHNXaXRoJzpcclxuICAgICAgICB0aGlzLl9maWx0ZXJNb2RlID0gUG9Db21ib0ZpbHRlck1vZGUuc3RhcnRzV2l0aDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY29udGFpbnMnOlxyXG4gICAgICAgIHRoaXMuX2ZpbHRlck1vZGUgPSBQb0NvbWJvRmlsdGVyTW9kZS5jb250YWlucztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZW5kc1dpdGgnOlxyXG4gICAgICAgIHRoaXMuX2ZpbHRlck1vZGUgPSBQb0NvbWJvRmlsdGVyTW9kZS5lbmRzV2l0aDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJNb2RlKCk6IFBvQ29tYm9GaWx0ZXJNb2RlIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJNb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFZhbG9yIHF1ZSBzZXLDoSByZXBhc3NhZG8gY29tbyBwYXLDom1ldHJvIHBhcmEgYSBVUkwgb3UgYW9zIG3DqXRvZG9zIGRvIHNlcnZpw6dvIHF1ZSBpbXBsZW1lbnRhbSBhIGludGVyZmFjZSAqUG9Db21ib0ZpbHRlciouXHJcbiAgICpcclxuICAgKiA+IENhc28gYSBsaXN0YSBjb250ZW5oYSBhZ3J1cGFtZW50b3MsIG9zIG1lc21vcyBzw7Mgc2Vyw6NvIGV4aWJpZG9zIHNlIGhvdXZlciBubyBtw61uaW1vIHVtYSBvcMOnw6NvIHF1ZSBjb3JyZXNwb25kYSDDoCBwZXNxdWlzYS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmlsdGVyLXBhcmFtcycpIHNldCBmaWx0ZXJQYXJhbXMoZmlsdGVyUGFyYW1zOiBhbnkpIHtcclxuICAgIHRoaXMuX2ZpbHRlclBhcmFtcyA9IGZpbHRlclBhcmFtcyB8fCBmaWx0ZXJQYXJhbXMgPT09IDAgfHwgZmlsdGVyUGFyYW1zID09PSBmYWxzZSA/IGZpbHRlclBhcmFtcyA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJQYXJhbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9iamV0byBjb20gYXMgbGl0ZXJhaXMgdXNhZGFzIG5vIGBwby1jb21ib2AuXHJcbiAgICpcclxuICAgKiBQYXJhIHV0aWxpemFyIGJhc3RhIHBhc3NhciBhIGxpdGVyYWwgcXVlIGRlc2VqYSBjdXN0b21pemFyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb0NvbWJvTGl0ZXJhbHMgPSB7XHJcbiAgICogICAgbm9EYXRhOiAnTmVuaHVtIHZhbG9yJ1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogRSBwYXJhIGNhcnJlZ2FyIGEgbGl0ZXJhbCBjdXN0b21pemFkYSwgYmFzdGEgYXBlbmFzIHBhc3NhciBvIG9iamV0byBwYXJhIG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1jb21ib1xyXG4gICAqICAgW3AtbGl0ZXJhbHNdPVwiY3VzdG9tTGl0ZXJhbHNcIj5cclxuICAgKiA8L3BvLWNvbWJvPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBPIG9iamV0byBwYWRyw6NvIGRlIGxpdGVyYWlzIHNlcsOhIHRyYWR1emlkbyBkZSBhY29yZG8gY29tIG8gaWRpb21hIGRvXHJcbiAgICogW2BQb0kxOG5TZXJ2aWNlYF0oL2RvY3VtZW50YXRpb24vcG8taTE4bikgb3UgZG8gYnJvd3Nlci5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtbGl0ZXJhbHMnKSBzZXQgbGl0ZXJhbHModmFsdWU6IFBvQ29tYm9MaXRlcmFscykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgdGhpcy5fbGl0ZXJhbHMgPSB7XHJcbiAgICAgICAgLi4ucG9Db21ib0xpdGVyYWxzRGVmYXVsdFtwb0xvY2FsZURlZmF1bHRdLFxyXG4gICAgICAgIC4uLnBvQ29tYm9MaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZV0sXHJcbiAgICAgICAgLi4udmFsdWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpdGVyYWxzID0gcG9Db21ib0xpdGVyYWxzRGVmYXVsdFt0aGlzLmxhbmd1YWdlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBsaXRlcmFscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXRlcmFscyB8fCBwb0NvbWJvTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IobGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNPcHRpb25Hcm91cExpc3QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgdGhpcy5fb3B0aW9uc1swXS5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmR5bmFtaWNWYWx1ZSA9IHRoaXMuY2hlY2tJZlNlcnZpY2UoJ3ZhbHVlJyk7XHJcbiAgICB0aGlzLmR5bmFtaWNMYWJlbCA9IHRoaXMuY2hlY2tJZlNlcnZpY2UoJ2xhYmVsJyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDb21ib0xpc3QoKTtcclxuICB9XHJcblxyXG4gIG9uSW5pdFNlcnZpY2UoKSB7XHJcbiAgICBpZiAodGhpcy5maWx0ZXJTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMuc2V0U2VydmljZSh0aGlzLmZpbHRlclNlcnZpY2UpO1xyXG4gICAgICB0aGlzLmluaXRJbnB1dE9ic2VydmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlcnZpY2Uoc2VydmljZTogUG9Db21ib0ZpbHRlciB8IHN0cmluZykge1xyXG4gICAgaWYgKHNlcnZpY2UpIHtcclxuICAgICAgaWYgKGlzVHlwZW9mKHNlcnZpY2UsICdvYmplY3QnKSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IDxQb0NvbWJvRmlsdGVyU2VydmljZT5zZXJ2aWNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHRoaXMuZGVmYXVsdFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNvbmZpZ1Byb3BlcnRpZXMoPHN0cmluZz5zZXJ2aWNlLCB0aGlzLmZpZWxkTGFiZWwsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBhcmVNZXRob2Qoc2VhcmNoOiBzdHJpbmcsIG9wdGlvbjogUG9Db21ib09wdGlvbiB8IFBvQ29tYm9Hcm91cCwgZmlsdGVyTW9kZTogUG9Db21ib0ZpbHRlck1vZGUpIHtcclxuICAgIHN3aXRjaCAoZmlsdGVyTW9kZSkge1xyXG4gICAgICBjYXNlIFBvQ29tYm9GaWx0ZXJNb2RlLnN0YXJ0c1dpdGg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRzV2l0aChzZWFyY2gsIG9wdGlvbik7XHJcbiAgICAgIGNhc2UgUG9Db21ib0ZpbHRlck1vZGUuY29udGFpbnM6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbnMoc2VhcmNoLCBvcHRpb24pO1xyXG4gICAgICBjYXNlIFBvQ29tYm9GaWx0ZXJNb2RlLmVuZHNXaXRoOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZHNXaXRoKHNlYXJjaCwgb3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0c1dpdGgoc2VhcmNoOiBzdHJpbmcsIG9wdGlvbjogYW55KSB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnMoc2VhcmNoOiBzdHJpbmcsIG9wdGlvbjogYW55KSB7XHJcbiAgICByZXR1cm4gb3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgfVxyXG5cclxuICBlbmRzV2l0aChzZWFyY2g6IHN0cmluZywgb3B0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiBvcHRpb25bdGhpcy5keW5hbWljTGFiZWxdLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uRnJvbVZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM6IGFueSkge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgPyBvcHRpb25zLmZpbmQoKG9wdGlvbjogYW55KSA9PiB0aGlzLmlzRXF1YWwob3B0aW9uW3RoaXMuZHluYW1pY1ZhbHVlXSwgdmFsdWUpKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25Gcm9tTGFiZWwobGFiZWw6IGFueSwgb3B0aW9uczogYW55KSB7XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gb3B0aW9ucy5maW5kKFxyXG4gICAgICAgIChvcHRpb246IGFueSkgPT4gb3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IGxhYmVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFZhbHVlKG9wdGlvbjogYW55LCBpc1VwZGF0ZU1vZGVsOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9uTGFiZWwgPSAob3B0aW9uICYmIG9wdGlvblt0aGlzLmR5bmFtaWNMYWJlbF0pIHx8ICcnO1xyXG5cclxuICAgIHRoaXMudXBkYXRlSW50ZXJuYWxWYXJpYWJsZXMob3B0aW9uKTtcclxuXHJcbiAgICAvLyBhdHVhbGl6YSBvIHZhbG9yIGRvIGlucHV0IHF1YW5kbyBmb3IgY2hhbmdlT25FbnRlciBhcGVuYXMgc2UgZm9yIHBhcmEgYXR1YWxpemFyIG8gbW9kZWwuXHJcbiAgICBpZiAodGhpcy5jaGFuZ2VPbkVudGVyICYmIGlzVXBkYXRlTW9kZWwpIHtcclxuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKG9wdGlvbkxhYmVsKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbmdlT25FbnRlcikge1xyXG4gICAgICB0aGlzLnNldElucHV0VmFsdWUob3B0aW9uTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VwZGF0ZU1vZGVsKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uPy5bdGhpcy5keW5hbWljVmFsdWVdICE9PSB1bmRlZmluZWQgPyBvcHRpb25bdGhpcy5keW5hbWljVmFsdWVdIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVNb2RlbChvcHRpb25WYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsTW9kZWxDaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgLy8gQ2FzbyBvIGNvbXBvbmVudGUgZXN0aXZlciBkZW50cm8gZGUgdW0gZm9ybSwgdGVyw6EgYWNlc3NvIGFvIG3DqXRvZG8gb25Nb2RlbENoYW5nZS5cclxuICAgIHJldHVybiB0aGlzLm9uTW9kZWxDaGFuZ2UgPyB0aGlzLm9uTW9kZWxDaGFuZ2UodmFsdWUpIDogdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaXNFcXVhbCh2YWx1ZTogYW55LCBpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodmFsdWUgfHwgdmFsdWUgPT09IDApICYmIGlucHV0VmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkgPT09IGlucHV0VmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHZhbHVlID09PSBudWxsICYmIGlucHV0VmFsdWUgIT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1gOyAvLyBUcmFuc2Zvcm1hbmRvIGVtIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZSA9PT0gaW5wdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNlYXJjaEZvckxhYmVsKHNlYXJjaDogc3RyaW5nLCBvcHRpb25zOiBBcnJheTxhbnk+LCBmaWx0ZXJNb2RlOiBQb0NvbWJvRmlsdGVyTW9kZSkge1xyXG4gICAgaWYgKHNlYXJjaCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG5ld09wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcclxuICAgICAgbGV0IGFkZGVkT3B0aW9uc0dyb3VwVGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgbGV0IG9wdGlvbnNHcm91cFRpdGxlOiBQb0NvbWJvR3JvdXA7XHJcblxyXG4gICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoJ29wdGlvbnMnIGluIG9wdGlvbikge1xyXG4gICAgICAgICAgYWRkZWRPcHRpb25zR3JvdXBUaXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIChvcHRpb25zR3JvdXBUaXRsZSA9IG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXSAmJiAodGhpcy5jb21wYXJlTWV0aG9kKHNlYXJjaCwgb3B0aW9uLCBmaWx0ZXJNb2RlKSB8fCB0aGlzLnNlcnZpY2UpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc09wdGlvbkdyb3VwTGlzdCAmJiAhYWRkZWRPcHRpb25zR3JvdXBUaXRsZSkge1xyXG4gICAgICAgICAgICBuZXdPcHRpb25zLnB1c2gob3B0aW9uc0dyb3VwVGl0bGUpO1xyXG4gICAgICAgICAgICBhZGRlZE9wdGlvbnNHcm91cFRpdGxlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuZXdPcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3RlZFZpZXcgPSBuZXdPcHRpb25zW3RoaXMuaXNPcHRpb25Hcm91cExpc3QgPyAxIDogMF07XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KG5ld09wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVDb21ib0xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbWJvTGlzdChvcHRpb25zPzogQXJyYXk8YW55Pikge1xyXG4gICAgY29uc3QgY29weU9wdGlvbnMgPSBvcHRpb25zIHx8IFsuLi50aGlzLmNvbWJvT3B0aW9uc0xpc3RdO1xyXG5cclxuICAgIGNvbnN0IG5ld09wdGlvbnMgPVxyXG4gICAgICAhb3B0aW9ucyAmJiAhdGhpcy5pbmZpbml0ZVNjcm9sbCAmJiB0aGlzLnNlbGVjdGVkVmFsdWUgPyBbeyAuLi50aGlzLnNlbGVjdGVkT3B0aW9uIH1dIDogY29weU9wdGlvbnM7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlT3B0aW9ucyA9IG5ld09wdGlvbnM7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkVmlldyAmJiB0aGlzLnZpc2libGVPcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IGNvcHlPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvblt0aGlzLmR5bmFtaWNWYWx1ZV0gIT09IHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROZXh0T3B0aW9uKHZhbHVlOiBhbnksIG9wdGlvbnM6IEFycmF5PGFueT4sIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3Qgb3B0aW9uc0xpc3QgPSByZXZlcnNlID8gb3B0aW9ucy5zbGljZSgwKS5yZXZlcnNlKCkgOiBvcHRpb25zLnNsaWNlKDApO1xyXG4gICAgbGV0IG9wdGlvbkZvdW5kID0gbnVsbDtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnNMaXN0KSB7XHJcbiAgICAgIGlmIChvcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICYmICFvcHRpb25Gb3VuZCkge1xyXG4gICAgICAgIG9wdGlvbkZvdW5kID0gb3B0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25bdGhpcy5keW5hbWljVmFsdWVdICYmIGZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc0VxdWFsKG9wdGlvblt0aGlzLmR5bmFtaWNWYWx1ZV0sIHZhbHVlKSkge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcHRpb25Gb3VuZDtcclxuICB9XHJcblxyXG4gIGdldEluZGV4U2VsZWN0ZWRWaWV3KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZpc2libGVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBhcmVPYmplY3RzKHRoaXMudmlzaWJsZU9wdGlvbnNbaV0sIHRoaXMuc2VsZWN0ZWRWaWV3KSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBhcmVPYmplY3RzKG9iajE6IGFueSwgb2JqMjogYW55KSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5VmFsaWRPcHRpb24oKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uRm91bmQgPSB0aGlzLmdldE9wdGlvbkZyb21MYWJlbChpbnB1dFZhbHVlLCB0aGlzLmNvbWJvT3B0aW9uc0xpc3QpO1xyXG5cclxuICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KFsuLi50aGlzLmNhY2hlU3RhdGljT3B0aW9uc10pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25Gb3VuZCAmJiBvcHRpb25Gb3VuZFt0aGlzLmR5bmFtaWNWYWx1ZV0gIT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUob3B0aW9uRm91bmQpO1xyXG5cclxuICAgICAgdGhpcy5wcmV2aW91c1NlYXJjaFZhbHVlID0gb3B0aW9uRm91bmRbdGhpcy5keW5hbWljTGFiZWxdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVmFsdWUgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnNlbGVjdGVkT3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXSAhPT0gaW5wdXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWVXaXRoT2xkT3B0aW9uKCk7XHJcblxyXG4gICAgICB0aGlzLnByZXZpb3VzU2VhcmNoVmFsdWUgPSB0aGlzLnNlbGVjdGVkT3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChpbnB1dFZhbHVlICYmICFvcHRpb25Gb3VuZCkge1xyXG4gICAgICBjb25zdCBpc0lucHV0VmFsdWVEaWZmU2VsZWN0ZWRMYWJlbCA9ICEhKFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gJiYgdGhpcy5zZWxlY3RlZE9wdGlvblt0aGlzLmR5bmFtaWNMYWJlbF0gIT09IGlucHV0VmFsdWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShudWxsLCBpc0lucHV0VmFsdWVEaWZmU2VsZWN0ZWRMYWJlbCB8fCB0aGlzLmNoYW5nZU9uRW50ZXIpO1xyXG5cclxuICAgICAgdGhpcy5wcmV2aW91c1NlYXJjaFZhbHVlID0gJyc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlY2ViZSBhcyBhbHRlcmHDp8O1ZXMgZG8gbW9kZWxcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZnJvbVdyaXRlVmFsdWUgPSB0cnVlO1xyXG5cclxuICAgIGlmICh2YWxpZFZhbHVlKHZhbHVlKSAmJiAhdGhpcy5zZXJ2aWNlICYmIHRoaXMuY29tYm9PcHRpb25zTGlzdCAmJiB0aGlzLmNvbWJvT3B0aW9uc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZ2V0T3B0aW9uRnJvbVZhbHVlKHZhbHVlLCB0aGlzLmNvbWJvT3B0aW9uc0xpc3QpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkVmFsdWUob3B0aW9uKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21ib0xpc3QoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlIGhvdXZlciBzZXJ2acOnbyBidXNjYSBwZWxvIG1vZGVsLlxyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMuc2VydmljZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RCeVZhbHVlKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShudWxsKTtcclxuICAgICAgdGhpcy51cGRhdGVDb21ib0xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIFVzYWRhIHBhcmEgaW50ZXJjZXB0YXIgb3MgZXN0YWRvcyBkZSBoYWJpbGl0YWRvIHZpYSBmb3JtcyBhcGlcclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgaWYgKHJlcXVpcmVkRmFpbGVkKHRoaXMucmVxdWlyZWQsIHRoaXMuZGlzYWJsZWQsIGFic3RyYWN0Q29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXF1aXJlZDoge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIodmFsdWUpIHtcclxuICAgIHRoaXMuY2FsbE1vZGVsQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMudXBkYXRlQ29tYm9MaXN0KCk7XHJcbiAgICB0aGlzLmluaXRJbnB1dE9ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjb25maWdBZnRlclNldEZpbHRlclNlcnZpY2Uoc2VydmljZTogUG9Db21ib0ZpbHRlciB8IHN0cmluZykge1xyXG4gICAgaWYgKHNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5jb21ib09wdGlvbnNMaXN0ID0gW107XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVLZXl1cE9ic2VydmFibGUoKTtcclxuICAgICAgdGhpcy5vbkluaXRTZXJ2aWNlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlcnZpY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuY29tYm9PcHRpb25zTGlzdCA9IHRoaXMuY2FjaGVTdGF0aWNPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlzaWJsZU9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuaXNGaXJzdEZpbHRlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdW5zdWJzY3JpYmVLZXl1cE9ic2VydmFibGUoKSB7XHJcbiAgICBpZiAodGhpcy5rZXl1cFN1YnNjcmliZSkge1xyXG4gICAgICB0aGlzLmtleXVwU3Vic2NyaWJlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbChtb2RlbDogYW55KSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3JDaGFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UobW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21ib0xpc3REZWZpbml0aW9ucygpIHtcclxuICAgIHRoaXMuY29tYm9PcHRpb25zTGlzdCA9IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwID8gdGhpcy5saXN0aW5nQ29tYm9PcHRpb25zKHRoaXMub3B0aW9ucykgOiB0aGlzLm9wdGlvbnM7XHJcbiAgICB0aGlzLmNhY2hlU3RhdGljT3B0aW9ucyA9IHRoaXMuY29tYm9PcHRpb25zTGlzdDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNvbWJvTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0lmU2VydmljZShkeW5hbWljVmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKCh0aGlzLnNlcnZpY2UgfHwgdGhpcy5maWx0ZXJTZXJ2aWNlKSAmJiBkeW5hbWljVmFsdWUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgcmV0dXJuIFBPX0NPTUJPX0ZJRUxEX0xBQkVMX0RFRkFVTFQ7XHJcbiAgICB9XHJcbiAgICBpZiAoKHRoaXMuc2VydmljZSB8fCB0aGlzLmZpbHRlclNlcnZpY2UpICYmIGR5bmFtaWNWYWx1ZSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgICByZXR1cm4gUE9fQ09NQk9fRklFTERfVkFMVUVfREVGQVVMVDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc2VydmljZSAmJiBkeW5hbWljVmFsdWUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGRMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc2VydmljZSAmJiBkeW5hbWljVmFsdWUgPT09ICd2YWx1ZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcGFyZU9wdGlvbnMoZHluYW1pY0xhYmVsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAob3B0aW9uQTogYW55LCBvcHRpb25COiBhbnkpIHtcclxuICAgICAgY29uc3QgbGFiZWxBID0gb3B0aW9uQVtkeW5hbWljTGFiZWxdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgbGFiZWxCID0gb3B0aW9uQltkeW5hbWljTGFiZWxdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIHJldHVybiBsYWJlbEEgPCBsYWJlbEIgPyAtMSA6IGxhYmVsQSA+IGxhYmVsQiA/IDEgOiAwO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzRHVwbGljYXRlZE9wdGlvbihvcHRpb25zOiBBcnJheTxhbnk+LCBjdXJyZW50T3B0aW9uOiBzdHJpbmcsIGFjY3VtdWxhdGVkR3JvdXBPcHRpb25zPzogQXJyYXk8YW55Pikge1xyXG4gICAgaWYgKGFjY3VtdWxhdGVkR3JvdXBPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZEdyb3VwT3B0aW9ucy5zb21lKG9wdGlvbiA9PiBvcHRpb25bdGhpcy5keW5hbWljTGFiZWxdID09PSBjdXJyZW50T3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zLnNvbWUob3B0aW9uID0+IG9wdGlvblt0aGlzLmR5bmFtaWNWYWx1ZV0gPT09IGN1cnJlbnRPcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0aW5nQ29tYm9PcHRpb25zKGNvbWJvT3B0aW9uczogQXJyYXk8YW55Pikge1xyXG4gICAgY29uc3QgY29tYm9PcHRpb25zTGlzdCA9IGNvbWJvT3B0aW9ucy5jb25jYXQoKTtcclxuICAgIGNvbnN0IHZlcmlmaWVkQ29tYm9PcHRpb25zTGlzdCA9IHRoaXMudmVyaWZ5Q29tYm9PcHRpb25zKGNvbWJvT3B0aW9uc0xpc3QpO1xyXG5cclxuICAgIHRoaXMuc29ydE9wdGlvbnModmVyaWZpZWRDb21ib09wdGlvbnNMaXN0KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc09wdGlvbkdyb3VwTGlzdCAmJiB2ZXJpZmllZENvbWJvT3B0aW9uc0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52ZXJpZnlDb21ib09wdGlvbnNHcm91cCh2ZXJpZmllZENvbWJvT3B0aW9uc0xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2ZXJpZmllZENvbWJvT3B0aW9uc0xpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNvcnRPcHRpb25zKGNvbWJvT3B0aW9uc0xpc3Q6IEFycmF5PGFueT4pIHtcclxuICAgIGlmIChjb21ib09wdGlvbnNMaXN0Lmxlbmd0aCA+IDAgJiYgdGhpcy5zb3J0KSB7XHJcbiAgICAgIHJldHVybiBjb21ib09wdGlvbnNMaXN0LnNvcnQodGhpcy5jb21wYXJlT3B0aW9ucyh0aGlzLmR5bmFtaWNMYWJlbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVZhbHVlKGN1cnJlbnRPcHRpb246IGFueSwgdmVyaWZ5aW5nT3B0aW9uc0dyb3VwOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gY3VycmVudE9wdGlvbjtcclxuXHJcbiAgICBpZiAodGhpcy5pc09wdGlvbkdyb3VwTGlzdCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICh2YWxpZFZhbHVlKGN1cnJlbnRPcHRpb25bdGhpcy5keW5hbWljTGFiZWxdKSAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAodmVyaWZ5aW5nT3B0aW9uc0dyb3VwID09PSB0cnVlICYmIHZhbGlkVmFsdWUoY3VycmVudE9wdGlvblt0aGlzLmR5bmFtaWNWYWx1ZV0pKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWxpZFZhbHVlKGN1cnJlbnRPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdKSAmJiAhb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Q29tYm9PcHRpb25zKFxyXG4gICAgY29tYm9PcHRpb25zOiBBcnJheTxhbnk+LFxyXG4gICAgdmVyaWZ5aW5nT3B0aW9uc0dyb3VwOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBhY2N1bXVsYXRlZEdyb3VwT3B0aW9ucz86IEFycmF5PGFueT5cclxuICApIHtcclxuICAgIHJldHVybiBjb21ib09wdGlvbnMucmVkdWNlKChhY2N1bXVsYXRlZE9wdGlvbnMsIGN1cnJlbnRPcHRpb24pID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICF0aGlzLnZlcmlmeUlmSGFzTGFiZWwoY3VycmVudE9wdGlvbikgfHxcclxuICAgICAgICB0aGlzLmhhc0R1cGxpY2F0ZWRPcHRpb24oXHJcbiAgICAgICAgICBhY2N1bXVsYXRlZE9wdGlvbnMsXHJcbiAgICAgICAgICBjdXJyZW50T3B0aW9uW3RoaXMuZHluYW1pY1ZhbHVlXSB8fCBjdXJyZW50T3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXSxcclxuICAgICAgICAgIGFjY3VtdWxhdGVkR3JvdXBPcHRpb25zXHJcbiAgICAgICAgKSB8fFxyXG4gICAgICAgICF0aGlzLnZhbGlkYXRlVmFsdWUoY3VycmVudE9wdGlvbiwgdmVyaWZ5aW5nT3B0aW9uc0dyb3VwKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gYWNjdW11bGF0ZWRPcHRpb25zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhY2N1bXVsYXRlZE9wdGlvbnMucHVzaChjdXJyZW50T3B0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkT3B0aW9ucztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Q29tYm9PcHRpb25zR3JvdXAoY29tYm9PcHRpb25zTGlzdDogQXJyYXk8YW55Pikge1xyXG4gICAgcmV0dXJuIGNvbWJvT3B0aW9uc0xpc3QucmVkdWNlKChhY2N1bXVsYXRlZEdyb3VwT3B0aW9ucywgY3VycmVudE9wdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IGN1cnJlbnRPcHRpb247XHJcbiAgICAgIGNvbnN0IHZlcmlmaWVkQ29tYm9PcHRpb25zR3JvdXBMaXN0ID0gdGhpcy52ZXJpZnlDb21ib09wdGlvbnMob3B0aW9ucywgdHJ1ZSwgYWNjdW11bGF0ZWRHcm91cE9wdGlvbnMpO1xyXG5cclxuICAgICAgaWYgKHZlcmlmaWVkQ29tYm9PcHRpb25zR3JvdXBMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNvcnRPcHRpb25zKHZlcmlmaWVkQ29tYm9PcHRpb25zR3JvdXBMaXN0KTtcclxuXHJcbiAgICAgICAgYWNjdW11bGF0ZWRHcm91cE9wdGlvbnMucHVzaChcclxuICAgICAgICAgIHsgbGFiZWw6IGN1cnJlbnRPcHRpb25bdGhpcy5keW5hbWljTGFiZWxdLCBvcHRpb25zOiB0cnVlIH0sXHJcbiAgICAgICAgICAuLi52ZXJpZmllZENvbWJvT3B0aW9uc0dyb3VwTGlzdFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZEdyb3VwT3B0aW9ucztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5SWZIYXNMYWJlbChjdXJyZW50T3B0aW9uOiBQb0NvbWJvR3JvdXAgPSB7fSkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBjdXJyZW50T3B0aW9uO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKHRoaXMuaXNPcHRpb25Hcm91cExpc3QgJiYgb3B0aW9ucyAmJiAhY3VycmVudE9wdGlvblt0aGlzLmR5bmFtaWNMYWJlbF0pIHx8XHJcbiAgICAgICghY3VycmVudE9wdGlvblt0aGlzLmR5bmFtaWNMYWJlbF0gJiYgIWN1cnJlbnRPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdKSB8fFxyXG4gICAgICAoIXRoaXMuaXNPcHRpb25Hcm91cExpc3QgJiYgb3B0aW9ucylcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50T3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXSkge1xyXG4gICAgICBjdXJyZW50T3B0aW9uW3RoaXMuZHluYW1pY0xhYmVsXSA9IGN1cnJlbnRPcHRpb25bdGhpcy5keW5hbWljVmFsdWVdLnRvU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVJbnRlcm5hbFZhcmlhYmxlcyhvcHRpb246IGFueSkge1xyXG4gICAgaWYgKG9wdGlvbikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IG9wdGlvbjtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVNb2RlbCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBpZiAoIXRoaXMuZnJvbVdyaXRlVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNhbGxNb2RlbENoYW5nZSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5lbWl0T2JqZWN0VmFsdWUgPyB0aGlzLnNlbGVjdGVkT3B0aW9uIDogdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5mcm9tV3JpdGVWYWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RlZFZhbHVlV2l0aE9sZE9wdGlvbigpIHtcclxuICAgIGNvbnN0IG9sZE9wdGlvbiA9IHRoaXMuZ2V0T3B0aW9uRnJvbVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSwgdGhpcy5jb21ib09wdGlvbnNMaXN0KTtcclxuXHJcbiAgICBpZiAob2xkT3B0aW9uICYmIG9sZE9wdGlvblt0aGlzLmR5bmFtaWNMYWJlbF0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZShvbGRPcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3Qgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZDtcclxuXHJcbiAgYWJzdHJhY3QgYXBwbHlGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIGFic3RyYWN0IGdldE9iamVjdEJ5VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIGFic3RyYWN0IGdldElucHV0VmFsdWUoKTogc3RyaW5nO1xyXG5cclxuICBhYnN0cmFjdCBpbml0SW5wdXRPYnNlcnZhYmxlKCk6IHZvaWQ7XHJcbn1cclxuIl19