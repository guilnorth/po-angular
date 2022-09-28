import { EventEmitter, Input, Output, Directive } from '@angular/core';
import { convertToInt, isTypeof } from '../../utils/util';
import { PoChartType } from './enums/po-chart-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-color/po-color.service";
const poChartDefaultHeight = 400;
const poChartMinHeight = 200;
/**
 * @description
 *
 * O `po-chart` é um componente para renderização de dados através de gráficos, com isso facilitando a compreensão e tornando a
 * visualização destes dados mais agradável.
 *
 * Através de suas principais propriedades é possível definir atributos, tais como tipo de gráfico, altura, título, cores customizadas, opções para os eixos, entre outros.
 *
 * O componente permite utilizar em conjunto séries do tipo linha e coluna.
 *
 * Além disso, também é possível definir uma ação que será executada ao clicar em determinado elemento do gráfico
 * e outra que será executada ao passar o *mouse* sobre o elemento.
 *
 * #### Guia de uso para Gráficos
 *
 * > Veja nosso [guia de uso para gráficos](/guides/guide-charts) para auxiliar na construção do seu gráfico,
 * informando em qual caso utilizar, o que devemos evitar e boas práticas relacionada a cores.
 */
export class PoChartBaseComponent {
    constructor(colorService) {
        this.colorService = colorService;
        /**
         * @optional
         *
         * @description
         *
         * Evento executado quando o usuário clicar sobre um elemento do gráfico.
         *
         * O evento emitirá o seguinte parâmetro:
         * - *donut* e *pie*: um objeto contendo a categoria e valor da série.
         * - *area*, *line*, *column* e *bar*: um objeto contendo o nome da série, valor e categoria do eixo do gráfico.
         */
        this.seriesClick = new EventEmitter();
        /**
         * @optional
         *
         * @description
         *
         * Evento executado quando o usuário passar o *mouse* sobre um elemento do gráfico.
         *
         * O evento emitirá o seguinte parâmetro de acordo com o tipo de gráfico:
         * - *donut* e *pie*: um objeto contendo a categoria e valor da série.
         * - *area*, *line*, *column* e *bar*: um objeto contendo a categoria, valor da série e categoria do eixo do gráfico.
         */
        this.seriesHover = new EventEmitter();
        // manipulação das séries tratadas internamente para preservar 'p-series';
        this.chartSeries = [];
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do gráfico.
     *
     * > O valor mínimo aceito nesta propriedade é 200.
     *
     * @default `400px`
     */
    set height(value) {
        const intValue = convertToInt(value);
        let height;
        if (isTypeof(value, 'number')) {
            height = intValue <= poChartMinHeight ? poChartMinHeight : intValue;
        }
        else {
            height = this.setDefaultHeight();
        }
        this._height = height;
        this.getSvgContainerSize();
        this.rebuildComponentRef();
    }
    get height() {
        return this._height || this.setDefaultHeight();
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o tipo de gráfico.
     *
     * É possível também combinar gráficos dos tipos linha e coluna. Para isso, opte pela declaração de `type` conforme a interface `PoChartSerie`.
     *
     * > Note que, se houver declaração de tipo de gráfico tanto em `p-type` quanto em `PochartSerie.type`, o valor `{ type }` da primeira série anulará o valor definido em `p-type`.
     *
     * Se não passado valor, o padrão será relativo à primeira série passada em `p-series`:
     * - Se `p-series = [{ data: [1,2,3] }]`: será `PoChartType.Column`.
     * - Se `p-series = [{ data: 1 }]`: será `PoChartType.Pie`.
     *
     * > Veja os valores válidos no *enum* `PoChartType`.
     */
    set type(value) {
        // O Valor default definido em `p-series` de acordo com a primeira série passada.
        this._type = Object.values(PoChartType).includes(value) ? value : undefined;
        this.rebuildComponentRef();
    }
    get type() {
        return this._type;
    }
    /**
     * @description
     *
     * Define os elementos do gráfico que serão criados dinamicamente.
     */
    set series(value) {
        this._series = value || [];
        if (Array.isArray(this._series) && this._series.length) {
            this.setTypeDefault(this._series[0]);
        }
        else {
            this.transformObjectToArrayObject(this.series);
            this.rebuildComponentRef();
        }
    }
    get series() {
        return this._series;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define os nomes das categorias que serão plotadas no eixo X do gráfico caso seja do tipo `bar`, ou então nos eixos Y do grid de gráficos dos tipos `area`, `columnn` e `line`.
     *
     * > Gráficos do tipo `bar` dimensionam a área do gráfico de acordo com a largura do maior texto de categorias. No entanto, é uma boa prática optar por palavras curtas para que a leitura do gráfico não seja prejudicada.
     *
     * > Caso não seja especificado um valor para a categoria, será plotado um hífen na categoria referente a cada série.
     */
    set categories(value) {
        if (Array.isArray(value)) {
            this._categories = value;
        }
    }
    get categories() {
        return this._categories;
    }
    /**
     * @optional
     *
     * @description
     *
     * Objeto com as configurações usadas no `po-chart`.
     *
     * É possível, por exemplo, definir as configurações de exibição das legendas,
     * configurar os eixos(*axis*) para os gráficos dos tipos `area`, `line`, `column` e `bar` da seguinte forma:
     *
     * ```
     *  chartOptions: PoChartOptions = {
     *    legend: true,
     *    axis: {
     *      minRange: 0,
     *      maxRange: 100,
     *      gridLines: 5,
     *    },
     *  };
     * ```
     */
    set options(value) {
        if (value instanceof Object && !(value instanceof Array)) {
            this._options = value;
            if (this._options.hasOwnProperty('legend') && typeof this._options.legend === 'boolean') {
                this.getSvgContainerSize();
            }
        }
    }
    get options() {
        return this._options;
    }
    get isTypeCircular() {
        return this.defaultType === PoChartType.Pie || this.defaultType === PoChartType.Donut;
    }
    ngOnChanges(changes) {
        const isArrayOfseries = Array.isArray(this.series) && this.series.length > 0;
        if ((changes.series && isArrayOfseries) ||
            (changes.type && isArrayOfseries) ||
            (changes.categories && isArrayOfseries)) {
            this.validateSerieAndAddType(this.series);
        }
        if ((changes.type && !this.isTypeCircular) || (changes.categories && !this.isTypeCircular)) {
            this.svgContainerSize = {
                ...this.svgContainerSize,
                axisXLabelWidth: this.calculateAxisXLabelArea()
            };
        }
    }
    onSeriesClick(event) {
        this.seriesClick.emit(event);
    }
    onSeriesHover(event) {
        this.seriesHover.emit(event);
    }
    setDefaultHeight() {
        return poChartDefaultHeight;
    }
    transformObjectToArrayObject(serie) {
        this.chartSeries = typeof serie === 'object' && Object.keys(serie).length ? [{ ...serie }] : [];
    }
    setTypeDefault(serie) {
        const data = serie.data;
        const serieType = Object.values(PoChartType).includes(serie.type) ? serie.type : undefined;
        this.defaultType = serieType ? serieType : Array.isArray(data) ? PoChartType.Column : PoChartType.Pie;
    }
    validateSerieAndAddType(series) {
        const filteredSeries = series.filter(serie => this.isTypeCircular ? typeof serie.data === 'number' : Array.isArray(serie.data));
        this.chartSeries = this.appendType(this.appendColors(filteredSeries));
    }
    appendColors(series) {
        return this.colorService.getColors(series);
    }
    appendType(series) {
        return series.map((serie, index) => {
            if (index === 0) {
                this.chartType = Object.values(PoChartType).includes(serie.type)
                    ? serie.type
                    : this.type || this.defaultType;
            }
            return { ...serie, type: serie.type || this.chartType };
        });
    }
}
PoChartBaseComponent.ɵfac = function PoChartBaseComponent_Factory(t) { return new (t || PoChartBaseComponent)(i0.ɵɵdirectiveInject(i1.PoColorService)); };
PoChartBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoChartBaseComponent, inputs: { title: ["p-title", "title"], height: ["p-height", "height"], type: ["p-type", "type"], series: ["p-series", "series"], categories: ["p-categories", "categories"], options: ["p-options", "options"] }, outputs: { seriesClick: "p-series-click", seriesHover: "p-series-hover" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoColorService }]; }, { title: [{
            type: Input,
            args: ['p-title']
        }], seriesClick: [{
            type: Output,
            args: ['p-series-click']
        }], seriesHover: [{
            type: Output,
            args: ['p-series-hover']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], type: [{
            type: Input,
            args: ['p-type']
        }], series: [{
            type: Input,
            args: ['p-series']
        }], categories: [{
            type: Input,
            args: ['p-categories']
        }], options: [{
            type: Input,
            args: ['p-options']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tY2hhcnQvcG8tY2hhcnQtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUt6RCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztBQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFFSCxNQUFNLE9BQWdCLG9CQUFvQjtJQW9MeEMsWUFBc0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBaExsRDs7Ozs7Ozs7OztXQVVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUUvQzs7Ozs7Ozs7OztXQVVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUUvQywwRUFBMEU7UUFDMUUsZ0JBQVcsR0FBd0IsRUFBRSxDQUFDO0lBbUplLENBQUM7SUF2SXREOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBYTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFjLENBQUM7UUFFbkIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLE1BQU0sR0FBRyxRQUFRLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFn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LENBQUM7b0JBQ3JFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25DO1lBRUQsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3dGQTFQbUIsb0JBQW9CO3VFQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUR6QyxTQUFTO2lFQUdVLEtBQUs7a0JBQXRCLEtBQUs7bUJBQUMsU0FBUztZQWNoQixXQUFXO2tCQURWLE1BQU07bUJBQUMsZ0JBQWdCO1lBZXhCLFdBQVc7a0JBRFYsTUFBTTttQkFBQyxnQkFBZ0I7WUEyQkQsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVO1lBcUNJLElBQUk7a0JBQXhCLEtBQUs7bUJBQUMsUUFBUTtZQWdCUSxNQUFNO2tCQUE1QixLQUFLO21CQUFDLFVBQVU7WUEwQlUsVUFBVTtrQkFBcEMsS0FBSzttQkFBQyxjQUFjO1lBK0JHLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGNvbnZlcnRUb0ludCwgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbmltcG9ydCB7IFBvQ2hhcnRDb250YWluZXJTaXplIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LWNvbnRhaW5lci1zaXplLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRUeXBlIH0gZnJvbSAnLi9lbnVtcy9wby1jaGFydC10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBQb0NoYXJ0T3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jaGFydC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFBvQ2hhcnRTZXJpZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1jaGFydC1zZXJpZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NvbG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BvLWNvbG9yL3BvLWNvbG9yLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgcG9DaGFydERlZmF1bHRIZWlnaHQgPSA0MDA7XHJcbmNvbnN0IHBvQ2hhcnRNaW5IZWlnaHQgPSAyMDA7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIE8gYHBvLWNoYXJ0YCDDqSB1bSBjb21wb25lbnRlIHBhcmEgcmVuZGVyaXphw6fDo28gZGUgZGFkb3MgYXRyYXbDqXMgZGUgZ3LDoWZpY29zLCBjb20gaXNzbyBmYWNpbGl0YW5kbyBhIGNvbXByZWVuc8OjbyBlIHRvcm5hbmRvIGFcclxuICogdmlzdWFsaXphw6fDo28gZGVzdGVzIGRhZG9zIG1haXMgYWdyYWTDoXZlbC5cclxuICpcclxuICogQXRyYXbDqXMgZGUgc3VhcyBwcmluY2lwYWlzIHByb3ByaWVkYWRlcyDDqSBwb3Nzw612ZWwgZGVmaW5pciBhdHJpYnV0b3MsIHRhaXMgY29tbyB0aXBvIGRlIGdyw6FmaWNvLCBhbHR1cmEsIHTDrXR1bG8sIGNvcmVzIGN1c3RvbWl6YWRhcywgb3DDp8O1ZXMgcGFyYSBvcyBlaXhvcywgZW50cmUgb3V0cm9zLlxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgcGVybWl0ZSB1dGlsaXphciBlbSBjb25qdW50byBzw6lyaWVzIGRvIHRpcG8gbGluaGEgZSBjb2x1bmEuXHJcbiAqXHJcbiAqIEFsw6ltIGRpc3NvLCB0YW1iw6ltIMOpIHBvc3PDrXZlbCBkZWZpbmlyIHVtYSBhw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBhbyBjbGljYXIgZW0gZGV0ZXJtaW5hZG8gZWxlbWVudG8gZG8gZ3LDoWZpY29cclxuICogZSBvdXRyYSBxdWUgc2Vyw6EgZXhlY3V0YWRhIGFvIHBhc3NhciBvICptb3VzZSogc29icmUgbyBlbGVtZW50by5cclxuICpcclxuICogIyMjIyBHdWlhIGRlIHVzbyBwYXJhIEdyw6FmaWNvc1xyXG4gKlxyXG4gKiA+IFZlamEgbm9zc28gW2d1aWEgZGUgdXNvIHBhcmEgZ3LDoWZpY29zXSgvZ3VpZGVzL2d1aWRlLWNoYXJ0cykgcGFyYSBhdXhpbGlhciBuYSBjb25zdHJ1w6fDo28gZG8gc2V1IGdyw6FmaWNvLFxyXG4gKiBpbmZvcm1hbmRvIGVtIHF1YWwgY2FzbyB1dGlsaXphciwgbyBxdWUgZGV2ZW1vcyBldml0YXIgZSBib2FzIHByw6F0aWNhcyByZWxhY2lvbmFkYSBhIGNvcmVzLlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb0NoYXJ0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgLyoqIERlZmluZSBvIHTDrXR1bG8gZG8gZ3LDoWZpY28uICovXHJcbiAgQElucHV0KCdwLXRpdGxlJykgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBFdmVudG8gZXhlY3V0YWRvIHF1YW5kbyBvIHVzdcOhcmlvIGNsaWNhciBzb2JyZSB1bSBlbGVtZW50byBkbyBncsOhZmljby5cclxuICAgKlxyXG4gICAqIE8gZXZlbnRvIGVtaXRpcsOhIG8gc2VndWludGUgcGFyw6JtZXRybzpcclxuICAgKiAtICpkb251dCogZSAqcGllKjogdW0gb2JqZXRvIGNvbnRlbmRvIGEgY2F0ZWdvcmlhIGUgdmFsb3IgZGEgc8OpcmllLlxyXG4gICAqIC0gKmFyZWEqLCAqbGluZSosICpjb2x1bW4qIGUgKmJhcio6IHVtIG9iamV0byBjb250ZW5kbyBvIG5vbWUgZGEgc8OpcmllLCB2YWxvciBlIGNhdGVnb3JpYSBkbyBlaXhvIGRvIGdyw6FmaWNvLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ3Atc2VyaWVzLWNsaWNrJylcclxuICBzZXJpZXNDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8UG9DaGFydFNlcmllPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRXZlbnRvIGV4ZWN1dGFkbyBxdWFuZG8gbyB1c3XDoXJpbyBwYXNzYXIgbyAqbW91c2UqIHNvYnJlIHVtIGVsZW1lbnRvIGRvIGdyw6FmaWNvLlxyXG4gICAqXHJcbiAgICogTyBldmVudG8gZW1pdGlyw6EgbyBzZWd1aW50ZSBwYXLDom1ldHJvIGRlIGFjb3JkbyBjb20gbyB0aXBvIGRlIGdyw6FmaWNvOlxyXG4gICAqIC0gKmRvbnV0KiBlICpwaWUqOiB1bSBvYmpldG8gY29udGVuZG8gYSBjYXRlZ29yaWEgZSB2YWxvciBkYSBzw6lyaWUuXHJcbiAgICogLSAqYXJlYSosICpsaW5lKiwgKmNvbHVtbiogZSAqYmFyKjogdW0gb2JqZXRvIGNvbnRlbmRvIGEgY2F0ZWdvcmlhLCB2YWxvciBkYSBzw6lyaWUgZSBjYXRlZ29yaWEgZG8gZWl4byBkbyBncsOhZmljby5cclxuICAgKi9cclxuICBAT3V0cHV0KCdwLXNlcmllcy1ob3ZlcicpXHJcbiAgc2VyaWVzSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBvQ2hhcnRTZXJpZT4oKTtcclxuXHJcbiAgLy8gbWFuaXB1bGHDp8OjbyBkYXMgc8OpcmllcyB0cmF0YWRhcyBpbnRlcm5hbWVudGUgcGFyYSBwcmVzZXJ2YXIgJ3Atc2VyaWVzJztcclxuICBjaGFydFNlcmllczogQXJyYXk8UG9DaGFydFNlcmllPiA9IFtdO1xyXG4gIGNoYXJ0VHlwZTogUG9DaGFydFR5cGU7XHJcbiAgc3ZnQ29udGFpbmVyU2l6ZTogUG9DaGFydENvbnRhaW5lclNpemU7XHJcblxyXG4gIHByaXZhdGUgX29wdGlvbnM6IFBvQ2hhcnRPcHRpb25zO1xyXG4gIHByaXZhdGUgX2NhdGVnb3JpZXM6IEFycmF5PHN0cmluZz47XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc2VyaWVzOiBBcnJheTxQb0NoYXJ0U2VyaWU+O1xyXG4gIHByaXZhdGUgX3R5cGU6IFBvQ2hhcnRUeXBlO1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRUeXBlOiBQb0NoYXJ0VHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIERlZmluZSBhIGFsdHVyYSBkbyBncsOhZmljby5cclxuICAgKlxyXG4gICAqID4gTyB2YWxvciBtw61uaW1vIGFjZWl0byBuZXN0YSBwcm9wcmllZGFkZSDDqSAyMDAuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgNDAwcHhgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWhlaWdodCcpIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgaW50VmFsdWUgPSBjb252ZXJ0VG9JbnQodmFsdWUpO1xyXG4gICAgbGV0IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGlmIChpc1R5cGVvZih2YWx1ZSwgJ251bWJlcicpKSB7XHJcbiAgICAgIGhlaWdodCA9IGludFZhbHVlIDw9IHBvQ2hhcnRNaW5IZWlnaHQgPyBwb0NoYXJ0TWluSGVpZ2h0IDogaW50VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWlnaHQgPSB0aGlzLnNldERlZmF1bHRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5nZXRTdmdDb250YWluZXJTaXplKCk7XHJcbiAgICB0aGlzLnJlYnVpbGRDb21wb25lbnRSZWYoKTtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQgfHwgdGhpcy5zZXREZWZhdWx0SGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gdGlwbyBkZSBncsOhZmljby5cclxuICAgKlxyXG4gICAqIMOJIHBvc3PDrXZlbCB0YW1iw6ltIGNvbWJpbmFyIGdyw6FmaWNvcyBkb3MgdGlwb3MgbGluaGEgZSBjb2x1bmEuIFBhcmEgaXNzbywgb3B0ZSBwZWxhIGRlY2xhcmHDp8OjbyBkZSBgdHlwZWAgY29uZm9ybWUgYSBpbnRlcmZhY2UgYFBvQ2hhcnRTZXJpZWAuXHJcbiAgICpcclxuICAgKiA+IE5vdGUgcXVlLCBzZSBob3V2ZXIgZGVjbGFyYcOnw6NvIGRlIHRpcG8gZGUgZ3LDoWZpY28gdGFudG8gZW0gYHAtdHlwZWAgcXVhbnRvIGVtIGBQb2NoYXJ0U2VyaWUudHlwZWAsIG8gdmFsb3IgYHsgdHlwZSB9YCBkYSBwcmltZWlyYSBzw6lyaWUgYW51bGFyw6EgbyB2YWxvciBkZWZpbmlkbyBlbSBgcC10eXBlYC5cclxuICAgKlxyXG4gICAqIFNlIG7Do28gcGFzc2FkbyB2YWxvciwgbyBwYWRyw6NvIHNlcsOhIHJlbGF0aXZvIMOgIHByaW1laXJhIHPDqXJpZSBwYXNzYWRhIGVtIGBwLXNlcmllc2A6XHJcbiAgICogLSBTZSBgcC1zZXJpZXMgPSBbeyBkYXRhOiBbMSwyLDNdIH1dYDogc2Vyw6EgYFBvQ2hhcnRUeXBlLkNvbHVtbmAuXHJcbiAgICogLSBTZSBgcC1zZXJpZXMgPSBbeyBkYXRhOiAxIH1dYDogc2Vyw6EgYFBvQ2hhcnRUeXBlLlBpZWAuXHJcbiAgICpcclxuICAgKiA+IFZlamEgb3MgdmFsb3JlcyB2w6FsaWRvcyBubyAqZW51bSogYFBvQ2hhcnRUeXBlYC5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtdHlwZScpIHNldCB0eXBlKHZhbHVlOiBQb0NoYXJ0VHlwZSkge1xyXG4gICAgLy8gTyBWYWxvciBkZWZhdWx0IGRlZmluaWRvIGVtIGBwLXNlcmllc2AgZGUgYWNvcmRvIGNvbSBhIHByaW1laXJhIHPDqXJpZSBwYXNzYWRhLlxyXG4gICAgdGhpcy5fdHlwZSA9ICg8YW55Pk9iamVjdCkudmFsdWVzKFBvQ2hhcnRUeXBlKS5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnJlYnVpbGRDb21wb25lbnRSZWYoKTtcclxuICB9XHJcblxyXG4gIGdldCB0eXBlKCk6IFBvQ2hhcnRUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgb3MgZWxlbWVudG9zIGRvIGdyw6FmaWNvIHF1ZSBzZXLDo28gY3JpYWRvcyBkaW5hbWljYW1lbnRlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1zZXJpZXMnKSBzZXQgc2VyaWVzKHZhbHVlOiBBcnJheTxQb0NoYXJ0U2VyaWU+KSB7XHJcbiAgICB0aGlzLl9zZXJpZXMgPSB2YWx1ZSB8fCBbXTtcclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9zZXJpZXMpICYmIHRoaXMuX3Nlcmllcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5zZXRUeXBlRGVmYXVsdCh0aGlzLl9zZXJpZXNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PYmplY3RUb0FycmF5T2JqZWN0KHRoaXMuc2VyaWVzKTtcclxuICAgICAgdGhpcy5yZWJ1aWxkQ29tcG9uZW50UmVmKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VyaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlcmllcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgb3Mgbm9tZXMgZGFzIGNhdGVnb3JpYXMgcXVlIHNlcsOjbyBwbG90YWRhcyBubyBlaXhvIFggZG8gZ3LDoWZpY28gY2FzbyBzZWphIGRvIHRpcG8gYGJhcmAsIG91IGVudMOjbyBub3MgZWl4b3MgWSBkbyBncmlkIGRlIGdyw6FmaWNvcyBkb3MgdGlwb3MgYGFyZWFgLCBgY29sdW1ubmAgZSBgbGluZWAuXHJcbiAgICpcclxuICAgKiA+IEdyw6FmaWNvcyBkbyB0aXBvIGBiYXJgIGRpbWVuc2lvbmFtIGEgw6FyZWEgZG8gZ3LDoWZpY28gZGUgYWNvcmRvIGNvbSBhIGxhcmd1cmEgZG8gbWFpb3IgdGV4dG8gZGUgY2F0ZWdvcmlhcy4gTm8gZW50YW50bywgw6kgdW1hIGJvYSBwcsOhdGljYSBvcHRhciBwb3IgcGFsYXZyYXMgY3VydGFzIHBhcmEgcXVlIGEgbGVpdHVyYSBkbyBncsOhZmljbyBuw6NvIHNlamEgcHJlanVkaWNhZGEuXHJcbiAgICpcclxuICAgKiA+IENhc28gbsOjbyBzZWphIGVzcGVjaWZpY2FkbyB1bSB2YWxvciBwYXJhIGEgY2F0ZWdvcmlhLCBzZXLDoSBwbG90YWRvIHVtIGjDrWZlbiBuYSBjYXRlZ29yaWEgcmVmZXJlbnRlIGEgY2FkYSBzw6lyaWUuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNhdGVnb3JpZXMnKSBzZXQgY2F0ZWdvcmllcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2NhdGVnb3JpZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjYXRlZ29yaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogT2JqZXRvIGNvbSBhcyBjb25maWd1cmHDp8O1ZXMgdXNhZGFzIG5vIGBwby1jaGFydGAuXHJcbiAgICpcclxuICAgKiDDiSBwb3Nzw612ZWwsIHBvciBleGVtcGxvLCBkZWZpbmlyIGFzIGNvbmZpZ3VyYcOnw7VlcyBkZSBleGliacOnw6NvIGRhcyBsZWdlbmRhcyxcclxuICAgKiBjb25maWd1cmFyIG9zIGVpeG9zKCpheGlzKikgcGFyYSBvcyBncsOhZmljb3MgZG9zIHRpcG9zIGBhcmVhYCwgYGxpbmVgLCBgY29sdW1uYCBlIGBiYXJgIGRhIHNlZ3VpbnRlIGZvcm1hOlxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogIGNoYXJ0T3B0aW9uczogUG9DaGFydE9wdGlvbnMgPSB7XHJcbiAgICogICAgbGVnZW5kOiB0cnVlLFxyXG4gICAqICAgIGF4aXM6IHtcclxuICAgKiAgICAgIG1pblJhbmdlOiAwLFxyXG4gICAqICAgICAgbWF4UmFuZ2U6IDEwMCxcclxuICAgKiAgICAgIGdyaWRMaW5lczogNSxcclxuICAgKiAgICB9LFxyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgncC1vcHRpb25zJykgc2V0IG9wdGlvbnModmFsdWU6IFBvQ2hhcnRPcHRpb25zKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLl9vcHRpb25zID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbGVnZW5kJykgJiYgdHlwZW9mIHRoaXMuX29wdGlvbnMubGVnZW5kID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICB0aGlzLmdldFN2Z0NvbnRhaW5lclNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb2xvclNlcnZpY2U6IFBvQ29sb3JTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXQgaXNUeXBlQ2lyY3VsYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VHlwZSA9PT0gUG9DaGFydFR5cGUuUGllIHx8IHRoaXMuZGVmYXVsdFR5cGUgPT09IFBvQ2hhcnRUeXBlLkRvbnV0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNBcnJheU9mc2VyaWVzID0gQXJyYXkuaXNBcnJheSh0aGlzLnNlcmllcykgJiYgdGhpcy5zZXJpZXMubGVuZ3RoID4gMDtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChjaGFuZ2VzLnNlcmllcyAmJiBpc0FycmF5T2ZzZXJpZXMpIHx8XHJcbiAgICAgIChjaGFuZ2VzLnR5cGUgJiYgaXNBcnJheU9mc2VyaWVzKSB8fFxyXG4gICAgICAoY2hhbmdlcy5jYXRlZ29yaWVzICYmIGlzQXJyYXlPZnNlcmllcylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU2VyaWVBbmRBZGRUeXBlKHRoaXMuc2VyaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGNoYW5nZXMudHlwZSAmJiAhdGhpcy5pc1R5cGVDaXJjdWxhcikgfHwgKGNoYW5nZXMuY2F0ZWdvcmllcyAmJiAhdGhpcy5pc1R5cGVDaXJjdWxhcikpIHtcclxuICAgICAgdGhpcy5zdmdDb250YWluZXJTaXplID0ge1xyXG4gICAgICAgIC4uLnRoaXMuc3ZnQ29udGFpbmVyU2l6ZSxcclxuICAgICAgICBheGlzWExhYmVsV2lkdGg6IHRoaXMuY2FsY3VsYXRlQXhpc1hMYWJlbEFyZWEoKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZXJpZXNDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlcmllc0NsaWNrLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TZXJpZXNIb3ZlcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlcmllc0hvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREZWZhdWx0SGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHBvQ2hhcnREZWZhdWx0SGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1PYmplY3RUb0FycmF5T2JqZWN0KHNlcmllKSB7XHJcbiAgICB0aGlzLmNoYXJ0U2VyaWVzID0gdHlwZW9mIHNlcmllID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhzZXJpZSkubGVuZ3RoID8gW3sgLi4uc2VyaWUgfV0gOiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VHlwZURlZmF1bHQoc2VyaWU6IFBvQ2hhcnRTZXJpZSkge1xyXG4gICAgY29uc3QgZGF0YSA9IHNlcmllLmRhdGE7XHJcbiAgICBjb25zdCBzZXJpZVR5cGUgPSAoPGFueT5PYmplY3QpLnZhbHVlcyhQb0NoYXJ0VHlwZSkuaW5jbHVkZXMoc2VyaWUudHlwZSkgPyBzZXJpZS50eXBlIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBzZXJpZVR5cGUgPyBzZXJpZVR5cGUgOiBBcnJheS5pc0FycmF5KGRhdGEpID8gUG9DaGFydFR5cGUuQ29sdW1uIDogUG9DaGFydFR5cGUuUGllO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVNlcmllQW5kQWRkVHlwZShzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkU2VyaWVzID0gc2VyaWVzLmZpbHRlcihzZXJpZSA9PlxyXG4gICAgICB0aGlzLmlzVHlwZUNpcmN1bGFyID8gdHlwZW9mIHNlcmllLmRhdGEgPT09ICdudW1iZXInIDogQXJyYXkuaXNBcnJheShzZXJpZS5kYXRhKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNoYXJ0U2VyaWVzID0gdGhpcy5hcHBlbmRUeXBlKHRoaXMuYXBwZW5kQ29sb3JzKGZpbHRlcmVkU2VyaWVzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFwcGVuZENvbG9ycyhzZXJpZXM6IEFycmF5PFBvQ2hhcnRTZXJpZT4pIHtcclxuICAgIHJldHVybiB0aGlzLmNvbG9yU2VydmljZS5nZXRDb2xvcnM8UG9DaGFydFNlcmllPihzZXJpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBlbmRUeXBlKHNlcmllczogQXJyYXk8UG9DaGFydFNlcmllPikge1xyXG4gICAgcmV0dXJuIHNlcmllcy5tYXAoKHNlcmllLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9ICg8YW55Pk9iamVjdCkudmFsdWVzKFBvQ2hhcnRUeXBlKS5pbmNsdWRlcyhzZXJpZS50eXBlKVxyXG4gICAgICAgICAgPyBzZXJpZS50eXBlXHJcbiAgICAgICAgICA6IHRoaXMudHlwZSB8fCB0aGlzLmRlZmF1bHRUeXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zZXJpZSwgdHlwZTogc2VyaWUudHlwZSB8fCB0aGlzLmNoYXJ0VHlwZSB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCByZWJ1aWxkQ29tcG9uZW50UmVmKCk6IHZvaWQ7XHJcblxyXG4gIC8vIHbDoWxpZG8gcGFyYSBncsOhZmljb3MgZG8gdGlwbyBjaXJjdWxhciBlIHF1ZSBzZXLDoSByZWZhdG9yYWRvLlxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTdmdDb250YWluZXJTaXplKCk6IHZvaWQ7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNhbGN1bGF0ZUF4aXNYTGFiZWxBcmVhKCk6IG51bWJlcjtcclxufVxyXG4iXX0=