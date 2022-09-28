import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { StatusCodes } from 'http-status-codes';
import { Subject, Observable, of, merge, fromEvent, forkJoin, timer } from 'rxjs';
import { map, expand, reduce, mapTo, mergeMap } from 'rxjs/operators';
import * as i1 from '@po-ui/ng-storage';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import * as i1$2 from '@awesome-cordova-plugins/network/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

/**
 * @description
 *
 * Classe responsável por adaptar dados de APIs que não seguem
 * o padrão de [API do PO UI](https://po-ui.io/guides/api).
 *
 * Essa classe deve ser estendida por uma classe que implemente cada um de seus métodos, adaptando os parâmetros de
 * acordo com a API do *backend* existente que se deseja comunicar.
 */
class PoDataTransform {
    /**
     * @docsPrivate
     *
     * Método responsável por receber e armazenar os dados retornados pela API para manipulação na classe `PoDataTransform`.
     *
     * @param {any} data Dados retornados pela API.
     */
    transform(data) {
        this.data = data;
    }
}

/**
 * Retorna um *array* contendo os pares `[chave, valor]` do objeto.
 *
 * Semelhante ao método `Object.entries()` nativo do javascript.
 *
 * > Veja mais em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param object Objeto que será extraído os pares [chave, valor].
 */
const getObjectEntries = (object) => {
    const objectName = Object.keys(object)[0];
    const objectValue = object[objectName];
    return [objectName, objectValue];
};
/**
 * Recebe um objeto e valida se o seu valor é diferente de *undefined* ou *null*.
 *
 * @param {object} parameter Objeto contento o nome do parâmetro que está sendo validado
 * e o seu valor.
 */
const validateParameter = (parameter) => {
    const [paramName, paramValue] = getObjectEntries(parameter);
    if (paramValue === undefined || paramValue === null) {
        throw new Error(`The ${paramName} parameter cannot be undefined or null`);
    }
};
/**
 * Recebe um objeto e valida se o seu valor é uma instância de *Array* e se não
 * está vazio.
 *
 * @param value Objeto contento o nome da propriedade que está sendo validada e o seu valor.
 */
const validateArray = (value) => {
    validateParameter(value);
    const [paramName, paramValue] = getObjectEntries(value);
    if (!(paramValue instanceof Array)) {
        throw new Error(`${paramName} is not an Array instance`);
    }
    if (!paramValue.length) {
        throw new Error(`${paramName} cannot be empty array`);
    }
};
/**
 * Recebe um arquivo e converte para uma string base64
 *
 * @param Objeto do tipo file.
 */
const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    /* istanbul ignore next */
    reader.onerror = error => reject(error);
});
/**
 * Recebe uma string base64 e converte para um arquivo
 *
 * @param string base64.
 */
const toFile = (url, fileName, mimeType) => fetch(url)
    .then(result => result.arrayBuffer())
    .then(buffer => new File([buffer], fileName, { type: mimeType }));

/**
 * @description
 *
 * Classe que define a resposta de erro para um item da fila de eventos que não foi enviado ao servidor por
 * alguma inconsistência.
 *
 * > Pode ser utilizada em casos onde um item da fila é enviado ao servidor com inconsistência nos dados, por exemplo
 * uma operação de *delete* ou *update* sem o `id` do objeto.
 */
class PoEventSourcingErrorResponse {
    /* istanbul ignore next */
    constructor({ message, operation }) {
        this.message = message;
        this.operation = operation;
    }
}

/**
 * @docsPrivate
 *
 * Define as operações realizadas no sync.
 */
var PoEventSourcingOperation;
(function (PoEventSourcingOperation) {
    // Operação de exclusão.
    PoEventSourcingOperation["Delete"] = "DELETE";
    // Operação de requisição HTTP.
    PoEventSourcingOperation["Http"] = "HTTP";
    // Operação de inserção.
    PoEventSourcingOperation["Insert"] = "INSERT";
    // Operação de alteração.
    PoEventSourcingOperation["Update"] = "UPDATE";
})(PoEventSourcingOperation || (PoEventSourcingOperation = {}));

/**
 * @usedBy PoHttpClientService, PoHttpCommandResponse, PoSyncService
 *
 * @description
 *
 * Define o método de requisição HTTP.
 */
var PoHttpRequestType;
(function (PoHttpRequestType) {
    /** Método `delete` do protocolo HTTP. */
    PoHttpRequestType["DELETE"] = "DELETE";
    /** Método `get` do protocolo HTTP. */
    PoHttpRequestType["GET"] = "GET";
    /** Método `head` do protocolo HTTP. */
    PoHttpRequestType["HEAD"] = "HEAD";
    /** Método `options` do protocolo HTTP. */
    PoHttpRequestType["OPTIONS"] = "OPTIONS";
    /** Método `patch` do protocolo HTTP. */
    PoHttpRequestType["PATCH"] = "PATCH";
    /** Método `post` do protocolo HTTP. */
    PoHttpRequestType["POST"] = "POST";
    /** Método `put` do protocolo HTTP. */
    PoHttpRequestType["PUT"] = "PUT";
})(PoHttpRequestType || (PoHttpRequestType = {}));

/**
 * @docsPrivate
 *
 * @description
 *
 * Método de requisição HTTP.
 */
var PoRequestType;
(function (PoRequestType) {
    PoRequestType["GET"] = "get";
    PoRequestType["DELETE"] = "delete";
    PoRequestType["DIFF"] = "diff";
    PoRequestType["PATCH"] = "patch";
    PoRequestType["POST"] = "post";
})(PoRequestType || (PoRequestType = {}));

/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço utilitário para operações no PoSyncSchema.
 */
class PoSchemaUtil {
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

/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que disponibiliza métodos que permite operar sobre as definições dos *schemas*.
 */
class PoSchemaDefinitionService {
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
    update(updatedSchema) {
        return __awaiter(this, void 0, void 0, function* () {
            let schemas = yield this.getAll();
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
        });
    }
}
PoSchemaDefinitionService.ɵfac = function PoSchemaDefinitionService_Factory(t) { return new (t || PoSchemaDefinitionService)(i0.ɵɵinject(i1.PoStorageService)); };
PoSchemaDefinitionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSchemaDefinitionService, factory: PoSchemaDefinitionService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSchemaDefinitionService, [{
            type: Injectable
        }], function () { return [{ type: i1.PoStorageService }]; }, null);
})();

/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que realiza as operações nos `schemas`.
 */
