import { EventEmitter } from '@angular/core';
import { PoStepComponent } from './po-step/po-step.component';
import { PoStepperItem } from './po-stepper-item.interface';
import { PoStepperOrientation } from './enums/po-stepper-orientation.enum';
import * as i0 from "@angular/core";
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
export declare class PoStepperBaseComponent {
    /**
     *
     * @optional
     *
     * @description
     *
     * <a id="stepIconsProperty"></a>
     *
     * Habilita a exibição de ícone ao invés de número no centro do círculo dos *steps*.
     *
     * @default `false`
     */
    stepIcons: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho dos *steps* em *pixels*, possibilitando um maior destaque.
     *
     * O valor informado deve ser entre `24` e `64`.
     *
     * > Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor *default*.
     *
     * @default `24`
     */
    stepSize: number;
    /** Ação que será executada quando o usuário mudar o passo do `po-stepper`. */
    onChangeStep: EventEmitter<number | PoStepComponent>;
    private _orientation?;
    private _sequential?;
    private _step;
    private _steps;
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
    set orientation(value: PoStepperOrientation);
    get orientation(): PoStepperOrientation;
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
    set step(step: number);
    get step(): number;
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
    set steps(steps: Array<PoStepperItem>);
    get steps(): Array<PoStepperItem>;
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
    set sequential(sequential: boolean);
    get sequential(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoStepperBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoStepperBaseComponent, never, never, { "stepIcons": "p-step-icons"; "stepSize": "p-step-size"; "orientation": "p-orientation"; "step": "p-step"; "steps": "p-steps"; "sequential": "p-sequential"; }, { "onChangeStep": "p-change-step"; }, never, never, false>;
}
