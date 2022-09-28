/**
 * @description
 *
 * O pipe po-i18n é responsável por tratar literais parâmetrizadas, dando mais flexibilidade as literais de tradução.
 * O número de parâmetros inseridos nas literais deve coincidir com a quantia de parâmetros passados por parâmetro,
 * os parâmetros serão substituidos de acordo com a ordem informada.
 *
 * Para inserir um parâmetro em uma literal, o mesmo deverá ser inserido entre chaves dentro da literal e posicionado
 * de acordo como deve ser exibido após a sua transformação.
 *
 * ```
 * const i18nPT = {
 *   pagination: 'Página {1} de {2} páginas.',
 *   totalPages: 'Total de {totalPages} encontradas.'
 * };
 * ```
 *
 * É possível passar um valor ou um array de valores para o pipe, caso seja passado um array, os valores devem obedecer a ordem
 * informada na literal.
 *
 * ```
 * {{ i18nPT.pagination | poI18n:[1,10] }}
 * {{ i18nPT.totalPages | poI18n:10 }}
 * ```
 */
export class PoI18nBasePipe {
    transform(value, args) {
        if (!value) {
            return '';
        }
        if (!(args instanceof Array)) {
            args = [args];
        }
        for (const arg of args) {
            value = value.replace(/(\{\w*\})+/, arg);
        }
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taTE4bi1iYXNlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL3NlcnZpY2VzL3BvLWkxOG4vcG8taTE4bi1iYXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gcGlwZSBwby1pMThuIMOpIHJlc3BvbnPDoXZlbCBwb3IgdHJhdGFyIGxpdGVyYWlzIHBhcsOibWV0cml6YWRhcywgZGFuZG8gbWFpcyBmbGV4aWJpbGlkYWRlIGFzIGxpdGVyYWlzIGRlIHRyYWR1w6fDo28uXHJcbiAqIE8gbsO6bWVybyBkZSBwYXLDom1ldHJvcyBpbnNlcmlkb3MgbmFzIGxpdGVyYWlzIGRldmUgY29pbmNpZGlyIGNvbSBhIHF1YW50aWEgZGUgcGFyw6JtZXRyb3MgcGFzc2Fkb3MgcG9yIHBhcsOibWV0cm8sXHJcbiAqIG9zIHBhcsOibWV0cm9zIHNlcsOjbyBzdWJzdGl0dWlkb3MgZGUgYWNvcmRvIGNvbSBhIG9yZGVtIGluZm9ybWFkYS5cclxuICpcclxuICogUGFyYSBpbnNlcmlyIHVtIHBhcsOibWV0cm8gZW0gdW1hIGxpdGVyYWwsIG8gbWVzbW8gZGV2ZXLDoSBzZXIgaW5zZXJpZG8gZW50cmUgY2hhdmVzIGRlbnRybyBkYSBsaXRlcmFsIGUgcG9zaWNpb25hZG9cclxuICogZGUgYWNvcmRvIGNvbW8gZGV2ZSBzZXIgZXhpYmlkbyBhcMOzcyBhIHN1YSB0cmFuc2Zvcm1hw6fDo28uXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBpMThuUFQgPSB7XHJcbiAqICAgcGFnaW5hdGlvbjogJ1DDoWdpbmEgezF9IGRlIHsyfSBww6FnaW5hcy4nLFxyXG4gKiAgIHRvdGFsUGFnZXM6ICdUb3RhbCBkZSB7dG90YWxQYWdlc30gZW5jb250cmFkYXMuJ1xyXG4gKiB9O1xyXG4gKiBgYGBcclxuICpcclxuICogw4kgcG9zc8OtdmVsIHBhc3NhciB1bSB2YWxvciBvdSB1bSBhcnJheSBkZSB2YWxvcmVzIHBhcmEgbyBwaXBlLCBjYXNvIHNlamEgcGFzc2FkbyB1bSBhcnJheSwgb3MgdmFsb3JlcyBkZXZlbSBvYmVkZWNlciBhIG9yZGVtXHJcbiAqIGluZm9ybWFkYSBuYSBsaXRlcmFsLlxyXG4gKlxyXG4gKiBgYGBcclxuICoge3sgaTE4blBULnBhZ2luYXRpb24gfCBwb0kxOG46WzEsMTBdIH19XHJcbiAqIHt7IGkxOG5QVC50b3RhbFBhZ2VzIHwgcG9JMThuOjEwIH19XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvSTE4bkJhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShhcmdzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyhcXHtcXHcqXFx9KSsvLCBhcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19