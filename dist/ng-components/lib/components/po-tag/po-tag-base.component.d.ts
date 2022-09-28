import { EventEmitter, TemplateRef } from '@angular/core';
import { PoTagOrientation } from './enums/po-tag-orientation.enum';
import { PoTagType } from './enums/po-tag-type.enum';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Este componente permite exibir um valor em forma de um marcador colorido, sendo possível definir uma legenda e realizar customizações
 * na cor, iconografia e tipo.
 *
 * Além disso, é possível definir uma ação que será executada tanto ao *click* quanto através das teclas *enter/space* enquanto navega
 * utilizando a tecla *tab*.
 *
 * Seu uso é recomendado para informações que necessitem de destaque em forma de marcação.
 */
export declare class PoTagBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Define uma legenda que será exibida acima ou ao lado da *tag*, de acordo com a `p-orientation`.
     */
    label?: string;
    /** Texto da tag. */
    value: string;
    /**
     * @optional
     *
     * @description
     *
     * Ação que será executada ao clicar sobre o `po-tag` e que receberá como parâmetro um objeto contendo o seu valor e tipo.
     */
    click: EventEmitter<any>;
    readonly poTagOrientation: typeof PoTagOrientation;
    customColor: any;
    private _color?;
    private _icon?;
    private _inverse?;
    private _orientation?;
    private _type?;
    /**
     * @optional
     *
     * @description
     *
     * Determina a cor da tag. As maneiras de customizar as cores são:
     * - Hexadeximal, por exemplo `#c64840`;
     * - RGB, como `rgb(0, 0, 165)`;
     * - O nome da cor, por exemplo `blue`;
     * - Usando uma das cores do tema do PO:
     * Valores válidos:
     *  - <span class="dot po-color-01"></span> `color-01`
     *  - <span class="dot po-color-02"></span> `color-02`
     *  - <span class="dot po-color-03"></span> `color-03`
     *  - <span class="dot po-color-04"></span> `color-04`
     *  - <span class="dot po-color-05"></span> `color-05`
     *  - <span class="dot po-color-06"></span> `color-06`
     *  - <span class="dot po-color-07"></span> `color-07`
     *  - <span class="dot po-color-08"></span> `color-08`
     *  - <span class="dot po-color-09"></span> `color-09`
     *  - <span class="dot po-color-10"></span> `color-10`
     *  - <span class="dot po-color-11"></span> `color-11`
     *  - <span class="dot po-color-12"></span> `color-12`
     *
     * - Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.
     *
     * > **Atenção:** A propriedade `p-type` sobrepõe esta definição.
     */
    set color(value: string);
    get color(): string;
    /**
     * @optional
     *
     * @description
     *
     * Define ou ativa um ícone que será exibido ao lado do valor da *tag*.
     *
     * Quando `p-type` estiver definida, basta informar um valor igual a `true` para que o ícone seja exibido conforme descrições abaixo:
     * - <span class="po-icon po-icon-ok"></span> - `success`
     * - <span class="po-icon po-icon-warning"></span> - `warning`
     * - <span class="po-icon po-icon-close"></span> - `danger`
     * - <span class="po-icon po-icon-info"></span> - `info`
     *
     * Também É possível usar qualquer um dos ícones da [Biblioteca de ícones](/guides/icons). conforme exemplo abaixo:
     * ```
     * <po-tag p-icon="po-icon-user" p-value="PO Tag"></po-tag>
     * ```
     * como também utilizar outras fontes de ícones, por exemplo a biblioteca *Font Awesome*, da seguinte forma:
     * ```
     * <po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
     * ```
     * Outra opção seria a customização do ícone através do `TemplateRef`, conforme exemplo abaixo:
     * ```
     * <po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>
     *
     * <ng-template #template>
     *  <ion-icon style="font-size: inherit" name="heart"></ion-icon>
     * </ng-template>
     * ```
     * > Para o ícone enquadrar corretamente, deve-se utilizar `font-size: inherit` caso o ícone utilizado não aplique-o.
     *
     * @default `false`
     */
    set icon(value: boolean | string | TemplateRef<void>);
    get icon(): boolean | string | TemplateRef<void>;
    /**
     * @optional
     *
     * @description
     *
     * Ativa a inversão de cores configuradas no componente, possibilitando uma visualização de status ativo e inativo.
     *
     * > A cor do texto, do ícone e da borda ficam com a cor utilizada na propriedade `p-color` ou a cor correspondente ao `p-type`,
     * e a cor do fundo fica branca.
     *
     * @default `false`
     */
    set inverse(value: boolean);
    get inverse(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define o *layout* de exibição.
     *
     * @default `vertical`
     */
    set orientation(value: PoTagOrientation);
    get orientation(): PoTagOrientation;
    /**
     * @optional
     *
     * @description
     *
     * Define o tipo da *tag*.
     *
     * Valores válidos:
     *  - `success`: cor verde utilizada para simbolizar sucesso ou êxito.
     *  - `warning`: cor amarela que representa aviso ou advertência.
     *  - `danger`: cor vermelha para erro ou aviso crítico.
     *  - `info`: cor cinza escuro que caracteriza conteúdo informativo.
     *
     * > Quando esta propriedade for definida, irá sobrepor a definição de `p-color` e `p-icon` somente será exibido caso seja `true`.
     *
     * @default `info`
     */
    set type(value: PoTagType);
    get type(): PoTagType;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTagBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoTagBaseComponent, never, never, { "label": "p-label"; "value": "p-value"; "color": "p-color"; "icon": "p-icon"; "inverse": "p-inverse"; "orientation": "p-orientation"; "type": "p-type"; }, { "click": "p-click"; }, never, never, false>;
}
