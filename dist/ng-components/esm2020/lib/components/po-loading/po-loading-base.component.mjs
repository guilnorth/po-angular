import { Input, Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Este componente tem o objetivo de mostrar visualmente aos usuários que a aplicação está processando
 * ou aguardando a resposta de alguma requisição.
 */
export class PoLoadingBaseComponent {
    constructor() {
        /**
         * Texto a ser exibido no componente.
         */
        this.text = 'Carregando';
    }
}
PoLoadingBaseComponent.ɵfac = function PoLoadingBaseComponent_Factory(t) { return new (t || PoLoadingBaseComponent)(); };
PoLoadingBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoLoadingBaseComponent, inputs: { text: ["p-text", "text"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoLoadingBaseComponent, [{
        type: Directive
    }], null, { text: [{
            type: Input,
            args: ['p-text']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbG9hZGluZy1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1sb2FkaW5nL3BvLWxvYWRpbmctYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWpEOzs7Ozs7O0dBT0c7QUFFSCxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRUU7O1dBRUc7UUFDYyxTQUFJLEdBQVksWUFBWSxDQUFDO0tBQy9DOzs0RkFMWSxzQkFBc0I7eUVBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFNBQVM7Z0JBS1MsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzUHJpdmF0ZVxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRXN0ZSBjb21wb25lbnRlIHRlbSBvIG9iamV0aXZvIGRlIG1vc3RyYXIgdmlzdWFsbWVudGUgYW9zIHVzdcOhcmlvcyBxdWUgYSBhcGxpY2HDp8OjbyBlc3TDoSBwcm9jZXNzYW5kb1xyXG4gKiBvdSBhZ3VhcmRhbmRvIGEgcmVzcG9zdGEgZGUgYWxndW1hIHJlcXVpc2nDp8Ojby5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgUG9Mb2FkaW5nQmFzZUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogVGV4dG8gYSBzZXIgZXhpYmlkbyBubyBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC10ZXh0JykgdGV4dD86IHN0cmluZyA9ICdDYXJyZWdhbmRvJztcclxufVxyXG4iXX0=