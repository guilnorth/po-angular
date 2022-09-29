import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * Este componente é de uso interno utilizado por componentes de entrada de dados com o objetivo de resetar as informações do model.
 *
 * Por padrão limpa o valor do campo e executa o método onChangePropagate, caso tenha a necessidade de tratar a função de limpar o campo,
 * deve implementar a interface PoClean.
 */
export declare abstract class PoCleanBaseComponent {
    /** Nesta propriedade deve-se informar o elementRef do campo de entrada que utilizará o po-clean. */
    inputRef: ElementRef;
    /** Valor que será atribuído ao campo quando for clicado no po-clean. */
    defaultValue?: string;
    /**
     * @optional
     *
     * @description
     *
     *
     * Evento disparado quando executada ação do po-clean.
     * Este evento deve ser usado para avisar para o componente que está usando o po-clean, que o botão foi disparado,
     * e provavelmente será preciso emitir o evento para atualizar o model.
     */
    changeEvent: EventEmitter<any>;
    clear(): void;
    showIcon(): boolean;
    abstract setInputValue(value: string): void;
    abstract getInputValue(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCleanBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoCleanBaseComponent, never, never, { "inputRef": "p-element-ref"; "defaultValue": "p-default-value"; }, { "changeEvent": "p-change-event"; }, never, never, false>;
}