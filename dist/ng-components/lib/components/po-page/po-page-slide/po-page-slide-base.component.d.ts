import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-page-slide` é utilizado para incluir conteúdos secundários
 * adicionando controles e navegações adicionais, mas mantendo o usuário na
 * página principal.
 *
 * Este componente é ativado a partir do método `#open()` e pode ser  encerrado
 * através do botão que encontra-se no cabeçalho do mesmo ou através do método
 * `#close()`.
 *
 * > Para o correto funcionamento do componente `po-page-slide`, deve ser
 * > importado o módulo `BrowserAnimationsModule` no módulo principal da sua
 * > aplicação.
 */
export declare class PoPageSlideBaseComponent {
    /**
     * @description
     *
     * Título da página.
     */
    title: string;
    /**
     * @description
     *
     * Subtítulo da página.
     */
    subtitle?: string;
    /**
     * @optional
     *
     * @description
     *
     * Oculta o botão de encerramento da página.
     *
     * Esta opção só é possível se a propriedade `p-click-out` estiver habilitada.
     *
     * @default `false`
     */
    hideClose?: boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define se permite o encerramento da página ao clicar fora da mesma.
     *
     * @default `false`
     */
    clickOut?: boolean;
    hidden: boolean;
    private _size;
    /**
     * @optional
     *
     * @description
     *
     * Define o tamanho da página.
     *
     * Valores válidos:
     *  - `sm` (pequeno)
     *  - `md` (médio)
     *  - `lg` (grande)
     *  - `xl` (extra-grande)
     *  - `auto` (automático)
     *
     * > Todas as opções de tamanho possuem uma largura máxima de **768px**.
     *
     * @default `md`
     */
    set size(value: string);
    get size(): string;
    /**
     * Ativa a visualização da página.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo
     * ser utilizado o `ViewChild` da seguinte forma:
     *
     * ```typescript
     * import { PoPageSlideComponent } from '@po/ng-components';
     *
     * ...
     *
     * @ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;
     *
     * public openPage() {
     *   this.pageSlide.open();
     * }
     * ```
     */
    open(): void;
    /**
     * Encerra a visualização da página.
     *
     * Para utilizá-la é necessário ter a instância do componente no DOM, podendo
     * ser utilizado o `ViewChild` da seguinte forma:
     *
     * ```typescript
     * import { PoPageSlideComponent } from '@po-ui/ng-components';
     *
     * ...
     *
     * @ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;
     *
     * public closePage() {
     *   this.pageSlide.close();
     * }
     * ```
     */
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageSlideBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageSlideBaseComponent, never, never, { "title": "p-title"; "subtitle": "p-subtitle"; "hideClose": "p-hide-close"; "clickOut": "p-click-out"; "size": "p-size"; }, {}, never, never, false>;
}