class PoSchemaService {
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
    create(schema, newRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = PoSchemaUtil.getRecordId(newRecord, schema);
            return this.save(schema, newRecord, id);
        });
    }
    /**
     * Destrói as chaves do *storage* que contém os registros dos *schemas*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando as chaves referentes aos *schemas* forem destruídas.
     */
    destroySchemasRecords() {
        return __awaiter(this, void 0, void 0, function* () {
            const schemas = yield this.poSchemaDefinitionService.getAll();
            const storageKeys = yield this.poStorage.keys();
            for (const key of storageKeys) {
                const schemaKey = schemas.find(schema => PoSchemaService.isSchemaKey(key, schema.name));
                if (schemaKey) {
                    const id = PoSchemaService.getIdByRecordKey(key);
                    yield this.remove(schemaKey.name, id);
                }
            }
        });
    }
    /**
     * Retorna o registro referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     * @param {any} recordId Id do registro.
     */
    get(schemaName, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const isLocalRecord = true;
            const localRecord = yield this.getRecord(schemaName, recordId, isLocalRecord);
            const record = yield this.getRecord(schemaName, recordId);
            return Object.assign(record, localRecord);
        });
    }
    /**
     * Retorna todos os registros referente ao *schema* informado.
     *
     * @param {string} schemaName Nome do *schema*.
     */
    getAll(schemaName) {
        return __awaiter(this, void 0, void 0, function* () {
            const storageKeys = yield this.poStorage.keys();
            const schemaRecords = [];
            for (const key of storageKeys) {
                if (PoSchemaService.isSchemaKey(key, schemaName)) {
                    const id = PoSchemaService.getIdByRecordKey(key);
                    schemaRecords.push(yield this.get(schemaName, id));
                }
            }
            return schemaRecords;
        });
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
    remove(schemaName, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const recordKey = PoSchemaService.getRecordKey(schemaName, recordId);
            const localRecordKey = PoSchemaService.getRecordKey(schemaName, recordId, true);
            yield this.poStorage.remove(recordKey);
            yield this.poStorage.remove(localRecordKey);
        });
    }
    /**
     * Atualiza um registro de um *schema* informado.
     *
     * @param {PoSyncSchema} schema **Schema* referente ao registro que será alterado.
     * @param {object} record Registro que será atualizado.
     * @param {any} recordId Id do registro que deseja ser alterado. Deve ser utilizado em casos em que o id foi alterado.
     */
    update(schema, record, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = PoSchemaUtil.getRecordId(record, schema);
            if (recordId) {
                record = yield this.updateRecordId(schema.name, record, recordId);
            }
            return this.save(schema, record, id);
        });
    }
    /**
     * Atualiza todos os registros de um *schema*.
     *
     * @param {PoSyncSchema} schema **Schema* referente aos registros que serão alterados.
     * @param {Array<object>} records Lista de registros que serão alterados.
     */
    updateAll(schema, records) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const record of records) {
                yield this.update(schema, record);
            }
        });
    }
    getRecord(schemaName, recordId, isLocalRecord = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.poStorage.get(PoSchemaService.getRecordKey(schemaName, recordId, isLocalRecord))) || {};
        });
    }
    save(schema, record, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { serverRecord, localRecord } = PoSchemaUtil.separateSchemaFields(schema, record);
            const recordKey = PoSchemaService.getRecordKey(schema.name, recordId);
            yield this.poStorage.set(recordKey, serverRecord);
            yield this.saveLocalFields(schema.name, localRecord, recordId);
            return record;
        });
    }
    saveLocalFields(schemaName, localFields, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const containsLocalFields = Object.keys(localFields).length;
            if (containsLocalFields) {
                const localRecordKey = PoSchemaService.getRecordKey(schemaName, recordId, true);
                yield this.poStorage.set(localRecordKey, localFields);
            }
        });
    }
    updateRecordId(schemaName, record, recordId) {
        return __awaiter(this, void 0, void 0, function* () {
            const isLocalRecord = true;
            const localRecord = yield this.getRecord(schemaName, recordId, isLocalRecord);
            yield this.remove(schemaName, recordId);
            return Object.assign(record, localRecord);
        });
    }
}
PoSchemaService.ɵfac = function PoSchemaService_Factory(t) { return new (t || PoSchemaService)(i0.ɵɵinject(PoSchemaDefinitionService), i0.ɵɵinject(i1.PoStorageService)); };
PoSchemaService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSchemaService, factory: PoSchemaService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSchemaService, [{
            type: Injectable
        }], function () { return [{ type: PoSchemaDefinitionService }, { type: i1.PoStorageService }]; }, null);
})();

/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço para execução de requisições HTTP.
 */
class PoHttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Constrói uma requisição HTTP personalizada.
     *
     * @param {PoHttpRequestData} poHttpOperationData Parâmetros para a construção
     * da requisição.
     */
    createRequest(poHttpOperationData) {
        const httpHeaders = this.createHttpHeaders(poHttpOperationData.headers);
        return this.httpClient.request(poHttpOperationData.method, poHttpOperationData.url, {
            observe: 'response',
            headers: httpHeaders,
            body: poHttpOperationData.body
        });
    }
    /**
     * Constrói uma requisição com o método `delete`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    delete(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.DELETE,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `get`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    get(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.GET,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `head`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    head(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.HEAD,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `options`.
     *
     * @param {string} url URL da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    options(url, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.OPTIONS,
            headers: httpHeaders
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `patch`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    patch(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.PATCH,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `post`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    post(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.POST,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    /**
     * Constrói uma requisição com o método `put`.
     *
     * @param {string} url URL da requisição.
     * @param {any} body Corpo da requisição.
     * @param {Array<PoHeaderOption>} httpHeaders Cabeçalhos da requisição.
     */
    put(url, body, httpHeaders) {
        const requestData = {
            url: url,
            method: PoHttpRequestType.PUT,
            headers: httpHeaders,
            body: body
        };
        return this.createRequest(requestData);
    }
    createHttpHeaders(poHttpOperationHeaders) {
        let httpHeaders = new HttpHeaders();
        if (poHttpOperationHeaders && poHttpOperationHeaders.length > 0) {
            poHttpOperationHeaders.forEach(poHttpHeader => (httpHeaders = httpHeaders.append(poHttpHeader.name, poHttpHeader.value)));
        }
        return httpHeaders;
    }
}
PoHttpClientService.ɵfac = function PoHttpClientService_Factory(t) { return new (t || PoHttpClientService)(i0.ɵɵinject(i1$1.HttpClient)); };
PoHttpClientService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoHttpClientService, factory: PoHttpClientService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoHttpClientService, [{
            type: Injectable
        }], function () { return [{ type: i1$1.HttpClient }]; }, null);
})();

