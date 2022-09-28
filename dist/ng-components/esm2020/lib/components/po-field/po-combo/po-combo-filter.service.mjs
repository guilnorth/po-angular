import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { validateObjectType } from '../../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço padrão utilizado para filtrar os dados do componente po-combo.
 */
export class PoComboFilterService {
    constructor(http) {
        this.http = http;
        this.fieldLabel = 'label';
        this.fieldValue = 'value';
        this.hasNext = true;
        this.headers = new HttpHeaders({
            'X-PO-No-Message': 'true'
        });
        this.messages = [];
    }
    get url() {
        return this._url;
    }
    getFilteredData(param, filterParams) {
        const params = this.prepareParams(param, filterParams);
        return this.http.get(`${this.url}`, { responseType: 'json', params, headers: this.headers }).pipe(tap(res => (this.hasNext = res['hasNext'])), map((response) => this.parseToArrayComboOption(response.items)));
    }
    getObjectByValue(value, filterParams) {
        const filterParamsValidated = validateObjectType(filterParams);
        return this.http
            .get(`${this.url}/${value}`, { params: filterParamsValidated, headers: this.headers })
            .pipe(map(item => this.parseToComboOption(item)));
    }
    configProperties(url, fieldLabel, fieldValue) {
        this._url = url;
        this.fieldLabel = fieldLabel;
        this.fieldValue = fieldValue;
    }
    scrollListener(componentListner) {
        return fromEvent(componentListner, 'scroll').pipe(debounceTime(100));
    }
    prepareParams(param, filterParams) {
        const { page, pageSize, value } = param;
        const filterParamsValidated = validateObjectType(filterParams);
        return page
            ? { ...filterParamsValidated, page, pageSize, filter: value }
            : { ...filterParamsValidated, filter: value };
    }
    parseToArrayComboOption(items) {
        if (items && items.length > 0) {
            const parsedOptions = items.map(item => this.parseToComboOption(item));
            this.displayMessages();
            return parsedOptions;
        }
        return [];
    }
    parseToComboOption(item) {
        if (!item?.[this.fieldValue]) {
            this.addMessage(item, this.fieldValue);
            return { value: '' };
        }
        const label = item[this.fieldLabel];
        const value = item[this.fieldValue];
        return { label, value };
    }
    addMessage(item, property) {
        this.messages.push(`Cannot read property "${property}" of ${JSON.stringify(item)},
      see [p-field-value] property at https://po-ui.io/documentation/po-combo`);
    }
    displayMessages() {
        if (this.messages.length) {
            this.messages.forEach(message => console.error(message));
            this.messages = [];
        }
    }
}
PoComboFilterService.ɵfac = function PoComboFilterService_Factory(t) { return new (t || PoComboFilterService)(i0.ɵɵinject(i1.HttpClient)); };
PoComboFilterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoComboFilterService, factory: PoComboFilterService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoComboFilterService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29tYm8tZmlsdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tY29tYm8vcG8tY29tYm8tZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXpEOzs7Ozs7R0FNRztBQUVILE1BQU0sT0FBTyxvQkFBb0I7SUFnQi9CLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFmcEMsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUM3QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFZixZQUFPLEdBQWdCLElBQUksV0FBVyxDQUFDO1lBQzlDLGlCQUFpQixFQUFFLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBR0ssYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU1pQixDQUFDO0lBSnhDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBSUQsZUFBZSxDQUFDLEtBQVUsRUFBRSxZQUFrQjtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcs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QU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLFFBQVEsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs4RUFDTixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7O3dGQXpGVSxvQkFBb0I7MEVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgUG9Db21ib0ZpbHRlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jb21iby1maWx0ZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Db21ib09wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jb21iby1vcHRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9SZXNwb25zZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1yZXNwb25zZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZU9iamVjdFR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFNlcnZpw6dvIHBhZHLDo28gdXRpbGl6YWRvIHBhcmEgZmlsdHJhciBvcyBkYWRvcyBkbyBjb21wb25lbnRlIHBvLWNvbWJvLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9Db21ib0ZpbHRlclNlcnZpY2UgaW1wbGVtZW50cyBQb0NvbWJvRmlsdGVyIHtcclxuICBmaWVsZExhYmVsOiBzdHJpbmcgPSAnbGFiZWwnO1xyXG4gIGZpZWxkVmFsdWU6IHN0cmluZyA9ICd2YWx1ZSc7XHJcbiAgaGFzTmV4dDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHJlYWRvbmx5IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICdYLVBPLU5vLU1lc3NhZ2UnOiAndHJ1ZSdcclxuICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBtZXNzYWdlcyA9IFtdO1xyXG5cclxuICBnZXQgdXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRGaWx0ZXJlZERhdGEocGFyYW06IGFueSwgZmlsdGVyUGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxBcnJheTxQb0NvbWJvT3B0aW9uPj4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5wcmVwYXJlUGFyYW1zKHBhcmFtLCBmaWx0ZXJQYXJhbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9YCwgeyByZXNwb25zZVR5cGU6ICdqc29uJywgcGFyYW1zLCBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSkucGlwZShcclxuICAgICAgdGFwKHJlcyA9PiAodGhpcy5oYXNOZXh0ID0gcmVzWydoYXNOZXh0J10pKSxcclxuICAgICAgbWFwKChyZXNwb25zZTogUG9SZXNwb25zZSkgPT4gdGhpcy5wYXJzZVRvQXJyYXlDb21ib09wdGlvbihyZXNwb25zZS5pdGVtcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0QnlWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBmaWx0ZXJQYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPFBvQ29tYm9PcHRpb24+IHtcclxuICAgIGNvbnN0IGZpbHRlclBhcmFtc1ZhbGlkYXRlZCA9IHZhbGlkYXRlT2JqZWN0VHlwZShmaWx0ZXJQYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGlzLnVybH0vJHt2YWx1ZX1gLCB7IHBhcmFtczogZmlsdGVyUGFyYW1zVmFsaWRhdGVkLCBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUobWFwKGl0ZW0gPT4gdGhpcy5wYXJzZVRvQ29tYm9PcHRpb24oaXRlbSkpKTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ1Byb3BlcnRpZXModXJsOiBzdHJpbmcsIGZpZWxkTGFiZWw6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICB0aGlzLmZpZWxkTGFiZWwgPSBmaWVsZExhYmVsO1xyXG4gICAgdGhpcy5maWVsZFZhbHVlID0gZmllbGRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNjcm9sbExpc3RlbmVyKGNvbXBvbmVudExpc3RuZXI6IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBmcm9tRXZlbnQoY29tcG9uZW50TGlzdG5lciwgJ3Njcm9sbCcpLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcmVwYXJlUGFyYW1zKHBhcmFtOiBhbnksIGZpbHRlclBhcmFtcz86IGFueSkge1xyXG4gICAgY29uc3QgeyBwYWdlLCBwYWdlU2l6ZSwgdmFsdWUgfSA9IHBhcmFtO1xyXG4gICAgY29uc3QgZmlsdGVyUGFyYW1zVmFsaWRhdGVkID0gdmFsaWRhdGVPYmplY3RUeXBlKGZpbHRlclBhcmFtcyk7XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VcclxuICAgICAgPyB7IC4uLmZpbHRlclBhcmFtc1ZhbGlkYXRlZCwgcGFnZSwgcGFnZVNpemUsIGZpbHRlcjogdmFsdWUgfVxyXG4gICAgICA6IHsgLi4uZmlsdGVyUGFyYW1zVmFsaWRhdGVkLCBmaWx0ZXI6IHZhbHVlIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlVG9BcnJheUNvbWJvT3B0aW9uKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8UG9Db21ib09wdGlvbj4ge1xyXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcGFyc2VkT3B0aW9ucyA9IGl0ZW1zLm1hcChpdGVtID0+IHRoaXMucGFyc2VUb0NvbWJvT3B0aW9uKGl0ZW0pKTtcclxuXHJcbiAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2VzKCk7XHJcblxyXG4gICAgICByZXR1cm4gcGFyc2VkT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlVG9Db21ib09wdGlvbihpdGVtOiBhbnkpOiBQb0NvbWJvT3B0aW9uIHtcclxuICAgIGlmICghaXRlbT8uW3RoaXMuZmllbGRWYWx1ZV0pIHtcclxuICAgICAgdGhpcy5hZGRNZXNzYWdlKGl0ZW0sIHRoaXMuZmllbGRWYWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGl0ZW1bdGhpcy5maWVsZExhYmVsXTtcclxuICAgIGNvbnN0IHZhbHVlID0gaXRlbVt0aGlzLmZpZWxkVmFsdWVdO1xyXG5cclxuICAgIHJldHVybiB7IGxhYmVsLCB2YWx1ZSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRNZXNzYWdlKGl0ZW0sIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubWVzc2FnZXMucHVzaChgQ2Fubm90IHJlYWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiIG9mICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9LFxyXG4gICAgICBzZWUgW3AtZmllbGQtdmFsdWVdIHByb3BlcnR5IGF0IGh0dHBzOi8vcG8tdWkuaW8vZG9jdW1lbnRhdGlvbi9wby1jb21ib2ApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwbGF5TWVzc2FnZXMoKSB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4gY29uc29sZS5lcnJvcihtZXNzYWdlKSk7XHJcblxyXG4gICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==