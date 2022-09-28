import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean, convertToInt } from '../../utils/util';
import { PoProgressStatus } from './enums/po-progress-status.enum';
import * as i0 from "@angular/core";
const poProgressMaxValue = 100;
const poProgressMinValue = 0;
/**
 * @description
 *
 * Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.
 *
 * Este componente pode ser utilizado no *upload* de arquivos, uma atualização no sistema ou o processamento de uma imagem.
 */
export class PoProgressBaseComponent {
    constructor() {
        /**
         * @optional
         *
         * @description
         *
         * Status da barra de progresso que indicará visualmente ao usuário
         * o andamento, por exemplo, se a mesma foi concluída com sucesso.
         *
         * @default `PoProgressStatus.Default`
         */
        this.status = PoProgressStatus.Default;
        /**
         * @optional
         *
         * @description
         *
         * Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.
         *
         * Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.
         *
         * > Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `PoProgressStatus.Success`,
         * o ícone de cancelamento não será exibido.
         */
        this.cancel = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.
         *
         * > o ícone será exibido apenas se informar uma função neste evento e o status da barra de progresso for
         * `PoProgressStatus.Error`.
         */
        this.retry = new EventEmitter();
        this._value = 0;
    }
    /**
     * @optional
     *
     * @description
     *
     * Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.
     *
     * Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.
     *
     * > Caso esta propriedade e a `p-value` seja habilitada, a propriedade `p-value` será ignorada.
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
     *
     * Valor que representará o progresso.
     *
     * > Os valores aceitos são números inteiros de `0` à `100`.
     *
     * @default `0`
     */
    set value(value) {
        const integerValue = convertToInt(value, poProgressMinValue);
        const isProgressRangeValue = this.isProgressRangeValue(integerValue);
        this._value = isProgressRangeValue ? integerValue : poProgressMinValue;
    }
    get value() {
        return this._value;
    }
    isProgressRangeValue(value) {
        return value >= poProgressMinValue && value <= poProgressMaxValue;
    }
}
PoProgressBaseComponent.ɵfac = function PoProgressBaseComponent_Factory(t) { return new (t || PoProgressBaseComponent)(); };
PoProgressBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoProgressBaseComponent, inputs: { info: ["p-info", "info"], infoIcon: ["p-info-icon", "infoIcon"], status: ["p-status", "status"], text: ["p-text", "text"], indeterminate: ["p-indeterminate", "indeterminate"], value: ["p-value", "value"] }, outputs: { cancel: "p-cancel", retry: "p-retry" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoProgressBaseComponent, [{
        type: Directive
    }], null, { info: [{
            type: Input,
            args: ['p-info']
        }], infoIcon: [{
            type: Input,
            args: ['p-info-icon']
        }], status: [{
            type: Input,
            args: ['p-status']
        }], text: [{
            type: Input,
            args: ['p-text']
        }], cancel: [{
            type: Output,
            args: ['p-cancel']
        }], retry: [{
            type: Output,
            args: ['p-retry']
        }], indeterminate: [{
            type: Input,
            args: ['p-indeterminate']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcHJvZ3Jlc3MtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tcHJvZ3Jlc3MvcG8tcHJvZ3Jlc3MtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRW5FLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0FBQy9CLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBRTdCOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFzQkU7Ozs7Ozs7OztXQVNHO1FBQ2dCLFdBQU0sR0FBcUIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBV3ZFOzs7Ozs7Ozs7OztXQVdHO1FBQ2lCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRTs7Ozs7Ozs7O1dBU0c7UUFDZ0IsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3pELFdBQU0sR0FBWSxDQUFDLENBQUM7S0FnRDdCO0lBOUNDOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILElBQThCLGFBQWEsQ0FBQyxhQUFzQjtRQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUFzQixLQUFLLENBQUMsS0FBYTtRQUN2QyxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDN0QsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3hDLE9BQU8sS0FBSyxJQUFJLGtCQUFrQixJQUFJLEtBQUssSUFBSSxrQkFBa0IsQ0FBQztJQUNwRSxDQUFDOzs4RkFwSFUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxTQUFTO2dCQVNTLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQVdPLFFBQVE7a0JBQTdCLEtBQUs7bUJBQUMsYUFBYTtZQVlELE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQVNBLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQWNLLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVlDLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUztZQWtCYSxhQUFhO2tCQUExQyxLQUFLO21CQUFDLGlCQUFpQjtZQW1CRixLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiwgY29udmVydFRvSW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1Byb2dyZXNzU3RhdHVzIH0gZnJvbSAnLi9lbnVtcy9wby1wcm9ncmVzcy1zdGF0dXMuZW51bSc7XHJcblxyXG5jb25zdCBwb1Byb2dyZXNzTWF4VmFsdWUgPSAxMDA7XHJcbmNvbnN0IHBvUHJvZ3Jlc3NNaW5WYWx1ZSA9IDA7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgZGUgYmFycmEgZGUgcHJvZ3Jlc3NvIHF1ZSBwb3NzaWJpbGl0YSBleGliaXIgdmlzdWFsbWVudGUgbyBwcm9ncmVzc28vY2FycmVnYW1lbnRvIGRlIHVtYSB0YXJlZmEuXHJcbiAqXHJcbiAqIEVzdGUgY29tcG9uZW50ZSBwb2RlIHNlciB1dGlsaXphZG8gbm8gKnVwbG9hZCogZGUgYXJxdWl2b3MsIHVtYSBhdHVhbGl6YcOnw6NvIG5vIHNpc3RlbWEgb3UgbyBwcm9jZXNzYW1lbnRvIGRlIHVtYSBpbWFnZW0uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGNsYXNzIFBvUHJvZ3Jlc3NCYXNlQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSW5mb3JtYcOnw6NvIGFkaWNpb25hbCBxdWUgYXBhcmVjZXLDoSBhYmFpeG8gZGEgYmFycmEgZGUgcHJvZ3Jlc3NvIGFvIGxhZG8gZGlyZWl0by5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW5mbycpIGluZm8/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiDDjWNvbmUgcXVlIGFwYXJlY2Vyw6EgYW8gbGFkbyBkbyB0ZXh0byBkYSBwcm9wcmllZGFkZSBgcC1pbmZvYC5cclxuICAgKlxyXG4gICAqIEV4ZW1wbG86IGBwby1pY29uLW9rYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW5mby1pY29uJykgaW5mb0ljb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBTdGF0dXMgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvIHF1ZSBpbmRpY2Fyw6EgdmlzdWFsbWVudGUgYW8gdXN1w6FyaW9cclxuICAgKiBvIGFuZGFtZW50bywgcG9yIGV4ZW1wbG8sIHNlIGEgbWVzbWEgZm9pIGNvbmNsdcOtZGEgY29tIHN1Y2Vzc28uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgUG9Qcm9ncmVzc1N0YXR1cy5EZWZhdWx0YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdGF0dXMnKSBzdGF0dXM6IFBvUHJvZ3Jlc3NTdGF0dXMgPSBQb1Byb2dyZXNzU3RhdHVzLkRlZmF1bHQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBUZXh0byBwcmluY2lwYWwgcXVlIGFwYXJlY2Vyw6EgYWJhaXhvIGRhIGJhcnJhIGRlIHByb2dyZXNzbyBubyBsYWRvIGVzcXVlcmRvLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10ZXh0JykgdGV4dD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEV2ZW50byBxdWUgc2Vyw6EgZGlzcGFyYWRvIGFvIGNsaWNhciBubyDDrWNvbmUgZGUgY2FuY2VsYW1lbnRvIChcInhcIikgbmEgcGFydGUgaW5mZXJpb3IgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvLlxyXG4gICAqXHJcbiAgICogQW8gc2VyIGRpc3BhcmFkbywgYSBmdW7Dp8OjbyByZWNlYmVyw6EgY29tbyBwYXLDom1ldHJvIG8gc3RhdHVzIGF0dWFsIGRhIGJhcnJhIGRlIHByb2dyZXNzby5cclxuICAgKlxyXG4gICAqID4gU2UgbmVuaHVtYSBmdW7Dp8OjbyBmb3IgcGFzc2FkYSBwYXJhIG8gZXZlbnRvIG91IGEgYmFycmEgZGUgcHJvZ3Jlc3NvIGVzdGl2ZXIgY29tIG8gc3RhdHVzIGBQb1Byb2dyZXNzU3RhdHVzLlN1Y2Nlc3NgLFxyXG4gICAqIG8gw61jb25lIGRlIGNhbmNlbGFtZW50byBuw6NvIHNlcsOhIGV4aWJpZG8uXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1jYW5jZWwnKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIHF1ZSBzZXLDoSBkaXNwYXJhZG8gYW8gY2xpY2FyIG5vIMOtY29uZSBkZSB0ZW50YXIgbm92YW1lbnRlIG5hIHBhcnRlIGluZmVyaW9yIGRhIGJhcnJhIGRlIHByb2dyZXNzby5cclxuICAgKlxyXG4gICAqID4gbyDDrWNvbmUgc2Vyw6EgZXhpYmlkbyBhcGVuYXMgc2UgaW5mb3JtYXIgdW1hIGZ1bsOnw6NvIG5lc3RlIGV2ZW50byBlIG8gc3RhdHVzIGRhIGJhcnJhIGRlIHByb2dyZXNzbyBmb3JcclxuICAgKiBgUG9Qcm9ncmVzc1N0YXR1cy5FcnJvcmAuXHJcbiAgICovXHJcbiAgQE91dHB1dCgncC1yZXRyeScpIHJldHJ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfdmFsdWU/OiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogSGFiaWxpdGEgbyBtb2RvIGluZGV0ZXJtaW5hZG8gbmEgYmFycmEgZGUgcHJvZ3Jlc3NvLCBxdWUgbW9zdHJhIHVtYSBhbmltYcOnw6NvIGZpeGEgc2VtIHVtIHZhbG9yIGVzdGFiZWxlY2lkby5cclxuICAgKlxyXG4gICAqIEVzdGEgb3DDp8OjbyBwb2RlIHNlciB1dGlsaXphZGEgcXVhbmRvIG7Do28gc291YmVyIHF1YW50byB0ZW1wbyBsZXZhcsOhIHBhcmEgcXVlIHVtIHByb2Nlc3NvIHNlamEgY29uY2x1w61kby5cclxuICAgKlxyXG4gICAqID4gQ2FzbyBlc3RhIHByb3ByaWVkYWRlIGUgYSBgcC12YWx1ZWAgc2VqYSBoYWJpbGl0YWRhLCBhIHByb3ByaWVkYWRlIGBwLXZhbHVlYCBzZXLDoSBpZ25vcmFkYS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaW5kZXRlcm1pbmF0ZScpIHNldCBpbmRldGVybWluYXRlKGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBjb252ZXJ0VG9Cb29sZWFuKGluZGV0ZXJtaW5hdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGV0ZXJtaW5hdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBWYWxvciBxdWUgcmVwcmVzZW50YXLDoSBvIHByb2dyZXNzby5cclxuICAgKlxyXG4gICAqID4gT3MgdmFsb3JlcyBhY2VpdG9zIHPDo28gbsO6bWVyb3MgaW50ZWlyb3MgZGUgYDBgIMOgIGAxMDBgLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDBgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXZhbHVlJykgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGludGVnZXJWYWx1ZSA9IGNvbnZlcnRUb0ludCh2YWx1ZSwgcG9Qcm9ncmVzc01pblZhbHVlKTtcclxuICAgIGNvbnN0IGlzUHJvZ3Jlc3NSYW5nZVZhbHVlID0gdGhpcy5pc1Byb2dyZXNzUmFuZ2VWYWx1ZShpbnRlZ2VyVmFsdWUpO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gaXNQcm9ncmVzc1JhbmdlVmFsdWUgPyBpbnRlZ2VyVmFsdWUgOiBwb1Byb2dyZXNzTWluVmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJvZ3Jlc3NSYW5nZVZhbHVlKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSA+PSBwb1Byb2dyZXNzTWluVmFsdWUgJiYgdmFsdWUgPD0gcG9Qcm9ncmVzc01heFZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=