class PoEventSourcingService {
    constructor(poSchemaDefinition, poSchemaService, poStorage, poHttpClient) {
        this.poSchemaDefinition = poSchemaDefinition;
        this.poSchemaService = poSchemaService;
        this.poStorage = poStorage;
        this.poHttpClient = poHttpClient;
        this.stoppedQueueEventSourcing = false;
        this.responseSubject = new Subject();
        this.schemasSyncConfig = {};
    }
    static getUrl(eventSourcingItem, schema, requestType) {
        const schemaUrl = PoSchemaUtil.getUrl(schema, requestType);
        const schemaId = eventSourcingItem.record[schema.idField];
        if (requestType === PoRequestType.GET) {
            return schemaUrl;
        }
        if ([PoRequestType.DELETE, PoRequestType.PATCH].includes(requestType)) {
            return schemaUrl ? `${schemaUrl}/${schemaId}` : `${PoSchemaUtil.getUrl(schema, PoRequestType.GET)}/${schemaId}`;
        }
        if (requestType === PoRequestType.POST) {
            return schemaUrl ? schemaUrl : PoSchemaUtil.getUrl(schema, PoRequestType.GET);
        }
    }
    create(schemaName, newItem, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Insert, newItem, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    createBatchEvents(schemaName, eventList) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventSourcingList = this.createEventSourcingList(schemaName, eventList);
            yield this.poStorage.appendArrayToArray(PoEventSourcingService.event_sourcing_name, eventSourcingList);
            this.notifyEventCreation();
        });
    }
    /**
     * Destrói a chave do *storage* que contém a fila de dados que estão esperando para serem enviados ao
     * servidor *(EventSourcing)*.
     *
     * @returns {Promise<void>} Promessa que é resolvida quando a chave referente a fila de *EventSourcing* for destruída.
     */
    destroyEventSourcingQueue() {
        return this.poStorage.remove(PoEventSourcingService.event_sourcing_name);
    }
    httpCommand(httpOperationData, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            httpOperationData = yield this.serializeBody(httpOperationData);
            const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Http, httpOperationData, undefined, customRequestId);
            yield this.insertEventSourcingQueue(eventSourcingItem);
            return eventSourcingItem.id;
        });
    }
    responsesSubject() {
        return this.responseSubject.asObservable();
    }
    onSaveData() {
        if (!this.eventSub) {
            this.eventSub = Observable.create(subscriber => (this.emitter = subscriber));
        }
        return this.eventSub;
    }
    remove(schemaName, itemToDelete, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Delete, itemToDelete, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    removeEventSourcingItem(idEventSourcingItem) {
        return this.poStorage.removeItemFromArray(PoEventSourcingService.event_sourcing_name, 'id', idEventSourcingItem);
    }
    syncGet() {
        const syncGetFunction = () => __awaiter(this, void 0, void 0, function* () {
            return this.poSchemaDefinition.getAll().then(schemas => {
                const schemaPromises = this.updateStorageSchemas(schemas);
                return Promise.all(schemaPromises);
            });
        });
        return this.poSchemaService.limitedCallWrap(syncGetFunction);
    }
    syncSend() {
        return __awaiter(this, void 0, void 0, function* () {
            const syncSendFunction = () => __awaiter(this, void 0, void 0, function* () {
                const itemOfQueue = yield this.poStorage.getFirstItem(PoEventSourcingService.event_sourcing_name);
                if (itemOfQueue) {
                    yield this.selectOperation(itemOfQueue);
                }
                if (this.stoppedQueueEventSourcing || !itemOfQueue) {
                    this.stoppedQueueEventSourcing = false;
                    return Promise.resolve();
                }
                return syncSendFunction();
            });
            return this.poSchemaService.limitedCallWrap(syncSendFunction);
        });
    }
    update(schemaName, itemUpdated, customRequestId) {
        const eventSourcingItem = this.createEventSourcingItem(PoEventSourcingOperation.Update, itemUpdated, schemaName, customRequestId);
        return this.insertEventSourcingQueue(eventSourcingItem);
    }
    /* Avalia se o body é do tipo File e se for converte para base64 */
    serializeBody(requestData) {
        return __awaiter(this, void 0, void 0, function* () {
            let { body, mimeType, bodyType, fileName } = requestData;
            if (body instanceof File) {
                bodyType = 'File';
                mimeType = body.type;
                fileName = body.name;
                body = yield toBase64(body);
            }
            return Object.assign(Object.assign({}, requestData), { body, mimeType, bodyType, fileName });
        });
    }
    buildUrlParams(schema, baseUrl, pageNumber) {
        const params = [];
        params.push(`${this.config.dataTransform.getPageSizeParamName()}=${schema.pageSize}`);
        params.push(`${this.config.dataTransform.getPageParamName()}=${pageNumber}`);
        return `${baseUrl}?${params.join('&')}`;
    }
    checkRecordIdExists(recordId, operation) {
        if (!recordId) {
            const error = {
                message: 'Identifier not defined',
                operation: operation
            };
            throw new PoEventSourcingErrorResponse(error);
        }
    }
    concatPageItems(pageAcumulator, requestBody) {
        if (requestBody[this.config.dataTransform.getItemsFieldName()]) {
            pageAcumulator.data = [...pageAcumulator.data, ...requestBody[this.config.dataTransform.getItemsFieldName()]];
        }
        return pageAcumulator;
    }
    createEventSourcingItem(operation, newItem, schemaName, customRequestId, id) {
        if (!schemaName && operation !== PoEventSourcingOperation.Http) {
            throw new Error('PoSyncSchema is not defined.');
        }
        return {
            id: id ? id : new Date().getTime(),
            dateTime: new Date().getTime(),
            schema: schemaName,
            operation: operation,
            record: newItem,
            customRequestId: customRequestId
        };
    }
    createEventSourcingList(schemaName, eventList) {
        return eventList.map((eventItem, index) => {
            const id = new Date().getTime() + index;
            return this.createEventSourcingItem(eventItem.operation, eventItem.record, schemaName, eventItem.customRequestId, id);
        });
    }
    createSchemaSyncConfig(schemaName) {
        this.schemasSyncConfig[schemaName] = {
            page: undefined,
            currentUrlDiff: undefined,
            responseDate: undefined
        };
    }
    deleteOperation(eventSourcingItem) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = yield this.poSchemaDefinition.get(eventSourcingItem.schema);
                const recordId = eventSourcingItem.record[schema.idField];
                this.checkRecordIdExists(recordId, PoEventSourcingOperation.Delete);
                const url = PoEventSourcingService.getUrl(eventSourcingItem, schema, PoRequestType.DELETE);
                const response = yield this.sendServerItem(url, PoHttpRequestType.DELETE);
                yield this.removeEventSourcingValidItem(response.status, eventSourcingItem);
                return yield this.sendResponseSubject(eventSourcingItem, response);
            }
            catch (errorResponse) {
                return this.sendResponseSubject(eventSourcingItem, errorResponse, true);
            }
        });
    }
    diffServerItems(currentUrlDiff) {
        return this.poHttpClient.get(currentUrlDiff);
    }
    getBodyAndDate(schemaName, response) {
        const getDateFieldName = this.config.dataTransform.getDateFieldName();
        const responseSyncDate = response.body[getDateFieldName];
        this.schemasSyncConfig[schemaName]['responseDate'] = responseSyncDate;
        return response.body;
    }
    getServerDiffRecords(schema, baseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const initialAcumulatorPage = { entity: schema.name, data: [] };
            const diffUrl = this.schemasSyncConfig[schema.name]['currentUrlDiff'];
            const serverResponse = yield this.diffServerItems(diffUrl)
                .pipe(map(response => this.getBodyAndDate(schema.name, response)), expand(data => this.paginateSchemaData(data, schema, baseUrl)), reduce((pageAcumulator, requestBody) => this.concatPageItems(pageAcumulator, requestBody), initialAcumulatorPage))
                .toPromise();
            return serverResponse.data;
        });
    }
    httpOperation(eventSourcingItem) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = yield this.createPoHttpRequestData(eventSourcingItem.record.url, eventSourcingItem.record.method, eventSourcingItem.record, eventSourcingItem.record.headers);
                const response = yield this.poHttpClient.createRequest(requestData).toPromise();
                const poHttpCommandResponse = {
                    id: eventSourcingItem.id,
                    customRequestId: eventSourcingItem.customRequestId,
                    request: eventSourcingItem.record,
                    response: response
                };
                this.responseSubject.next(poHttpCommandResponse);
                return this.removeEventSourcingValidItem(response.status, eventSourcingItem);
            }
            catch (errorHttpClient) {
                return this.sendResponseSubject(eventSourcingItem, errorHttpClient, true);
            }
        });
    }
    insertEventSourcingQueue(eventSourcingItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventSourcingUpdatedQueue = yield this.poStorage.appendItemToArray(PoEventSourcingService.event_sourcing_name, eventSourcingItem);
            this.notifyEventCreation();
            return Promise.resolve(eventSourcingUpdatedQueue);
        });
    }
    insertOperation(currentEventSourcingItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yield this.poSchemaDefinition.get(currentEventSourcingItem.schema);
            const url = PoEventSourcingService.getUrl(currentEventSourcingItem, schema, PoRequestType.POST);
            try {
                const response = yield this.sendServerItem(url, PoHttpRequestType.POST, currentEventSourcingItem.record);
                const recordUpdatedByServer = response.body;
                yield this.removeEventSourcingValidItem(response.status, currentEventSourcingItem);
                const id = currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName];
                yield this.poSchemaService.update(schema, recordUpdatedByServer, id);
                const eventSourcingItems = yield this.poStorage.get(PoEventSourcingService.event_sourcing_name);
                yield this.updatePendingEventSourcing(currentEventSourcingItem, schema.idField, recordUpdatedByServer, eventSourcingItems);
                return this.sendResponseSubject(currentEventSourcingItem, response);
            }
            catch (errorHttpClient) {
                return this.sendResponseSubject(currentEventSourcingItem, errorHttpClient, true);
            }
        });
    }
    isValidStatus(status) {
        return PoEventSourcingService.VALID_HTTP_STATUS_CODES.includes(status);
    }
    notifyEventCreation() {
        if (this.emitter) {
            this.emitter.next();
        }
    }
    paginateSchemaData(data, schema, baseUrl) {
        this.config.dataTransform.transform(data);
        if (this.config.dataTransform.hasNext()) {
            this.schemasSyncConfig[schema.name]['currentUrlDiff'] = this.buildUrlParams(schema, baseUrl, ++this.schemasSyncConfig[schema.name]['page']);
            return this.diffServerItems(this.schemasSyncConfig[schema.name]['currentUrlDiff']).pipe(map(response => this.getBodyAndDate(schema.name, response)));
        }
        return of();
    }
    removeEventSourcingValidItem(status, eventSourcingItem) {
        if (this.isValidStatus(status) || eventSourcingItem.operation === PoEventSourcingOperation.Http) {
            return this.removeEventSourcingItem(eventSourcingItem.id);
        }
    }
    selectOperation(eventSourcingItem) {
        switch (eventSourcingItem.operation) {
            case PoEventSourcingOperation.Insert:
                return this.insertOperation(eventSourcingItem);
            case PoEventSourcingOperation.Update:
                return this.updateOperation(eventSourcingItem);
            case PoEventSourcingOperation.Delete:
                return this.deleteOperation(eventSourcingItem);
            case PoEventSourcingOperation.Http:
                return this.httpOperation(eventSourcingItem);
        }
    }
    sendResponseSubject(eventSourcingItem, response, isSubjectError = false) {
        const poSyncResponse = {
            id: eventSourcingItem.id,
            customRequestId: eventSourcingItem.customRequestId,
            request: eventSourcingItem.record,
            response: response
        };
        this.stoppedQueueEventSourcing = isSubjectError;
        this.responseSubject.next(poSyncResponse);
        return Promise.resolve();
    }
    sendServerItem(url, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestData = yield this.createPoHttpRequestData(url, method, body);
            return this.poHttpClient.createRequest(requestData).toPromise();
        });
    }
    createPoHttpRequestData(url, method, record, headers) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let body = (_a = record.body) !== null && _a !== void 0 ? _a : record;
            if (record.bodyType === 'File') {
                body = yield this.createFormData(body, record.fileName, record.mimeType, record.formField);
            }
            return { url, method, body, headers };
        });
    }
    createFormData(body, fileName, mimeType, formField = 'file') {
        return __awaiter(this, void 0, void 0, function* () {
            const file = yield toFile(body, fileName, mimeType);
            const formData = new FormData();
            formData.append(formField, file, fileName);
            return formData;
        });
    }
    updateOperation(eventSourcingItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yield this.poSchemaDefinition.get(eventSourcingItem.schema);
            const url = PoEventSourcingService.getUrl(eventSourcingItem, schema, PoRequestType.PATCH);
            try {
                const recordId = eventSourcingItem.record[schema.idField];
                this.checkRecordIdExists(recordId, PoEventSourcingOperation.Update);
                const response = yield this.sendServerItem(url, PoHttpRequestType.PUT, eventSourcingItem.record);
                yield this.removeEventSourcingValidItem(response.status, eventSourcingItem);
                return yield this.sendResponseSubject(eventSourcingItem, response);
            }
            catch (errorHttpClient) {
                return this.sendResponseSubject(eventSourcingItem, errorHttpClient, true);
            }
        });
    }
    updatePendingEventSourcing(currentEventSourcingItem, idFieldSchema, inserted, eventSourcingItems) {
        if (currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName]) {
            eventSourcingItems.forEach((eventSourcingItem, position) => {
                const isCurrentEventSourcingItem = !eventSourcingItem.record[idFieldSchema] &&
                    eventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName] ===
                        currentEventSourcingItem.record[PoSchemaUtil.syncInternalIdFieldName];
                if (isCurrentEventSourcingItem) {
                    eventSourcingItems[position].record[idFieldSchema] = inserted[idFieldSchema];
                }
            });
            return this.poStorage.set(PoEventSourcingService.event_sourcing_name, eventSourcingItems);
        }
        else {
            return Promise.resolve();
        }
    }
    updateRecords(serverRecords, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const serverRecord of serverRecords) {
                yield this.updateRecordByServerRecord(serverRecord, schema);
            }
        });
    }
    updateRecordByServerRecord(serverRecord, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const recordId = serverRecord[schema.idField];
            const storageRecord = yield this.poSchemaService.get(schema.name, recordId);
            const existsStorageRecord = !!Object.keys(storageRecord).length;
            if (existsStorageRecord && serverRecord[schema.deletedField]) {
                return yield this.poSchemaService.remove(schema.name, serverRecord[schema.idField]);
            }
            if (existsStorageRecord && !serverRecord[schema.deletedField]) {
                return yield this.poSchemaService.update(schema, serverRecord);
            }
            if (!existsStorageRecord && !serverRecord[schema.deletedField]) {
                return yield this.poSchemaService.create(schema, serverRecord);
            }
        });
    }
    updateStorageBySchema(schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.createSchemaSyncConfig(schema.name);
            this.schemasSyncConfig[schema.name]['page'] = 1;
            const baseUrl = `${PoSchemaUtil.getUrl(schema, PoRequestType.DIFF)}/${schema.lastSync}`;
            this.schemasSyncConfig[schema.name]['currentUrlDiff'] = this.buildUrlParams(schema, baseUrl, this.schemasSyncConfig[schema.name]['page']);
            const serverRecords = yield this.getServerDiffRecords(schema, baseUrl);
            yield this.updateRecords(serverRecords, schema);
            schema.lastSync = this.schemasSyncConfig[schema.name]['responseDate'];
            yield this.poSchemaDefinition.update(schema);
        });
    }
    updateStorageSchemas(schemas) {
        return schemas.map((schema) => this.updateStorageBySchema(schema));
    }
}
PoEventSourcingService.event_sourcing_name = 'EventSourcing';
PoEventSourcingService.VALID_HTTP_STATUS_CODES = [
    StatusCodes.OK,
    StatusCodes.CREATED,
    StatusCodes.ACCEPTED,
    StatusCodes.NON_AUTHORITATIVE_INFORMATION,
    StatusCodes.NO_CONTENT,
    StatusCodes.RESET_CONTENT,
    StatusCodes.PARTIAL_CONTENT,
    StatusCodes.MULTI_STATUS // 207
];
PoEventSourcingService.ɵfac = function PoEventSourcingService_Factory(t) { return new (t || PoEventSourcingService)(i0.ɵɵinject(PoSchemaDefinitionService), i0.ɵɵinject(PoSchemaService), i0.ɵɵinject(i1.PoStorageService), i0.ɵɵinject(PoHttpClientService)); };
PoEventSourcingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoEventSourcingService, factory: PoEventSourcingService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoEventSourcingService, [{
            type: Injectable
        }], function () { return [{ type: PoSchemaDefinitionService }, { type: PoSchemaService }, { type: i1.PoStorageService }, { type: PoHttpClientService }]; }, null);
})();

