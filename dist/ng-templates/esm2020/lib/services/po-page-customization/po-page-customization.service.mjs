import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageCustomizationService {
    constructor(http) {
        this.http = http;
    }
    getCustomOptions(origin, originalOption, optionSchema) {
        return this.createObservable(origin).pipe(map(newPageOptions => this.mergePageOptions(originalOption, newPageOptions, optionSchema)));
    }
    changeOriginalOptionsToNewOptions(objectToChange, newOptions) {
        Object.keys(newOptions).forEach(key => {
            const value = newOptions[key];
            if (key in objectToChange) {
                if (Array.isArray(value)) {
                    objectToChange[key] = [...value];
                    return;
                }
                if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
                    objectToChange[key] = value;
                    return;
                }
                if (value !== null && typeof value === 'object') {
                    objectToChange[key] = { ...value };
                }
            }
        });
    }
    createObservable(origin) {
        if (typeof origin === 'string') {
            return this.http.post(origin, {});
        }
        return from(Promise.resolve(origin()));
    }
    mergePageOptions(originalOption, newPageOptions, optionSchema) {
        const mergePageOptions = optionSchema.schema.reduce((objWithNewProp, prop) => ({
            ...objWithNewProp,
            [prop.nameProp]: this.createNewProp(prop, originalOption, newPageOptions)
        }), {});
        Object.keys(mergePageOptions).forEach(key => mergePageOptions[key] === undefined && delete mergePageOptions[key]);
        return mergePageOptions;
    }
    createNewProp(prop, originalOption, newPageOptions) {
        if (prop.merge) {
            return this.mergeOptions(originalOption[prop.nameProp], newPageOptions[prop.nameProp], prop.keyForMerge);
        }
        else {
            return newPageOptions[prop.nameProp] ?? originalOption[prop.nameProp];
        }
    }
    mergeOptions(originalOptions, newOptions, filterProp) {
        if (!originalOptions && !newOptions) {
            return;
        }
        if (!newOptions) {
            return originalOptions;
        }
        if (!originalOptions) {
            return newOptions;
        }
        if (originalOptions instanceof Array && newOptions instanceof Array) {
            return this.mergeOptionsArray(originalOptions, newOptions, filterProp);
        }
        return { ...originalOptions, ...newOptions };
    }
    mergeOptionsArray(originalOptions, newOptions, filterProp) {
        const deduplicateNewOptions = newOptions.filter(newItem => !originalOptions.find(originalItem => originalItem[filterProp] === newItem[filterProp]));
        const mergedOriginalOptions = originalOptions.map(originalItem => {
            const newItem = newOptions.find(newOptionsItem => originalItem[filterProp] === newOptionsItem[filterProp]) || originalItem;
            return { ...originalItem, ...newItem };
        });
        return [...mergedOriginalOptions, ...deduplicateNewOptions];
    }
}
PoPageCustomizationService.ɵfac = function PoPageCustomizationService_Factory(t) { return new (t || PoPageCustomizationService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageCustomizationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageCustomizationService, factory: PoPageCustomizationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageCustomizationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1jdXN0b21pemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9zZXJ2aWNlcy9wby1wYWdlLWN1c3RvbWl6YXRpb24vcG8tcGFnZS1jdXN0b21pemF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBU3JDLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsZ0JBQWdCLENBQ2QsTUFBcUIsRUFDckIsY0FBaUIsRUFDakIsWUFBMkM7UUFFM0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUksY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUM5RixDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFpQyxDQUFPLGNBQWlCLEVBQUUsVUFBYTtRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFO2dCQUN6QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcs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LGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ25HLENBQUM7UUFDRixNQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDL0QsTUFBTSxPQUFPLEdBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUM7WUFDN0csT0FBTyxFQUFFLEdBQUcsWUFBWSxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxxQkFBcUIsRUFBRSxHQUFHLHFCQUFxQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7b0dBekZVLDBCQUEwQjtnRkFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQixtQkFGekIsTUFBTTt1RkFFUCwwQkFBMEI7Y0FIdEMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VEeW5hbWljT3B0aW9uc1NjaGVtYSwgUG9QYWdlRHluYW1pY09wdGlvbnNQcm9wIH0gZnJvbSAnLi9wby1wYWdlLWR5bmFtaWMtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5cclxudHlwZSB1cmxPckZ1bmN0aW9uID0gc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VDdXN0b21pemF0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBnZXRDdXN0b21PcHRpb25zPFQ+KFxyXG4gICAgb3JpZ2luOiB1cmxPckZ1bmN0aW9uLFxyXG4gICAgb3JpZ2luYWxPcHRpb246IFQsXHJcbiAgICBvcHRpb25TY2hlbWE6IFBvUGFnZUR5bmFtaWNPcHRpb25zU2NoZW1hPFQ+XHJcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVPYnNlcnZhYmxlPFQ+KG9yaWdpbikucGlwZShcclxuICAgICAgbWFwKG5ld1BhZ2VPcHRpb25zID0+IHRoaXMubWVyZ2VQYWdlT3B0aW9uczxUPihvcmlnaW5hbE9wdGlvbiwgbmV3UGFnZU9wdGlvbnMsIG9wdGlvblNjaGVtYSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlT3JpZ2luYWxPcHRpb25zVG9OZXdPcHRpb25zPFQsIEs+KG9iamVjdFRvQ2hhbmdlOiBULCBuZXdPcHRpb25zOiBLKSB7XHJcbiAgICBPYmplY3Qua2V5cyhuZXdPcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbmV3T3B0aW9uc1trZXldO1xyXG4gICAgICBpZiAoa2V5IGluIG9iamVjdFRvQ2hhbmdlKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICBvYmplY3RUb0NoYW5nZVtrZXldID0gWy4uLnZhbHVlXTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgb2JqZWN0VG9DaGFuZ2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgb2JqZWN0VG9DaGFuZ2Vba2V5XSA9IHsgLi4udmFsdWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVPYnNlcnZhYmxlPFQ+KG9yaWdpbjogdXJsT3JGdW5jdGlvbik6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihvcmlnaW4sIHt9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmcm9tKFByb21pc2UucmVzb2x2ZShvcmlnaW4oKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZXJnZVBhZ2VPcHRpb25zPFQ+KG9yaWdpbmFsT3B0aW9uOiBULCBuZXdQYWdlT3B0aW9uczogVCwgb3B0aW9uU2NoZW1hOiBQb1BhZ2VEeW5hbWljT3B0aW9uc1NjaGVtYTxUPikge1xyXG4gICAgY29uc3QgbWVyZ2VQYWdlT3B0aW9uczogVCA9IG9wdGlvblNjaGVtYS5zY2hlbWEucmVkdWNlKFxyXG4gICAgICAob2JqV2l0aE5ld1Byb3AsIHByb3ApID0+ICh7XHJcbiAgICAgICAgLi4ub2JqV2l0aE5ld1Byb3AsXHJcbiAgICAgICAgW3Byb3AubmFtZVByb3BdOiB0aGlzLmNyZWF0ZU5ld1Byb3AocHJvcCwgb3JpZ2luYWxPcHRpb24sIG5ld1BhZ2VPcHRpb25zKVxyXG4gICAgICB9KSxcclxuICAgICAge30gYXMgVFxyXG4gICAgKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhtZXJnZVBhZ2VPcHRpb25zKS5mb3JFYWNoKGtleSA9PiBtZXJnZVBhZ2VPcHRpb25zW2tleV0gPT09IHVuZGVmaW5lZCAmJiBkZWxldGUgbWVyZ2VQYWdlT3B0aW9uc1trZXldKTtcclxuXHJcbiAgICByZXR1cm4gbWVyZ2VQYWdlT3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTmV3UHJvcDxUPihwcm9wOiBQb1BhZ2VEeW5hbWljT3B0aW9uc1Byb3A8VD4sIG9yaWdpbmFsT3B0aW9uOiBULCBuZXdQYWdlT3B0aW9uczogVCkge1xyXG4gICAgaWYgKHByb3AubWVyZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWVyZ2VPcHRpb25zKG9yaWdpbmFsT3B0aW9uW3Byb3AubmFtZVByb3BdLCBuZXdQYWdlT3B0aW9uc1twcm9wLm5hbWVQcm9wXSwgcHJvcC5rZXlGb3JNZXJnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3UGFnZU9wdGlvbnNbcHJvcC5uYW1lUHJvcF0gPz8gb3JpZ2luYWxPcHRpb25bcHJvcC5uYW1lUHJvcF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1lcmdlT3B0aW9uczxUPihvcmlnaW5hbE9wdGlvbnM6IEFycmF5PFQ+IHwgVCwgbmV3T3B0aW9uczogQXJyYXk8VD4gfCBULCBmaWx0ZXJQcm9wPzoga2V5b2YgVCkge1xyXG4gICAgaWYgKCFvcmlnaW5hbE9wdGlvbnMgJiYgIW5ld09wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFuZXdPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiBvcmlnaW5hbE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAoIW9yaWdpbmFsT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gbmV3T3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3JpZ2luYWxPcHRpb25zIGluc3RhbmNlb2YgQXJyYXkgJiYgbmV3T3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lcmdlT3B0aW9uc0FycmF5KG9yaWdpbmFsT3B0aW9ucywgbmV3T3B0aW9ucywgZmlsdGVyUHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luYWxPcHRpb25zLCAuLi5uZXdPcHRpb25zIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1lcmdlT3B0aW9uc0FycmF5PFQ+KG9yaWdpbmFsT3B0aW9uczogQXJyYXk8VD4sIG5ld09wdGlvbnM6IEFycmF5PFQ+LCBmaWx0ZXJQcm9wOiBrZXlvZiBUKSB7XHJcbiAgICBjb25zdCBkZWR1cGxpY2F0ZU5ld09wdGlvbnMgPSBuZXdPcHRpb25zLmZpbHRlcihcclxuICAgICAgbmV3SXRlbSA9PiAhb3JpZ2luYWxPcHRpb25zLmZpbmQob3JpZ2luYWxJdGVtID0+IG9yaWdpbmFsSXRlbVtmaWx0ZXJQcm9wXSA9PT0gbmV3SXRlbVtmaWx0ZXJQcm9wXSlcclxuICAgICk7XHJcbiAgICBjb25zdCBtZXJnZWRPcmlnaW5hbE9wdGlvbnMgPSBvcmlnaW5hbE9wdGlvbnMubWFwKG9yaWdpbmFsSXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPVxyXG4gICAgICAgIG5ld09wdGlvbnMuZmluZChuZXdPcHRpb25zSXRlbSA9PiBvcmlnaW5hbEl0ZW1bZmlsdGVyUHJvcF0gPT09IG5ld09wdGlvbnNJdGVtW2ZpbHRlclByb3BdKSB8fCBvcmlnaW5hbEl0ZW07XHJcbiAgICAgIHJldHVybiB7IC4uLm9yaWdpbmFsSXRlbSwgLi4ubmV3SXRlbSB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gWy4uLm1lcmdlZE9yaWdpbmFsT3B0aW9ucywgLi4uZGVkdXBsaWNhdGVOZXdPcHRpb25zXTtcclxuICB9XHJcbn1cclxuIl19