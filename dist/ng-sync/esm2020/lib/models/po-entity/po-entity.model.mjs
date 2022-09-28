import { validateParameter } from '../../utils/utils';
import { PoEventSourcingOperation } from '../../services/po-event-sourcing';
import { PoQueryBuilder } from './../po-query-builder/po-query-builder.model';
import { PoSchemaUtil } from '../../services/po-schema';
/**
 * @description
 *
 * Uma instância `PoEntity` representa um *schema* e ela contém métodos que possibilitam manipular seus registros,
 * como por exemplo: buscar, criar e remover.
 *
 * Esta instância pode ser obtida a partir do retorno do método `PoSyncService.getModel('schema name')`.
 */
export class PoEntity {
    constructor(eventSourcing, schema, poSchemaService) {
        this.eventSourcing = eventSourcing;
        this.schema = schema;
        this.poSchemaService = poSchemaService;
    }
    /**
     * Busca os registros do *schema*, podendo filtrar o resultado a partir do filtro passado e retornando apenas
     * os campos definidos.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    find(filter, fields) {
        const query = new PoQueryBuilder(this.poSchemaService, this.schema);
        if (filter) {
            query.filter(filter);
        }
        if (fields) {
            query.select(fields);
        }
        return query;
    }
    /**
     * Busca um registro pelo seu *id*.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {any} id Identificador do registro.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    findById(id, fields) {
        return this.findOne({ [this.schema.idField]: id }, fields);
    }
    /**
     * Semelhante ao método `PoEntity.find()`, porém retorna apenas o primeiro registro encontrado na busca.
     *
     * Para que esta busca seja concluída é necessário utilizar o método `PoQueryBuilder.exec()`.
     * Veja mais em: [PoQueryBuilder](/documentation/po-query-builder).
     *
     * @param {any} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. E para não mostrar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um método do `PoQueryBuilder`.
     */
    findOne(filter, fields) {
        const query = this.find(filter, fields);
        query.limit(1);
        return query;
    }
    /**
     * Remove um registro.
     *
     * @param {object} record Registro que será removido.
     * @param {string} customRequestId Identificador customizado do comando.
     * @returns {Promise} Promessa que é concluída após o registro ser removido.
     */
    async remove(record, customRequestId) {
        validateParameter({ record });
        const remove = async () => {
            const idField = record[this.schema.idField] ? this.schema.idField : PoSchemaUtil.syncInternalIdFieldName;
            const serverRecord = PoSchemaUtil.separateSchemaFields(this.schema, record)['serverRecord'];
            await this.poSchemaService.remove(this.schema.name, record[idField]);
            await this.eventSourcing.remove(this.schema.name, serverRecord, customRequestId);
        };
        return this.poSchemaService.limitedCallWrap(remove);
    }
    /**
     * Altera ou inclui um registro.
     *
     * > O registro será alterado se ele possuir um *id*, caso contrário um novo registro será criado.
     *
     * @param {object} record Registro que será persistido.
     * @param {string} customRequestId Identificador customizado do comando.
     * @returns {Promise} Promessa que é concluída após o registro ser alterado ou incluído.
     */
    async save(record, customRequestId) {
        validateParameter({ record });
        return this.poSchemaService.limitedCallWrap(this.selectSaveType.bind(this, record, true, customRequestId));
    }
    /**
     * Salva uma lista de registros em lote.
     *
     * > Para cada registro da lista, será inserido um novo registro se o mesmo não tiver *id*, caso contrário
     * será contado como uma atualização de um registro existente.
     *
     * @param {Array<object>} records Lista de registros que serão persistidos.
     * @param {Array<string> | string} customRequestIds Identificador customizado do comando.
     *
     * Ao passar uma lista de identificadores, cada índice da lista de identificadores deverá
     * corresponder ao índice do registro na lista de registros.
     * @returns {Promise<any>} Promessa que é concluída após os registros serem alterados ou incluídos.
     */
    async saveAll(records, customRequestIds) {
        validateParameter({ records });
        const saveAll = async () => {
            const batchEvents = [];
            for (let index = 0; index < records.length; index++) {
                const record = records[index];
                const sendToEventSourcing = false;
                const isNonLocalRecordChanged = await this.isNonLocalRecordChanged(record);
                const updatedRecord = await this.selectSaveType(record, sendToEventSourcing);
                if (isNonLocalRecordChanged) {
                    const customRequestId = customRequestIds instanceof Array ? customRequestIds[index] : customRequestIds;
                    const eventOperation = this.createEventOperation(record, updatedRecord, customRequestId);
                    batchEvents.push(eventOperation);
                }
            }
            await this.eventSourcing.createBatchEvents(this.schema.name, batchEvents);
        };
        return this.poSchemaService.limitedCallWrap(saveAll);
    }
    async create(newRecord, sendToEventSourcing, customRequestId) {
        const time = new Date().getTime();
        const syncProperties = {
            [PoSchemaUtil.syncInternalIdFieldName]: time,
            SyncInsertedDateTime: time,
            SyncUpdatedDateTime: null,
            SyncExclusionDateTime: null,
            SyncDeleted: false,
            SyncStatus: 0
        };
        const recordWithSyncProperties = { ...newRecord, ...syncProperties };
        const recordedData = await this.poSchemaService.create(this.schema, recordWithSyncProperties);
        if (sendToEventSourcing) {
            await this.eventSourcing.create(this.schema.name, recordWithSyncProperties, customRequestId);
        }
        return recordedData;
    }
    createEventOperation(record, updatedRecord, customRequestId) {
        const operation = PoSchemaUtil.getRecordId(record, this.schema)
            ? PoEventSourcingOperation.Update
            : PoEventSourcingOperation.Insert;
        const serverRecord = PoSchemaUtil.separateSchemaFields(this.schema, updatedRecord)['serverRecord'];
        return {
            record: serverRecord,
            customRequestId: customRequestId,
            operation: operation
        };
    }
    async isNonLocalRecordChanged(updatedRecord) {
        const nonLocalFieldNames = PoSchemaUtil.getNonLocalFieldNames(this.schema);
        const record = await this.poSchemaService.get(this.schema.name, updatedRecord[this.schema.idField]);
        return !PoSchemaUtil.isModelsEqual(nonLocalFieldNames, record, updatedRecord);
    }
    async selectSaveType(record, sendToEventSourcing, customRequestId) {
        const hasId = PoSchemaUtil.getRecordId(record, this.schema);
        return hasId
            ? await this.update(record, sendToEventSourcing, customRequestId)
            : await this.create(record, sendToEventSourcing, customRequestId);
    }
    async update(updatedRecord, sendToEventSourcing, customRequestId) {
        updatedRecord.SyncUpdatedDateTime = new Date().getTime();
        updatedRecord.SyncStatus = 0;
        const isNonLocalRecordChanged = await this.isNonLocalRecordChanged(updatedRecord);
        const recordedData = await this.poSchemaService.update(this.schema, updatedRecord);
        if (isNonLocalRecordChanged && sendToEventSourcing) {
            const serverRecord = PoSchemaUtil.separateSchemaFields(this.schema, updatedRecord)['serverRecord'];
            await this.eventSourcing.update(this.schema.name, serverRecord, customRequestId);
        }
        return recordedData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZW50aXR5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3luYy9zcmMvbGliL21vZGVscy9wby1lbnRpdHkvcG8tZW50aXR5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE9BQU8sRUFDTCx3QkFBd0IsRUFHekIsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFtQixZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd6RTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFDVSxhQUFxQyxFQUNyQyxNQUFvQixFQUNwQixlQUFnQztRQUZoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBd0I7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDdkMsQ0FBQztJQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQkc7SUFDSCxJQUFJLENBQUMsTUFBZSxFQUFFLE1BQWU7UUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ0gsUUFBUSxDQUFDLEVBQU8sRUFBRSxNQUFlO1FBQy9CLE9BQU8sSUFBSSxD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QUFDO1lBQ2pFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWtCLEVBQUUsbUJBQTRCLEVBQUUsZUFBd0I7UUFDN0YsYUFBYSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekQsYUFBYSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFN0IsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsSUFBSSx1QkFBdUIsSUFBSSxtQkFBbUIsRUFBRTtZQUNsRCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNsRjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24sXHJcbiAgUG9FdmVudFNvdXJjaW5nU2VydmljZSxcclxuICBQb0V2ZW50U291cmNpbmdTdW1tYXJ5SXRlbVxyXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWV2ZW50LXNvdXJjaW5nJztcclxuaW1wb3J0IHsgUG9RdWVyeUJ1aWxkZXIgfSBmcm9tICcuLy4uL3BvLXF1ZXJ5LWJ1aWxkZXIvcG8tcXVlcnktYnVpbGRlci5tb2RlbCc7XHJcbmltcG9ydCB7IFBvU2NoZW1hU2VydmljZSwgUG9TY2hlbWFVdGlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tc2NoZW1hJztcclxuaW1wb3J0IHsgUG9TeW5jU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tc3luYy9pbnRlcmZhY2VzL3BvLXN5bmMtc2NoZW1hLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFVtYSBpbnN0w6JuY2lhIGBQb0VudGl0eWAgcmVwcmVzZW50YSB1bSAqc2NoZW1hKiBlIGVsYSBjb250w6ltIG3DqXRvZG9zIHF1ZSBwb3NzaWJpbGl0YW0gbWFuaXB1bGFyIHNldXMgcmVnaXN0cm9zLFxyXG4gKiBjb21vIHBvciBleGVtcGxvOiBidXNjYXIsIGNyaWFyIGUgcmVtb3Zlci5cclxuICpcclxuICogRXN0YSBpbnN0w6JuY2lhIHBvZGUgc2VyIG9idGlkYSBhIHBhcnRpciBkbyByZXRvcm5vIGRvIG3DqXRvZG8gYFBvU3luY1NlcnZpY2UuZ2V0TW9kZWwoJ3NjaGVtYSBuYW1lJylgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvRW50aXR5IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZXZlbnRTb3VyY2luZzogUG9FdmVudFNvdXJjaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgc2NoZW1hOiBQb1N5bmNTY2hlbWEsXHJcbiAgICBwcml2YXRlIHBvU2NoZW1hU2VydmljZTogUG9TY2hlbWFTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBCdXNjYSBvcyByZWdpc3Ryb3MgZG8gKnNjaGVtYSosIHBvZGVuZG8gZmlsdHJhciBvIHJlc3VsdGFkbyBhIHBhcnRpciBkbyBmaWx0cm8gcGFzc2FkbyBlIHJldG9ybmFuZG8gYXBlbmFzXHJcbiAgICogb3MgY2FtcG9zIGRlZmluaWRvcy5cclxuICAgKlxyXG4gICAqIFBhcmEgcXVlIGVzdGEgYnVzY2Egc2VqYSBjb25jbHXDrWRhIMOpIG5lY2Vzc8OhcmlvIHV0aWxpemFyIG8gbcOpdG9kbyBgUG9RdWVyeUJ1aWxkZXIuZXhlYygpYC5cclxuICAgKiBWZWphIG1haXMgZW06IFtQb1F1ZXJ5QnVpbGRlcl0oL2RvY3VtZW50YXRpb24vcG8tcXVlcnktYnVpbGRlcikuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIE9iamV0byBxdWUgY29udMOpbSBvcyBjYW1wb3MgZSB2YWxvcmVzIGEgc2VyZW0gZmlsdHJhZG9zIG5vICpzY2hlbWEqLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZHMgQ2FtcG9zIHF1ZSBzZXLDo28gcmV0b3JuYWRvcyBub3MgcmVnaXN0cm9zLiBFc3RlIGNhbXBvcyBkZXZlbSBlc3RhciBkZW50cm8gZGVcclxuICAgKiB1bWEgKnN0cmluZyogc2VwYXJhZG9zIHBvciBlc3Bhw6dvIHBvZGVuZG8gdXNhciBvIGNhcmFjdGVyZSBgLWAgcGFyYSBleGNsdWlyIGNhbXBvcy5cclxuICAgKiBQb3IgZXhlbXBsbywgYSBkZWZpbmnDp8OjbyBhYmFpeG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBQb1F1ZXJ5QnVpbGRlci5zZWxlY3QoJ25hbWUgYWdlIGFkZHJlc3MnKTtcclxuICAgKiBgYGBcclxuICAgKiBJcsOhIHJldG9ybmFyIGFwZW5hcyBvcyBjYW1wb3MgYG5hbWVgLCBgYWdlYCBlIGBhZGRyZXNzYC4gRSBwYXJhIG7Do28gbW9zdHJhciB1bSBjYW1wbyBvdSBtYWlzIGJhc3RhIGZhemVyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuc2VsZWN0KCctbmFtZSAtYWdlJyk7XHJcbiAgICogYGBgXHJcbiAgICogQHJldHVybnMge1BvUXVlcnlCdWlsZGVyfSBPYmpldG8gcXVlIHBvc3NpYmlsaXRhIGVuY2FkZWFyIHVtIG3DqXRvZG8gZG8gYFBvUXVlcnlCdWlsZGVyYC5cclxuICAgKi9cclxuICBmaW5kKGZpbHRlcj86IG9iamVjdCwgZmllbGRzPzogc3RyaW5nKTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUG9RdWVyeUJ1aWxkZXIodGhpcy5wb1NjaGVtYVNlcnZpY2UsIHRoaXMuc2NoZW1hKTtcclxuXHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIHF1ZXJ5LmZpbHRlcihmaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgcXVlcnkuc2VsZWN0KGZpZWxkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVzY2EgdW0gcmVnaXN0cm8gcGVsbyBzZXUgKmlkKi5cclxuICAgKlxyXG4gICAqIFBhcmEgcXVlIGVzdGEgYnVzY2Egc2VqYSBjb25jbHXDrWRhIMOpIG5lY2Vzc8OhcmlvIHV0aWxpemFyIG8gbcOpdG9kbyBgUG9RdWVyeUJ1aWxkZXIuZXhlYygpYC5cclxuICAgKiBWZWphIG1haXMgZW06IFtQb1F1ZXJ5QnVpbGRlcl0oL2RvY3VtZW50YXRpb24vcG8tcXVlcnktYnVpbGRlcikuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gaWQgSWRlbnRpZmljYWRvciBkbyByZWdpc3Ryby5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRzIENhbXBvcyBxdWUgc2Vyw6NvIHJldG9ybmFkb3Mgbm9zIHJlZ2lzdHJvcy4gRXN0ZSBjYW1wb3MgZGV2ZW0gZXN0YXIgZGVudHJvIGRlXHJcbiAgICogdW1hICpzdHJpbmcqIHNlcGFyYWRvcyBwb3IgZXNwYcOnbyBwb2RlbmRvIHVzYXIgbyBjYXJhY3RlcmUgYC1gIHBhcmEgZXhjbHVpciBjYW1wb3MuXHJcbiAgICogUG9yIGV4ZW1wbG8sIGEgZGVmaW5pw6fDo28gYWJhaXhvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuc2VsZWN0KCduYW1lIGFnZSBhZGRyZXNzJyk7XHJcbiAgICogYGBgXHJcbiAgICogSXLDoSByZXRvcm5hciBhcGVuYXMgb3MgY2FtcG9zIGBuYW1lYCwgYGFnZWAgZSBgYWRkcmVzc2AuIEUgcGFyYSBuw6NvIG1vc3RyYXIgdW0gY2FtcG8gb3UgbWFpcyBiYXN0YSBmYXplcjpcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIFBvUXVlcnlCdWlsZGVyLnNlbGVjdCgnLW5hbWUgLWFnZScpO1xyXG4gICAqIGBgYFxyXG4gICAqIEByZXR1cm5zIHtQb1F1ZXJ5QnVpbGRlcn0gT2JqZXRvIHF1ZSBwb3NzaWJpbGl0YSBlbmNhZGVhciB1bSBtw6l0b2RvIGRvIGBQb1F1ZXJ5QnVpbGRlcmAuXHJcbiAgICovXHJcbiAgZmluZEJ5SWQoaWQ6IGFueSwgZmllbGRzPzogc3RyaW5nKTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZmluZE9uZSh7IFt0aGlzLnNjaGVtYS5pZEZpZWxkXTogaWQgfSwgZmllbGRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbWVsaGFudGUgYW8gbcOpdG9kbyBgUG9FbnRpdHkuZmluZCgpYCwgcG9yw6ltIHJldG9ybmEgYXBlbmFzIG8gcHJpbWVpcm8gcmVnaXN0cm8gZW5jb250cmFkbyBuYSBidXNjYS5cclxuICAgKlxyXG4gICAqIFBhcmEgcXVlIGVzdGEgYnVzY2Egc2VqYSBjb25jbHXDrWRhIMOpIG5lY2Vzc8OhcmlvIHV0aWxpemFyIG8gbcOpdG9kbyBgUG9RdWVyeUJ1aWxkZXIuZXhlYygpYC5cclxuICAgKiBWZWphIG1haXMgZW06IFtQb1F1ZXJ5QnVpbGRlcl0oL2RvY3VtZW50YXRpb24vcG8tcXVlcnktYnVpbGRlcikuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gZmlsdGVyIE9iamV0byBxdWUgY29udMOpbSBvcyBjYW1wb3MgZSB2YWxvcmVzIGEgc2VyZW0gZmlsdHJhZG9zIG5vICpzY2hlbWEqLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZHMgQ2FtcG9zIHF1ZSBzZXLDo28gcmV0b3JuYWRvcyBub3MgcmVnaXN0cm9zLiBFc3RlIGNhbXBvcyBkZXZlbSBlc3RhciBkZW50cm8gZGVcclxuICAgKiB1bWEgKnN0cmluZyogc2VwYXJhZG9zIHBvciBlc3Bhw6dvIHBvZGVuZG8gdXNhciBvIGNhcmFjdGVyZSBgLWAgcGFyYSBleGNsdWlyIGNhbXBvcy5cclxuICAgKiBQb3IgZXhlbXBsbywgYSBkZWZpbmnDp8OjbyBhYmFpeG86XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBQb1F1ZXJ5QnVpbGRlci5zZWxlY3QoJ25hbWUgYWdlIGFkZHJlc3MnKTtcclxuICAgKiBgYGBcclxuICAgKiBJcsOhIHJldG9ybmFyIGFwZW5hcyBvcyBjYW1wb3MgYG5hbWVgLCBgYWdlYCBlIGBhZGRyZXNzYC4gRSBwYXJhIG7Do28gbW9zdHJhciB1bSBjYW1wbyBvdSBtYWlzIGJhc3RhIGZhemVyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuc2VsZWN0KCctbmFtZSAtYWdlJyk7XHJcbiAgICogYGBgXHJcbiAgICogQHJldHVybnMge1BvUXVlcnlCdWlsZGVyfSBPYmpldG8gcXVlIHBvc3NpYmlsaXRhIGVuY2FkZWFyIHVtIG3DqXRvZG8gZG8gYFBvUXVlcnlCdWlsZGVyYC5cclxuICAgKi9cclxuICBmaW5kT25lKGZpbHRlcj86IGFueSwgZmllbGRzPzogc3RyaW5nKTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmZpbmQoZmlsdGVyLCBmaWVsZHMpO1xyXG4gICAgcXVlcnkubGltaXQoMSk7XHJcbiAgICByZXR1cm4gcXVlcnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdW0gcmVnaXN0cm8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlZ2lzdHJvIHF1ZSBzZXLDoSByZW1vdmlkby5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VzdG9tUmVxdWVzdElkIElkZW50aWZpY2Fkb3IgY3VzdG9taXphZG8gZG8gY29tYW5kby5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWVzc2EgcXVlIMOpIGNvbmNsdcOtZGEgYXDDs3MgbyByZWdpc3RybyBzZXIgcmVtb3ZpZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgcmVtb3ZlKHJlY29yZDogb2JqZWN0LCBjdXN0b21SZXF1ZXN0SWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdmFsaWRhdGVQYXJhbWV0ZXIoeyByZWNvcmQgfSk7XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpZEZpZWxkID0gcmVjb3JkW3RoaXMuc2NoZW1hLmlkRmllbGRdID8gdGhpcy5zY2hlbWEuaWRGaWVsZCA6IFBvU2NoZW1hVXRpbC5zeW5jSW50ZXJuYWxJZEZpZWxkTmFtZTtcclxuICAgICAgY29uc3Qgc2VydmVyUmVjb3JkID0gUG9TY2hlbWFVdGlsLnNlcGFyYXRlU2NoZW1hRmllbGRzKHRoaXMuc2NoZW1hLCByZWNvcmQpWydzZXJ2ZXJSZWNvcmQnXTtcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMucG9TY2hlbWFTZXJ2aWNlLnJlbW92ZSh0aGlzLnNjaGVtYS5uYW1lLCByZWNvcmRbaWRGaWVsZF0pO1xyXG4gICAgICBhd2FpdCB0aGlzLmV2ZW50U291cmNpbmcucmVtb3ZlKHRoaXMuc2NoZW1hLm5hbWUsIHNlcnZlclJlY29yZCwgY3VzdG9tUmVxdWVzdElkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9TY2hlbWFTZXJ2aWNlLmxpbWl0ZWRDYWxsV3JhcChyZW1vdmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWx0ZXJhIG91IGluY2x1aSB1bSByZWdpc3Ryby5cclxuICAgKlxyXG4gICAqID4gTyByZWdpc3RybyBzZXLDoSBhbHRlcmFkbyBzZSBlbGUgcG9zc3VpciB1bSAqaWQqLCBjYXNvIGNvbnRyw6FyaW8gdW0gbm92byByZWdpc3RybyBzZXLDoSBjcmlhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlZ2lzdHJvIHF1ZSBzZXLDoSBwZXJzaXN0aWRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21SZXF1ZXN0SWQgSWRlbnRpZmljYWRvciBjdXN0b21pemFkbyBkbyBjb21hbmRvLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9tZXNzYSBxdWUgw6kgY29uY2x1w61kYSBhcMOzcyBvIHJlZ2lzdHJvIHNlciBhbHRlcmFkbyBvdSBpbmNsdcOtZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgc2F2ZShyZWNvcmQ6IG9iamVjdCwgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHZhbGlkYXRlUGFyYW1ldGVyKHsgcmVjb3JkIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBvU2NoZW1hU2VydmljZS5saW1pdGVkQ2FsbFdyYXAodGhpcy5zZWxlY3RTYXZlVHlwZS5iaW5kKHRoaXMsIHJlY29yZCwgdHJ1ZSwgY3VzdG9tUmVxdWVzdElkKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYWx2YSB1bWEgbGlzdGEgZGUgcmVnaXN0cm9zIGVtIGxvdGUuXHJcbiAgICpcclxuICAgKiA+IFBhcmEgY2FkYSByZWdpc3RybyBkYSBsaXN0YSwgc2Vyw6EgaW5zZXJpZG8gdW0gbm92byByZWdpc3RybyBzZSBvIG1lc21vIG7Do28gdGl2ZXIgKmlkKiwgY2FzbyBjb250csOhcmlvXHJcbiAgICogc2Vyw6EgY29udGFkbyBjb21vIHVtYSBhdHVhbGl6YcOnw6NvIGRlIHVtIHJlZ2lzdHJvIGV4aXN0ZW50ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcmVjb3JkcyBMaXN0YSBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyBwZXJzaXN0aWRvcy5cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz4gfCBzdHJpbmd9IGN1c3RvbVJlcXVlc3RJZHMgSWRlbnRpZmljYWRvciBjdXN0b21pemFkbyBkbyBjb21hbmRvLlxyXG4gICAqXHJcbiAgICogQW8gcGFzc2FyIHVtYSBsaXN0YSBkZSBpZGVudGlmaWNhZG9yZXMsIGNhZGEgw61uZGljZSBkYSBsaXN0YSBkZSBpZGVudGlmaWNhZG9yZXMgZGV2ZXLDoVxyXG4gICAqIGNvcnJlc3BvbmRlciBhbyDDrW5kaWNlIGRvIHJlZ2lzdHJvIG5hIGxpc3RhIGRlIHJlZ2lzdHJvcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9tZXNzYSBxdWUgw6kgY29uY2x1w61kYSBhcMOzcyBvcyByZWdpc3Ryb3Mgc2VyZW0gYWx0ZXJhZG9zIG91IGluY2x1w61kb3MuXHJcbiAgICovXHJcbiAgYXN5bmMgc2F2ZUFsbChyZWNvcmRzOiBBcnJheTxvYmplY3Q+LCBjdXN0b21SZXF1ZXN0SWRzPzogQXJyYXk8c3RyaW5nPiB8IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICB2YWxpZGF0ZVBhcmFtZXRlcih7IHJlY29yZHMgfSk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZUFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYmF0Y2hFdmVudHMgPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZWNvcmRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IHJlY29yZHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHNlbmRUb0V2ZW50U291cmNpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNOb25Mb2NhbFJlY29yZENoYW5nZWQgPSBhd2FpdCB0aGlzLmlzTm9uTG9jYWxSZWNvcmRDaGFuZ2VkKHJlY29yZCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFJlY29yZCA9IGF3YWl0IHRoaXMuc2VsZWN0U2F2ZVR5cGUocmVjb3JkLCBzZW5kVG9FdmVudFNvdXJjaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTm9uTG9jYWxSZWNvcmRDaGFuZ2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21SZXF1ZXN0SWQgPSBjdXN0b21SZXF1ZXN0SWRzIGluc3RhbmNlb2YgQXJyYXkgPyBjdXN0b21SZXF1ZXN0SWRzW2luZGV4XSA6IGN1c3RvbVJlcXVlc3RJZHM7XHJcbiAgICAgICAgICBjb25zdCBldmVudE9wZXJhdGlvbiA9IHRoaXMuY3JlYXRlRXZlbnRPcGVyYXRpb24ocmVjb3JkLCB1cGRhdGVkUmVjb3JkLCBjdXN0b21SZXF1ZXN0SWQpO1xyXG4gICAgICAgICAgYmF0Y2hFdmVudHMucHVzaChldmVudE9wZXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLmV2ZW50U291cmNpbmcuY3JlYXRlQmF0Y2hFdmVudHModGhpcy5zY2hlbWEubmFtZSwgYmF0Y2hFdmVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wb1NjaGVtYVNlcnZpY2UubGltaXRlZENhbGxXcmFwKHNhdmVBbGwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGUobmV3UmVjb3JkOiBhbnksIHNlbmRUb0V2ZW50U291cmNpbmc6IGJvb2xlYW4sIGN1c3RvbVJlcXVlc3RJZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgY29uc3Qgc3luY1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgIFtQb1NjaGVtYVV0aWwuc3luY0ludGVybmFsSWRGaWVsZE5hbWVdOiB0aW1lLFxyXG4gICAgICBTeW5jSW5zZXJ0ZWREYXRlVGltZTogdGltZSxcclxuICAgICAgU3luY1VwZGF0ZWREYXRlVGltZTogbnVsbCxcclxuICAgICAgU3luY0V4Y2x1c2lvbkRhdGVUaW1lOiBudWxsLFxyXG4gICAgICBTeW5jRGVsZXRlZDogZmFsc2UsXHJcbiAgICAgIFN5bmNTdGF0dXM6IDBcclxuICAgIH07XHJcbiAgICBjb25zdCByZWNvcmRXaXRoU3luY1Byb3BlcnRpZXMgPSB7IC4uLm5ld1JlY29yZCwgLi4uc3luY1Byb3BlcnRpZXMgfTtcclxuXHJcbiAgICBjb25zdCByZWNvcmRlZERhdGEgPSBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS5jcmVhdGUodGhpcy5zY2hlbWEsIHJlY29yZFdpdGhTeW5jUHJvcGVydGllcyk7XHJcblxyXG4gICAgaWYgKHNlbmRUb0V2ZW50U291cmNpbmcpIHtcclxuICAgICAgYXdhaXQgdGhpcy5ldmVudFNvdXJjaW5nLmNyZWF0ZSh0aGlzLnNjaGVtYS5uYW1lLCByZWNvcmRXaXRoU3luY1Byb3BlcnRpZXMsIGN1c3RvbVJlcXVlc3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZGVkRGF0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRPcGVyYXRpb24oXHJcbiAgICByZWNvcmQ6IG9iamVjdCxcclxuICAgIHVwZGF0ZWRSZWNvcmQ6IG9iamVjdCxcclxuICAgIGN1c3RvbVJlcXVlc3RJZD86IHN0cmluZ1xyXG4gICk6IFBvRXZlbnRTb3VyY2luZ1N1bW1hcnlJdGVtIHtcclxuICAgIGNvbnN0IG9wZXJhdGlvbiA9IFBvU2NoZW1hVXRpbC5nZXRSZWNvcmRJZChyZWNvcmQsIHRoaXMuc2NoZW1hKVxyXG4gICAgICA/IFBvRXZlbnRTb3VyY2luZ09wZXJhdGlvbi5VcGRhdGVcclxuICAgICAgOiBQb0V2ZW50U291cmNpbmdPcGVyYXRpb24uSW5zZXJ0O1xyXG5cclxuICAgIGNvbnN0IHNlcnZlclJlY29yZCA9IFBvU2NoZW1hVXRpbC5zZXBhcmF0ZVNjaGVtYUZpZWxkcyh0aGlzLnNjaGVtYSwgdXBkYXRlZFJlY29yZClbJ3NlcnZlclJlY29yZCddO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlY29yZDogc2VydmVyUmVjb3JkLFxyXG4gICAgICBjdXN0b21SZXF1ZXN0SWQ6IGN1c3RvbVJlcXVlc3RJZCxcclxuICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGlzTm9uTG9jYWxSZWNvcmRDaGFuZ2VkKHVwZGF0ZWRSZWNvcmQ6IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3Qgbm9uTG9jYWxGaWVsZE5hbWVzID0gUG9TY2hlbWFVdGlsLmdldE5vbkxvY2FsRmllbGROYW1lcyh0aGlzLnNjaGVtYSk7XHJcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS5nZXQodGhpcy5zY2hlbWEubmFtZSwgdXBkYXRlZFJlY29yZFt0aGlzLnNjaGVtYS5pZEZpZWxkXSk7XHJcblxyXG4gICAgcmV0dXJuICFQb1NjaGVtYVV0aWwuaXNNb2RlbHNFcXVhbChub25Mb2NhbEZpZWxkTmFtZXMsIHJlY29yZCwgdXBkYXRlZFJlY29yZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNlbGVjdFNhdmVUeXBlKFxyXG4gICAgcmVjb3JkOiBvYmplY3QsXHJcbiAgICBzZW5kVG9FdmVudFNvdXJjaW5nOiBib29sZWFuLFxyXG4gICAgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IGhhc0lkID0gUG9TY2hlbWFVdGlsLmdldFJlY29yZElkKHJlY29yZCwgdGhpcy5zY2hlbWEpO1xyXG5cclxuICAgIHJldHVybiBoYXNJZFxyXG4gICAgICA/IGF3YWl0IHRoaXMudXBkYXRlKHJlY29yZCwgc2VuZFRvRXZlbnRTb3VyY2luZywgY3VzdG9tUmVxdWVzdElkKVxyXG4gICAgICA6IGF3YWl0IHRoaXMuY3JlYXRlKHJlY29yZCwgc2VuZFRvRXZlbnRTb3VyY2luZywgY3VzdG9tUmVxdWVzdElkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlKHVwZGF0ZWRSZWNvcmQ6IGFueSwgc2VuZFRvRXZlbnRTb3VyY2luZzogYm9vbGVhbiwgY3VzdG9tUmVxdWVzdElkPzogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgIHVwZGF0ZWRSZWNvcmQuU3luY1VwZGF0ZWREYXRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdXBkYXRlZFJlY29yZC5TeW5jU3RhdHVzID0gMDtcclxuXHJcbiAgICBjb25zdCBpc05vbkxvY2FsUmVjb3JkQ2hhbmdlZCA9IGF3YWl0IHRoaXMuaXNOb25Mb2NhbFJlY29yZENoYW5nZWQodXBkYXRlZFJlY29yZCk7XHJcbiAgICBjb25zdCByZWNvcmRlZERhdGEgPSBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS51cGRhdGUodGhpcy5zY2hlbWEsIHVwZGF0ZWRSZWNvcmQpO1xyXG5cclxuICAgIGlmIChpc05vbkxvY2FsUmVjb3JkQ2hhbmdlZCAmJiBzZW5kVG9FdmVudFNvdXJjaW5nKSB7XHJcbiAgICAgIGNvbnN0IHNlcnZlclJlY29yZCA9IFBvU2NoZW1hVXRpbC5zZXBhcmF0ZVNjaGVtYUZpZWxkcyh0aGlzLnNjaGVtYSwgdXBkYXRlZFJlY29yZClbJ3NlcnZlclJlY29yZCddO1xyXG4gICAgICBhd2FpdCB0aGlzLmV2ZW50U291cmNpbmcudXBkYXRlKHRoaXMuc2NoZW1hLm5hbWUsIHNlcnZlclJlY29yZCwgY3VzdG9tUmVxdWVzdElkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3JkZWREYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=