/**
 * @description
 *
 * Classe utilitária para construir consultas sobre os registros de um *schema*.
 *
 * A utilização dos métodos desta classe é feita a partir do retorno do método `PoEntity.find()`. Por exemplo,
 * para utilizar o método `PoQueryBuilder.page()`, é necessário:
 *
 * ``` typescript
 * PoSyncService.getModel('schema name').find().page(2).exec();
 * ```
 *
 * O `PoQueryBuilder` foi projetado para que os seus métodos sejam
 * chamados em cascata e ao final desse encadeamento invocar o método
 * `PoQueryBuilder.exec()` para que a busca seja concluída. Por exemplo:
 *
 * ``` typescript
 * PoSyncService
 *   .getModel('schema name')
 *   .find()
 *   .page(2)
 *   .pageSize(5)
 *   .sort()
 *   .exec();
 * ```
 */
class PoQueryBuilder {
    constructor(poSchemaService, schema) {
        this.poSchemaService = poSchemaService;
        this.schema = schema;
        this._page = 1;
        this.filters = {};
    }
    /**
     * Ao final da chamada dos métodos do `PoQueryBuilder` utilizados, este método deve ser chamado para que a busca seja concluída.
     *
     * @return {Promise<PoResponseApi | object>} Registros do *schema* na qual foi aplicado a consulta.
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            let storageData = yield this.poSchemaService.getAll(this.schema.name);
            if (storageData && storageData.length) {
                if (Object.keys(this.filters).length) {
                    storageData = this.applyFilters(storageData);
                }
                if (this.fields) {
                    storageData = this.applyFields(this.schema.fields, storageData);
                }
                if (this._sort) {
                    storageData = this.order(storageData, this._sort);
                }
                if (this._limit) {
                    return storageData[0];
                }
                else {
                    return this.paginate(storageData);
                }
            }
            else {
                return {
                    hasNext: false,
                    items: []
                };
            }
        });
    }
    /**
     * Aplica filtros sobre os registros, baseados nos campos e valores definidos como filtro. Por exemplo:
     *
     * ```
     * PoQueryBuilder.filter({ name: 'Marie', age: 24 });
     * ```
     * Retorna todos os registros que contenham a propriedade `name` igual a Marie e `age` igual a 24.
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    filter(filter) {
        if (filter && typeof filter === 'object') {
            this.filters = Object.assign(Object.assign({}, this.filters), filter);
        }
        else {
            throw new Error('Filter must be an object');
        }
        return this;
    }
    /**
     * Limita o número de registros que serão retornados.
     *
     * @param {number} limit Número de registros retornados.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    limit(limit) {
        this._limit = limit;
        return this;
    }
    /**
     * Especifica a página de registros que se deseja retornar.
     *
     * @param {number} page Número da página.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    page(page) {
        validateParameter({ page });
        this._page = page;
        return this;
    }
    /**
     * Define quantos elementos serão retornados por página.
     *
     * @param {number} pageSize Número de registros por página.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    pageSize(pageSize) {
        validateParameter({ pageSize });
        this._pageSize = pageSize;
        return this;
    }
    /**
     * Utilizado para definir quais campos do *schema* serão retornados na consulta.
     *
     * @param {string} fields Campos que serão retornados nos registros. Este campos devem estar dentro de
     * uma *string* separados por espaço podendo usar o caractere `-` para excluir campos.
     * Por exemplo, a definição abaixo:
     *
     * ```
     * PoQueryBuilder.select('name age address');
     * ```
     * Irá retornar apenas os campos `name`, `age` e `address`. Para não retornar um campo ou mais basta fazer:
     *
     * ```
     * PoQueryBuilder.select('-name -age');
     * ```
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    select(fields) {
        validateParameter({ fields });
        this.fields = fields;
        return this;
    }
    /**
     * Ordena os registros por um campo.
     *
     * @param {string} field Campo a ser ordenado. Para ordenar de forma decrescente basta colocar o caractere `-`
     * na frente do campo. Por exemplo:
     * ```
     * PoQueryBuilder.sort('-name');
     * ```
     *
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    sort(field) {
        validateParameter({ field });
        this._sort = field;
        return this;
    }
    /**
     * Essa função serve como alias para o `PoQueryBuilder.filter()`. É utilizada somente para dar maior legibilidade ao código.
     *
     * @param {object} filter Objeto que contém os campos e valores a serem filtrados no *schema*.
     * @returns {PoQueryBuilder} Objeto que possibilita encadear um novo método do `PoQueryBuilder`.
     */
    where(filter) {
        return this.filter(filter);
    }
    applyFields(schemaFields, data) {
        const receivedFields = this.fields.split(' ');
        let restrictedFields = [];
        let selectedFields = [];
        [selectedFields, restrictedFields] = this.groupFields(receivedFields);
        if (!selectedFields.length && restrictedFields.length) {
            selectedFields = [...schemaFields];
        }
        if (restrictedFields.length) {
            selectedFields = this.removeRestrictedFields(restrictedFields, selectedFields);
        }
        selectedFields = this.removeDuplicate(selectedFields);
        return this.removeFieldsData(data, selectedFields);
    }
    applyFilters(data) {
        Object.keys(this.filters).forEach(filterKey => {
            data = data.filter(item => item[filterKey] === this.filters[filterKey]);
        });
        return data;
    }
    groupFields(receivedFields) {
        const restrictedFields = [];
        const selectedFields = [];
        receivedFields.forEach(fields => {
            if (fields.startsWith('-')) {
                restrictedFields.push(fields.substring(1));
            }
            else {
                selectedFields.push(fields);
            }
        });
        return [selectedFields, restrictedFields];
    }
    paginate(data) {
        const dataLength = data.length;
        const pageSize = this._pageSize || dataLength;
        const pages = Math.ceil(dataLength / pageSize);
        const begin = this._page * pageSize - pageSize;
        const end = begin + pageSize;
        return { hasNext: this._page < pages, items: data.slice(begin, end) };
    }
    order(data, sortingField) {
        const descendingOrder = sortingField.startsWith('-');
        sortingField = descendingOrder ? sortingField.substr(1) : sortingField;
        return data.sort((optionA, optionB) => {
            if (optionA[sortingField] > optionB[sortingField]) {
                return !descendingOrder ? 1 : -1;
            }
            if (optionA[sortingField] < optionB[sortingField]) {
                return !descendingOrder ? -1 : 1;
            }
            return 0;
        });
    }
    removeDuplicate(fields) {
        return fields.filter((item, position) => fields.indexOf(item) === position);
    }
    removeFieldsData(data, chosenFields) {
        data.forEach(item => {
            Object.keys(item).forEach(keyItem => {
                if (!chosenFields.includes(keyItem)) {
                    delete item[keyItem];
                }
            });
        });
        return data;
    }
    removeRestrictedFields(restrictedFields, fields) {
        return fields.filter(field => !restrictedFields.includes(field));
    }
}

