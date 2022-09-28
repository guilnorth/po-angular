import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PoDynamicFormOperation } from '../po-dynamic-form-operation/po-dynamic-form-operation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoDynamicFormLoadService extends PoDynamicFormOperation {
    constructor(http) {
        super(http);
    }
    createAndUpdateFieldsForm(loadedFields = [], fields = []) {
        return [...loadedFields].reduce((updatedFields, field) => {
            const index = updatedFields.findIndex(updatedField => updatedField.property === field.property);
            const hasProperty = index >= 0;
            if (hasProperty) {
                updatedFields[index] = { ...fields[index], ...field };
            }
            else {
                updatedFields.push(field);
            }
            return updatedFields;
        }, [...fields]);
    }
    executeLoad(load, value) {
        return this.execute(load, value).pipe(map(loadedFormdData => this.setFormDefaultIfEmpty(loadedFormdData)));
    }
}
PoDynamicFormLoadService.ɵfac = function PoDynamicFormLoadService_Factory(t) { return new (t || PoDynamicFormLoadService)(i0.ɵɵinject(i1.HttpClient)); };
PoDynamicFormLoadService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoDynamicFormLoadService, factory: PoDynamicFormLoadService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDynamicFormLoadService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHluYW1pYy1mb3JtLWxvYWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1keW5hbWljL3BvLWR5bmFtaWMtZm9ybS9wby1keW5hbWljLWZvcm0tbG9hZC9wby1keW5hbWljLWZvcm0tbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOzs7QUFHaEcsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUFzQjtJQUNsRSxZQUFZLElBQWdCO1FBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxlQUEwQyxFQUFFLEVBQUUsU0FBb0MsRUFBRTtRQUM1RyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQzdCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRyxNQUFNLFdBQVcsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBRS9CLElBQUksV0FBVyxFQUFFO2dCQUNmLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtZQUVELE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQ1osQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBdUIsRUFBRSxLQUFVO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7Z0dBekJVLHdCQUF3Qjs4RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb0R5bmFtaWNGb3JtRmllbGQgfSBmcm9tICcuLi9wby1keW5hbWljLWZvcm0tZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9EeW5hbWljRm9ybU9wZXJhdGlvbiB9IGZyb20gJy4uL3BvLWR5bmFtaWMtZm9ybS1vcGVyYXRpb24vcG8tZHluYW1pYy1mb3JtLW9wZXJhdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0R5bmFtaWNGb3JtTG9hZFNlcnZpY2UgZXh0ZW5kcyBQb0R5bmFtaWNGb3JtT3BlcmF0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBzdXBlcihodHRwKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuZFVwZGF0ZUZpZWxkc0Zvcm0obG9hZGVkRmllbGRzOiBBcnJheTxQb0R5bmFtaWNGb3JtRmllbGQ+ID0gW10sIGZpZWxkczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPiA9IFtdKSB7XHJcbiAgICByZXR1cm4gWy4uLmxvYWRlZEZpZWxkc10ucmVkdWNlKFxyXG4gICAgICAodXBkYXRlZEZpZWxkcywgZmllbGQpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHVwZGF0ZWRGaWVsZHMuZmluZEluZGV4KHVwZGF0ZWRGaWVsZCA9PiB1cGRhdGVkRmllbGQucHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5KTtcclxuICAgICAgICBjb25zdCBoYXNQcm9wZXJ0eSA9IGluZGV4ID49IDA7XHJcblxyXG4gICAgICAgIGlmIChoYXNQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgdXBkYXRlZEZpZWxkc1tpbmRleF0gPSB7IC4uLmZpZWxkc1tpbmRleF0sIC4uLmZpZWxkIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVwZGF0ZWRGaWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXBkYXRlZEZpZWxkcztcclxuICAgICAgfSxcclxuICAgICAgWy4uLmZpZWxkc11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlTG9hZChsb2FkOiBGdW5jdGlvbiB8IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZShsb2FkLCB2YWx1ZSkucGlwZShtYXAobG9hZGVkRm9ybWREYXRhID0+IHRoaXMuc2V0Rm9ybURlZmF1bHRJZkVtcHR5KGxvYWRlZEZvcm1kRGF0YSkpKTtcclxuICB9XHJcbn1cclxuIl19