import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PoRichTextService {
    constructor() {
        this.model = new Subject();
    }
    emitModel(value) {
        this.model.next(value);
    }
    getModel() {
        return this.model.asObservable();
    }
}
PoRichTextService.ɵfac = function PoRichTextService_Factory(t) { return new (t || PoRichTextService)(); };
PoRichTextService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoRichTextService, factory: PoRichTextService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoRichTextService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcmljaC10ZXh0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZmllbGQvcG8tcmljaC10ZXh0L3BvLXJpY2gtdGV4dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHL0IsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVVLFVBQUssR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0tBU3ZDO0lBUEMsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7a0ZBVFUsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvUmljaFRleHRTZXJ2aWNlIHtcclxuICBwcml2YXRlIG1vZGVsID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBlbWl0TW9kZWwodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5tb2RlbC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldE1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==