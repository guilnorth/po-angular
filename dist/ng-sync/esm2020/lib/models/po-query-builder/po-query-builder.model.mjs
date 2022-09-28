import { validateParameter } from '../../utils/utils';
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
export class PoQueryBuilder {
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
    async exec() {
        let storageData = await this.poSchemaService.getAll(this.schema.name);
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
            this.filters = { ...this.filters, ...filter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcXVlcnktYnVpbGRlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N5bmMvc3JjL2xpYi9tb2RlbHMvcG8tcXVlcnktYnVpbGRlci9wby1xdWVyeS1idWlsZGVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBQ0gsTUFBTSxPQUFPLGNBQWM7SUFTekIsWUFBb0IsZUFBZ0MsRUFBVSxNQUFvQjtRQUE5RCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxXQUFX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LENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGdCQUFnQixDQUFDLElBQW1CLEVBQUUsWUFBMkI7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN0QjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxnQkFBNEIsRUFBRSxNQUFrQjtRQUM3RSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlUGFyYW1ldGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgUG9SZXNwb25zZUFwaSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcG8taHR0cC1jbGllbnQvaW50ZXJmYWNlcy9wby1yZXNwb25zZS1hcGkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9TY2hlbWFTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9wby1zY2hlbWEnO1xyXG5pbXBvcnQgeyBQb1N5bmNTY2hlbWEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wby1zeW5jL2ludGVyZmFjZXMvcG8tc3luYy1zY2hlbWEuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQ2xhc3NlIHV0aWxpdMOhcmlhIHBhcmEgY29uc3RydWlyIGNvbnN1bHRhcyBzb2JyZSBvcyByZWdpc3Ryb3MgZGUgdW0gKnNjaGVtYSouXHJcbiAqXHJcbiAqIEEgdXRpbGl6YcOnw6NvIGRvcyBtw6l0b2RvcyBkZXN0YSBjbGFzc2Ugw6kgZmVpdGEgYSBwYXJ0aXIgZG8gcmV0b3JubyBkbyBtw6l0b2RvIGBQb0VudGl0eS5maW5kKClgLiBQb3IgZXhlbXBsbyxcclxuICogcGFyYSB1dGlsaXphciBvIG3DqXRvZG8gYFBvUXVlcnlCdWlsZGVyLnBhZ2UoKWAsIMOpIG5lY2Vzc8OhcmlvOlxyXG4gKlxyXG4gKiBgYGAgdHlwZXNjcmlwdFxyXG4gKiBQb1N5bmNTZXJ2aWNlLmdldE1vZGVsKCdzY2hlbWEgbmFtZScpLmZpbmQoKS5wYWdlKDIpLmV4ZWMoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIE8gYFBvUXVlcnlCdWlsZGVyYCBmb2kgcHJvamV0YWRvIHBhcmEgcXVlIG9zIHNldXMgbcOpdG9kb3Mgc2VqYW1cclxuICogY2hhbWFkb3MgZW0gY2FzY2F0YSBlIGFvIGZpbmFsIGRlc3NlIGVuY2FkZWFtZW50byBpbnZvY2FyIG8gbcOpdG9kb1xyXG4gKiBgUG9RdWVyeUJ1aWxkZXIuZXhlYygpYCBwYXJhIHF1ZSBhIGJ1c2NhIHNlamEgY29uY2x1w61kYS4gUG9yIGV4ZW1wbG86XHJcbiAqXHJcbiAqIGBgYCB0eXBlc2NyaXB0XHJcbiAqIFBvU3luY1NlcnZpY2VcclxuICogICAuZ2V0TW9kZWwoJ3NjaGVtYSBuYW1lJylcclxuICogICAuZmluZCgpXHJcbiAqICAgLnBhZ2UoMilcclxuICogICAucGFnZVNpemUoNSlcclxuICogICAuc29ydCgpXHJcbiAqICAgLmV4ZWMoKTtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9RdWVyeUJ1aWxkZXIge1xyXG4gIHByaXZhdGUgZmllbGRzOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmaWx0ZXJzOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX2xpbWl0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc29ydDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvU2NoZW1hU2VydmljZTogUG9TY2hlbWFTZXJ2aWNlLCBwcml2YXRlIHNjaGVtYTogUG9TeW5jU2NoZW1hKSB7XHJcbiAgICB0aGlzLl9wYWdlID0gMTtcclxuICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW8gZmluYWwgZGEgY2hhbWFkYSBkb3MgbcOpdG9kb3MgZG8gYFBvUXVlcnlCdWlsZGVyYCB1dGlsaXphZG9zLCBlc3RlIG3DqXRvZG8gZGV2ZSBzZXIgY2hhbWFkbyBwYXJhIHF1ZSBhIGJ1c2NhIHNlamEgY29uY2x1w61kYS5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UG9SZXNwb25zZUFwaSB8IG9iamVjdD59IFJlZ2lzdHJvcyBkbyAqc2NoZW1hKiBuYSBxdWFsIGZvaSBhcGxpY2FkbyBhIGNvbnN1bHRhLlxyXG4gICAqL1xyXG4gIGFzeW5jIGV4ZWMoKTogUHJvbWlzZTxQb1Jlc3BvbnNlQXBpIHwgb2JqZWN0PiB7XHJcbiAgICBsZXQgc3RvcmFnZURhdGEgPSBhd2FpdCB0aGlzLnBvU2NoZW1hU2VydmljZS5nZXRBbGwodGhpcy5zY2hlbWEubmFtZSk7XHJcblxyXG4gICAgaWYgKHN0b3JhZ2VEYXRhICYmIHN0b3JhZ2VEYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGgpIHtcclxuICAgICAgICBzdG9yYWdlRGF0YSA9IHRoaXMuYXBwbHlGaWx0ZXJzKHN0b3JhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5maWVsZHMpIHtcclxuICAgICAgICBzdG9yYWdlRGF0YSA9IHRoaXMuYXBwbHlGaWVsZHModGhpcy5zY2hlbWEuZmllbGRzLCBzdG9yYWdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX3NvcnQpIHtcclxuICAgICAgICBzdG9yYWdlRGF0YSA9IHRoaXMub3JkZXIoc3RvcmFnZURhdGEsIHRoaXMuX3NvcnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fbGltaXQpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZURhdGFbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGUoc3RvcmFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhhc05leHQ6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBsaWNhIGZpbHRyb3Mgc29icmUgb3MgcmVnaXN0cm9zLCBiYXNlYWRvcyBub3MgY2FtcG9zIGUgdmFsb3JlcyBkZWZpbmlkb3MgY29tbyBmaWx0cm8uIFBvciBleGVtcGxvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuZmlsdGVyKHsgbmFtZTogJ01hcmllJywgYWdlOiAyNCB9KTtcclxuICAgKiBgYGBcclxuICAgKiBSZXRvcm5hIHRvZG9zIG9zIHJlZ2lzdHJvcyBxdWUgY29udGVuaGFtIGEgcHJvcHJpZWRhZGUgYG5hbWVgIGlndWFsIGEgTWFyaWUgZSBgYWdlYCBpZ3VhbCBhIDI0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciBPYmpldG8gcXVlIGNvbnTDqW0gb3MgY2FtcG9zIGUgdmFsb3JlcyBhIHNlcmVtIGZpbHRyYWRvcyBubyAqc2NoZW1hKi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQb1F1ZXJ5QnVpbGRlcn0gT2JqZXRvIHF1ZSBwb3NzaWJpbGl0YSBlbmNhZGVhciB1bSBub3ZvIG3DqXRvZG8gZG8gYFBvUXVlcnlCdWlsZGVyYC5cclxuICAgKi9cclxuICBmaWx0ZXIoZmlsdGVyPzogb2JqZWN0KTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgaWYgKGZpbHRlciAmJiB0eXBlb2YgZmlsdGVyID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB0aGlzLmZpbHRlcnMgPSB7IC4uLnRoaXMuZmlsdGVycywgLi4uZmlsdGVyIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBtdXN0IGJlIGFuIG9iamVjdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGltaXRhIG8gbsO6bWVybyBkZSByZWdpc3Ryb3MgcXVlIHNlcsOjbyByZXRvcm5hZG9zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IE7Dum1lcm8gZGUgcmVnaXN0cm9zIHJldG9ybmFkb3MuXHJcbiAgICogQHJldHVybnMge1BvUXVlcnlCdWlsZGVyfSBPYmpldG8gcXVlIHBvc3NpYmlsaXRhIGVuY2FkZWFyIHVtIG5vdm8gbcOpdG9kbyBkbyBgUG9RdWVyeUJ1aWxkZXJgLlxyXG4gICAqL1xyXG4gIGxpbWl0KGxpbWl0OiBudW1iZXIpOiBQb1F1ZXJ5QnVpbGRlciB7XHJcbiAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFc3BlY2lmaWNhIGEgcMOhZ2luYSBkZSByZWdpc3Ryb3MgcXVlIHNlIGRlc2VqYSByZXRvcm5hci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIE7Dum1lcm8gZGEgcMOhZ2luYS5cclxuICAgKiBAcmV0dXJucyB7UG9RdWVyeUJ1aWxkZXJ9IE9iamV0byBxdWUgcG9zc2liaWxpdGEgZW5jYWRlYXIgdW0gbm92byBtw6l0b2RvIGRvIGBQb1F1ZXJ5QnVpbGRlcmAuXHJcbiAgICovXHJcbiAgcGFnZShwYWdlOiBudW1iZXIpOiBQb1F1ZXJ5QnVpbGRlciB7XHJcbiAgICB2YWxpZGF0ZVBhcmFtZXRlcih7IHBhZ2UgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFnZSA9IHBhZ2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBxdWFudG9zIGVsZW1lbnRvcyBzZXLDo28gcmV0b3JuYWRvcyBwb3IgcMOhZ2luYS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2l6ZSBOw7ptZXJvIGRlIHJlZ2lzdHJvcyBwb3IgcMOhZ2luYS5cclxuICAgKiBAcmV0dXJucyB7UG9RdWVyeUJ1aWxkZXJ9IE9iamV0byBxdWUgcG9zc2liaWxpdGEgZW5jYWRlYXIgdW0gbm92byBtw6l0b2RvIGRvIGBQb1F1ZXJ5QnVpbGRlcmAuXHJcbiAgICovXHJcbiAgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IFBvUXVlcnlCdWlsZGVyIHtcclxuICAgIHZhbGlkYXRlUGFyYW1ldGVyKHsgcGFnZVNpemUgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXRpbGl6YWRvIHBhcmEgZGVmaW5pciBxdWFpcyBjYW1wb3MgZG8gKnNjaGVtYSogc2Vyw6NvIHJldG9ybmFkb3MgbmEgY29uc3VsdGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRzIENhbXBvcyBxdWUgc2Vyw6NvIHJldG9ybmFkb3Mgbm9zIHJlZ2lzdHJvcy4gRXN0ZSBjYW1wb3MgZGV2ZW0gZXN0YXIgZGVudHJvIGRlXHJcbiAgICogdW1hICpzdHJpbmcqIHNlcGFyYWRvcyBwb3IgZXNwYcOnbyBwb2RlbmRvIHVzYXIgbyBjYXJhY3RlcmUgYC1gIHBhcmEgZXhjbHVpciBjYW1wb3MuXHJcbiAgICogUG9yIGV4ZW1wbG8sIGEgZGVmaW5pw6fDo28gYWJhaXhvOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuc2VsZWN0KCduYW1lIGFnZSBhZGRyZXNzJyk7XHJcbiAgICogYGBgXHJcbiAgICogSXLDoSByZXRvcm5hciBhcGVuYXMgb3MgY2FtcG9zIGBuYW1lYCwgYGFnZWAgZSBgYWRkcmVzc2AuIFBhcmEgbsOjbyByZXRvcm5hciB1bSBjYW1wbyBvdSBtYWlzIGJhc3RhIGZhemVyOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogUG9RdWVyeUJ1aWxkZXIuc2VsZWN0KCctbmFtZSAtYWdlJyk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UG9RdWVyeUJ1aWxkZXJ9IE9iamV0byBxdWUgcG9zc2liaWxpdGEgZW5jYWRlYXIgdW0gbm92byBtw6l0b2RvIGRvIGBQb1F1ZXJ5QnVpbGRlcmAuXHJcbiAgICovXHJcbiAgc2VsZWN0KGZpZWxkczogc3RyaW5nKTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgdmFsaWRhdGVQYXJhbWV0ZXIoeyBmaWVsZHMgfSk7XHJcblxyXG4gICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9yZGVuYSBvcyByZWdpc3Ryb3MgcG9yIHVtIGNhbXBvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIENhbXBvIGEgc2VyIG9yZGVuYWRvLiBQYXJhIG9yZGVuYXIgZGUgZm9ybWEgZGVjcmVzY2VudGUgYmFzdGEgY29sb2NhciBvIGNhcmFjdGVyZSBgLWBcclxuICAgKiBuYSBmcmVudGUgZG8gY2FtcG8uIFBvciBleGVtcGxvOlxyXG4gICAqIGBgYFxyXG4gICAqIFBvUXVlcnlCdWlsZGVyLnNvcnQoJy1uYW1lJyk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UG9RdWVyeUJ1aWxkZXJ9IE9iamV0byBxdWUgcG9zc2liaWxpdGEgZW5jYWRlYXIgdW0gbm92byBtw6l0b2RvIGRvIGBQb1F1ZXJ5QnVpbGRlcmAuXHJcbiAgICovXHJcbiAgc29ydChmaWVsZDogc3RyaW5nKTogUG9RdWVyeUJ1aWxkZXIge1xyXG4gICAgdmFsaWRhdGVQYXJhbWV0ZXIoeyBmaWVsZCB9KTtcclxuXHJcbiAgICB0aGlzLl9zb3J0ID0gZmllbGQ7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVzc2EgZnVuw6fDo28gc2VydmUgY29tbyBhbGlhcyBwYXJhIG8gYFBvUXVlcnlCdWlsZGVyLmZpbHRlcigpYC4gw4kgdXRpbGl6YWRhIHNvbWVudGUgcGFyYSBkYXIgbWFpb3IgbGVnaWJpbGlkYWRlIGFvIGPDs2RpZ28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIE9iamV0byBxdWUgY29udMOpbSBvcyBjYW1wb3MgZSB2YWxvcmVzIGEgc2VyZW0gZmlsdHJhZG9zIG5vICpzY2hlbWEqLlxyXG4gICAqIEByZXR1cm5zIHtQb1F1ZXJ5QnVpbGRlcn0gT2JqZXRvIHF1ZSBwb3NzaWJpbGl0YSBlbmNhZGVhciB1bSBub3ZvIG3DqXRvZG8gZG8gYFBvUXVlcnlCdWlsZGVyYC5cclxuICAgKi9cclxuICB3aGVyZShmaWx0ZXI6IG9iamVjdCk6IFBvUXVlcnlCdWlsZGVyIHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcihmaWx0ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUZpZWxkcyhzY2hlbWFGaWVsZHM6IEFycmF5PGFueT4sIGRhdGE6IEFycmF5PG9iamVjdD4pOiBBcnJheTxvYmplY3Q+IHtcclxuICAgIGNvbnN0IHJlY2VpdmVkRmllbGRzID0gdGhpcy5maWVsZHMuc3BsaXQoJyAnKTtcclxuICAgIGxldCByZXN0cmljdGVkRmllbGRzID0gW107XHJcbiAgICBsZXQgc2VsZWN0ZWRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICBbc2VsZWN0ZWRGaWVsZHMsIHJlc3RyaWN0ZWRGaWVsZHNdID0gdGhpcy5ncm91cEZpZWxkcyhyZWNlaXZlZEZpZWxkcyk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEZpZWxkcy5sZW5ndGggJiYgcmVzdHJpY3RlZEZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgc2VsZWN0ZWRGaWVsZHMgPSBbLi4uc2NoZW1hRmllbGRzXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdHJpY3RlZEZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgc2VsZWN0ZWRGaWVsZHMgPSB0aGlzLnJlbW92ZVJlc3RyaWN0ZWRGaWVsZHMocmVzdHJpY3RlZEZpZWxkcywgc2VsZWN0ZWRGaWVsZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkRmllbGRzID0gdGhpcy5yZW1vdmVEdXBsaWNhdGUoc2VsZWN0ZWRGaWVsZHMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlbW92ZUZpZWxkc0RhdGEoZGF0YSwgc2VsZWN0ZWRGaWVsZHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseUZpbHRlcnMoZGF0YTogQXJyYXk8b2JqZWN0Pik6IEFycmF5PG9iamVjdD4ge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5mb3JFYWNoKGZpbHRlcktleSA9PiB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW1bZmlsdGVyS2V5XSA9PT0gdGhpcy5maWx0ZXJzW2ZpbHRlcktleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdyb3VwRmllbGRzKHJlY2VpdmVkRmllbGRzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8QXJyYXk8c3RyaW5nPj4ge1xyXG4gICAgY29uc3QgcmVzdHJpY3RlZEZpZWxkcyA9IFtdO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICByZWNlaXZlZEZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XHJcbiAgICAgIGlmIChmaWVsZHMuc3RhcnRzV2l0aCgnLScpKSB7XHJcbiAgICAgICAgcmVzdHJpY3RlZEZpZWxkcy5wdXNoKGZpZWxkcy5zdWJzdHJpbmcoMSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGVjdGVkRmllbGRzLnB1c2goZmllbGRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW3NlbGVjdGVkRmllbGRzLCByZXN0cmljdGVkRmllbGRzXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFnaW5hdGUoZGF0YTogQXJyYXk8YW55Pik6IHsgaGFzTmV4dDogYm9vbGVhbjsgaXRlbXM6IEFycmF5PGFueT4gfSB7XHJcbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcbiAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMuX3BhZ2VTaXplIHx8IGRhdGFMZW5ndGg7XHJcblxyXG4gICAgY29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoZGF0YUxlbmd0aCAvIHBhZ2VTaXplKTtcclxuICAgIGNvbnN0IGJlZ2luID0gdGhpcy5fcGFnZSAqIHBhZ2VTaXplIC0gcGFnZVNpemU7XHJcbiAgICBjb25zdCBlbmQgPSBiZWdpbiArIHBhZ2VTaXplO1xyXG5cclxuICAgIHJldHVybiB7IGhhc05leHQ6IHRoaXMuX3BhZ2UgPCBwYWdlcywgaXRlbXM6IGRhdGEuc2xpY2UoYmVnaW4sIGVuZCkgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3JkZXIoZGF0YTogQXJyYXk8YW55Piwgc29ydGluZ0ZpZWxkOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcclxuICAgIGNvbnN0IGRlc2NlbmRpbmdPcmRlciA9IHNvcnRpbmdGaWVsZC5zdGFydHNXaXRoKCctJyk7XHJcbiAgICBzb3J0aW5nRmllbGQgPSBkZXNjZW5kaW5nT3JkZXIgPyBzb3J0aW5nRmllbGQuc3Vic3RyKDEpIDogc29ydGluZ0ZpZWxkO1xyXG5cclxuICAgIHJldHVybiBkYXRhLnNvcnQoKG9wdGlvbkEsIG9wdGlvbkIpID0+IHtcclxuICAgICAgaWYgKG9wdGlvbkFbc29ydGluZ0ZpZWxkXSA+IG9wdGlvbkJbc29ydGluZ0ZpZWxkXSkge1xyXG4gICAgICAgIHJldHVybiAhZGVzY2VuZGluZ09yZGVyID8gMSA6IC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9uQVtzb3J0aW5nRmllbGRdIDwgb3B0aW9uQltzb3J0aW5nRmllbGRdKSB7XHJcbiAgICAgICAgcmV0dXJuICFkZXNjZW5kaW5nT3JkZXIgPyAtMSA6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZShmaWVsZHMpOiBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKChpdGVtLCBwb3NpdGlvbikgPT4gZmllbGRzLmluZGV4T2YoaXRlbSkgPT09IHBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRmllbGRzRGF0YShkYXRhOiBBcnJheTxvYmplY3Q+LCBjaG9zZW5GaWVsZHM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxvYmplY3Q+IHtcclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChrZXlJdGVtID0+IHtcclxuICAgICAgICBpZiAoIWNob3NlbkZpZWxkcy5pbmNsdWRlcyhrZXlJdGVtKSkge1xyXG4gICAgICAgICAgZGVsZXRlIGl0ZW1ba2V5SXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVJlc3RyaWN0ZWRGaWVsZHMocmVzdHJpY3RlZEZpZWxkczogQXJyYXk8YW55PiwgZmllbGRzOiBBcnJheTxhbnk+KSB7XHJcbiAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmaWVsZCA9PiAhcmVzdHJpY3RlZEZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpO1xyXG4gIH1cclxufVxyXG4iXX0=