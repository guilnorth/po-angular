import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { PoFieldModel } from '../po-field.model';
import { PoSwitchLabelPosition } from './po-switch-label-position.enum';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoFieldModel
 *
 * @description
 *
 * O componente `po-switch` é um [checkbox](/documentation/po-checkbox-group) mais intuitivo, pois faz analogia a um interruptor.
 * Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade específica.
 *
 * Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.
 *
 * O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
 * portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreensão do usuário.
 *
 * > O componente não altera o valor incial informado no *model*, portanto indica-se inicializa-lo caso ter necessidade.
 *
 * #### Boas práticas
 *
 * - Evite `labels` extensos que quebram o layout do `po-switch`, use `labels` diretos, curtos e intuitivos.
 *
 * #### Acessibilidade tratada no componente
 *
 * Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:
 *
 * - Quando em foco, o switch é ativado usando a tecla de Espaço. [W3C WAI-ARIA 3.5 Switch - Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19)
 * - A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. [WCAG 2.4.12: Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced)
 *
 * @example
 *
 * <example name="po-switch-basic" title="PO Switch Basic">
 *   <file name="sample-po-switch-basic/sample-po-switch-basic.component.html"> </file>
 *   <file name="sample-po-switch-basic/sample-po-switch-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-switch-labs" title="PO Switch Labs">
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.html"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.ts"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.e2e-spec.ts"> </file>
 *   <file name="sample-po-switch-labs/sample-po-switch-labs.component.po.ts"> </file>
 * </example>
 *
 * <example name="po-switch-order" title="PO Switch - Order Summary">
 *   <file name="sample-po-switch-order/sample-po-switch-order.component.html"> </file>
 *   <file name="sample-po-switch-order/sample-po-switch-order.component.ts"> </file>
 * </example>
 *
 * <example name="po-switch-order-reactive-form" title="PO Switch - Order Summary Reactive Form">
 *   <file name="sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"> </file>
 *   <file name="sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"> </file>
 * </example>
 */
export declare class PoSwitchComponent extends PoFieldModel<boolean> {
    private changeDetector;
    switchContainer: ElementRef;
    value: boolean;
    private _labelOff;
    private _labelOn;
    private _labelPosition;
    /**
     * @optional
     *
     * @description
     *
     * Posição de exibição do rótulo.
     *
     * > Por padrão exibe à direita.
     */
    set labelPosition(position: PoSwitchLabelPosition);
    get labelPosition(): PoSwitchLabelPosition;
    /**
     * Texto exibido quando o valor do componente for `false`.
     *
     * @default `false`
     */
    set labelOff(label: string);
    get labelOff(): string;
    /**
     * Texto exibido quando o valor do componente for `true`.
     *
     * @default `true`
     */
    set labelOn(label: string);
    get labelOn(): string;
    constructor(changeDetector: ChangeDetectorRef);
    /**
     * Função que atribui foco ao componente.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:
     *
     * ```
     * import { PoSwitchComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;
     *
     * focusSwitch() {
     *   this.switch.focus();
     * }
     * ```
     */
    focus(): void;
    onBlur(): void;
    getLabelPosition(): "left" | "right";
    onKeyDown(event: any): void;
    changeValue(value: any): void;
    eventClick(): void;
    onWriteValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoSwitchComponent, "po-switch", never, { "labelPosition": "p-label-position"; "labelOff": "p-label-off"; "labelOn": "p-label-on"; }, {}, never, never, false>;
}
