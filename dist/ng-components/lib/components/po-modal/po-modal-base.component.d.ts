import { EventEmitter } from '@angular/core';
import { PoModalAction } from './po-modal-action.interface';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-modal` é utilizado para incluir conteúdos rápidos e informativos.
 *
 * No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.
 *
 * Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `po-chart`,
 * `po-table` e os demais componentes do PO.
 *
 * No rodapé encontram-se os botões de ação primária e secundária, no qual permitem definir uma ação e um rótulo, bem como
 * definir um estado de carregando e / ou desabilitado e / ou definir o botão com o tipo *danger*. Também é possível utilizar
 * o componente [`PoModalFooter`](/documentation/po-modal-footer).
 *
 * > É possível fechar a modal através da tecla *ESC*, quando a propriedade `p-hide-close` não estiver habilitada.
 */
export declare class PoModalBaseComponent {
    /** Título da modal. */
    title: string;
    /**
     * Deve ser definido um objeto que implementa a interface `PoModalAction` contendo a label e a função da primeira ação.
     * Caso esta propriedade não seja definida ou esteja incompleta, automaticamente será adicionado um botão de ação com
     * a função de fechar a modal.
     */
    primaryAction?: PoModalAction;
    /** Deve ser definido um objeto que implementa a interface `PoModalAction` contendo a label e a função da segunda ação. */
    secondaryAction?: PoModalAction;
    language: any;
    literals: any;
    isHidden: boolean;
    onXClosed: EventEmitter<boolean>;
    private _hideClose?;
    private _size?;
    /**
     * Define o tamanho da modal.
     *
     * Valores válidos:
     *  - `sm` (pequeno)
     *  - `md` (médio)
     *  - `lg` (grande)
     *  - `xl` (extra grande)
     *  - `auto` (automático)
     *
     * > Quando informado `auto` a modal calculará automaticamente seu tamanho baseado em seu conteúdo.
     * Caso não seja informado um valor, a modal terá o tamanho definido como `md`.
     *
     * > Todas as opções de tamanho possuem uma largura máxima de **768px**.
     */
    set size(value: string);
    get size(): string;
    /**
     * Define o fechamento da modal ao clicar fora da mesma.
     * Informe o valor `true` para ativar o fechamento ao clicar fora da modal.
     */
    clickOut?: boolean;
    set setClickOut(value: boolean | string);
    /**
     * @optional
     *
     * @description
     *
     * Oculta o ícone de fechar do cabeçalho da modal.
     *
     * > Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla *ESC*.
     *
     * @default `false`
     */
    set hideClose(value: boolean);
    get hideClose(): boolean;
    constructor(poLanguageService: PoLanguageService);
    /** Função para fechar a modal. */
    close(xClosed?: boolean): void;
    /** Função para abrir a modal. */
    open(): void;
    validPrimaryAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoModalBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoModalBaseComponent, never, never, { "title": "p-title"; "primaryAction": "p-primary-action"; "secondaryAction": "p-secondary-action"; "size": "p-size"; "setClickOut": "p-click-out"; "hideClose": "p-hide-close"; }, {}, never, never, false>;
}
