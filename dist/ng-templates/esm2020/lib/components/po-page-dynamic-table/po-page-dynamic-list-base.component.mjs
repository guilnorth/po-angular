import { Input, Directive, Output, EventEmitter } from '@angular/core';
import { convertToBoolean } from '../../utils/util';
import * as i0 from "@angular/core";
export class PoPageDynamicListBaseComponent {
    constructor() {
        /** Objeto com propriedades do breadcrumb. */
        this.breadcrumb = { items: [] };
        /**
         * @optional
         *
         * @description
         * Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.
         *
         * O componente envia como parâmetro um array de string com as colunas visíveis atualizadas.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.changeVisibleColumns = new EventEmitter();
        /**
         * @optional
         *
         * @description
         * Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.
         *
         * O componente envia como parâmetro um array de string com as colunas configuradas inicialmente.
         * Por exemplo: ["idCard", "name", "hireStatus", "age"].
         */
        this.columnRestoreManager = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado ao ordenar colunas da tabela.
         *
         * Recebe um objeto `{ column, type }` onde:
         *
         * - column (`PoTableColumn`): objeto da coluna que foi clicada/ordenada.
         * - type (`PoTableColumnSortType`): tipo da ordenação.
         */
        this.sortBy = new EventEmitter();
        this._autoRouter = false;
        this._columns = [];
        this._duplicates = [];
        this._fields = [];
        this._filters = [];
        this._keys = [];
    }
    /**
     * @optional
     *
     * @description
     *
     * Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `p-actions`
     *
     * As rotas criadas serão baseadas na propriedade `p-actions`.
     *
     * > Para o correto funcionamento não pode haver nenhuma rota coringa (`**`) especificada.
     *
     * @default false
     */
    set autoRouter(value) {
        this._autoRouter = convertToBoolean(value);
    }
    get autoRouter() {
        return this._autoRouter;
    }
    /**
     * @optional
     *
     * @description
     *
     * Lista dos campos usados na tabela e busca avançada.
     *
     *
     * > Caso não seja definido fields a tabela assumirá o comportamento padrão.
     */
    set fields(fields) {
        this._fields = Array.isArray(fields) ? [...fields] : [];
        this.setFieldsProperties(this.fields);
    }
    get fields() {
        return this._fields;
    }
    set columns(value) {
        this._columns = [...value];
    }
    get columns() {
        return this._columns;
    }
    set duplicates(value) {
        this._duplicates = [...value];
    }
    get duplicates() {
        return this._duplicates;
    }
    set filters(value) {
        this._filters = [...value];
    }
    get filters() {
        return this._filters;
    }
    set keys(value) {
        this._keys = [...value];
    }
    get keys() {
        return this._keys;
    }
    setFieldsProperties(fields) {
        let visibleFilter;
        this.filters = fields
            .filter(field => field.filter === true)
            .map(filterField => {
            visibleFilter = !(filterField.initValue && filterField.fixed);
            return { ...filterField, visible: visibleFilter };
        });
        this.columns = fields.filter(field => field.visible === undefined || field.visible === true || field.allowColumnsManager === true);
        this.keys = fields.filter(field => field.key === true).map(field => field.property);
        this.duplicates = fields.filter(field => field.duplicate === true).map(field => field.property);
    }
}
PoPageDynamicListBaseComponent.ɵfac = function PoPageDynamicListBaseComponent_Factory(t) { return new (t || PoPageDynamicListBaseComponent)(); };
PoPageDynamicListBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageDynamicListBaseComponent, inputs: { breadcrumb: ["p-breadcrumb", "breadcrumb"], serviceApi: ["p-service-api", "serviceApi"], title: ["p-title", "title"], autoRouter: ["p-auto-router", "autoRouter"], fields: ["p-fields", "fields"] }, outputs: { changeVisibleColumns: "p-change-visible-columns", columnRestoreManager: "p-restore-column-manager", sortBy: "p-sort-by" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageDynamicListBaseComponent, [{
        type: Directive
    }], null, { breadcrumb: [{
            type: Input,
            args: ['p-breadcrumb']
        }], serviceApi: [{
            type: Input,
            args: ['p-service-api']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], changeVisibleColumns: [{
            type: Output,
            args: ['p-change-visible-columns']
        }], columnRestoreManager: [{
            type: Output,
            args: ['p-restore-column-manager']
        }], sortBy: [{
            type: Output,
            args: ['p-sort-by']
        }], autoRouter: [{
            type: Input,
            args: ['p-auto-router']
        }], fields: [{
            type: Input,
            args: ['p-fields']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1keW5hbWljLWxpc3QtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtZHluYW1pYy10YWJsZS9wby1wYWdlLWR5bmFtaWMtbGlzdC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUtwRCxNQUFNLE9BQU8sOEJBQThCO0lBRDNDO1FBRUUsNkNBQTZDO1FBQ3RCLGVBQVUsR0FBa0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFtRmpFOzs7Ozs7OztXQVFHO1FBQ2lDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRTdGOzs7Ozs7OztXQVFHO1FBQ2lDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRTdGOzs7Ozs7Ozs7OztXQVdHO1FBQ2tCLFdBQU0sR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFN0YsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBa0IsRUFBRSxDQUFDO0tBeUZuQztJQXZGQzs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxJQUE0QixVQUFVLENBQUMsS0FBYztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLFVB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VUFBVTtrQkFBakMsS0FBSzttQkFBQyxlQUFlO1lBR0osS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBV29CLG9CQUFvQjtrQkFBdkQsTUFBTTttQkFBQywwQkFBMEI7WUFXRSxvQkFBb0I7a0JBQXZELE1BQU07bUJBQUMsMEJBQTBCO1lBY2IsTUFBTTtrQkFBMUIsTUFBTTttQkFBQyxXQUFXO1lBc0JTLFVBQVU7a0JBQXJDLEtBQUs7bUJBQUMsZUFBZTtZQWtCQyxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9CcmVhZGNydW1iLCBQb1RhYmxlQ29sdW1uU29ydCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvUGFnZUR5bmFtaWNUYWJsZUZpbHRlcnMgfSBmcm9tICcuL2ludGVyZmFjZXMvcG8tcGFnZS1keW5hbWljLXRhYmxlLWZpbHRlcnMuaW50ZXJmYWNlJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9QYWdlRHluYW1pY0xpc3RCYXNlQ29tcG9uZW50IHtcclxuICAvKiogT2JqZXRvIGNvbSBwcm9wcmllZGFkZXMgZG8gYnJlYWRjcnVtYi4gKi9cclxuICBASW5wdXQoJ3AtYnJlYWRjcnVtYicpIGJyZWFkY3J1bWI/OiBQb0JyZWFkY3J1bWIgPSB7IGl0ZW1zOiBbXSB9O1xyXG5cclxuICAvKiogRW5kcG9pbnQgZGEgQVBJIGRvcyByZWN1cnNvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zLiAqL1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRW5kcG9pbnQgdXNhZG8gcGVsbyB0ZW1wbGF0ZSBwYXJhIHJlcXVpc2nDp8OjbyBkb3MgcmVjdXJzb3MgcXVlIHNlcsOjbyBleGliaWRvcy5cclxuICAgKlxyXG4gICAqIEFvIHJlYWxpemFyIHJlcXVpc2nDp8O1ZXMgZGUgYnVzY2EsIHBvZGVtIHNlciBlbnZpYWRvcyBvcyBwYXLDom1ldHJvcyAoY2FzbyBwb3NzdWFtIHZhbG9yKTogYHBhZ2VgLCBgcGFnZVNpemVgLCBgc2VhcmNoYCBlIGBvcmRlcmAuXHJcbiAgICpcclxuICAgKiBDYXNvIGEgY29sdW5hIGVzdGl2ZXIgb3JkZW5hZGEgZGVzY2VuZGVudGVtZW50ZSBzZXLDoSBlbnZpYWRhIGRhIHNlZ3VpbnRlIGZvcm1hOiBgLW5hbWVgLCBzZSBmb3Igb3JkZW5hZGFcclxuICAgKiBhc2NlbmRlbnRlbWVudGUgc2Vyw6EgZW52aWFkYSBhcGVuYXMgY29tIG8gbm9tZSBkYSBjb2x1bmEsIHBvciBleGVtcGxvOiBgbmFtZWAuXHJcbiAgICpcclxuICAgKiBFeGVtcGxvIGRlIHVtYSByZXF1aXNpw6fDo28gZGUgYnVzY2E6XHJcbiAgICpcclxuICAgKiA+IGBHRVQge2VuZC1wb2ludH0ve3Jlc291cmNlfT9wYWdlPTEmcGFnZVNpemU9MTAmc2VhcmNoPWNvbXBvbmVudHMmb3JkZXI9LW5hbWVgXHJcbiAgICpcclxuICAgKiBDYXNvIGEgYcOnw6NvIGByZW1vdmVgIGVzdGl2ZXIgY29uZmlndXJhZGEsIHNlcsOhIGZlaXRvIHVtYSByZXF1aXNpw6fDo28gZGUgZXhjbHVzw6NvIG5lc3NlIG1lc21vIGVuZHBvaW50IHBhc3NhbmRvIG9zIGNhbXBvc1xyXG4gICAqIHNldGFkb3MgY29tbyBga2V5OiB0cnVlYC5cclxuICAgKlxyXG4gICAqID4gYERFTEVURSB7ZW5kLXBvaW50fS97a2V5c31gXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgPHBvLXBhZ2UtZHluYW1pYy10YWJsZVxyXG4gICAqICAgIFtwLWFjdGlvbnNdPVwieyByZW1vdmU6IHRydWUgfVwiXHJcbiAgICogICAgW3AtZmllbGRzXT1cIlsgeyBwcm9wZXJ0eTogJ2lkJywga2V5OiB0cnVlIH0gXVwiXHJcbiAgICogICAgcC1zZXJ2aWNlPVwiL2FwaS9wby1zYW1wbGVzL3YxL3Blb3BsZVwiXHJcbiAgICogICAgLi4uPlxyXG4gICAqICA8L3BvLXBhZ2UtZHluYW1pYy10YWJsZT5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIFJlc3F1aXNpw6fDo28gZGlzcGFyYWRhLCBvbmRlIGEgcHJvcHJpZWRhZGUgYGlkYCDDqSBpZ3VhbCBhIDI6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgREVMRVRFIC9hcGkvcG8tc2FtcGxlcy92MS9wZW9wbGUvMiBIVFRQLzEuMVxyXG4gICAqICBIb3N0OiBsb2NhbGhvc3Q6NDAwMFxyXG4gICAqICBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXHJcbiAgICogIEFjY2VwdDogYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpblxyXG4gICAqICAuLi5cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIFBhcmEgYSBhw6fDo28gYHJlbW92ZUFsbGAsIHNlcsOhIGZlaXRvIHVtYSByZXF1aXNpw6fDo28gZGUgZXhjbHVzw6NvIGVtIGxvdGUgcGFyYSBlc3NlIG1lc21vIGVuZHBvaW50IHBhc3NhbmRvLCB1bWEgbGlzdGFcclxuICAgKiBkZSBvYmpldG9zIGNvbSBvcyBjYW1wb3Mgc2V0YWRvcyBjb21vIGBrZXk6IHRydWVgIHZpYSBgcGF5bG9hZGAuXHJcbiAgICpcclxuICAgKiA+IGBERUxFVEUge2VuZC1wb2ludH1gXHJcbiAgICpcclxuICAgKiA+IGBQYXlsb2FkOiBbIHtrZXl9LCB7a2V5fSAuLi4ge2tleX0gXWBcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqICA8cG8tcGFnZS1keW5hbWljLXRhYmxlXHJcbiAgICogICAgW3AtYWN0aW9uc109XCJ7IHJlbW92ZUFsbDogdHJ1ZSB9XCJcclxuICAgKiAgICBbcC1maWVsZHNdPVwiWyB7IHByb3BlcnR5OiAnaWQnLCBrZXk6IHRydWUgfSBdXCJcclxuICAgKiAgICBwLXNlcnZpY2U9XCIvYXBpL3BvLXNhbXBsZXMvdjEvcGVvcGxlXCJcclxuICAgKiAgICAuLi4+XHJcbiAgICogIDwvcG8tcGFnZS1keW5hbWljLXRhYmxlPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogUmVzcXVpc2nDp8OjbyBkaXNwYXJhZGEsIG9uZGUgZm9yYW0gc2VsZWNpb25hZG9zIDMgaXRlbnMgcGFyYSBzZXJlbSByZW1vdmlkb3M6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgREVMRVRFIC9hcGkvcG8tc2FtcGxlcy92MS9wZW9wbGUgSFRUUC8xLjFcclxuICAgKiAgSG9zdDogbG9jYWxob3N0OjQwMDBcclxuICAgKiAgQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxyXG4gICAqICBBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW5cclxuICAgKiAgLi4uXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBSZXF1ZXN0IHBheWxvYWQ6XHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBbe1wiaWRcIjoyfSx7XCJpZFwiOjR9LHtcImlkXCI6NX1dXHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiA+IENhc28gZXN0ZWphIHVzYW5kbyBtZXRhZGFkb3MgY29tIG8gdGVtcGxhdGUsIHNlcsOhIGRpc3BhcmFkbyB1bWEgcmVxdWlzacOnw6NvIG5hIGluaWNpYWxpemHDp8OjbyBkbyB0ZW1wbGF0ZSBwYXJhIGJ1c2NhclxyXG4gICAqID4gb3MgbWV0YWRhZG9zIGRhIHDDoWdpbmEgcGFzc2FuZG8gbyB0aXBvIGRvIG1ldGFkYWRvIGVzcGVyYWRvIGUgYSB2ZXJzw6NvIGNhY2hlYWRhIHBlbG8gYnJvd3Nlci5cclxuICAgKiA+XHJcbiAgICogPiBgR0VUIHtlbmQtcG9pbnR9L21ldGFkYXRhP3R5cGU9bGlzdCZ2ZXJzaW9uPXt2ZXJzaW9ufWBcclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2VydmljZS1hcGknKSBzZXJ2aWNlQXBpOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUw610dWxvIGRhIHDDoWdpbmEuICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGZlY2hhciBvIHBvcG92ZXIgZG8gZ2VyZW5jaWFkb3IgZGUgY29sdW5hcyBhcMOzcyBhbHRlcmFyIGFzIGNvbHVuYXMgdmlzw612ZWlzLlxyXG4gICAqXHJcbiAgICogTyBjb21wb25lbnRlIGVudmlhIGNvbW8gcGFyw6JtZXRybyB1bSBhcnJheSBkZSBzdHJpbmcgY29tIGFzIGNvbHVuYXMgdmlzw612ZWlzIGF0dWFsaXphZGFzLlxyXG4gICAqIFBvciBleGVtcGxvOiBbXCJpZENhcmRcIiwgXCJuYW1lXCIsIFwiaGlyZVN0YXR1c1wiLCBcImFnZVwiXS5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLWNoYW5nZS12aXNpYmxlLWNvbHVtbnMnKSBjaGFuZ2VWaXNpYmxlQ29sdW1ucyA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8c3RyaW5nPj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFdmVudG8gZGlzcGFyYWRvIGFvIGNsaWNhciBubyBib3TDo28gZGUgcmVzdGF1cmFyIHBhZHLDo28gbm8gZ2VyZW5jaWFkb3IgZGUgY29sdW5hcy5cclxuICAgKlxyXG4gICAqIE8gY29tcG9uZW50ZSBlbnZpYSBjb21vIHBhcsOibWV0cm8gdW0gYXJyYXkgZGUgc3RyaW5nIGNvbSBhcyBjb2x1bmFzIGNvbmZpZ3VyYWRhcyBpbmljaWFsbWVudGUuXHJcbiAgICogUG9yIGV4ZW1wbG86IFtcImlkQ2FyZFwiLCBcIm5hbWVcIiwgXCJoaXJlU3RhdHVzXCIsIFwiYWdlXCJdLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3AtcmVzdG9yZS1jb2x1bW4tbWFuYWdlcicpIGNvbHVtblJlc3RvcmVNYW5hZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxTdHJpbmc+PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGV4ZWN1dGFkbyBhbyBvcmRlbmFyIGNvbHVuYXMgZGEgdGFiZWxhLlxyXG4gICAqXHJcbiAgICogUmVjZWJlIHVtIG9iamV0byBgeyBjb2x1bW4sIHR5cGUgfWAgb25kZTpcclxuICAgKlxyXG4gICAqIC0gY29sdW1uIChgUG9UYWJsZUNvbHVtbmApOiBvYmpldG8gZGEgY29sdW5hIHF1ZSBmb2kgY2xpY2FkYS9vcmRlbmFkYS5cclxuICAgKiAtIHR5cGUgKGBQb1RhYmxlQ29sdW1uU29ydFR5cGVgKTogdGlwbyBkYSBvcmRlbmHDp8Ojby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNvcnQtYnknKSBzb3J0Qnk6IEV2ZW50RW1pdHRlcjxQb1RhYmxlQ29sdW1uU29ydD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBvVGFibGVDb2x1bW5Tb3J0PigpO1xyXG5cclxuICBwcml2YXRlIF9hdXRvUm91dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY29sdW1uczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByaXZhdGUgX2R1cGxpY2F0ZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwcml2YXRlIF9maWVsZHM6IEFycmF5PGFueT4gPSBbXTtcclxuICBwcml2YXRlIF9maWx0ZXJzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgcHJpdmF0ZSBfa2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ3JpYSBhdXRvbWF0aWNhbWVudGUgYXMgcm90YXMgZGUgZWRpw6fDo28gKG5vdm8vZHVwbGljYXRlKSBlIGRldGFsaGVzIGNhc28gc2VqYW0gZGVmaW5pZGFzIGHDp8O1ZXMgbmEgcHJvcHJpZWRhZGUgYHAtYWN0aW9uc2BcclxuICAgKlxyXG4gICAqIEFzIHJvdGFzIGNyaWFkYXMgc2Vyw6NvIGJhc2VhZGFzIG5hIHByb3ByaWVkYWRlIGBwLWFjdGlvbnNgLlxyXG4gICAqXHJcbiAgICogPiBQYXJhIG8gY29ycmV0byBmdW5jaW9uYW1lbnRvIG7Do28gcG9kZSBoYXZlciBuZW5odW1hIHJvdGEgY29yaW5nYSAoYCoqYCkgZXNwZWNpZmljYWRhLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBASW5wdXQoJ3AtYXV0by1yb3V0ZXInKSBzZXQgYXV0b1JvdXRlcih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b1JvdXRlciA9IGNvbnZlcnRUb0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9Sb3V0ZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXV0b1JvdXRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBMaXN0YSBkb3MgY2FtcG9zIHVzYWRvcyBuYSB0YWJlbGEgZSBidXNjYSBhdmFuw6dhZGEuXHJcbiAgICpcclxuICAgKlxyXG4gICAqID4gQ2FzbyBuw6NvIHNlamEgZGVmaW5pZG8gZmllbGRzIGEgdGFiZWxhIGFzc3VtaXLDoSBvIGNvbXBvcnRhbWVudG8gcGFkcsOjby5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtZmllbGRzJykgc2V0IGZpZWxkcyhmaWVsZHM6IEFycmF5PFBvUGFnZUR5bmFtaWNUYWJsZUZpbHRlcnM+KSB7XHJcbiAgICB0aGlzLl9maWVsZHMgPSBBcnJheS5pc0FycmF5KGZpZWxkcykgPyBbLi4uZmllbGRzXSA6IFtdO1xyXG5cclxuICAgIHRoaXMuc2V0RmllbGRzUHJvcGVydGllcyh0aGlzLmZpZWxkcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCk6IEFycmF5PFBvUGFnZUR5bmFtaWNUYWJsZUZpbHRlcnM+IHtcclxuICAgIHJldHVybiB0aGlzLl9maWVsZHM7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sdW1ucyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fY29sdW1ucyA9IFsuLi52YWx1ZV07XHJcbiAgfVxyXG5cclxuICBnZXQgY29sdW1ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgc2V0IGR1cGxpY2F0ZXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2R1cGxpY2F0ZXMgPSBbLi4udmFsdWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGR1cGxpY2F0ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHVwbGljYXRlcztcclxuICB9XHJcblxyXG4gIHNldCBmaWx0ZXJzKHZhbHVlOiBBcnJheTxQb1BhZ2VEeW5hbWljVGFibGVGaWx0ZXJzPikge1xyXG4gICAgdGhpcy5fZmlsdGVycyA9IFsuLi52YWx1ZV07XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVycygpIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGtleXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuX2tleXMgPSBbLi4udmFsdWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGtleXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmllbGRzUHJvcGVydGllcyhmaWVsZHM6IEFycmF5PGFueT4pIHtcclxuICAgIGxldCB2aXNpYmxlRmlsdGVyOiBib29sZWFuO1xyXG4gICAgdGhpcy5maWx0ZXJzID0gZmllbGRzXHJcbiAgICAgIC5maWx0ZXIoZmllbGQgPT4gZmllbGQuZmlsdGVyID09PSB0cnVlKVxyXG4gICAgICAubWFwKGZpbHRlckZpZWxkID0+IHtcclxuICAgICAgICB2aXNpYmxlRmlsdGVyID0gIShmaWx0ZXJGaWVsZC5pbml0VmFsdWUgJiYgZmlsdGVyRmllbGQuZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiB7IC4uLmZpbHRlckZpZWxkLCB2aXNpYmxlOiB2aXNpYmxlRmlsdGVyIH07XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gZmllbGRzLmZpbHRlcihcclxuICAgICAgZmllbGQgPT4gZmllbGQudmlzaWJsZSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkLnZpc2libGUgPT09IHRydWUgfHwgZmllbGQuYWxsb3dDb2x1bW5zTWFuYWdlciA9PT0gdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMua2V5cyA9IGZpZWxkcy5maWx0ZXIoZmllbGQgPT4gZmllbGQua2V5ID09PSB0cnVlKS5tYXAoZmllbGQgPT4gZmllbGQucHJvcGVydHkpO1xyXG4gICAgdGhpcy5kdXBsaWNhdGVzID0gZmllbGRzLmZpbHRlcihmaWVsZCA9PiBmaWVsZC5kdXBsaWNhdGUgPT09IHRydWUpLm1hcChmaWVsZCA9PiBmaWVsZC5wcm9wZXJ0eSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==