import { PoButtonGroupItem } from './po-button-group-item.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-button-group` é formado por um conjunto de botões distribuídos horizontalmente.
 * Cada botão do grupo é tratado de forma individual, recebendo assim um rótulo, uma ação bem como se deverá estar habilitado ou não.
 *
 * Este componente além de servir como um agrupador de botões para ação, também permite que sejam utilizados
 * para seleções multiplas e únicas.
 *
 * O grupo de botões deve ser utilizado para organizar as ações de maneira uniforme e transmitir a ideia de que os botões fazem
 * parte de um mesmo contexto.
 *
 * #### Boas práticas
 *
 * - Evite usar o `po-button-group` com apenas 1 ação, para isso utilize o `po-button`.
 * - Procure utilizar no máximo 3 ações para cada `po-button-group`.
 *
 * > As recomendações do `po-button` também valem para o `po-button-group`.
 */
export declare class PoButtonGroupBaseComponent {
    /** Lista de botões. */
    buttons: Array<PoButtonGroupItem>;
    private _small?;
    private _toggle?;
    /**
     * @deprecated 16.x.x
     *
     * @optional
     *
     * @description
     *
     * **Deprecated 16.x.x**.
     *
     * > Por regras de acessibilidade o botão não terá mais um tamanho menor do que 44px e por isso a propriedade será depreciada.
     * > [Saiba mais](https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368)
     *
     * Torna o grupo de botões com tamanho minificado.
     *
     * @default `false`
     */
    set small(value: boolean);
    get small(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Define o modo de seleção de botões.
     *
     * > Veja os valores válidos no *enum* `PoButtonGroupToggle`.
     *
     * @default `none`
     */
    set toggle(value: string);
    get toggle(): string;
    onButtonClick(buttonClicked: PoButtonGroupItem, buttonIndex: number): void;
    private checkSelecteds;
    private deselectAllButtons;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoButtonGroupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoButtonGroupBaseComponent, never, never, { "buttons": "p-buttons"; "small": "p-small"; "toggle": "p-toggle"; }, {}, never, never, false>;
}