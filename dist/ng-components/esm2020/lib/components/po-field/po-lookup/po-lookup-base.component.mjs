import { __decorate } from "tslib";
import { Directive, EventEmitter, Inject, InjectFlags, Injector, Input, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { InputBoolean } from '../../../decorators';
import { convertToBoolean, isTypeof } from '../../../utils/util';
import { requiredFailed } from '../validators';
import * as i0 from "@angular/core";
import * as i1 from "./services/po-lookup-filter.service";
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
export class PoLookupBaseComponent {
    constructor(defaultService, injector) {
        this.defaultService = defaultService;
        this.injector = injector;
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
         * Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.
         *
         * @default `false`
         */
        this.infiniteScroll = false;
        /** Exibe um ícone que permite limpar o campo. */
        this.clean = false;
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
        this.multiple = false;
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
        this.autoHeight = false;
        /**
         * Evento será disparado quando ocorrer algum erro na requisição de busca do item.
         * Será passado por parâmetro o objeto de erro retornado.
         */
        this.onError = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento será disparado quando ocorrer alguma seleção.
         * Será passado por parâmetro o objeto com o valor selecionado.
         */
        this.selected = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         *  Evento que será disparado ao alterar o model.
         *  Por parâmetro será passado o novo valor.
         */
        this.change = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
         *
         * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.changeVisibleColumns = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
         *
         * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.columnRestoreManager = new EventEmitter();
        this.selectedOptions = [];
        this.oldValue = '';
        this.oldValueToModel = null;
        // eslint-disable-next-line
        this.onTouched = null;
        this._disabled = false;
        this._placeholder = '';
        this._required = false;
        this._autoHeight = false;
        this.onChangePropagate = null;
    }
    /** Mensagem que aparecerá enquanto o campo não estiver preenchido. */
    set placeholder(value) {
        this._placeholder = value || '';
    }
    get placeholder() {
        return this._placeholder;
    }
    /** Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela. */
    set fieldLabel(value) {
        this._fieldLabel = value;
        this.keysDescription = [this.fieldLabel];
    }
    get fieldLabel() {
        return this._fieldLabel;
    }
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
    set filterService(filterService) {
        this._filterService = filterService;
        this.setService(this.filterService);
    }
    get filterService() {
        return this._filterService;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a propriedade nativa `autocomplete` do campo como `off`.
     *
     * @default `false`
     */
    set noAutocomplete(value) {
        this._noAutocomplete = convertToBoolean(value);
    }
    get noAutocomplete() {
        return this._noAutocomplete;
    }
    /**
     * @optional
     * @description
     *
     * Indica que o campo será obrigatório. Esta propriedade é desconsiderada quando o campo está desabilitado (p-disabled).
     *
     * @default `false`
     */
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel(this.valueToModel);
    }
    get required() {
        return this._required;
    }
    /**
     * @description
     *
     * Indica que o campo será desabilitado.
     *
     * @default false
     * @optional
     */
    set disabled(disabled) {
        this._disabled = disabled === '' ? true : convertToBoolean(disabled);
    }
    get disabled() {
        return this._disabled;
    }
    ngOnDestroy() {
        if (this.getSubscription) {
            this.getSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.initializeColumn();
    }
    ngAfterViewInit() {
        this.setControl();
    }
    cleanModel() {
        this.cleanViewValue();
        this.callOnChange(undefined);
    }
    ngOnChanges(changes) {
        if (changes.multiple && isTypeof(this.filterService, 'string')) {
            this.service.setConfig(this.filterService, this.fieldValue, this.multiple);
        }
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    // Função implementada do ControlValueAccessor.
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model.
    registerOnChange(func) {
        this.onChangePropagate = func;
    }
    // Função implementada do ControlValueAccessor.
    // Usada para interceptar as mudanças e não atualizar automaticamente o Model.
    registerOnTouched(func) {
        this.onTouched = func;
    }
    // Seleciona o valor do model.
    selectValue(valueSelected) {
        this.valueToModel = valueSelected;
        this.multiple
            ? this.callOnChange(this.valueToModel)
            : this.valueToModel
                ? this.callOnChange(this.valueToModel[this.fieldValue])
                : this.callOnChange(undefined);
        this.selected.emit(valueSelected);
    }
    callOnChange(value) {
        // Quando o input não possui um formulário, então esta função não é registrada.
        if (this.onChangePropagate) {
            this.onChangePropagate(value);
        }
        if (this.oldValueToModel !== this.valueToModel) {
            this.change.emit(value);
        }
        // Armazenar o valor antigo do model
        this.oldValueToModel = this.valueToModel;
    }
    searchById(value) {
        let checkedValue = value;
        if (typeof checkedValue === 'string') {
            checkedValue = checkedValue.trim();
        }
        if (checkedValue !== '') {
            const oldDisable = this.disabled;
            this.disabled = true;
            if (this.control) {
                // :TODO: Retirar no futuro pois esse setTimeout foi feito
                // pois quando o campo é acionado pelos métodos setValue ou patchValue
                // a mudança não é detectada
                setTimeout(() => this.control.markAsPending());
            }
            this.getSubscription = this.service
                .getObjectByValue(value, this.filterParams)
                .pipe(finalize(() => {
                this.disabled = oldDisable;
                if (this.control) {
                    this.control.updateValueAndValidity();
                }
            }))
                .subscribe(element => {
                if (element?.length || (!Array.isArray(element) && element)) {
                    if (Array.isArray(element) && element.length > 1) {
                        this.setDisclaimers(element);
                        this.updateVisibleItems();
                    }
                    this.selectModel(this.multiple ? element : [element]);
                }
                else {
                    this.cleanModel();
                }
            }, error => {
                this.cleanModel();
                this.onError.emit(error);
            });
        }
        else {
            this.cleanModel();
        }
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
    writeValue(value) {
        if (value?.length || (!Array.isArray(value) && value)) {
            // Esta condição é executada somente quando é passado o ID para realizar a busca pelo ID.
            this.searchById(value);
        }
        else {
            this.cleanViewValue();
        }
    }
    cleanViewValue() {
        this.setDisclaimers([]);
        this.setViewValue('', {});
        this.oldValue = '';
        this.valueToModel = null;
    }
    // Formata a label do campo.
    getFormattedLabel(value) {
        return value ? this.keysDescription.map(column => value[column]).join(' - ') : '';
    }
    // Chama o método writeValue e preenche o model.
    selectModel(options) {
        if (options.length) {
            this.selectedOptions = [...options];
            const newModel = this.multiple ? options.map(option => option[this.fieldValue]) : options[0];
            this.selectValue(newModel);
            if (options.length === 1) {
                this.oldValue = options[0][this.fieldLabel];
                this.setViewValue(this.getFormattedLabel(options[0]), options[0]);
            }
        }
        else {
            this.selectValue(undefined);
            this.cleanViewValue();
        }
    }
    validateModel(model) {
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    setService(service) {
        if (isTypeof(service, 'object')) {
            this.service = service;
        }
        if (service && isTypeof(service, 'string')) {
            this.service = this.defaultService;
            this.service.setConfig(service, this.fieldValue, this.multiple);
        }
    }
    setControl() {
        const ngControl = this.injector.get(NgControl, null, InjectFlags.Self);
        if (ngControl) {
            this.control = ngControl.control;
        }
    }
    initializeColumn() {
        if (this.fieldLabel) {
            this.keysDescription = [this.fieldLabel];
        }
        else {
            this.keysDescription = [];
            this.keysDescription = this.columns.filter(element => element.fieldLabel).map(element => element.property);
        }
    }
}
PoLookupBaseComponent.ɵfac = function PoLookupBaseComponent_Factory(t) { return new (t || PoLookupBaseComponent)(i0.ɵɵdirectiveInject(i1.PoLookupFilterService), i0.ɵɵdirectiveInject(Injector)); };
PoLookupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoLookupBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], label: ["p-label", "label"], literals: ["p-literals", "literals"], help: ["p-help", "help"], placeholder: ["p-placeholder", "placeholder"], name: "name", fieldValue: ["p-field-value", "fieldValue"], fieldLabel: ["p-field-label", "fieldLabel"], filterParams: ["p-filter-params", "filterParams"], fieldFormat: ["p-field-format", "fieldFormat"], columns: ["p-columns", "columns"], optional: ["p-optional", "optional"], advancedFilters: ["p-advanced-filters", "advancedFilters"], infiniteScroll: ["p-infinite-scroll", "infiniteScroll"], clean: ["p-clean", "clean"], multiple: ["p-multiple", "multiple"], autoHeight: ["p-auto-height", "autoHeight"], filterService: ["p-filter-service", "filterService"], noAutocomplete: ["p-no-autocomplete", "noAutocomplete"], required: ["p-required", "required"], disabled: ["p-disabled", "disabled"] }, outputs: { onError: "p-error", selected: "p-selected", change: "p-change", changeVisibleColumns: "p-change-visible-columns", columnRestoreManager: "p-restore-column-manager" }, features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], PoLookupBaseComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], PoLookupBaseComponent.prototype, "infiniteScroll", void 0);
__decorate([
    InputBoolean()
], PoLookupBaseComponent.prototype, "clean", void 0);
__decorate([
    InputBoolean()
], PoLookupBaseComponent.prototype, "multiple", void 0);
__decorate([
    InputBoolean()
], PoLookupBaseComponent.prototype, "autoHeight", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLookupBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoLookupFilterService }, { type: i0.Injector, decorators: [{
                type: Inject,
                args: [Injector]
            }] }]; }, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], literals: [{
            type: Input,
            args: ['p-literals']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], placeholder: [{
            type: Input,
            args: ['p-placeholder']
        }], name: [{
            type: Input,
            args: ['name']
        }], fieldValue: [{
            type: Input,
            args: ['p-field-value']
        }], fieldLabel: [{
            type: Input,
            args: ['p-field-label']
        }], filterParams: [{
            type: Input,
            args: ['p-filter-params']
        }], fieldFormat: [{
            type: Input,
            args: ['p-field-format']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], advancedFilters: [{
            type: Input,
            args: ['p-advanced-filters']
        }], infiniteScroll: [{
            type: Input,
            args: ['p-infinite-scroll']
        }], clean: [{
            type: Input,
            args: ['p-clean']
        }], multiple: [{
            type: Input,
            args: ['p-multiple']
        }], autoHeight: [{
            type: Input,
            args: ['p-auto-height']
        }], onError: [{
            type: Output,
            args: ['p-error']
        }], selected: [{
            type: Output,
            args: ['p-selected']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], changeVisibleColumns: [{
            type: Output,
            args: ['p-change-visible-columns']
        }], columnRestoreManager: [{
            type: Output,
            args: ['p-restore-column-manager']
        }], filterService: [{
            type: Input,
            args: ['p-filter-service']
        }], noAutocomplete: [{
            type: Input,
            args: ['p-no-autocomplete']
        }], required: [{
            type: Input,
            args: ['p-required']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9va3VwLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLWxvb2t1cC9wby1sb29rdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUE2RCxTQUFTLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0M7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsTUFBTSxPQUFnQixxQkFBcUI7SUFtYXpDLFlBQW9CLGNBQXFDLEVBQTRCLFFBQWtCO1FBQW5GLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBamF2Rzs7Ozs7Ozs7OztXQVVHO1FBQ29DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFpTGxFOzs7Ozs7OztXQVFHO1FBQ3lDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRTVFLGlEQUFpRDtRQUNmLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFekQ7Ozs7Ozs7Ozs7V0FVRztRQUNrQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRS9EOzs7Ozs7Ozs7V0FTRztRQUNxQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRXBFOzs7V0FHRztRQUNnQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEU7Ozs7Ozs7V0FPRztRQUNtQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFNUU7Ozs7Ozs7V0FPRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEU7Ozs7Ozs7O1dBUUc7UUFDaUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFN0Y7Ozs7Ozs7O1dBUUc7UUFDaUMseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFJbkYsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFHckIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUNqQywyQkFBMkI7UUFDakIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUd4QixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBSTVCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHN0Isc0JBQWlCLEdBQVEsSUFBSSxDQUFDO0lBeUhvRSxDQUFDO0lBM1YzRyxzRUFBc0U7SUFDdEUsSUFBNEIsV0FBVyxDQUFDLEtBQWE7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQWNELGlHQUFpRztJQUNqRyxJQUE0QixVQUFVLENBQUMsS0FBYTtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQTBNRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVERztJQUNILElBQStCLGFBQWEsQ0FBQyxhQUFzQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQWdDLGNBQWMsQ0FBQyxLQUFjO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUF5QixRQUFRLENBQUMsUUFBaUI7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBeUIsUUFBUSxDQUFDLFFBQWlCO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQVEsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFJRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsZ0VBQWdFO0lBQ2hFLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxFQUFjO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsOEVBQThFO0lBQzlFLGdCQUFnQixDQUFDLElBQVM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0NBQStDO0lBQy9DLDhFQUE4RTtJQUM5RSxpQkFBaUIsQ0FBQyxJQUFTO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsV0FBVyxDQUFDLGFBQWtCO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRO1lBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsK0VBQStFO1FBQy9FLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUU7WUFDcEMsWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsMERBQTBEO2dCQUMxRCxzRUFBc0U7Z0JBQ3RFLDRCQUE0QjtnQkFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQzthQUNoRDtZQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2hDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO2lCQUMxQyxJQUFJLENBQ0gsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFFM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDLENBQ0g7aUJBQ0EsU0FBUyxDQUNSLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLElBQUksT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRTtvQkFDM0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztxQkFDM0I7b0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjtZQUNILENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtnQkFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FDRixDQUFDO1NBQ0w7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsZUFBZ0M7UUFDdkMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RSxPQUFPO2dCQUNMLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDckQseUZBQXlGO1lBQ3pGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFUyxjQUFjO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELDRCQUE0QjtJQUNsQixpQkFBaUIsQ0FBQyxLQUFVO1FBQ3BDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnREFBZ0Q7SUFDdEMsV0FBVyxDQUFDLE9BQW1CO1FBQ3ZDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUVwQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVTLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVPLFVBQVUsQ0FBQyxPQUFnQztRQUNqRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBMEIsT0FBTyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxTQUFTLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUE2QixDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFFMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUc7SUFDSCxDQUFDOzswRkFubkJtQixxQkFBcUIsdUVBbWEwQixRQUFRO3dFQW5hdkQscUJBQXFCO0FBYUY7SUFBZixZQUFZLEVBQUU7d0RBQTRCO0FBMEx0QjtJQUFmLFlBQVksRUFBRTs2REFBaUM7QUFHMUM7SUFBZixZQUFZLEVBQUU7b0RBQXdCO0FBYXBCO0lBQWYsWUFBWSxFQUFFO3VEQUEyQjtBQVl2QjtJQUFmLFlBQVksRUFBRTt5REFBNkI7dUZBbk9oRCxxQkFBcUI7Y0FEMUMsU0FBUzs7c0JBb2FvRCxNQUFNO3VCQUFDLFFBQVE7d0JBdFpwQyxTQUFTO2tCQUEvQyxLQUFLO21CQUFDLGNBQWM7WUFRSCxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUE4Q0ssUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBR0YsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBR2EsV0FBVztrQkFBdEMsS0FBSzttQkFBQyxlQUFlO1lBU1AsSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBU1csVUFBVTtrQkFBakMsS0FBSzttQkFBQyxlQUFlO1lBR00sVUFBVTtrQkFBckMsS0FBSzttQkFBQyxlQUFlO1lBVUksWUFBWTtrQkFBckMsS0FBSzttQkFBQyxpQkFBaUI7WUFxQ0MsV0FBVztrQkFBbkMsS0FBSzttQkFBQyxnQkFBZ0I7WUFNSCxPQUFPO2tCQUExQixLQUFLO21CQUFDLFdBQVc7WUFlRyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUEwQlUsZUFBZTtrQkFBM0MsS0FBSzttQkFBQyxvQkFBb0I7WUFXaUIsY0FBYztrQkFBekQsS0FBSzttQkFBQyxtQkFBbUI7WUFHUSxLQUFLO2tCQUF0QyxLQUFLO21CQUFDLFNBQVM7WUFhcUIsUUFBUTtrQkFBNUMsS0FBSzttQkFBQyxZQUFZO1lBWXFCLFVBQVU7a0JBQWpELEtBQUs7bUJBQUMsZUFBZTtZQU1ILE9BQU87a0JBQXpCLE1BQU07bUJBQUMsU0FBUztZQVVLLFFBQVE7a0JBQTdCLE1BQU07bUJBQUMsWUFBWTtZQVVBLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVdrQixvQkFBb0I7a0JBQXZELE1BQU07bUJBQUMsMEJBQTBCO1lBV0Usb0JBQW9CO2tCQUF2RCxNQUFNO21CQUFDLDBCQUEwQjtZQW9GSCxhQUFhO2tCQUEzQyxLQUFLO21CQUFDLGtCQUFrQjtZQWtCTyxjQUFjO2tCQUE3QyxLQUFLO21CQUFDLG1CQUFtQjtZQWdCRCxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFlBQVk7WUFrQk0sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdEZsYWdzLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFVudHlwZWRGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCBpc1R5cGVvZiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBQb0xvb2t1cEFkdmFuY2VkRmlsdGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWxvb2t1cC1hZHZhbmNlZC1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Mb29rdXBDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbG9va3VwLWNvbHVtbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0xvb2t1cEZpbHRlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1sb29rdXAtZmlsdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTG9va3VwTGl0ZXJhbHMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tbG9va3VwLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTG9va3VwRmlsdGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcG8tbG9va3VwLWZpbHRlci5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ29tcG9uZW50ZSB1dGlsaXphZG8gcGFyYSBhYnJpciB1bWEgamFuZWxhIGRlIGJ1c2NhIGNvbSB1bWEgdGFiZWxhIHF1ZSBsaXN0YSBkYWRvcyBkZSB1bSBzZXJ2acOnby4gTmVzdGEgamFuZWxhIMOpIHBvc3PDrXZlbCBidXNjYXIgZVxyXG4gKiBzZWxlY2lvbmFyIHVtIG91IG1haXMgcmVnaXN0cm9zIHF1ZSBzZXLDo28gZW52aWFkb3MgcGFyYSBvIGNhbXBvLiBPIGBwby1sb29rdXBgIHBlcm1pdGUgcXVlIG8gdXN1w6FyaW8gZGlnaXRlIHVtIHZhbG9yIGUgcHJlc3Npb25lIGEgdGVjbGEgKlRBQiogcGFyYVxyXG4gKiBidXNjYXIgdW0gcmVnaXN0cm8uXHJcbiAqXHJcbiAqID4gQ2FzbyBvIGNhbXBvIHNlamEgaW5pY2lhZG8gb3UgcHJlZW5jaGlkbyBjb20gdW0gdmFsb3IgaW5leGlzdGVudGUgbmEgYnVzY2EsIG8gbWVzbW8gc2Vyw6EgbGltcGFkby5cclxuICogTm8gc2VndW5kbyBjYXNvIG9jb3JyZXLDoSBhcMOzcyBlc3RlIHBlcmRlciBvIGZvY287IGFtYm9zIG9zIGNhc29zIG8gY2FtcG8gZmljYXLDoSBpbnbDoWxpZG8gcXVhbmRvIHJlcXVlcmlkby5cclxuICpcclxuICogPiBFbnF1YW50byBvIGNvbXBvbmVudGUgcmVhbGl6YSBhIHJlcXVpc2nDp8OjbyBhbyBzZXJ2aWRvciwgbyBjb21wb25lbnRlIGZpY2Fyw6EgZGVzYWJpbGl0YWRvIGUgY29tIG8gc3RhdHVzIGludGVybm8gZG9cclxuICogW21vZGVsb10oaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Zvcm0tdmFsaWRhdGlvbiNjcmVhdGluZy1hc3luY2hyb25vdXMtdmFsaWRhdG9ycykgY29tbyBgcGVuZGluZ2AuXHJcbiAqXHJcbiAqIEVzdGUgY29tcG9uZW50ZSBuw6NvIMOpIHJlY29tZW5kYWRvIHF1YW5kbyBhIGJ1c2NhIGRvcyBkYWRvcyBwb3NzdWlyIHBvdWNhcyBpbmZvcm1hw6fDtWVzLCBwYXJhIGlzc28gdXRpbGl6ZSBvdXRyb3MgY29tcG9uZW50ZXMgY29tbyBvXHJcbiAqIGBwby1zZWxlY3RgIG91IG8gYHBvLWNvbWJvYC5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9Mb29rdXBCYXNlQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkluaXQsIFZhbGlkYXRvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIExhYmVsIGRvIGNhbXBvLlxyXG4gICAqXHJcbiAgICogPiBRdWFuZG8gdXRpbGl6YXIgZXN0YSBwcm9wcmllZGFkZSBvIHNldSB2YWxvciBzZXLDoSB1dGlsaXphZG8gY29tbyB0w610dWxvIGRhIG1vZGFsIGRvIGNvbXBvbmVudGUgY2FzbyBuw6NvIHRlbmhhXHJcbiAgICogc2lkbyBkZWZpbmlkbyB1bSBgbW9kYWxUaXRsZWAgbmEgcHJvcHJpZWRhZGUgYHAtbGl0ZXJhbHNgLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIE9iamV0byBjb20gYXMgbGl0ZXJhaXMgdXNhZGFzIG5vIGBwby1sb29rdXBgLlxyXG4gICAqXHJcbiAgICogRXhpc3RlbSBkdWFzIG1hbmVpcmFzIGRlIGN1c3RvbWl6YXIgbyBjb21wb25lbnRlLCBwYXNzYW5kbyB1bSBvYmpldG8gY29tIHRvZGFzIGFzIGxpdGVyYWlzIGRpc3BvbsOtdmVpczpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICBjb25zdCBjdXN0b21MaXRlcmFsczogUG9Mb29rdXBMaXRlcmFscyA9IHtcclxuICAgKiAgICBtb2RhbFByaW1hcnlBY3Rpb25MYWJlbDogJ1NlbGVjdCcsXHJcbiAgICogICAgbW9kYWxTZWNvbmRhcnlBY3Rpb25MYWJlbDogJ0NhbmNlbCcsXHJcbiAgICogICAgbW9kYWxQbGFjZWhvbGRlcjogJ1NlYXJjaCBWYWx1ZScsXHJcbiAgICogICAgbW9kYWxUYWJsZU5vQ29sdW1uczogJ05vIGNvbHVtbnMnLFxyXG4gICAqICAgIG1vZGFsVGFibGVOb0RhdGE6ICdObyBkYXRhJyxcclxuICAgKiAgICBtb2RhbFRhYmxlTG9hZGluZ0RhdGE6ICdMb2FkaW5nIGRhdGEnLFxyXG4gICAqICAgIG1vZGFsVGFibGVMb2FkTW9yZURhdGE6ICdMb2FkIG1vcmUnLFxyXG4gICAqICAgIG1vZGFsVGl0bGU6ICdTZWxlY3QgYSB1c2VyJyxcclxuICAgKiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoOiAnQWR2YW5jZWQgc2VhcmNoJyxcclxuICAgKiAgICBtb2RhbEFkdmFuY2VkU2VhcmNoVGl0bGU6ICdBZHZhbmNlZCBzZWFyY2gnLFxyXG4gICAqICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hQcmltYXJ5QWN0aW9uTGFiZWw6ICdGaWx0ZXInLFxyXG4gICAqICAgIG1vZGFsQWR2YW5jZWRTZWFyY2hTZWNvbmRhcnlBY3Rpb25MYWJlbDogJ1JldHVybicsXHJcbiAgICogICAgbW9kYWxEaXNjbGFpbWVyR3JvdXBUaXRsZTogJ1ByZXNlbnRpbmcgcmVzdWx0cyBmaWx0ZXJlZCBieTonXHJcbiAgICogIH07XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBPdSBwYXNzYW5kbyBhcGVuYXMgYXMgbGl0ZXJhaXMgcXVlIGRlc2VqYSBjdXN0b21pemFyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNvbnN0IGN1c3RvbUxpdGVyYWxzOiBQb0xvb2t1cExpdGVyYWxzID0ge1xyXG4gICAqICAgIG1vZGFsUHJpbWFyeUFjdGlvbkxhYmVsOiAnU2VsZWN0J1xyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogRSBwYXJhIGNhcnJlZ2FyIGFzIGxpdGVyYWlzIGN1c3RvbWl6YWRhcywgYmFzdGEgYXBlbmFzIHBhc3NhciBvIG9iamV0byBwYXJhIG8gY29tcG9uZW50ZS5cclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIDxwby1sb29rdXBcclxuICAgKiAgIFtwLWxpdGVyYWxzXT1cImN1c3RvbUxpdGVyYWxzXCI+XHJcbiAgICogPC9wby1sb29rdXA+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IE8gb2JqZXRvIHBhZHLDo28gZGUgbGl0ZXJhaXMgc2Vyw6EgdHJhZHV6aWRvIGRlIGFjb3JkbyBjb20gbyBpZGlvbWEgZG9cclxuICAgKiBbYFBvSTE4blNlcnZpY2VgXSgvZG9jdW1lbnRhdGlvbi9wby1pMThuKSBvdSBkbyBicm93c2VyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1saXRlcmFscycpIGxpdGVyYWxzPzogUG9Mb29rdXBMaXRlcmFscztcclxuXHJcbiAgLyoqIFRleHRvIGRlIGFwb2lvIGRvIGNhbXBvLiAqL1xyXG4gIEBJbnB1dCgncC1oZWxwJykgaGVscD86IHN0cmluZztcclxuXHJcbiAgLyoqIE1lbnNhZ2VtIHF1ZSBhcGFyZWNlcsOhIGVucXVhbnRvIG8gY2FtcG8gbsOjbyBlc3RpdmVyIHByZWVuY2hpZG8uICovXHJcbiAgQElucHV0KCdwLXBsYWNlaG9sZGVyJykgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWUgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XHJcbiAgfVxyXG5cclxuICAvKiogTm9tZSBlIElkIGRvIGNvbXBvbmVudGUuICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBhIGNvbHVuYSBxdWUgc2Vyw6EgdXRpbGl6YWRhIGNvbW8gdmFsb3IgZG8gY2FtcG8uXHJcbiAgICpcclxuICAgKiA+IEF0ZW7Dp8OjbzogQ2FzbyBuw6NvIHNlamEgcGFzc2FkYSBvdSB0ZW5oYSBvIGNvbnRlw7pkbyBpbmNvcnJldG8sIG7Do28gaXLDoSBhdHVhbGl6YXIgbyBtb2RlbCBkbyBmb3JtdWzDoXJpby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmllbGQtdmFsdWUnKSBmaWVsZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJbmRpY2EgYSBjb2x1bmEgcXVlIHNlcsOhIHV0aWxpemFkYSBjb21vIGRlc2NyacOnw6NvIGRvIGNhbXBvIGUgY29tbyBmaWx0cm8gZGVudHJvIGRhIGphbmVsYS4gKi9cclxuICBASW5wdXQoJ3AtZmllbGQtbGFiZWwnKSBzZXQgZmllbGRMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9maWVsZExhYmVsID0gdmFsdWU7XHJcbiAgICB0aGlzLmtleXNEZXNjcmlwdGlvbiA9IFt0aGlzLmZpZWxkTGFiZWxdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkTGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRMYWJlbDtcclxuICB9XHJcblxyXG4gIC8qKiBWYWxvciBxdWUgc2Vyw6EgcmVwYXNzYWRvIGNvbW8gcGFyw6JtZXRybyBwYXJhIGEgVVJMIG91IGFvcyBtw6l0b2RvcyBkbyBzZXJ2acOnbyBxdWUgaW1wbGVtZW50YW0gYSBpbnRlcmZhY2UgYFBvTG9va3VwRmlsdGVyYC4gKi9cclxuICBASW5wdXQoJ3AtZmlsdGVyLXBhcmFtcycpIGZpbHRlclBhcmFtcz86IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEZvcm1hdG8gZGUgZXhpYmnDp8OjbyBkbyBjYW1wby5cclxuICAgKlxyXG4gICAqIFJlY2ViZSB1bWEgZnVuw6fDo28gcXVlIGRldmUgcmV0b3JuYXIgdW1hICpzdHJpbmcqIGNvbSBvL29zIHZhbG9yZXMgZG8gb2JqZXRvIGZvcm1hdGFkb3MgcGFyYSBleGliacOnw6NvLCBwb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGZpZWxkRm9ybWF0KG9iaikge1xyXG4gICAqICAgcmV0dXJuIGAke29iai5pZH0gLSAke29iai5uYW1lfWA7XHJcbiAgICogfVxyXG4gICAqIGBgYFxyXG4gICAqID4gRXN0YSBwcm9wcmllZGFkZSBzb2JyZXDDtWUgbyB2YWxvciBkYSBwcm9wcmllZGFkZSBgcC1maWVsZC1sYWJlbGAgbmEgZGVzY3Jpw6fDo28gZG8gY2FtcG8uXHJcbiAgICpcclxuICAgKiBQb2RlLXNlIGluZm9ybWFyIHVtYSBsaXN0YSBkZSBwcm9wcmllZGFkZXMgcXVlIGRlc2VqYSBleGliaXIgY29tbyBkZXNjcmnDp8OjbyBkbyBjYW1wbywgUG9yIGV4ZW1wbG86XHJcbiAgICogYGBgXHJcbiAgICogPHBvLWxvb2t1cFxyXG4gICAqICAuLi5cclxuICAgKiAgW3AtZmllbGQtZm9ybWF0XT1cIlsnaWQnLCduaWNrbmFtZSddXCJcclxuICAgKiAgLi4uXHJcbiAgICogPlxyXG4gICAqXHJcbiAgICogT2JqZXRvIHJldG9ybmFkbzpcclxuICAgKiAgIHtcclxuICAgKiAgICAgIGlkOjEyMyxcclxuICAgKiAgICAgIG5hbWU6ICdLYWthcm90bycsXHJcbiAgICogICAgICBuaWNrbmFtZTogJ0dva3UnLFxyXG4gICAqICAgfVxyXG4gICAqIEFwcmVzZW50YcOnw6NvIG5vIGNhbXBvOiAxMjMgLSBHb2t1XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IFNlcsOhIHV0aWxpemFkbyBgIC0gYCBjb21vIHNlcGFyYWRvci5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmllbGQtZm9ybWF0JykgZmllbGRGb3JtYXQ/OiAoKHZhbHVlKSA9PiBzdHJpbmcpIHwgQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGEgZGFzIGNvbHVuYXMgZGEgdGFiZWxhLlxyXG4gICAqIEVzc2EgcHJvcHJpZWRhZGUgZGV2ZSByZWNlYmVyIHVtIGFycmF5IGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIFBvTG9va3VwQ29sdW1uLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1jb2x1bW5zJykgY29sdW1ucz86IEFycmF5PFBvTG9va3VwQ29sdW1uPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBzZSBhIGluZGljYcOnw6NvIGRlIGNhbXBvIG9wY2lvbmFsIHNlcsOhIGV4aWJpZGEuXHJcbiAgICpcclxuICAgKiA+IE7Do28gc2Vyw6EgZXhpYmlkYSBhIGluZGljYcOnw6NvIHNlOlxyXG4gICAqIC0gTyBjYW1wbyBjb250ZXIgYHAtcmVxdWlyZWRgO1xyXG4gICAqIC0gTsOjbyBwb3NzdWlyIGBwLWhlbHBgIGUvb3UgYHAtbGFiZWxgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25hbCcpIG9wdGlvbmFsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkZSBvYmpldG9zIGRvcyBjYW1wb3MgcXVlIHNlcsOjbyBjcmlhZG9zIG5hIGJ1c2NhIGF2YW7Dp2FkYS5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHNlamEgcGFzc2FkbyB1bSBvYmpldG8gb3UgZW50w6NvIGVsZSBlc3RlamEgZW0gYnJhbmNvIG8gbGluayBkZSBidXNjYSBhdmFuw6dhZGEgZmljYXLDoSBlc2NvbmRpZG8uXHJcbiAgICpcclxuICAgKiBFeGVtcGxvIGRlIFVSTCBjb20gYnVzY2EgYXZhbsOnYWRhOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogdXJsICsgP3BhZ2U9MSZwYWdlU2l6ZT0yMCZuYW1lPVRvbnklMjBTdGFyayZuaWNrbmFtZT1Ib21lbSUyMGRlJTIwRmVycm9cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIENhc28gYWxndW0gcGFyw6JtZXRybyBzZWphIHVtYSBsaXN0YSwgYSBjb25jYXRlbmHDp8OjbyDDqSBmZWl0YSB1dGlsaXphbmRvIHbDrXJndWxhLlxyXG4gICAqIEV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB1cmwgKyA/cGFnZT0xJnBhZ2VTaXplPTIwJm5hbWU9VG9ueSUyMFN0YXJrLFBldGVyJTIwUGFya2VyLEdvaGFuXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYWR2YW5jZWQtZmlsdGVycycpIGFkdmFuY2VkRmlsdGVyczogQXJyYXk8UG9Mb29rdXBBZHZhbmNlZEZpbHRlcj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBBdGl2YSBhIGZ1bmNpb25hbGlkYWRlIGRlIHNjcm9sbCBpbmZpbml0byBwYXJhIGEgdGFiZWxhIGV4aWJpZGEgbm8gcmV0b3JubyBkYSBjb25zdWx0YS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW5maW5pdGUtc2Nyb2xsJykgQElucHV0Qm9vbGVhbigpIGluZmluaXRlU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFeGliZSB1bSDDrWNvbmUgcXVlIHBlcm1pdGUgbGltcGFyIG8gY2FtcG8uICovXHJcbiAgQElucHV0KCdwLWNsZWFuJykgQElucHV0Qm9vbGVhbigpIGNsZWFuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBQZXJtaXRlIGEgc2VsZcOnw6NvIGRlIG3Dumx0aXBsb3MgaXRlbnMuXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyBoYWJpbGl0YWRvIG8gdmFsb3IgZG8gY2FtcG8gcGFzc2Fyw6EgYSBzZXIgdW1hIGxpc3RhIGRlIHZhbG9yZXMsIHBvciBleGVtcGxvOiBgWyAxMjM0NSwgNjc4OTAgXWBcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtbXVsdGlwbGUnKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBxdWUgYSBhbHR1cmEgZG8gY29tcG9uZW50ZSBzZXLDoSBhdXRvIGFqdXN0w6F2ZWwsIHBvc3N1aW5kbyB1bWEgYWx0dXJhIG1pbmltYSBwb3LDqW0gYSBhbHR1cmEgbcOheGltYSBzZXLDoSBkZSBhY29yZG9cclxuICAgKiBjb20gbyBuw7ptZXJvIGRlIGl0ZW5zIHNlbGVjaW9uYWRvcyBlIGEgZXh0ZW5zw6NvIGRvcyBtZXNtb3MsIG1hbnRlbmRvLW9zIHNlbXByZSB2aXPDrXZlaXMuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8taGVpZ2h0JykgQElucHV0Qm9vbGVhbigpIGF1dG9IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnRvIHNlcsOhIGRpc3BhcmFkbyBxdWFuZG8gb2NvcnJlciBhbGd1bSBlcnJvIG5hIHJlcXVpc2nDp8OjbyBkZSBidXNjYSBkbyBpdGVtLlxyXG4gICAqIFNlcsOhIHBhc3NhZG8gcG9yIHBhcsOibWV0cm8gbyBvYmpldG8gZGUgZXJybyByZXRvcm5hZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1lcnJvcicpIG9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gc2Vyw6EgZGlzcGFyYWRvIHF1YW5kbyBvY29ycmVyIGFsZ3VtYSBzZWxlw6fDo28uXHJcbiAgICogU2Vyw6EgcGFzc2FkbyBwb3IgcGFyw6JtZXRybyBvIG9iamV0byBjb20gbyB2YWxvciBzZWxlY2lvbmFkby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNlbGVjdGVkJykgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiAgRXZlbnRvIHF1ZSBzZXLDoSBkaXNwYXJhZG8gYW8gYWx0ZXJhciBvIG1vZGVsLlxyXG4gICAqICBQb3IgcGFyw6JtZXRybyBzZXLDoSBwYXNzYWRvIG8gbm92byB2YWxvci5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGZlY2hhciBvIHBvcG92ZXIgZG8gZ2VyZW5jaWFkb3IgZGUgY29sdW5hcyBhcMOzcyBhbHRlcmFyIGFzIGNvbHVuYXMgdmlzw612ZWlzLlxyXG4gICAqXHJcbiAgICogTyBjb21wb25lbnRlIGVudmlhIGNvbW8gcGFyw6JtZXRybyB1bSBhcnJheSBkZSBzdHJpbmcgY29tIGFzIGNvbHVuYXMgdmlzw612ZWlzIGF0dWFsaXphZGFzLlxyXG4gICAqIFBvciBleGVtcGxvOiBbXCJpZENhcmRcIiwgXCJuYW1lXCIsIFwiaGlyZVN0YXR1c1wiLCBcImFnZVwiXS5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZS12aXNpYmxlLWNvbHVtbnMnKSBjaGFuZ2VWaXNpYmxlQ29sdW1ucyA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nPj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGNsaWNhciBubyBib3TDo28gZGUgcmVzdGF1cmFyIHBhZHLDo28gbm8gZ2VyZW5jaWFkb3IgZGUgY29sdW5hcy5cclxuICAgKlxyXG4gICAqIE8gY29tcG9uZW50ZSBlbnZpYSBjb21vIHBhcsOibWV0cm8gdW0gYXJyYXkgZGUgc3RyaW5nIGNvbSBhcyBjb2x1bmFzIGNvbmZpZ3VyYWRhcyBpbmljaWFsbWVudGUuXHJcbiAgICogUG9yIGV4ZW1wbG86IFtcImlkQ2FyZFwiLCBcIm5hbWVcIiwgXCJoaXJlU3RhdHVzXCIsIFwiYWdlXCJdLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtcmVzdG9yZS1jb2x1bW4tbWFuYWdlcicpIGNvbHVtblJlc3RvcmVNYW5hZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxTdHJpbmc+PigpO1xyXG5cclxuICBzZXJ2aWNlOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCBzZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICBwcm90ZWN0ZWQgZ2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJvdGVjdGVkIGtleXNEZXNjcmlwdGlvbjogQXJyYXk8YW55PjtcclxuICBwcm90ZWN0ZWQgb2xkVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHByb3RlY3RlZCB2YWx1ZVRvTW9kZWw7XHJcbiAgcHJvdGVjdGVkIG9sZFZhbHVlVG9Nb2RlbCA9IG51bGw7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZDogYW55ID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgcmVzaXplTGlzdGVuZXI6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2ZpZWxkTGFiZWw6IHN0cmluZztcclxuICBwcml2YXRlIF9maWx0ZXJTZXJ2aWNlOiBQb0xvb2t1cEZpbHRlciB8IHN0cmluZztcclxuICBwcml2YXRlIF9ub0F1dG9jb21wbGV0ZTogYm9vbGVhbjtcclxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYXV0b0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGF1dG9IZWlnaHRJbml0aWFsVmFsdWU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZVByb3BhZ2F0ZTogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIHZhbGlkYXRvckNoYW5nZTogYW55O1xyXG5cclxuICBwcml2YXRlIGNvbnRyb2whOiBBYnN0cmFjdENvbnRyb2w7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlcnZpw6dvIHJlc3BvbnPDoXZlbCBwb3IgYnVzY2FyIG9zIGRhZG9zIGRhIHRhYmVsYSBuYSBqYW5lbGEuIFBvZGUgc2VyIGluZm9ybWFkbyB1bSBzZXJ2acOnbyBxdWUgaW1wbGVtZW50ZSBhIGludGVyZmFjZVxyXG4gICAqIGBQb0xvb2t1cEZpbHRlcmAgb3UgdW1hIFVSTC5cclxuICAgKlxyXG4gICAqIFF1YW5kbyB1dGlsaXphZGEgdW1hIFVSTCBkZSB1bSBzZXJ2acOnbywgc2Vyw6EgY29uY2F0ZW5hZGEgbmVzdGEgVVJMIG8gdmFsb3IgcXVlIGRlc2VqYS1zZSBmaWx0cmFyLCBwb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIHVybCArID9wYWdlPTEmcGFnZVNpemU9MjAmZmlsdGVyPVBldGVyXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBDYXNvIHV0aWxpemFyIG9yZGVuYcOnw6NvLCBhIGNvbHVuYSBvcmRlbmFkYSBzZXLDoSBlbnZpYWRhIGF0cmF2w6lzIGRvIHBhcsOibWV0cm8gYG9yZGVyYCwgcG9yIGV4ZW1wbG86XHJcbiAgICogLSBDb2x1bmEgZGVjcmVzY2VudGU6XHJcbiAgICogYGBgXHJcbiAgICogIHVybCArID9wYWdlPTEmcGFnZVNpemU9MjAmZmlsdGVyPVBldGVyJm9yZGVyPS1uYW1lXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAtIENvbHVuYSBhc2NlbmRlbnRlOlxyXG4gICAqIGBgYFxyXG4gICAqICB1cmwgKyA/cGFnZT0xJnBhZ2VTaXplPTIwJmZpbHRlcj1QZXRlciZvcmRlcj1uYW1lXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBTZSBmb3IgZGVmaW5pZG8gYSBwcm9wcmllZGFkZSBgcC1maWx0ZXItcGFyYW1zYCwgbyBtZXNtbyB0YW1iw6ltIHNlcsOhIGNvbmNhdGVuYWRvLiBQb3IgZXhlbXBsbywgcGFyYSBvXHJcbiAgICogcGFyw6JtZXRybyBgeyBhZ2U6IDIzIH1gIGEgVVJMIGZpY2FyaWE6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB1cmwgKyA/cGFnZT0xJnBhZ2VTaXplPTIwJmFnZT0yMyZmaWx0ZXI9UGV0ZXJcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEFvIGluaWNpYXIgbyBjYW1wbyBjb20gdmFsb3IsIG9zIHJlZ2lzdHJvcyBzZXLDo28gYnVzY2Fkb3MgZGEgc2VndWludGUgZm9ybWE6XHJcbiAgICogYGBgXHJcbiAgICogbW9kZWwgPSAxMjM0O1xyXG4gICAqXHJcbiAgICogR0VUIHVybC8xMjM0XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBDYXNvIGVzdGl2ZXIgY29tIG3Dumx0aXBsYSBzZWxlw6fDo28gaGFiaWxpdGFkYTpcclxuICAgKiBgYGBcclxuICAgKiBtb2RlbCA9IFsxMjM0LCA1Njc4XVxyXG4gICAqXHJcbiAgICogR0VUIHVybD8ke2ZpZWxkVmFsdWV9PTEyMzQsNTY3OFxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBFc3RhIFVSTCBkZXZlIHJldG9ybmFyIGUgcmVjZWJlciBvcyBkYWRvcyBubyBwYWRyw6NvIGRlIFtBUEkgZG8gUE8gVUldKGh0dHBzOi8vcG8tdWkuaW8vZ3VpZGVzL2FwaSkgZSB1dGlsaXphIG9zIHZhbG9yZXNcclxuICAgKiBkZWZpbmlkb3MgbmFzIHByb3ByaWVkYWRlcyBgcC1maWVsZC1sYWJlbGAgZSBgcC1maWVsZC12YWx1ZWAgcGFyYSBhIGNvbnN0cnXDp8OjbyBkbyBgcG8tbG9va3VwYC5cclxuICAgKlxyXG4gICAqIENhc28gbyB1c3XDoXJpbyBkaWdpdGUgdW0gdmFsb3IgZSBwcmVzc2lvbmUgYSB0ZWNsYSAqVEFCKiBwYXJhIHJlYWxpemFyIGEgYnVzY2EgZGUgdW0gcmVnaXN0cm8gZXNwZWPDrWZpY28sIG8gdmFsb3IgcXVlIHNlXHJcbiAgICogZGVzZWphIGZpbHRyYXIgc2Vyw6EgY29kaWZpY2FkbyB1dGlsaXphbmRvIGEgZnVuw6fDo28gW2VuY29kZVVSSUNvbXBvbmVudF0oaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1lbmNvZGV1cmljb21wb25lbnQtdXJpY29tcG9uZW50KVxyXG4gICAqIGUgY29uY2F0ZW5hZG8gbmEgVVJMIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogdXJsL3ZhbG9yJTIwcXVlJTIwc2UlMjBkZXNlamElMjBmaWx0cmFyXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IFF1YW5kbyBpbmZvcm1hZG8gdW0gc2VydmnDp28gcXVlIGltcGxlbWVudGUgYSBpbnRlcmZhY2UgYFBvTG9va3VwRmlsdGVyYCBvIHRyYXRhbWVudG8gZGUgZW5jb2RpbmcgZG8gdmFsb3IgYSBzZXIgZmlsdHJhZG8gZmljYXLDoSBhIGNhcmdvIGRvIGRlc2Vudm9sdmVkb3IuXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmlsdGVyLXNlcnZpY2UnKSBzZXQgZmlsdGVyU2VydmljZShmaWx0ZXJTZXJ2aWNlOiBQb0xvb2t1cEZpbHRlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fZmlsdGVyU2VydmljZSA9IGZpbHRlclNlcnZpY2U7XHJcbiAgICB0aGlzLnNldFNlcnZpY2UodGhpcy5maWx0ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIGdldCBmaWx0ZXJTZXJ2aWNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgcHJvcHJpZWRhZGUgbmF0aXZhIGBhdXRvY29tcGxldGVgIGRvIGNhbXBvIGNvbW8gYG9mZmAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW5vLWF1dG9jb21wbGV0ZScpIHNldCBub0F1dG9jb21wbGV0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbm9BdXRvY29tcGxldGUgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBub0F1dG9jb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ub0F1dG9jb21wbGV0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5kaWNhIHF1ZSBvIGNhbXBvIHNlcsOhIG9icmlnYXTDs3Jpby4gRXN0YSBwcm9wcmllZGFkZSDDqSBkZXNjb25zaWRlcmFkYSBxdWFuZG8gbyBjYW1wbyBlc3TDoSBkZXNhYmlsaXRhZG8gKHAtZGlzYWJsZWQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1yZXF1aXJlZCcpIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb252ZXJ0VG9Cb29sZWFuKHJlcXVpcmVkKTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlTW9kZWwodGhpcy52YWx1ZVRvTW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBJbmRpY2EgcXVlIG8gY2FtcG8gc2Vyw6EgZGVzYWJpbGl0YWRvLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gPGFueT5kaXNhYmxlZCA9PT0gJycgPyB0cnVlIDogY29udmVydFRvQm9vbGVhbihkaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZmF1bHRTZXJ2aWNlOiBQb0xvb2t1cEZpbHRlclNlcnZpY2UsIEBJbmplY3QoSW5qZWN0b3IpIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmdldFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmdldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVDb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q29udHJvbCgpO1xyXG4gIH1cclxuXHJcbiAgY2xlYW5Nb2RlbCgpIHtcclxuICAgIHRoaXMuY2xlYW5WaWV3VmFsdWUoKTtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5tdWx0aXBsZSAmJiBpc1R5cGVvZih0aGlzLmZpbHRlclNlcnZpY2UsICdzdHJpbmcnKSkge1xyXG4gICAgICB0aGlzLnNlcnZpY2Uuc2V0Q29uZmlnKHRoaXMuZmlsdGVyU2VydmljZSwgdGhpcy5maWVsZFZhbHVlLCB0aGlzLm11bHRpcGxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIFVzYWRhIHBhcmEgaW50ZXJjZXB0YXIgb3MgZXN0YWRvcyBkZSBoYWJpbGl0YWRvIHZpYSBmb3JtcyBhcGlcclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIGFzIG11ZGFuw6dhcyBlIG7Do28gYXR1YWxpemFyIGF1dG9tYXRpY2FtZW50ZSBvIE1vZGVsLlxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZnVuYzogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlID0gZnVuYztcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGltcGxlbWVudGFkYSBkbyBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIGFzIG11ZGFuw6dhcyBlIG7Do28gYXR1YWxpemFyIGF1dG9tYXRpY2FtZW50ZSBvIE1vZGVsLlxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jO1xyXG4gIH1cclxuXHJcbiAgLy8gU2VsZWNpb25hIG8gdmFsb3IgZG8gbW9kZWwuXHJcbiAgc2VsZWN0VmFsdWUodmFsdWVTZWxlY3RlZDogYW55KSB7XHJcbiAgICB0aGlzLnZhbHVlVG9Nb2RlbCA9IHZhbHVlU2VsZWN0ZWQ7XHJcbiAgICB0aGlzLm11bHRpcGxlXHJcbiAgICAgID8gdGhpcy5jYWxsT25DaGFuZ2UodGhpcy52YWx1ZVRvTW9kZWwpXHJcbiAgICAgIDogdGhpcy52YWx1ZVRvTW9kZWxcclxuICAgICAgPyB0aGlzLmNhbGxPbkNoYW5nZSh0aGlzLnZhbHVlVG9Nb2RlbFt0aGlzLmZpZWxkVmFsdWVdKVxyXG4gICAgICA6IHRoaXMuY2FsbE9uQ2hhbmdlKHVuZGVmaW5lZCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQodmFsdWVTZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBjYWxsT25DaGFuZ2UodmFsdWU6IGFueSkge1xyXG4gICAgLy8gUXVhbmRvIG8gaW5wdXQgbsOjbyBwb3NzdWkgdW0gZm9ybXVsw6FyaW8sIGVudMOjbyBlc3RhIGZ1bsOnw6NvIG7Do28gw6kgcmVnaXN0cmFkYS5cclxuICAgIGlmICh0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VQcm9wYWdhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9sZFZhbHVlVG9Nb2RlbCAhPT0gdGhpcy52YWx1ZVRvTW9kZWwpIHtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXJtYXplbmFyIG8gdmFsb3IgYW50aWdvIGRvIG1vZGVsXHJcbiAgICB0aGlzLm9sZFZhbHVlVG9Nb2RlbCA9IHRoaXMudmFsdWVUb01vZGVsO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoQnlJZCh2YWx1ZSkge1xyXG4gICAgbGV0IGNoZWNrZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0eXBlb2YgY2hlY2tlZFZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjaGVja2VkVmFsdWUgPSBjaGVja2VkVmFsdWUudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGVja2VkVmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IG9sZERpc2FibGUgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICAvLyA6VE9ETzogUmV0aXJhciBubyBmdXR1cm8gcG9pcyBlc3NlIHNldFRpbWVvdXQgZm9pIGZlaXRvXHJcbiAgICAgICAgLy8gcG9pcyBxdWFuZG8gbyBjYW1wbyDDqSBhY2lvbmFkbyBwZWxvcyBtw6l0b2RvcyBzZXRWYWx1ZSBvdSBwYXRjaFZhbHVlXHJcbiAgICAgICAgLy8gYSBtdWRhbsOnYSBuw6NvIMOpIGRldGVjdGFkYVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb250cm9sLm1hcmtBc1BlbmRpbmcoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlXHJcbiAgICAgICAgLmdldE9iamVjdEJ5VmFsdWUodmFsdWUsIHRoaXMuZmlsdGVyUGFyYW1zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gb2xkRGlzYWJsZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Py5sZW5ndGggfHwgKCFBcnJheS5pc0FycmF5KGVsZW1lbnQpICYmIGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkgJiYgZWxlbWVudC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpc2NsYWltZXJzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXMoKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kZWwodGhpcy5tdWx0aXBsZSA/IGVsZW1lbnQgOiBbZWxlbWVudF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYW5Nb2RlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuTW9kZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmVtaXQoZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFuTW9kZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XHJcbiAgICBpZiAocmVxdWlyZWRGYWlsZWQodGhpcy5yZXF1aXJlZCwgdGhpcy5kaXNhYmxlZCwgYWJzdHJhY3RDb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlcXVpcmVkOiB7XHJcbiAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZT8ubGVuZ3RoIHx8ICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUpKSB7XHJcbiAgICAgIC8vIEVzdGEgY29uZGnDp8OjbyDDqSBleGVjdXRhZGEgc29tZW50ZSBxdWFuZG8gw6kgcGFzc2FkbyBvIElEIHBhcmEgcmVhbGl6YXIgYSBidXNjYSBwZWxvIElELlxyXG4gICAgICB0aGlzLnNlYXJjaEJ5SWQodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhblZpZXdWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNsZWFuVmlld1ZhbHVlKCkge1xyXG4gICAgdGhpcy5zZXREaXNjbGFpbWVycyhbXSk7XHJcbiAgICB0aGlzLnNldFZpZXdWYWx1ZSgnJywge30pO1xyXG4gICAgdGhpcy5vbGRWYWx1ZSA9ICcnO1xyXG4gICAgdGhpcy52YWx1ZVRvTW9kZWwgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9ybWF0YSBhIGxhYmVsIGRvIGNhbXBvLlxyXG4gIHByb3RlY3RlZCBnZXRGb3JtYXR0ZWRMYWJlbCh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMua2V5c0Rlc2NyaXB0aW9uLm1hcChjb2x1bW4gPT4gdmFsdWVbY29sdW1uXSkuam9pbignIC0gJykgOiAnJztcclxuICB9XHJcblxyXG4gIC8vIENoYW1hIG8gbcOpdG9kbyB3cml0ZVZhbHVlIGUgcHJlZW5jaGUgbyBtb2RlbC5cclxuICBwcm90ZWN0ZWQgc2VsZWN0TW9kZWwob3B0aW9uczogQXJyYXk8YW55Pikge1xyXG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLm9wdGlvbnNdO1xyXG5cclxuICAgICAgY29uc3QgbmV3TW9kZWwgPSB0aGlzLm11bHRpcGxlID8gb3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvblt0aGlzLmZpZWxkVmFsdWVdKSA6IG9wdGlvbnNbMF07XHJcbiAgICAgIHRoaXMuc2VsZWN0VmFsdWUobmV3TW9kZWwpO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG9wdGlvbnNbMF1bdGhpcy5maWVsZExhYmVsXTtcclxuICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSh0aGlzLmdldEZvcm1hdHRlZExhYmVsKG9wdGlvbnNbMF0pLCBvcHRpb25zWzBdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RWYWx1ZSh1bmRlZmluZWQpO1xyXG4gICAgICB0aGlzLmNsZWFuVmlld1ZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVNb2RlbChtb2RlbDogYW55KSB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0b3JDaGFuZ2UpIHtcclxuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UobW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTZXJ2aWNlKHNlcnZpY2U6IFBvTG9va3VwRmlsdGVyIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNUeXBlb2Yoc2VydmljZSwgJ29iamVjdCcpKSB7XHJcbiAgICAgIHRoaXMuc2VydmljZSA9IDxQb0xvb2t1cEZpbHRlclNlcnZpY2U+c2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VydmljZSAmJiBpc1R5cGVvZihzZXJ2aWNlLCAnc3RyaW5nJykpIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlID0gdGhpcy5kZWZhdWx0U2VydmljZTtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnNldENvbmZpZyhzZXJ2aWNlLCB0aGlzLmZpZWxkVmFsdWUsIHRoaXMubXVsdGlwbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250cm9sKCkge1xyXG4gICAgY29uc3QgbmdDb250cm9sOiBOZ0NvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wsIG51bGwsIEluamVjdEZsYWdzLlNlbGYpO1xyXG5cclxuICAgIGlmIChuZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5jb250cm9sID0gbmdDb250cm9sLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29sdW1uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZmllbGRMYWJlbCkge1xyXG4gICAgICB0aGlzLmtleXNEZXNjcmlwdGlvbiA9IFt0aGlzLmZpZWxkTGFiZWxdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5rZXlzRGVzY3JpcHRpb24gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMua2V5c0Rlc2NyaXB0aW9uID0gdGhpcy5jb2x1bW5zLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuZmllbGRMYWJlbCkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5wcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBdHJpYnVpIHVtIG91IG1haXMgdmFsb3JlcyBhbyBjYW1wby5cclxuICBhYnN0cmFjdCBzZXRWaWV3VmFsdWUodmFsdWU6IGFueSwgb2JqZWN0OiBhbnkpOiB2b2lkO1xyXG5cclxuICAvLyBNw6l0b2RvIGNvbSBhIGltcGxlbWVudGHDp8OjbyBwYXJhIGFicmlyIG8gbG9va3VwLlxyXG4gIGFic3RyYWN0IG9wZW5Mb29rdXAoKTogdm9pZDtcclxuXHJcbiAgYWJzdHJhY3Qgc2V0RGlzY2xhaW1lcnMoYSk7XHJcbiAgYWJzdHJhY3QgdXBkYXRlVmlzaWJsZUl0ZW1zKCk7XHJcbn1cclxuIl19