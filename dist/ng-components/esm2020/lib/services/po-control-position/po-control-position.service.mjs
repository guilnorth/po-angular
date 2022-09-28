import { ElementRef, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 * @description
 *
 * Serviço responsável por gerenciar as posições de um elemento em relação a um elemento alvo. Ele pode receber as
 * seguintes posições:
 *
 * - `right`: Posiciona o elemento no lado direito do componente alvo.
 * - `right-bottom`: Posiciona o elemento no lado direito inferior do componente alvo.
 * - `right-top`: Posiciona o elemento no lado direito superior do componente alvo.
 * - `bottom`: Posiciona o elemento abaixo do componente alvo.
 * - `bottom-left`: Posiciona o elemento abaixo e à esquerda do componente alvo.
 * - `bottom-right`: Posiciona o elemento abaixo e à direita do componente alvo.
 * - `left`: Posiciona o elemento no lado esquerdo do componente alvo.
 * - `left-top`: Posiciona o elemento no lado esquerdo superior do componente alvo.
 * - `left-bottom`: Posiciona o elemento no lado esquerdo inferior do componente alvo.
 * - `top`: Posiciona o elemento acima do componente alvo.
 * - `top-right`: Posiciona o elemento acima e à direita do componente alvo.
 * - `top-left`: Posiciona o elemento acima e à esquerda do componente alvo.
 *
 * Caso o elemento não caiba na tela na posição indicada ele será rotacionado automaticamente para se adequar,
 * inicialmente no lado definido como padrão e em seguida seguindo o sentido horário.
 */
const poControlPositionSidesDefault = [
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'left-top',
    'left-bottom',
    'top',
    'top-right',
    'top-left',
    'right',
    'right-bottom',
    'right-top'
];
export class PoControlPositionService {
    constructor() {
        this.differenceDiagonalToWidthArrow = 3;
        this.isSetElementWidth = false;
        // offset da seta em relação ao canto do componente
        this.offsetArrow = 12;
    }
    /**
     * @description Ajusta a posição do elemento, caso não couber em tela irá para próxima posição.
     *
     * @param value posição para exibição do elemento
     */
    adjustPosition(value) {
        const position = value || 'bottom';
        this.elementPosition(position);
        this.customPositions && this.customPositions.length
            ? this.adjustCustomPosition(position)
            : this.adjustDefaultPosition(position);
    }
    /**
     * @description Retorna a direção da seta, conforme a posição do elemento.
     */
    getArrowDirection() {
        return this.arrowDirection;
    }
    /**
     * @description Método responsável por definir as propriedades utilizadas para exibir o elemento na posição correta.
     *
     * @param element elemento que será exibido
     * @param elementOffset offSet do elemento
     * @param targetElement elemento de onde deve partir a exibição
     * @param customPositions posições que sobrescreve as posições padrões
     * @param isSetElementWidth indica se deve definir o tamanho do elemento a ser exibido, caso for verdadeiro será igual do targetElement
     * @param isCornerAligned indica se o elemento filho será alinhado nos cantos do elemneto pai.
     */
    setElements(element, elementOffset, targetElement, customPositions, isSetElementWidth = false, isCornerAligned = false) {
        this.element = element instanceof ElementRef ? element.nativeElement : element;
        this.targetElement = targetElement instanceof ElementRef ? targetElement.nativeElement : targetElement;
        this.elementOffset = elementOffset;
        this.customPositions = customPositions;
        this.isSetElementWidth = isSetElementWidth;
        this.isCornerAligned = isCornerAligned;
    }
    adjustCustomPosition(position) {
        const positionLength = this.customPositions.length;
        let sidesCount = 0;
        while (sidesCount++ < positionLength) {
            if (this.overflowAllSides(position)) {
                position = this.nextPosition(position, this.customPositions);
                this.elementPosition(position);
            }
        }
    }
    adjustDefaultPosition(position) {
        const mainPositions = this.getMainPositions();
        const mainPositionLength = mainPositions.length;
        let mainSidesCount = 0;
        while (mainSidesCount++ < mainPositionLength) {
            const mainPosition = this.getMainPosition(position);
            this.elementPosition(position);
            if (this.overflowMain(mainPosition)) {
                position = this.nextPosition(mainPosition, mainPositions);
                continue;
            }
            else if (this.overflowAllSides(position)) {
                this.verifySubPositions(position);
                return;
            }
            return;
        }
    }
    elementPosition(position) {
        this.isCornerAligned ? this.setAlignedElementPosition(position) : this.setElementPosition(position);
    }
    getMainPosition(position) {
        return position.indexOf('-') > -1 ? position.substring(0, position.indexOf('-')) : position;
    }
    getMainPositions() {
        const defaultMainPositions = ['top', 'right', 'bottom', 'left'];
        return this.customPositions && this.customPositions.length
            ? this.getMainPositionsByCustomPositions(this.customPositions)
            : defaultMainPositions;
    }
    getMainPositionsByCustomPositions(customPositions) {
        const mainPositions = [];
        const customPositionsLength = customPositions.length;
        for (let i = 0; i < customPositionsLength; i++) {
            const position = customPositions[i];
            const mainPosition = this.getMainPosition(position);
            if (!mainPositions.includes(mainPosition)) {
                mainPositions.push(mainPosition);
            }
        }
        return mainPositions;
    }
    getOverflows() {
        const sizesAndPositions = this.getSizesAndPositions();
        return {
            right: sizesAndPositions.element.right > sizesAndPositions.window.innerWidth,
            top: sizesAndPositions.element.top <= 0,
            left: sizesAndPositions.element.left <= 0,
            bottom: sizesAndPositions.element.bottom > sizesAndPositions.window.innerHeight
        };
    }
    getSizesAndPositions() {
        return {
            window: {
                scrollY: window.scrollY,
                scrollX: window.scrollX,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            },
            element: this.element.getBoundingClientRect(),
            target: this.targetElement ? this.targetElement.getBoundingClientRect() : { top: 0, bottom: 0, right: 0, left: 0 }
        };
    }
    nextPosition(position, positions = []) {
        const index = positions.indexOf(position);
        const nextIndex = index + 1;
        if (index > -1 && nextIndex < positions.length) {
            return positions[nextIndex];
        }
        else {
            return positions[0];
        }
    }
    overflowAllSides(position) {
        const overflows = this.getOverflows();
        switch (position) {
            case 'top':
                return overflows.top || overflows.right || overflows.left;
            case 'top-right':
                return overflows.top || overflows.right || overflows.left;
            case 'top-left':
                return overflows.top || overflows.left || overflows.right;
            case 'right':
                return overflows.right || overflows.top || overflows.bottom;
            case 'right-top':
                return overflows.right || overflows.top;
            case 'right-bottom':
                return overflows.right || overflows.bottom;
            case 'bottom':
                return overflows.bottom || overflows.right || overflows.left;
            case 'bottom-right':
                return overflows.bottom || overflows.right || overflows.left;
            case 'bottom-left':
                return overflows.bottom || overflows.left || overflows.right;
            case 'left':
                return overflows.left || overflows.top || overflows.bottom;
            case 'left-top':
                return overflows.left || overflows.top;
            case 'left-bottom':
                return overflows.left || overflows.bottom;
        }
    }
    overflowMain(position) {
        const overflows = this.getOverflows();
        switch (position) {
            case 'top':
                return overflows.top;
            case 'right':
                return overflows.right;
            case 'bottom':
                return overflows.bottom;
            case 'left':
                return overflows.left;
        }
    }
    setAlignedArrowDirection(elementPosition) {
        switch (elementPosition) {
            case 'top-left':
                return 'bottom-left';
            case 'top-right':
                return 'bottom-right';
            case 'bottom-right':
                return 'top-right';
            case 'bottom-left':
                return 'top-left';
        }
    }
    setAlignedBottomPositions(displacement, sizesAndPositions) {
        this.element.style.top = sizesAndPositions.target.bottom + this.elementOffset + 'px';
        this.element.style.left = sizesAndPositions.target.left - displacement + 'px';
    }
    setAlignedElementPosition(position) {
        this.setElementWidth();
        const sizesAndPositions = this.getSizesAndPositions();
        switch (position) {
            case 'bottom-left':
                this.setAlignedBottomPositions(0, sizesAndPositions);
                break;
            case 'bottom-right':
                this.setAlignedBottomPositions(sizesAndPositions.element.width - sizesAndPositions.target.width, sizesAndPositions);
                break;
            case 'top-left':
                this.setAlignedTopPositions(0, sizesAndPositions);
                break;
            case 'top-right':
                this.setAlignedTopPositions(sizesAndPositions.element.width - sizesAndPositions.target.width, sizesAndPositions);
                break;
        }
        this.arrowDirection = this.setAlignedArrowDirection(position);
    }
    setAlignedTopPositions(displacement, sizesAndPositions) {
        this.element.style.top =
            sizesAndPositions.target.top - sizesAndPositions.element.height - this.elementOffset + 'px';
        this.element.style.left = sizesAndPositions.target.left - displacement + 'px';
    }
    setArrowDirection(elementPosition) {
        switch (elementPosition) {
            case 'top':
                return 'bottom';
            case 'top-left':
                return 'bottom-right';
            case 'top-right':
                return 'bottom-left';
            case 'right':
                return 'left';
            case 'right-top':
                return 'left-bottom';
            case 'right-bottom':
                return 'left-top';
            case 'bottom':
                return 'top';
            case 'bottom-right':
                return 'top-left';
            case 'bottom-left':
                return 'top-right';
            case 'left':
                return 'right';
            case 'left-bottom':
                return 'right-top';
            case 'left-top':
                return 'right-bottom';
        }
    }
    setBottomPositions(displacement, sizesAndPositions) {
        this.element.style.top = sizesAndPositions.target.bottom + this.elementOffset + 'px';
        this.element.style.left = sizesAndPositions.target.left + sizesAndPositions.target.width / 2 - displacement + 'px';
    }
    setElementPosition(position) {
        this.setElementWidth();
        const sizesAndPositions = this.getSizesAndPositions();
        switch (position) {
            case 'top':
                this.setTopPositions(sizesAndPositions.element.width / 2, sizesAndPositions);
                break;
            case 'top-left':
                this.setTopPositions(sizesAndPositions.element.width - this.offsetArrow - this.differenceDiagonalToWidthArrow, sizesAndPositions);
                break;
            case 'top-right':
                this.setTopPositions(this.offsetArrow + this.differenceDiagonalToWidthArrow, sizesAndPositions);
                break;
            case 'right':
                this.setRightPositions(sizesAndPositions.element.height / 2, sizesAndPositions);
                break;
            case 'right-top':
                this.setRightPositions(sizesAndPositions.element.height - this.offsetArrow - this.differenceDiagonalToWidthArrow, sizesAndPositions);
                break;
            case 'right-bottom':
                this.setRightPositions(this.offsetArrow, sizesAndPositions);
                break;
            case 'bottom':
                this.setBottomPositions(sizesAndPositions.element.width / 2, sizesAndPositions);
                break;
            case 'bottom-right':
                this.setBottomPositions(this.offsetArrow + this.differenceDiagonalToWidthArrow, sizesAndPositions);
                break;
            case 'bottom-left':
                this.setBottomPositions(sizesAndPositions.element.width - this.offsetArrow - this.differenceDiagonalToWidthArrow, sizesAndPositions);
                break;
            case 'left':
                this.setLeftPositions(sizesAndPositions.element.height / 2, sizesAndPositions);
                break;
            case 'left-bottom':
                this.setLeftPositions(this.offsetArrow, sizesAndPositions);
                break;
            case 'left-top':
                this.setLeftPositions(sizesAndPositions.element.height - this.offsetArrow, sizesAndPositions);
                break;
        }
        this.arrowDirection = this.setArrowDirection(position);
    }
    setElementWidth() {
        if (this.isSetElementWidth && this.targetElement) {
            this.element.style.width = `${this.targetElement.clientWidth}px`;
        }
    }
    setLeftPositions(displacement, sizesAndPositions) {
        this.element.style.top = sizesAndPositions.target.top - displacement + sizesAndPositions.target.height / 2 + 'px';
        this.element.style.left =
            sizesAndPositions.target.left - sizesAndPositions.element.width - this.elementOffset + 'px';
    }
    setRightPositions(displacement, sizesAndPositions) {
        this.element.style.top = sizesAndPositions.target.top - displacement + sizesAndPositions.target.height / 2 + 'px';
        this.element.style.left = sizesAndPositions.target.right + this.elementOffset + 'px';
    }
    setTopPositions(displacement, sizesAndPositions) {
        this.element.style.top =
            sizesAndPositions.target.top - sizesAndPositions.element.height - this.elementOffset + 'px';
        this.element.style.left = sizesAndPositions.target.left + sizesAndPositions.target.width / 2 - displacement + 'px';
    }
    verifySubPositions(position) {
        if (position.indexOf('-') > -1) {
            position = position.substring(0, position.indexOf('-'));
            this.elementPosition(position);
        }
        let align = 0;
        while (align++ < 3) {
            if (this.overflowAllSides(position)) {
                position = this.nextPosition(position, poControlPositionSidesDefault);
                this.elementPosition(position);
            }
            else {
                return null;
            }
        }
    }
}
PoControlPositionService.ɵfac = function PoControlPositionService_Factory(t) { return new (t || PoControlPositionService)(); };
PoControlPositionService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoControlPositionService, factory: PoControlPositionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoControlPositionService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY29udHJvbC1wb3NpdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9zZXJ2aWNlcy9wby1jb250cm9sLXBvc2l0aW9uL3BvLWNvbnRyb2wtcG9zaXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFFSCxNQUFNLDZCQUE2QixHQUFrQjtJQUNuRCxRQUFRO0lBQ1IsYUFBYTtJQUNiLGNBQWM7SUFDZCxNQUFNO0lBQ04sVUFBVTtJQUNWLGFBQWE7SUFDYixLQUFLO0lBQ0wsV0FBVztJQUNYLFVBQVU7SUFDVixPQUFPO0lBQ1AsY0FBYztJQUNkLFdBQVc7Q0FDWixDQUFDO0FBR0YsTUFBTSxPQUFPLHdCQUF3QjtJQURyQztRQUlVLG1DQUE4QixHQUFXLENBQUMsQ0FBQztRQUkzQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDM0MsbURBQW1EO1FBQzNDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0tBOFhsQztJQTNYQzs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLEtBQWE7UUFDMUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxD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USxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO0lBQ0gsQ0FBQzs7Z0dBdFlVLHdCQUF3Qjs4RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBTZXJ2acOnbyByZXNwb25zw6F2ZWwgcG9yIGdlcmVuY2lhciBhcyBwb3Npw6fDtWVzIGRlIHVtIGVsZW1lbnRvIGVtIHJlbGHDp8OjbyBhIHVtIGVsZW1lbnRvIGFsdm8uIEVsZSBwb2RlIHJlY2ViZXIgYXNcclxuICogc2VndWludGVzIHBvc2nDp8O1ZXM6XHJcbiAqXHJcbiAqIC0gYHJpZ2h0YDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBkaXJlaXRvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgcmlnaHQtYm90dG9tYDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBkaXJlaXRvIGluZmVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgcmlnaHQtdG9wYDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBkaXJlaXRvIHN1cGVyaW9yIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgYm90dG9tYDogUG9zaWNpb25hIG8gZWxlbWVudG8gYWJhaXhvIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgYm90dG9tLWxlZnRgOiBQb3NpY2lvbmEgbyBlbGVtZW50byBhYmFpeG8gZSDDoCBlc3F1ZXJkYSBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAqIC0gYGJvdHRvbS1yaWdodGA6IFBvc2ljaW9uYSBvIGVsZW1lbnRvIGFiYWl4byBlIMOgIGRpcmVpdGEgZG8gY29tcG9uZW50ZSBhbHZvLlxyXG4gKiAtIGBsZWZ0YDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBlc3F1ZXJkbyBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAqIC0gYGxlZnQtdG9wYDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBlc3F1ZXJkbyBzdXBlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAqIC0gYGxlZnQtYm90dG9tYDogUG9zaWNpb25hIG8gZWxlbWVudG8gbm8gbGFkbyBlc3F1ZXJkbyBpbmZlcmlvciBkbyBjb21wb25lbnRlIGFsdm8uXHJcbiAqIC0gYHRvcGA6IFBvc2ljaW9uYSBvIGVsZW1lbnRvIGFjaW1hIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgdG9wLXJpZ2h0YDogUG9zaWNpb25hIG8gZWxlbWVudG8gYWNpbWEgZSDDoCBkaXJlaXRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICogLSBgdG9wLWxlZnRgOiBQb3NpY2lvbmEgbyBlbGVtZW50byBhY2ltYSBlIMOgIGVzcXVlcmRhIGRvIGNvbXBvbmVudGUgYWx2by5cclxuICpcclxuICogQ2FzbyBvIGVsZW1lbnRvIG7Do28gY2FpYmEgbmEgdGVsYSBuYSBwb3Npw6fDo28gaW5kaWNhZGEgZWxlIHNlcsOhIHJvdGFjaW9uYWRvIGF1dG9tYXRpY2FtZW50ZSBwYXJhIHNlIGFkZXF1YXIsXHJcbiAqIGluaWNpYWxtZW50ZSBubyBsYWRvIGRlZmluaWRvIGNvbW8gcGFkcsOjbyBlIGVtIHNlZ3VpZGEgc2VndWluZG8gbyBzZW50aWRvIGhvcsOhcmlvLlxyXG4gKi9cclxuXHJcbmNvbnN0IHBvQ29udHJvbFBvc2l0aW9uU2lkZXNEZWZhdWx0OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICdib3R0b20nLFxyXG4gICdib3R0b20tbGVmdCcsXHJcbiAgJ2JvdHRvbS1yaWdodCcsXHJcbiAgJ2xlZnQnLFxyXG4gICdsZWZ0LXRvcCcsXHJcbiAgJ2xlZnQtYm90dG9tJyxcclxuICAndG9wJyxcclxuICAndG9wLXJpZ2h0JyxcclxuICAndG9wLWxlZnQnLFxyXG4gICdyaWdodCcsXHJcbiAgJ3JpZ2h0LWJvdHRvbScsXHJcbiAgJ3JpZ2h0LXRvcCdcclxuXTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvQ29udHJvbFBvc2l0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcnJvd0RpcmVjdGlvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VzdG9tUG9zaXRpb25zOiBBcnJheTxzdHJpbmc+O1xyXG4gIHByaXZhdGUgZGlmZmVyZW5jZURpYWdvbmFsVG9XaWR0aEFycm93OiBudW1iZXIgPSAzO1xyXG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBlbGVtZW50T2Zmc2V0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBpc0Nvcm5lckFsaWduZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc1NldEVsZW1lbnRXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vIG9mZnNldCBkYSBzZXRhIGVtIHJlbGHDp8OjbyBhbyBjYW50byBkbyBjb21wb25lbnRlXHJcbiAgcHJpdmF0ZSBvZmZzZXRBcnJvdzogbnVtYmVyID0gMTI7XHJcbiAgcHJpdmF0ZSB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIEFqdXN0YSBhIHBvc2nDp8OjbyBkbyBlbGVtZW50bywgY2FzbyBuw6NvIGNvdWJlciBlbSB0ZWxhIGlyw6EgcGFyYSBwcsOzeGltYSBwb3Npw6fDo28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgcG9zacOnw6NvIHBhcmEgZXhpYmnDp8OjbyBkbyBlbGVtZW50b1xyXG4gICAqL1xyXG4gIGFkanVzdFBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdmFsdWUgfHwgJ2JvdHRvbSc7XHJcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICB0aGlzLmN1c3RvbVBvc2l0aW9ucyAmJiB0aGlzLmN1c3RvbVBvc2l0aW9ucy5sZW5ndGhcclxuICAgICAgPyB0aGlzLmFkanVzdEN1c3RvbVBvc2l0aW9uKHBvc2l0aW9uKVxyXG4gICAgICA6IHRoaXMuYWRqdXN0RGVmYXVsdFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBSZXRvcm5hIGEgZGlyZcOnw6NvIGRhIHNldGEsIGNvbmZvcm1lIGEgcG9zacOnw6NvIGRvIGVsZW1lbnRvLlxyXG4gICAqL1xyXG4gIGdldEFycm93RGlyZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyb3dEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gTcOpdG9kbyByZXNwb25zw6F2ZWwgcG9yIGRlZmluaXIgYXMgcHJvcHJpZWRhZGVzIHV0aWxpemFkYXMgcGFyYSBleGliaXIgbyBlbGVtZW50byBuYSBwb3Npw6fDo28gY29ycmV0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IGVsZW1lbnRvIHF1ZSBzZXLDoSBleGliaWRvXHJcbiAgICogQHBhcmFtIGVsZW1lbnRPZmZzZXQgb2ZmU2V0IGRvIGVsZW1lbnRvXHJcbiAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQgZWxlbWVudG8gZGUgb25kZSBkZXZlIHBhcnRpciBhIGV4aWJpw6fDo29cclxuICAgKiBAcGFyYW0gY3VzdG9tUG9zaXRpb25zIHBvc2nDp8O1ZXMgcXVlIHNvYnJlc2NyZXZlIGFzIHBvc2nDp8O1ZXMgcGFkcsO1ZXNcclxuICAgKiBAcGFyYW0gaXNTZXRFbGVtZW50V2lkdGggaW5kaWNhIHNlIGRldmUgZGVmaW5pciBvIHRhbWFuaG8gZG8gZWxlbWVudG8gYSBzZXIgZXhpYmlkbywgY2FzbyBmb3IgdmVyZGFkZWlybyBzZXLDoSBpZ3VhbCBkbyB0YXJnZXRFbGVtZW50XHJcbiAgICogQHBhcmFtIGlzQ29ybmVyQWxpZ25lZCBpbmRpY2Egc2UgbyBlbGVtZW50byBmaWxobyBzZXLDoSBhbGluaGFkbyBub3MgY2FudG9zIGRvIGVsZW1uZXRvIHBhaS5cclxuICAgKi9cclxuICBzZXRFbGVtZW50cyhcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBIVE1MRWxlbWVudCxcclxuICAgIGVsZW1lbnRPZmZzZXQ6IG51bWJlcixcclxuICAgIHRhcmdldEVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBIVE1MRWxlbWVudCxcclxuICAgIGN1c3RvbVBvc2l0aW9ucz86IEFycmF5PHN0cmluZz4sXHJcbiAgICBpc1NldEVsZW1lbnRXaWR0aDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgaXNDb3JuZXJBbGlnbmVkOiBib29sZWFuID0gZmFsc2VcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcclxuICAgIHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gdGFyZ2V0RWxlbWVudC5uYXRpdmVFbGVtZW50IDogdGFyZ2V0RWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnRPZmZzZXQgPSBlbGVtZW50T2Zmc2V0O1xyXG5cclxuICAgIHRoaXMuY3VzdG9tUG9zaXRpb25zID0gY3VzdG9tUG9zaXRpb25zO1xyXG4gICAgdGhpcy5pc1NldEVsZW1lbnRXaWR0aCA9IGlzU2V0RWxlbWVudFdpZHRoO1xyXG4gICAgdGhpcy5pc0Nvcm5lckFsaWduZWQgPSBpc0Nvcm5lckFsaWduZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdEN1c3RvbVBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uTGVuZ3RoID0gdGhpcy5jdXN0b21Qb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIGxldCBzaWRlc0NvdW50ID0gMDtcclxuXHJcbiAgICB3aGlsZSAoc2lkZXNDb3VudCsrIDwgcG9zaXRpb25MZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMub3ZlcmZsb3dBbGxTaWRlcyhwb3NpdGlvbikpIHtcclxuICAgICAgICBwb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLmN1c3RvbVBvc2l0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkanVzdERlZmF1bHRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtYWluUG9zaXRpb25zID0gdGhpcy5nZXRNYWluUG9zaXRpb25zKCk7XHJcbiAgICBjb25zdCBtYWluUG9zaXRpb25MZW5ndGggPSBtYWluUG9zaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICBsZXQgbWFpblNpZGVzQ291bnQgPSAwO1xyXG5cclxuICAgIHdoaWxlIChtYWluU2lkZXNDb3VudCsrIDwgbWFpblBvc2l0aW9uTGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG1haW5Qb3NpdGlvbiA9IHRoaXMuZ2V0TWFpblBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb24ocG9zaXRpb24pO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3ZlcmZsb3dNYWluKG1haW5Qb3NpdGlvbikpIHtcclxuICAgICAgICBwb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKG1haW5Qb3NpdGlvbiwgbWFpblBvc2l0aW9ucyk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vdmVyZmxvd0FsbFNpZGVzKHBvc2l0aW9uKSkge1xyXG4gICAgICAgIHRoaXMudmVyaWZ5U3ViUG9zaXRpb25zKHBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZWxlbWVudFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaXNDb3JuZXJBbGlnbmVkID8gdGhpcy5zZXRBbGlnbmVkRWxlbWVudFBvc2l0aW9uKHBvc2l0aW9uKSA6IHRoaXMuc2V0RWxlbWVudFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWFpblBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBwb3NpdGlvbi5pbmRleE9mKCctJykgPiAtMSA/IHBvc2l0aW9uLnN1YnN0cmluZygwLCBwb3NpdGlvbi5pbmRleE9mKCctJykpIDogcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1haW5Qb3NpdGlvbnMoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0TWFpblBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tUG9zaXRpb25zICYmIHRoaXMuY3VzdG9tUG9zaXRpb25zLmxlbmd0aFxyXG4gICAgICA/IHRoaXMuZ2V0TWFpblBvc2l0aW9uc0J5Q3VzdG9tUG9zaXRpb25zKHRoaXMuY3VzdG9tUG9zaXRpb25zKVxyXG4gICAgICA6IGRlZmF1bHRNYWluUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYWluUG9zaXRpb25zQnlDdXN0b21Qb3NpdGlvbnMoY3VzdG9tUG9zaXRpb25zOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBjb25zdCBtYWluUG9zaXRpb25zID0gW107XHJcbiAgICBjb25zdCBjdXN0b21Qb3NpdGlvbnNMZW5ndGggPSBjdXN0b21Qb3NpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VzdG9tUG9zaXRpb25zTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBjdXN0b21Qb3NpdGlvbnNbaV07XHJcblxyXG4gICAgICBjb25zdCBtYWluUG9zaXRpb24gPSB0aGlzLmdldE1haW5Qb3NpdGlvbihwb3NpdGlvbik7XHJcblxyXG4gICAgICBpZiAoIW1haW5Qb3NpdGlvbnMuaW5jbHVkZXMobWFpblBvc2l0aW9uKSkge1xyXG4gICAgICAgIG1haW5Qb3NpdGlvbnMucHVzaChtYWluUG9zaXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1haW5Qb3NpdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJmbG93cygpIHtcclxuICAgIGNvbnN0IHNpemVzQW5kUG9zaXRpb25zID0gdGhpcy5nZXRTaXplc0FuZFBvc2l0aW9ucygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJpZ2h0OiBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LnJpZ2h0ID4gc2l6ZXNBbmRQb3NpdGlvbnMud2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIHRvcDogc2l6ZXNBbmRQb3NpdGlvbnMuZWxlbWVudC50b3AgPD0gMCxcclxuICAgICAgbGVmdDogc2l6ZXNBbmRQb3NpdGlvbnMuZWxlbWVudC5sZWZ0IDw9IDAsXHJcbiAgICAgIGJvdHRvbTogc2l6ZXNBbmRQb3NpdGlvbnMuZWxlbWVudC5ib3R0b20gPiBzaXplc0FuZFBvc2l0aW9ucy53aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNpemVzQW5kUG9zaXRpb25zKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgc2Nyb2xsWTogd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgc2Nyb2xsWDogd2luZG93LnNjcm9sbFgsXHJcbiAgICAgICAgaW5uZXJXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXRFbGVtZW50ID8gdGhpcy50YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogeyB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIGxlZnQ6IDAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV4dFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcsIHBvc2l0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGluZGV4ID0gcG9zaXRpb25zLmluZGV4T2YocG9zaXRpb24pO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xICYmIG5leHRJbmRleCA8IHBvc2l0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHBvc2l0aW9uc1tuZXh0SW5kZXhdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBvc2l0aW9uc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcmZsb3dBbGxTaWRlcyhwb3NpdGlvbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBvdmVyZmxvd3MgPSB0aGlzLmdldE92ZXJmbG93cygpO1xyXG5cclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gb3ZlcmZsb3dzLnRvcCB8fCBvdmVyZmxvd3MucmlnaHQgfHwgb3ZlcmZsb3dzLmxlZnQ7XHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy50b3AgfHwgb3ZlcmZsb3dzLnJpZ2h0IHx8IG92ZXJmbG93cy5sZWZ0O1xyXG4gICAgICBjYXNlICd0b3AtbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy50b3AgfHwgb3ZlcmZsb3dzLmxlZnQgfHwgb3ZlcmZsb3dzLnJpZ2h0O1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5yaWdodCB8fCBvdmVyZmxvd3MudG9wIHx8IG92ZXJmbG93cy5ib3R0b207XHJcbiAgICAgIGNhc2UgJ3JpZ2h0LXRvcCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5yaWdodCB8fCBvdmVyZmxvd3MudG9wO1xyXG4gICAgICBjYXNlICdyaWdodC1ib3R0b20nOlxyXG4gICAgICAgIHJldHVybiBvdmVyZmxvd3MucmlnaHQgfHwgb3ZlcmZsb3dzLmJvdHRvbTtcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gb3ZlcmZsb3dzLmJvdHRvbSB8fCBvdmVyZmxvd3MucmlnaHQgfHwgb3ZlcmZsb3dzLmxlZnQ7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5ib3R0b20gfHwgb3ZlcmZsb3dzLnJpZ2h0IHx8IG92ZXJmbG93cy5sZWZ0O1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5ib3R0b20gfHwgb3ZlcmZsb3dzLmxlZnQgfHwgb3ZlcmZsb3dzLnJpZ2h0O1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICByZXR1cm4gb3ZlcmZsb3dzLmxlZnQgfHwgb3ZlcmZsb3dzLnRvcCB8fCBvdmVyZmxvd3MuYm90dG9tO1xyXG4gICAgICBjYXNlICdsZWZ0LXRvcCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5sZWZ0IHx8IG92ZXJmbG93cy50b3A7XHJcbiAgICAgIGNhc2UgJ2xlZnQtYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gb3ZlcmZsb3dzLmxlZnQgfHwgb3ZlcmZsb3dzLmJvdHRvbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3ZlcmZsb3dNYWluKHBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG92ZXJmbG93cyA9IHRoaXMuZ2V0T3ZlcmZsb3dzKCk7XHJcblxyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHJldHVybiBvdmVyZmxvd3MudG9wO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5yaWdodDtcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gb3ZlcmZsb3dzLmJvdHRvbTtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIG92ZXJmbG93cy5sZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBbGlnbmVkQXJyb3dEaXJlY3Rpb24oZWxlbWVudFBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoZWxlbWVudFBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbS1sZWZ0JztcclxuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbS1yaWdodCc7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICd0b3AtcmlnaHQnO1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuICd0b3AtbGVmdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFsaWduZWRCb3R0b21Qb3NpdGlvbnMoZGlzcGxhY2VtZW50OiBudW1iZXIsIHNpemVzQW5kUG9zaXRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LmJvdHRvbSArIHRoaXMuZWxlbWVudE9mZnNldCArICdweCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHNpemVzQW5kUG9zaXRpb25zLnRhcmdldC5sZWZ0IC0gZGlzcGxhY2VtZW50ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWxpZ25lZEVsZW1lbnRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEVsZW1lbnRXaWR0aCgpO1xyXG5cclxuICAgIGNvbnN0IHNpemVzQW5kUG9zaXRpb25zOiBhbnkgPSB0aGlzLmdldFNpemVzQW5kUG9zaXRpb25zKCk7XHJcblxyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgdGhpcy5zZXRBbGlnbmVkQm90dG9tUG9zaXRpb25zKDAsIHNpemVzQW5kUG9zaXRpb25zKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgICB0aGlzLnNldEFsaWduZWRCb3R0b21Qb3NpdGlvbnMoXHJcbiAgICAgICAgICBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LndpZHRoIC0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LndpZHRoLFxyXG4gICAgICAgICAgc2l6ZXNBbmRQb3NpdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AtbGVmdCc6XHJcbiAgICAgICAgdGhpcy5zZXRBbGlnbmVkVG9wUG9zaXRpb25zKDAsIHNpemVzQW5kUG9zaXRpb25zKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcclxuICAgICAgICB0aGlzLnNldEFsaWduZWRUb3BQb3NpdGlvbnMoXHJcbiAgICAgICAgICBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LndpZHRoIC0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LndpZHRoLFxyXG4gICAgICAgICAgc2l6ZXNBbmRQb3NpdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXJyb3dEaXJlY3Rpb24gPSB0aGlzLnNldEFsaWduZWRBcnJvd0RpcmVjdGlvbihwb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFsaWduZWRUb3BQb3NpdGlvbnMoZGlzcGxhY2VtZW50OiBudW1iZXIsIHNpemVzQW5kUG9zaXRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID1cclxuICAgICAgc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LnRvcCAtIHNpemVzQW5kUG9zaXRpb25zLmVsZW1lbnQuaGVpZ2h0IC0gdGhpcy5lbGVtZW50T2Zmc2V0ICsgJ3B4JztcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LmxlZnQgLSBkaXNwbGFjZW1lbnQgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBcnJvd0RpcmVjdGlvbihlbGVtZW50UG9zaXRpb246IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChlbGVtZW50UG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XHJcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbS1yaWdodCc7XHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICdib3R0b20tbGVmdCc7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgICBjYXNlICdyaWdodC10b3AnOlxyXG4gICAgICAgIHJldHVybiAnbGVmdC1ib3R0b20nO1xyXG4gICAgICBjYXNlICdyaWdodC1ib3R0b20nOlxyXG4gICAgICAgIHJldHVybiAnbGVmdC10b3AnO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiAndG9wJztcclxuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJ3RvcC1sZWZ0JztcclxuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxyXG4gICAgICAgIHJldHVybiAndG9wLXJpZ2h0JztcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgIGNhc2UgJ2xlZnQtYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0LXRvcCc7XHJcbiAgICAgIGNhc2UgJ2xlZnQtdG9wJzpcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0LWJvdHRvbSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJvdHRvbVBvc2l0aW9ucyhkaXNwbGFjZW1lbnQ6IG51bWJlciwgc2l6ZXNBbmRQb3NpdGlvbnMpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBzaXplc0FuZFBvc2l0aW9ucy50YXJnZXQuYm90dG9tICsgdGhpcy5lbGVtZW50T2Zmc2V0ICsgJ3B4JztcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LmxlZnQgKyBzaXplc0FuZFBvc2l0aW9ucy50YXJnZXQud2lkdGggLyAyIC0gZGlzcGxhY2VtZW50ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RWxlbWVudFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0RWxlbWVudFdpZHRoKCk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZXNBbmRQb3NpdGlvbnMgPSB0aGlzLmdldFNpemVzQW5kUG9zaXRpb25zKCk7XHJcblxyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHRoaXMuc2V0VG9wUG9zaXRpb25zKHNpemVzQW5kUG9zaXRpb25zLmVsZW1lbnQud2lkdGggLyAyLCBzaXplc0FuZFBvc2l0aW9ucyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcclxuICAgICAgICB0aGlzLnNldFRvcFBvc2l0aW9ucyhcclxuICAgICAgICAgIHNpemVzQW5kUG9zaXRpb25zLmVsZW1lbnQud2lkdGggLSB0aGlzLm9mZnNldEFycm93IC0gdGhpcy5kaWZmZXJlbmNlRGlhZ29uYWxUb1dpZHRoQXJyb3csXHJcbiAgICAgICAgICBzaXplc0FuZFBvc2l0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgdGhpcy5zZXRUb3BQb3NpdGlvbnModGhpcy5vZmZzZXRBcnJvdyArIHRoaXMuZGlmZmVyZW5jZURpYWdvbmFsVG9XaWR0aEFycm93LCBzaXplc0FuZFBvc2l0aW9ucyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICB0aGlzLnNldFJpZ2h0UG9zaXRpb25zKHNpemVzQW5kUG9zaXRpb25zLmVsZW1lbnQuaGVpZ2h0IC8gMiwgc2l6ZXNBbmRQb3NpdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdyaWdodC10b3AnOlxyXG4gICAgICAgIHRoaXMuc2V0UmlnaHRQb3NpdGlvbnMoXHJcbiAgICAgICAgICBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LmhlaWdodCAtIHRoaXMub2Zmc2V0QXJyb3cgLSB0aGlzLmRpZmZlcmVuY2VEaWFnb25hbFRvV2lkdGhBcnJvdyxcclxuICAgICAgICAgIHNpemVzQW5kUG9zaXRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQtYm90dG9tJzpcclxuICAgICAgICB0aGlzLnNldFJpZ2h0UG9zaXRpb25zKHRoaXMub2Zmc2V0QXJyb3csIHNpemVzQW5kUG9zaXRpb25zKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICB0aGlzLnNldEJvdHRvbVBvc2l0aW9ucyhzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LndpZHRoIC8gMiwgc2l6ZXNBbmRQb3NpdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxyXG4gICAgICAgIHRoaXMuc2V0Qm90dG9tUG9zaXRpb25zKHRoaXMub2Zmc2V0QXJyb3cgKyB0aGlzLmRpZmZlcmVuY2VEaWFnb25hbFRvV2lkdGhBcnJvdywgc2l6ZXNBbmRQb3NpdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgdGhpcy5zZXRCb3R0b21Qb3NpdGlvbnMoXHJcbiAgICAgICAgICBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LndpZHRoIC0gdGhpcy5vZmZzZXRBcnJvdyAtIHRoaXMuZGlmZmVyZW5jZURpYWdvbmFsVG9XaWR0aEFycm93LFxyXG4gICAgICAgICAgc2l6ZXNBbmRQb3NpdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICB0aGlzLnNldExlZnRQb3NpdGlvbnMoc2l6ZXNBbmRQb3NpdGlvbnMuZWxlbWVudC5oZWlnaHQgLyAyLCBzaXplc0FuZFBvc2l0aW9ucyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQtYm90dG9tJzpcclxuICAgICAgICB0aGlzLnNldExlZnRQb3NpdGlvbnModGhpcy5vZmZzZXRBcnJvdywgc2l6ZXNBbmRQb3NpdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZWZ0LXRvcCc6XHJcbiAgICAgICAgdGhpcy5zZXRMZWZ0UG9zaXRpb25zKHNpemVzQW5kUG9zaXRpb25zLmVsZW1lbnQuaGVpZ2h0IC0gdGhpcy5vZmZzZXRBcnJvdywgc2l6ZXNBbmRQb3NpdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXJyb3dEaXJlY3Rpb24gPSB0aGlzLnNldEFycm93RGlyZWN0aW9uKHBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RWxlbWVudFdpZHRoKCkge1xyXG4gICAgaWYgKHRoaXMuaXNTZXRFbGVtZW50V2lkdGggJiYgdGhpcy50YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMudGFyZ2V0RWxlbWVudC5jbGllbnRXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExlZnRQb3NpdGlvbnMoZGlzcGxhY2VtZW50OiBudW1iZXIsIHNpemVzQW5kUG9zaXRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LnRvcCAtIGRpc3BsYWNlbWVudCArIHNpemVzQW5kUG9zaXRpb25zLnRhcmdldC5oZWlnaHQgLyAyICsgJ3B4JztcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID1cclxuICAgICAgc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LmxlZnQgLSBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LndpZHRoIC0gdGhpcy5lbGVtZW50T2Zmc2V0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UmlnaHRQb3NpdGlvbnMoZGlzcGxhY2VtZW50OiBudW1iZXIsIHNpemVzQW5kUG9zaXRpb25zKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LnRvcCAtIGRpc3BsYWNlbWVudCArIHNpemVzQW5kUG9zaXRpb25zLnRhcmdldC5oZWlnaHQgLyAyICsgJ3B4JztcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LnJpZ2h0ICsgdGhpcy5lbGVtZW50T2Zmc2V0ICsgJ3B4JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VG9wUG9zaXRpb25zKGRpc3BsYWNlbWVudDogbnVtYmVyLCBzaXplc0FuZFBvc2l0aW9ucykge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9XHJcbiAgICAgIHNpemVzQW5kUG9zaXRpb25zLnRhcmdldC50b3AgLSBzaXplc0FuZFBvc2l0aW9ucy5lbGVtZW50LmhlaWdodCAtIHRoaXMuZWxlbWVudE9mZnNldCArICdweCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHNpemVzQW5kUG9zaXRpb25zLnRhcmdldC5sZWZ0ICsgc2l6ZXNBbmRQb3NpdGlvbnMudGFyZ2V0LndpZHRoIC8gMiAtIGRpc3BsYWNlbWVudCArICdweCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcmlmeVN1YlBvc2l0aW9ucyhwb3NpdGlvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAocG9zaXRpb24uaW5kZXhPZignLScpID4gLTEpIHtcclxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdWJzdHJpbmcoMCwgcG9zaXRpb24uaW5kZXhPZignLScpKTtcclxuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhbGlnbiA9IDA7XHJcbiAgICB3aGlsZSAoYWxpZ24rKyA8IDMpIHtcclxuICAgICAgaWYgKHRoaXMub3ZlcmZsb3dBbGxTaWRlcyhwb3NpdGlvbikpIHtcclxuICAgICAgICBwb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBwb0NvbnRyb2xQb3NpdGlvblNpZGVzRGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==