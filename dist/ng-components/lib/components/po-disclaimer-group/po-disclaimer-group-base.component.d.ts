import { DoCheck, EventEmitter, IterableDiffers } from '@angular/core';
import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoDisclaimer } from '../po-disclaimer/po-disclaimer.interface';
import * as i0 from "@angular/core";
export declare const poDisclaimerGroupLiteralsDefault: {
    en: {
        removeAll: string;
    };
    es: {
        removeAll: string;
    };
    pt: {
        removeAll: string;
    };
    ru: {
        removeAll: string;
    };
};
/**
 * @description
 *
 * O componente `po-disclaimer-group` é recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa.
 *
 * À partir de dois *disclaimers* com o botão **fechar** habilitado, o componente renderiza de forma automática um novo e destacado
 * *disclaimer* que possibilita **remover todos**, mas que também pode ser desabilitado.
 *
 * Também é possível navegar entre os *disclaimers* através do teclado utilizando a tecla *tab* e, para remoção do *disclaimer* selecionado,
 * basta pressionar a tecla *enter*. Esta funcionalidade não se aplica caso a propriedade `hideClose` estiver habilitada.
 *
 * > Veja a integração destas funcionalidade no componente [po-page-list](/documentation/po-page-list).
 */
export declare class PoDisclaimerGroupBaseComponent implements DoCheck {
    /** Título do grupo de *disclaimers*. */
    title?: string;
    /**
     * @optional
     *
     * @description
     *
     * Função que será disparada quando a lista de *disclaimers* for modificada.
     */
    change: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Função que será disparada quando um *disclaimer* for removido da lista de *disclaimers* pelo usuário.
     *
     * Recebe como parâmetro um objeto conforme a interface `PoDisclaimerGroupRemoveAction`.
     */
    remove: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Função que será disparada quando todos os *disclaimers* forem removidos da lista de *disclaimers* pelo usuário,
     * utilizando o botão "remover todos".
     *
     * Recebe como parâmetro uma lista contendo todos os `disclaimers` removidos.
     */
    removeAll: EventEmitter<any>;
    literals: any;
    private _disclaimers;
    private _hideRemoveAll;
    private differ;
    private previousDisclaimers;
    /** Lista de *disclaimers*. */
    /**
     * @description
     *
     * Lista de *disclaimers*.
     *
     * Para que a lista de *disclaimers* seja atualizada dinamicamente deve-se passar uma nova referência do array de `PoDisclaimer`.
     *
     * Exemplo adicionando um *disclaimer* no array:
     *
     * ```
     * this.disclaimers = [...this.disclaimers, disclaimer];
     * ```
     *
     * ou
     *
     * ```
     * this.disclaimers = this.disclaimers.concat(disclaimer);
     * ```
     */
    set disclaimers(value: Array<PoDisclaimer>);
    get disclaimers(): Array<PoDisclaimer>;
    /**
     * @optional
     *
     * @description
     *
     * Oculta o botão para remover todos os *disclaimers* do grupo.
     *
     * > Por padrão, o mesmo é exibido à partir de dois ou mais *disclaimers* com a opção `hideClose` habilitada.
     *
     * @default `false`
     */
    set hideRemoveAll(value: boolean);
    get hideRemoveAll(): boolean;
    constructor(differs: IterableDiffers, languageService: PoLanguageService);
    ngDoCheck(): void;
    onCloseAction(disclaimer: any): void;
    isRemoveAll(): boolean;
    onKeyPress(event: any): void;
    removeAllItems(): void;
    private removeDisclaimer;
    private checkChanges;
    private checkDisclaimers;
    private disclaimersAreChanged;
    private emitChangeDisclaimers;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDisclaimerGroupBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoDisclaimerGroupBaseComponent, never, never, { "title": "p-title"; "disclaimers": "p-disclaimers"; "hideRemoveAll": "p-hide-remove-all"; }, { "change": "p-change"; "remove": "p-remove"; "removeAll": "p-remove-all"; }, never, never, false>;
}