import { ElementRef, EventEmitter } from '@angular/core';
import { PoLanguageService } from '../../../services/po-language/po-language.service';
import { PoMenuFilterLiterals } from './po-menu-filter-literals.interface';
import * as i0 from "@angular/core";
export declare const poMenuFilterLiteralsDefault: {
    en: PoMenuFilterLiterals;
    es: PoMenuFilterLiterals;
    pt: PoMenuFilterLiterals;
    ru: PoMenuFilterLiterals;
};
/**
 * @docsPrivate
 *
 * @description
 *
 * Componente que apresenta o campo de pesquisa no po-menu.
 */
export declare class PoMenuFilterComponent {
    languageService: PoLanguageService;
    loading: boolean;
    inputFilterElement: ElementRef;
    filter: EventEmitter<any>;
    literals: any;
    constructor(languageService: PoLanguageService);
    filterItems(search: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoMenuFilterComponent, "po-menu-filter", never, { "loading": "p-loading"; }, { "filter": "p-filter"; }, never, never, false>;
}
