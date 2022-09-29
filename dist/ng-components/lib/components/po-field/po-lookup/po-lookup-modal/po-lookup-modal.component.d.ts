import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PoTableColumnSort } from '../../../po-table/interfaces/po-table-column-sort.interface';
import { PoLookupModalBaseComponent } from '../po-lookup-modal/po-lookup-modal-base.component';
import { PoLanguageService } from './../../../../services/po-language/po-language.service';
import { PoDynamicFormComponent } from './../../../po-dynamic/po-dynamic-form/po-dynamic-form.component';
import { PoTableComponent } from './../../../po-table/po-table.component';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @docsExtends PoLookupModalBaseComponent
 */
export declare class PoLookupModalComponent extends PoLookupModalBaseComponent implements OnInit, AfterViewInit {
    private componentFactory;
    poTable: PoTableComponent;
    inputSearchEl: ElementRef;
    container: ViewContainerRef;
    keyUpObservable: Observable<any>;
    containerHeight: number;
    tableHeight: number;
    componentRef: ComponentRef<PoDynamicFormComponent>;
    dynamicForm: NgForm;
    constructor(componentFactory: ComponentFactoryResolver, poLanguage: PoLanguageService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onSelect(item: any): void;
    onUnselect(unselectedItem: any): void;
    onUnselectFromDisclaimer(removedDisclaimer: any): void;
    onAllSelected(items: any): void;
    onAllUnselected(items: any): void;
    initializeEventInput(): void;
    openModal(): void;
    sortBy(sort: PoTableColumnSort): void;
    destroyDynamicForm(): void;
    onAdvancedFilter(): void;
    private setTableHeight;
    private validateEnterPressed;
    private setupModalAdvancedFilter;
    private createDynamicForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLookupModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoLookupModalComponent, "po-lookup-modal", never, {}, {}, never, never, false>;
}