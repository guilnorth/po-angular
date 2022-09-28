import { ElementRef, HostListener, ViewChild, Directive } from '@angular/core';
import { PoInputBaseComponent } from '../po-input/po-input-base.component';
import * as i0 from "@angular/core";
const _c0 = ["inp"];
/* eslint-disable @angular-eslint/directive-class-suffix */
export class PoInputGeneric extends PoInputBaseComponent {
    constructor(el, cd) {
        super(cd);
        this.type = 'text';
        this.el = el;
    }
    get autocomplete() {
        return this.noAutocomplete ? 'off' : 'on';
    }
    onKeydown(e) {
        if (this.mask && !this.readonly && e.target.keyCode !== 229) {
            this.eventOnBlur(e);
            this.objMask.keydown(e);
        }
    }
    onKeyup(e) {
        if (this.mask && !this.readonly) {
            if (e.target.keyCode !== 229) {
                this.eventOnBlur(e);
                this.objMask.keyup(e);
            }
            this.callOnChange(this.objMask.valueToModel);
        }
    }
    ngAfterViewInit() {
        this.afterViewInit();
    }
    afterViewInit() {
        this.verifyAutoFocus();
        if (this.type !== 'password') {
            this.setPaddingInput();
        }
    }
    focus() {
        if (!this.disabled) {
            this.inputEl.nativeElement.focus();
        }
    }
    setPaddingInput() {
        setTimeout(() => {
            const selectorIcons = '.po-field-icon-container:not(.po-field-icon-container-left) > .po-icon';
            let icons = this.el.nativeElement.querySelectorAll(selectorIcons).length;
            if (this.clean) {
                icons++;
            }
            if (icons) {
                this.inputEl.nativeElement.style.paddingRight = `${icons * 36}px`;
            }
        });
    }
    verifyAutoFocus() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    eventOnInput(e) {
        let value = '';
        if (!this.mask) {
            value = this.validMaxLength(this.maxlength, e.target.value);
            this.inputEl.nativeElement.value = value;
        }
        else {
            this.objMask.blur(e);
            this.inputEl.nativeElement.value = this.objMask.valueToInput;
            value = this.objMask.valueToModel;
        }
        this.callOnChange(value);
    }
    validMaxLength(maxlength, value) {
        return (maxlength || maxlength === 0) && value.length > maxlength
            ? value.toString().substring(0, maxlength)
            : value;
    }
    eventOnFocus(e) {
        // Atualiza valor da variável que será usada para verificar se o campo teve alteração
        this.valueBeforeChange = this.inputEl.nativeElement.value;
        // Dispara evento quando o usuário entrar no campo
        // Este evento também é disparado quando o campo inicia com foco.
        this.enter.emit();
    }
    eventOnBlur(e) {
        this.onTouched?.();
        if (this.mask) {
            this.objMask.blur(e);
        }
        if (e.type === 'blur') {
            this.blur.emit();
            this.controlChangeEmitter();
        }
    }
    controlChangeEmitter() {
        const elementValue = this.inputEl.nativeElement.value;
        // Emite o evento change manualmente quando o campo é alterado
        // Este evento é controlado manualmente devido ao preventDefault existente na máscara
        // e devido ao controle do p-clean, que também precisa emitir change
        if (elementValue !== this.valueBeforeChange) {
            clearTimeout(this.timeoutChange);
            this.timeoutChange = setTimeout(() => {
                this.change.emit(elementValue);
            }, 200);
        }
    }
    eventOnClick(e) {
        // Atualiza a posição do cursor ao clicar
        if (this.mask) {
            this.objMask.click(e);
        }
    }
    hasInvalidClass() {
        return (this.el.nativeElement.classList.contains('ng-invalid') &&
            this.el.nativeElement.classList.contains('ng-dirty') &&
            this.inputEl.nativeElement.value !== '');
    }
    getErrorPattern() {
        return this.errorPattern !== '' && this.hasInvalidClass() ? this.errorPattern : '';
    }
    validateClassesForPattern() {
        const value = this.getScreenValue();
        const element = this.el.nativeElement;
        if (value && !this.verifyPattern(this.pattern, value)) {
            element.classList.add('ng-invalid');
            element.classList.add('ng-dirty');
        }
        else {
            element.classList.remove('ng-invalid');
        }
    }
    verifyPattern(pattern, value) {
        return new RegExp(pattern).test(value);
    }
    clear(value) {
        this.callOnChange(value);
        this.controlChangeEmitter();
    }
    writeValueModel(value) {
        this.passedWriteValue = true;
        if (this.inputEl) {
            if (value) {
                if (this.mask) {
                    this.inputEl.nativeElement.value = this.objMask.controlFormatting(String(value));
                    // Se o model for definido como formatado, então precisa atualizá-lo no primeiro acesso
                    if (this.objMask.formatModel) {
                        this.callUpdateModelWithTimeout(this.objMask.valueToModel);
                    }
                }
                else {
                    this.inputEl.nativeElement.value = value;
                }
            }
            else {
                // Se o valor for indefinido, deve limpar o campo.
                this.inputEl.nativeElement.value = '';
            }
        }
        // Emite evento quando o model é atualizado, inclusive a primeira vez
        if (value) {
            this.changeModel.emit(value);
        }
    }
    getScreenValue() {
        const screenValue = (this.inputEl && this.inputEl.nativeElement.value) || undefined;
        if (this.type === 'number') {
            const parsedValue = parseFloat(screenValue);
            return parsedValue || parsedValue === 0 ? parsedValue : null;
        }
        else {
            return screenValue;
        }
    }
}
PoInputGeneric.ɵfac = function PoInputGeneric_Factory(t) { return new (t || PoInputGeneric)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PoInputGeneric.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoInputGeneric, viewQuery: function PoInputGeneric_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputEl = _t.first);
    } }, hostBindings: function PoInputGeneric_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function PoInputGeneric_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); })("keyup", function PoInputGeneric_keyup_HostBindingHandler($event) { return ctx.onKeyup($event); });
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoInputGeneric, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { inputEl: [{
            type: ViewChild,
            args: ['inp', { read: ElementRef, static: true }]
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onKeyup: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taW5wdXQtZ2VuZXJpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1pbnB1dC1nZW5lcmljL3BvLWlucHV0LWdlbmVyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFFM0UsMkRBQTJEO0FBRTNELE1BQU0sT0FBZ0IsY0FBZSxTQUFRLG9CQUFvQjtJQWEvRCxZQUFZLEVBQWMsRUFBRSxFQUFzQjtRQUNoRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFYWixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBYVosSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBUkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBUW9DLFNBQVMsQ0FBQyxDQUFNO1FBQ25ELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRWtDLE9BQU8sQ0FBQyxDQUFNO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxHQUFHLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxhQUFhLEdBQUcsd0VBQXdFLENBQUM7WUFDL0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFLLEVBQUUsQ0FBQzthQUNUO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLElBQUksQ0FBQzthQUNuRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLENBQU07UUFDakIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQzdELEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUFpQixFQUFFLEtBQWE7UUFDN0MsT0FBTyxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTO1lBQy9ELENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUM7WUFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBTTtRQUNqQixxRkFBcUY7UUFDckYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUUxRCxrREFBa0Q7UUFDbEQsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFdEQsOERBQThEO1FBQzlELHFGQUFxRjtRQUNyRixvRUFBb0U7UUFDcEUsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBTTtRQUNqQix5Q0FBeUM7UUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sQ0FDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBRXRDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZSxFQUFFLEtBQVU7UUFDdkMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVqRix1RkFBdUY7b0JBQ3ZGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQzVCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1RDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUMxQzthQUNGO2lCQUFNO2dCQUNMLGtEQUFrRDtnQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN2QztTQUNGO1FBRUQscUVBQXFFO1FBQ3JFLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUM7UUFFcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsT0FBTyxXQUFXLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDOUQ7YUFBTTtZQUNMLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7NEVBek1tQixjQUFjO2lFQUFkLGNBQWM7K0JBQ1IsVUFBVTs7Ozs7cUdBRGhCLHFCQUFpQixnRkFBakIsbUJBQWU7O3VGQUFmLGNBQWM7Y0FEbkMsU0FBUzs2RkFFOEMsT0FBTztrQkFBNUQsU0FBUzttQkFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFrQmYsU0FBUztrQkFBN0MsWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFPQSxPQUFPO2tCQUF6QyxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBEaXJlY3RpdmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBvSW5wdXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vcG8taW5wdXQvcG8taW5wdXQtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXggKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0lucHV0R2VuZXJpYyBleHRlbmRzIFBvSW5wdXRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbDogRWxlbWVudFJlZjtcclxuXHJcbiAgdHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgZWw6IEVsZW1lbnRSZWY7XHJcbiAgdmFsdWVCZWZvcmVDaGFuZ2U6IGFueTtcclxuICB0aW1lb3V0Q2hhbmdlOiBhbnk7XHJcblxyXG4gIGdldCBhdXRvY29tcGxldGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5vQXV0b2NvbXBsZXRlID8gJ29mZicgOiAnb24nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIGNkPzogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGNkKTtcclxuXHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlkb3duKGU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubWFzayAmJiAhdGhpcy5yZWFkb25seSAmJiBlLnRhcmdldC5rZXlDb2RlICE9PSAyMjkpIHtcclxuICAgICAgdGhpcy5ldmVudE9uQmx1cihlKTtcclxuICAgICAgdGhpcy5vYmpNYXNrLmtleWRvd24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9uS2V5dXAoZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5tYXNrICYmICF0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5rZXlDb2RlICE9PSAyMjkpIHtcclxuICAgICAgICB0aGlzLmV2ZW50T25CbHVyKGUpO1xyXG4gICAgICAgIHRoaXMub2JqTWFzay5rZXl1cChlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNhbGxPbkNoYW5nZSh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuYWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgYWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudmVyaWZ5QXV0b0ZvY3VzKCk7XHJcbiAgICBpZiAodGhpcy50eXBlICE9PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgIHRoaXMuc2V0UGFkZGluZ0lucHV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGFkZGluZ0lucHV0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdG9ySWNvbnMgPSAnLnBvLWZpZWxkLWljb24tY29udGFpbmVyOm5vdCgucG8tZmllbGQtaWNvbi1jb250YWluZXItbGVmdCkgPiAucG8taWNvbic7XHJcbiAgICAgIGxldCBpY29ucyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ySWNvbnMpLmxlbmd0aDtcclxuICAgICAgaWYgKHRoaXMuY2xlYW4pIHtcclxuICAgICAgICBpY29ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpY29ucykge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke2ljb25zICogMzZ9cHhgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZlcmlmeUF1dG9Gb2N1cygpIHtcclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudE9uSW5wdXQoZTogYW55KSB7XHJcbiAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgIGlmICghdGhpcy5tYXNrKSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy52YWxpZE1heExlbmd0aCh0aGlzLm1heGxlbmd0aCwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vYmpNYXNrLmJsdXIoZSk7XHJcbiAgICAgIHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5vYmpNYXNrLnZhbHVlVG9JbnB1dDtcclxuICAgICAgdmFsdWUgPSB0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWxsT25DaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRNYXhMZW5ndGgobWF4bGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAobWF4bGVuZ3RoIHx8IG1heGxlbmd0aCA9PT0gMCkgJiYgdmFsdWUubGVuZ3RoID4gbWF4bGVuZ3RoXHJcbiAgICAgID8gdmFsdWUudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgbWF4bGVuZ3RoKVxyXG4gICAgICA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRPbkZvY3VzKGU6IGFueSkge1xyXG4gICAgLy8gQXR1YWxpemEgdmFsb3IgZGEgdmFyacOhdmVsIHF1ZSBzZXLDoSB1c2FkYSBwYXJhIHZlcmlmaWNhciBzZSBvIGNhbXBvIHRldmUgYWx0ZXJhw6fDo29cclxuICAgIHRoaXMudmFsdWVCZWZvcmVDaGFuZ2UgPSB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuXHJcbiAgICAvLyBEaXNwYXJhIGV2ZW50byBxdWFuZG8gbyB1c3XDoXJpbyBlbnRyYXIgbm8gY2FtcG9cclxuICAgIC8vIEVzdGUgZXZlbnRvIHRhbWLDqW0gw6kgZGlzcGFyYWRvIHF1YW5kbyBvIGNhbXBvIGluaWNpYSBjb20gZm9jby5cclxuICAgIHRoaXMuZW50ZXIuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRPbkJsdXIoZTogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZD8uKCk7XHJcbiAgICBpZiAodGhpcy5tYXNrKSB7XHJcbiAgICAgIHRoaXMub2JqTWFzay5ibHVyKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICB0aGlzLmJsdXIuZW1pdCgpO1xyXG4gICAgICB0aGlzLmNvbnRyb2xDaGFuZ2VFbWl0dGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb250cm9sQ2hhbmdlRW1pdHRlcigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIEVtaXRlIG8gZXZlbnRvIGNoYW5nZSBtYW51YWxtZW50ZSBxdWFuZG8gbyBjYW1wbyDDqSBhbHRlcmFkb1xyXG4gICAgLy8gRXN0ZSBldmVudG8gw6kgY29udHJvbGFkbyBtYW51YWxtZW50ZSBkZXZpZG8gYW8gcHJldmVudERlZmF1bHQgZXhpc3RlbnRlIG5hIG3DoXNjYXJhXHJcbiAgICAvLyBlIGRldmlkbyBhbyBjb250cm9sZSBkbyBwLWNsZWFuLCBxdWUgdGFtYsOpbSBwcmVjaXNhIGVtaXRpciBjaGFuZ2VcclxuICAgIGlmIChlbGVtZW50VmFsdWUgIT09IHRoaXMudmFsdWVCZWZvcmVDaGFuZ2UpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYW5nZSk7XHJcbiAgICAgIHRoaXMudGltZW91dENoYW5nZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZWxlbWVudFZhbHVlKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50T25DbGljayhlOiBhbnkpIHtcclxuICAgIC8vIEF0dWFsaXphIGEgcG9zacOnw6NvIGRvIGN1cnNvciBhbyBjbGljYXJcclxuICAgIGlmICh0aGlzLm1hc2spIHtcclxuICAgICAgdGhpcy5vYmpNYXNrLmNsaWNrKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFzSW52YWxpZENsYXNzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmctaW52YWxpZCcpICYmXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWRpcnR5JykgJiZcclxuICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT09ICcnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXJyb3JQYXR0ZXJuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JQYXR0ZXJuICE9PSAnJyAmJiB0aGlzLmhhc0ludmFsaWRDbGFzcygpID8gdGhpcy5lcnJvclBhdHRlcm4gOiAnJztcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQ2xhc3Nlc0ZvclBhdHRlcm4oKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2NyZWVuVmFsdWUoKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHZhbHVlICYmICF0aGlzLnZlcmlmeVBhdHRlcm4odGhpcy5wYXR0ZXJuLCB2YWx1ZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZy1pbnZhbGlkJyk7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmctZGlydHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmctaW52YWxpZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5UGF0dGVybihwYXR0ZXJuOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4pLnRlc3QodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIodmFsdWUpIHtcclxuICAgIHRoaXMuY2FsbE9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMuY29udHJvbENoYW5nZUVtaXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWVNb2RlbCh2YWx1ZSkge1xyXG4gICAgdGhpcy5wYXNzZWRXcml0ZVZhbHVlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmlucHV0RWwpIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLm9iak1hc2suY29udHJvbEZvcm1hdHRpbmcoU3RyaW5nKHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgLy8gU2UgbyBtb2RlbCBmb3IgZGVmaW5pZG8gY29tbyBmb3JtYXRhZG8sIGVudMOjbyBwcmVjaXNhIGF0dWFsaXrDoS1sbyBubyBwcmltZWlybyBhY2Vzc29cclxuICAgICAgICAgIGlmICh0aGlzLm9iak1hc2suZm9ybWF0TW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsVXBkYXRlTW9kZWxXaXRoVGltZW91dCh0aGlzLm9iak1hc2sudmFsdWVUb01vZGVsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2UgbyB2YWxvciBmb3IgaW5kZWZpbmlkbywgZGV2ZSBsaW1wYXIgbyBjYW1wby5cclxuICAgICAgICB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1pdGUgZXZlbnRvIHF1YW5kbyBvIG1vZGVsIMOpIGF0dWFsaXphZG8sIGluY2x1c2l2ZSBhIHByaW1laXJhIHZlelxyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlTW9kZWwuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTY3JlZW5WYWx1ZSgpIHtcclxuICAgIGNvbnN0IHNjcmVlblZhbHVlID0gKHRoaXMuaW5wdXRFbCAmJiB0aGlzLmlucHV0RWwubmF0aXZlRWxlbWVudC52YWx1ZSkgfHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdChzY3JlZW5WYWx1ZSk7XHJcbiAgICAgIHJldHVybiBwYXJzZWRWYWx1ZSB8fCBwYXJzZWRWYWx1ZSA9PT0gMCA/IHBhcnNlZFZhbHVlIDogbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzY3JlZW5WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGV4dHJhVmFsaWRhdGlvbihjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcbiJdfQ==