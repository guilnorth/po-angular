import { Directive } from '@angular/core';
import { PoInputGeneric } from '../po-input-generic/po-input-generic';
import * as i0 from "@angular/core";
export class PoNumberBaseComponent extends PoInputGeneric {
    /* istanbul ignore next */
    constructor(elementRef, cd) {
        super(elementRef, cd);
        this.type = 'number';
        this.invalidInputValueOnBlur = false;
    }
    eventOnInput(e) {
        if (!this.mask) {
            let value = e.target.value;
            const valueMaxlength = this.validMaxLength(this.maxlength, value);
            this.invalidInputValueOnBlur = false;
            if (value !== valueMaxlength) {
                value = valueMaxlength;
                this.inputEl.nativeElement.value = value;
            }
            this.callOnChange(this.formatNumber(value));
        }
    }
    onBlur(event) {
        const target = event.target;
        this.invalidInputValueOnBlur = target.value === '' && !target.validity.valid;
        if (this.invalidInputValueOnBlur) {
            this.callOnChange('Valor Inválido');
        }
        this.eventOnBlur(event);
    }
    onKeyDown(event) {
        if (!this.isKeyAllowed(event)) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    validMaxLength(maxlength, value) {
        if (maxlength && value.length > maxlength) {
            const substringValue = value.toString().substring(0, maxlength);
            if (substringValue && this.isEndWithDot(substringValue)) {
                return substringValue.toString().substring(0, maxlength - 1);
            }
            return substringValue;
        }
        return value;
    }
    writeValueModel(value) {
        if (this.inputEl) {
            if (value || value === 0) {
                if (this.mask) {
                    this.inputEl.nativeElement.value = this.objMask.controlFormatting(String(value));
                    // Se o model for definido como formatado, então precisa atualizá-lo no primeiro acesso
                    if (this.objMask.formatModel) {
                        this.onChangePropagate(this.objMask.valueToModel);
                    }
                }
                else {
                    this.inputEl.nativeElement.value = value;
                }
            }
            else {
                // Se for o valor for undefined, deve limpar o campo
                this.inputEl.nativeElement.value = '';
            }
        }
        // Emite evento quando o model é atualizado, inclusive a primeira vez
        this.changeModel.emit(value);
    }
    isEndWithDot(value) {
        return value && value.lastIndexOf('.') === value.length - 1;
    }
    formatNumber(value) {
        return value ? Number(value) : null;
    }
    isKeyAllowed(event) {
        return this.isShortcut(event) || this.isControlKeys(event) || !this.isInvalidKey(event.key);
    }
    isInvalidKey(key) {
        const validatesKey = new RegExp(/[a-zA-Z:;=_´`^~"'?!@#$%¨&*()><{}çÇ\[\]/\\|]+/);
        return validatesKey.test(key);
    }
    isShortcut(event) {
        const key = event.keyCode;
        const ctrl = event.ctrlKey || event.metaKey;
        const keyA = key === 65;
        const keyC = key === 67;
        const keyX = key === 88;
        const keyV = key === 86;
        return (ctrl && keyC) || (ctrl && keyV) || (ctrl && keyA) || (ctrl && keyX);
    }
    isControlKeys(event) {
        const controlKeys = [
            'Backspace',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
            'Left',
            'Right',
            'Up',
            'Down',
            'Tab',
            'Delete'
        ];
        return controlKeys.indexOf(event.key) !== -1;
    }
}
PoNumberBaseComponent.ɵfac = function PoNumberBaseComponent_Factory(t) { return new (t || PoNumberBaseComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoNumberBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoNumberBaseComponent, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoNumberBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbnVtYmVyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLW51bWJlci9wby1udW1iZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUd0RSxNQUFNLE9BQWdCLHFCQUFzQixTQUFRLGNBQWM7SUFLaEUsMEJBQTBCO0lBQzFCLFlBQVksVUFBc0IsRUFBRSxFQUFxQjtRQUN2RCxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBTnhCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFFTiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFLMUMsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDM0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFFckMsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO2dCQUM1QixLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQzFDO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsTUFBTSxD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QU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDaEYsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBSztRQUN0QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzFCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDeEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFLO1FBQ3pCLE1BQU0sV0FBVyxHQUFHO1lBQ2xCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFNBQVM7WUFDVCxXQUFXO1lBQ1gsTUFBTTtZQUNOLE9BQU87WUFDUCxJQUFJO1lBQ0osTUFBTTtZQUNOLEtBQUs7WUFDTCxRQUFRO1NBQ1QsQ0FBQztRQUVGLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7MEZBOUhtQixxQkFBcUI7d0VBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRDFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb0lucHV0R2VuZXJpYyB9IGZyb20gJy4uL3BvLWlucHV0LWdlbmVyaWMvcG8taW5wdXQtZ2VuZXJpYyc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvTnVtYmVyQmFzZUNvbXBvbmVudCBleHRlbmRzIFBvSW5wdXRHZW5lcmljIHtcclxuICB0eXBlID0gJ251bWJlcic7XHJcblxyXG4gIHByb3RlY3RlZCBpbnZhbGlkSW5wdXRWYWx1ZU9uQmx1ciA9IGZhbHNlO1xyXG5cclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgY2QpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRPbklucHV0KGU6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLm1hc2spIHtcclxuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHZhbHVlTWF4bGVuZ3RoID0gdGhpcy52YWxpZE1heExlbmd0aCh0aGlzLm1heGxlbmd0aCwgdmFsdWUpO1xyXG4gICAgICB0aGlzLmludmFsaWRJbnB1dFZhbHVlT25CbHVyID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlTWF4bGVuZ3RoKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZU1heGxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYWxsT25DaGFuZ2UodGhpcy5mb3JtYXROdW1iZXIodmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cihldmVudDogYW55KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB0aGlzLmludmFsaWRJbnB1dFZhbHVlT25CbHVyID0gdGFyZ2V0LnZhbHVlID09PSAnJyAmJiAhdGFyZ2V0LnZhbGlkaXR5LnZhbGlkO1xyXG5cclxuICAgIGlmICh0aGlzLmludmFsaWRJbnB1dFZhbHVlT25CbHVyKSB7XHJcbiAgICAgIHRoaXMuY2FsbE9uQ2hhbmdlKCdWYWxvciBJbnbDoWxpZG8nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50T25CbHVyKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzS2V5QWxsb3dlZChldmVudCkpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZE1heExlbmd0aChtYXhsZW5ndGg6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKG1heGxlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPiBtYXhsZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc3Vic3RyaW5nVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCBtYXhsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHN1YnN0cmluZ1ZhbHVlICYmIHRoaXMuaXNFbmRXaXRoRG90KHN1YnN0cmluZ1ZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBzdWJzdHJpbmdWYWx1ZS50b1N0cmluZygpLnN1YnN0cmluZygwLCBtYXhsZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN1YnN0cmluZ1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWVNb2RlbCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbCkge1xyXG4gICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuICAgICAgICBpZiAodGhpcy5tYXNrKSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMub2JqTWFzay5jb250cm9sRm9ybWF0dGluZyhTdHJpbmcodmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAvLyBTZSBvIG1vZGVsIGZvciBkZWZpbmlkbyBjb21vIGZvcm1hdGFkbywgZW50w6NvIHByZWNpc2EgYXR1YWxpesOhLWxvIG5vIHByaW1laXJvIGFjZXNzb1xyXG4gICAgICAgICAgaWYgKHRoaXMub2JqTWFzay5mb3JtYXRNb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRlKHRoaXMub2JqTWFzay52YWx1ZVRvTW9kZWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZSBmb3IgbyB2YWxvciBmb3IgdW5kZWZpbmVkLCBkZXZlIGxpbXBhciBvIGNhbXBvXHJcbiAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtaXRlIGV2ZW50byBxdWFuZG8gbyBtb2RlbCDDqSBhdHVhbGl6YWRvLCBpbmNsdXNpdmUgYSBwcmltZWlyYSB2ZXpcclxuXHJcbiAgICB0aGlzLmNoYW5nZU1vZGVsLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0VuZFdpdGhEb3QodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmxhc3RJbmRleE9mKCcuJykgPT09IHZhbHVlLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE51bWJlcih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID8gTnVtYmVyKHZhbHVlKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzS2V5QWxsb3dlZChldmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTaG9ydGN1dChldmVudCkgfHwgdGhpcy5pc0NvbnRyb2xLZXlzKGV2ZW50KSB8fCAhdGhpcy5pc0ludmFsaWRLZXkoZXZlbnQua2V5KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbnZhbGlkS2V5KGtleSkge1xyXG4gICAgY29uc3QgdmFsaWRhdGVzS2V5ID0gbmV3IFJlZ0V4cCgvW2EtekEtWjo7PV/CtGBeflwiJz8hQCMkJcKoJiooKT48e33Dp8OHXFxbXFxdL1xcXFx8XSsvKTtcclxuICAgIHJldHVybiB2YWxpZGF0ZXNLZXkudGVzdChrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Nob3J0Y3V0KGV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgY29uc3QgY3RybCA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleTtcclxuICAgIGNvbnN0IGtleUEgPSBrZXkgPT09IDY1O1xyXG4gICAgY29uc3Qga2V5QyA9IGtleSA9PT0gNjc7XHJcbiAgICBjb25zdCBrZXlYID0ga2V5ID09PSA4ODtcclxuICAgIGNvbnN0IGtleVYgPSBrZXkgPT09IDg2O1xyXG5cclxuICAgIHJldHVybiAoY3RybCAmJiBrZXlDKSB8fCAoY3RybCAmJiBrZXlWKSB8fCAoY3RybCAmJiBrZXlBKSB8fCAoY3RybCAmJiBrZXlYKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDb250cm9sS2V5cyhldmVudCkge1xyXG4gICAgY29uc3QgY29udHJvbEtleXMgPSBbXHJcbiAgICAgICdCYWNrc3BhY2UnLFxyXG4gICAgICAnQXJyb3dMZWZ0JyxcclxuICAgICAgJ0Fycm93UmlnaHQnLFxyXG4gICAgICAnQXJyb3dVcCcsXHJcbiAgICAgICdBcnJvd0Rvd24nLFxyXG4gICAgICAnTGVmdCcsXHJcbiAgICAgICdSaWdodCcsXHJcbiAgICAgICdVcCcsXHJcbiAgICAgICdEb3duJyxcclxuICAgICAgJ1RhYicsXHJcbiAgICAgICdEZWxldGUnXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiBjb250cm9sS2V5cy5pbmRleE9mKGV2ZW50LmtleSkgIT09IC0xO1xyXG4gIH1cclxufVxyXG4iXX0=