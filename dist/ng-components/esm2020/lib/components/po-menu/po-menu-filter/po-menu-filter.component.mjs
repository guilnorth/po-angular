import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/po-language/po-language.service";
import * as i2 from "@angular/common";
import * as i3 from "../../po-field/po-clean/po-clean.component";
import * as i4 from "../../po-loading/po-loading-icon/po-loading-icon.component";
const _c0 = ["inputFilter"];
function PoMenuFilterComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} }
function PoMenuFilterComponent_po_loading_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "po-loading-icon");
} }
export const poMenuFilterLiteralsDefault = {
    en: { search: 'Search' },
    es: { search: 'Buscar' },
    pt: { search: 'Pesquisar' },
    ru: { search: 'Поиск' }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que apresenta o campo de pesquisa no po-menu.
 */
export class PoMenuFilterComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.filter = new EventEmitter();
        this.literals = {
            ...poMenuFilterLiteralsDefault[this.languageService.getLanguageDefault()],
            ...poMenuFilterLiteralsDefault[this.languageService.getShortLanguage()]
        };
    }
    filterItems(search) {
        this.filter.emit(search);
    }
}
PoMenuFilterComponent.ɵfac = function PoMenuFilterComponent_Factory(t) { return new (t || PoMenuFilterComponent)(i0.ɵɵdirectiveInject(i1.PoLanguageService)); };
PoMenuFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoMenuFilterComponent, selectors: [["po-menu-filter"]], viewQuery: function PoMenuFilterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputFilterElement = _t.first);
    } }, inputs: { loading: ["p-loading", "loading"] }, outputs: { filter: "p-filter" }, decls: 8, vars: 4, consts: [[1, "po-menu-filter-container"], ["type", "text", 1, "po-menu-filter", 3, "placeholder", "keyup"], ["inputFilter", ""], [1, "po-menu-filter-search-icon-container"], ["class", "po-icon po-menu-filter-icon po-icon-search", 4, "ngIf"], [4, "ngIf"], [1, "po-menu-filter-close-icon-container"], [3, "p-element-ref", "p-change-event"], [1, "po-icon", "po-menu-filter-icon", "po-icon-search"]], template: function PoMenuFilterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
        i0.ɵɵlistener("keyup", function PoMenuFilterComponent_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.filterItems(_r0.value)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, PoMenuFilterComponent_span_4_Template, 1, 0, "span", 4);
        i0.ɵɵtemplate(5, PoMenuFilterComponent_po_loading_icon_5_Template, 1, 0, "po-loading-icon", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6)(7, "po-clean", 7);
        i0.ɵɵlistener("p-change-event", function PoMenuFilterComponent_Template_po_clean_p_change_event_7_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.filterItems(_r0.value)); });
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("placeholder", ctx.literals.search);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("p-element-ref", ctx.inputFilterElement);
    } }, dependencies: [i2.NgIf, i3.PoCleanComponent, i4.PoLoadingIconComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoMenuFilterComponent, [{
        type: Component,
        args: [{ selector: 'po-menu-filter', template: "<div class=\"po-menu-filter-container\">\r\n  <input\r\n    #inputFilter\r\n    type=\"text\"\r\n    class=\"po-menu-filter\"\r\n    [placeholder]=\"literals.search\"\r\n    (keyup)=\"filterItems(inputFilter.value)\"\r\n  />\r\n\r\n  <div class=\"po-menu-filter-search-icon-container\">\r\n    <span *ngIf=\"!loading\" class=\"po-icon po-menu-filter-icon po-icon-search\"></span>\r\n    <po-loading-icon *ngIf=\"loading\"></po-loading-icon>\r\n  </div>\r\n  <div class=\"po-menu-filter-close-icon-container\">\r\n    <po-clean [p-element-ref]=\"inputFilterElement\" (p-change-event)=\"filterItems(inputFilter.value)\"></po-clean>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoLanguageService }]; }, { loading: [{
            type: Input,
            args: ['p-loading']
        }], inputFilterElement: [{
            type: ViewChild,
            args: ['inputFilter', { read: ElementRef, static: true }]
        }], filter: [{
            type: Output,
            args: ['p-filter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWVudS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvcG8tbWVudS1maWx0ZXIvcG8tbWVudS1maWx0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW1lbnUvcG8tbWVudS1maWx0ZXIvcG8tbWVudS1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ1UxRiwwQkFBaUY7OztJQUNqRixrQ0FBbUQ7O0FEUHZELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFHO0lBQ3pDLEVBQUUsRUFBd0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQzlDLEVBQUUsRUFBd0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQzlDLEVBQUUsRUFBd0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO0lBQ2pELEVBQUUsRUFBd0IsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO0NBQzlDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFLSCxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW1CLGVBQWtDO1FBQWxDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQVBqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QyxhQUFRLEdBQUc7WUFDaEIsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDekUsR0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDeEUsQ0FBQztJQUVzRCxDQUFDO0lBQ3pELFdBQVcsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OzBGQWhCVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjsrQkFJRSxVQUFVOzs7Ozs7UUMxQjlDLDhCQUFzQyxrQkFBQTtRQU1sQyx1SkFBUyxlQUFBLDBCQUE4QixDQUFBLElBQUM7UUFMMUMsaUJBTUU7UUFFRiw4QkFBa0Q7UUFDaEQsd0VBQWlGO1FBQ2pGLDhGQUFtRDtRQUNyRCxpQkFBTTtRQUNOLDhCQUFpRCxrQkFBQTtRQUNBLDRLQUFrQixlQUFBLDBCQUE4QixDQUFBLElBQUM7UUFBQyxpQkFBVyxFQUFBLEVBQUE7O1FBVDVHLGVBQStCO1FBQS9CLGlEQUErQjtRQUt4QixlQUFjO1FBQWQsbUNBQWM7UUFDSCxlQUFhO1FBQWIsa0NBQWE7UUFHckIsZUFBb0M7UUFBcEMsc0RBQW9DOzt1RkRRckMscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0UsZ0JBQWdCO29FQUlOLE9BQU87a0JBQTFCLEtBQUs7bUJBQUMsV0FBVztZQUc0QyxrQkFBa0I7a0JBQS9FLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRXhDLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9MYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wby1sYW5ndWFnZS9wby1sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9NZW51RmlsdGVyTGl0ZXJhbHMgfSBmcm9tICcuL3BvLW1lbnUtZmlsdGVyLWxpdGVyYWxzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9NZW51RmlsdGVyTGl0ZXJhbHNEZWZhdWx0ID0ge1xyXG4gIGVuOiA8UG9NZW51RmlsdGVyTGl0ZXJhbHM+eyBzZWFyY2g6ICdTZWFyY2gnIH0sXHJcbiAgZXM6IDxQb01lbnVGaWx0ZXJMaXRlcmFscz57IHNlYXJjaDogJ0J1c2NhcicgfSxcclxuICBwdDogPFBvTWVudUZpbHRlckxpdGVyYWxzPnsgc2VhcmNoOiAnUGVzcXVpc2FyJyB9LFxyXG4gIHJ1OiA8UG9NZW51RmlsdGVyTGl0ZXJhbHM+eyBzZWFyY2g6ICfQn9C+0LjRgdC6JyB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSBhcHJlc2VudGEgbyBjYW1wbyBkZSBwZXNxdWlzYSBubyBwby1tZW51LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1tZW51LWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvLW1lbnUtZmlsdGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9NZW51RmlsdGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtbG9hZGluZycpIGxvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gIC8vIHV0aWxpemFkbyBwYXJhIHJlcGFzc2FyIGFvIHBvLWNsZWFuXHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRGaWx0ZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEZpbHRlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBPdXRwdXQoJ3AtZmlsdGVyJykgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgbGl0ZXJhbHMgPSB7XHJcbiAgICAuLi5wb01lbnVGaWx0ZXJMaXRlcmFsc0RlZmF1bHRbdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2VEZWZhdWx0KCldLFxyXG4gICAgLi4ucG9NZW51RmlsdGVyTGl0ZXJhbHNEZWZhdWx0W3RoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldFNob3J0TGFuZ3VhZ2UoKV1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2VTZXJ2aWNlOiBQb0xhbmd1YWdlU2VydmljZSkge31cclxuICBmaWx0ZXJJdGVtcyhzZWFyY2g6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXIuZW1pdChzZWFyY2gpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG8tbWVudS1maWx0ZXItY29udGFpbmVyXCI+XHJcbiAgPGlucHV0XHJcbiAgICAjaW5wdXRGaWx0ZXJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIGNsYXNzPVwicG8tbWVudS1maWx0ZXJcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cImxpdGVyYWxzLnNlYXJjaFwiXHJcbiAgICAoa2V5dXApPVwiZmlsdGVySXRlbXMoaW5wdXRGaWx0ZXIudmFsdWUpXCJcclxuICAvPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwicG8tbWVudS1maWx0ZXItc2VhcmNoLWljb24tY29udGFpbmVyXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFsb2FkaW5nXCIgY2xhc3M9XCJwby1pY29uIHBvLW1lbnUtZmlsdGVyLWljb24gcG8taWNvbi1zZWFyY2hcIj48L3NwYW4+XHJcbiAgICA8cG8tbG9hZGluZy1pY29uICpuZ0lmPVwibG9hZGluZ1wiPjwvcG8tbG9hZGluZy1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwby1tZW51LWZpbHRlci1jbG9zZS1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgPHBvLWNsZWFuIFtwLWVsZW1lbnQtcmVmXT1cImlucHV0RmlsdGVyRWxlbWVudFwiIChwLWNoYW5nZS1ldmVudCk9XCJmaWx0ZXJJdGVtcyhpbnB1dEZpbHRlci52YWx1ZSlcIj48L3BvLWNsZWFuPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19