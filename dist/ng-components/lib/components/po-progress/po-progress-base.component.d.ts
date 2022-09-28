import { EventEmitter } from '@angular/core';
import { PoProgressStatus } from './enums/po-progress-status.enum';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.
 *
 * Este componente pode ser utilizado no *upload* de arquivos, uma atualização no sistema ou o processamento de uma imagem.
 */
export declare class PoProgressBaseComponent {
    /**
     * @optional
     *
     * @description
     *
     * Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.
     */
    info?: string;
    /**
     * @optional
     *
     * @description
     *
     * Ícone que aparecerá ao lado do texto da propriedade `p-info`.
     *
     * Exemplo: `po-icon-ok`.
     */
    infoIcon?: string;
    /**
     * @optional
     *
     * @description
     *
     * Status da barra de progresso que indicará visualmente ao usuário
     * o andamento, por exemplo, se a mesma foi concluída com sucesso.
     *
     * @default `PoProgressStatus.Default`
     */
    status: PoProgressStatus;
    /**
     * @optional
     *
     * @description
     *
     * Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.
     */
    text?: string;
    /**
     * @optional
     *
     * @description
     *
     * Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.
     *
     * Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.
     *
     * > Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `PoProgressStatus.Success`,
     * o ícone de cancelamento não será exibido.
     */
    cancel: EventEmitter<any>;
    /**
     * @optional
     *
     * @description
     *
     * Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.
     *
     * > o ícone será exibido apenas se informar uma função neste evento e o status da barra de progresso for
     * `PoProgressStatus.Error`.
     */
    retry: EventEmitter<any>;
    private _indeterminate?;
    private _value?;
    /**
     * @optional
     *
     * @description
     *
     * Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.
     *
     * Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.
     *
     * > Caso esta propriedade e a `p-value` seja habilitada, a propriedade `p-value` será ignorada.
     *
     * @default `false`
     */
    set indeterminate(indeterminate: boolean);
    get indeterminate(): boolean;
    /**
     * @optional
     *
     * @description
     *
     * Valor que representará o progresso.
     *
     * > Os valores aceitos são números inteiros de `0` à `100`.
     *
     * @default `0`
     */
    set value(value: number);
    get value(): number;
    private isProgressRangeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoProgressBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoProgressBaseComponent, never, never, { "info": "p-info"; "infoIcon": "p-info-icon"; "status": "p-status"; "text": "p-text"; "indeterminate": "p-indeterminate"; "value": "p-value"; }, { "cancel": "p-cancel"; "retry": "p-retry"; }, never, never, false>;
}
