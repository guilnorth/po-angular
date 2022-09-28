/**
 * @usedBy PoChartComponent
 *
 * @description
 *
 * *Enum* `PoChartType` para especificação dos tipos de gráficos.
 */
export var PoChartType;
(function (PoChartType) {
    /**
     * Tipo de gráfico que exibe os dados de modo quantitativo, utilizando linhas contínuas demarcadas por pontos para cada valor de série definido.
     * Similar ao gráfico de linha, diferencia-se pela área localizada abaixo da linha das séries, que é preenchida com cores para um destaque explícita da evolução e mudança dos dados.
     */
    PoChartType["Area"] = "area";
    /**
     * Exibe os dados em formato de rosca, dividindo em partes proporcionais.
     */
    PoChartType["Donut"] = "donut";
    /**
     * Exibe os dados em formato circular, dividindo proporcionalmente em fatias.
     */
    PoChartType["Pie"] = "pie";
    /**
     * Gráfico que mostra os dados de modo linear e contínuo. É útil, por exemplo, para fazer comparações de tendência durante determinado período.
     * Pode ser utilizado em conjunto com gráficos dos tipos `column` e `area`, definindo-se o tipo através da propriedade `PoChartSerie.type`.
     */
    PoChartType["Line"] = "line";
    /**
     * Gráfico que exibe os dados em forma de barras verticais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo entre diversas séries.
     * As séries são exibidas lado-a-lado, com um pequeno espaço entre elas.
     */
    PoChartType["Column"] = "column";
    /**
     * Gráfico que exibe os dados em forma de barras horizontais e sua extensão varia de acordo com seus valores. É comumente usado como comparativo de séries e categorias.
     */
    PoChartType["Bar"] = "bar";
})(PoChartType || (PoChartType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtdHlwZS5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWNoYXJ0L2VudW1zL3BvLWNoYXJ0LXR5cGUuZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQU4sSUFBWSxXQWlDWDtBQWpDRCxXQUFZLFdBQVc7SUFDckI7OztPQUdHO0lBQ0gsNEJBQWEsQ0FBQTtJQUViOztPQUVHO0lBQ0gsOEJBQWUsQ0FBQTtJQUVmOztPQUVHO0lBQ0gsMEJBQVcsQ0FBQTtJQUVYOzs7T0FHRztJQUNILDRCQUFhLENBQUE7SUFFYjs7O09BR0c7SUFDSCxnQ0FBaUIsQ0FBQTtJQUVqQjs7T0FFRztJQUNILDBCQUFXLENBQUE7QUFDYixDQUFDLEVBakNXLFdBQVcsS0FBWCxXQUFXLFFBaUN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAdXNlZEJ5IFBvQ2hhcnRDb21wb25lbnRcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqICpFbnVtKiBgUG9DaGFydFR5cGVgIHBhcmEgZXNwZWNpZmljYcOnw6NvIGRvcyB0aXBvcyBkZSBncsOhZmljb3MuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBQb0NoYXJ0VHlwZSB7XHJcbiAgLyoqXHJcbiAgICogVGlwbyBkZSBncsOhZmljbyBxdWUgZXhpYmUgb3MgZGFkb3MgZGUgbW9kbyBxdWFudGl0YXRpdm8sIHV0aWxpemFuZG8gbGluaGFzIGNvbnTDrW51YXMgZGVtYXJjYWRhcyBwb3IgcG9udG9zIHBhcmEgY2FkYSB2YWxvciBkZSBzw6lyaWUgZGVmaW5pZG8uXHJcbiAgICogU2ltaWxhciBhbyBncsOhZmljbyBkZSBsaW5oYSwgZGlmZXJlbmNpYS1zZSBwZWxhIMOhcmVhIGxvY2FsaXphZGEgYWJhaXhvIGRhIGxpbmhhIGRhcyBzw6lyaWVzLCBxdWUgw6kgcHJlZW5jaGlkYSBjb20gY29yZXMgcGFyYSB1bSBkZXN0YXF1ZSBleHBsw61jaXRhIGRhIGV2b2x1w6fDo28gZSBtdWRhbsOnYSBkb3MgZGFkb3MuXHJcbiAgICovXHJcbiAgQXJlYSA9ICdhcmVhJyxcclxuXHJcbiAgLyoqXHJcbiAgICogRXhpYmUgb3MgZGFkb3MgZW0gZm9ybWF0byBkZSByb3NjYSwgZGl2aWRpbmRvIGVtIHBhcnRlcyBwcm9wb3JjaW9uYWlzLlxyXG4gICAqL1xyXG4gIERvbnV0ID0gJ2RvbnV0JyxcclxuXHJcbiAgLyoqXHJcbiAgICogRXhpYmUgb3MgZGFkb3MgZW0gZm9ybWF0byBjaXJjdWxhciwgZGl2aWRpbmRvIHByb3BvcmNpb25hbG1lbnRlIGVtIGZhdGlhcy5cclxuICAgKi9cclxuICBQaWUgPSAncGllJyxcclxuXHJcbiAgLyoqXHJcbiAgICogR3LDoWZpY28gcXVlIG1vc3RyYSBvcyBkYWRvcyBkZSBtb2RvIGxpbmVhciBlIGNvbnTDrW51by4gw4kgw7p0aWwsIHBvciBleGVtcGxvLCBwYXJhIGZhemVyIGNvbXBhcmHDp8O1ZXMgZGUgdGVuZMOqbmNpYSBkdXJhbnRlIGRldGVybWluYWRvIHBlcsOtb2RvLlxyXG4gICAqIFBvZGUgc2VyIHV0aWxpemFkbyBlbSBjb25qdW50byBjb20gZ3LDoWZpY29zIGRvcyB0aXBvcyBgY29sdW1uYCBlIGBhcmVhYCwgZGVmaW5pbmRvLXNlIG8gdGlwbyBhdHJhdsOpcyBkYSBwcm9wcmllZGFkZSBgUG9DaGFydFNlcmllLnR5cGVgLlxyXG4gICAqL1xyXG4gIExpbmUgPSAnbGluZScsXHJcblxyXG4gIC8qKlxyXG4gICAqIEdyw6FmaWNvIHF1ZSBleGliZSBvcyBkYWRvcyBlbSBmb3JtYSBkZSBiYXJyYXMgdmVydGljYWlzIGUgc3VhIGV4dGVuc8OjbyB2YXJpYSBkZSBhY29yZG8gY29tIHNldXMgdmFsb3Jlcy4gw4kgY29tdW1lbnRlIHVzYWRvIGNvbW8gY29tcGFyYXRpdm8gZW50cmUgZGl2ZXJzYXMgc8Opcmllcy5cclxuICAgKiBBcyBzw6lyaWVzIHPDo28gZXhpYmlkYXMgbGFkby1hLWxhZG8sIGNvbSB1bSBwZXF1ZW5vIGVzcGHDp28gZW50cmUgZWxhcy5cclxuICAgKi9cclxuICBDb2x1bW4gPSAnY29sdW1uJyxcclxuXHJcbiAgLyoqXHJcbiAgICogR3LDoWZpY28gcXVlIGV4aWJlIG9zIGRhZG9zIGVtIGZvcm1hIGRlIGJhcnJhcyBob3Jpem9udGFpcyBlIHN1YSBleHRlbnPDo28gdmFyaWEgZGUgYWNvcmRvIGNvbSBzZXVzIHZhbG9yZXMuIMOJIGNvbXVtZW50ZSB1c2FkbyBjb21vIGNvbXBhcmF0aXZvIGRlIHPDqXJpZXMgZSBjYXRlZ29yaWFzLlxyXG4gICAqL1xyXG4gIEJhciA9ICdiYXInXHJcbn1cclxuIl19