import { Input, Directive } from '@angular/core';
import { convertToBoolean } from './../../utils/util';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O componente `po-dropdown` pode ser utilizado como um agrupador de ações e / ou opções.
 *
 * > Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `RouterModule`
 * no módulo principal para o correto funcionamento deste componente:
 *
 * ```
 * import { RouterModule } from '@angular/router';
 *
 * @NgModule({
 *   imports: [
 *     ...
 *     RouterModule.forRoot([]),
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent
 *   ],
 *   exports: [],
 *   providers: [],
 *   bootstrap: [
 *     AppComponent
 *   ]
 * })
 * export class AppModule { }
 * ```
 * > Para maiores dúvidas referente à configuração de rotas, acesse em nosso portal /Guias /Começando
 * [/Configurando as rotas do po-menu](/guides/getting-started).
 */
export class PoDropdownBaseComponent {
    constructor() {
        this.icon = 'po-icon-arrow-down';
        this.open = false;
        this._disabled = false;
    }
    /** Lista de ações que serão exibidas no componente. */
    set actions(value) {
        this._actions = Array.isArray(value) ? value : [];
    }
    get actions() {
        return this._actions;
    }
    /**
     * @optional
     *
     * @description
     *
     * Desabilita o campo.
     *
     * @default `false`
     */
    set disabled(value) {
        this._disabled = convertToBoolean(value);
    }
    get disabled() {
        return this._disabled;
    }
}
PoDropdownBaseComponent.ɵfac = function PoDropdownBaseComponent_Factory(t) { return new (t || PoDropdownBaseComponent)(); };
PoDropdownBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoDropdownBaseComponent, inputs: { label: ["p-label", "label"], actions: ["p-actions", "actions"], disabled: ["p-disabled", "disabled"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoDropdownBaseComponent, [{
        type: Directive
    }], null, { label: [{
            type: Input,
            args: ['p-label']
        }], actions: [{
            type: Input,
            args: ['p-actions']
        }], disabled: [{
            type: Input,
            args: ['p-disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZHJvcGRvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZHJvcGRvd24vcG8tZHJvcGRvd24tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBSXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Qkc7QUFHSCxNQUFNLE9BQU8sdUJBQXVCO0lBRHBDO1FBS0UsU0FBSSxHQUFXLG9CQUFvQixDQUFDO1FBQ3BDLFNBQUksR0FBWSxLQUFLLENBQUM7UUFHZCxjQUFTLEdBQVksS0FBSyxDQUFDO0tBMkJwQztJQXpCQyx1REFBdUQ7SUFDdkQsSUFBd0IsT0FBTyxDQUFDLEtBQThCO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUF5QixRQUFRLENBQUMsS0FBYztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OEZBbENVLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FEbkMsU0FBUztnQkFHVSxLQUFLO2tCQUF0QixLQUFLO21CQUFDLFNBQVM7WUFTUSxPQUFPO2tCQUE5QixLQUFLO21CQUFDLFdBQVc7WUFpQk8sUUFBUTtrQkFBaEMsS0FBSzttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvQm9vbGVhbiB9IGZyb20gJy4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBQb0Ryb3Bkb3duQWN0aW9uIH0gZnJvbSAnLi9wby1kcm9wZG93bi1hY3Rpb24uaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1kcm9wZG93bmAgcG9kZSBzZXIgdXRpbGl6YWRvIGNvbW8gdW0gYWdydXBhZG9yIGRlIGHDp8O1ZXMgZSAvIG91IG9ww6fDtWVzLlxyXG4gKlxyXG4gKiA+IENhc28gbsOjbyBoYWphIGNvbmZpZ3VyYcOnw6NvIGRlIHJvdGFzIGVtIHN1YSBhcGxpY2HDp8Ojbywgc2UgZmF6IG5lY2Vzc8OhcmlvIGltcG9ydGFyIG8gYFJvdXRlck1vZHVsZWBcclxuICogbm8gbcOzZHVsbyBwcmluY2lwYWwgcGFyYSBvIGNvcnJldG8gZnVuY2lvbmFtZW50byBkZXN0ZSBjb21wb25lbnRlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICAuLi5cclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdKSxcclxuICogICAgIFBvTW9kdWxlXHJcbiAqICAgXSxcclxuICogICBkZWNsYXJhdGlvbnM6IFtcclxuICogICAgIEFwcENvbXBvbmVudFxyXG4gKiAgIF0sXHJcbiAqICAgZXhwb3J0czogW10sXHJcbiAqICAgcHJvdmlkZXJzOiBbXSxcclxuICogICBib290c3RyYXA6IFtcclxuICogICAgIEFwcENvbXBvbmVudFxyXG4gKiAgIF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuICogYGBgXHJcbiAqID4gUGFyYSBtYWlvcmVzIGTDunZpZGFzIHJlZmVyZW50ZSDDoCBjb25maWd1cmHDp8OjbyBkZSByb3RhcywgYWNlc3NlIGVtIG5vc3NvIHBvcnRhbCAvR3VpYXMgL0NvbWXDp2FuZG9cclxuICogWy9Db25maWd1cmFuZG8gYXMgcm90YXMgZG8gcG8tbWVudV0oL2d1aWRlcy9nZXR0aW5nLXN0YXJ0ZWQpLlxyXG4gKi9cclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9Ecm9wZG93bkJhc2VDb21wb25lbnQge1xyXG4gIC8qKiBBZGljaW9uYSB1bSByw7N0dWxvIGFvIGBkcm9wZG93bmAuICovXHJcbiAgQElucHV0KCdwLWxhYmVsJykgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgaWNvbjogc3RyaW5nID0gJ3BvLWljb24tYXJyb3ctZG93bic7XHJcbiAgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9hY3Rpb25zOiBBcnJheTxQb0Ryb3Bkb3duQWN0aW9uPjtcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogTGlzdGEgZGUgYcOnw7VlcyBxdWUgc2Vyw6NvIGV4aWJpZGFzIG5vIGNvbXBvbmVudGUuICovXHJcbiAgQElucHV0KCdwLWFjdGlvbnMnKSBzZXQgYWN0aW9ucyh2YWx1ZTogQXJyYXk8UG9Ecm9wZG93bkFjdGlvbj4pIHtcclxuICAgIHRoaXMuX2FjdGlvbnMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aW9ucygpIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlc2FiaWxpdGEgbyBjYW1wby5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtZGlzYWJsZWQnKSBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==