import { Injectable } from '@angular/core';
import { PoColorPaletteEnum } from '../../enums/po-color-palette.enum';
import { PoDefaultColors } from './po-colors.constant';
import * as i0 from "@angular/core";
const poColorPalette = Object.values(PoColorPaletteEnum);
export class PoColorService {
    constructor() {
        this.defaultColors = [];
        this.colorBlack = '#000000';
    }
    /**
     * Avalia a propriedade `color` na lista de items passada. Caso sim, trata se é decimal ou string `po-color`. Caso não haja, retorna a cor default.
     *
     * @param data
     */
    getColors(data) {
        this.verifyIfHasColorProperty(data);
        return data.map((dataItem, index) => {
            if (dataItem.color) {
                dataItem.color = this.verifyIfIsPoColorPalette(dataItem.color);
                return dataItem;
            }
            const color = this.defaultColors[index] === undefined ? this.colorBlack : this.defaultColors[index];
            return { ...dataItem, color };
        });
    }
    verifyIfHasColorProperty(data) {
        const hasColorProperty = data.every(dataItem => dataItem.hasOwnProperty('color') && dataItem.color?.length > 0);
        if (!hasColorProperty) {
            this.defaultColors = this.getDefaultColors(data.length);
        }
    }
    verifyIfIsPoColorPalette(color) {
        if (poColorPalette.includes(color)) {
            return `po-${color}`;
        }
        return color;
    }
    getDefaultColors(length) {
        if (length === 1) {
            return PoDefaultColors[0];
        }
        const colorsLength = PoDefaultColors.length;
        if (length > colorsLength) {
            const quantityDuplicates = length / colorsLength;
            let colors = PoDefaultColors[colorsLength - 1];
            for (let i = 0; i <= quantityDuplicates; i++) {
                colors = colors.concat(PoDefaultColors[colorsLength]);
            }
            return colors;
        }
        return PoDefaultColors[length - 1];
    }
}
PoColorService.ɵfac = function PoColorService_Factory(t) { return new (t || PoColorService)(); };
PoColorService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoColorService, factory: PoColorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoColorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvc2VydmljZXMvcG8tY29sb3IvcG8tY29sb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFdkQsTUFBTSxjQUFjLEdBQVMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBU2hFLE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBSUUsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxTQUFTLENBQUM7S0F3RHpDO0lBdERDOzs7O09BSUc7SUFDSCxTQUFTLENBQXdCLElBQWM7UUFDN0MsSUFBSSxDQUFDLHdCQUF3QixDQUFJLElBQUksQ0FBQyxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFL0QsT0FBTyxRQUFRLENBQUM7YUFDakI7WUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRyxPQUFPLEVBQUUsR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sd0JBQXdCLENBQXdCLElBQWM7UUFDcEUsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVPLHdCQUF3QixDQUFDLEtBQWE7UUFDNUMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE1BQWM7UUFDckMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUU1QyxJQUFJLE1BQU0sR0FBRyxZQUFZLEVBQUU7WUFDekIsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQ2pELElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUN2RDtZQUVELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7NEVBekRVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt1RkFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvQ29sb3JQYWxldHRlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL3BvLWNvbG9yLXBhbGV0dGUuZW51bSc7XHJcbmltcG9ydCB7IFBvRGVmYXVsdENvbG9ycyB9IGZyb20gJy4vcG8tY29sb3JzLmNvbnN0YW50JztcclxuXHJcbmNvbnN0IHBvQ29sb3JQYWxldHRlID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMoUG9Db2xvclBhbGV0dGVFbnVtKTtcclxuXHJcbmludGVyZmFjZSBQb0NvbG9yQXJncyB7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvQ29sb3JTZXJ2aWNlIHtcclxuICBkZWZhdWx0Q29sb3JzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvckJsYWNrID0gJyMwMDAwMDAnO1xyXG5cclxuICAvKipcclxuICAgKiBBdmFsaWEgYSBwcm9wcmllZGFkZSBgY29sb3JgIG5hIGxpc3RhIGRlIGl0ZW1zIHBhc3NhZGEuIENhc28gc2ltLCB0cmF0YSBzZSDDqSBkZWNpbWFsIG91IHN0cmluZyBgcG8tY29sb3JgLiBDYXNvIG7Do28gaGFqYSwgcmV0b3JuYSBhIGNvciBkZWZhdWx0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBnZXRDb2xvcnM8VCBleHRlbmRzIFBvQ29sb3JBcmdzPihkYXRhOiBBcnJheTxUPik6IEFycmF5PFQ+IHtcclxuICAgIHRoaXMudmVyaWZ5SWZIYXNDb2xvclByb3BlcnR5PFQ+KGRhdGEpO1xyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoZGF0YUl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhSXRlbS5jb2xvcikge1xyXG4gICAgICAgIGRhdGFJdGVtLmNvbG9yID0gdGhpcy52ZXJpZnlJZklzUG9Db2xvclBhbGV0dGUoZGF0YUl0ZW0uY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YUl0ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3JzW2luZGV4XSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jb2xvckJsYWNrIDogdGhpcy5kZWZhdWx0Q29sb3JzW2luZGV4XTtcclxuICAgICAgcmV0dXJuIHsgLi4uZGF0YUl0ZW0sIGNvbG9yIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5SWZIYXNDb2xvclByb3BlcnR5PFQgZXh0ZW5kcyBQb0NvbG9yQXJncz4oZGF0YTogQXJyYXk8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGhhc0NvbG9yUHJvcGVydHkgPSBkYXRhLmV2ZXJ5KGRhdGFJdGVtID0+IGRhdGFJdGVtLmhhc093blByb3BlcnR5KCdjb2xvcicpICYmIGRhdGFJdGVtLmNvbG9yPy5sZW5ndGggPiAwKTtcclxuICAgIGlmICghaGFzQ29sb3JQcm9wZXJ0eSkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRDb2xvcnMgPSB0aGlzLmdldERlZmF1bHRDb2xvcnMoZGF0YS5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJpZnlJZklzUG9Db2xvclBhbGV0dGUoY29sb3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAocG9Db2xvclBhbGV0dGUuaW5jbHVkZXMoY29sb3IpKSB7XHJcbiAgICAgIHJldHVybiBgcG8tJHtjb2xvcn1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREZWZhdWx0Q29sb3JzKGxlbmd0aDogbnVtYmVyKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBQb0RlZmF1bHRDb2xvcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29sb3JzTGVuZ3RoID0gUG9EZWZhdWx0Q29sb3JzLmxlbmd0aDtcclxuXHJcbiAgICBpZiAobGVuZ3RoID4gY29sb3JzTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHF1YW50aXR5RHVwbGljYXRlcyA9IGxlbmd0aCAvIGNvbG9yc0xlbmd0aDtcclxuICAgICAgbGV0IGNvbG9ycyA9IFBvRGVmYXVsdENvbG9yc1tjb2xvcnNMZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHF1YW50aXR5RHVwbGljYXRlczsgaSsrKSB7XHJcbiAgICAgICAgY29sb3JzID0gY29sb3JzLmNvbmNhdChQb0RlZmF1bHRDb2xvcnNbY29sb3JzTGVuZ3RoXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFBvRGVmYXVsdENvbG9yc1tsZW5ndGggLSAxXTtcclxuICB9XHJcbn1cclxuIl19