import { PoDataTransform } from './po-data-transform.model';
/**
 * @docsPrivate
 *
 * @description
 *
 * Classe responsável por implementar a classe `PoDataTransform` com os campos referentes ao padrão de
 * [API do PO UI](https://po-ui.io/guides/api).
 */
export class PoDataMessage extends PoDataTransform {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZGF0YS1tZXNzYWdlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3luYy9zcmMvbGliL21vZGVscy9wby1kYXRhLW1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLE9BQU8sYUFBYyxTQUFRLGVBQWU7SUFDaEQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0I7UUFDZCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQkFBaUI7UUFDZixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0I7UUFDZCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9EYXRhVHJhbnNmb3JtIH0gZnJvbSAnLi9wby1kYXRhLXRyYW5zZm9ybS5tb2RlbCc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDbGFzc2UgcmVzcG9uc8OhdmVsIHBvciBpbXBsZW1lbnRhciBhIGNsYXNzZSBgUG9EYXRhVHJhbnNmb3JtYCBjb20gb3MgY2FtcG9zIHJlZmVyZW50ZXMgYW8gcGFkcsOjbyBkZVxyXG4gKiBbQVBJIGRvIFBPIFVJXShodHRwczovL3BvLXVpLmlvL2d1aWRlcy9hcGkpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvRGF0YU1lc3NhZ2UgZXh0ZW5kcyBQb0RhdGFUcmFuc2Zvcm0ge1xyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgYSBwcm9wcmllZGFkZSBgcG9fc3luY19kYXRlYCwgcmVzcG9uc8OhdmVsIHBvciBpbmZvcm1hciBhIGRhdGEgZGEgw7psdGltYSBzaW5jcm9uaXphw6fDo28gbm8gZ3VpYSBkZVxyXG4gICAqIFtBUEkgZG8gUE8gVUldKGh0dHBzOi8vcG8tdWkuaW8vZ3VpZGVzL2FwaSkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBOb21lIGRvIGNhbXBvIHF1ZSBjb250w6ltIGEgZGF0YSBkYSDDumx0aW1hIHNpbmNyb25pemHDp8Ojby5cclxuICAgKi9cclxuICBnZXREYXRlRmllbGROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BvX3N5bmNfZGF0ZSc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGEgcHJvcHJpZWRhZGUgYGl0ZW1zYCwgcmVzcG9uc8OhdmVsIHBvciBpbmZvcm1hciBhIGxpc3RhIGRlIHJlZ2lzdHJvcyB2aW5kb3MgZGEgQVBJIG5vIGd1aWEgZGVcclxuICAgKiBbQVBJIGRvIFBPIFVJXShodHRwczovL3BvLXVpLmlvL2d1aWRlcy9hcGkpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gTm9tZSBkYSBwcm9wcmllZGFkZSBxdWUgY29udMOpbSBhIGxpc3RhIGRlIHJlZ2lzdHJvcy5cclxuICAgKi9cclxuICBnZXRJdGVtc0ZpZWxkTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdpdGVtcyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIGEgcHJvcHJpZWRhZGUgYHBhZ2VgLCByZXNwb25zw6F2ZWwgcG9yIGluZm9ybWFyIG8gbsO6bWVybyBkYSBww6FnaW5hIGRlIHJlZ2lzdHJvcyBxdWUgYSBBUEkgcmV0b3JuYSBubyBndWlhIGRlXHJcbiAgICogW0FQSSBkbyBQTyBVSV0oaHR0cHM6Ly9wby11aS5pby9ndWlkZXMvYXBpKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE5vbWUgZGEgcHJvcHJpZWRhZGUgcmVzcG9uc8OhdmVsIHBvciBpbmZvcm1hciBvIG7Dum1lcm8gZGEgcMOhZ2luYSBkZSByZWdpc3Ryb3MuXHJcbiAgICovXHJcbiAgZ2V0UGFnZVBhcmFtTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdwYWdlJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgYSBwcm9wcmllZGFkZSBgcGFnZVNpemVgLCByZXNwb25zw6F2ZWwgcGVsYSBxdWFudGlkYWRlIGRlIHJlZ2lzdHJvcyBxdWUgc2Vyw6NvIGV4aWJpZG9zIHBvciBww6FnaW5hIG5vIGd1aWEgZGVcclxuICAgKiBbQVBJIGRvIFBPIFVJXShodHRwczovL3BvLXVpLmlvL2d1aWRlcy9hcGkpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gTm9tZSBkbyBwYXLDom1ldHJvIHJlc3BvbnPDoXZlbCBwZWxhIHF1YW50aWRhZGUgZGUgcmVnaXN0cm9zIHBvciBww6FnaW5hLlxyXG4gICAqL1xyXG4gIGdldFBhZ2VTaXplUGFyYW1OYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3BhZ2VTaXplJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgdW0gdmFsb3IgYGJvb2xlYW5gLCBkZSBhY29yZG8gY29tIGEgcHJvcHJpZWRhZGUgYGhhc05leHRgIHF1ZSDDqSByZXNwb25zw6F2ZWwgcG9yIGluZm9ybWFyIHNlIGjDoSB1bWEgbm92YVxyXG4gICAqIHDDoWdpbmEgZGUgcmVnaXN0cm9zIGRpc3BvbsOtdmVsIG5vIGd1aWEgZGUgW0FQSSBkbyBQTyBVSV0oaHR0cHM6Ly9wby11aS5pby9ndWlkZXMvYXBpKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBJbmZvcm1hIHNlIHRlbSBwcsOzeGltYSBww6FnaW5hIGRlIHJlZ2lzdHJvcy5cclxuICAgKi9cclxuICBoYXNOZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oYXNOZXh0O1xyXG4gIH1cclxufVxyXG4iXX0=