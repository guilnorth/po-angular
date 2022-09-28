import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicContentDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DynamicContentDirective.ɵfac = function DynamicContentDirective_Factory(t) { return new (t || DynamicContentDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
DynamicContentDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DynamicContentDirective, selectors: [["", "dynamicContent", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicContentDirective, [{
        type: Directive,
        args: [{
                selector: '[dynamicContent]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGVtcGxhdGVzL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlLWpvYi1zY2hlZHVsZXIvcG8tcGFnZS1qb2Itc2NoZWR1bGVyLXBhcmFtZXRlcnMvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDOztBQUs1RCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQzs7OEZBRC9DLHVCQUF1QjswRUFBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2R5bmFtaWNDb250ZW50XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29udGVudERpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG59Il19