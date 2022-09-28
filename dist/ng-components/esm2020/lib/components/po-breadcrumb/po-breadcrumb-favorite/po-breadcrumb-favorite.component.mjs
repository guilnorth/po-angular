import { Component, Input } from '@angular/core';
import { PoBreadcrumbFavoriteService } from './po-breadcrumb-favorite.service';
import * as i0 from "@angular/core";
import * as i1 from "./po-breadcrumb-favorite.service";
import * as i2 from "../../../services/po-language/po-language.service";
import * as i3 from "@angular/common";
function PoBreadcrumbFavoriteComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.literals == null ? null : ctx_r0.literals.unfavorite);
} }
function PoBreadcrumbFavoriteComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.literals == null ? null : ctx_r1.literals.favorite);
} }
export const PoBreadcrumbLiterals = {
    en: {
        favorite: 'Favorite',
        unfavorite: 'Unfavorite'
    },
    es: {
        favorite: 'Favor',
        unfavorite: 'Desfavorecer'
    },
    pt: {
        favorite: 'Favoritar',
        unfavorite: 'Desfavoritar'
    },
    ru: {
        favorite: 'Любимый',
        unfavorite: 'Немилость'
    }
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que renderiza o serviço de favoritar do po-breadcrumb.
 */
export class PoBreadcrumbFavoriteComponent {
    constructor(service, languageService) {
        this.service = service;
        this.languageService = languageService;
        this.favorite = false;
        const language = languageService.getShortLanguage();
        this.literals = {
            ...PoBreadcrumbLiterals[language]
        };
    }
    ngOnInit() {
        this.service.configService(this.favoriteService, this.paramsService, this.itemActive);
        this.getStatusFavorite();
    }
    ngOnDestroy() {
        if (this.getSubscription) {
            this.getSubscription.unsubscribe();
        }
        if (this.setSubscription) {
            this.setSubscription.unsubscribe();
        }
    }
    toggleFavoriteAction() {
        this.favorite ? this.setStatusFavorite(false) : this.setStatusFavorite(true);
    }
    getStatusFavorite() {
        this.getSubscription = this.service.getFavorite().subscribe(result => (this.favorite = result.isFavorite));
    }
    setStatusFavorite(status) {
        this.setSubscription = this.service
            .sendStatusFavorite(status)
            .subscribe(result => (this.favorite = result.isFavorite));
    }
}
PoBreadcrumbFavoriteComponent.ɵfac = function PoBreadcrumbFavoriteComponent_Factory(t) { return new (t || PoBreadcrumbFavoriteComponent)(i0.ɵɵdirectiveInject(i1.PoBreadcrumbFavoriteService), i0.ɵɵdirectiveInject(i2.PoLanguageService)); };
PoBreadcrumbFavoriteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoBreadcrumbFavoriteComponent, selectors: [["po-breadcrumb-favorite"]], inputs: { favoriteService: ["p-favorite-service", "favoriteService"], itemActive: ["p-item-active", "itemActive"], paramsService: ["p-params-service", "paramsService"] }, features: [i0.ɵɵProvidersFeature([PoBreadcrumbFavoriteService])], decls: 4, vars: 4, consts: [[1, "po-breadcrumb-favorite", "po-clickable", 3, "click"], [1, "po-icon", "po-icon-star", "po-breadcrumb-favorite-star", "po-clickable"], ["class", "po-hidden-sm po-breadcrumb-favorite-label", 4, "ngIf"], [1, "po-hidden-sm", "po-breadcrumb-favorite-label"]], template: function PoBreadcrumbFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PoBreadcrumbFavoriteComponent_Template_div_click_0_listener() { return ctx.toggleFavoriteAction(); });
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵtemplate(2, PoBreadcrumbFavoriteComponent_span_2_Template, 2, 1, "span", 2);
        i0.ɵɵtemplate(3, PoBreadcrumbFavoriteComponent_span_3_Template, 2, 1, "span", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("po-breadcrumb-favorite-star-active", ctx.favorite);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.favorite);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.favorite);
    } }, dependencies: [i3.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoBreadcrumbFavoriteComponent, [{
        type: Component,
        args: [{ selector: 'po-breadcrumb-favorite', providers: [PoBreadcrumbFavoriteService], template: "<div class=\"po-breadcrumb-favorite po-clickable\" (click)=\"toggleFavoriteAction()\">\r\n  <span\r\n    class=\"po-icon po-icon-star po-breadcrumb-favorite-star po-clickable\"\r\n    [class.po-breadcrumb-favorite-star-active]=\"favorite\"\r\n  >\r\n  </span>\r\n\r\n  <span class=\"po-hidden-sm po-breadcrumb-favorite-label\" *ngIf=\"favorite\">{{ literals?.unfavorite }}</span>\r\n  <span class=\"po-hidden-sm po-breadcrumb-favorite-label\" *ngIf=\"!favorite\">{{ literals?.favorite }}</span>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PoBreadcrumbFavoriteService }, { type: i2.PoLanguageService }]; }, { favoriteService: [{
            type: Input,
            args: ['p-favorite-service']
        }], itemActive: [{
            type: Input,
            args: ['p-item-active']
        }], paramsService: [{
            type: Input,
            args: ['p-params-service']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYnJlYWRjcnVtYi1mYXZvcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tYnJlYWRjcnVtYi9wby1icmVhZGNydW1iLWZhdm9yaXRlL3BvLWJyZWFkY3J1bWItZmF2b3JpdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWJyZWFkY3J1bWIvcG8tYnJlYWRjcnVtYi1mYXZvcml0ZS9wby1icmVhZGNydW1iLWZhdm9yaXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUtwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0lDRTdFLCtCQUF5RTtJQUFBLFlBQTBCO0lBQUEsaUJBQU87OztJQUFqQyxlQUEwQjtJQUExQixpRkFBMEI7OztJQUNuRywrQkFBMEU7SUFBQSxZQUF3QjtJQUFBLGlCQUFPOzs7SUFBL0IsZUFBd0I7SUFBeEIsK0VBQXdCOztBREFwRyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBVztJQUMxQyxFQUFFLEVBQU87UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixVQUFVLEVBQUUsWUFBWTtLQUN6QjtJQUNELEVBQUUsRUFBTztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFVBQVUsRUFBRSxjQUFjO0tBQzNCO0lBQ0QsRUFBRSxFQUFPO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsVUFBVSxFQUFFLGNBQWM7S0FDM0I7SUFDRCxFQUFFLEVBQU87UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixVQUFVLEVBQUUsV0FBVztLQUN4QjtDQUNGLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFPSCxNQUFNLE9BQU8sNkJBQTZCO0lBZ0J4QyxZQUFvQixPQUFvQyxFQUFVLGVBQWtDO1FBQWhGLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBTnBHLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPeEIsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQztRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQU07UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNoQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7OzBHQW5EVSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qix1UEFGN0IsQ0FBQywyQkFBMkIsQ0FBQztRQ3RDMUMsOEJBQWtGO1FBQWpDLHVHQUFTLDBCQUFzQixJQUFDO1FBQy9FLDBCQUlPO1FBRVAsZ0ZBQTBHO1FBQzFHLGdGQUF5RztRQUMzRyxpQkFBTTs7UUFORixlQUFxRDtRQUFyRCxrRUFBcUQ7UUFJRSxlQUFjO1FBQWQsbUNBQWM7UUFDZCxlQUFlO1FBQWYsb0NBQWU7O3VGRGdDN0QsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0Usd0JBQXdCLGFBRXZCLENBQUMsMkJBQTJCLENBQUM7OEdBSVgsZUFBZTtrQkFBM0MsS0FBSzttQkFBQyxvQkFBb0I7WUFHSCxVQUFVO2tCQUFqQyxLQUFLO21CQUFDLGVBQWU7WUFHSyxhQUFhO2tCQUF2QyxLQUFLO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBvQnJlYWRjcnVtYkl0ZW0gfSBmcm9tICcuLy4uL3BvLWJyZWFkY3J1bWItaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0JyZWFkY3J1bWJGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuL3BvLWJyZWFkY3J1bWItZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcG8tbGFuZ3VhZ2UvcG8tbGFuZ3VhZ2Uuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUG9CcmVhZGNydW1iTGl0ZXJhbHM6IE9iamVjdCA9IHtcclxuICBlbjogPGFueT57XHJcbiAgICBmYXZvcml0ZTogJ0Zhdm9yaXRlJyxcclxuICAgIHVuZmF2b3JpdGU6ICdVbmZhdm9yaXRlJ1xyXG4gIH0sXHJcbiAgZXM6IDxhbnk+e1xyXG4gICAgZmF2b3JpdGU6ICdGYXZvcicsXHJcbiAgICB1bmZhdm9yaXRlOiAnRGVzZmF2b3JlY2VyJ1xyXG4gIH0sXHJcbiAgcHQ6IDxhbnk+e1xyXG4gICAgZmF2b3JpdGU6ICdGYXZvcml0YXInLFxyXG4gICAgdW5mYXZvcml0ZTogJ0Rlc2Zhdm9yaXRhcidcclxuICB9LFxyXG4gIHJ1OiA8YW55PntcclxuICAgIGZhdm9yaXRlOiAn0JvRjtCx0LjQvNGL0LknLFxyXG4gICAgdW5mYXZvcml0ZTogJ9Cd0LXQvNC40LvQvtGB0YLRjCdcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBDb21wb25lbnRlIHF1ZSByZW5kZXJpemEgbyBzZXJ2acOnbyBkZSBmYXZvcml0YXIgZG8gcG8tYnJlYWRjcnVtYi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLWJyZWFkY3J1bWItZmF2b3JpdGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1icmVhZGNydW1iLWZhdm9yaXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQb0JyZWFkY3J1bWJGYXZvcml0ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0JyZWFkY3J1bWJGYXZvcml0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvLyBVUkwgZG8gc2VydmnDp28uXHJcbiAgQElucHV0KCdwLWZhdm9yaXRlLXNlcnZpY2UnKSBmYXZvcml0ZVNlcnZpY2U6IHN0cmluZztcclxuXHJcbiAgLy8gSXRlbSBkbyBicmVhZGNydW1iIGF0aXZvLlxyXG4gIEBJbnB1dCgncC1pdGVtLWFjdGl2ZScpIGl0ZW1BY3RpdmU6IFBvQnJlYWRjcnVtYkl0ZW07XHJcblxyXG4gIC8vIFBhcsOibWV0cm8gcXVlIHNlcsOhIGVudmlhZG8ganVudG8gY29tIG8gc2VydmnDp28gZGUgZmF2b3JpdGFyLlxyXG4gIEBJbnB1dCgncC1wYXJhbXMtc2VydmljZScpIHBhcmFtc1NlcnZpY2U6IG9iamVjdDtcclxuXHJcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsaXRlcmFscztcclxuXHJcbiAgcHJpdmF0ZSBnZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIHNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFBvQnJlYWRjcnVtYkZhdm9yaXRlU2VydmljZSwgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IFBvTGFuZ3VhZ2VTZXJ2aWNlKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlU2VydmljZS5nZXRTaG9ydExhbmd1YWdlKCk7XHJcblxyXG4gICAgdGhpcy5saXRlcmFscyA9IHtcclxuICAgICAgLi4uUG9CcmVhZGNydW1iTGl0ZXJhbHNbbGFuZ3VhZ2VdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuY29uZmlnU2VydmljZSh0aGlzLmZhdm9yaXRlU2VydmljZSwgdGhpcy5wYXJhbXNTZXJ2aWNlLCB0aGlzLml0ZW1BY3RpdmUpO1xyXG4gICAgdGhpcy5nZXRTdGF0dXNGYXZvcml0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5nZXRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5nZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZXRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5zZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUZhdm9yaXRlQWN0aW9uKCkge1xyXG4gICAgdGhpcy5mYXZvcml0ZSA/IHRoaXMuc2V0U3RhdHVzRmF2b3JpdGUoZmFsc2UpIDogdGhpcy5zZXRTdGF0dXNGYXZvcml0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3RhdHVzRmF2b3JpdGUoKSB7XHJcbiAgICB0aGlzLmdldFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5nZXRGYXZvcml0ZSgpLnN1YnNjcmliZShyZXN1bHQgPT4gKHRoaXMuZmF2b3JpdGUgPSByZXN1bHQuaXNGYXZvcml0ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGF0dXNGYXZvcml0ZShzdGF0dXMpIHtcclxuICAgIHRoaXMuc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5zZW5kU3RhdHVzRmF2b3JpdGUoc3RhdHVzKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiAodGhpcy5mYXZvcml0ZSA9IHJlc3VsdC5pc0Zhdm9yaXRlKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwby1icmVhZGNydW1iLWZhdm9yaXRlIHBvLWNsaWNrYWJsZVwiIChjbGljayk9XCJ0b2dnbGVGYXZvcml0ZUFjdGlvbigpXCI+XHJcbiAgPHNwYW5cclxuICAgIGNsYXNzPVwicG8taWNvbiBwby1pY29uLXN0YXIgcG8tYnJlYWRjcnVtYi1mYXZvcml0ZS1zdGFyIHBvLWNsaWNrYWJsZVwiXHJcbiAgICBbY2xhc3MucG8tYnJlYWRjcnVtYi1mYXZvcml0ZS1zdGFyLWFjdGl2ZV09XCJmYXZvcml0ZVwiXHJcbiAgPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPHNwYW4gY2xhc3M9XCJwby1oaWRkZW4tc20gcG8tYnJlYWRjcnVtYi1mYXZvcml0ZS1sYWJlbFwiICpuZ0lmPVwiZmF2b3JpdGVcIj57eyBsaXRlcmFscz8udW5mYXZvcml0ZSB9fTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cInBvLWhpZGRlbi1zbSBwby1icmVhZGNydW1iLWZhdm9yaXRlLWxhYmVsXCIgKm5nSWY9XCIhZmF2b3JpdGVcIj57eyBsaXRlcmFscz8uZmF2b3JpdGUgfX08L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=