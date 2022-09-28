import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PoCodeEditorSuggestionService {
    constructor() {
        this.suggestions = {};
    }
    getSuggestion(language, newSuggestion) {
        if (this.suggestions[language]) {
            const deduplicateSuggestions = this.deduplicateSuggestions(this.suggestions[language], newSuggestion);
            this.suggestions[language] = [...this.suggestions[language], ...deduplicateSuggestions];
            return deduplicateSuggestions;
        }
        else {
            return (this.suggestions[language] = [...newSuggestion]);
        }
    }
    deduplicateSuggestions(originalSuggestions, newSuggestions) {
        return newSuggestions.filter(newItem => !originalSuggestions.find(originalItem => originalItem['label'] === newItem['label']));
    }
}
PoCodeEditorSuggestionService.ɵfac = function PoCodeEditorSuggestionService_Factory(t) { return new (t || PoCodeEditorSuggestionService)(); };
PoCodeEditorSuggestionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoCodeEditorSuggestionService, factory: PoCodeEditorSuggestionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoCodeEditorSuggestionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29kZS1lZGl0b3Itc3VnZ2VzdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29kZS1lZGl0b3Ivc3JjL2xpYi9jb21wb25lbnRzL3BvLWNvZGUtZWRpdG9yL3BvLWNvZGUtZWRpdG9yLXN1Z2dlc3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8sNkJBQTZCO0lBRXhDO1FBRFEsZ0JBQVcsR0FBK0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFVCxhQUFhLENBQUMsUUFBZ0IsRUFBRSxhQUF3RDtRQUM3RixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN0RyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztZQUN4RixPQUFPLHNCQUFzQixDQUFDO1NBQy9CO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFTyxzQkFBc0IsQ0FDNUIsbUJBQThELEVBQzlELGNBQXlEO1FBRXpELE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FDMUIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDakcsQ0FBQztJQUNKLENBQUM7OzBHQXJCVSw2QkFBNkI7bUZBQTdCLDZCQUE2QixXQUE3Qiw2QkFBNkIsbUJBRjVCLE1BQU07dUZBRVAsNkJBQTZCO2NBSHpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQb0NvZGVFZGl0b3JTdWdnZXN0aW9uTGlzdCxcclxuICBQb0NvZGVFZGl0b3JSZWdpc3RlcmFibGVTdWdnZXN0aW9uXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNvZGUtZWRpdG9yLXJlZ2lzdGVyYWJsZS1zdWdnZXN0aW9uLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NvZGVFZGl0b3JTdWdnZXN0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdWdnZXN0aW9uczogUG9Db2RlRWRpdG9yU3VnZ2VzdGlvbkxpc3QgPSB7fTtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRTdWdnZXN0aW9uKGxhbmd1YWdlOiBzdHJpbmcsIG5ld1N1Z2dlc3Rpb246IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+KSB7XHJcbiAgICBpZiAodGhpcy5zdWdnZXN0aW9uc1tsYW5ndWFnZV0pIHtcclxuICAgICAgY29uc3QgZGVkdXBsaWNhdGVTdWdnZXN0aW9ucyA9IHRoaXMuZGVkdXBsaWNhdGVTdWdnZXN0aW9ucyh0aGlzLnN1Z2dlc3Rpb25zW2xhbmd1YWdlXSwgbmV3U3VnZ2VzdGlvbik7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNbbGFuZ3VhZ2VdID0gWy4uLnRoaXMuc3VnZ2VzdGlvbnNbbGFuZ3VhZ2VdLCAuLi5kZWR1cGxpY2F0ZVN1Z2dlc3Rpb25zXTtcclxuICAgICAgcmV0dXJuIGRlZHVwbGljYXRlU3VnZ2VzdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKHRoaXMuc3VnZ2VzdGlvbnNbbGFuZ3VhZ2VdID0gWy4uLm5ld1N1Z2dlc3Rpb25dKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVkdXBsaWNhdGVTdWdnZXN0aW9ucyhcclxuICAgIG9yaWdpbmFsU3VnZ2VzdGlvbnM6IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+LFxyXG4gICAgbmV3U3VnZ2VzdGlvbnM6IEFycmF5PFBvQ29kZUVkaXRvclJlZ2lzdGVyYWJsZVN1Z2dlc3Rpb24+XHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3U3VnZ2VzdGlvbnMuZmlsdGVyKFxyXG4gICAgICBuZXdJdGVtID0+ICFvcmlnaW5hbFN1Z2dlc3Rpb25zLmZpbmQob3JpZ2luYWxJdGVtID0+IG9yaWdpbmFsSXRlbVsnbGFiZWwnXSA9PT0gbmV3SXRlbVsnbGFiZWwnXSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==