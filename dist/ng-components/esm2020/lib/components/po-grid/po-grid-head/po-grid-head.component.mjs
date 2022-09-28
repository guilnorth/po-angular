import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class PoGridHeadComponent {
    constructor() {
        this.align = 'left';
        this.boolean = false;
        this.position = '';
        this.tabIndex = -1;
    }
    set width(value) {
        this._width = value;
    }
    get width() {
        return this._width ? `${this._width}px` : '100%';
    }
}
PoGridHeadComponent.ɵfac = function PoGridHeadComponent_Factory(t) { return new (t || PoGridHeadComponent)(); };
PoGridHeadComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PoGridHeadComponent, selectors: [["po-grid-head"]], inputs: { align: ["p-align", "align"], boolean: ["p-freeze", "boolean"], position: ["p-position", "position"], tabIndex: ["p-tab-index", "tabIndex"], title: ["p-title", "title"], width: ["p-width", "width"] }, decls: 4, vars: 6, consts: [[3, "id", "tabindex"]], template: function PoGridHeadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("po-grid-head-content po-grid-head-", ctx.align, "");
        i0.ɵɵpropertyInterpolate("tabindex", ctx.title ? 0 : -1);
        i0.ɵɵproperty("id", ctx.position);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title || "\u00A0");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGridHeadComponent, [{
        type: Component,
        args: [{ selector: 'po-grid-head', template: "<div>\r\n  <div [id]=\"position\" class=\"po-grid-head-content po-grid-head-{{ align }}\" tabindex=\"{{ title ? 0 : -1 }}\">\r\n    <span>{{ title || '&nbsp;' }}</span>\r\n  </div>\r\n</div>\r\n" }]
    }], null, { align: [{
            type: Input,
            args: ['p-align']
        }], boolean: [{
            type: Input,
            args: ['p-freeze']
        }], position: [{
            type: Input,
            args: ['p-position']
        }], tabIndex: [{
            type: Input,
            args: ['p-tab-index']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], width: [{
            type: Input,
            args: ['p-width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ3JpZC1oZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1ncmlkL3BvLWdyaWQtaGVhZC9wby1ncmlkLWhlYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWdyaWQvcG8tZ3JpZC1oZWFkL3BvLWdyaWQtaGVhZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNakQsTUFBTSxPQUFPLG1CQUFtQjtJQUpoQztRQUtvQixVQUFLLEdBQVksTUFBTSxDQUFDO1FBRXZCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVksQ0FBQyxDQUFDLENBQUM7S0FZOUM7SUFOQyxJQUFzQixLQUFLLENBQUMsS0FBc0I7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuRCxDQUFDOztzRkFsQlUsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUNOaEMsMkJBQUssYUFBQSxXQUFBO1FBRUssWUFBdUI7UUFBQSxpQkFBTyxFQUFBLEVBQUE7O1FBRGpCLGVBQXFEO1FBQXJELDhFQUFxRDtRQUFDLHdEQUErQjtRQUFyRyxpQ0FBZTtRQUNaLGVBQXVCO1FBQXZCLDJDQUF1Qjs7dUZESXBCLG1CQUFtQjtjQUovQixTQUFTOzJCQUNFLGNBQWM7Z0JBSU4sS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBRUcsT0FBTztrQkFBekIsS0FBSzttQkFBQyxVQUFVO1lBRUksUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBRUcsUUFBUTtrQkFBN0IsS0FBSzttQkFBQyxhQUFhO1lBRUYsS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBSU0sS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwby1ncmlkLWhlYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wby1ncmlkLWhlYWQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0dyaWRIZWFkQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ3AtYWxpZ24nKSBhbGlnbj86IHN0cmluZyA9ICdsZWZ0JztcclxuXHJcbiAgQElucHV0KCdwLWZyZWV6ZScpIGJvb2xlYW4/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgncC1wb3NpdGlvbicpIHBvc2l0aW9uPzogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgncC10YWItaW5kZXgnKSB0YWJJbmRleD86IG51bWJlciA9IC0xO1xyXG5cclxuICBASW5wdXQoJ3AtdGl0bGUnKSB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdwLXdpZHRoJykgc2V0IHdpZHRoKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCB3aWR0aCgpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoID8gYCR7dGhpcy5fd2lkdGh9cHhgIDogJzEwMCUnO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDxkaXYgW2lkXT1cInBvc2l0aW9uXCIgY2xhc3M9XCJwby1ncmlkLWhlYWQtY29udGVudCBwby1ncmlkLWhlYWQte3sgYWxpZ24gfX1cIiB0YWJpbmRleD1cInt7IHRpdGxlID8gMCA6IC0xIH19XCI+XHJcbiAgICA8c3Bhbj57eyB0aXRsZSB8fCAnJm5ic3A7JyB9fTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==