/**
 * @description
 *
 * Uma instância `PoEntity` representa um *schema* e ela contém métodos que possibilitam manipular seus registros,
 * como por exemplo: buscar, criar e remover.
 *
 * Esta instância pode ser obtida a partir do retorno do método `PoSyncService.getModel('schema name')`.
 */
class PoEntity {
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
    remove(record, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            validateParameter({ record });
            const remove = () => __awaiter(this, void 0, void 0, function* () {
                const idField = record[this.schema.idField] ? this.schema.idField : PoSchemaUtil.syncInternalIdFieldName;
                const serverRecord = PoSchemaUtil.separateSchemaFields(this.schema, record)['serverRecord'];
                yield this.poSchemaService.remove(this.schema.name, record[idField]);
                yield this.eventSourcing.remove(this.schema.name, serverRecord, customRequestId);
            });
            return this.poSchemaService.limitedCallWrap(remove);
        });
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
    save(record, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            validateParameter({ record });
            return this.poSchemaService.limitedCallWrap(this.selectSaveType.bind(this, record, true, customRequestId));
        });
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
    saveAll(records, customRequestIds) {
        return __awaiter(this, void 0, void 0, function* () {
            validateParameter({ records });
            const saveAll = () => __awaiter(this, void 0, void 0, function* () {
                const batchEvents = [];
                for (let index = 0; index < records.length; index++) {
                    const record = records[index];
                    const sendToEventSourcing = false;
                    const isNonLocalRecordChanged = yield this.isNonLocalRecordChanged(record);
                    const updatedRecord = yield this.selectSaveType(record, sendToEventSourcing);
                    if (isNonLocalRecordChanged) {
                        const customRequestId = customRequestIds instanceof Array ? customRequestIds[index] : customRequestIds;
                        const eventOperation = this.createEventOperation(record, updatedRecord, customRequestId);
                        batchEvents.push(eventOperation);
                    }
                }
                yield this.eventSourcing.createBatchEvents(this.schema.name, batchEvents);
            });
            return this.poSchemaService.limitedCallWrap(saveAll);
        });
    }
    create(newRecord, sendToEventSourcing, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const time = new Date().getTime();
            const syncProperties = {
                [PoSchemaUtil.syncInternalIdFieldName]: time,
                SyncInsertedDateTime: time,
                SyncUpdatedDateTime: null,
                SyncExclusionDateTime: null,
                SyncDeleted: false,
                SyncStatus: 0
            };
            const recordWithSyncProperties = Object.assign(Object.assign({}, newRecord), syncProperties);
            const recordedData = yield this.poSchemaService.create(this.schema, recordWithSyncProperties);
            if (sendToEventSourcing) {
                yield this.eventSourcing.create(this.schema.name, recordWithSyncProperties, customRequestId);
            }
            return recordedData;
        });
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
    isNonLocalRecordChanged(updatedRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            const nonLocalFieldNames = PoSchemaUtil.getNonLocalFieldNames(this.schema);
            const record = yield this.poSchemaService.get(this.schema.name, updatedRecord[this.schema.idField]);
            return !PoSchemaUtil.isModelsEqual(nonLocalFieldNames, record, updatedRecord);
        });
    }
    selectSaveType(record, sendToEventSourcing, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasId = PoSchemaUtil.getRecordId(record, this.schema);
            return hasId
                ? yield this.update(record, sendToEventSourcing, customRequestId)
                : yield this.create(record, sendToEventSourcing, customRequestId);
        });
    }
    update(updatedRecord, sendToEventSourcing, customRequestId) {
        return __awaiter(this, void 0, void 0, function* () {
            updatedRecord.SyncUpdatedDateTime = new Date().getTime();
            updatedRecord.SyncStatus = 0;
            const isNonLocalRecordChanged = yield this.isNonLocalRecordChanged(updatedRecord);
            const recordedData = yield this.poSchemaService.update(this.schema, updatedRecord);
            if (isNonLocalRecordChanged && sendToEventSourcing) {
                const serverRecord = PoSchemaUtil.separateSchemaFields(this.schema, updatedRecord)['serverRecord'];
                yield this.eventSourcing.update(this.schema.name, serverRecord, customRequestId);
            }
            return recordedData;
        });
    }
}

