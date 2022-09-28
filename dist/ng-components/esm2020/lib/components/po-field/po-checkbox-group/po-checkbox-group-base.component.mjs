import { __decorate } from "tslib";
import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, convertToInt, uuid } from './../../../utils/util';
import { InputBoolean } from '../../../decorators';
import { requiredFailed } from '../validators';
import * as i0 from "@angular/core";
const poCheckboxGroupColumnsDefaultLength = 6;
const poCheckboxGroupColumnsTotalLength = 12;
/**
 * @description
 *
 * O componente `po-checkbox-group` exibe uma lista de múltipla escolha onde o usuário pode marcar e desmarcar,
 * utilizando a tecla de espaço ou o clique do mouse, várias opções.
 *
 * > Para seleção única, utilize o [**PO Radio Group**](/documentation/po-radio-group).
 *
 * Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.
 *
 * ```
 * favorites = ['PO', 'Angular'];
 * ```
 *
 * Na maioria das situações, o array com os objetos setados já atende as necessidades mas, caso o desenvolvedor
 * tenha necessidade de usar um valor indeterminado (`null`), ou seja, nem marcado (`true`) e nem desmarcado (`false`),
 * deve setar a propriedade `p-indeterminate` como `true`.
 *
 * Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.
 *
 * ```
 * favorites = {
 *  PO: true,
 *  Angular: true,
 *  VueJS: false,
 *  React: null // indeterminado
 * };
 * ```
 */
