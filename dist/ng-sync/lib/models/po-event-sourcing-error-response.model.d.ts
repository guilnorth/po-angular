import { PoEventSourcingOperation } from './../services/po-event-sourcing/enums/po-event-sourcing-operation.enum';
/**
 * @description
 *
 * Classe que define a resposta de erro para um item da fila de eventos que não foi enviado ao servidor por
 * alguma inconsistência.
 *
 * > Pode ser utilizada em casos onde um item da fila é enviado ao servidor com inconsistência nos dados, por exemplo
 * uma operação de *delete* ou *update* sem o `id` do objeto.
 */
export declare class PoEventSourcingErrorResponse {
    /** Mensagem de erro. */
    message: string;
    /** Operação que havia sido requisitada. */
    operation: PoEventSourcingOperation;
    constructor({ message, operation }: {
        message: any;
        operation: any;
    });
}
