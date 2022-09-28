import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as LocalForage from 'localforage';
import 'localforage';
import IdleQueue from 'custom-idle-queue';
import { PoLokiDriver } from '../drivers/lokijs/po-loki-driver';
import * as i0 from "@angular/core";
export const PO_STORAGE_CONFIG_TOKEN = new InjectionToken('PO_STORAGE_CONFIG_TOKEN');
/**
 * @description
 *
 * O PO Storage é uma biblioteca que fornece um serviço para armazenamento de dados no dispositivo local, sendo semelhante
 * ao funcionamento do [IonicStorage](https://ionicframework.com/docs/storage/).
 * É possível utilizar os drivers [Websql](https://dev.w3.org/html5/webdatabase/), [Indexeddb](https://www.w3.org/TR/IndexedDB/),
 * [LocalStorage](https://html.spec.whatwg.org/multipage/webstorage.html) e também [LokiJS](https://github.com/techfort/LokiJS/wiki).
 *
 * Para um melhor ganho de performance ao buscar e salvar dados, recomendamos a utilização do `LokiJS`, um *database*
 * orientado a documento semelhante ao MongoDB, que além de permitir a persistência dos dados no dispositivo possibilita
 * também o armazenamento dos dados em memória. Outra vantagem, é o aumento do limite de armazenamento para
 * aproximadamente `300mb`.
 *
 * A estrutura utilizada para armazenar os dados é a de chave/valor, onde uma chave funciona como um identificador exclusivo.
 *
 * #### Instalando o PO Storage
 *
 * Para instalar o `po-storage` em sua aplicação execute o seguinte comando:
 *
 * ```shell
 * ng add @po-ui/ng-storage
 * ```
 * Será instalado o pacote `@po-ui/ng-storage` e também já importará `PoStorageModule` no módulo principal da sua aplicação, conforme abaixo:
 *
 * ```typescript
 * import { PoStorageModule } from '@po-ui/ng-storage';
 *
 * @NgModule({
 *  declarations: [...],
 *  imports: [
 *    // Importação do módulo PoStorageModule
 *    PoStorageModule.forRoot(),
 *  ],
 *  bootstrap: [IonicApp],
 *  providers: [...]
 * })
 * export class AppModule {}
 * ```
 *
 * Com a declaração do módulo, é criada uma base de dados no armazenamento local e o serviço `PoStorageService` estará
 * pronto para ser utilizada na sua aplicação.
 *
 * #### Configurando as opções de armazenamento
 *
 * Na importação do módulo, o método `PoStorageModule.forRoot()` pode receber como parâmetro um objeto do tipo
 * [`PoStorageConfig`](documentation/po-storage#po-storage-config),
 * que serve para configurar as opções personalizadas do armazenamento, como por exemplo: o tipo de armazenamento
 * preferêncial.
 *
 * Caso não seja passada nenhuma configuração a ordem padrão será: ['websql', 'indexeddb', 'localstorage', 'lokijs'].
 *
 * Abaixo segue um exemplo de configuração onde o storage preferencial passa a ser o `lokijs`:
 *
 * ```typescript
 * import { PoStorageModule } from '@po-ui/ng-storage';
 *
 * @NgModule({
 *  declarations: [...],
 *  imports: [
 *    // Importação do módulo PoStorageModule com a configuração personalizada
 *    PoStorageModule.forRoot({
 *      name: 'mystorage',
 *      storeName: '_mystore',
 *      driverOrder: ['lokijs', 'websql', 'indexeddb', 'localstorage']
 *    }),
 *  ],
 *  bootstrap: [IonicApp],
 *  providers: [...]
 * })
 * export class AppModule {}
 * ```
 */
