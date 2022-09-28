import { PoStorageService } from '@po-ui/ng-storage';
import { PoSyncSchema } from './../../po-sync/interfaces/po-sync-schema.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que disponibiliza métodos que permite operar sobre as definições dos *schemas*.
 */
export declare class PoSchemaDefinitionService {
    private poStorage;
    constructor(poStorage: PoStorageService);
    /**
     * Destrói a chave do *storage* que contém as definições dos *schemas*.
     *
     * > Para que não venham ocorrer erros em ações que dependam das definições dos *schemas*,
     * recomenda-se utilizar o método `prepare()` em seguida.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando a chave referente as definições dos *schemas* for destruída.
     */
    destroy(): Promise<void>;
    /**
     * Busca um *schema* a partir do nome informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @returns {Promise<PoSyncSchema>} Promessa que é resolvida quando o *schema* for retornado.
     */
    get(schemaName: string): Promise<PoSyncSchema>;
    /**
     * Retorna uma promessa com a lista dos *schemas* definidos.
     *
     * @returns {Promise<Array<PoSyncSchema>>} Promessa que é resolvida quando a lista dos *schemas* definidos for retornada.
     */
    getAll(): Promise<Array<PoSyncSchema>>;
    /**
     * Salva uma lista de *schemas*.
     *
     * @param {Array<PoSyncSchema>} schemas Lista de schemas que serão salvos.
     * @returns {Promise<Array<PoSyncSchema>>} Promessa que é resolvida quando a lista de *schemas* for salva.
     */
    saveAll(schemas: Array<PoSyncSchema>): Promise<Array<PoSyncSchema>>;
    /**
     * Atualiza um *schema* a partir do *schema name*.
     *
     * @param {PoSyncSchema} updatedSchema **Schema* que será atualizado.
     */
    update(updatedSchema: PoSyncSchema): Promise<PoSyncSchema[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSchemaDefinitionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoSchemaDefinitionService>;
}
