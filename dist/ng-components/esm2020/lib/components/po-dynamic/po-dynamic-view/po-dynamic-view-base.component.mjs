import { Input, Directive } from '@angular/core';
import { convertToBoolean, isTypeof, sortFields } from '../../../utils/util';
import { getGridColumnsClasses, isVisibleField } from '../po-dynamic.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/po-time/po-time.pipe";
import * as i3 from "./po-dynamic-view.service";
/**
 *
 * @description
 *
 * Componente para listar dados dinamicamente a partir de uma lista de objetos.
 *
 * > Por padrão esse componente cria `po-info` para exibição, é possível criar `po-tag` passando a propriedade { tag: true }.
 *
 */
export class PoDynamicViewBaseComponent {
    constructor(currencyPipe, datePipe, decimalPipe, timePipe, titleCasePipe, dynamicViewService) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.timePipe = timePipe;
        this.titleCasePipe = titleCasePipe;
        this.dynamicViewService = dynamicViewService;
        this.visibleFields = [];
        this._fields = [];
        this._showAllValue = false;
        this._value = {};
    }
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
    set fields(fields) {
        this._fields = Array.isArray(fields) ? [...fields] : [];
    }
    get fields() {
        return this._fields;
    }
    /**
     * @optional
     *
     * @description
     *
     * Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `p-value`.
     *
     * @default `false`
     */
    set showAllValue(value) {
        this._showAllValue = convertToBoolean(value);
    }
    get showAllValue() {
        return this._showAllValue;
    }
    /**
     * @description
     *
     * Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo *property*
     * dos objetos contidos na propridade `p-fields`.
     *
     * > Ex: `{ age: '35' }`
     */
    set value(value) {
        this._value = value && isTypeof(value, 'object') ? value : {};
    }
    get value() {
        return this._value;
    }
    // retorna os fields com os valores recuperados do objeto value.
    getConfiguredFields() {
        const newFields = [];
        this.fields.forEach(field => {
            if (isVisibleField(field)) {
                newFields.push(this.createField(field));
            }
        });
        return sortFields(newFields);
    }
    // retorna fields ligado ao value mais os atributos do value que não possuiam fields.
    getMergedFields() {
        const mergedFields = [...this.getConfiguredFields()];
        this.getValueFields().forEach(valueField => {
            const fieldIndex = mergedFields.findIndex(field => field.property === valueField.property);
            const property = valueField.property;
            if (fieldIndex === -1) {
                mergedFields.push(this.createField({ property }));
            }
        });
        return mergedFields;
    }
    // retorna o objeto value como fields.
    getValueFields() {
        return Object.keys(this.value).map(property => this.createField({ property }));
    }
    createField(field) {
        const property = field.property;
        const value = this.transformValue(field.type, this.value[property], field.format);
        const classesGridColumns = getGridColumnsClasses(field.gridColumns, field.offsetColumns, {
            smGrid: field.gridSmColumns,
            mdGrid: field.gridMdColumns,
            lgGrid: field.gridLgColumns,
            xlGrid: field.gridXlColumns
        }, {
            smOffset: field.offsetSmColumns,
            mdOffset: field.offsetMdColumns,
            lgOffset: field.offsetLgColumns,
            xlOffset: field.offsetXlColumns
        }, {
            smPull: field.gridSmPull,
            mdPull: field.gridMdPull,
            lgPull: field.gridLgPull,
            xlPull: field.gridXlPull
        });
        return {
            property,
            value,
            label: this.titleCasePipe.transform(property),
            cssClass: classesGridColumns,
            ...field
        };
    }
    transformValue(type, value, format) {
        let transformedValue = value;
        switch (type) {
            case 'currency':
                transformedValue = this.currencyPipe.transform(value, format || 'BRL', 'symbol', '1.2-2');
                break;
            case 'date':
                transformedValue = this.datePipe.transform(value, format || 'dd/MM/yyyy');
                break;
            case 'dateTime':
                transformedValue = this.datePipe.transform(value, format || 'dd/MM/yyyy HH:mm:ss');
                break;
            case 'number':
                transformedValue = this.decimalPipe.transform(value, format);
                break;
            case 'time':
                transformedValue = this.timePipe.transform(value, format || 'HH:mm:ss.ffffff');
                break;
        }
        return transformedValue;
    }
}
PoDynamicViewBaseComponent.ɵfac = function PoDynamicViewBaseComponent_Factory(t) { return new (t || PoDynamicViewBaseComponent)(i0.ɵɵdirectiveInject(i1.CurrencyPipe), i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i1.DecimalPipe), i0.ɵɵdirectiveInject(i2.PoTimePipe), i0.ɵɵdirectiveInject(i1.TitleCasePipe), i0.ɵɵdirectiveInject(i3.PoDynamicViewService)); };
PoDynamicViewBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDynamicViewBaseComponent, inputs: { load: ["p-load", "load"], fields: ["p-fields", "fields"], showAllValue: ["p-show-all-value", "showAllValue"], value: ["p-value", "value"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicViewBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.CurrencyPipe }, { type: i1.DatePipe }, { type: i1.DecimalPipe }, { type: i2.PoTimePipe }, { type: i1.TitleCasePipe }, { type: i3.PoDynamicViewService }]; }, { load: [{
            type: Input,
            args: ['p-load']
        }], fields: [{
            type: Input,
            args: ['p-fields']
        }], showAllValue: [{
            type: Input,
            args: ['p-show-all-value']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy12aWV3LWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWR5bmFtaWMvcG8tZHluYW1pYy12aWV3L3BvLWR5bmFtaWMtdmlldy1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFJM0U7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8sMEJBQTBCO0lBeUdyQyxZQUNVLFlBQTBCLEVBQzFCLFFBQWtCLEVBQ2xCLFdBQXdCLEVBQ3hCLFFBQW9CLEVBQ3BCLGFBQTRCLEVBQzFCLGtCQUF3QztRQUwxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFzQjtRQTNFcEQsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFWCxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBd0VqQixDQUFDO0lBdEVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQkc7SUFDSCxJQUF1QixNQUFNLENBQUMsTUFBaUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQStCLFlBQVksQ0FBQyxLQUFjO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVdELGdFQUFnRTtJQUN0RCxtQkFBbUI7UUFDM0IsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHFGQUFxRjtJQUMzRSxlQUFlO1FBQ3ZCLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNGLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFFckMsSUFBSSxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFzQztJQUM1QixjQUFjO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQXlCO1FBQzNDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxGLE1BQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQzlDLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEtBQUssQ0FBQyxhQUFhLEVBQ25CO1lBQ0UsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQzNCLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYTtZQUMzQixNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDM0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQzVCLEVBQ0Q7WUFDRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQy9CLFFBQVEsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUMvQixRQUFRLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDaEMsRUFDRDtZQUNFLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVTtZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVTtTQUN6QixDQUNGLENBQUM7UUFFRixPQUFPO1lBQ0wsUUFBUTtZQUNSLEtBQUs7WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQzdDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsR0FBRyxLQUFLO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTyxjQUFjLENBQUMsSUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNO1FBQ2hELElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRTdCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxVQUFVO2dCQUNiLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDMUYsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLFlBQVksQ0FBQyxDQUFDO2dCQUMxRSxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUkscUJBQXFCLENBQUMsQ0FBQztnQkFDbkYsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdELE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMvRSxNQUFNO1NBQ1Q7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7O29HQTlNVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBRHRDLFNBQVM7d01BbUNTLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQThCUSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUFpQmMsWUFBWTtrQkFBMUMsS0FBSzttQkFBQyxrQkFBa0I7WUFnQkgsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBEZWNpbWFsUGlwZSwgVGl0bGVDYXNlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuLCBpc1R5cGVvZiwgc29ydEZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBQb1RpbWVQaXBlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvcG8tdGltZS9wby10aW1lLnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0R3JpZENvbHVtbnNDbGFzc2VzLCBpc1Zpc2libGVGaWVsZCB9IGZyb20gJy4uL3BvLWR5bmFtaWMudXRpbCc7XHJcbmltcG9ydCB7IFBvRHluYW1pY1ZpZXdGaWVsZCB9IGZyb20gJy4vcG8tZHluYW1pYy12aWV3LWZpZWxkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvRHluYW1pY1ZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9wby1keW5hbWljLXZpZXcuc2VydmljZSc7XHJcblxyXG4vKipcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgcGFyYSBsaXN0YXIgZGFkb3MgZGluYW1pY2FtZW50ZSBhIHBhcnRpciBkZSB1bWEgbGlzdGEgZGUgb2JqZXRvcy5cclxuICpcclxuICogPiBQb3IgcGFkcsOjbyBlc3NlIGNvbXBvbmVudGUgY3JpYSBgcG8taW5mb2AgcGFyYSBleGliacOnw6NvLCDDqSBwb3Nzw612ZWwgY3JpYXIgYHBvLXRhZ2AgcGFzc2FuZG8gYSBwcm9wcmllZGFkZSB7IHRhZzogdHJ1ZSB9LlxyXG4gKlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0R5bmFtaWNWaWV3QmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIFBvc3NpYmlsaXRhIGV4ZWN1dGFyIHVtYSBmdW7Dp8OjbyBxdWFuZG8gbyBjb21wb25lbnRlIMOpIGluaWNpYWxpemFkby5cclxuICAgKlxyXG4gICAqIEEgcHJvcHJpZWRhZGUgYWNlaXRhIG9zIHNlZ3VpbnRlcyB0aXBvczpcclxuICAgKiAtICoqU3RyaW5nKio6IEVuZHBvaW50IHVzYWRvIHBlbG8gY29tcG9uZW50ZSBwYXJhIHJlcXVpc2nDp8OjbyB2aWEgYFBPU1RgLlxyXG4gICAqIC0gKipGdW5jdGlvbioqOiBNw6l0b2RvIHF1ZSBzZXLDoSBleGVjdXRhZG8gbmEgaW5pY2lhbGl6YcOnw6NvIGRvIGNvbXBvbmVudGUuXHJcbiAgICpcclxuICAgKiBQYXJhIG9zIGRvaXMgdGlwb3MgZGUgdXRpbGl6YcOnw6NvIGRhIHByb3ByaWVkYWRlIGVzcGVyYS1zZSBvIHNlZ3VpbnRlIHJldG9ybm86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiB7XHJcbiAgICogICB2YWx1ZToge1xyXG4gICAqICAgICBjbnBqOiAnKioqKioqKioqKioqKionLCAvLyBhbHRlcmEgdmFsb3IgZG8gY2FtcG9cclxuICAgKiAgICAgdXBkYXRlZDogKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCkgLy8gYXRyaWJ1aSB2YWxvciBhbyBjYW1wbyBub3ZvXHJcbiAgICogICB9LFxyXG4gICAqICAgZmllbGRzOiBbXHJcbiAgICogICAgIHsgcHJvcGVydHk6ICdjbnBqJywgdGFnOiB0cnVlLCBpbnZlcnNlOiB0cnVlIH0sIC8vIGF0cmlidWkgbm92YXMgcHJvcHJpZWRhZGVzIGFvIGZpZWxkXHJcbiAgICogICAgIHsgcHJvcGVydHk6ICd1cGRhdGVkJywgdGFnOiB0cnVlIH0gLy8gaW5jbHVpIGNhbXBvIG5vdm9cclxuICAgKiAgIF1cclxuICAgKiB9XHJcbiAgICogYGBgXHJcbiAgICogPiAqKnZhbHVlKio6IGFueSA9IGF0cmlidWkgbm92byB2YWxvciBkbyBtb2RlbC5cclxuICAgKlxyXG4gICAqID4gKipmaWVsZHMqKjogYEFycmF5PFBvRHluYW1pY1ZpZXdGaWVsZD5gID0gTGlzdGEgZGUgY2FtcG9zIHF1ZSBkZXNlamEgYWx0ZXJhciBhcyBwcm9wcmllZGFkZXMsXHJcbiAgICogY2FzbyBlbnZpYXIgdW0gY2FtcG8gYSBtYWlzIHNlcsOhIGNyaWFkbyB1bSBub3ZvIGNhbXBvLlxyXG4gICAqXHJcbiAgICogLSBQYXJhIGVzY29uZGVyL3JlbW92ZXIgY2FtcG9zIHByZWNpc2EgaW5mb3JtYXIgbm8gZmllbGQgYSBwcm9wcmllZGFkZSBgdmlzaWJsZSA9IGZhbHNlYC5cclxuICAgKlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1sb2FkJykgbG9hZDogc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG4gIHZpc2libGVGaWVsZHMgPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfZmllbGRzOiBBcnJheTxQb0R5bmFtaWNWaWV3RmllbGQ+ID0gW107XHJcbiAgcHJpdmF0ZSBfc2hvd0FsbFZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfdmFsdWUgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIExpc3RhIGRlIG9iamV0b3MgcXVlIGltcGxlbWVudGFtIGEgaW50ZXJmYWNlIGBQb0R5bmFtaWNWaWV3YC5cclxuICAgKlxyXG4gICAqID4gRXg6IGBbIHsgcHJvcGVydHk6ICdhZ2UnIH0gXWBcclxuICAgKlxyXG4gICAqIFJlZ3JhcyBkZSB0aXBhZ2VtIGUgZm9ybWF0YcOnw6NvIGRvcyB2YWxvcmVzIGV4aWJpZG9zOlxyXG4gICAqXHJcbiAgICogLSBDYXNvIG8gKnR5cGUqIGluZm9ybWFkbyBzZWphICpjdXJyZW5jeSogZSBuw6NvIHNlamEgaW5mb3JtYWRvIG8gKmZvcm1hdCogbyBtZXNtbyByZWNlYmUgXCInQlJMJywgJ3N5bWJvbCcsICcxLjItMidcIlxyXG4gICAqIGNvbW8gZm9ybWF0byBwYWRyw6NvLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqZGF0ZSogZSBuw6NvIHNlamEgaW5mb3JtYWRvIG8gKmZvcm1hdCogbyBtZXNtbyByZWNlYmUgJ2RkL01NL3l5eXknIGNvbW8gZm9ybWF0byBwYWRyw6NvLlxyXG4gICAqIC0gQ2FzbyBvICp0eXBlKiBpbmZvcm1hZG8gc2VqYSAqZGF0ZVRpbWUqIGUgbsOjbyBzZWphIGluZm9ybWFkbyBvICpmb3JtYXQqIG8gbWVzbW8gcmVjZWJlICdkZC9NTS95eXl5IEhIOm1tOnNzJyBjb21vIGZvcm1hdG8gcGFkcsOjby5cclxuICAgKiAtIENhc28gbyAqdHlwZSogaW5mb3JtYWRvIHNlamEgKm51bWJlciogZSBuw6NvIHNlamEgaW5mb3JtYWRvIG8gKmZvcm1hdCogbyBtZXNtbyBuw6NvIHNlcsOhIGZvcm1hdGFkby5cclxuICAgKiAtIENhc28gbyAqdHlwZSogaW5mb3JtYWRvIHNlamEgKnRpbWUqIGUgbsOjbyBzZWphIGluZm9ybWFkbyBvICpmb3JtYXQqIG8gbWVzbW8gcmVjZWJlICdISDptbTpzcy5mZmZmZmYnIGNvbW8gZm9ybWF0byBwYWRyw6NvLlxyXG4gICAqXHJcbiAgICogPiBBcyBwcm9wcmllZGFkZXMgaW5mb3JtYWRhcyBzZXLDo28gZXhpYmlkYXMgbWVzbW8gbsOjbyBjb250ZW5kbyB2YWxvciBkZSByZWZlcsOqbmNpYSBubyBvYmpldG8gZGEgcHJvcHJpZWRhZGUgYHAtdmFsdWVgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYFtdYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1maWVsZHMnKSBzZXQgZmllbGRzKGZpZWxkczogQXJyYXk8UG9EeW5hbWljVmlld0ZpZWxkPikge1xyXG4gICAgdGhpcy5fZmllbGRzID0gQXJyYXkuaXNBcnJheShmaWVsZHMpID8gWy4uLmZpZWxkc10gOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBmaWVsZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEluZGljYSBzZSBleGliaXLDoSB0b2RhcyBhcyBpbmZvcm1hw6fDtWVzIGNvbnRpZGFzIGRlbnRybyBkbyBvYmpldG8gaW5mb3JtYWRvIG5hIHByb3ByaWVkYWRlIGBwLXZhbHVlYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2hvdy1hbGwtdmFsdWUnKSBzZXQgc2hvd0FsbFZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93QWxsVmFsdWUgPSBjb252ZXJ0VG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93QWxsVmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBPYmpldG8gcXVlIHNlcsOhIHV0aWxpemFkbyBwYXJhIGV4aWJpciBhcyBpbmZvcm1hw6fDtWVzIGRpbsOibWljYXMsIG8gdmFsb3Igc2Vyw6EgcmVjdXBlcmFkbyBhdHJhdsOpcyBkbyBhdHJpYnV0byAqcHJvcGVydHkqXHJcbiAgICogZG9zIG9iamV0b3MgY29udGlkb3MgbmEgcHJvcHJpZGFkZSBgcC1maWVsZHNgLlxyXG4gICAqXHJcbiAgICogPiBFeDogYHsgYWdlOiAnMzUnIH1gXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBvYmplY3QpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgJiYgaXNUeXBlb2YodmFsdWUsICdvYmplY3QnKSA/IHZhbHVlIDoge307XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY3VycmVuY3lQaXBlOiBDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSxcclxuICAgIHByaXZhdGUgZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlLFxyXG4gICAgcHJpdmF0ZSB0aW1lUGlwZTogUG9UaW1lUGlwZSxcclxuICAgIHByaXZhdGUgdGl0bGVDYXNlUGlwZTogVGl0bGVDYXNlUGlwZSxcclxuICAgIHByb3RlY3RlZCBkeW5hbWljVmlld1NlcnZpY2U6IFBvRHluYW1pY1ZpZXdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAvLyByZXRvcm5hIG9zIGZpZWxkcyBjb20gb3MgdmFsb3JlcyByZWN1cGVyYWRvcyBkbyBvYmpldG8gdmFsdWUuXHJcbiAgcHJvdGVjdGVkIGdldENvbmZpZ3VyZWRGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBuZXdGaWVsZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgaWYgKGlzVmlzaWJsZUZpZWxkKGZpZWxkKSkge1xyXG4gICAgICAgIG5ld0ZpZWxkcy5wdXNoKHRoaXMuY3JlYXRlRmllbGQoZmllbGQpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNvcnRGaWVsZHMobmV3RmllbGRzKTtcclxuICB9XHJcblxyXG4gIC8vIHJldG9ybmEgZmllbGRzIGxpZ2FkbyBhbyB2YWx1ZSBtYWlzIG9zIGF0cmlidXRvcyBkbyB2YWx1ZSBxdWUgbsOjbyBwb3NzdWlhbSBmaWVsZHMuXHJcbiAgcHJvdGVjdGVkIGdldE1lcmdlZEZpZWxkcygpIHtcclxuICAgIGNvbnN0IG1lcmdlZEZpZWxkcyA9IFsuLi50aGlzLmdldENvbmZpZ3VyZWRGaWVsZHMoKV07XHJcblxyXG4gICAgdGhpcy5nZXRWYWx1ZUZpZWxkcygpLmZvckVhY2godmFsdWVGaWVsZCA9PiB7XHJcbiAgICAgIGNvbnN0IGZpZWxkSW5kZXggPSBtZXJnZWRGaWVsZHMuZmluZEluZGV4KGZpZWxkID0+IGZpZWxkLnByb3BlcnR5ID09PSB2YWx1ZUZpZWxkLnByb3BlcnR5KTtcclxuICAgICAgY29uc3QgcHJvcGVydHkgPSB2YWx1ZUZpZWxkLnByb3BlcnR5O1xyXG5cclxuICAgICAgaWYgKGZpZWxkSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgbWVyZ2VkRmllbGRzLnB1c2godGhpcy5jcmVhdGVGaWVsZCh7IHByb3BlcnR5IH0pKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1lcmdlZEZpZWxkcztcclxuICB9XHJcblxyXG4gIC8vIHJldG9ybmEgbyBvYmpldG8gdmFsdWUgY29tbyBmaWVsZHMuXHJcbiAgcHJvdGVjdGVkIGdldFZhbHVlRmllbGRzKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudmFsdWUpLm1hcChwcm9wZXJ0eSA9PiB0aGlzLmNyZWF0ZUZpZWxkKHsgcHJvcGVydHkgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVGaWVsZChmaWVsZDogUG9EeW5hbWljVmlld0ZpZWxkKSB7XHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGZpZWxkLnByb3BlcnR5O1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnRyYW5zZm9ybVZhbHVlKGZpZWxkLnR5cGUsIHRoaXMudmFsdWVbcHJvcGVydHldLCBmaWVsZC5mb3JtYXQpO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXNHcmlkQ29sdW1ucyA9IGdldEdyaWRDb2x1bW5zQ2xhc3NlcyhcclxuICAgICAgZmllbGQuZ3JpZENvbHVtbnMsXHJcbiAgICAgIGZpZWxkLm9mZnNldENvbHVtbnMsXHJcbiAgICAgIHtcclxuICAgICAgICBzbUdyaWQ6IGZpZWxkLmdyaWRTbUNvbHVtbnMsXHJcbiAgICAgICAgbWRHcmlkOiBmaWVsZC5ncmlkTWRDb2x1bW5zLFxyXG4gICAgICAgIGxnR3JpZDogZmllbGQuZ3JpZExnQ29sdW1ucyxcclxuICAgICAgICB4bEdyaWQ6IGZpZWxkLmdyaWRYbENvbHVtbnNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNtT2Zmc2V0OiBmaWVsZC5vZmZzZXRTbUNvbHVtbnMsXHJcbiAgICAgICAgbWRPZmZzZXQ6IGZpZWxkLm9mZnNldE1kQ29sdW1ucyxcclxuICAgICAgICBsZ09mZnNldDogZmllbGQub2Zmc2V0TGdDb2x1bW5zLFxyXG4gICAgICAgIHhsT2Zmc2V0OiBmaWVsZC5vZmZzZXRYbENvbHVtbnNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNtUHVsbDogZmllbGQuZ3JpZFNtUHVsbCxcclxuICAgICAgICBtZFB1bGw6IGZpZWxkLmdyaWRNZFB1bGwsXHJcbiAgICAgICAgbGdQdWxsOiBmaWVsZC5ncmlkTGdQdWxsLFxyXG4gICAgICAgIHhsUHVsbDogZmllbGQuZ3JpZFhsUHVsbFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BlcnR5LFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbGFiZWw6IHRoaXMudGl0bGVDYXNlUGlwZS50cmFuc2Zvcm0ocHJvcGVydHkpLFxyXG4gICAgICBjc3NDbGFzczogY2xhc3Nlc0dyaWRDb2x1bW5zLFxyXG4gICAgICAuLi5maWVsZFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmb3JtVmFsdWUodHlwZTogc3RyaW5nLCB2YWx1ZSwgZm9ybWF0KSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZSA9IHRoaXMuY3VycmVuY3lQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0IHx8ICdCUkwnLCAnc3ltYm9sJywgJzEuMi0yJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIHRyYW5zZm9ybWVkVmFsdWUgPSB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0IHx8ICdkZC9NTS95eXl5Jyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RhdGVUaW1lJzpcclxuICAgICAgICB0cmFuc2Zvcm1lZFZhbHVlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCB8fCAnZGQvTU0veXl5eSBISDptbTpzcycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgIHRyYW5zZm9ybWVkVmFsdWUgPSB0aGlzLmRlY2ltYWxQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGltZSc6XHJcbiAgICAgICAgdHJhbnNmb3JtZWRWYWx1ZSA9IHRoaXMudGltZVBpcGUudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQgfHwgJ0hIOm1tOnNzLmZmZmZmZicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=