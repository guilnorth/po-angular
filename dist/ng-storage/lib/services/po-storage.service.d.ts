import { InjectionToken } from '@angular/core';
import 'localforage';
import { PoStorageConfig } from './po-storage-config.interface';
import * as i0 from "@angular/core";
export declare const PO_STORAGE_CONFIG_TOKEN: InjectionToken<unknown>;
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
export declare class PoStorageService {
    private driver;
    private idleQueue;
    private storagePromise;
    private lokijsDriver;
    constructor(config?: PoStorageConfig);
    /**
     * Retorna a configuração padrão para o armazenamento. Caso nenhuma configuração seja inserida,
     * essa configuração será utilizada.
     *
     * @returns {PoStorageConfig} Objeto com a configuração padrão do armazenamento.
     */
    static getDefaultConfig(): PoStorageConfig;
    /**
     * Cria uma instância do `PoStorageService` com a configuração de armazenamento passada como parâmetro.
     *
     * @param {PoStorageConfig} storageConfig Configuração para o armazenamento.
     * @returns {PoStorageService} Instância do `PoStorageService`.
     */
    static providePoStorage(storageConfig?: PoStorageConfig): PoStorageService;
    private static getConfig;
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
    appendArrayToArray(key: string, value: Array<any>): Promise<any>;
    /**
     * Acrescenta um item em uma lista armazenada pela chave.
     *
     * @param {string} key Chave da lista armazenada.
     * @param {Array} value Item que será acrescentado na lista.
     *
     * @returns {Promise<any>} Promessa que é resolvida após o item ser acrescentado na lista armazenada.
     */
    appendItemToArray(key: string, value: any): Promise<any>;
    /**
     * Remove todos os itens da base de dados local configurada na declaração do módulo `PoStorageModule`.
     *
     * > Utilize este método com cautela, para evitar a perda indesejada de dados.
     *
     * @returns {Promise<void>} Promessa que é resolvida após todos os itens da base de dados local serem removidos.
     */
    clear(): Promise<void>;
    /**
     * Verifica se existe um valor dentro de uma determinada chave.
     *
     * @param {string} key Chave que será verificada.
     *
     * @returns {Promise<boolean>} Promessa que é resolvida quando a verificação da existência do valor na chave é concluída.
     */
    exists(key: string): Promise<boolean>;
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
    forEach(iteratorCallback: (value: any, key: string, iterationNumber: number) => any): Promise<void>;
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
    get(key: string, lock?: boolean): Promise<any>;
    /**
     * Retorna o nome do *driver* que está sendo usado para armazenar os dados, por exemplo: localStorage.
     *
     * @returns {string | null} Nome do *driver*.
     */
    getDriver(): string;
    /**
     * Retorna o primeiro item de uma lista para uma determinada chave.
     *
     * @param {string} key Chave da lista.
     * @returns {Promise<any>} Promessa que é resolvida após o primeiro item ser encontrado.
     */
    getFirstItem(key: string): Promise<any>;
    /**
     * Remove o primeiro item de uma lista a partir da chave.
     *
     * @param {string} key Chave da lista que será removido o primeiro item.
     * @returns {Promise<any>} Promessa que é resolvida após o primeiro item da lista ser removido.
     */
    getItemAndRemove(key: string): Promise<any>;
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
    getItemByField(key: string, fieldName: string, fieldValue: any): Promise<any>;
    /**
     * Lista com todas as chaves armazenadas.
     *
     * @returns {Promise<Array<string>>} Promessa que é resolvida com todas as chaves armazenadas.
     */
    keys(): Promise<Array<string>>;
    /**
     * Quantidade de chaves armazenadas.
     *
     * @returns {Promise<number>} Promessa que é resolvida com o número de chaves armazenadas.
     */
    length(): Promise<number>;
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
    limitedCallWrap(limitedResource: Function): Promise<any>;
    /**
     * Incrementa um valor na fila de bloqueio do `PoStorageService`. Utilizado juntamente com o método `unlock` para poder
     * controlar a execução de uma determinada tarefa com o `PoStorage.requestIdlePromise()`.
     *
     * Veja mais no método: [`PoStorage.requestIdlePromise()`](documentation/po-storage#request-idle-promise).
     */
    lock(): void;
    /**
     * Determina se o processo de inicialização do *driver* assíncrono foi concluído.
     *
     * @returns {Promise<LocalForage>} Promessa que é resolvida quando o processo de inicialização do *driver* assíncrono
     * for concluído.
     */
    ready(): Promise<LocalForage>;
    /**
     * Remove um valor associado a uma chave.
     *
     * @param {key} key Chave do valor que será removido.
     * @returns {Promise<any>} Promessa que é resolvida após o valor ser removido.
     */
    remove(key: string): Promise<any>;
    /**
     * Remove uma propriedade de um objeto armazenado.
     *
     * @param {string} key Chave do objeto armazenado.
     * @param {string} property Propriedade que será removida.
     *
     * @returns {Promise<any>} Promessa que é resolvida após a propriedade ser removida.
     */
    removeIndexFromObject(key: string, property: string): Promise<any>;
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
    removeItemFromArray(key: string, field: string, value: any): Promise<any>;
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
    requestIdlePromise(): Promise<any>;
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
    set(key: string, value: any, lock?: boolean): Promise<any>;
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
    setIndexToObject(key: string, property: string, value: any): Promise<any>;
    /**
     * Decrementa um valor na fila de bloqueio. Utilizado juntamente com o método `lock` para poder
     * controlar a execução de uma determinada tarefa com o `PoStorage.requestIdlePromise()`.
     *
     * Veja mais no método: [`PoStorage.requestIdlePromise()`](documentation/po-storage#request-idle-promise).
     */
    unlock(): void;
    private getArrayOfStorage;
    private getImmutableItem;
    private defineLocalForageDriver;
    private getDriverOrder;
    private getObjectOfStorage;
    private setDriver;
    private setStoragePromise;
    private getStorageInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoStorageService>;
}