export class PoCheckboxGroupBaseComponent {
    constructor() {
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
         * Função para atualizar o `ngModel` do componente, necessário quando não for utilizado dentro da tag form.
         *
         * Na versão 12.2.0 do Angular a verificação `strictTemplates` vem true como default. Portanto, para utilizar
         * two-way binding no componente deve se utilizar da seguinte forma:
         *
         * ```
         * <po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
         * ```
         *
         */
        this.ngModelChange = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento disparado ao alterar valor do campo
         */
        this.change = new EventEmitter();
        this.checkedOptions = {};
        this.checkedOptionsList = [];
        this.mdColumns = poCheckboxGroupColumnsDefaultLength;
        this._columns = poCheckboxGroupColumnsDefaultLength;
        this._disabled = false;
        this._indeterminate = false;
        this._required = false;
    }
    /**
     * @optional
     *
     * @description
     *
     * Possibilita definir a quantidade de colunas para exibição dos itens do *checkbox*.
     * - É possível exibir as opções entre `1` e `4` colunas.
     * - Para resolução `sm` a colunagem invariavelmente passa para `1` coluna.
     * - Quando se trata de resolução `md` e o valor estabelecido para colunas for superior a `2`,
     * o *grid system* será composto por `2` colunas.
     * - Para evitar a quebra de linha, prefira a utilização de `1` coluna para opções com textos grandes.
     *
     * @default `2`
     *
     */
    set columns(value) {
        const columns = convertToInt(value, poCheckboxGroupColumnsDefaultLength);
        this._columns = this.getGridSystemColumns(columns, 4);
        this.mdColumns = this.getGridSystemColumns(columns, 2);
    }
    get columns() {
        return this._columns;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita todos os itens do checkbox.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
        this.validateModel(this.checkIndeterminate());
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * @optional
     *
     * @description
     *
     * Caso exista a necessidade de usar o valor indeterminado (`null`) dentro da lista de opções, é necessário setar
     * a propriedade `p-indeterminate` como `true`, por padrão essa propriedade vem desabilitada (`false`).
     *
     * Quando essa propriedade é setada como `true`, o *po-checkbox-group* passa a devolver um objeto completo para o
     * `ngModel`, diferente do array que contém apenas os valores selecionados.
     *
     * @default `false`
     */
    set indeterminate(indeterminate) {
        this._indeterminate = convertToBoolean(indeterminate);
    }
    get indeterminate() {
        return this._indeterminate;
    }
    /**
     * @optional
     *
     * @description
     * Lista de opções que serão exibidas
     * Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption
     */
    set options(value) {
        this._options = Array.isArray(value) ? value : [];
        this.removeDuplicatedOptions();
        this.setCheckboxGroupOptionsView(this.options);
    }
    get options() {
        return this._options;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define que o campo será obrigatório.
     *
     * @default `false`
     */
    set required(required) {
        this._required = convertToBoolean(required);
        this.validateModel(this.checkIndeterminate());
    }
    get required() {
        return this._required;
    }
    changeValue() {
        const value = this.checkIndeterminate();
        if (this.propagateChange) {
            this.propagateChange(value);
        }
        else {
            this.ngModelChange.emit(value);
        }
        this.change.emit(value);
    }
    checkIndeterminate() {
        return this.indeterminate ? this.checkedOptions : this.checkedOptionsList;
    }
    checkOption(value) {
        if (!this._disabled && !value.disabled) {
            this.checkOptionModel(value);
            this.changeValue();
        }
    }
    // Função implementada do ControlValueAccessor
    // Usada para interceptar os estados de habilitado via forms api
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    writeValue(optionsModel) {
        if (optionsModel && this.checkedOptions !== optionsModel) {
            this.generateCheckOptions(optionsModel);
        }
        else {
            this.checkedOptionsList = [];
            this.checkedOptions = {};
        }
    }
    registerOnValidatorChange(fn) {
        this.validatorChange = fn;
    }
    validate(abstractControl) {
        if ((!this.indeterminate && requiredFailed(this.required, this.disabled, abstractControl.value)) ||
            this.isInvalidIndeterminate()) {
            return {
                required: {
                    valid: false
                }
            };
        }
    }
    validateModel(model) {
        if (this.validatorChange) {
            this.validatorChange(model);
        }
    }
    checkColumnsRange(columns, maxColumns) {
        const minColumns = 1;
        return columns >= minColumns && columns <= maxColumns;
    }
    checkOptionModel(optionChecked) {
        this.checkedOptions[optionChecked.value] = !this.checkedOptions[optionChecked.value];
        if (!this.indeterminate && this.checkedOptionsList.includes(optionChecked.value)) {
            this.checkedOptionsList.splice(this.checkedOptionsList.indexOf(optionChecked.value), 1);
        }
        else if (!this.indeterminate) {
            this.checkedOptionsList.push(optionChecked.value);
        }
    }
    generateCheckOptions(optionsModel) {
        this.checkedOptions = {};
        if (optionsModel instanceof Array) {
            this.checkedOptionsList = optionsModel;
            this.options.forEach((option) => {
                this.checkedOptions[option.value] = optionsModel.includes(option.value);
            });
        }
        else {
            this.options.forEach((option) => {
                optionsModel[option.value] = optionsModel[option.value] === undefined ? false : optionsModel[option.value];
                this.checkedOptions = optionsModel;
            });
        }
    }
    getGridSystemColumns(columns, maxColumns) {
        const gridSystemColumns = poCheckboxGroupColumnsTotalLength / columns;
        return this.checkColumnsRange(columns, maxColumns) ? gridSystemColumns : poCheckboxGroupColumnsDefaultLength;
    }
    isInvalidIndeterminate() {
        if (this.indeterminate && this.required && this.checkedOptions) {
            return Object.values(this.checkedOptions).every(value => value === false);
        }
        return false;
    }
    removeDuplicatedOptions() {
        this.options.forEach((option, index) => {
            const duplicatedIndex = this.options.findIndex((optionFind) => optionFind.value === option.value) === index;
            if (!duplicatedIndex) {
                this.options.splice(this.options.indexOf(option), 1);
            }
        });
    }
    setCheckboxGroupOptionsView(optionsList) {
        this.checkboxGroupOptionsView = optionsList.map(option => ({ ...option, id: uuid() }));
    }
}
PoCheckboxGroupBaseComponent.ɵfac = function PoCheckboxGroupBaseComponent_Factory(t) { return new (t || PoCheckboxGroupBaseComponent)(); };
PoCheckboxGroupBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoCheckboxGroupBaseComponent, inputs: { autoFocus: ["p-auto-focus", "autoFocus"], name: "name", help: ["p-help", "help"], label: ["p-label", "label"], optional: ["p-optional", "optional"], columns: ["p-columns", "columns"], disabled: ["p-disabled", "disabled"], indeterminate: ["p-indeterminate", "indeterminate"], options: ["p-options", "options"], required: ["p-required", "required"] }, outputs: { ngModelChange: "ngModelChange", change: "p-change" } });
__decorate([
    InputBoolean()
], PoCheckboxGroupBaseComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCheckboxGroupBaseComponent, [{
        type: Directive
    }], null, { autoFocus: [{
            type: Input,
            args: ['p-auto-focus']
        }], name: [{
            type: Input,
            args: ['name']
        }], help: [{
            type: Input,
            args: ['p-help']
        }], label: [{
            type: Input,
            args: ['p-label']
        }], optional: [{
            type: Input,
            args: ['p-optional']
        }], ngModelChange: [{
            type: Output,
            args: ['ngModelChange']
        }], change: [{
            type: Output,
            args: ['p-change']
        }], columns: [{
            type: Input,
            args: ['p-columns']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }], indeterminate: [{
            type: Input,
            args: ['p-indeterminate']
        }], options: [{
            type: Input,
            args: ['p-options']
        }], required: [{
            type: Input,
            args: ['p-required']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hlY2tib3gtZ3JvdXAtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tY2hlY2tib3gtZ3JvdXAvcG8tY2hlY2tib3gtZ3JvdXAtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLL0MsTUFBTSxtQ0FBbUMsR0FBVyxDQUFDLENBQUM7QUFDdEQsTUFBTSxpQ0FBaUMsR0FBVyxFQUFFLENBQUM7QUFFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFFSCxNQUFNLE9BQU8sNEJBQTRCO0lBRHpDO1FBRUU7Ozs7Ozs7Ozs7V0FVRztRQUNvQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBMEJsRTs7Ozs7Ozs7Ozs7Ozs7V0FjRztRQUNzQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBGOzs7Ozs7V0FNRztRQUNpQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHeEUsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLGNBQVMsR0FBVyxtQ0FBbUMsQ0FBQztRQUloRCxhQUFRLEdBQVcsbUNBQW1DLENBQUM7UUFDdkQsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUM1QixtQkFBYyxHQUFhLEtBQUss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QUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywyQkFBMkIsQ0FBQyxXQUF5QztRQUMzRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7d0dBL1NVLDRCQUE0QjsrRUFBNUIsNEJBQTRCO0FBWUE7SUFBZixZQUFZLEVBQUU7K0RBQTRCO3VGQVp2RCw0QkFBNEI7Y0FEeEMsU0FBUztnQkFhK0IsU0FBUztrQkFBL0MsS0FBSzttQkFBQyxjQUFjO1lBR04sSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBR0ksSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBR0csS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBZUssUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBaUJNLGFBQWE7a0JBQXJDLE1BQU07bUJBQUMsZUFBZTtZQVNILE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQThCTSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFvQk8sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZO1lBdUJXLGFBQWE7a0JBQTFDLEtBQUs7bUJBQUMsaUJBQWlCO1lBZUEsT0FBTztrQkFBOUIsS0FBSzttQkFBQyxXQUFXO1lBbUJPLFFBQVE7a0JBQWhDLEtBQUs7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4sIGNvbnZlcnRUb0ludCwgdXVpZCB9IGZyb20gJy4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyByZXF1aXJlZEZhaWxlZCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGVja2JveEdyb3VwT3B0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNoZWNrYm94LWdyb3VwLW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoZWNrYm94R3JvdXBPcHRpb25WaWV3IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNoZWNrYm94LWdyb3VwLW9wdGlvbi12aWV3LmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBwb0NoZWNrYm94R3JvdXBDb2x1bW5zRGVmYXVsdExlbmd0aDogbnVtYmVyID0gNjtcclxuY29uc3QgcG9DaGVja2JveEdyb3VwQ29sdW1uc1RvdGFsTGVuZ3RoOiBudW1iZXIgPSAxMjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1jaGVja2JveC1ncm91cGAgZXhpYmUgdW1hIGxpc3RhIGRlIG3Dumx0aXBsYSBlc2NvbGhhIG9uZGUgbyB1c3XDoXJpbyBwb2RlIG1hcmNhciBlIGRlc21hcmNhcixcclxuICogdXRpbGl6YW5kbyBhIHRlY2xhIGRlIGVzcGHDp28gb3UgbyBjbGlxdWUgZG8gbW91c2UsIHbDoXJpYXMgb3DDp8O1ZXMuXHJcbiAqXHJcbiAqID4gUGFyYSBzZWxlw6fDo28gw7puaWNhLCB1dGlsaXplIG8gWyoqUE8gUmFkaW8gR3JvdXAqKl0oL2RvY3VtZW50YXRpb24vcG8tcmFkaW8tZ3JvdXApLlxyXG4gKlxyXG4gKiBQb3IgcGFkcsOjbywgbyBwby1jaGVja2JveC1ncm91cCByZXRvcm5hIHVtIGFycmF5IGNvbSBvcyB2YWxvcmVzIGRvcyBpdGVucyBzZWxlY2lvbmFkb3MgcGFyYSBvIG1vZGVsLlxyXG4gKlxyXG4gKiBgYGBcclxuICogZmF2b3JpdGVzID0gWydQTycsICdBbmd1bGFyJ107XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOYSBtYWlvcmlhIGRhcyBzaXR1YcOnw7VlcywgbyBhcnJheSBjb20gb3Mgb2JqZXRvcyBzZXRhZG9zIGrDoSBhdGVuZGUgYXMgbmVjZXNzaWRhZGVzIG1hcywgY2FzbyBvIGRlc2Vudm9sdmVkb3JcclxuICogdGVuaGEgbmVjZXNzaWRhZGUgZGUgdXNhciB1bSB2YWxvciBpbmRldGVybWluYWRvIChgbnVsbGApLCBvdSBzZWphLCBuZW0gbWFyY2FkbyAoYHRydWVgKSBlIG5lbSBkZXNtYXJjYWRvIChgZmFsc2VgKSxcclxuICogZGV2ZSBzZXRhciBhIHByb3ByaWVkYWRlIGBwLWluZGV0ZXJtaW5hdGVgIGNvbW8gYHRydWVgLlxyXG4gKlxyXG4gKiBOZXNzZSBjYXNvLCBvIHBvLWNoZWNrYm94LWdyb3VwIHZhaSByZXRvcm5hciB1bSBvYmpldG8gY29tIHRvZGFzIGFzIG9ww6fDtWVzIGRpc3BvbsOtdmVpcyBlIHNldXMgdmFsb3Jlcy5cclxuICpcclxuICogYGBgXHJcbiAqIGZhdm9yaXRlcyA9IHtcclxuICogIFBPOiB0cnVlLFxyXG4gKiAgQW5ndWxhcjogdHJ1ZSxcclxuICogIFZ1ZUpTOiBmYWxzZSxcclxuICogIFJlYWN0OiBudWxsIC8vIGluZGV0ZXJtaW5hZG9cclxuICogfTtcclxuICogYGBgXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvQ2hlY2tib3hHcm91cEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQXBsaWNhIGZvY28gbm8gZWxlbWVudG8gYW8gc2VyIGluaWNpYWRvLlxyXG4gICAqXHJcbiAgICogPiBDYXNvIG1haXMgZGUgdW0gZWxlbWVudG8gc2VqYSBjb25maWd1cmFkbyBjb20gZXNzYSBwcm9wcmllZGFkZSwgYXBlbmFzIG8gw7psdGltbyBlbGVtZW50byBkZWNsYXJhZG8gY29tIGVsYSB0ZXLDoSBvIGZvY28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWF1dG8tZm9jdXMnKSBASW5wdXRCb29sZWFuKCkgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBOb21lIGRvcyBjaGVja2JveGVzICovXHJcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKiogVGV4dG8gZGUgYXBvaW8gZG8gY2FtcG8gKi9cclxuICBASW5wdXQoJ3AtaGVscCcpIGhlbHA/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBMYWJlbCBkbyBjYW1wbyAqL1xyXG4gIEBJbnB1dCgncC1sYWJlbCcpIGxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIGEgaW5kaWNhw6fDo28gZGUgY2FtcG8gb3BjaW9uYWwgc2Vyw6EgZXhpYmlkYS5cclxuICAgKlxyXG4gICAqID4gTsOjbyBzZXLDoSBleGliaWRhIGEgaW5kaWNhw6fDo28gc2U6XHJcbiAgICogLSBPIGNhbXBvIGNvbnRlciBgcC1yZXF1aXJlZGA7XHJcbiAgICogLSBOw6NvIHBvc3N1aXIgYHAtaGVscGAgZS9vdSBgcC1sYWJlbGAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLW9wdGlvbmFsJykgb3B0aW9uYWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBGdW7Dp8OjbyBwYXJhIGF0dWFsaXphciBvIGBuZ01vZGVsYCBkbyBjb21wb25lbnRlLCBuZWNlc3PDoXJpbyBxdWFuZG8gbsOjbyBmb3IgdXRpbGl6YWRvIGRlbnRybyBkYSB0YWcgZm9ybS5cclxuICAgKlxyXG4gICAqIE5hIHZlcnPDo28gMTIuMi4wIGRvIEFuZ3VsYXIgYSB2ZXJpZmljYcOnw6NvIGBzdHJpY3RUZW1wbGF0ZXNgIHZlbSB0cnVlIGNvbW8gZGVmYXVsdC4gUG9ydGFudG8sIHBhcmEgdXRpbGl6YXJcclxuICAgKiB0d28td2F5IGJpbmRpbmcgbm8gY29tcG9uZW50ZSBkZXZlIHNlIHV0aWxpemFyIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogPHBvLWNoZWNrYm94LWdyb3VwIC4uLiBbbmdNb2RlbF09XCJjaGVja2JveGdyb3VwTW9kZWxcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja2JveGdyb3VwTW9kZWwgPSAkZXZlbnRcIj4gPC9wby1jaGVja2JveC1ncm91cD5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ25nTW9kZWxDaGFuZ2UnKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGRpc3BhcmFkbyBhbyBhbHRlcmFyIHZhbG9yIGRvIGNhbXBvXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNoZWNrYm94R3JvdXBPcHRpb25zVmlldzogQXJyYXk8UG9DaGVja2JveEdyb3VwT3B0aW9uVmlldz47XHJcbiAgY2hlY2tlZE9wdGlvbnM6IGFueSA9IHt9O1xyXG4gIGNoZWNrZWRPcHRpb25zTGlzdDogYW55ID0gW107XHJcbiAgbWRDb2x1bW5zOiBudW1iZXIgPSBwb0NoZWNrYm94R3JvdXBDb2x1bW5zRGVmYXVsdExlbmd0aDtcclxuICBwcm9wYWdhdGVDaGFuZ2U6IGFueTtcclxuICB2YWxpZGF0b3JDaGFuZ2U6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfY29sdW1uczogbnVtYmVyID0gcG9DaGVja2JveEdyb3VwQ29sdW1uc0RlZmF1bHRMZW5ndGg7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9vcHRpb25zPzogQXJyYXk8UG9DaGVja2JveEdyb3VwT3B0aW9uPjtcclxuICBwcml2YXRlIF9yZXF1aXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFBvc3NpYmlsaXRhIGRlZmluaXIgYSBxdWFudGlkYWRlIGRlIGNvbHVuYXMgcGFyYSBleGliacOnw6NvIGRvcyBpdGVucyBkbyAqY2hlY2tib3gqLlxyXG4gICAqIC0gw4kgcG9zc8OtdmVsIGV4aWJpciBhcyBvcMOnw7VlcyBlbnRyZSBgMWAgZSBgNGAgY29sdW5hcy5cclxuICAgKiAtIFBhcmEgcmVzb2x1w6fDo28gYHNtYCBhIGNvbHVuYWdlbSBpbnZhcmlhdmVsbWVudGUgcGFzc2EgcGFyYSBgMWAgY29sdW5hLlxyXG4gICAqIC0gUXVhbmRvIHNlIHRyYXRhIGRlIHJlc29sdcOnw6NvIGBtZGAgZSBvIHZhbG9yIGVzdGFiZWxlY2lkbyBwYXJhIGNvbHVuYXMgZm9yIHN1cGVyaW9yIGEgYDJgLFxyXG4gICAqIG8gKmdyaWQgc3lzdGVtKiBzZXLDoSBjb21wb3N0byBwb3IgYDJgIGNvbHVuYXMuXHJcbiAgICogLSBQYXJhIGV2aXRhciBhIHF1ZWJyYSBkZSBsaW5oYSwgcHJlZmlyYSBhIHV0aWxpemHDp8OjbyBkZSBgMWAgY29sdW5hIHBhcmEgb3DDp8O1ZXMgY29tIHRleHRvcyBncmFuZGVzLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDJgXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29sdW1ucycpIHNldCBjb2x1bW5zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBjb252ZXJ0VG9JbnQodmFsdWUsIHBvQ2hlY2tib3hHcm91cENvbHVtbnNEZWZhdWx0TGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5nZXRHcmlkU3lzdGVtQ29sdW1ucyhjb2x1bW5zLCA0KTtcclxuICAgIHRoaXMubWRDb2x1bW5zID0gdGhpcy5nZXRHcmlkU3lzdGVtQ29sdW1ucyhjb2x1bW5zLCAyKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2x1bW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVzYWJpbGl0YSB0b2RvcyBvcyBpdGVucyBkbyBjaGVja2JveC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuY2hlY2tJbmRldGVybWluYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIENhc28gZXhpc3RhIGEgbmVjZXNzaWRhZGUgZGUgdXNhciBvIHZhbG9yIGluZGV0ZXJtaW5hZG8gKGBudWxsYCkgZGVudHJvIGRhIGxpc3RhIGRlIG9ww6fDtWVzLCDDqSBuZWNlc3PDoXJpbyBzZXRhclxyXG4gICAqIGEgcHJvcHJpZWRhZGUgYHAtaW5kZXRlcm1pbmF0ZWAgY29tbyBgdHJ1ZWAsIHBvciBwYWRyw6NvIGVzc2EgcHJvcHJpZWRhZGUgdmVtIGRlc2FiaWxpdGFkYSAoYGZhbHNlYCkuXHJcbiAgICpcclxuICAgKiBRdWFuZG8gZXNzYSBwcm9wcmllZGFkZSDDqSBzZXRhZGEgY29tbyBgdHJ1ZWAsIG8gKnBvLWNoZWNrYm94LWdyb3VwKiBwYXNzYSBhIGRldm9sdmVyIHVtIG9iamV0byBjb21wbGV0byBwYXJhIG9cclxuICAgKiBgbmdNb2RlbGAsIGRpZmVyZW50ZSBkbyBhcnJheSBxdWUgY29udMOpbSBhcGVuYXMgb3MgdmFsb3JlcyBzZWxlY2lvbmFkb3MuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgZmFsc2VgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWluZGV0ZXJtaW5hdGUnKSBzZXQgaW5kZXRlcm1pbmF0ZShpbmRldGVybWluYXRlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gY29udmVydFRvQm9vbGVhbihpbmRldGVybWluYXRlKTtcclxuICB9XHJcblxyXG4gIGdldCBpbmRldGVybWluYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIExpc3RhIGRlIG9ww6fDtWVzIHF1ZSBzZXLDo28gZXhpYmlkYXNcclxuICAgKiBOZXN0YSBwcm9wcmllZGFkZSBkZXZlIHNlciBkZWZpbmlkbyB1bSBhcnJheSBkZSBvYmpldG9zIHF1ZSBpbXBsZW1lbnRhbSBhIGludGVyZmFjZSBQb0NoZWNrYm94R3JvdXBPcHRpb25cclxuICAgKi9cclxuICBASW5wdXQoJ3Atb3B0aW9ucycpIHNldCBvcHRpb25zKHZhbHVlOiBBcnJheTxQb0NoZWNrYm94R3JvdXBPcHRpb24+KSB7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdO1xyXG4gICAgdGhpcy5yZW1vdmVEdXBsaWNhdGVkT3B0aW9ucygpO1xyXG4gICAgdGhpcy5zZXRDaGVja2JveEdyb3VwT3B0aW9uc1ZpZXcodGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHF1ZSBvIGNhbXBvIHNlcsOhIG9icmlnYXTDs3Jpby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtcmVxdWlyZWQnKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JlcXVpcmVkID0gY29udmVydFRvQm9vbGVhbihyZXF1aXJlZCk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZU1vZGVsKHRoaXMuY2hlY2tJbmRldGVybWluYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmFsdWUoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY2hlY2tJbmRldGVybWluYXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcGFnYXRlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNoZWNrSW5kZXRlcm1pbmF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV0ZXJtaW5hdGUgPyB0aGlzLmNoZWNrZWRPcHRpb25zIDogdGhpcy5jaGVja2VkT3B0aW9uc0xpc3Q7XHJcbiAgfVxyXG5cclxuICBjaGVja09wdGlvbih2YWx1ZTogUG9DaGVja2JveEdyb3VwT3B0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkICYmICF2YWx1ZS5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrT3B0aW9uTW9kZWwodmFsdWUpO1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBpbXBsZW1lbnRhZGEgZG8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBVc2FkYSBwYXJhIGludGVyY2VwdGFyIG9zIGVzdGFkb3MgZGUgaGFiaWxpdGFkbyB2aWEgZm9ybXMgYXBpXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUob3B0aW9uc01vZGVsOiBhbnkpIHtcclxuICAgIGlmIChvcHRpb25zTW9kZWwgJiYgdGhpcy5jaGVja2VkT3B0aW9ucyAhPT0gb3B0aW9uc01vZGVsKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDaGVja09wdGlvbnMob3B0aW9uc01vZGVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnNMaXN0ID0gW107XHJcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnMgPSB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShhYnN0cmFjdENvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgaWYgKFxyXG4gICAgICAoIXRoaXMuaW5kZXRlcm1pbmF0ZSAmJiByZXF1aXJlZEZhaWxlZCh0aGlzLnJlcXVpcmVkLCB0aGlzLmRpc2FibGVkLCBhYnN0cmFjdENvbnRyb2wudmFsdWUpKSB8fFxyXG4gICAgICB0aGlzLmlzSW52YWxpZEluZGV0ZXJtaW5hdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZU1vZGVsKG1vZGVsOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRvckNoYW5nZSkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRvckNoYW5nZShtb2RlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQ29sdW1uc1JhbmdlKGNvbHVtbnMsIG1heENvbHVtbnMpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1pbkNvbHVtbnMgPSAxO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zID49IG1pbkNvbHVtbnMgJiYgY29sdW1ucyA8PSBtYXhDb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja09wdGlvbk1vZGVsKG9wdGlvbkNoZWNrZWQ6IFBvQ2hlY2tib3hHcm91cE9wdGlvbikge1xyXG4gICAgdGhpcy5jaGVja2VkT3B0aW9uc1tvcHRpb25DaGVja2VkLnZhbHVlXSA9ICF0aGlzLmNoZWNrZWRPcHRpb25zW29wdGlvbkNoZWNrZWQudmFsdWVdO1xyXG5cclxuICAgIGlmICghdGhpcy5pbmRldGVybWluYXRlICYmIHRoaXMuY2hlY2tlZE9wdGlvbnNMaXN0LmluY2x1ZGVzKG9wdGlvbkNoZWNrZWQudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnNMaXN0LnNwbGljZSh0aGlzLmNoZWNrZWRPcHRpb25zTGlzdC5pbmRleE9mKG9wdGlvbkNoZWNrZWQudmFsdWUpLCAxKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaW5kZXRlcm1pbmF0ZSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25zTGlzdC5wdXNoKG9wdGlvbkNoZWNrZWQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUNoZWNrT3B0aW9ucyhvcHRpb25zTW9kZWw6IGFueSkge1xyXG4gICAgdGhpcy5jaGVja2VkT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIGlmIChvcHRpb25zTW9kZWwgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWRPcHRpb25zTGlzdCA9IG9wdGlvbnNNb2RlbDtcclxuXHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IFBvQ2hlY2tib3hHcm91cE9wdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZE9wdGlvbnNbb3B0aW9uLnZhbHVlXSA9IG9wdGlvbnNNb2RlbC5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IFBvQ2hlY2tib3hHcm91cE9wdGlvbikgPT4ge1xyXG4gICAgICAgIG9wdGlvbnNNb2RlbFtvcHRpb24udmFsdWVdID0gb3B0aW9uc01vZGVsW29wdGlvbi52YWx1ZV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogb3B0aW9uc01vZGVsW29wdGlvbi52YWx1ZV07XHJcbiAgICAgICAgdGhpcy5jaGVja2VkT3B0aW9ucyA9IG9wdGlvbnNNb2RlbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEdyaWRTeXN0ZW1Db2x1bW5zKGNvbHVtbnM6IG51bWJlciwgbWF4Q29sdW1uczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGdyaWRTeXN0ZW1Db2x1bW5zID0gcG9DaGVja2JveEdyb3VwQ29sdW1uc1RvdGFsTGVuZ3RoIC8gY29sdW1ucztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbHVtbnNSYW5nZShjb2x1bW5zLCBtYXhDb2x1bW5zKSA/IGdyaWRTeXN0ZW1Db2x1bW5zIDogcG9DaGVja2JveEdyb3VwQ29sdW1uc0RlZmF1bHRMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW52YWxpZEluZGV0ZXJtaW5hdGUoKSB7XHJcbiAgICBpZiAodGhpcy5pbmRldGVybWluYXRlICYmIHRoaXMucmVxdWlyZWQgJiYgdGhpcy5jaGVja2VkT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS52YWx1ZXModGhpcy5jaGVja2VkT3B0aW9ucykuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlZE9wdGlvbnMoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBkdXBsaWNhdGVkSW5kZXggPSB0aGlzLm9wdGlvbnMuZmluZEluZGV4KChvcHRpb25GaW5kOiBhbnkpID0+IG9wdGlvbkZpbmQudmFsdWUgPT09IG9wdGlvbi52YWx1ZSkgPT09IGluZGV4O1xyXG4gICAgICBpZiAoIWR1cGxpY2F0ZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zcGxpY2UodGhpcy5vcHRpb25zLmluZGV4T2Yob3B0aW9uKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDaGVja2JveEdyb3VwT3B0aW9uc1ZpZXcob3B0aW9uc0xpc3Q6IEFycmF5PFBvQ2hlY2tib3hHcm91cE9wdGlvbj4pIHtcclxuICAgIHRoaXMuY2hlY2tib3hHcm91cE9wdGlvbnNWaWV3ID0gb3B0aW9uc0xpc3QubWFwKG9wdGlvbiA9PiAoeyAuLi5vcHRpb24sIGlkOiB1dWlkKCkgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=