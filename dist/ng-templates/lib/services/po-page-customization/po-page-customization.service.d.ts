import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoPageDynamicOptionsSchema } from './po-page-dynamic-options.interface';
import * as i0 from "@angular/core";
declare type urlOrFunction = string | Function;
export declare class PoPageCustomizationService {
    private http;
    constructor(http: HttpClient);
    getCustomOptions<T>(origin: urlOrFunction, originalOption: T, optionSchema: PoPageDynamicOptionsSchema<T>): Observable<T>;
    changeOriginalOptionsToNewOptions<T, K>(objectToChange: T, newOptions: K): void;
    private createObservable;
    private mergePageOptions;
    private createNewProp;
    private mergeOptions;
    private mergeOptionsArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageCustomizationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageCustomizationService>;
}
export {};