export class PoStorageService {
    constructor(config) {
        this.driver = null;
        this.idleQueue = new IdleQueue();
        this.lokijsDriver = new PoLokiDriver();
        this.setStoragePromise(config);
    }
    /**
     * Retorna a configuração padrão para o armazenamento. Caso nenhuma configuração seja inserida,
     * essa configuração será utilizada.
     *
     * @returns {PoStorageConfig} Objeto com a configuração padrão do armazenamento.
     */
    static getDefaultConfig() {
        return {
            name: '_postorage',
            storeName: '_pokv',
            driverOrder: ['websql', 'indexeddb', 'localstorage', 'lokijs']
        };
    }
    /**
     * Cria uma instância do `PoStorageService` com a configuração de armazenamento passada como parâmetro.
     *
     * @param {PoStorageConfig} storageConfig Configuração para o armazenamento.
     * @returns {PoStorageService} Instância do `PoStorageService`.
     */
    static providePoStorage(storageConfig) {
        return new PoStorageService(PoStorageService.getConfig(storageConfig));
    }
    static getConfig(storageConfig) {
        return storageConfig || PoStorageService.getDefaultConfig();
    }
    /**
     * Busca uma lista armazenada pela chave e concatena com a lista passada por parâmetro.
     *
     * Por exemplo:
     *
     * ``` typescript
     * const clients = [ { name: 'Marie', age: 23 }, { name: 'Pether', age: 39 }];
     *
     * this.poStorageService.set('clientKey', clients).then(() => {});
     *
     * ...
     *
     * const newClients = [ { name: 'Lisa', age: 36 }, { name: 'Bruce', age: 18 } ];
     *
     * this.poStorageService.appendArrayToArray('clientKey', newClients).then(() => {
     *   // A lista agora será:
     *   // [ { name: 'Marie', age: 23 }, { name: 'Pether', age: 39 }, { name: 'Lisa', age: 36 }, { name: 'Bruce', age: 18 }];
     * });
     * ```
     *
     * @param {string} key Chave da lista armazenada.
     * @param {Array} value Lista que será concatenada.
     *
     * @returns {Promise<any>} Promessa que é resolvida após as duas listas serem concatenadas e armazenadas localmente.
     */
    async appendArrayToArray(key, value) {
        const data = await this.getArrayOfStorage(key);
        const newData = [...data, ...value];
        return this.set(key, newData);
    }
    /**
     * Acrescenta um item em uma lista armazenada pela chave.
     *
     * @param {string} key Chave da lista armazenada.
     * @param {Array} value Item que será acrescentado na lista.
     *
     * @returns {Promise<any>} Promessa que é resolvida após o item ser acrescentado na lista armazenada.
     */
    async appendItemToArray(key, value) {
        const data = await this.getArrayOfStorage(key);
        data.push(value);
        return this.set(key, data);
    }
    /**
     * Remove todos os itens da base de dados local configurada na declaração do módulo `PoStorageModule`.
     *
     * > Utilize este método com cautela, para evitar a perda indesejada de dados.
     *
     * @returns {Promise<void>} Promessa que é resolvida após todos os itens da base de dados local serem removidos.
     */
    clear() {
        return this.storagePromise.then(store => store.clear());
    }
    /**
     * Verifica se existe um valor dentro de uma determinada chave.
     *
     * @param {string} key Chave que será verificada.
     *
     * @returns {Promise<boolean>} Promessa que é resolvida quando a verificação da existência do valor na chave é concluída.
     */
    exists(key) {
        return this.get(key).then(data => Promise.resolve(data !== null));
    }
    /**
     * Itera sobre todas as chaves armazenadas.
     *
     * @param {any} iteratorCallback Função de `callback` que é chamada a cada iteração, com os seguintes parâmetros:
     * valor, chave e número da iteração.
     *
     * Exemplo de utilização:
     *
     * ``` typescript
     * this.poStorageService.forEach((value: any, key: string, iterationNumber: number) => {
     *   // Iteração sobre cada chave armazenada.
     * });
     * ```
     *
     * @returns {Promise<void>} Promessa que é resolvida após a iteração sobre todas as chaves armazenadas.
     */
    forEach(iteratorCallback) {
        return this.storagePromise.then(store => store.iterate(iteratorCallback));
    }
    /**
     * Retorna o valor armazenado em uma determinada chave.
     *
     * @param {string} key Chave que identifica o item.
     * @param {boolean} lock Define se irá travar a leitura e a escrita da base de dados para não ser acessada de forma paralela.
     * Caso outra leitura/escrita já tenha sido iniciada, este método irá esperar o outro terminar para então começar.
     *
     * Padrão: `false`.
     *
     * > Esta definição só será válida se o outro acesso paralelo a este método também estiver com o parâmetro *lock* ativado.
     * @returns {Promise<any>} Promessa que é resolvida após o item ser buscado.
     */
    async get(key, lock = false) {
        if (lock) {
            await this.requestIdlePromise();
            return await this.idleQueue.wrapCall(async () => {
                await this.getImmutableItem(key);
            });
        }
        return await this.getImmutableItem(key);
    }
    /**
     * Retorna o nome do *driver* que está sendo usado para armazenar os dados, por exemplo: localStorage.
     *
     * @returns {string | null} Nome do *driver*.
     */
    getDriver() {
        return this.driver;
    }
    /**
     * Retorna o primeiro item de uma lista para uma determinada chave.
     *
     * @param {string} key Chave da lista.
     * @returns {Promise<any>} Promessa que é resolvida após o primeiro item ser encontrado.
     */
    getFirstItem(key) {
        return this.get(key).then((data) => Promise.resolve(data ? data[0] : null));
    }
    /**
     * Remove o primeiro item de uma lista a partir da chave.
     *
     * @param {string} key Chave da lista que será removido o primeiro item.
     * @returns {Promise<any>} Promessa que é resolvida após o primeiro item da lista ser removido.
     */
    getItemAndRemove(key) {
        return this.get(key).then((data) => {
            if (data === null) {
                return null;
            }
            const item = data.shift();
            return this.set(key, data).then(() => Promise.resolve(item));
        });
    }
    /**
     * Busca o primeiro objeto encontrado dentro de uma lista pelo do valor de um campo.
     *
     * Por exemplo:
     *
     * ``` typescript
     * const clients = [ { name: 'Marie', age: 23 }, { name: 'Pether', age: 39 }];
     *
     * this.poStorageService.set('clientKey', clients).then(() => {});
     *
     * ...
     *
     * this.poStorageService.getItemByField('clientKey', 'name', 'Marie').then(client => {
     *   // Resultado do console.log: { name: 'Marie', age: 23 }
     *   console.log(client);
     * });
     * ```
     *
     * @param {string} key Chave da lista.
     * @param {string} fieldName O campo a ser filtrado.
     * @param {any} fieldValue O valor do campo.
     * @returns {Promise<any>} Promessa que é resolvida com o item que foi encontrado.
     */
    getItemByField(key, fieldName, fieldValue) {
        return this.get(key).then((storageRecords) => {
            let storageRecordsFiltered = storageRecords.find(storageRecord => storageRecord[fieldName] === fieldValue);
            storageRecordsFiltered = storageRecordsFiltered || null;
            return Promise.resolve(storageRecordsFiltered);
        });
    }
    /**
     * Lista com todas as chaves armazenadas.
     *
     * @returns {Promise<Array<string>>} Promessa que é resolvida com todas as chaves armazenadas.
     */
    keys() {
        return this.storagePromise.then(store => store.keys());
    }
    /**
     * Quantidade de chaves armazenadas.
     *
     * @returns {Promise<number>} Promessa que é resolvida com o número de chaves armazenadas.
     */
    length() {
        return this.storagePromise.then(store => store.length());
    }
    /**
     * Utilizado para gerenciar o bloqueio e desbloqueio de recursos no `PoStorageService`.
     * Aguardando a liberação da utilização dos recursos que participam deste comportamento e posteriormente envolve o recurso
     * passado como parâmetro em um comportamento de bloqueio e desbloqueio.
     *
     * Este método se comporta igual a utilização em conjunta dos métodos: `PoStorageService.requestIdlePromise()`,
     * `PoStorageService.lock()` e `PoStorageService.unlook()`.
     *
     * Veja mais no método: [`PoStorage.requestIdlePromise()`](documentation/po-storage#request-idle-promise).
     *
     * @param {Function} limitedResource Função que será envolvida no comportamento de bloqueio e desbloqueio.
     */
    async limitedCallWrap(limitedResource) {
        await this.requestIdlePromise();
        return this.idleQueue.wrapCall(limitedResource);
    }
    /**
     * Incrementa um valor na fila de bloqueio do `PoStorageService`. Utilizado juntamente com o método `unlock` para poder
     * controlar a execução de uma determinada tarefa com o `PoStorage.requestIdlePromise()`.
     *
     * Veja mais no método: [`PoStorage.requestIdlePromise()`](documentation/po-storage#request-idle-promise).
     */
    lock() {
        this.idleQueue.lock();
    }
    /**
     * Determina se o processo de inicialização do *driver* assíncrono foi concluído.
     *
     * @returns {Promise<LocalForage>} Promessa que é resolvida quando o processo de inicialização do *driver* assíncrono
     * for concluído.
     */
    ready() {
        return this.storagePromise;
    }
    /**
     * Remove um valor associado a uma chave.
     *
     * @param {key} key Chave do valor que será removido.
     * @returns {Promise<any>} Promessa que é resolvida após o valor ser removido.
     */
    remove(key) {
        return this.storagePromise.then(store => store.removeItem(key));
    }
    /**
     * Remove uma propriedade de um objeto armazenado.
     *
     * @param {string} key Chave do objeto armazenado.
     * @param {string} property Propriedade que será removida.
     *
     * @returns {Promise<any>} Promessa que é resolvida após a propriedade ser removida.
     */
    async removeIndexFromObject(key, property) {
        const data = await this.getObjectOfStorage(key);
        delete data[property];
        return this.set(key, data);
    }
    /**
     * Remove um objeto de uma lista armazenada pelo valor de uma propriedade.
     *
     * Por exemplo:
     *
     * ``` typescript
     * const clients = [ { name: 'Marie', age: 23 }, { name: 'Pether', age: 39 }];
     *
     * this.poStorageService.set('clientKey', clients).then(() => {});
     *
     * ...
     *
     * this.poStorageService.removeItemFromArray('clientKey', 'name', 'Marie').then(() => {
     *   // O objeto { name: 'Marie', age: 23 } foi removido da lista que está na chave 'clientKey'
     * });
     * ```
     *
     * @param {string} key Chave da lista que contém o item que será removido.
     * @param {string} field O campo a ser filtrado no item.
     * @param {string} value O valor do filtro.
     * @returns {Promise<any>} Promessa que é resolvida quando o objeto for removido da lista.
     */
    async removeItemFromArray(key, field, value) {
        let data = await this.getArrayOfStorage(key);
        data = data.filter(item => item[field] !== value);
        return this.set(key, data);
    }
    /**
     * <a id="request-idle-promise"></a>
     * Método que verifica se o acesso a base de dados configurada está liberado.
     *
     * Utilizado em conjunto com os métodos `lock()` e `unlock()` entre tarefas que não podem ser executadas de forma
     * paralela, para não causar inconsistências nos dados.
     *
     * Exemplo de utilização:
     *
     * ```
     * // Aguarda a liberação para continuar
     * await this.poStorage.requestIdlePromise();
     *
     * this.poStorage.lock();
     *
     * // Executa uma tarefa que irá ler e/ou escrever na base de dados configurada.
     *
     * this.poStorage.unlock();
     * ```
     *
     * > É importante sempre utilizá-lo antes de executar os métodos `lock()` e `unlock()` para garantir que a tarefa só
     * será executada caso o acesso esteja livre.
     *
     * @returns {Promise<any>} Promessa que é resolvida quando o acesso a base de dados configurada estiver liberado.
     */
    requestIdlePromise() {
        return this.idleQueue.requestIdlePromise();
    }
    /**
     * Grava um valor em uma determinada chave.
     *
     * @param {string} key Chave para o valor que será gravado.
     * @param {any} value Valor que será gravado.
     * @param {boolean} lock Define se irá travar a leitura e a escrita da base de dados para não ser acessada de forma paralela.
     * Caso outra leitura/escrita já tenha sido iniciada, este método irá esperar o outro terminar para então começar.
     *
     * Padrão: `false`.
     *
     * > Esta definição só será válida se o outro acesso paralelo a este método também estiver com o parâmetro *lock* ativado.
     * @returns {Promise<any>} Promessa que é resolvida após o valor ter sido gravado.
     */
    async set(key, value, lock = false) {
        const store = await this.storagePromise;
        const newValue = typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
        if (lock) {
            await this.requestIdlePromise();
            return this.idleQueue.wrapCall(() => store.setItem(key, newValue));
        }
        return store.setItem(key, newValue);
    }
    /**
     * Atribui um valor a uma propriedade de um objeto armazenado pela chave.
     *
     * Por exemplo:
     *
     * ``` typescript
     * const clients = [ { name: 'Marie', age: 23 }, { name: 'Pether', age: 39 }];
     *
     * this.poStorageService.set('clientKey', clients).then(() => {});
     *
     * ...
     *
     * this.poStorageService.setIndexToObject('clientKey', 'name', 'Clare').then(() => {
     *   // O objeto { name: 'Marie', age: 23 } passa a ser { name: 'Clare', age: 23 }
     * });
     * ```
     *
     * @param {string} key Chave do objeto.
     * @param {string} property Nome da propriedade do objeto.
     * @param {any} value Valor que será gravado na propriedade do objeto.
     */
    async setIndexToObject(key, property, value) {
        const data = await this.getObjectOfStorage(key);
        data[property] = value;
        return this.set(key, data);
    }
    /**
     * Decrementa um valor na fila de bloqueio. Utilizado juntamente com o método `lock` para poder
     * controlar a execução de uma determinada tarefa com o `PoStorage.requestIdlePromise()`.
     *
     * Veja mais no método: [`PoStorage.requestIdlePromise()`](documentation/po-storage#request-idle-promise).
     */
    unlock() {
        this.idleQueue.unlock();
    }
    async getArrayOfStorage(key) {
        const data = await this.get(key);
        return data || [];
    }
    async getImmutableItem(key) {
        const store = await this.storagePromise;
        const items = await store.getItem(key);
        return items ? JSON.parse(JSON.stringify(items)) : null;
    }
    async defineLocalForageDriver(localForageInstance, driverOrder) {
        await localForageInstance.defineDriver(this.lokijsDriver.getDriver());
        await this.setDriver(localForageInstance, driverOrder);
        return localForageInstance;
    }
    getDriverOrder(driverOrder) {
        return driverOrder.map(driver => {
            switch (driver) {
                case 'indexeddb':
                    return LocalForage.INDEXEDDB;
                case 'websql':
                    return LocalForage.WEBSQL;
                case 'localstorage':
                    return LocalForage.LOCALSTORAGE;
                default:
                    return driver;
            }
        });
    }
    async getObjectOfStorage(key) {
        const data = await this.get(key);
        return data || {};
    }
    async setDriver(localForageInstance, driverOrder) {
        await localForageInstance.setDriver(this.getDriverOrder(driverOrder));
        this.driver = localForageInstance.driver();
    }
    setStoragePromise(config) {
        this.storagePromise = this.getStorageInstance(config);
    }
    async getStorageInstance(config) {
        const defaultConfig = PoStorageService.getDefaultConfig();
        const actualConfig = Object.assign(defaultConfig, config || {});
        const localForageInstance = LocalForage.createInstance(actualConfig);
        try {
            return await this.defineLocalForageDriver(localForageInstance, actualConfig.driverOrder);
        }
        catch {
            throw new Error(`Cannot use this drivers: ${actualConfig.driverOrder.join(', ')}.`);
        }
    }
}
PoStorageService.ɵfac = function PoStorageService_Factory(t) { return new (t || PoStorageService)(i0.ɵɵinject(PO_STORAGE_CONFIG_TOKEN)); };
PoStorageService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoStorageService, factory: PoStorageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoStorageService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PO_STORAGE_CONFIG_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmFnZS9zcmMvbGliL3NlcnZpY2VzL3BvLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxLQUFLLFdBQVcsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxhQUFhLENBQUM7QUFFckIsT0FBTyxTQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUdoRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRXJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVFRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFNM0IsWUFBNkMsTUFBd0I7UUFMN0QsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUtsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxnQkFBZ0I7UUFDckIsT0FBTztZQUNMLElBQUksRUFBRSxZQUFZO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gs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QUksS0FBSyxDQUFDLDRCQUE0QixZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckY7SUFDSCxDQUFDOztnRkE1ZFUsZ0JBQWdCLGNBTVAsdUJBQXVCO3NFQU5oQyxnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTs7c0JBT0ksTUFBTTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBMb2NhbEZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XHJcbmltcG9ydCAnbG9jYWxmb3JhZ2UnO1xyXG5cclxuaW1wb3J0IElkbGVRdWV1ZSBmcm9tICdjdXN0b20taWRsZS1xdWV1ZSc7XHJcblxyXG5pbXBvcnQgeyBQb0xva2lEcml2ZXIgfSBmcm9tICcuLi9kcml2ZXJzL2xva2lqcy9wby1sb2tpLWRyaXZlcic7XHJcbmltcG9ydCB7IFBvU3RvcmFnZUNvbmZpZyB9IGZyb20gJy4vcG8tc3RvcmFnZS1jb25maWcuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBQT19TVE9SQUdFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbignUE9fU1RPUkFHRV9DT05GSUdfVE9LRU4nKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBQTyBTdG9yYWdlIMOpIHVtYSBiaWJsaW90ZWNhIHF1ZSBmb3JuZWNlIHVtIHNlcnZpw6dvIHBhcmEgYXJtYXplbmFtZW50byBkZSBkYWRvcyBubyBkaXNwb3NpdGl2byBsb2NhbCwgc2VuZG8gc2VtZWxoYW50ZVxyXG4gKiBhbyBmdW5jaW9uYW1lbnRvIGRvIFtJb25pY1N0b3JhZ2VdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3Mvc3RvcmFnZS8pLlxyXG4gKiDDiSBwb3Nzw612ZWwgdXRpbGl6YXIgb3MgZHJpdmVycyBbV2Vic3FsXShodHRwczovL2Rldi53My5vcmcvaHRtbDUvd2ViZGF0YWJhc2UvKSwgW0luZGV4ZWRkYl0oaHR0cHM6Ly93d3cudzMub3JnL1RSL0luZGV4ZWREQi8pLFxyXG4gKiBbTG9jYWxTdG9yYWdlXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS93ZWJzdG9yYWdlLmh0bWwpIGUgdGFtYsOpbSBbTG9raUpTXShodHRwczovL2dpdGh1Yi5jb20vdGVjaGZvcnQvTG9raUpTL3dpa2kpLlxyXG4gKlxyXG4gKiBQYXJhIHVtIG1lbGhvciBnYW5obyBkZSBwZXJmb3JtYW5jZSBhbyBidXNjYXIgZSBzYWx2YXIgZGFkb3MsIHJlY29tZW5kYW1vcyBhIHV0aWxpemHDp8OjbyBkbyBgTG9raUpTYCwgdW0gKmRhdGFiYXNlKlxyXG4gKiBvcmllbnRhZG8gYSBkb2N1bWVudG8gc2VtZWxoYW50ZSBhbyBNb25nb0RCLCBxdWUgYWzDqW0gZGUgcGVybWl0aXIgYSBwZXJzaXN0w6puY2lhIGRvcyBkYWRvcyBubyBkaXNwb3NpdGl2byBwb3NzaWJpbGl0YVxyXG4gKiB0YW1iw6ltIG8gYXJtYXplbmFtZW50byBkb3MgZGFkb3MgZW0gbWVtw7NyaWEuIE91dHJhIHZhbnRhZ2VtLCDDqSBvIGF1bWVudG8gZG8gbGltaXRlIGRlIGFybWF6ZW5hbWVudG8gcGFyYVxyXG4gKiBhcHJveGltYWRhbWVudGUgYDMwMG1iYC5cclxuICpcclxuICogQSBlc3RydXR1cmEgdXRpbGl6YWRhIHBhcmEgYXJtYXplbmFyIG9zIGRhZG9zIMOpIGEgZGUgY2hhdmUvdmFsb3IsIG9uZGUgdW1hIGNoYXZlIGZ1bmNpb25hIGNvbW8gdW0gaWRlbnRpZmljYWRvciBleGNsdXNpdm8uXHJcbiAqXHJcbiAqICMjIyMgSW5zdGFsYW5kbyBvIFBPIFN0b3JhZ2VcclxuICpcclxuICogUGFyYSBpbnN0YWxhciBvIGBwby1zdG9yYWdlYCBlbSBzdWEgYXBsaWNhw6fDo28gZXhlY3V0ZSBvIHNlZ3VpbnRlIGNvbWFuZG86XHJcbiAqXHJcbiAqIGBgYHNoZWxsXHJcbiAqIG5nIGFkZCBAcG8tdWkvbmctc3RvcmFnZVxyXG4gKiBgYGBcclxuICogU2Vyw6EgaW5zdGFsYWRvIG8gcGFjb3RlIGBAcG8tdWkvbmctc3RvcmFnZWAgZSB0YW1iw6ltIGrDoSBpbXBvcnRhcsOhIGBQb1N0b3JhZ2VNb2R1bGVgIG5vIG3Ds2R1bG8gcHJpbmNpcGFsIGRhIHN1YSBhcGxpY2HDp8OjbywgY29uZm9ybWUgYWJhaXhvOlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFBvU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bwby11aS9uZy1zdG9yYWdlJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogIGRlY2xhcmF0aW9uczogWy4uLl0sXHJcbiAqICBpbXBvcnRzOiBbXHJcbiAqICAgIC8vIEltcG9ydGHDp8OjbyBkbyBtw7NkdWxvIFBvU3RvcmFnZU1vZHVsZVxyXG4gKiAgICBQb1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpLFxyXG4gKiAgXSxcclxuICogIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcclxuICogIHByb3ZpZGVyczogWy4uLl1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQ29tIGEgZGVjbGFyYcOnw6NvIGRvIG3Ds2R1bG8sIMOpIGNyaWFkYSB1bWEgYmFzZSBkZSBkYWRvcyBubyBhcm1hemVuYW1lbnRvIGxvY2FsIGUgbyBzZXJ2acOnbyBgUG9TdG9yYWdlU2VydmljZWAgZXN0YXLDoVxyXG4gKiBwcm9udG8gcGFyYSBzZXIgdXRpbGl6YWRhIG5hIHN1YSBhcGxpY2HDp8Ojby5cclxuICpcclxuICogIyMjIyBDb25maWd1cmFuZG8gYXMgb3DDp8O1ZXMgZGUgYXJtYXplbmFtZW50b1xyXG4gKlxyXG4gKiBOYSBpbXBvcnRhw6fDo28gZG8gbcOzZHVsbywgbyBtw6l0b2RvIGBQb1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpYCBwb2RlIHJlY2ViZXIgY29tbyBwYXLDom1ldHJvIHVtIG9iamV0byBkbyB0aXBvXHJcbiAqIFtgUG9TdG9yYWdlQ29uZmlnYF0oZG9jdW1lbnRhdGlvbi9wby1zdG9yYWdlI3BvLXN0b3JhZ2UtY29uZmlnKSxcclxuICogcXVlIHNlcnZlIHBhcmEgY29uZmlndXJhciBhcyBvcMOnw7VlcyBwZXJzb25hbGl6YWRhcyBkbyBhcm1hemVuYW1lbnRvLCBjb21vIHBvciBleGVtcGxvOiBvIHRpcG8gZGUgYXJtYXplbmFtZW50b1xyXG4gKiBwcmVmZXLDqm5jaWFsLlxyXG4gKlxyXG4gKiBDYXNvIG7Do28gc2VqYSBwYXNzYWRhIG5lbmh1bWEgY29uZmlndXJhw6fDo28gYSBvcmRlbSBwYWRyw6NvIHNlcsOhOiBbJ3dlYnNxbCcsICdpbmRleGVkZGInLCAnbG9jYWxzdG9yYWdlJywgJ2xva2lqcyddLlxyXG4gKlxyXG4gKiBBYmFpeG8gc2VndWUgdW0gZXhlbXBsbyBkZSBjb25maWd1cmHDp8OjbyBvbmRlIG8gc3RvcmFnZSBwcmVmZXJlbmNpYWwgcGFzc2EgYSBzZXIgbyBgbG9raWpzYDpcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQb1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAcG8tdWkvbmctc3RvcmFnZSc7XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICBkZWNsYXJhdGlvbnM6IFsuLi5dLFxyXG4gKiAgaW1wb3J0czogW1xyXG4gKiAgICAvLyBJbXBvcnRhw6fDo28gZG8gbcOzZHVsbyBQb1N0b3JhZ2VNb2R1bGUgY29tIGEgY29uZmlndXJhw6fDo28gcGVyc29uYWxpemFkYVxyXG4gKiAgICBQb1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7XHJcbiAqICAgICAgbmFtZTogJ215c3RvcmFnZScsXHJcbiAqICAgICAgc3RvcmVOYW1lOiAnX215c3RvcmUnLFxyXG4gKiAgICAgIGRyaXZlck9yZGVyOiBbJ2xva2lqcycsICd3ZWJzcWwnLCAnaW5kZXhlZGRiJywgJ2xvY2Fsc3RvcmFnZSddXHJcbiAqICAgIH0pLFxyXG4gKiAgXSxcclxuICogIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcclxuICogIHByb3ZpZGVyczogWy4uLl1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvU3RvcmFnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZHJpdmVyOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgaWRsZVF1ZXVlID0gbmV3IElkbGVRdWV1ZSgpO1xyXG4gIHByaXZhdGUgc3RvcmFnZVByb21pc2U6IFByb21pc2U8TG9jYWxGb3JhZ2U+O1xyXG4gIHByaXZhdGUgbG9raWpzRHJpdmVyOiBQb0xva2lEcml2ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUE9fU1RPUkFHRV9DT05GSUdfVE9LRU4pIGNvbmZpZz86IFBvU3RvcmFnZUNvbmZpZykge1xyXG4gICAgdGhpcy5sb2tpanNEcml2ZXIgPSBuZXcgUG9Mb2tpRHJpdmVyKCk7XHJcbiAgICB0aGlzLnNldFN0b3JhZ2VQcm9taXNlKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGEgY29uZmlndXJhw6fDo28gcGFkcsOjbyBwYXJhIG8gYXJtYXplbmFtZW50by4gQ2FzbyBuZW5odW1hIGNvbmZpZ3VyYcOnw6NvIHNlamEgaW5zZXJpZGEsXHJcbiAgICogZXNzYSBjb25maWd1cmHDp8OjbyBzZXLDoSB1dGlsaXphZGEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UG9TdG9yYWdlQ29uZmlnfSBPYmpldG8gY29tIGEgY29uZmlndXJhw6fDo28gcGFkcsOjbyBkbyBhcm1hemVuYW1lbnRvLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXREZWZhdWx0Q29uZmlnKCk6IFBvU3RvcmFnZUNvbmZpZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiAnX3Bvc3RvcmFnZScsXHJcbiAgICAgIHN0b3JlTmFtZTogJ19wb2t2JyxcclxuICAgICAgZHJpdmVyT3JkZXI6IFsnd2Vic3FsJywgJ2luZGV4ZWRkYicsICdsb2NhbHN0b3JhZ2UnLCAnbG9raWpzJ11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmlhIHVtYSBpbnN0w6JuY2lhIGRvIGBQb1N0b3JhZ2VTZXJ2aWNlYCBjb20gYSBjb25maWd1cmHDp8OjbyBkZSBhcm1hemVuYW1lbnRvIHBhc3NhZGEgY29tbyBwYXLDom1ldHJvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb1N0b3JhZ2VDb25maWd9IHN0b3JhZ2VDb25maWcgQ29uZmlndXJhw6fDo28gcGFyYSBvIGFybWF6ZW5hbWVudG8uXHJcbiAgICogQHJldHVybnMge1BvU3RvcmFnZVNlcnZpY2V9IEluc3TDom5jaWEgZG8gYFBvU3RvcmFnZVNlcnZpY2VgLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBwcm92aWRlUG9TdG9yYWdlKHN0b3JhZ2VDb25maWc/OiBQb1N0b3JhZ2VDb25maWcpOiBQb1N0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHJldHVybiBuZXcgUG9TdG9yYWdlU2VydmljZShQb1N0b3JhZ2VTZXJ2aWNlLmdldENvbmZpZyhzdG9yYWdlQ29uZmlnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRDb25maWcoc3RvcmFnZUNvbmZpZz86IFBvU3RvcmFnZUNvbmZpZykge1xyXG4gICAgcmV0dXJuIHN0b3JhZ2VDb25maWcgfHwgUG9TdG9yYWdlU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdXNjYSB1bWEgbGlzdGEgYXJtYXplbmFkYSBwZWxhIGNoYXZlIGUgY29uY2F0ZW5hIGNvbSBhIGxpc3RhIHBhc3NhZGEgcG9yIHBhcsOibWV0cm8uXHJcbiAgICpcclxuICAgKiBQb3IgZXhlbXBsbzpcclxuICAgKlxyXG4gICAqIGBgYCB0eXBlc2NyaXB0XHJcbiAgICogY29uc3QgY2xpZW50cyA9IFsgeyBuYW1lOiAnTWFyaWUnLCBhZ2U6IDIzIH0sIHsgbmFtZTogJ1BldGhlcicsIGFnZTogMzkgfV07XHJcbiAgICpcclxuICAgKiB0aGlzLnBvU3RvcmFnZVNlcnZpY2Uuc2V0KCdjbGllbnRLZXknLCBjbGllbnRzKS50aGVuKCgpID0+IHt9KTtcclxuICAgKlxyXG4gICAqIC4uLlxyXG4gICAqXHJcbiAgICogY29uc3QgbmV3Q2xpZW50cyA9IFsgeyBuYW1lOiAnTGlzYScsIGFnZTogMzYgfSwgeyBuYW1lOiAnQnJ1Y2UnLCBhZ2U6IDE4IH0gXTtcclxuICAgKlxyXG4gICAqIHRoaXMucG9TdG9yYWdlU2VydmljZS5hcHBlbmRBcnJheVRvQXJyYXkoJ2NsaWVudEtleScsIG5ld0NsaWVudHMpLnRoZW4oKCkgPT4ge1xyXG4gICAqICAgLy8gQSBsaXN0YSBhZ29yYSBzZXLDoTpcclxuICAgKiAgIC8vIFsgeyBuYW1lOiAnTWFyaWUnLCBhZ2U6IDIzIH0sIHsgbmFtZTogJ1BldGhlcicsIGFnZTogMzkgfSwgeyBuYW1lOiAnTGlzYScsIGFnZTogMzYgfSwgeyBuYW1lOiAnQnJ1Y2UnLCBhZ2U6IDE4IH1dO1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBDaGF2ZSBkYSBsaXN0YSBhcm1hemVuYWRhLlxyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlIExpc3RhIHF1ZSBzZXLDoSBjb25jYXRlbmFkYS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgYXDDs3MgYXMgZHVhcyBsaXN0YXMgc2VyZW0gY29uY2F0ZW5hZGFzIGUgYXJtYXplbmFkYXMgbG9jYWxtZW50ZS5cclxuICAgKi9cclxuICBhc3luYyBhcHBlbmRBcnJheVRvQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBBcnJheTxhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEFycmF5T2ZTdG9yYWdlKGtleSk7XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhLCAuLi52YWx1ZV07XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBuZXdEYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjcmVzY2VudGEgdW0gaXRlbSBlbSB1bWEgbGlzdGEgYXJtYXplbmFkYSBwZWxhIGNoYXZlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBDaGF2ZSBkYSBsaXN0YSBhcm1hemVuYWRhLlxyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlIEl0ZW0gcXVlIHNlcsOhIGFjcmVzY2VudGFkbyBuYSBsaXN0YS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgYXDDs3MgbyBpdGVtIHNlciBhY3Jlc2NlbnRhZG8gbmEgbGlzdGEgYXJtYXplbmFkYS5cclxuICAgKi9cclxuICBhc3luYyBhcHBlbmRJdGVtVG9BcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXRBcnJheU9mU3RvcmFnZShrZXkpO1xyXG5cclxuICAgIGRhdGEucHVzaCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0b2RvcyBvcyBpdGVucyBkYSBiYXNlIGRlIGRhZG9zIGxvY2FsIGNvbmZpZ3VyYWRhIG5hIGRlY2xhcmHDp8OjbyBkbyBtw7NkdWxvIGBQb1N0b3JhZ2VNb2R1bGVgLlxyXG4gICAqXHJcbiAgICogPiBVdGlsaXplIGVzdGUgbcOpdG9kbyBjb20gY2F1dGVsYSwgcGFyYSBldml0YXIgYSBwZXJkYSBpbmRlc2VqYWRhIGRlIGRhZG9zLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgYXDDs3MgdG9kb3Mgb3MgaXRlbnMgZGEgYmFzZSBkZSBkYWRvcyBsb2NhbCBzZXJlbSByZW1vdmlkb3MuXHJcbiAgICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlUHJvbWlzZS50aGVuKHN0b3JlID0+IHN0b3JlLmNsZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpY2Egc2UgZXhpc3RlIHVtIHZhbG9yIGRlbnRybyBkZSB1bWEgZGV0ZXJtaW5hZGEgY2hhdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IENoYXZlIHF1ZSBzZXLDoSB2ZXJpZmljYWRhLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgcXVhbmRvIGEgdmVyaWZpY2HDp8OjbyBkYSBleGlzdMOqbmNpYSBkbyB2YWxvciBuYSBjaGF2ZSDDqSBjb25jbHXDrWRhLlxyXG4gICAqL1xyXG4gIGV4aXN0cyhrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkudGhlbihkYXRhID0+IFByb21pc2UucmVzb2x2ZShkYXRhICE9PSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJdGVyYSBzb2JyZSB0b2RhcyBhcyBjaGF2ZXMgYXJtYXplbmFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gaXRlcmF0b3JDYWxsYmFjayBGdW7Dp8OjbyBkZSBgY2FsbGJhY2tgIHF1ZSDDqSBjaGFtYWRhIGEgY2FkYSBpdGVyYcOnw6NvLCBjb20gb3Mgc2VndWludGVzIHBhcsOibWV0cm9zOlxyXG4gICAqIHZhbG9yLCBjaGF2ZSBlIG7Dum1lcm8gZGEgaXRlcmHDp8Ojby5cclxuICAgKlxyXG4gICAqIEV4ZW1wbG8gZGUgdXRpbGl6YcOnw6NvOlxyXG4gICAqXHJcbiAgICogYGBgIHR5cGVzY3JpcHRcclxuICAgKiB0aGlzLnBvU3RvcmFnZVNlcnZpY2UuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiB7XHJcbiAgICogICAvLyBJdGVyYcOnw6NvIHNvYnJlIGNhZGEgY2hhdmUgYXJtYXplbmFkYS5cclxuICAgKiB9KTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIGFww7NzIGEgaXRlcmHDp8OjbyBzb2JyZSB0b2RhcyBhcyBjaGF2ZXMgYXJtYXplbmFkYXMuXHJcbiAgICovXHJcbiAgZm9yRWFjaChpdGVyYXRvckNhbGxiYWNrOiAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcsIGl0ZXJhdGlvbk51bWJlcjogbnVtYmVyKSA9PiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VQcm9taXNlLnRoZW4oc3RvcmUgPT4gc3RvcmUuaXRlcmF0ZShpdGVyYXRvckNhbGxiYWNrKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIG8gdmFsb3IgYXJtYXplbmFkbyBlbSB1bWEgZGV0ZXJtaW5hZGEgY2hhdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IENoYXZlIHF1ZSBpZGVudGlmaWNhIG8gaXRlbS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvY2sgRGVmaW5lIHNlIGlyw6EgdHJhdmFyIGEgbGVpdHVyYSBlIGEgZXNjcml0YSBkYSBiYXNlIGRlIGRhZG9zIHBhcmEgbsOjbyBzZXIgYWNlc3NhZGEgZGUgZm9ybWEgcGFyYWxlbGEuXHJcbiAgICogQ2FzbyBvdXRyYSBsZWl0dXJhL2VzY3JpdGEgasOhIHRlbmhhIHNpZG8gaW5pY2lhZGEsIGVzdGUgbcOpdG9kbyBpcsOhIGVzcGVyYXIgbyBvdXRybyB0ZXJtaW5hciBwYXJhIGVudMOjbyBjb21lw6dhci5cclxuICAgKlxyXG4gICAqIFBhZHLDo286IGBmYWxzZWAuXHJcbiAgICpcclxuICAgKiA+IEVzdGEgZGVmaW5pw6fDo28gc8OzIHNlcsOhIHbDoWxpZGEgc2UgbyBvdXRybyBhY2Vzc28gcGFyYWxlbG8gYSBlc3RlIG3DqXRvZG8gdGFtYsOpbSBlc3RpdmVyIGNvbSBvIHBhcsOibWV0cm8gKmxvY2sqIGF0aXZhZG8uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBhcMOzcyBvIGl0ZW0gc2VyIGJ1c2NhZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgZ2V0KGtleTogc3RyaW5nLCBsb2NrOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKGxvY2spIHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0SWRsZVByb21pc2UoKTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaWRsZVF1ZXVlLndyYXBDYWxsKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldEltbXV0YWJsZUl0ZW0oa2V5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRJbW11dGFibGVJdGVtKGtleSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIG8gbm9tZSBkbyAqZHJpdmVyKiBxdWUgZXN0w6Egc2VuZG8gdXNhZG8gcGFyYSBhcm1hemVuYXIgb3MgZGFkb3MsIHBvciBleGVtcGxvOiBsb2NhbFN0b3JhZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH0gTm9tZSBkbyAqZHJpdmVyKi5cclxuICAgKi9cclxuICBnZXREcml2ZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRyaXZlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgbyBwcmltZWlybyBpdGVtIGRlIHVtYSBsaXN0YSBwYXJhIHVtYSBkZXRlcm1pbmFkYSBjaGF2ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQ2hhdmUgZGEgbGlzdGEuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBhcMOzcyBvIHByaW1laXJvIGl0ZW0gc2VyIGVuY29udHJhZG8uXHJcbiAgICovXHJcbiAgZ2V0Rmlyc3RJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmdldChrZXkpLnRoZW4oKGRhdGE6IEFycmF5PGFueT4pID0+IFByb21pc2UucmVzb2x2ZShkYXRhID8gZGF0YVswXSA6IG51bGwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBvIHByaW1laXJvIGl0ZW0gZGUgdW1hIGxpc3RhIGEgcGFydGlyIGRhIGNoYXZlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBDaGF2ZSBkYSBsaXN0YSBxdWUgc2Vyw6EgcmVtb3ZpZG8gbyBwcmltZWlybyBpdGVtLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgYXDDs3MgbyBwcmltZWlybyBpdGVtIGRhIGxpc3RhIHNlciByZW1vdmlkby5cclxuICAgKi9cclxuICBnZXRJdGVtQW5kUmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmdldChrZXkpLnRoZW4oKGRhdGE6IEFycmF5PGFueT4pID0+IHtcclxuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaXRlbSA9IGRhdGEuc2hpZnQoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSkudGhlbigoKSA9PiBQcm9taXNlLnJlc29sdmUoaXRlbSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdXNjYSBvIHByaW1laXJvIG9iamV0byBlbmNvbnRyYWRvIGRlbnRybyBkZSB1bWEgbGlzdGEgcGVsbyBkbyB2YWxvciBkZSB1bSBjYW1wby5cclxuICAgKlxyXG4gICAqIFBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgIHR5cGVzY3JpcHRcclxuICAgKiBjb25zdCBjbGllbnRzID0gWyB7IG5hbWU6ICdNYXJpZScsIGFnZTogMjMgfSwgeyBuYW1lOiAnUGV0aGVyJywgYWdlOiAzOSB9XTtcclxuICAgKlxyXG4gICAqIHRoaXMucG9TdG9yYWdlU2VydmljZS5zZXQoJ2NsaWVudEtleScsIGNsaWVudHMpLnRoZW4oKCkgPT4ge30pO1xyXG4gICAqXHJcbiAgICogLi4uXHJcbiAgICpcclxuICAgKiB0aGlzLnBvU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbUJ5RmllbGQoJ2NsaWVudEtleScsICduYW1lJywgJ01hcmllJykudGhlbihjbGllbnQgPT4ge1xyXG4gICAqICAgLy8gUmVzdWx0YWRvIGRvIGNvbnNvbGUubG9nOiB7IG5hbWU6ICdNYXJpZScsIGFnZTogMjMgfVxyXG4gICAqICAgY29uc29sZS5sb2coY2xpZW50KTtcclxuICAgKiB9KTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQ2hhdmUgZGEgbGlzdGEuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSBPIGNhbXBvIGEgc2VyIGZpbHRyYWRvLlxyXG4gICAqIEBwYXJhbSB7YW55fSBmaWVsZFZhbHVlIE8gdmFsb3IgZG8gY2FtcG8uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBjb20gbyBpdGVtIHF1ZSBmb2kgZW5jb250cmFkby5cclxuICAgKi9cclxuICBnZXRJdGVtQnlGaWVsZChrZXk6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5KS50aGVuKChzdG9yYWdlUmVjb3JkczogQXJyYXk8YW55PikgPT4ge1xyXG4gICAgICBsZXQgc3RvcmFnZVJlY29yZHNGaWx0ZXJlZCA9IHN0b3JhZ2VSZWNvcmRzLmZpbmQoc3RvcmFnZVJlY29yZCA9PiBzdG9yYWdlUmVjb3JkW2ZpZWxkTmFtZV0gPT09IGZpZWxkVmFsdWUpO1xyXG4gICAgICBzdG9yYWdlUmVjb3Jkc0ZpbHRlcmVkID0gc3RvcmFnZVJlY29yZHNGaWx0ZXJlZCB8fCBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdG9yYWdlUmVjb3Jkc0ZpbHRlcmVkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGEgY29tIHRvZGFzIGFzIGNoYXZlcyBhcm1hemVuYWRhcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIGNvbSB0b2RhcyBhcyBjaGF2ZXMgYXJtYXplbmFkYXMuXHJcbiAgICovXHJcbiAga2V5cygpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VQcm9taXNlLnRoZW4oc3RvcmUgPT4gc3RvcmUua2V5cygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFF1YW50aWRhZGUgZGUgY2hhdmVzIGFybWF6ZW5hZGFzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBjb20gbyBuw7ptZXJvIGRlIGNoYXZlcyBhcm1hemVuYWRhcy5cclxuICAgKi9cclxuICBsZW5ndGgoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VQcm9taXNlLnRoZW4oc3RvcmUgPT4gc3RvcmUubGVuZ3RoKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXRpbGl6YWRvIHBhcmEgZ2VyZW5jaWFyIG8gYmxvcXVlaW8gZSBkZXNibG9xdWVpbyBkZSByZWN1cnNvcyBubyBgUG9TdG9yYWdlU2VydmljZWAuXHJcbiAgICogQWd1YXJkYW5kbyBhIGxpYmVyYcOnw6NvIGRhIHV0aWxpemHDp8OjbyBkb3MgcmVjdXJzb3MgcXVlIHBhcnRpY2lwYW0gZGVzdGUgY29tcG9ydGFtZW50byBlIHBvc3Rlcmlvcm1lbnRlIGVudm9sdmUgbyByZWN1cnNvXHJcbiAgICogcGFzc2FkbyBjb21vIHBhcsOibWV0cm8gZW0gdW0gY29tcG9ydGFtZW50byBkZSBibG9xdWVpbyBlIGRlc2Jsb3F1ZWlvLlxyXG4gICAqXHJcbiAgICogRXN0ZSBtw6l0b2RvIHNlIGNvbXBvcnRhIGlndWFsIGEgdXRpbGl6YcOnw6NvIGVtIGNvbmp1bnRhIGRvcyBtw6l0b2RvczogYFBvU3RvcmFnZVNlcnZpY2UucmVxdWVzdElkbGVQcm9taXNlKClgLFxyXG4gICAqIGBQb1N0b3JhZ2VTZXJ2aWNlLmxvY2soKWAgZSBgUG9TdG9yYWdlU2VydmljZS51bmxvb2soKWAuXHJcbiAgICpcclxuICAgKiBWZWphIG1haXMgbm8gbcOpdG9kbzogW2BQb1N0b3JhZ2UucmVxdWVzdElkbGVQcm9taXNlKClgXShkb2N1bWVudGF0aW9uL3BvLXN0b3JhZ2UjcmVxdWVzdC1pZGxlLXByb21pc2UpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGltaXRlZFJlc291cmNlIEZ1bsOnw6NvIHF1ZSBzZXLDoSBlbnZvbHZpZGEgbm8gY29tcG9ydGFtZW50byBkZSBibG9xdWVpbyBlIGRlc2Jsb3F1ZWlvLlxyXG4gICAqL1xyXG4gIGFzeW5jIGxpbWl0ZWRDYWxsV3JhcChsaW1pdGVkUmVzb3VyY2U6IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGF3YWl0IHRoaXMucmVxdWVzdElkbGVQcm9taXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5pZGxlUXVldWUud3JhcENhbGwobGltaXRlZFJlc291cmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluY3JlbWVudGEgdW0gdmFsb3IgbmEgZmlsYSBkZSBibG9xdWVpbyBkbyBgUG9TdG9yYWdlU2VydmljZWAuIFV0aWxpemFkbyBqdW50YW1lbnRlIGNvbSBvIG3DqXRvZG8gYHVubG9ja2AgcGFyYSBwb2RlclxyXG4gICAqIGNvbnRyb2xhciBhIGV4ZWN1w6fDo28gZGUgdW1hIGRldGVybWluYWRhIHRhcmVmYSBjb20gbyBgUG9TdG9yYWdlLnJlcXVlc3RJZGxlUHJvbWlzZSgpYC5cclxuICAgKlxyXG4gICAqIFZlamEgbWFpcyBubyBtw6l0b2RvOiBbYFBvU3RvcmFnZS5yZXF1ZXN0SWRsZVByb21pc2UoKWBdKGRvY3VtZW50YXRpb24vcG8tc3RvcmFnZSNyZXF1ZXN0LWlkbGUtcHJvbWlzZSkuXHJcbiAgICovXHJcbiAgbG9jaygpIHtcclxuICAgIHRoaXMuaWRsZVF1ZXVlLmxvY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluYSBzZSBvIHByb2Nlc3NvIGRlIGluaWNpYWxpemHDp8OjbyBkbyAqZHJpdmVyKiBhc3PDrW5jcm9ubyBmb2kgY29uY2x1w61kby5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExvY2FsRm9yYWdlPn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBxdWFuZG8gbyBwcm9jZXNzbyBkZSBpbmljaWFsaXphw6fDo28gZG8gKmRyaXZlciogYXNzw61uY3Jvbm9cclxuICAgKiBmb3IgY29uY2x1w61kby5cclxuICAgKi9cclxuICByZWFkeSgpOiBQcm9taXNlPExvY2FsRm9yYWdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB1bSB2YWxvciBhc3NvY2lhZG8gYSB1bWEgY2hhdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2tleX0ga2V5IENoYXZlIGRvIHZhbG9yIHF1ZSBzZXLDoSByZW1vdmlkby5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIGFww7NzIG8gdmFsb3Igc2VyIHJlbW92aWRvLlxyXG4gICAqL1xyXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlUHJvbWlzZS50aGVuKHN0b3JlID0+IHN0b3JlLnJlbW92ZUl0ZW0oa2V5KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdW1hIHByb3ByaWVkYWRlIGRlIHVtIG9iamV0byBhcm1hemVuYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBDaGF2ZSBkbyBvYmpldG8gYXJtYXplbmFkby5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgUHJvcHJpZWRhZGUgcXVlIHNlcsOhIHJlbW92aWRhLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBhcMOzcyBhIHByb3ByaWVkYWRlIHNlciByZW1vdmlkYS5cclxuICAgKi9cclxuICBhc3luYyByZW1vdmVJbmRleEZyb21PYmplY3Qoa2V5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0T2JqZWN0T2ZTdG9yYWdlKGtleSk7XHJcblxyXG4gICAgZGVsZXRlIGRhdGFbcHJvcGVydHldO1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0KGtleSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdW0gb2JqZXRvIGRlIHVtYSBsaXN0YSBhcm1hemVuYWRhIHBlbG8gdmFsb3IgZGUgdW1hIHByb3ByaWVkYWRlLlxyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGAgdHlwZXNjcmlwdFxyXG4gICAqIGNvbnN0IGNsaWVudHMgPSBbIHsgbmFtZTogJ01hcmllJywgYWdlOiAyMyB9LCB7IG5hbWU6ICdQZXRoZXInLCBhZ2U6IDM5IH1dO1xyXG4gICAqXHJcbiAgICogdGhpcy5wb1N0b3JhZ2VTZXJ2aWNlLnNldCgnY2xpZW50S2V5JywgY2xpZW50cykudGhlbigoKSA9PiB7fSk7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIHRoaXMucG9TdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtRnJvbUFycmF5KCdjbGllbnRLZXknLCAnbmFtZScsICdNYXJpZScpLnRoZW4oKCkgPT4ge1xyXG4gICAqICAgLy8gTyBvYmpldG8geyBuYW1lOiAnTWFyaWUnLCBhZ2U6IDIzIH0gZm9pIHJlbW92aWRvIGRhIGxpc3RhIHF1ZSBlc3TDoSBuYSBjaGF2ZSAnY2xpZW50S2V5J1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBDaGF2ZSBkYSBsaXN0YSBxdWUgY29udMOpbSBvIGl0ZW0gcXVlIHNlcsOhIHJlbW92aWRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBPIGNhbXBvIGEgc2VyIGZpbHRyYWRvIG5vIGl0ZW0uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIE8gdmFsb3IgZG8gZmlsdHJvLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21lc3NhIHF1ZSDDqSByZXNvbHZpZGEgcXVhbmRvIG8gb2JqZXRvIGZvciByZW1vdmlkbyBkYSBsaXN0YS5cclxuICAgKi9cclxuICBhc3luYyByZW1vdmVJdGVtRnJvbUFycmF5KGtleTogc3RyaW5nLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5nZXRBcnJheU9mU3RvcmFnZShrZXkpO1xyXG5cclxuICAgIGRhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW1bZmllbGRdICE9PSB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5zZXQoa2V5LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIDxhIGlkPVwicmVxdWVzdC1pZGxlLXByb21pc2VcIj48L2E+XHJcbiAgICogTcOpdG9kbyBxdWUgdmVyaWZpY2Egc2UgbyBhY2Vzc28gYSBiYXNlIGRlIGRhZG9zIGNvbmZpZ3VyYWRhIGVzdMOhIGxpYmVyYWRvLlxyXG4gICAqXHJcbiAgICogVXRpbGl6YWRvIGVtIGNvbmp1bnRvIGNvbSBvcyBtw6l0b2RvcyBgbG9jaygpYCBlIGB1bmxvY2soKWAgZW50cmUgdGFyZWZhcyBxdWUgbsOjbyBwb2RlbSBzZXIgZXhlY3V0YWRhcyBkZSBmb3JtYVxyXG4gICAqIHBhcmFsZWxhLCBwYXJhIG7Do28gY2F1c2FyIGluY29uc2lzdMOqbmNpYXMgbm9zIGRhZG9zLlxyXG4gICAqXHJcbiAgICogRXhlbXBsbyBkZSB1dGlsaXphw6fDo286XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAvLyBBZ3VhcmRhIGEgbGliZXJhw6fDo28gcGFyYSBjb250aW51YXJcclxuICAgKiBhd2FpdCB0aGlzLnBvU3RvcmFnZS5yZXF1ZXN0SWRsZVByb21pc2UoKTtcclxuICAgKlxyXG4gICAqIHRoaXMucG9TdG9yYWdlLmxvY2soKTtcclxuICAgKlxyXG4gICAqIC8vIEV4ZWN1dGEgdW1hIHRhcmVmYSBxdWUgaXLDoSBsZXIgZS9vdSBlc2NyZXZlciBuYSBiYXNlIGRlIGRhZG9zIGNvbmZpZ3VyYWRhLlxyXG4gICAqXHJcbiAgICogdGhpcy5wb1N0b3JhZ2UudW5sb2NrKCk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IMOJIGltcG9ydGFudGUgc2VtcHJlIHV0aWxpesOhLWxvIGFudGVzIGRlIGV4ZWN1dGFyIG9zIG3DqXRvZG9zIGBsb2NrKClgIGUgYHVubG9jaygpYCBwYXJhIGdhcmFudGlyIHF1ZSBhIHRhcmVmYSBzw7NcclxuICAgKiBzZXLDoSBleGVjdXRhZGEgY2FzbyBvIGFjZXNzbyBlc3RlamEgbGl2cmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9tZXNzYSBxdWUgw6kgcmVzb2x2aWRhIHF1YW5kbyBvIGFjZXNzbyBhIGJhc2UgZGUgZGFkb3MgY29uZmlndXJhZGEgZXN0aXZlciBsaWJlcmFkby5cclxuICAgKi9cclxuICByZXF1ZXN0SWRsZVByb21pc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmlkbGVRdWV1ZS5yZXF1ZXN0SWRsZVByb21pc2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdyYXZhIHVtIHZhbG9yIGVtIHVtYSBkZXRlcm1pbmFkYSBjaGF2ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQ2hhdmUgcGFyYSBvIHZhbG9yIHF1ZSBzZXLDoSBncmF2YWRvLlxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBWYWxvciBxdWUgc2Vyw6EgZ3JhdmFkby5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvY2sgRGVmaW5lIHNlIGlyw6EgdHJhdmFyIGEgbGVpdHVyYSBlIGEgZXNjcml0YSBkYSBiYXNlIGRlIGRhZG9zIHBhcmEgbsOjbyBzZXIgYWNlc3NhZGEgZGUgZm9ybWEgcGFyYWxlbGEuXHJcbiAgICogQ2FzbyBvdXRyYSBsZWl0dXJhL2VzY3JpdGEgasOhIHRlbmhhIHNpZG8gaW5pY2lhZGEsIGVzdGUgbcOpdG9kbyBpcsOhIGVzcGVyYXIgbyBvdXRybyB0ZXJtaW5hciBwYXJhIGVudMOjbyBjb21lw6dhci5cclxuICAgKlxyXG4gICAqIFBhZHLDo286IGBmYWxzZWAuXHJcbiAgICpcclxuICAgKiA+IEVzdGEgZGVmaW5pw6fDo28gc8OzIHNlcsOhIHbDoWxpZGEgc2UgbyBvdXRybyBhY2Vzc28gcGFyYWxlbG8gYSBlc3RlIG3DqXRvZG8gdGFtYsOpbSBlc3RpdmVyIGNvbSBvIHBhcsOibWV0cm8gKmxvY2sqIGF0aXZhZG8uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWVzc2EgcXVlIMOpIHJlc29sdmlkYSBhcMOzcyBvIHZhbG9yIHRlciBzaWRvIGdyYXZhZG8uXHJcbiAgICovXHJcbiAgYXN5bmMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBsb2NrOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBhd2FpdCB0aGlzLnN0b3JhZ2VQcm9taXNlO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpIDogdmFsdWU7XHJcblxyXG4gICAgaWYgKGxvY2spIHtcclxuICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0SWRsZVByb21pc2UoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaWRsZVF1ZXVlLndyYXBDYWxsKCgpID0+IHN0b3JlLnNldEl0ZW0oa2V5LCBuZXdWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZS5zZXRJdGVtKGtleSwgbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXRyaWJ1aSB1bSB2YWxvciBhIHVtYSBwcm9wcmllZGFkZSBkZSB1bSBvYmpldG8gYXJtYXplbmFkbyBwZWxhIGNoYXZlLlxyXG4gICAqXHJcbiAgICogUG9yIGV4ZW1wbG86XHJcbiAgICpcclxuICAgKiBgYGAgdHlwZXNjcmlwdFxyXG4gICAqIGNvbnN0IGNsaWVudHMgPSBbIHsgbmFtZTogJ01hcmllJywgYWdlOiAyMyB9LCB7IG5hbWU6ICdQZXRoZXInLCBhZ2U6IDM5IH1dO1xyXG4gICAqXHJcbiAgICogdGhpcy5wb1N0b3JhZ2VTZXJ2aWNlLnNldCgnY2xpZW50S2V5JywgY2xpZW50cykudGhlbigoKSA9PiB7fSk7XHJcbiAgICpcclxuICAgKiAuLi5cclxuICAgKlxyXG4gICAqIHRoaXMucG9TdG9yYWdlU2VydmljZS5zZXRJbmRleFRvT2JqZWN0KCdjbGllbnRLZXknLCAnbmFtZScsICdDbGFyZScpLnRoZW4oKCkgPT4ge1xyXG4gICAqICAgLy8gTyBvYmpldG8geyBuYW1lOiAnTWFyaWUnLCBhZ2U6IDIzIH0gcGFzc2EgYSBzZXIgeyBuYW1lOiAnQ2xhcmUnLCBhZ2U6IDIzIH1cclxuICAgKiB9KTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgQ2hhdmUgZG8gb2JqZXRvLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBOb21lIGRhIHByb3ByaWVkYWRlIGRvIG9iamV0by5cclxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVmFsb3IgcXVlIHNlcsOhIGdyYXZhZG8gbmEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvLlxyXG4gICAqL1xyXG4gIGFzeW5jIHNldEluZGV4VG9PYmplY3Qoa2V5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0T2JqZWN0T2ZTdG9yYWdlKGtleSk7XHJcblxyXG4gICAgZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzLnNldChrZXksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVjcmVtZW50YSB1bSB2YWxvciBuYSBmaWxhIGRlIGJsb3F1ZWlvLiBVdGlsaXphZG8ganVudGFtZW50ZSBjb20gbyBtw6l0b2RvIGBsb2NrYCBwYXJhIHBvZGVyXHJcbiAgICogY29udHJvbGFyIGEgZXhlY3XDp8OjbyBkZSB1bWEgZGV0ZXJtaW5hZGEgdGFyZWZhIGNvbSBvIGBQb1N0b3JhZ2UucmVxdWVzdElkbGVQcm9taXNlKClgLlxyXG4gICAqXHJcbiAgICogVmVqYSBtYWlzIG5vIG3DqXRvZG86IFtgUG9TdG9yYWdlLnJlcXVlc3RJZGxlUHJvbWlzZSgpYF0oZG9jdW1lbnRhdGlvbi9wby1zdG9yYWdlI3JlcXVlc3QtaWRsZS1wcm9taXNlKS5cclxuICAgKi9cclxuICB1bmxvY2soKSB7XHJcbiAgICB0aGlzLmlkbGVRdWV1ZS51bmxvY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0QXJyYXlPZlN0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldChrZXkpO1xyXG4gICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldEltbXV0YWJsZUl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN0b3JlID0gYXdhaXQgdGhpcy5zdG9yYWdlUHJvbWlzZTtcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgc3RvcmUuZ2V0SXRlbShrZXkpO1xyXG4gICAgcmV0dXJuIGl0ZW1zID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtcykpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZGVmaW5lTG9jYWxGb3JhZ2VEcml2ZXIobG9jYWxGb3JhZ2VJbnN0YW5jZTogYW55LCBkcml2ZXJPcmRlcikge1xyXG4gICAgYXdhaXQgbG9jYWxGb3JhZ2VJbnN0YW5jZS5kZWZpbmVEcml2ZXIodGhpcy5sb2tpanNEcml2ZXIuZ2V0RHJpdmVyKCkpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXREcml2ZXIobG9jYWxGb3JhZ2VJbnN0YW5jZSwgZHJpdmVyT3JkZXIpO1xyXG4gICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERyaXZlck9yZGVyKGRyaXZlck9yZGVyOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gZHJpdmVyT3JkZXIubWFwKGRyaXZlciA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZHJpdmVyKSB7XHJcbiAgICAgICAgY2FzZSAnaW5kZXhlZGRiJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5JTkRFWEVEREI7XHJcbiAgICAgICAgY2FzZSAnd2Vic3FsJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5XRUJTUUw7XHJcbiAgICAgICAgY2FzZSAnbG9jYWxzdG9yYWdlJzpcclxuICAgICAgICAgIHJldHVybiBMb2NhbEZvcmFnZS5MT0NBTFNUT1JBR0U7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBkcml2ZXI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBnZXRPYmplY3RPZlN0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldChrZXkpO1xyXG4gICAgcmV0dXJuIGRhdGEgfHwge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNldERyaXZlcihsb2NhbEZvcmFnZUluc3RhbmNlOiBMb2NhbEZvcmFnZSwgZHJpdmVyT3JkZXIpIHtcclxuICAgIGF3YWl0IGxvY2FsRm9yYWdlSW5zdGFuY2Uuc2V0RHJpdmVyKHRoaXMuZ2V0RHJpdmVyT3JkZXIoZHJpdmVyT3JkZXIpKTtcclxuICAgIHRoaXMuZHJpdmVyID0gbG9jYWxGb3JhZ2VJbnN0YW5jZS5kcml2ZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RvcmFnZVByb21pc2UoY29uZmlnOiBQb1N0b3JhZ2VDb25maWcpIHtcclxuICAgIHRoaXMuc3RvcmFnZVByb21pc2UgPSB0aGlzLmdldFN0b3JhZ2VJbnN0YW5jZShjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBnZXRTdG9yYWdlSW5zdGFuY2UoY29uZmlnOiBQb1N0b3JhZ2VDb25maWcpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSBQb1N0b3JhZ2VTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcclxuICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcclxuXHJcbiAgICBjb25zdCBsb2NhbEZvcmFnZUluc3RhbmNlID0gTG9jYWxGb3JhZ2UuY3JlYXRlSW5zdGFuY2UoYWN0dWFsQ29uZmlnKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWZpbmVMb2NhbEZvcmFnZURyaXZlcihsb2NhbEZvcmFnZUluc3RhbmNlLCBhY3R1YWxDb25maWcuZHJpdmVyT3JkZXIpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVzZSB0aGlzIGRyaXZlcnM6ICR7YWN0dWFsQ29uZmlnLmRyaXZlck9yZGVyLmpvaW4oJywgJyl9LmApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=