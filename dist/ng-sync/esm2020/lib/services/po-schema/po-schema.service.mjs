import { Injectable } from '@angular/core';
import { PoSchemaUtil } from './po-schema-util/po-schema-util.model';
import * as i0 from "@angular/core";
import * as i1 from "./po-schema-definition/po-schema-definition.service";
import * as i2 from "@po-ui/ng-storage";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que realiza as operações nos `schemas`.
 */
export class PoSchemaService {
    constructor(poSchemaDefinitionService, poStorage) {
        this.poSchemaDefinitionService = poSchemaDefinitionService;
        this.poStorage = poStorage;
    }
    /**
     * Retorna o id a partir de uma chave de um *schema*.
     *
     * @param {string} schemaKey Chave do *schema* em que será realizada a busca do id.
     */
    static getIdByRecordKey(schemaKey) {
        return schemaKey.split(':')[1];
    }
    /**
     * Retorna a chave do *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     * @param {boolean} isLocalKey Indica se é uma chave local.
     */
    static getRecordKey(schemaName, recordId, isLocalKey = false) {
        return isLocalKey ? `${schemaName}_local:${recordId}` : `${schemaName}:${recordId}`;
    }
    /**
     * Verifica se o dado informado é uma chave de um *schema*.
     *
     * @param {string} data Dado que será verificado se é uma chave de um *schema*.
     * @param {string} schemaName Nome do *schema*.
     */
    static isSchemaKey(data, schemaName) {
        return data ? data.startsWith(`${schemaName}:`) : false;
    }
    /**
     * Cria um novo registro para o *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* em que será criado o registro.
     * @param {object} newRecord Registro que será criado.
     */
    async create(schema, newRecord) {
        const id = PoSchemaUtil.getRecordId(newRecord, schema);
        return this.save(schema, newRecord, id);
    }
    /**
     * Destrói as chaves do *storage* que contém os registros dos *schemas*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando as chaves referentes aos *schemas* forem destruídas.
     */
    async destroySchemasRecords() {
        const schemas = await this.poSchemaDefinitionService.getAll();
        const storageKeys = await this.poStorage.keys();
        for (const key of storageKeys) {
            const schemaKey = schemas.find(schema => PoSchemaService.isSchemaKey(key, schema.name));
            if (schemaKey) {
                const id = PoSchemaService.getIdByRecordKey(key);
                await this.remove(schemaKey.name, id);
            }
        }
    }
    /**
     * Retorna o registro referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     */
    async get(schemaName, recordId) {
        const isLocalRecord = true;
        const localRecord = await this.getRecord(schemaName, recordId, isLocalRecord);
        const record = await this.getRecord(schemaName, recordId);
        return Object.assign(record, localRecord);
    }
    /**
     * Retorna todos os registros referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     */
    async getAll(schemaName) {
        const storageKeys = await this.poStorage.keys();
        const schemaRecords = [];
        for (const key of storageKeys) {
            if (PoSchemaService.isSchemaKey(key, schemaName)) {
                const id = PoSchemaService.getIdByRecordKey(key);
                schemaRecords.push(await this.get(schemaName, id));
            }
        }
        return schemaRecords;
    }
    /**
     * Aguarda a liberação do recurso limitado, posteriormente o envolve em um comportamento
     * de bloqueio e desbloqueio.
     *
     * @param {Function} limitedResource Função que será envolvida no comportamento de bloqueio e desbloqueio.
     */
    limitedCallWrap(limitedResource) {
        return this.poStorage.limitedCallWrap(limitedResource);
    }
    /**
     * Remove um registro de um *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     */
    async remove(schemaName, recordId) {
        const recordKey = PoSchemaService.getRecordKey(schemaName, recordId);
        const localRecordKey = PoSchemaService.getRecordKey(schemaName, recordId, true);
        await this.poStorage.remove(recordKey);
        await this.poStorage.remove(localRecordKey);
    }
    /**
     * Atualiza um registro de um *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* referente ao registro que será alterado.
     * @param {object} record Registro que será atualizado.
     * @param {any} recordId Id do registro que deseja ser alterado. Deve ser utilizado em casos em que o id foi alterado.
     */
    async update(schema, record, recordId) {
        const id = PoSchemaUtil.getRecordId(record, schema);
        if (recordId) {
            record = await this.updateRecordId(schema.name, record, recordId);
        }
        return this.save(schema, record, id);
    }
    /**
     * Atualiza todos os registros de um *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* referente aos registros que serão alterados.
     * @param {Array<object>} records Lista de registros que serão alterados.
     */
    async updateAll(schema, records) {
        for (const record of records) {
            await this.update(schema, record);
        }
    }
    async getRecord(schemaName, recordId, isLocalRecord = false) {
        return (await this.poStorage.get(PoSchemaService.getRecordKey(schemaName, recordId, isLocalRecord))) || {};
    }
    async save(schema, record, recordId) {
        const { serverRecord, localRecord } = PoSchemaUtil.separateSchemaFields(schema, record);
        const recordKey = PoSchemaService.getRecordKey(schema.name, recordId);
        await this.poStorage.set(recordKey, serverRecord);
        await this.saveLocalFields(schema.name, localRecord, recordId);
        return record;
    }
    async saveLocalFields(schemaName, localFields, recordId) {
        const containsLocalFields = Object.keys(localFields).length;
        if (containsLocalFields) {
            const localRecordKey = PoSchemaService.getRecordKey(schemaName, recordId, true);
            await this.poStorage.set(localRecordKey, localFields);
        }
    }
    async updateRecordId(schemaName, record, recordId) {
        const isLocalRecord = true;
        const localRecord = await this.getRecord(schemaName, recordId, isLocalRecord);
        await this.remove(schemaName, recordId);
        return Object.assign(record, localRecord);
    }
}
PoSchemaService.ɵfac = function PoSchemaService_Factory(t) { return new (t || PoSchemaService)(i0.ɵɵinject(i1.PoSchemaDefinitionService), i0.ɵɵinject(i2.PoStorageService)); };
PoSchemaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSchemaService, factory: PoSchemaService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSchemaService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoSchemaDefinitionService }, { type: i2.PoStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2NoZW1hLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvc2VydmljZXMvcG8tc2NoZW1hL3BvLXNjaGVtYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBR3JFOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQW9CLHlCQUFvRCxFQUFVLFNBQTJCO1FBQXpGLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7SUFFakg7Ozs7T0FJRztJQUNLLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUMvQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBa0IsRUFBRSxRQUFhLEVBQUUsYUFBc0IsS0FBSztRQUN4RixPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLFVBQVUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLFVBQWtCO1FBQ3pELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBb0IsRUFBRSxTQUFpQjtRQUNsRCxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxxQkFBcUI7UUFDekIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhELEtBQUssTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO1lBQzdCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV4RixJQUFJLFNBQVMsRUFBRTtnQkFDYixNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQWtCLEVBQUUsUUFBYTtRQUN6QyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDM0IsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUxRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFrQjtRQUM3QixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXpCLEtBQUssTUFBTSxHQUFHLElBQUksV0FBVyxFQUFFO1lBQzdCLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sRUFBRSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FBQyxlQUF5QjtRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBa0IsRUFBRSxRQUFhO1FBQzVDLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBb0IsRUFBRSxNQUFjLEVBQUUsUUFBYztRQUMvRCxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwRCxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQW9CLEVBQUUsT0FBc0I7UUFDMUQsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFBYSxHQUFHLEtBQUs7UUFDakUsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0csQ0FBQztJQUVPLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBb0IsRUFBRSxNQUFjLEVBQUUsUUFBYTtRQUNwRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxHQUFHLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEYsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRFLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUvRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxVQUFrQixFQUFFLFdBQW1CLEVBQUUsUUFBUTtRQUM3RSxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTVELElBQUksbUJBQW1CLEVBQUU7WUFDdkIsTUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVPLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztRQUUzQixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OEVBbkxVLGVBQWU7cUVBQWYsZUFBZSxXQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9TdG9yYWdlU2VydmljZSB9IGZyb20gJ0Bwby11aS9uZy1zdG9yYWdlJztcclxuXHJcbmltcG9ydCB7IFBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UgfSBmcm9tICcuL3BvLXNjaGVtYS1kZWZpbml0aW9uL3BvLXNjaGVtYS1kZWZpbml0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb1NjaGVtYVV0aWwgfSBmcm9tICcuL3BvLXNjaGVtYS11dGlsL3BvLXNjaGVtYS11dGlsLm1vZGVsJztcclxuaW1wb3J0IHsgUG9TeW5jU2NoZW1hIH0gZnJvbSAnLi4vcG8tc3luYy9pbnRlcmZhY2VzL3BvLXN5bmMtc2NoZW1hLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJ2acOnbyBxdWUgcmVhbGl6YSBhcyBvcGVyYcOnw7VlcyBub3MgYHNjaGVtYXNgLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9TY2hlbWFTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2U6IFBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UsIHByaXZhdGUgcG9TdG9yYWdlOiBQb1N0b3JhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIG8gaWQgYSBwYXJ0aXIgZGUgdW1hIGNoYXZlIGRlIHVtICpzY2hlbWEqLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtYUtleSBDaGF2ZSBkbyAqc2NoZW1hKiBlbSBxdWUgc2Vyw6EgcmVhbGl6YWRhIGEgYnVzY2EgZG8gaWQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SWRCeVJlY29yZEtleShzY2hlbWFLZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc2NoZW1hS2V5LnNwbGl0KCc6JylbMV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGEgY2hhdmUgZG8gKnNjaGVtYSogaW5mb3JtYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtYU5hbWUgTm9tZSBkbyAqc2NoZW1hKi5cclxuICAgKiBAcGFyYW0ge2FueX0gcmVjb3JkSWQgSWQgZG8gcmVnaXN0cm8uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0xvY2FsS2V5IEluZGljYSBzZSDDqSB1bWEgY2hhdmUgbG9jYWwuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmVjb3JkS2V5KHNjaGVtYU5hbWU6IHN0cmluZywgcmVjb3JkSWQ6IGFueSwgaXNMb2NhbEtleTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBpc0xvY2FsS2V5ID8gYCR7c2NoZW1hTmFtZX1fbG9jYWw6JHtyZWNvcmRJZH1gIDogYCR7c2NoZW1hTmFtZX06JHtyZWNvcmRJZH1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2UgbyBkYWRvIGluZm9ybWFkbyDDqSB1bWEgY2hhdmUgZGUgdW0gKnNjaGVtYSouXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBEYWRvIHF1ZSBzZXLDoSB2ZXJpZmljYWRvIHNlIMOpIHVtYSBjaGF2ZSBkZSB1bSAqc2NoZW1hKi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NoZW1hTmFtZSBOb21lIGRvICpzY2hlbWEqLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGlzU2NoZW1hS2V5KGRhdGE6IHN0cmluZywgc2NoZW1hTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSA/IGRhdGEuc3RhcnRzV2l0aChgJHtzY2hlbWFOYW1lfTpgKSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JpYSB1bSBub3ZvIHJlZ2lzdHJvIHBhcmEgbyAqc2NoZW1hKiBpbmZvcm1hZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gc2NoZW1hICoqU2NoZW1hKiBlbSBxdWUgc2Vyw6EgY3JpYWRvIG8gcmVnaXN0cm8uXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld1JlY29yZCBSZWdpc3RybyBxdWUgc2Vyw6EgY3JpYWRvLlxyXG4gICAqL1xyXG4gIGFzeW5jIGNyZWF0ZShzY2hlbWE6IFBvU3luY1NjaGVtYSwgbmV3UmVjb3JkOiBvYmplY3QpOiBQcm9taXNlPG9iamVjdD4ge1xyXG4gICAgY29uc3QgaWQgPSBQb1NjaGVtYVV0aWwuZ2V0UmVjb3JkSWQobmV3UmVjb3JkLCBzY2hlbWEpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZShzY2hlbWEsIG5ld1JlY29yZCwgaWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdHLDs2kgYXMgY2hhdmVzIGRvICpzdG9yYWdlKiBxdWUgY29udMOpbSBvcyByZWdpc3Ryb3MgZG9zICpzY2hlbWFzKi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIHF1YW5kbyBhcyBjaGF2ZXMgcmVmZXJlbnRlcyBhb3MgKnNjaGVtYXMqIGZvcmVtIGRlc3RydcOtZGFzLlxyXG4gICAqL1xyXG4gIGFzeW5jIGRlc3Ryb3lTY2hlbWFzUmVjb3JkcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHNjaGVtYXMgPSBhd2FpdCB0aGlzLnBvU2NoZW1hRGVmaW5pdGlvblNlcnZpY2UuZ2V0QWxsKCk7XHJcbiAgICBjb25zdCBzdG9yYWdlS2V5cyA9IGF3YWl0IHRoaXMucG9TdG9yYWdlLmtleXMoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBzdG9yYWdlS2V5cykge1xyXG4gICAgICBjb25zdCBzY2hlbWFLZXkgPSBzY2hlbWFzLmZpbmQoc2NoZW1hID0+IFBvU2NoZW1hU2VydmljZS5pc1NjaGVtYUtleShrZXksIHNjaGVtYS5uYW1lKSk7XHJcblxyXG4gICAgICBpZiAoc2NoZW1hS2V5KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBQb1NjaGVtYVNlcnZpY2UuZ2V0SWRCeVJlY29yZEtleShrZXkpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlKHNjaGVtYUtleS5uYW1lLCBpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgbyByZWdpc3RybyByZWZlcmVudGUgYW8gKnNjaGVtYSogaW5mb3JtYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtYU5hbWUgTm9tZSBkbyAqc2NoZW1hKi5cclxuICAgKiBAcGFyYW0ge2FueX0gcmVjb3JkSWQgSWQgZG8gcmVnaXN0cm8uXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0KHNjaGVtYU5hbWU6IHN0cmluZywgcmVjb3JkSWQ6IGFueSk6IFByb21pc2U8b2JqZWN0PiB7XHJcbiAgICBjb25zdCBpc0xvY2FsUmVjb3JkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGxvY2FsUmVjb3JkID0gYXdhaXQgdGhpcy5nZXRSZWNvcmQoc2NoZW1hTmFtZSwgcmVjb3JkSWQsIGlzTG9jYWxSZWNvcmQpO1xyXG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5nZXRSZWNvcmQoc2NoZW1hTmFtZSwgcmVjb3JkSWQpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlY29yZCwgbG9jYWxSZWNvcmQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSB0b2RvcyBvcyByZWdpc3Ryb3MgcmVmZXJlbnRlIGFvICpzY2hlbWEqIGluZm9ybWFkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWFOYW1lIE5vbWUgZG8gKnNjaGVtYSouXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0QWxsKHNjaGVtYU5hbWU6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8b2JqZWN0Pj4ge1xyXG4gICAgY29uc3Qgc3RvcmFnZUtleXMgPSBhd2FpdCB0aGlzLnBvU3RvcmFnZS5rZXlzKCk7XHJcbiAgICBjb25zdCBzY2hlbWFSZWNvcmRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcclxuICAgICAgaWYgKFBvU2NoZW1hU2VydmljZS5pc1NjaGVtYUtleShrZXksIHNjaGVtYU5hbWUpKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBQb1NjaGVtYVNlcnZpY2UuZ2V0SWRCeVJlY29yZEtleShrZXkpO1xyXG4gICAgICAgIHNjaGVtYVJlY29yZHMucHVzaChhd2FpdCB0aGlzLmdldChzY2hlbWFOYW1lLCBpZCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjaGVtYVJlY29yZHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZ3VhcmRhIGEgbGliZXJhw6fDo28gZG8gcmVjdXJzbyBsaW1pdGFkbywgcG9zdGVyaW9ybWVudGUgbyBlbnZvbHZlIGVtIHVtIGNvbXBvcnRhbWVudG9cclxuICAgKiBkZSBibG9xdWVpbyBlIGRlc2Jsb3F1ZWlvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGltaXRlZFJlc291cmNlIEZ1bsOnw6NvIHF1ZSBzZXLDoSBlbnZvbHZpZGEgbm8gY29tcG9ydGFtZW50byBkZSBibG9xdWVpbyBlIGRlc2Jsb3F1ZWlvLlxyXG4gICAqL1xyXG4gIGxpbWl0ZWRDYWxsV3JhcChsaW1pdGVkUmVzb3VyY2U6IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnBvU3RvcmFnZS5saW1pdGVkQ2FsbFdyYXAobGltaXRlZFJlc291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB1bSByZWdpc3RybyBkZSB1bSAqc2NoZW1hKiBpbmZvcm1hZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NoZW1hTmFtZSBOb21lIGRvICpzY2hlbWEqLlxyXG4gICAqIEBwYXJhbSB7YW55fSByZWNvcmRJZCBJZCBkbyByZWdpc3Ryby5cclxuICAgKi9cclxuICBhc3luYyByZW1vdmUoc2NoZW1hTmFtZTogc3RyaW5nLCByZWNvcmRJZDogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHJlY29yZEtleSA9IFBvU2NoZW1hU2VydmljZS5nZXRSZWNvcmRLZXkoc2NoZW1hTmFtZSwgcmVjb3JkSWQpO1xyXG4gICAgY29uc3QgbG9jYWxSZWNvcmRLZXkgPSBQb1NjaGVtYVNlcnZpY2UuZ2V0UmVjb3JkS2V5KHNjaGVtYU5hbWUsIHJlY29yZElkLCB0cnVlKTtcclxuXHJcbiAgICBhd2FpdCB0aGlzLnBvU3RvcmFnZS5yZW1vdmUocmVjb3JkS2V5KTtcclxuICAgIGF3YWl0IHRoaXMucG9TdG9yYWdlLnJlbW92ZShsb2NhbFJlY29yZEtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHVhbGl6YSB1bSByZWdpc3RybyBkZSB1bSAqc2NoZW1hKiBpbmZvcm1hZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gc2NoZW1hICoqU2NoZW1hKiByZWZlcmVudGUgYW8gcmVnaXN0cm8gcXVlIHNlcsOhIGFsdGVyYWRvLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVnaXN0cm8gcXVlIHNlcsOhIGF0dWFsaXphZG8uXHJcbiAgICogQHBhcmFtIHthbnl9IHJlY29yZElkIElkIGRvIHJlZ2lzdHJvIHF1ZSBkZXNlamEgc2VyIGFsdGVyYWRvLiBEZXZlIHNlciB1dGlsaXphZG8gZW0gY2Fzb3MgZW0gcXVlIG8gaWQgZm9pIGFsdGVyYWRvLlxyXG4gICAqL1xyXG4gIGFzeW5jIHVwZGF0ZShzY2hlbWE6IFBvU3luY1NjaGVtYSwgcmVjb3JkOiBvYmplY3QsIHJlY29yZElkPzogYW55KTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IGlkID0gUG9TY2hlbWFVdGlsLmdldFJlY29yZElkKHJlY29yZCwgc2NoZW1hKTtcclxuXHJcbiAgICBpZiAocmVjb3JkSWQpIHtcclxuICAgICAgcmVjb3JkID0gYXdhaXQgdGhpcy51cGRhdGVSZWNvcmRJZChzY2hlbWEubmFtZSwgcmVjb3JkLCByZWNvcmRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZShzY2hlbWEsIHJlY29yZCwgaWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR1YWxpemEgdG9kb3Mgb3MgcmVnaXN0cm9zIGRlIHVtICpzY2hlbWEqLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb1N5bmNTY2hlbWF9IHNjaGVtYSAqKlNjaGVtYSogcmVmZXJlbnRlIGFvcyByZWdpc3Ryb3MgcXVlIHNlcsOjbyBhbHRlcmFkb3MuXHJcbiAgICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSByZWNvcmRzIExpc3RhIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGFsdGVyYWRvcy5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVBbGwoc2NoZW1hOiBQb1N5bmNTY2hlbWEsIHJlY29yZHM6IEFycmF5PG9iamVjdD4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGUoc2NoZW1hLCByZWNvcmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBnZXRSZWNvcmQoc2NoZW1hTmFtZSwgcmVjb3JkSWQsIGlzTG9jYWxSZWNvcmQgPSBmYWxzZSk6IFByb21pc2U8b2JqZWN0PiB7XHJcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMucG9TdG9yYWdlLmdldChQb1NjaGVtYVNlcnZpY2UuZ2V0UmVjb3JkS2V5KHNjaGVtYU5hbWUsIHJlY29yZElkLCBpc0xvY2FsUmVjb3JkKSkpIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzYXZlKHNjaGVtYTogUG9TeW5jU2NoZW1hLCByZWNvcmQ6IG9iamVjdCwgcmVjb3JkSWQ6IGFueSkge1xyXG4gICAgY29uc3QgeyBzZXJ2ZXJSZWNvcmQsIGxvY2FsUmVjb3JkIH0gPSBQb1NjaGVtYVV0aWwuc2VwYXJhdGVTY2hlbWFGaWVsZHMoc2NoZW1hLCByZWNvcmQpO1xyXG4gICAgY29uc3QgcmVjb3JkS2V5ID0gUG9TY2hlbWFTZXJ2aWNlLmdldFJlY29yZEtleShzY2hlbWEubmFtZSwgcmVjb3JkSWQpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMucG9TdG9yYWdlLnNldChyZWNvcmRLZXksIHNlcnZlclJlY29yZCk7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmVMb2NhbEZpZWxkcyhzY2hlbWEubmFtZSwgbG9jYWxSZWNvcmQsIHJlY29yZElkKTtcclxuXHJcbiAgICByZXR1cm4gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzYXZlTG9jYWxGaWVsZHMoc2NoZW1hTmFtZTogc3RyaW5nLCBsb2NhbEZpZWxkczogb2JqZWN0LCByZWNvcmRJZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY29udGFpbnNMb2NhbEZpZWxkcyA9IE9iamVjdC5rZXlzKGxvY2FsRmllbGRzKS5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5zTG9jYWxGaWVsZHMpIHtcclxuICAgICAgY29uc3QgbG9jYWxSZWNvcmRLZXkgPSBQb1NjaGVtYVNlcnZpY2UuZ2V0UmVjb3JkS2V5KHNjaGVtYU5hbWUsIHJlY29yZElkLCB0cnVlKTtcclxuICAgICAgYXdhaXQgdGhpcy5wb1N0b3JhZ2Uuc2V0KGxvY2FsUmVjb3JkS2V5LCBsb2NhbEZpZWxkcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHVwZGF0ZVJlY29yZElkKHNjaGVtYU5hbWUsIHJlY29yZCwgcmVjb3JkSWQpIHtcclxuICAgIGNvbnN0IGlzTG9jYWxSZWNvcmQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGxvY2FsUmVjb3JkID0gYXdhaXQgdGhpcy5nZXRSZWNvcmQoc2NoZW1hTmFtZSwgcmVjb3JkSWQsIGlzTG9jYWxSZWNvcmQpO1xyXG4gICAgYXdhaXQgdGhpcy5yZW1vdmUoc2NoZW1hTmFtZSwgcmVjb3JkSWQpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJlY29yZCwgbG9jYWxSZWNvcmQpO1xyXG4gIH1cclxufVxyXG4iXX0=