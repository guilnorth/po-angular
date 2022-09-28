import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoTableFilter } from '../interfaces/po-table-filter.interface';
import { PoTableFilteredItemsParams } from '../interfaces/po-table-filtered-items-params.interface';
import * as i0 from "@angular/core";
export declare class PoTableService implements PoTableFilter {
    private http;
    readonly headers: HttpHeaders;
    private url;
    constructor(http: HttpClient);
    getFilteredItems(filteredParams?: PoTableFilteredItemsParams): Observable<any>;
    setUrl(url: string): void;
    scrollListener(componentListner: HTMLElement): Observable<any>;
    private validateParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoTableService>;
}
