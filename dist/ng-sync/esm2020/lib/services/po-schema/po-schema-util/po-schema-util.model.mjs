/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço utilitário para operações no PoSyncSchema.
 */
export class PoSchemaUtil {
    /**
     * Verica se existem campos locais no *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     *
     * @returns {boolean} Valor do tipo *boolean* que indica se existem campos locais no *schema* informado.
     */
    static containsLocalFields(schema) {
        if (schema.fields) {
            return !!schema.fields.find(field => typeof field === 'object' && field.local);
        }
    }
    /**
     * Retorna o valor atual do `lastSync` para determinado *schema*.
     *
     * @param {Array<PoSyncSchema>} storageSchemas Lista de *schemas* a serem pesquisados.
     * @param {string} schemaName Nome do *schema* que se deseja ler o lastSync.
     *
     * @returns {string} Retorna uma *string* com o valor da última sincronização.
     */
    static getLastSync(storageSchemas, schemaName) {
        if (storageSchemas) {
            const schemaFound = storageSchemas.find(schema => schema.name === schemaName);
            return schemaFound && schemaFound.lastSync ? schemaFound.lastSync : PoSchemaUtil.defaultLastSync;
        }
        return PoSchemaUtil.defaultLastSync;
    }
    /**
     * Retorna a lista de campos locais definidos no *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getLocalFieldNames(schema) {
        if (schema.fields) {
            return schema.fields.reduce((fieldsAccumulator, currentField) => {
                if (typeof currentField === 'object' && currentField.local) {
                    fieldsAccumulator.push(currentField.name);
                }
                return fieldsAccumulator;
            }, []);
        }
    }
    /**
     * Retorna a lista de campos não locais definidos no *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getNonLocalFieldNames(schema) {
        if (schema.fields) {
            return schema.fields.reduce((fieldsAccumulator, currentField) => {
                if (typeof currentField === 'string' || !currentField.local) {
                    fieldsAccumulator.push(typeof currentField === 'string' ? currentField : currentField.name);
                }
                return fieldsAccumulator;
            }, []);
        }
    }
    /**
     * Retorna o `id` referente ao registro do *schema* informado.
     *
     * @param {object} record Registro que será buscado o id.
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     */
    static getRecordId(record, schema) {
        return record[schema.idField] || record[PoSchemaUtil.syncInternalIdFieldName];
    }
    /**
     * Retorna a url correspondente do `PoSyncSchema` dependendo do tipo da requisição `PoRequestType`.
     *
     * @param {PoSyncSchema} schema **Schema* a ser processado.
     * @param {PoRequestType} requestType Tipo da requisição.
     */
    static getUrl(schema, requestType) {
        return schema[`${requestType}UrlApi`];
    }
    /**
     * Compara se dois objetos são iguais baseado na lista de campos.
     *
     * @param {Array<string>} fields Lista de campos a serem considerados na comparação.
     * @param {any} model1 Objeto 1 a ser comparado.
     * @param {any} model2 Objeto 2 a ser comparado.
     */
    static isModelsEqual(fields, model1, model2) {
        if (fields) {
            return fields.every(field => JSON.stringify(model1[field]) === JSON.stringify(model2[field]));
        }
    }
    /**
     * Retorna uma lista com dois objetos referentes ao registro informado.
     * O primeiro é o registro com os campos que vão para o servidor e o segundo é com os campos locais.
     *
     * @param {PoSyncSchema} schema **Schema* do registro.
     * @param {object} record Registro que será realizada a separação dos campos locais e do servidor.
     */
    static separateSchemaFields(schema, record) {
        const localFields = PoSchemaUtil.getLocalFieldNames(schema);
        const localRecord = {};
        const serverRecord = {};
        Object.keys(record).forEach(field => {
            if (localFields.includes(field)) {
                localRecord[field] = record[field];
            }
            else {
                serverRecord[field] = record[field];
            }
        });
        return { serverRecord, localRecord };
    }
}
/** Valor `default` para o campo `lastSync`. */
PoSchemaUtil.defaultLastSync = new Date(-8640000000000000).toISOString();
/** Nome da chave do identificador interno do sync. */
PoSchemaUtil.syncInternalIdFieldName = 'SyncInternalId';
/** Nome da chave no `storage` para os Schemas. */
PoSchemaUtil.syncSchemasName = 'SyncSchemas';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc2NoZW1hLXV0aWwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvc2VydmljZXMvcG8tc2NoZW1hL3BvLXNjaGVtYS11dGlsL3BvLXNjaGVtYS11dGlsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBVXZCOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFvQjtRQUNwRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQW1DLEVBQUUsVUFBa0I7UUFDL0UsSUFBSSxjQUFjLEVBQUU7WUFDbEIsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUM7WUFDOUUsT0FBTyxXQUFXLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztTQUNsRztRQUNELE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFvQjtRQUNuRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGlCQUFnQyxFQUFFLFlBQXlDLEVBQUUsRUFBRTtnQkFDMUcsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDMUQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0M7Z0JBQ0QsT0FBTyxpQkFBaUIsQ0FBQztZQUMzQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQW9CO1FBQ3RELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWdDLEVBQUUsWUFBeUMsRUFBRSxFQUFFO2dCQUMxRyxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7b0JBQzNELGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3RjtnQkFDRCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFjLEVBQUUsTUFBb0I7UUFDNUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQW9CLEVBQUUsV0FBMEI7UUFDbkUsT0FBTyxNQUFNLENBQUMsR0FBRyxXQUFXLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQXFCLEVBQUUsTUFBVyxFQUFFLE1BQVc7UUFDekUsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsb0JBQW9CLENBQ2hDLE1BQW9CLEVBQ3BCLE1BQWM7UUFFZCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztBQS9IRCwrQ0FBK0M7QUFDeEIsNEJBQWUsR0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFM0Ysc0RBQXNEO0FBQy9CLG9DQUF1QixHQUFXLGdCQUFnQixDQUFDO0FBRTFFLGtEQUFrRDtBQUMzQiw0QkFBZSxHQUFXLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvUmVxdWVzdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcG8tcmVxdWVzdC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb1N5bmNGaWVsZE9wdGlvbnMgfSBmcm9tICcuLi8uLi9wby1zeW5jL2ludGVyZmFjZXMvcG8tc3luYy1maWVsZC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvU3luY1NjaGVtYSB9IGZyb20gJy4uLy4uL3BvLXN5bmMvaW50ZXJmYWNlcy9wby1zeW5jLXNjaGVtYS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VydmnDp28gdXRpbGl0w6FyaW8gcGFyYSBvcGVyYcOnw7VlcyBubyBQb1N5bmNTY2hlbWEuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9TY2hlbWFVdGlsIHtcclxuICAvKiogVmFsb3IgYGRlZmF1bHRgIHBhcmEgbyBjYW1wbyBgbGFzdFN5bmNgLiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdExhc3RTeW5jOiBzdHJpbmcgPSBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMCkudG9JU09TdHJpbmcoKTtcclxuXHJcbiAgLyoqIE5vbWUgZGEgY2hhdmUgZG8gaWRlbnRpZmljYWRvciBpbnRlcm5vIGRvIHN5bmMuICovXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBzeW5jSW50ZXJuYWxJZEZpZWxkTmFtZTogc3RyaW5nID0gJ1N5bmNJbnRlcm5hbElkJztcclxuXHJcbiAgLyoqIE5vbWUgZGEgY2hhdmUgbm8gYHN0b3JhZ2VgIHBhcmEgb3MgU2NoZW1hcy4gKi9cclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHN5bmNTY2hlbWFzTmFtZTogc3RyaW5nID0gJ1N5bmNTY2hlbWFzJztcclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWNhIHNlIGV4aXN0ZW0gY2FtcG9zIGxvY2FpcyBubyAqc2NoZW1hKiBpbmZvcm1hZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gc2NoZW1hICoqU2NoZW1hKiBhIHNlciBwcm9jZXNzYWRvLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFZhbG9yIGRvIHRpcG8gKmJvb2xlYW4qIHF1ZSBpbmRpY2Egc2UgZXhpc3RlbSBjYW1wb3MgbG9jYWlzIG5vICpzY2hlbWEqIGluZm9ybWFkby5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGNvbnRhaW5zTG9jYWxGaWVsZHMoc2NoZW1hOiBQb1N5bmNTY2hlbWEpOiBib29sZWFuIHtcclxuICAgIGlmIChzY2hlbWEuZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiAhIXNjaGVtYS5maWVsZHMuZmluZChmaWVsZCA9PiB0eXBlb2YgZmllbGQgPT09ICdvYmplY3QnICYmIGZpZWxkLmxvY2FsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgbyB2YWxvciBhdHVhbCBkbyBgbGFzdFN5bmNgIHBhcmEgZGV0ZXJtaW5hZG8gKnNjaGVtYSouXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PFBvU3luY1NjaGVtYT59IHN0b3JhZ2VTY2hlbWFzIExpc3RhIGRlICpzY2hlbWFzKiBhIHNlcmVtIHBlc3F1aXNhZG9zLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWFOYW1lIE5vbWUgZG8gKnNjaGVtYSogcXVlIHNlIGRlc2VqYSBsZXIgbyBsYXN0U3luYy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldG9ybmEgdW1hICpzdHJpbmcqIGNvbSBvIHZhbG9yIGRhIMO6bHRpbWEgc2luY3Jvbml6YcOnw6NvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFN5bmMoc3RvcmFnZVNjaGVtYXM6IEFycmF5PFBvU3luY1NjaGVtYT4sIHNjaGVtYU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RvcmFnZVNjaGVtYXMpIHtcclxuICAgICAgY29uc3Qgc2NoZW1hRm91bmQgPSBzdG9yYWdlU2NoZW1hcy5maW5kKHNjaGVtYSA9PiBzY2hlbWEubmFtZSA9PT0gc2NoZW1hTmFtZSk7XHJcbiAgICAgIHJldHVybiBzY2hlbWFGb3VuZCAmJiBzY2hlbWFGb3VuZC5sYXN0U3luYyA/IHNjaGVtYUZvdW5kLmxhc3RTeW5jIDogUG9TY2hlbWFVdGlsLmRlZmF1bHRMYXN0U3luYztcclxuICAgIH1cclxuICAgIHJldHVybiBQb1NjaGVtYVV0aWwuZGVmYXVsdExhc3RTeW5jO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBhIGxpc3RhIGRlIGNhbXBvcyBsb2NhaXMgZGVmaW5pZG9zIG5vICpzY2hlbWEqLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb1N5bmNTY2hlbWF9IHNjaGVtYSAqKlNjaGVtYSogYSBzZXIgcHJvY2Vzc2Fkby5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldExvY2FsRmllbGROYW1lcyhzY2hlbWE6IFBvU3luY1NjaGVtYSk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgaWYgKHNjaGVtYS5maWVsZHMpIHtcclxuICAgICAgcmV0dXJuIHNjaGVtYS5maWVsZHMucmVkdWNlKChmaWVsZHNBY2N1bXVsYXRvcjogQXJyYXk8c3RyaW5nPiwgY3VycmVudEZpZWxkOiBzdHJpbmcgfCBQb1N5bmNGaWVsZE9wdGlvbnMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRGaWVsZCA9PT0gJ29iamVjdCcgJiYgY3VycmVudEZpZWxkLmxvY2FsKSB7XHJcbiAgICAgICAgICBmaWVsZHNBY2N1bXVsYXRvci5wdXNoKGN1cnJlbnRGaWVsZC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkc0FjY3VtdWxhdG9yO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGEgbGlzdGEgZGUgY2FtcG9zIG7Do28gbG9jYWlzIGRlZmluaWRvcyBubyAqc2NoZW1hKi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UG9TeW5jU2NoZW1hfSBzY2hlbWEgKipTY2hlbWEqIGEgc2VyIHByb2Nlc3NhZG8uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXROb25Mb2NhbEZpZWxkTmFtZXMoc2NoZW1hOiBQb1N5bmNTY2hlbWEpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIGlmIChzY2hlbWEuZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiBzY2hlbWEuZmllbGRzLnJlZHVjZSgoZmllbGRzQWNjdW11bGF0b3I6IEFycmF5PHN0cmluZz4sIGN1cnJlbnRGaWVsZDogc3RyaW5nIHwgUG9TeW5jRmllbGRPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RmllbGQgPT09ICdzdHJpbmcnIHx8ICFjdXJyZW50RmllbGQubG9jYWwpIHtcclxuICAgICAgICAgIGZpZWxkc0FjY3VtdWxhdG9yLnB1c2godHlwZW9mIGN1cnJlbnRGaWVsZCA9PT0gJ3N0cmluZycgPyBjdXJyZW50RmllbGQgOiBjdXJyZW50RmllbGQubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWVsZHNBY2N1bXVsYXRvcjtcclxuICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBvIGBpZGAgcmVmZXJlbnRlIGFvIHJlZ2lzdHJvIGRvICpzY2hlbWEqIGluZm9ybWFkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVnaXN0cm8gcXVlIHNlcsOhIGJ1c2NhZG8gbyBpZC5cclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gc2NoZW1hICoqU2NoZW1hKiBhIHNlciBwcm9jZXNzYWRvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0UmVjb3JkSWQocmVjb3JkOiBvYmplY3QsIHNjaGVtYTogUG9TeW5jU2NoZW1hKSB7XHJcbiAgICByZXR1cm4gcmVjb3JkW3NjaGVtYS5pZEZpZWxkXSB8fCByZWNvcmRbUG9TY2hlbWFVdGlsLnN5bmNJbnRlcm5hbElkRmllbGROYW1lXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgYSB1cmwgY29ycmVzcG9uZGVudGUgZG8gYFBvU3luY1NjaGVtYWAgZGVwZW5kZW5kbyBkbyB0aXBvIGRhIHJlcXVpc2nDp8OjbyBgUG9SZXF1ZXN0VHlwZWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1BvU3luY1NjaGVtYX0gc2NoZW1hICoqU2NoZW1hKiBhIHNlciBwcm9jZXNzYWRvLlxyXG4gICAqIEBwYXJhbSB7UG9SZXF1ZXN0VHlwZX0gcmVxdWVzdFR5cGUgVGlwbyBkYSByZXF1aXNpw6fDo28uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBnZXRVcmwoc2NoZW1hOiBQb1N5bmNTY2hlbWEsIHJlcXVlc3RUeXBlOiBQb1JlcXVlc3RUeXBlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzY2hlbWFbYCR7cmVxdWVzdFR5cGV9VXJsQXBpYF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb21wYXJhIHNlIGRvaXMgb2JqZXRvcyBzw6NvIGlndWFpcyBiYXNlYWRvIG5hIGxpc3RhIGRlIGNhbXBvcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZmllbGRzIExpc3RhIGRlIGNhbXBvcyBhIHNlcmVtIGNvbnNpZGVyYWRvcyBuYSBjb21wYXJhw6fDo28uXHJcbiAgICogQHBhcmFtIHthbnl9IG1vZGVsMSBPYmpldG8gMSBhIHNlciBjb21wYXJhZG8uXHJcbiAgICogQHBhcmFtIHthbnl9IG1vZGVsMiBPYmpldG8gMiBhIHNlciBjb21wYXJhZG8uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpc01vZGVsc0VxdWFsKGZpZWxkczogQXJyYXk8c3RyaW5nPiwgbW9kZWwxOiBhbnksIG1vZGVsMjogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgIHJldHVybiBmaWVsZHMuZXZlcnkoZmllbGQgPT4gSlNPTi5zdHJpbmdpZnkobW9kZWwxW2ZpZWxkXSkgPT09IEpTT04uc3RyaW5naWZ5KG1vZGVsMltmaWVsZF0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW1hIGxpc3RhIGNvbSBkb2lzIG9iamV0b3MgcmVmZXJlbnRlcyBhbyByZWdpc3RybyBpbmZvcm1hZG8uXHJcbiAgICogTyBwcmltZWlybyDDqSBvIHJlZ2lzdHJvIGNvbSBvcyBjYW1wb3MgcXVlIHbDo28gcGFyYSBvIHNlcnZpZG9yIGUgbyBzZWd1bmRvIMOpIGNvbSBvcyBjYW1wb3MgbG9jYWlzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb1N5bmNTY2hlbWF9IHNjaGVtYSAqKlNjaGVtYSogZG8gcmVnaXN0cm8uXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWdpc3RybyBxdWUgc2Vyw6EgcmVhbGl6YWRhIGEgc2VwYXJhw6fDo28gZG9zIGNhbXBvcyBsb2NhaXMgZSBkbyBzZXJ2aWRvci5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHNlcGFyYXRlU2NoZW1hRmllbGRzKFxyXG4gICAgc2NoZW1hOiBQb1N5bmNTY2hlbWEsXHJcbiAgICByZWNvcmQ6IG9iamVjdFxyXG4gICk6IHsgc2VydmVyUmVjb3JkOiBvYmplY3Q7IGxvY2FsUmVjb3JkOiBvYmplY3QgfSB7XHJcbiAgICBjb25zdCBsb2NhbEZpZWxkcyA9IFBvU2NoZW1hVXRpbC5nZXRMb2NhbEZpZWxkTmFtZXMoc2NoZW1hKTtcclxuICAgIGNvbnN0IGxvY2FsUmVjb3JkID0ge307XHJcbiAgICBjb25zdCBzZXJ2ZXJSZWNvcmQgPSB7fTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhyZWNvcmQpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBpZiAobG9jYWxGaWVsZHMuaW5jbHVkZXMoZmllbGQpKSB7XHJcbiAgICAgICAgbG9jYWxSZWNvcmRbZmllbGRdID0gcmVjb3JkW2ZpZWxkXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJ2ZXJSZWNvcmRbZmllbGRdID0gcmVjb3JkW2ZpZWxkXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgc2VydmVyUmVjb3JkLCBsb2NhbFJlY29yZCB9O1xyXG4gIH1cclxufVxyXG4iXX0=