import { Component, Input, TemplateRef } from '@angular/core';

import { PoStepperStatus } from '../enums/po-stepper-status.enum';

const poMediumStepSize = 32;
const poLargeStepSize = 48;

/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por exibir os círculos dos *steps*.
 */
@Component({
  selector: 'po-stepper-circle',
  templateUrl: './po-stepper-circle.component.html',
  standalone: false
})
export class PoStepperCircleComponent {
  // Alinhamento do *step*.
  @Input('p-align-center') alignCenter: boolean;

  // Conteúdo que irá aparecer no círculo do *step*.
  @Input('p-content') content: any;

  // Ícone para o status Active do *step*.
  @Input('p-step-icon-active') iconActive?: string | TemplateRef<void>;

  // Ícone para o status Done do *step*.
  @Input('p-step-icon-done') iconDone?: string | TemplateRef<void>;

  // Ícone para o status default do *step*.
  @Input('p-icon-default') iconDefault?: string | TemplateRef<void>;

  // Define se serão exibidos ícones no lugar de números nos steps.
  @Input('p-icons') icons: boolean;

  // Tamanho do *step-circle*.
  @Input('p-size') size: number;

  // Status do *step*.
  @Input('p-status') status: string;

  get isActive(): boolean {
    return this.status === PoStepperStatus.Active;
  }

  get isDefault(): boolean {
    return this.status === PoStepperStatus.Default;
  }

  get isDisabled(): boolean {
    return this.status === PoStepperStatus.Disabled;
  }

  get isDone(): boolean {
    return this.status === PoStepperStatus.Done;
  }

  get isError(): boolean {
    return this.status === PoStepperStatus.Error;
  }

  get isLargeStep(): boolean {
    return this.size >= poLargeStepSize;
  }

  get isMediumStep(): boolean {
    return this.size >= poMediumStepSize && !this.isLargeStep;
  }
}