/**
 * @usedBy PoSyncConfig, PoNetworkStatus
 *
 * @description
 *
 * Tipos de rede existentes no dispositivo.
 */
var PoNetworkType;
(function (PoNetworkType) {
    /** Define o tipo de rede como desconhecido (`unknown`). */
    PoNetworkType[PoNetworkType["unknown"] = 0] = "unknown";
    /** Define o tipo de rede como `Ethernet`. */
    PoNetworkType[PoNetworkType["ethernet"] = 1] = "ethernet";
    /** Define o tipo de rede como `WiFi`. */
    PoNetworkType[PoNetworkType["wifi"] = 2] = "wifi";
    /** Define o tipo de rede como `2G`. */
    PoNetworkType[PoNetworkType["_2g"] = 3] = "_2g";
    /** Define o tipo de rede como `3G`. */
    PoNetworkType[PoNetworkType["_3g"] = 4] = "_3g";
    /** Define o tipo de rede como `4G`. */
    PoNetworkType[PoNetworkType["_4g"] = 5] = "_4g";
    /**
     * Define o tipo de rede como `cellular`. Isso acontece na utilização dos navegadores
     * dentro do dispositvo móvel, com exceção do *web view*.
     */
    PoNetworkType[PoNetworkType["cellular"] = 6] = "cellular";
    /** Define o tipo de rede como `none`. */
    PoNetworkType[PoNetworkType["none"] = 7] = "none";
})(PoNetworkType || (PoNetworkType = {}));

/**
 * @docsPrivate
 *
 * @description
 *
 * Classe responsável por implementar a classe `PoDataTransform` com os campos referentes ao padrão de
 * [API do PO UI](https://po-ui.io/guides/api).
 */
class PoDataMessage extends PoDataTransform {
    /**
     * Retorna a propriedade `po_sync_date`, responsável por informar a data da última sincronização no guia de
     * [API do PO UI](https://po-ui.io/guides/api).
     *
     * @returns {string} Nome do campo que contém a data da última sincronização.
     */
    getDateFieldName() {
        return 'po_sync_date';
    }
    /**
     * Retorna a propriedade `items`, responsável por informar a lista de registros vindos da API no guia de
     * [API do PO UI](https://po-ui.io/guides/api).
     *
     * @returns {string} Nome da propriedade que contém a lista de registros.
     */
    getItemsFieldName() {
        return 'items';
    }
    /**
     * Retorna a propriedade `page`, responsável por informar o número da página de registros que a API retorna no guia de
     * [API do PO UI](https://po-ui.io/guides/api).
     *
     * @returns {string} Nome da propriedade responsável por informar o número da página de registros.
     */
    getPageParamName() {
        return 'page';
    }
    /**
     * Retorna a propriedade `pageSize`, responsável pela quantidade de registros que serão exibidos por página no guia de
     * [API do PO UI](https://po-ui.io/guides/api).
     *
     * @returns {string} Nome do parâmetro responsável pela quantidade de registros por página.
     */
    getPageSizeParamName() {
        return 'pageSize';
    }
    /**
     * Retorna um valor `boolean`, de acordo com a propriedade `hasNext` que é responsável por informar se há uma nova
     * página de registros disponível no guia de [API do PO UI](https://po-ui.io/guides/api).
     *
     * @returns {boolean} Informa se tem próxima página de registros.
     */
    hasNext() {
        return this.data.hasNext;
    }
}

/**
 * @description
 *
 * Classe responsável por identificar a conexão de rede disponível no dispositivo.
 */
