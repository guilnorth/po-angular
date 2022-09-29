import { EventEmitter } from '@angular/core';
import { PoDynamicFormField } from './../../../po-dynamic/po-dynamic-form/po-dynamic-form-field.interface';
import { PoComponentInjectorService } from '../../../../services/po-component-injector/po-component-injector.service';
import { PoLookupColumn } from '../../../../components/po-field/po-lookup/interfaces/po-lookup-column.interface';
import { PoLookupFilter } from '../../../../components/po-field/po-lookup/interfaces/po-lookup-filter.interface';
import { PoLookupLiterals } from '../interfaces/po-lookup-literals.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * Serviço responsável por controlar a abertura do componente Po Lookup Modal.
 */
export declare class PoLookupModalService {
    private poComponentInjector;
    selectValueEvent: EventEmitter<any>;
    private componentRef;
    constructor(poComponentInjector: PoComponentInjectorService);
    /**
     * Método responsável por abrir a modal de busca das informações.
     *
     * @param advancedFilters {Array<PoDynamicFormField>} Objeto utilizado para criar o busca avançada.
     * @param service {PoLookupFilter} Serviço responsável por realizar a busca no serviço dos dados.
     * @param columns {Array<PoLookupColumn>} Definição das colunas na modal de busca.
     * @param filterParams {any} Valor que será repassado aos métodos do serviço para auxiliar no filtro dos dados.
     * @param title {string} Definição do título da modal.
     * @param literals {PoLookupLiterals} Literais utilizadas no componente.
     * @param selectedItems {any} Valor que está selecionado que será repassado para o modal para apresentar na tabela.
     * @param fieldLabel {string} Valor que será utilizado como descrição do campo.
     * @param fieldValue {string} Valor que será utilizado como valor do campo.
     * @param changeVisibleColumns {function} Função que será executada quando for alterada a visibilidade das colunas.
     * @param columnRestoreManager {function} Função que será executada quando for restaurar as colunas padrão.
     */
    openModal(params: {
        advancedFilters: Array<PoDynamicFormField>;
        service: PoLookupFilter;
        columns: Array<PoLookupColumn>;
        filterParams: any;
        title: string;
        literals: PoLookupLiterals;
        infiniteScroll: boolean;
        multiple: boolean;
        selectedItems: Array<any>;
        fieldLabel: string;
        fieldValue: string;
        changeVisibleColumns: Function;
        columnRestoreManager: Function;
    }): void;
    selectValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLookupModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoLookupModalService>;
}