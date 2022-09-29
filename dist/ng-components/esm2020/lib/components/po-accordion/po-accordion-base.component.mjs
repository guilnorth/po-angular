/**
 * @description
 *
 * Componente utilizado para agrupar visualmente uma lista de conteúdos, mostrando-os individualmente
 * ao clicar no título de cada item.
 *
 * Para utilizá-lo, é necessário envolver cada item no componente [`po-accordion-item`](/documentation/po-accordion-item),
 * como no exemplo abaixo:
 *
 * ```
 * <po-accordion>
 *   <po-accordion-item p-label="PO Accordion 1">
 *      Accordion 1
 *   </po-accordion-item>
 *
 *   <po-accordion-item p-label="PO Accordion 2">
 *      Accordion 2
 *   </po-accordion-item>
 * </po-accordion>
 * ```
 *
 * O componente já faz o controle de abertura e fechamento dos itens automaticamente.
 *
 * Caso houver a necessidade de abrir algum dos `po-accordion-item` via Typescript
 * acesse a [documentação do PoAccordionItem](/documentation/po-accordion-item).
 */
export class PoAccordionBaseComponent {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tYWNjb3JkaW9uLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWFjY29yZGlvbi9wby1hY2NvcmRpb24tYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO0NBQUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbXBvbmVudGUgdXRpbGl6YWRvIHBhcmEgYWdydXBhciB2aXN1YWxtZW50ZSB1bWEgbGlzdGEgZGUgY29udGXDumRvcywgbW9zdHJhbmRvLW9zIGluZGl2aWR1YWxtZW50ZVxyXG4gKiBhbyBjbGljYXIgbm8gdMOtdHVsbyBkZSBjYWRhIGl0ZW0uXHJcbiAqXHJcbiAqIFBhcmEgdXRpbGl6w6EtbG8sIMOpIG5lY2Vzc8OhcmlvIGVudm9sdmVyIGNhZGEgaXRlbSBubyBjb21wb25lbnRlIFtgcG8tYWNjb3JkaW9uLWl0ZW1gXSgvZG9jdW1lbnRhdGlvbi9wby1hY2NvcmRpb24taXRlbSksXHJcbiAqIGNvbW8gbm8gZXhlbXBsbyBhYmFpeG86XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8cG8tYWNjb3JkaW9uPlxyXG4gKiAgIDxwby1hY2NvcmRpb24taXRlbSBwLWxhYmVsPVwiUE8gQWNjb3JkaW9uIDFcIj5cclxuICogICAgICBBY2NvcmRpb24gMVxyXG4gKiAgIDwvcG8tYWNjb3JkaW9uLWl0ZW0+XHJcbiAqXHJcbiAqICAgPHBvLWFjY29yZGlvbi1pdGVtIHAtbGFiZWw9XCJQTyBBY2NvcmRpb24gMlwiPlxyXG4gKiAgICAgIEFjY29yZGlvbiAyXHJcbiAqICAgPC9wby1hY2NvcmRpb24taXRlbT5cclxuICogPC9wby1hY2NvcmRpb24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgasOhIGZheiBvIGNvbnRyb2xlIGRlIGFiZXJ0dXJhIGUgZmVjaGFtZW50byBkb3MgaXRlbnMgYXV0b21hdGljYW1lbnRlLlxyXG4gKlxyXG4gKiBDYXNvIGhvdXZlciBhIG5lY2Vzc2lkYWRlIGRlIGFicmlyIGFsZ3VtIGRvcyBgcG8tYWNjb3JkaW9uLWl0ZW1gIHZpYSBUeXBlc2NyaXB0XHJcbiAqIGFjZXNzZSBhIFtkb2N1bWVudGHDp8OjbyBkbyBQb0FjY29yZGlvbkl0ZW1dKC9kb2N1bWVudGF0aW9uL3BvLWFjY29yZGlvbi1pdGVtKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb0FjY29yZGlvbkJhc2VDb21wb25lbnQge31cclxuIl19