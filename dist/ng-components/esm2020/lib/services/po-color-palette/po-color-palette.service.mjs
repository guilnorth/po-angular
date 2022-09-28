import { Injectable } from '@angular/core';
import { PoColorPaletteEnum } from '../../enums/po-color-palette.enum';
import * as i0 from "@angular/core";
export class PoColorPaletteService {
    getColor(value) {
        return Object.values(PoColorPaletteEnum).includes(value.color)
            ? value.color
            : this.getColorFromType(value.type || value.color);
    }
    getColorFromType(type) {
        switch (type) {
            case 'danger':
                return PoColorPaletteEnum.Color07;
            case 'success':
                return PoColorPaletteEnum.Color11;
            case 'warning':
                return PoColorPaletteEnum.Color08;
            default:
                return PoColorPaletteEnum.Color01;
        }
    }
}
PoColorPaletteService.ɵfac = function PoColorPaletteService_Factory(t) { return new (t || PoColorPaletteService)(); };
PoColorPaletteService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoColorPaletteService, factory: PoColorPaletteService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoColorPaletteService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29sb3ItcGFsZXR0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9zZXJ2aWNlcy9wby1jb2xvci1wYWxldHRlL3BvLWNvbG9yLXBhbGV0dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUd2RSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFFBQVEsQ0FBQyxLQUF3QztRQUMvQyxPQUFhLE1BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNuRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ25DLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxRQUFRO2dCQUNYLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQ3BDLEtBQUssU0FBUztnQkFDWixPQUFPLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUNwQyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDcEM7Z0JBQ0UsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7U0FDckM7SUFDSCxDQUFDOzswRkFsQlUscUJBQXFCOzJFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ29sb3JQYWxldHRlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL3BvLWNvbG9yLXBhbGV0dGUuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb0NvbG9yUGFsZXR0ZVNlcnZpY2Uge1xyXG4gIGdldENvbG9yKHZhbHVlOiB7IGNvbG9yPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nIH0pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICg8YW55Pk9iamVjdCkudmFsdWVzKFBvQ29sb3JQYWxldHRlRW51bSkuaW5jbHVkZXModmFsdWUuY29sb3IpXHJcbiAgICAgID8gdmFsdWUuY29sb3JcclxuICAgICAgOiB0aGlzLmdldENvbG9yRnJvbVR5cGUodmFsdWUudHlwZSB8fCB2YWx1ZS5jb2xvcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbG9yRnJvbVR5cGUodHlwZTogc3RyaW5nKTogUG9Db2xvclBhbGV0dGVFbnVtIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdkYW5nZXInOlxyXG4gICAgICAgIHJldHVybiBQb0NvbG9yUGFsZXR0ZUVudW0uQ29sb3IwNztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuIFBvQ29sb3JQYWxldHRlRW51bS5Db2xvcjExO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gUG9Db2xvclBhbGV0dGVFbnVtLkNvbG9yMDg7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFBvQ29sb3JQYWxldHRlRW51bS5Db2xvcjAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=