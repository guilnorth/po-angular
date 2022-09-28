import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PoChartContainerSize } from './interfaces/po-chart-container-size.interface';
import { PoChartType } from './enums/po-chart-type.enum';
import { PoChartOptions } from './interfaces/po-chart-options.interface';
import { PoChartSerie } from './interfaces/po-chart-serie.interface';
import { PoColorService } from '../../services/po-color/po-color.service';
import * as i0 from "@angular/core";
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
export declare abstract class PoChartBaseComponent implements OnChanges {
    protected colorService: PoColorService;
    /** Define o título do gráfico. */
    title?: string;
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
    seriesClick: EventEmitter<PoChartSerie>;
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
    seriesHover: EventEmitter<PoChartSerie>;
    chartSeries: Array<PoChartSerie>;
    chartType: PoChartType;
    svgContainerSize: PoChartContainerSize;
    private _options;
    private _categories;
    private _height;
    private _series;
    private _type;
    private defaultType;
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
    set height(value: number);
    get height(): number;
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
    set type(value: PoChartType);
    get type(): PoChartType;
    /**
     * @description
     *
     * Define os elementos do gráfico que serão criados dinamicamente.
     */
    set series(value: Array<PoChartSerie>);
    get series(): Array<PoChartSerie>;
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
    set categories(value: Array<string>);
    get categories(): Array<string>;
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
    set options(value: PoChartOptions);
    get options(): PoChartOptions;
    constructor(colorService: PoColorService);
    get isTypeCircular(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    onSeriesClick(event: any): void;
    onSeriesHover(event: any): void;
    private setDefaultHeight;
    private transformObjectToArrayObject;
    private setTypeDefault;
    private validateSerieAndAddType;
    private appendColors;
    private appendType;
    abstract rebuildComponentRef(): void;
    protected abstract getSvgContainerSize(): void;
    protected abstract calculateAxisXLabelArea(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoChartBaseComponent, never, never, { "title": "p-title"; "height": "p-height"; "type": "p-type"; "series": "p-series"; "categories": "p-categories"; "options": "p-options"; }, { "seriesClick": "p-series-click"; "seriesHover": "p-series-hover"; }, never, never, false>;
}
