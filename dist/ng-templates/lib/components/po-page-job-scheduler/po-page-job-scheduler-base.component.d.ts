import { AbstractControl } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { PoJobSchedulerInternal } from './interfaces/po-job-scheduler-internal.interface';
import { PoPageJobSchedulerService } from './po-page-job-scheduler.service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `po-page-job-scheduler` é uma página para criação e atualização de agendamentos da execução de processos (Job Scheduler),
 * como por exemplo: a geração da folha de pagamento dos funcionários.
 *
 * Para utilizar esta página, basta informar o serviço (endpoint) para consumo,
 * sem a necessidade de criar componentes e tratamentos dos dados.
 *
 * Veja mais sobre os padrões utilizados nas requisições no [Guia de implementação de APIs](guides/api).
 */
export declare class PoPageJobSchedulerBaseComponent implements OnDestroy {
    protected poPageJobSchedulerService: PoPageJobSchedulerService;
    /** Objeto com as propriedades do breadcrumb. */
    breadcrumb?: PoBreadcrumb;
    /**
     * Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.
     *
     * #### Processos
     *
     * Os processos são as tarefas que estarão disponíveis para o usuário poder fazer os agendamentos.
     * Ao inicializar o componente, será feito uma requisição `GET` para o endpoint `{service-api}/processes`, para buscar
     * essa lista de processos.
     *
     * Este endpoint `{service-api}/processes` deve retornar uma lista de objetos que seguem a definição de dados abaixo:
     *
     * ```
     * GET {service-api}/processes
     * ```
     *
     * ```
     * {
     *   items: [
     *     { "processID": "ac4f", "description": "Gerar folha de pagamento" },
     *     { "processID": "df6l", "description": "Relatório de imposto a recolher" },
     *     { "processID": "dk3p", "description": "Títulos em aberto" },
     *   ]
     * }
     * ```
     *
     * Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.
     *
     * Para realizar o filtro de busca do processo, será feita uma requisição enviando o conteúdo digitado na busca através do
     * parâmetro `search`. Da seguinte forma:
     *
     * ```
     * GET {service-api}/processes?search=relatorio
     * ```
     *
     * > Veja mais sobre paginação e filtros no [Guia de implementação de APIs](guides/api).
     * Caso seja informada a propriedade `p-parameters` não serão realizadas as requisições de processos e nem de parametros automaticamente.
     *
     * Também é possível fazer um agendamento de um processo específico, sem que seja necessário um endpoint para busca desses
     * processos. Então, caso o endpoint `{service-api}/processes` não seja válido, será apresentado um campo de entrada de
     * texto para o usuário informar diretamente
     * o **identificador do processo - `processID`** e ao salvar será enviado um `POST` para o endpoint difinido `serviceApi` conforme abaixo:
     *
     * ```
     * POST {service-api}
     * ```
     *
     * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
     *
     * ```
     * {
     *   "daily": { "hour": 10, "minute": 12 },
     *   "firstExecution": "2018-12-07T00:00:01-00:00",
     *   "recurrent": true,
     *   "processID": "ac0405"
     *   ...
     * }
     * ```
     *
     * Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `GET`
     * como exemplificado abaixo. Os parâmetros devem retornar uma lista de objetos que seguem a interface
     * [PoDynamicFormField](/documentation/po-dynamic-form). Porém, caso utilizar a propriedade `p-parameters` o componente não
     * realizará a busca automática e o campo de processos não será exibido.
     *
     * ```
     * GET {service-api}/processes/:id/parameters
     * ...
     * {
     *   items: [
     *     { "property": "vencimento", type: "date" },
     *     { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
     *   ]
     * }
     * ```
     *
     * #### Salvar e Atualizar
     *
     * Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via *payload*.
     * Abaixo uma requisição `POST` disparada, onde as propriedades do *Job Scheduler* foram preenchidas:
     *
     * ```
     *  POST {service-api}
     * ```
     *
     * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
     *
     * ```
     * {
     *   "firstExecution": "2018-12-07T00:00:01-00:00",
     *   "recurrent": true,
     *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
     *   "processID": "ac0405",
     *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
     * }
     * ```
     *
     * Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `id`.
     *
     * Exemplo de configuração de rota:
     *
     * ```
     *  RouterModule.forRoot([
     *    ...
     *    { path: 'edit/:id', component: ExampleJobSchedulerComponent },
     *    ...
     *  ],
     * ```
     *
     * Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.
     *
     * ```
     * GET {service-api}/{id}
     * ```
     *
     * Ao atualizar o agendamento, será disparado um `PUT` com os dados preenchidos.
     * Veja abaixo uma requisição `PUT` disparada, onde a propriedade *recurrent* e *daily* foram atualizadas:
     *
     * ```
     *  PUT {service-api}/{id}
     * ```
     *
     * *Request payload* - estrutura de dados enviada no corpo da requisição conforme interface `PoJobScheduler`:
     *
     * ```
     * {
     *   "firstExecution": "2018-12-07T00:00:01-00:00",
     *   "recurrent": true,
     *   "processID": "ac0405",
     *   "monthly": { "day": 1, "hour": 10, "minute": 0 },
     *   "processID": "ac0405",
     *   "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
     * }
     * ```
     */
    serviceApi: string;
    /** Título da página. */
    title: string;
    /**
     * Parâmetros que serão utilizados para criação e edição dos agendamentos.
     *
     * Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.
     *
     */
    parameters: Array<PoDynamicFormField>;
    set value(value: any);
    /**
     * Componente customizado que será renderizado na etapa de parametrizações
     */
    component: any;
    /**
     * Propriedades de @Input e @Output do componente customizado em formato chave: valor
     */
    dataProps: Object;
    model: PoJobSchedulerInternal;
    private _subscription;
    constructor(poPageJobSchedulerService: PoPageJobSchedulerService);
    ngOnDestroy(): void;
    protected loadData(id: string | number): void;
    protected markAsDirtyInvalidControls(controls: {
        [key: string]: AbstractControl;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageJobSchedulerBaseComponent, never, never, { "breadcrumb": "p-breadcrumb"; "serviceApi": "p-service-api"; "title": "p-title"; "parameters": "p-parameters"; "value": "p-value"; "component": "p-component"; "dataProps": "p-data-props"; }, {}, never, never, false>;
}