import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import { PoStepperOrientation } from './enums/po-stepper-orientation.enum';
import { PoStepperStatus } from './enums/po-stepper-status.enum';
import * as i0 from "@angular/core";
const poStepperOrientationDefault = PoStepperOrientation.Horizontal;
/**
 * @description
 *
 * O `po-stepper` permite que um processo seja dividido em passos para que o usuário o realize
 * mais facilmente.
 *
 * Existem duas formas de utilização:
 *
 * 1 - Usando o componente [**po-step**](/documentation/po-step) para renderizar e descrever os passos.
 *
 * 2 - Através da propriedade `p-steps` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
 * de renderização do que será exibido a cada *step* ativo.
 *
 * Através de suas propriedades, é possível definir se sua orientação será horizontal ou vertical,
 * além da possibilidade de aumentar o tamanho dos *steps*.
 *
 * Também é possível navegar entre os *steps* através do teclado utilizando a tecla *tab* e, para ativar o *step* em foco basta
 * pressionar a tecla *enter*. Além disso, é possível ativar a exibição de ícones no lugar de números nos *steps* através da
 * propriedade [`p-step-icons`](/documentation/po-stepper#stepIconsProperty).
 *
 * #### Utilizando os métodos do componente:
 *
 * Para acessar os métodos do componente é necessário ter a referência do mesmo.
 *
 * Por exemplo, utilizando um [**ViewChild**](https://angular.io/api/core/ViewChild):
 *
 * ```
 * @ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
 * ```
 *
 * E para acessar o método:
 *
 * ```
 * poStepperComponent.next();
 * ```
 *
 * #### Boas práticas
 *
 * - Evite `labels` extensos que quebram o layout do `po-stepper`, use `labels` diretos, curtos e intuitivos.
 * - Utilize apenas um `po-stepper` por página.
 */
