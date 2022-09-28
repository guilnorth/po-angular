import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-avatar` é um container para imagens em miniatura, possui um formato redondo e cinco opções de
 * tamanho, pode ser utilizado para mostrar a foto do perfil de um usuário, entre outras possibilidades.
 *
 * Além de poder ser utilizado separadamente, é possível usar o `po-avatar` juntamente com outros componentes e criar
 * layouts ricos e bem interessantes para os usuários, como por exemplo, uma lista de itens ou produtos.
 */
export declare class PoAvatarBaseComponent {
    /**
     * Fonte da imagem que pode ser um caminho local (`./assets/images/logo-black-small.png`)
     * ou um servidor externo (`https://po-ui.io/assets/images/logo-black-small.png`).
     */
    src: string;
    /**
     * @optional
     *
     * @description
     *
     * Indica como o navegador deve carregar a imagem.
     *
     * Valores válidos:
     *  - `eager` (a imagem é carregada imediatamente, independente de estar visível ou não)
     *  - `lazy` (a imagem só é carregada quando estiver próxima de ser renderizada)
     *
     * @default `eager`
     */
    loading: 'eager' | 'lazy';
    /** Evento disparado ao clicar na imagem do *avatar*. */
    click: EventEmitter<any>;
    private _size;
    /**
     * @optional
     *
     * @description
     *
     * Tamanho de exibição do componente.
     *
     * Valores válidos:
     *  - `xs` (24x24)
     *  - `sm` (32x32)
     *  - `md` (64x64)
     *  - `lg` (96x96)
     *  - `xl` (144x144)
     *
     * @default `md`
     */
    set size(value: string);
    get size(): string;
    get hasClickEvent(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoAvatarBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoAvatarBaseComponent, never, never, { "src": "p-src"; "loading": "p-loading"; "size": "p-size"; }, { "click": "p-click"; }, never, never, false>;
}