class PoNetworkStatus {
    constructor(networtkType) {
        this.setNetworkConnection(networtkType);
    }
    /**
     * Retorna se o dispositivo está conectado na rede.
     *
     * @returns {boolean} Status da conexão com a rede.
     */
    get status() {
        return this.type !== PoNetworkType.none;
    }
    /**
     * Retorna o tipo de conexão do dispositivo.
     *
     * @returns {PoNetworkType} Tipo da conexão com a rede.
     */
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    /* istanbul ignore next */
    setDefaultTypeNavigation() {
        return navigator.onLine ? PoNetworkType['ethernet'] : PoNetworkType.none;
    }
    setNetworkConnection(networtkType) {
        if (!networtkType) {
            this.type = this.setDefaultTypeNavigation();
        }
        else {
            const isGenerationMobile = ['2g', '3g', '4g'].includes(networtkType);
            this.type = isGenerationMobile ? PoNetworkType['_' + networtkType] : PoNetworkType[String(networtkType)];
        }
    }
}

/**
 * @description
 *
 * O `PoNetworkService` é utilizado para verificar o status e o tipo da conexão de rede do dispositivo.
 */
class PoNetworkService {
    constructor(network) {
        this.initNetwork(network);
    }
    /**
     * Retorna as propriedades tipo e status da conexão do dispositivo no momento da chamada.
     *
     * @returns {PoNetworkStatus} Instância de [PoNetworkStatus](/documentation/po-network-status) com as
     * propriedades da conexão.
     */
    getConnectionStatus() {
        this.poNetworkStatus = new PoNetworkStatus(this.networkType);
        return this.poNetworkStatus;
    }
    /**
     * Notifica as mudanças no tipo de conexão de rede do dispositivo.
     *
     * @returns {Observable<{ status: boolean, type: string }>} Observable com as propriedades da conexão.
     */
    onChange() {
        return this.networkTypeNow.asObservable();
    }
    getNavigatorStatus() {
        return merge(fromEvent(window, 'offline').pipe(mapTo(false)), fromEvent(window, 'online').pipe(mapTo(true)), Observable.create(sub => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    initNetwork(network) {
        this.networkTypeNow = new Subject();
        this.initSubscriber(network);
    }
    initSubscriber(network) {
        if (network) {
            this.getNavigatorStatus().subscribe(status => {
                this.networkType = network.type;
                this.networkTypeNow.next({ status: status, type: this.networkType });
            });
        }
    }
}
PoNetworkService.ɵfac = function PoNetworkService_Factory(t) { return new (t || PoNetworkService)(i0.ɵɵinject(i1$2.Network)); };
PoNetworkService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoNetworkService, factory: PoNetworkService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNetworkService, [{
            type: Injectable
        }], function () { return [{ type: i1$2.Network }]; }, null);
})();

/**
 * @description
 *
 * O `PoSyncService` é utilizado para configurar toda a base de dados que receberá as informações que serão
 * armazenadas *offline* vindas do servidor. Nele ocorre toda a preparação dos modelos de dados retornados por
 * cada consulta.
 */