export class PoStepperBaseComponent {
    constructor() {
        /** Ação que será executada quando o usuário mudar o passo do `po-stepper`. */
        this.onChangeStep = new EventEmitter();
        this._orientation = poStepperOrientationDefault;
        this._sequential = true;
        this._step = 1;
        this._steps = [];
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a orientação de exibição do `po-stepper`.
     *
     * > Veja os valores válidos no *enum* [PoStepperOrientation](documentation/po-stepper#stepperOrientation).
     *
     * @default `PoStepperOrientation.Horizontal`
     */
    set orientation(value) {
        this._orientation = Object.values(PoStepperOrientation).includes(value)
            ? value
            : poStepperOrientationDefault;
    }
    get orientation() {
        return this._orientation;
    }
    /**
     * @optional
     *
     * @description
     *
     * Controla o passo atual do `po-stepper`.
     *
     * > Ao utilizar esta propriedade e também utilizar o componente [**po-step**](/documentation/po-step),
     * o valor desta propriedade será ignorada permanecendo a definição do [**po-step**](/documentation/po-step).
     *
     * @default `1`
     */
    set step(step) {
        if (step >= 1 && step <= this.steps.length) {
            this._step = step;
            this._steps[this._step - 1].status = PoStepperStatus.Active;
        }
    }
    get step() {
        return this._step;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.
     *
     * > Ao utilizar esta propriedade e também utilizar o componente [**po-step**](/documentation/po-step),
     * o valor desta propriedade será ignorada permanecendo a definição do [**po-step**](/documentation/po-step).
     */
    set steps(steps) {
        this._steps = Array.isArray(steps) ? steps : [];
        this._steps.forEach(step => (step.status = PoStepperStatus.Default));
        this.step = 1;
    }
    get steps() {
        return this._steps;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define se o `po-stepper` será sequencial ou aleatório.
     *
     * > Ao utilizar o componente [**po-step**](/documentation/po-step), o valor desta propriedade sempre será verdadeiro.
     *
     * @default `true`
     */
    set sequential(sequential) {
        this._sequential = convertToBoolean(sequential);
    }
    get sequential() {
        return this._sequential;
    }
}
PoStepperBaseComponent.ɵfac = function PoStepperBaseComponent_Factory(t) { return new (t || PoStepperBaseComponent)(); };
PoStepperBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoStepperBaseComponent, inputs: { stepIcons: ["p-step-icons", "stepIcons"], stepSize: ["p-step-size", "stepSize"], orientation: ["p-orientation", "orientation"], step: ["p-step", "step"], steps: ["p-steps", "steps"], sequential: ["p-sequential", "sequential"] }, outputs: { onChangeStep: "p-change-step" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStepperBaseComponent, [{
        type: Directive
    }], null, { stepIcons: [{
            type: Input,
            args: ['p-step-icons']
        }], stepSize: [{
            type: Input,
            args: ['p-step-size']
        }], onChangeStep: [{
            type: Output,
            args: ['p-change-step']
        }], orientation: [{
            type: Input,
            args: ['p-orientation']
        }], step: [{
            type: Input,
            args: ['p-step']
        }], steps: [{
            type: Input,
            args: ['p-steps']
        }], sequential: [{
            type: Input,
            args: ['p-sequential']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RlcHBlci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1zdGVwcGVyL3BvLXN0ZXBwZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRWpFLE1BQU0sMkJBQTJCLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0FBRXBFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjtJQURuQztRQStCRSw4RUFBOEU7UUFDckQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUU3RSxpQkFBWSxHQUEwQiwyQkFBMkIsQ0FBQztRQUNsRSxnQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBeUIsRUFBRSxDQUFDO0tBb0YzQztJQWxGQzs7Ozs7Ozs7OztPQVVHO0lBQ0gsSUFBNEIsV0FBVyxDQUFDLEtBQTJCO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDNUUsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxJQUFxQixJQUFJLENBQUMsSUFBWTtRQUNwQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUEyQjtRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUEyQixVQUFVLENBQUMsVUFBbUI7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7OzRGQXZIVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFNBQVM7Z0JBY2UsU0FBUztrQkFBL0IsS0FBSzttQkFBQyxjQUFjO1lBZUMsUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxhQUFhO1lBR0ssWUFBWTtrQkFBcEMsTUFBTTttQkFBQyxlQUFlO1lBa0JLLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsZUFBZTtZQXNCRCxJQUFJO2tCQUF4QixLQUFLO21CQUFDLFFBQVE7WUFxQk8sS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTO1lBcUJXLFVBQVU7a0JBQXBDLEtBQUs7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb1N0ZXBDb21wb25lbnQgfSBmcm9tICcuL3BvLXN0ZXAvcG8tc3RlcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb1N0ZXBwZXJJdGVtIH0gZnJvbSAnLi9wby1zdGVwcGVyLWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TdGVwcGVyT3JpZW50YXRpb24gfSBmcm9tICcuL2VudW1zL3BvLXN0ZXBwZXItb3JpZW50YXRpb24uZW51bSc7XHJcbmltcG9ydCB7IFBvU3RlcHBlclN0YXR1cyB9IGZyb20gJy4vZW51bXMvcG8tc3RlcHBlci1zdGF0dXMuZW51bSc7XHJcblxyXG5jb25zdCBwb1N0ZXBwZXJPcmllbnRhdGlvbkRlZmF1bHQgPSBQb1N0ZXBwZXJPcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGBwby1zdGVwcGVyYCBwZXJtaXRlIHF1ZSB1bSBwcm9jZXNzbyBzZWphIGRpdmlkaWRvIGVtIHBhc3NvcyBwYXJhIHF1ZSBvIHVzdcOhcmlvIG8gcmVhbGl6ZVxyXG4gKiBtYWlzIGZhY2lsbWVudGUuXHJcbiAqXHJcbiAqIEV4aXN0ZW0gZHVhcyBmb3JtYXMgZGUgdXRpbGl6YcOnw6NvOlxyXG4gKlxyXG4gKiAxIC0gVXNhbmRvIG8gY29tcG9uZW50ZSBbKipwby1zdGVwKipdKC9kb2N1bWVudGF0aW9uL3BvLXN0ZXApIHBhcmEgcmVuZGVyaXphciBlIGRlc2NyZXZlciBvcyBwYXNzb3MuXHJcbiAqXHJcbiAqIDIgLSBBdHJhdsOpcyBkYSBwcm9wcmllZGFkZSBgcC1zdGVwc2AgcGFyYSBkZXNjcmV2ZXIgb3MgcGFzc29zIGRvIHByb2Nlc3NvLCBzZW5kbyByZXNwb25zYWJpbGlkYWRlIGRvIGRlc2Vudm9sdmVkb3IgbyBjb250cm9sZVxyXG4gKiBkZSByZW5kZXJpemHDp8OjbyBkbyBxdWUgc2Vyw6EgZXhpYmlkbyBhIGNhZGEgKnN0ZXAqIGF0aXZvLlxyXG4gKlxyXG4gKiBBdHJhdsOpcyBkZSBzdWFzIHByb3ByaWVkYWRlcywgw6kgcG9zc8OtdmVsIGRlZmluaXIgc2Ugc3VhIG9yaWVudGHDp8OjbyBzZXLDoSBob3Jpem9udGFsIG91IHZlcnRpY2FsLFxyXG4gKiBhbMOpbSBkYSBwb3NzaWJpbGlkYWRlIGRlIGF1bWVudGFyIG8gdGFtYW5obyBkb3MgKnN0ZXBzKi5cclxuICpcclxuICogVGFtYsOpbSDDqSBwb3Nzw612ZWwgbmF2ZWdhciBlbnRyZSBvcyAqc3RlcHMqIGF0cmF2w6lzIGRvIHRlY2xhZG8gdXRpbGl6YW5kbyBhIHRlY2xhICp0YWIqIGUsIHBhcmEgYXRpdmFyIG8gKnN0ZXAqIGVtIGZvY28gYmFzdGFcclxuICogcHJlc3Npb25hciBhIHRlY2xhICplbnRlciouIEFsw6ltIGRpc3NvLCDDqSBwb3Nzw612ZWwgYXRpdmFyIGEgZXhpYmnDp8OjbyBkZSDDrWNvbmVzIG5vIGx1Z2FyIGRlIG7Dum1lcm9zIG5vcyAqc3RlcHMqIGF0cmF2w6lzIGRhXHJcbiAqIHByb3ByaWVkYWRlIFtgcC1zdGVwLWljb25zYF0oL2RvY3VtZW50YXRpb24vcG8tc3RlcHBlciNzdGVwSWNvbnNQcm9wZXJ0eSkuXHJcbiAqXHJcbiAqICMjIyMgVXRpbGl6YW5kbyBvcyBtw6l0b2RvcyBkbyBjb21wb25lbnRlOlxyXG4gKlxyXG4gKiBQYXJhIGFjZXNzYXIgb3MgbcOpdG9kb3MgZG8gY29tcG9uZW50ZSDDqSBuZWNlc3PDoXJpbyB0ZXIgYSByZWZlcsOqbmNpYSBkbyBtZXNtby5cclxuICpcclxuICogUG9yIGV4ZW1wbG8sIHV0aWxpemFuZG8gdW0gWyoqVmlld0NoaWxkKipdKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9WaWV3Q2hpbGQpOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQFZpZXdDaGlsZChQb1N0ZXBwZXJDb21wb25lbnQpIHBvU3RlcHBlckNvbXBvbmVudDogUG9TdGVwcGVyQ29tcG9uZW50O1xyXG4gKiBgYGBcclxuICpcclxuICogRSBwYXJhIGFjZXNzYXIgbyBtw6l0b2RvOlxyXG4gKlxyXG4gKiBgYGBcclxuICogcG9TdGVwcGVyQ29tcG9uZW50Lm5leHQoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyMgQm9hcyBwcsOhdGljYXNcclxuICpcclxuICogLSBFdml0ZSBgbGFiZWxzYCBleHRlbnNvcyBxdWUgcXVlYnJhbSBvIGxheW91dCBkbyBgcG8tc3RlcHBlcmAsIHVzZSBgbGFiZWxzYCBkaXJldG9zLCBjdXJ0b3MgZSBpbnR1aXRpdm9zLlxyXG4gKiAtIFV0aWxpemUgYXBlbmFzIHVtIGBwby1zdGVwcGVyYCBwb3IgcMOhZ2luYS5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9TdGVwcGVyQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogPGEgaWQ9XCJzdGVwSWNvbnNQcm9wZXJ0eVwiPjwvYT5cclxuICAgKlxyXG4gICAqIEhhYmlsaXRhIGEgZXhpYmnDp8OjbyBkZSDDrWNvbmUgYW8gaW52w6lzIGRlIG7Dum1lcm8gbm8gY2VudHJvIGRvIGPDrXJjdWxvIGRvcyAqc3RlcHMqLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYGZhbHNlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zdGVwLWljb25zJykgc3RlcEljb25zOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gdGFtYW5obyBkb3MgKnN0ZXBzKiBlbSAqcGl4ZWxzKiwgcG9zc2liaWxpdGFuZG8gdW0gbWFpb3IgZGVzdGFxdWUuXHJcbiAgICpcclxuICAgKiBPIHZhbG9yIGluZm9ybWFkbyBkZXZlIHNlciBlbnRyZSBgMjRgIGUgYDY0YC5cclxuICAgKlxyXG4gICAqID4gVmFsb3JlcyBxdWUgbsOjbyBzZSBlbnF1YWRyYXJlbSBhIGVzdGEgcmVncmEgc2Vyw6NvIGlnbm9yYWRvcywgbWFudGVuZG8tc2UgbyB2YWxvciAqZGVmYXVsdCouXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgMjRgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXN0ZXAtc2l6ZScpIHN0ZXBTaXplOiBudW1iZXI7XHJcblxyXG4gIC8qKiBBw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBxdWFuZG8gbyB1c3XDoXJpbyBtdWRhciBvIHBhc3NvIGRvIGBwby1zdGVwcGVyYC4gKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZS1zdGVwJykgb25DaGFuZ2VTdGVwID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBQb1N0ZXBDb21wb25lbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX29yaWVudGF0aW9uPzogUG9TdGVwcGVyT3JpZW50YXRpb24gPSBwb1N0ZXBwZXJPcmllbnRhdGlvbkRlZmF1bHQ7XHJcbiAgcHJpdmF0ZSBfc2VxdWVudGlhbD86IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDE7XHJcbiAgcHJpdmF0ZSBfc3RlcHM6IEFycmF5PFBvU3RlcHBlckl0ZW0+ID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgYSBvcmllbnRhw6fDo28gZGUgZXhpYmnDp8OjbyBkbyBgcG8tc3RlcHBlcmAuXHJcbiAgICpcclxuICAgKiA+IFZlamEgb3MgdmFsb3JlcyB2w6FsaWRvcyBubyAqZW51bSogW1BvU3RlcHBlck9yaWVudGF0aW9uXShkb2N1bWVudGF0aW9uL3BvLXN0ZXBwZXIjc3RlcHBlck9yaWVudGF0aW9uKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBQb1N0ZXBwZXJPcmllbnRhdGlvbi5Ib3Jpem9udGFsYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcmllbnRhdGlvbicpIHNldCBvcmllbnRhdGlvbih2YWx1ZTogUG9TdGVwcGVyT3JpZW50YXRpb24pIHtcclxuICAgIHRoaXMuX29yaWVudGF0aW9uID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9TdGVwcGVyT3JpZW50YXRpb24pLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgICA/IHZhbHVlXHJcbiAgICAgIDogcG9TdGVwcGVyT3JpZW50YXRpb25EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9yaWVudGF0aW9uKCk6IFBvU3RlcHBlck9yaWVudGF0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmllbnRhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBDb250cm9sYSBvIHBhc3NvIGF0dWFsIGRvIGBwby1zdGVwcGVyYC5cclxuICAgKlxyXG4gICAqID4gQW8gdXRpbGl6YXIgZXN0YSBwcm9wcmllZGFkZSBlIHRhbWLDqW0gdXRpbGl6YXIgbyBjb21wb25lbnRlIFsqKnBvLXN0ZXAqKl0oL2RvY3VtZW50YXRpb24vcG8tc3RlcCksXHJcbiAgICogbyB2YWxvciBkZXN0YSBwcm9wcmllZGFkZSBzZXLDoSBpZ25vcmFkYSBwZXJtYW5lY2VuZG8gYSBkZWZpbmnDp8OjbyBkbyBbKipwby1zdGVwKipdKC9kb2N1bWVudGF0aW9uL3BvLXN0ZXApLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYDFgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXN0ZXAnKSBzZXQgc3RlcChzdGVwOiBudW1iZXIpIHtcclxuICAgIGlmIChzdGVwID49IDEgJiYgc3RlcCA8PSB0aGlzLnN0ZXBzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9zdGVwID0gc3RlcDtcclxuICAgICAgdGhpcy5fc3RlcHNbdGhpcy5fc3RlcCAtIDFdLnN0YXR1cyA9IFBvU3RlcHBlclN0YXR1cy5BY3RpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogTGlzdGEgZG9zIGl0ZW5zIGRvIHN0ZXBwZXIuIFNlIG8gdmFsb3IgZXN0aXZlciBpbmRlZmluaWRvIG91IGludsOhbGlkbywgc2Vyw6EgaW5pY2lhbGl6YWRvIGNvbW8gdW0gYXJyYXkgdmF6aW8uXHJcbiAgICpcclxuICAgKiA+IEFvIHV0aWxpemFyIGVzdGEgcHJvcHJpZWRhZGUgZSB0YW1iw6ltIHV0aWxpemFyIG8gY29tcG9uZW50ZSBbKipwby1zdGVwKipdKC9kb2N1bWVudGF0aW9uL3BvLXN0ZXApLFxyXG4gICAqIG8gdmFsb3IgZGVzdGEgcHJvcHJpZWRhZGUgc2Vyw6EgaWdub3JhZGEgcGVybWFuZWNlbmRvIGEgZGVmaW5pw6fDo28gZG8gWyoqcG8tc3RlcCoqXSgvZG9jdW1lbnRhdGlvbi9wby1zdGVwKS5cclxuICAgKi9cclxuICBASW5wdXQoJ3Atc3RlcHMnKSBzZXQgc3RlcHMoc3RlcHM6IEFycmF5PFBvU3RlcHBlckl0ZW0+KSB7XHJcbiAgICB0aGlzLl9zdGVwcyA9IEFycmF5LmlzQXJyYXkoc3RlcHMpID8gc3RlcHMgOiBbXTtcclxuICAgIHRoaXMuX3N0ZXBzLmZvckVhY2goc3RlcCA9PiAoc3RlcC5zdGF0dXMgPSBQb1N0ZXBwZXJTdGF0dXMuRGVmYXVsdCkpO1xyXG4gICAgdGhpcy5zdGVwID0gMTtcclxuICB9XHJcblxyXG4gIGdldCBzdGVwcygpOiBBcnJheTxQb1N0ZXBwZXJJdGVtPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RlcHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIHNlIG8gYHBvLXN0ZXBwZXJgIHNlcsOhIHNlcXVlbmNpYWwgb3UgYWxlYXTDs3Jpby5cclxuICAgKlxyXG4gICAqID4gQW8gdXRpbGl6YXIgbyBjb21wb25lbnRlIFsqKnBvLXN0ZXAqKl0oL2RvY3VtZW50YXRpb24vcG8tc3RlcCksIG8gdmFsb3IgZGVzdGEgcHJvcHJpZWRhZGUgc2VtcHJlIHNlcsOhIHZlcmRhZGVpcm8uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgdHJ1ZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2VxdWVudGlhbCcpIHNldCBzZXF1ZW50aWFsKHNlcXVlbnRpYWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NlcXVlbnRpYWwgPSBjb252ZXJ0VG9Cb29sZWFuKHNlcXVlbnRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlcXVlbnRpYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VxdWVudGlhbDtcclxuICB9XHJcbn1cclxuIl19