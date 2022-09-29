import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PoNavbarLogoComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.logo, i0.ɵɵsanitizeUrl);
} }
export class PoNavbarLogoComponent {
}
PoNavbarLogoComponent.ɵfac = function PoNavbarLogoComponent_Factory(t) { return new (t || PoNavbarLogoComponent)(); };
PoNavbarLogoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoNavbarLogoComponent, selectors: [["po-navbar-logo"]], inputs: { logo: ["p-logo", "logo"] }, decls: 2, vars: 1, consts: [["href", "./"], ["class", "po-navbar-logo-image", "alt", "logo", 3, "src", 4, "ngIf"], ["alt", "logo", 1, "po-navbar-logo-image", 3, "src"]], template: function PoNavbarLogoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtemplate(1, PoNavbarLogoComponent_img_1_Template, 1, 1, "img", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.logo);
    } }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNavbarLogoComponent, [{
        type: Component,
        args: [{ selector: 'po-navbar-logo', template: "<a href=\"./\">\r\n  <img *ngIf=\"logo\" class=\"po-navbar-logo-image\" alt=\"logo\" [src]=\"logo\" />\r\n</a>\r\n" }]
    }], null, { logo: [{
            type: Input,
            args: ['p-logo']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmF2YmFyLWxvZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLW5hdmJhci9wby1uYXZiYXItbG9nby9wby1uYXZiYXItbG9nby5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tbmF2YmFyL3BvLW5hdmJhci1sb2dvL3BvLW5hdmJhci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDQy9DLHlCQUF5RTs7O0lBQWYsbURBQVk7O0FES3hFLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ05sQyw0QkFBYTtRQUNYLHNFQUF5RTtRQUMzRSxpQkFBSTs7UUFESSxlQUFVO1FBQVYsK0JBQVU7O3VGREtMLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLGdCQUFnQjtnQkFJVCxJQUFJO2tCQUFwQixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvLW5hdmJhci1sb2dvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG8tbmF2YmFyLWxvZ28uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb05hdmJhckxvZ29Db21wb25lbnQge1xyXG4gIEBJbnB1dCgncC1sb2dvJykgbG9nbz86IHN0cmluZztcclxufVxyXG4iLCI8YSBocmVmPVwiLi9cIj5cclxuICA8aW1nICpuZ0lmPVwibG9nb1wiIGNsYXNzPVwicG8tbmF2YmFyLWxvZ28taW1hZ2VcIiBhbHQ9XCJsb2dvXCIgW3NyY109XCJsb2dvXCIgLz5cclxuPC9hPlxyXG4iXX0=