class PoSyncService {
    constructor(poEventSourcingService, poHttpClient, poNetworkService, poSchemaDefinitionService, poSchemaService) {
        this.poEventSourcingService = poEventSourcingService;
        this.poHttpClient = poHttpClient;
        this.poNetworkService = poNetworkService;
        this.poSchemaDefinitionService = poSchemaDefinitionService;
        this.poSchemaService = poSchemaService;
        this.models = [];
        this.finishSyncSubject = new Subject();
        this.isSyncEnabled = true;
        this.syncing = false;
    }
    /**
     * Destrói todas as chaves do *storage* referentes ao `po-sync`, ou seja,
     * as definições dos *schemas*, os registros de cada *schema* e a fila
     * de eventos que estão para ser enviados ao servidor *(EventSourcing)*.
     *
     * > Para que não venham ocorrer erros em ações que dependam das definições dos *schemas*,
     * recomenda-se utilizar o método `prepare()` em seguida.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Alterando as definições dos schemas](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que é resolvida quando as chaves referentes ao `po-sync` forem destruídas.
     */
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const destroyFunction = () => __awaiter(this, void 0, void 0, function* () {
                yield this.poSchemaService.destroySchemasRecords();
                yield this.poSchemaDefinitionService.destroy();
                yield this.poEventSourcingService.destroyEventSourcingQueue();
            });
            return this.poSchemaService.limitedCallWrap(destroyFunction);
        });
    }
    /**
     * Desabilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * > Para habilitar novamente a sincronização utilize o método [`PoSyncService.enableSync()`](documentation/po-sync#enable-sync).
     */
    disableSync() {
        this.isSyncEnabled = false;
        if (this.timer && this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * <a id="enable-sync"></a>
     * Habilita todos os tipos de sincronização de dados (periódica, reativa e manual).
     *
     * Por padrão, sempre que se inicializa uma aplicação com PO Sync as sincronizações já estão habilitadas.
     */
    enableSync() {
        this.isSyncEnabled = true;
        this.createSubscribe();
    }
    /**
     * Método que disponibiliza a partir de sua inscrição o evento de retorno das operações da fila de eventos que
     * foram enviadas ao servidor. A cada operação enviada para o servidor, será disparado um evento para a inscrição
     * deste método.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<PoSyncResponse>} Observable com um objeto do tipo `PoSyncResponse`.
     */
    getResponses() {
        return this.poEventSourcingService.responsesSubject();
    }
    /**
     * Retorna uma instância de `PoEntity` para um determinado *schema*.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Manipulando os registros de um schema](/guides/sync-fundamentals).
     *
     * @param {string} schemaName Nome do *schema*.
     * @returns {PoEntity} Objeto para efetuar consultas e alterações nos dados.
     */
    getModel(schemaName) {
        const model = this.models[schemaName];
        if (!model) {
            throw new Error('Model not found: ' + schemaName);
        }
        return model;
    }
    /**
     * Insere uma requisição HTTP na fila de eventos do `po-sync`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Inserindo requisições HTTP na fila de eventos](/guides/sync-fundamentals).
     *
     * @param {PoHttpRequestData} poHttpRequestData Dados da requisição HTTP.
     * @param {string} customRequestId Identificador customizado da requisição HTTP.
     * @returns {Promise<number>} Promessa com o identificador da requisição HTTP criada.
     */
    insertHttpCommand(requestData, customRequestId) {
        validateParameter({ requestData });
        return this.poEventSourcingService.httpCommand(requestData, customRequestId);
    }
    /**
     * Efetua uma chamada na API do servidor para realizar a carga inicial dos dados. Deve ser chamado apenas uma vez
     * na aplicação, após a preparação dos *schemas* realizada através do método `PoSyncService.prepare()`.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Carga inicial dos dados](/guides/sync-fundamentals).
     *
     * @returns {Observable<Array<{ entity: string, data: Array<any> }>>} Observable que notificará quando a
     * carga inicial for concluída.
     */
    loadData() {
        const loads = [];
        this.schemas.forEach(el => loads.push(this.loadEntityData(el)));
        return forkJoin(loads);
    }
    /**
     * Responsável por notificar sempre que houver sincronismo.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Notificação pós-sincronização](/guides/sync-fundamentals).
     *
     * @returns {Observable<any>} Observable que é disparado a cada sincronismo realizado.
     */
    onSync() {
        if (!this.eventSub) {
            this.eventSub = Observable.create(e => {
                this.emitter = e;
            });
        }
        return this.eventSub;
    }
    /**
     * Prepara a aplicação criando os schemas e aplica as configurações.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Preparando a aplicação](/guides/sync-fundamentals).
     *
     * @param {Array<PoSyncSchema>} schemas Lista de *schemas* a serem preparados.
     * @param {PoSyncConfig} config Configurações adicionais.
     * @returns {Promise<any>} Promessa que é resolvida quando a aplicação estiver preparada para a utilização do `po-sync`.
     */
    prepare(schemas, config) {
        validateArray({ schemas });
        const defaultSyncConfig = {
            type: this.poNetworkService.getConnectionStatus().type,
            period: 60,
            dataTransform: new PoDataMessage()
        };
        this.schemas = schemas;
        this.config = config || defaultSyncConfig;
        this.config.dataTransform = this.config.dataTransform || new PoDataMessage();
        this.poEventSourcingService.config = this.config;
        this.startTimer(this.config.period);
        this.reactiveSync();
        this.poEventSourcingService.onSaveData().subscribe(() => this.sync());
        return this.saveSchemas().then(() => {
            this.schemas.forEach(schema => {
                this.models[schema.name] = new PoEntity(this.poEventSourcingService, schema, this.poSchemaService);
            });
            return Promise.resolve();
        });
    }
    /**
     * Remove um item da fila de eventos que espera a sincronização.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @param {any} idEventSourcing Identificador do item da fila de eventos.
     * @returns {Promise<any>} Promessa que é resolvida quando o item da fila de eventos é removido.
     */
    removeItemOfSync(idEventSourcing) {
        return this.poEventSourcingService.removeEventSourcingItem(idEventSourcing);
    }
    /**
     * Reenvia os comandos pendentes na fila (inclusão, alteração e exclusão) e busca novos dados do servidor.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Capturando respostas da sincronização](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que resolve o sincronismo disparado.
     */
    resumeSync() {
        if (!this.canSync()) {
            const finishSyncSubscription = this.finishSyncSubject.asObservable().subscribe(() => {
                finishSyncSubscription.unsubscribe();
                return this.sync();
            });
            return Promise.resolve();
        }
        return this.sync();
    }
    /**
     * Dispara o sincronismo enviando os eventos pendentes (inclusão, alteração e exclusão) e buscando novos dados do servidor.
     *
     * O sincronismo somente será executado depois que o acesso a base de dados local do dispositivo for liberada.
     *
     * > Veja mais detalhes em [Fundamentos do PO Sync - Sincronização manual](/guides/sync-fundamentals).
     *
     * @returns {Promise<any>} Promessa que é resolvida quando o sincronismo for finalizado.
     */
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.canSync()) {
                this.startSync();
                try {
                    yield this.poEventSourcingService.syncSend();
                    yield this.poEventSourcingService.syncGet();
                    if (this.emitter) {
                        this.emitter.next();
                    }
                    this.finishSync();
                }
                catch (error) {
                    this.syncError();
                }
            }
        });
    }
    canSync() {
        if (this.syncing || !this.isSyncEnabled) {
            return false;
        }
        else {
            const currentConnection = this.poNetworkService.getConnectionStatus();
            const isConfiguredConnection = this.config && currentConnection.type === this.config.type;
            const isConfigIncludesType = this.config && this.config.type instanceof Array && this.config.type.includes(currentConnection.type);
            return currentConnection.status && (!this.config || isConfiguredConnection || isConfigIncludesType);
        }
    }
    createSubscribe() {
        if (this.timer) {
            this.subscription = this.timer.subscribe(() => {
                this.sync().then(() => {
                    this.subscription.unsubscribe();
                    this.subscription = null;
                    this.timer = null;
                    this.startTimer(this.config.period);
                });
            });
        }
    }
    finishSync() {
        this.syncing = false;
        this.finishSyncSubject.next(null);
    }
    getOnePage(schema, page = 1) {
        const params = [];
        params.push(`${this.config.dataTransform.getPageSizeParamName()}=${schema.pageSize}`);
        params.push(`${this.config.dataTransform.getPageParamName()}=${page}`);
        const url = `${PoSchemaUtil.getUrl(schema, PoRequestType.GET)}?${params.join('&')}`;
        return this.poHttpClient.get(url).pipe(map(response => response.body), mergeMap(responseBody => {
            const now = new Date().getTime();
            responseBody[this.config.dataTransform.getItemsFieldName()].map(item => {
                item.SyncInsertedDateTime = now;
                item.SyncUpdatedDateTime = null;
                item.SyncExclusionDateTime = null;
                item.SyncDeleted = false;
                item.SyncStatus = 2;
            });
            return this.poSchemaService
                .updateAll(schema, responseBody[this.config.dataTransform.getItemsFieldName()])
                .then(() => responseBody);
        }));
    }
    loadEntityData(schema) {
        let page = 1;
        return this.getOnePage(schema, page).pipe(expand(data => {
            this.config.dataTransform.transform(data);
            const hasNext = this.config.dataTransform.hasNext();
            if (hasNext) {
                return this.getOnePage(schema, ++page);
            }
            else {
                return of();
            }
        }), reduce((acc, obj) => {
            acc.data = acc.data.concat(obj[this.config.dataTransform.getItemsFieldName()]);
            return acc;
        }, {
            entity: schema.name,
            data: []
        }));
    }
    reactiveSync() {
        this.poNetworkService.onChange().subscribe(networkStatus => {
            if (networkStatus.status) {
                this.startTimer(this.config.period);
                return this.sync();
            }
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        });
    }
    saveSchemas() {
        return __awaiter(this, void 0, void 0, function* () {
            const storageSchemas = yield this.poSchemaDefinitionService.getAll();
            this.schemas.forEach(schema => (schema.lastSync = PoSchemaUtil.getLastSync(storageSchemas, schema.name)));
            return this.poSchemaDefinitionService.saveAll(this.schemas);
        });
    }
    startSync() {
        this.syncing = true;
    }
    startTimer(period) {
        if (period && this.isSyncEnabled) {
            this.timer = timer(period * 1000);
            this.createSubscribe();
        }
    }
    syncError() {
        this.finishSync();
    }
}
PoSyncService.ɵfac = function PoSyncService_Factory(t) { return new (t || PoSyncService)(i0.ɵɵinject(PoEventSourcingService), i0.ɵɵinject(PoHttpClientService), i0.ɵɵinject(PoNetworkService), i0.ɵɵinject(PoSchemaDefinitionService), i0.ɵɵinject(PoSchemaService)); };
PoSyncService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoSyncService, factory: PoSyncService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSyncService, [{
            type: Injectable
        }], function () { return [{ type: PoEventSourcingService }, { type: PoHttpClientService }, { type: PoNetworkService }, { type: PoSchemaDefinitionService }, { type: PoSchemaService }]; }, null);
})();

/**
 * @description
 *
 * Módulo do componente PoSync responsável pela sincronia de dados com backends
 */
class PoSyncModule {
}
PoSyncModule.ɵfac = function PoSyncModule_Factory(t) { return new (t || PoSyncModule)(); };
PoSyncModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PoSyncModule });
PoSyncModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        PoEventSourcingService,
        PoNetworkService,
        PoSchemaDefinitionService,
        PoSchemaService,
        PoSyncService,
        PoHttpClientService,
        Network
    ], imports: [HttpClientModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoSyncModule, [{
            type: NgModule,
            args: [{
                    providers: [
                        PoEventSourcingService,
                        PoNetworkService,
                        PoSchemaDefinitionService,
                        PoSchemaService,
                        PoSyncService,
                        PoHttpClientService,
                        Network
                    ],
                    imports: [HttpClientModule]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PoSyncModule, { imports: [HttpClientModule] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PoDataTransform, PoEntity, PoEventSourcingErrorResponse, PoEventSourcingService, PoHttpClientService, PoHttpRequestType, PoNetworkService, PoNetworkType, PoSyncModule, PoSyncService };
//# sourceMappingURL=po-ui-ng-sync.mjs.map
