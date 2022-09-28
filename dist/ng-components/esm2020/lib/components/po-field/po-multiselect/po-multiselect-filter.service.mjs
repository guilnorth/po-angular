import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoMultiselectFilterService {
    constructor(http) {
        this.http = http;
        this.fieldLabel = 'label';
        this.fieldValue = 'value';
        this.messages = [];
    }
    get url() {
        return this._url;
    }
    getFilteredData({ value }) {
        const params = value ? { filter: value } : {};
        return this.http
            .get(this.url, {
            params
        })
            .pipe(map(response => this.parseToArrayMultiselectOptions(response['items'])));
    }
    getObjectsByValues(value) {
        return this.http
            .get(`${this.url}?${this.fieldValue}=${value.toString()}`)
            .pipe(map(response => this.parseToArrayMultiselectOptions(response['items'])));
    }
    configProperties(url, fieldLabel, fieldValue) {
        this._url = url;
        this.fieldLabel = fieldLabel;
        this.fieldValue = fieldValue;
    }
    parseToArrayMultiselectOptions(items) {
        if (items && items.length > 0) {
            return items.map(item => this.parseToMultiselectOption(item));
        }
        return [];
    }
    parseToMultiselectOption(item) {
        const label = item[this.fieldLabel];
        const value = item[this.fieldValue];
        return { [this.fieldLabel]: label, [this.fieldValue]: value };
    }
}
PoMultiselectFilterService.ɵfac = function PoMultiselectFilterService_Factory(t) { return new (t || PoMultiselectFilterService)(i0.ɵɵinject(i1.HttpClient)); };
PoMultiselectFilterService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoMultiselectFilterService, factory: PoMultiselectFilterService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMultiselectFilterService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbXVsdGlzZWxlY3QtZmlsdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tbXVsdGlzZWxlY3QvcG8tbXVsdGlzZWxlY3QtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtyQyxNQUFNLE9BQU8sMEJBQTBCO0lBV3JDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFWcEMsZUFBVSxHQUFXLE9BQU8sQ0FBQztRQUM3QixlQUFVLEdBQVcsT0FBTyxDQUFDO1FBR3JCLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFNaUIsQ0FBQztJQUp4QyxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUlELGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBTztRQUM1QixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsTUFBTTtTQUNQLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBNkI7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQzthQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLFVBQWtCLEVBQUUsVUFBa0I7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVPLDhCQUE4QixDQUFDLEtBQWlCO1FBQ3RELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sd0JBQXdCLENBQUMsSUFBUztRQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNoRSxDQUFDOztvR0EvQ1UsMEJBQTBCO2dGQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUG9NdWx0aXNlbGVjdEZpbHRlciB9IGZyb20gJy4vcG8tbXVsdGlzZWxlY3QtZmlsdGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvTXVsdGlzZWxlY3RPcHRpb24gfSBmcm9tICcuL3BvLW11bHRpc2VsZWN0LW9wdGlvbi5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9NdWx0aXNlbGVjdEZpbHRlclNlcnZpY2UgaW1wbGVtZW50cyBQb011bHRpc2VsZWN0RmlsdGVyIHtcclxuICBmaWVsZExhYmVsOiBzdHJpbmcgPSAnbGFiZWwnO1xyXG4gIGZpZWxkVmFsdWU6IHN0cmluZyA9ICd2YWx1ZSc7XHJcblxyXG4gIHByaXZhdGUgX3VybDogc3RyaW5nO1xyXG4gIHByaXZhdGUgbWVzc2FnZXMgPSBbXTtcclxuXHJcbiAgZ2V0IHVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VybDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgZ2V0RmlsdGVyZWREYXRhKHsgdmFsdWUgfTogYW55KTogT2JzZXJ2YWJsZTxBcnJheTxQb011bHRpc2VsZWN0T3B0aW9uIHwgYW55Pj4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gdmFsdWUgPyB7IGZpbHRlcjogdmFsdWUgfSA6IHt9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMudXJsLCB7XHJcbiAgICAgICAgcGFyYW1zXHJcbiAgICAgIH0pXHJcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiB0aGlzLnBhcnNlVG9BcnJheU11bHRpc2VsZWN0T3B0aW9ucyhyZXNwb25zZVsnaXRlbXMnXSkpKTtcclxuICB9XHJcblxyXG4gIGdldE9iamVjdHNCeVZhbHVlcyh2YWx1ZTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPik6IE9ic2VydmFibGU8QXJyYXk8UG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChgJHt0aGlzLnVybH0/JHt0aGlzLmZpZWxkVmFsdWV9PSR7dmFsdWUudG9TdHJpbmcoKX1gKVxyXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gdGhpcy5wYXJzZVRvQXJyYXlNdWx0aXNlbGVjdE9wdGlvbnMocmVzcG9uc2VbJ2l0ZW1zJ10pKSk7XHJcbiAgfVxyXG5cclxuICBjb25maWdQcm9wZXJ0aWVzKHVybDogc3RyaW5nLCBmaWVsZExhYmVsOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgdGhpcy5maWVsZExhYmVsID0gZmllbGRMYWJlbDtcclxuICAgIHRoaXMuZmllbGRWYWx1ZSA9IGZpZWxkVmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlVG9BcnJheU11bHRpc2VsZWN0T3B0aW9ucyhpdGVtczogQXJyYXk8YW55Pik6IEFycmF5PFBvTXVsdGlzZWxlY3RPcHRpb24gfCBhbnk+IHtcclxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiB0aGlzLnBhcnNlVG9NdWx0aXNlbGVjdE9wdGlvbihpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZVRvTXVsdGlzZWxlY3RPcHRpb24oaXRlbTogYW55KTogUG9NdWx0aXNlbGVjdE9wdGlvbiB8IGFueSB7XHJcbiAgICBjb25zdCBsYWJlbCA9IGl0ZW1bdGhpcy5maWVsZExhYmVsXTtcclxuICAgIGNvbnN0IHZhbHVlID0gaXRlbVt0aGlzLmZpZWxkVmFsdWVdO1xyXG5cclxuICAgIHJldHVybiB7IFt0aGlzLmZpZWxkTGFiZWxdOiBsYWJlbCwgW3RoaXMuZmllbGRWYWx1ZV06IHZhbHVlIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==