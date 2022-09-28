import { Injectable } from '@angular/core';
import { PoSchemaUtil } from './../po-schema-util/po-schema-util.model';
import * as i0 from "@angular/core";
import * as i1 from "@po-ui/ng-storage";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que disponibiliza métodos que permite operar sobre as definições dos *schemas*.
 */
export class PoSchemaDefinitionService {
    constructor(poStorage) {
        this.poStorage = poStorage;
    }
    /**
     * Destrói a chave do *storage* que contém as definições dos *schemas*.
     *
     * > Para que não venham ocorrer erros em ações que dependam das definições dos *schemas*,
     * recomenda-se utilizar o método `prepare()` em seguida.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando a chave referente as definições dos *schemas* for destruída.
     */
    destroy() {
        return this.poStorage.remove(PoSchemaUtil.syncSchemasName);
    }
    /**
     * Busca um *schema* a partir do nome informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @returns {Promise<PoSyncSchema>} Promessa que é resolvida quando o *schema* for retornado.
     */
    get(schemaName) {
        return this.poStorage.getItemByField(PoSchemaUtil.syncSchemasName, 'name', schemaName);
    }
    /**
     * Retorna uma promessa com a lista dos *schemas* definidos.
     *
     * @returns {Promise<Array<PoSyncSchema>>} Promessa que é resolvida quando a lista dos *schemas* definidos for retornada.
     */
    getAll() {
        return this.poStorage.get(PoSchemaUtil.syncSchemasName);
    }
    /**
     * Salva uma lista de *schemas*.
     *
     * @param {Array<PoSyncSchema>} schemas Lista de schemas que serão salvos.
     * @returns {Promise<Array<PoSyncSchema>>} Promessa que é resolvida quando a lista de *schemas* for salva.
     */
    saveAll(schemas) {
        return this.poStorage.set(PoSchemaUtil.syncSchemasName, schemas);
    }
    /**
     * Atualiza um *schema* a partir do *schema name*.
     *
     * @param {PoSyncSchema} updatedSchema **Schema* que será atualizado.
     */
    async update(updatedSchema) {
        let schemas = await this.getAll();
        const replaceUpdatedSchema = schema => {
            if (schema.name === updatedSchema.name) {
                return updatedSchema;
            }
            else {
                return schema;
            }
        };
        schemas = schemas.map(replaceUpdatedSchema);
        return this.saveAll(schemas);
    }
}
PoSchemaDefinitionService.ɵfac = function PoSchemaDefinitionService_Factory(t) { return new (t || PoSchemaDefinitionService)(i0.ɵɵinject(i1.PoStorageService)); };
PoSchemaDefinitionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSchemaDefinitionService, factory: PoSchemaDefinitionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSchemaDefinitionService, [{
        type: Injectable
    }], function () { return [{ type: i1.PoStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2NoZW1hLWRlZmluaXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N5bmMvc3JjL2xpYi9zZXJ2aWNlcy9wby1zY2hlbWEvcG8tc2NoZW1hLWRlZmluaXRpb24vcG8tc2NoZW1hLWRlZmluaXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7O0FBR3hFOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5EOzs7Ozs7O09BT0c7SUFDSCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLFVBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsT0FBTyxDQUFDLE9BQTRCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBMkI7UUFDdEMsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEMsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksRUFBRTtnQkFDdEMsT0FBTyxhQUFhLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUM7YUFDZjtRQUNILENBQUMsQ0FBQztRQUVGLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2tHQTlEVSx5QkFBeUI7K0VBQXpCLHlCQUF5QixXQUF6Qix5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9TdG9yYWdlU2VydmljZSB9IGZyb20gJ0Bwby11aS9uZy1zdG9yYWdlJztcclxuXHJcbmltcG9ydCB7IFBvU2NoZW1hVXRpbCB9IGZyb20gJy4vLi4vcG8tc2NoZW1hLXV0aWwvcG8tc2NoZW1hLXV0aWwubW9kZWwnO1xyXG5pbXBvcnQgeyBQb1N5bmNTY2hlbWEgfSBmcm9tICcuLy4uLy4uL3BvLXN5bmMvaW50ZXJmYWNlcy9wby1zeW5jLXNjaGVtYS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gcXVlIGRpc3BvbmliaWxpemEgbcOpdG9kb3MgcXVlIHBlcm1pdGUgb3BlcmFyIHNvYnJlIGFzIGRlZmluacOnw7VlcyBkb3MgKnNjaGVtYXMqLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9TY2hlbWFEZWZpbml0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb1N0b3JhZ2U6IFBvU3RvcmFnZVNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3Ryw7NpIGEgY2hhdmUgZG8gKnN0b3JhZ2UqIHF1ZSBjb250w6ltIGFzIGRlZmluacOnw7VlcyBkb3MgKnNjaGVtYXMqLlxyXG4gICAqXHJcbiAgICogPiBQYXJhIHF1ZSBuw6NvIHZlbmhhbSBvY29ycmVyIGVycm9zIGVtIGHDp8O1ZXMgcXVlIGRlcGVuZGFtIGRhcyBkZWZpbmnDp8O1ZXMgZG9zICpzY2hlbWFzKixcclxuICAgKiByZWNvbWVuZGEtc2UgdXRpbGl6YXIgbyBtw6l0b2RvIGBwcmVwYXJlKClgIGVtIHNlZ3VpZGEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBxdWFuZG8gYSBjaGF2ZSByZWZlcmVudGUgYXMgZGVmaW5pw6fDtWVzIGRvcyAqc2NoZW1hcyogZm9yIGRlc3RydcOtZGEuXHJcbiAgICovXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnBvU3RvcmFnZS5yZW1vdmUoUG9TY2hlbWFVdGlsLnN5bmNTY2hlbWFzTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdXNjYSB1bSAqc2NoZW1hKiBhIHBhcnRpciBkbyBub21lIGluZm9ybWFkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWFOYW1lIE5vbWUgZG8gKnNjaGVtYSouXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8UG9TeW5jU2NoZW1hPn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBxdWFuZG8gbyAqc2NoZW1hKiBmb3IgcmV0b3JuYWRvLlxyXG4gICAqL1xyXG4gIGdldChzY2hlbWFOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFBvU3luY1NjaGVtYT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9TdG9yYWdlLmdldEl0ZW1CeUZpZWxkKFBvU2NoZW1hVXRpbC5zeW5jU2NoZW1hc05hbWUsICduYW1lJywgc2NoZW1hTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIHVtYSBwcm9tZXNzYSBjb20gYSBsaXN0YSBkb3MgKnNjaGVtYXMqIGRlZmluaWRvcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PFBvU3luY1NjaGVtYT4+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIHF1YW5kbyBhIGxpc3RhIGRvcyAqc2NoZW1hcyogZGVmaW5pZG9zIGZvciByZXRvcm5hZGEuXHJcbiAgICovXHJcbiAgZ2V0QWxsKCk6IFByb21pc2U8QXJyYXk8UG9TeW5jU2NoZW1hPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9TdG9yYWdlLmdldChQb1NjaGVtYVV0aWwuc3luY1NjaGVtYXNOYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhbHZhIHVtYSBsaXN0YSBkZSAqc2NoZW1hcyouXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PFBvU3luY1NjaGVtYT59IHNjaGVtYXMgTGlzdGEgZGUgc2NoZW1hcyBxdWUgc2Vyw6NvIHNhbHZvcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxQb1N5bmNTY2hlbWE+Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBxdWFuZG8gYSBsaXN0YSBkZSAqc2NoZW1hcyogZm9yIHNhbHZhLlxyXG4gICAqL1xyXG4gIHNhdmVBbGwoc2NoZW1hczogQXJyYXk8UG9TeW5jU2NoZW1hPik6IFByb21pc2U8QXJyYXk8UG9TeW5jU2NoZW1hPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9TdG9yYWdlLnNldChQb1NjaGVtYVV0aWwuc3luY1NjaGVtYXNOYW1lLCBzY2hlbWFzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dWFsaXphIHVtICpzY2hlbWEqIGEgcGFydGlyIGRvICpzY2hlbWEgbmFtZSouXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gdXBkYXRlZFNjaGVtYSAqKlNjaGVtYSogcXVlIHNlcsOhIGF0dWFsaXphZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgdXBkYXRlKHVwZGF0ZWRTY2hlbWE6IFBvU3luY1NjaGVtYSkge1xyXG4gICAgbGV0IHNjaGVtYXMgPSBhd2FpdCB0aGlzLmdldEFsbCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VVcGRhdGVkU2NoZW1hID0gc2NoZW1hID0+IHtcclxuICAgICAgaWYgKHNjaGVtYS5uYW1lID09PSB1cGRhdGVkU2NoZW1hLm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZFNjaGVtYTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc2NoZW1hO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNjaGVtYXMgPSBzY2hlbWFzLm1hcChyZXBsYWNlVXBkYXRlZFNjaGVtYSk7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlQWxsKHNjaGVtYXMpO1xyXG4gIH1cclxufVxyXG4iXX0=