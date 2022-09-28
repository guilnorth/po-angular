/**
 * @docsPrivate
 *
 * @description
 *
 * O componente **po-page** é utilizado como container principal para os componentes po-page-header, po-page-content
 * e para as ações dos componentes po-page-edit e po-page-detail.
 *
 * Quando estiver sendo utilizado o componente po-menu junto ao po-page, ambos devem estar no mesmo nível
 * e inseridos em uma div com a classe **po-wrapper**. Esta classe será responsável por fazer os cálculos
 * necessários de alinhamento dos componentes.
 *
 * O componente **po-page** também pode ser utilizado sem o po-menu e neste caso o corpo da página deve ser
 * definido com a altura de 100% para que o po-page maximize seu tamanho.
 * ```
 * html, body {
 *   height:100%;
 * }
 * ```
 */
export class PoPageBaseComponent {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1wYWdlL3BvLXBhZ2UtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0NBQUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRvY3NQcml2YXRlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgKipwby1wYWdlKiogw6kgdXRpbGl6YWRvIGNvbW8gY29udGFpbmVyIHByaW5jaXBhbCBwYXJhIG9zIGNvbXBvbmVudGVzIHBvLXBhZ2UtaGVhZGVyLCBwby1wYWdlLWNvbnRlbnRcclxuICogZSBwYXJhIGFzIGHDp8O1ZXMgZG9zIGNvbXBvbmVudGVzIHBvLXBhZ2UtZWRpdCBlIHBvLXBhZ2UtZGV0YWlsLlxyXG4gKlxyXG4gKiBRdWFuZG8gZXN0aXZlciBzZW5kbyB1dGlsaXphZG8gbyBjb21wb25lbnRlIHBvLW1lbnUganVudG8gYW8gcG8tcGFnZSwgYW1ib3MgZGV2ZW0gZXN0YXIgbm8gbWVzbW8gbsOtdmVsXHJcbiAqIGUgaW5zZXJpZG9zIGVtIHVtYSBkaXYgY29tIGEgY2xhc3NlICoqcG8td3JhcHBlcioqLiBFc3RhIGNsYXNzZSBzZXLDoSByZXNwb25zw6F2ZWwgcG9yIGZhemVyIG9zIGPDoWxjdWxvc1xyXG4gKiBuZWNlc3PDoXJpb3MgZGUgYWxpbmhhbWVudG8gZG9zIGNvbXBvbmVudGVzLlxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgKipwby1wYWdlKiogdGFtYsOpbSBwb2RlIHNlciB1dGlsaXphZG8gc2VtIG8gcG8tbWVudSBlIG5lc3RlIGNhc28gbyBjb3JwbyBkYSBww6FnaW5hIGRldmUgc2VyXHJcbiAqIGRlZmluaWRvIGNvbSBhIGFsdHVyYSBkZSAxMDAlIHBhcmEgcXVlIG8gcG8tcGFnZSBtYXhpbWl6ZSBzZXUgdGFtYW5oby5cclxuICogYGBgXHJcbiAqIGh0bWwsIGJvZHkge1xyXG4gKiAgIGhlaWdodDoxMDAlO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvUGFnZUJhc2VDb21wb25lbnQge31cclxuIl19