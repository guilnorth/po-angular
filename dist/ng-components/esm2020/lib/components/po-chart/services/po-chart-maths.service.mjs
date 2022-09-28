import { Injectable } from '@angular/core';
import { PoChartGridLines } from '../helpers/po-chart-default-values.constant';
import { PoChartType } from '../enums/po-chart-type.enum';
import * as i0 from "@angular/core";
export class PoChartMathsService {
    /**
     * Calcula e retorna os válores mínimo e máximo das séries.
     *
     * @param series Lista de séries.
     * @param acceptNegativeValues boolean.
     */
    calculateMinAndMaxValues(series, acceptNegativeValues = true) {
        const minValue = this.getDomain(series, 'min');
        const maxValue = this.getDomain(series, 'max');
        return {
            minValue: !acceptNegativeValues && minValue < 0 ? 0 : minValue,
            maxValue: acceptNegativeValues && maxValue < 0 ? 0 : maxValue
        };
    }
    /**
     * Retorna o valor com maior quantidade de dígitos entre todas as séries.
     * Pode receber uma lista de categorias para o caso de gráfico de barra, ou então a lista de séries se o tipo de gráfico for linha ou coluna.
     *
     * @param data Lista de séries.
     * @param type O tipo do gráfico'.
     * @param options As opções para validação de número de linhas do eixo X'.
     */
    getLongestDataValue(data = [], type, options) {
        if (type === PoChartType.Bar) {
            return this.getLongestData(data);
        }
        else {
            return this.getAxisXLabelLongestValue(data, this.amountOfGridLines(options?.axis));
        }
    }
    /**
     * Retorna o tamanho da série que tiver mais itens.
     *
     * @param series Lista de séries.
     */
    seriesGreaterLength(series) {
        return series.reduce((result, serie) => (result > serie.data.length ? result : serie.data.length), 0);
    }
    /**
     * Retorna o percentual em decimal da série passada pela distância entre os valores mínimos e máximos da série.
     *
     * Se o valor mínimo for negativo o alcance partirá dele como sendo zero %.
     *
     * Por exemplo:
     *    minValue = -10;
     *    maxValue = 0;
     *    serieValue = -8
     *    O resultado será de 0.20;
     *
     * @param minMaxValues Objeto contendo os valores mínimo e máximo de todas as séries.
     * @param serieValue O valor da série.
     */
    getSeriePercentage(minMaxValues, serieValue) {
        const { minValue, maxValue } = minMaxValues;
        const range = maxValue - minValue;
        const displacement = serieValue - minValue;
        const result = displacement / range;
        return isNaN(result) ? 0 : result;
    }
    /**
     * Calcula e retorna uma lista de valores referentes aos textos dos eixos X em relação à quantidade de linhas horizontais.
     *
     * @param minMaxValues Objeto contendo os valores mínimo e máximo de todas as séries.
     * @param gridLines Quantidade de linhas horizontais. Valor default é 5.
     */
    range(minMaxValues, gridLines = 5) {
        const { minValue, maxValue } = minMaxValues;
        const result = [];
        const step = this.getGridLineArea(minMaxValues, gridLines);
        for (let index = minValue; index <= maxValue; index = (index * 10 + step * 10) / 10) {
            result.push(index);
        }
        return result;
    }
    /**
     *
     * Verifica se o valor passado é um Integer ou Float.
     *
     * @param number O valor a ser validado
     */
    verifyIfFloatOrInteger(number) {
        const notABoolean = typeof number !== 'boolean';
        const notInfinity = number !== Infinity;
        const isInteger = Number(number) === number && number % 1 === 0 && notInfinity;
        const isFloat = Number(number) === number && number % 1 !== 0 && notInfinity;
        return (notABoolean && isInteger) || (notABoolean && isFloat);
    }
    amountOfGridLines(options) {
        const gridLines = options?.gridLines ?? PoChartGridLines;
        return gridLines && gridLines >= 2 && gridLines <= 10 ? gridLines : PoChartGridLines;
    }
    getAxisXLabelLongestValue(data, gridLines) {
        const allowNegativeData = data.every(dataItem => dataItem.type === PoChartType.Line);
        const domain = this.calculateMinAndMaxValues(data, allowNegativeData);
        const axisXLabelsList = this.range(domain, gridLines);
        return this.getLongestData(axisXLabelsList);
    }
    // Cálculo que retorna o valor obtido de gridLines em relação ao alcance dos valores mínimos e máximos das séries (maxMinValues)
    getGridLineArea(minMaxValues, gridLines) {
        const percentageValue = this.getFractionFromInt(gridLines - 1);
        const { minValue, maxValue } = minMaxValues;
        const result = (percentageValue * (maxValue - minValue)) / 100;
        return result === 0 ? 1 : result;
    }
    // Retorna o valor máximo ou mínimo das séries baseado no tipo passado(type).
    getDomain(series, type) {
        const result = Math[type](...series.map(serie => {
            if (Array.isArray(serie.data)) {
                return Math[type](...serie.data);
            }
        }));
        return isNaN(result) ? 0 : result;
    }
    // Retorna a fração do número passado referente à quantidade de linhas no eixo X (gridLines)
    getFractionFromInt(value) {
        return (1 / value) * (100 / 1);
    }
    getLongestData(serie) {
        const newSerie = [...serie];
        return newSerie.sort((longest, current) => current.toString().length - longest.toString().length)['0'];
    }
}
PoChartMathsService.ɵfac = function PoChartMathsService_Factory(t) { return new (t || PoChartMathsService)(); };
PoChartMathsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoChartMathsService, factory: PoChartMathsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoChartMathsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tY2hhcnQtbWF0aHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1jaGFydC9zZXJ2aWNlcy9wby1jaGFydC1tYXRocy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQVUxRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCOzs7OztPQUtHO0lBQ0gsd0JBQXdCLENBQUMsTUFBa0IsRUFBRSx1QkFBZ0MsSUFBSTtRQUMvRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsb0JBQW9CLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO1lBQzlELFFBQVEsRUFBRSxvQkFBb0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7U0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsbUJBQW1CLENBQ2pCLE9BQXFDLEVBQUUsRUFDdkMsSUFBaUIsRUFDakIsT0FBdUI7UUFFdkIsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQVMsSUFBcUIsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUEyQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMzRztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsTUFBMkI7UUFDN0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILGtCQUFrQixDQUFDLFlBQWlCLEVBQUUsVUFBa0I7UUFDdEQsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxNQUFNLFlBQVksR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNDLE1BQU0sTUFBTSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFcEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxZQUFpQyxFQUFFLFlBQW9CLENBQUM7UUFDNUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFFNUMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNELEtBQUssSUFBSSxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssSUFBSSxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25GLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQkFBc0IsQ0FBQyxNQUFjO1FBQ25DLE1BQU0sV0FBVyxHQUFHLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBRyxNQUFNLEtBQUssUUFBUSxDQUFDO1FBRXhDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDO1FBQy9FLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDO1FBRTdFLE9BQU8sQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE9BQTJCO1FBQ25ELE1BQU0sU0FBUyxHQUFHLE9BQU8sRUFBRSxTQUFTLElBQUksZ0JBQWdCLENBQUM7UUFFekQsT0FBTyxTQUFTLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZGLENBQUM7SUFFTyx5QkFBeUIsQ0FBQyxJQUF5QixFQUFFLFNBQWlCO1FBQzVFLE1BQU0saUJBQWlCLEdBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlGLE1BQU0sTUFBTSxHQUF3QixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDM0YsTUFBTSxlQUFlLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBUyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0lBQWdJO0lBQ3hILGVBQWUsQ0FBQyxZQUFpQyxFQUFFLFNBQWlCO1FBQzFFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFDNUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFL0QsT0FBTyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkVBQTZFO0lBQ3JFLFNBQVMsQ0FBQyxNQUFrQixFQUFFLElBQVk7UUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN2QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw0RkFBNEY7SUFDcEYsa0JBQWtCLENBQUMsS0FBYTtRQUN0QyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxjQUFjLENBQUksS0FBZTtRQUN2QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7c0ZBcEpVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTt1RkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9DaGFydEdyaWRMaW5lcyB9IGZyb20gJy4uL2hlbHBlcnMvcG8tY2hhcnQtZGVmYXVsdC12YWx1ZXMuY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0VHlwZSB9IGZyb20gJy4uL2VudW1zL3BvLWNoYXJ0LXR5cGUuZW51bSc7XHJcblxyXG5pbXBvcnQgeyBQb0NoYXJ0QXhpc09wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LWF4aXMtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0TWluTWF4VmFsdWVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wby1jaGFydC1taW4tbWF4LXZhbHVlcy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG8tY2hhcnQtb3B0aW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQb0NoYXJ0U2VyaWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvLWNoYXJ0LXNlcmllLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb0NoYXJ0TWF0aHNTZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBDYWxjdWxhIGUgcmV0b3JuYSBvcyB2w6Fsb3JlcyBtw61uaW1vIGUgbcOheGltbyBkYXMgc8Opcmllcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZXJpZXMgTGlzdGEgZGUgc8Opcmllcy5cclxuICAgKiBAcGFyYW0gYWNjZXB0TmVnYXRpdmVWYWx1ZXMgYm9vbGVhbi5cclxuICAgKi9cclxuICBjYWxjdWxhdGVNaW5BbmRNYXhWYWx1ZXMoc2VyaWVzOiBBcnJheTxhbnk+LCBhY2NlcHROZWdhdGl2ZVZhbHVlczogYm9vbGVhbiA9IHRydWUpOiBQb0NoYXJ0TWluTWF4VmFsdWVzIHtcclxuICAgIGNvbnN0IG1pblZhbHVlID0gdGhpcy5nZXREb21haW4oc2VyaWVzLCAnbWluJyk7XHJcbiAgICBjb25zdCBtYXhWYWx1ZSA9IHRoaXMuZ2V0RG9tYWluKHNlcmllcywgJ21heCcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pblZhbHVlOiAhYWNjZXB0TmVnYXRpdmVWYWx1ZXMgJiYgbWluVmFsdWUgPCAwID8gMCA6IG1pblZhbHVlLFxyXG4gICAgICBtYXhWYWx1ZTogYWNjZXB0TmVnYXRpdmVWYWx1ZXMgJiYgbWF4VmFsdWUgPCAwID8gMCA6IG1heFZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBvIHZhbG9yIGNvbSBtYWlvciBxdWFudGlkYWRlIGRlIGTDrWdpdG9zIGVudHJlIHRvZGFzIGFzIHPDqXJpZXMuXHJcbiAgICogUG9kZSByZWNlYmVyIHVtYSBsaXN0YSBkZSBjYXRlZ29yaWFzIHBhcmEgbyBjYXNvIGRlIGdyw6FmaWNvIGRlIGJhcnJhLCBvdSBlbnTDo28gYSBsaXN0YSBkZSBzw6lyaWVzIHNlIG8gdGlwbyBkZSBncsOhZmljbyBmb3IgbGluaGEgb3UgY29sdW5hLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgTGlzdGEgZGUgc8Opcmllcy5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZG8gZ3LDoWZpY28nLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFzIG9ww6fDtWVzIHBhcmEgdmFsaWRhw6fDo28gZGUgbsO6bWVybyBkZSBsaW5oYXMgZG8gZWl4byBYJy5cclxuICAgKi9cclxuICBnZXRMb25nZXN0RGF0YVZhbHVlKFxyXG4gICAgZGF0YTogQXJyYXk8UG9DaGFydFNlcmllIHwgc3RyaW5nPiA9IFtdLFxyXG4gICAgdHlwZTogUG9DaGFydFR5cGUsXHJcbiAgICBvcHRpb25zOiBQb0NoYXJ0T3B0aW9uc1xyXG4gICk6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZSA9PT0gUG9DaGFydFR5cGUuQmFyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldExvbmdlc3REYXRhPHN0cmluZz4oZGF0YSBhcyBBcnJheTxzdHJpbmc+KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEF4aXNYTGFiZWxMb25nZXN0VmFsdWUoZGF0YSBhcyBBcnJheTxQb0NoYXJ0U2VyaWU+LCB0aGlzLmFtb3VudE9mR3JpZExpbmVzKG9wdGlvbnM/LmF4aXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldG9ybmEgbyB0YW1hbmhvIGRhIHPDqXJpZSBxdWUgdGl2ZXIgbWFpcyBpdGVucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZXJpZXMgTGlzdGEgZGUgc8Opcmllcy5cclxuICAgKi9cclxuICBzZXJpZXNHcmVhdGVyTGVuZ3RoKHNlcmllczogQXJyYXk8UG9DaGFydFNlcmllPik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc2VyaWVzLnJlZHVjZSgocmVzdWx0LCBzZXJpZTogYW55KSA9PiAocmVzdWx0ID4gc2VyaWUuZGF0YS5sZW5ndGggPyByZXN1bHQgOiBzZXJpZS5kYXRhLmxlbmd0aCksIDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBvIHBlcmNlbnR1YWwgZW0gZGVjaW1hbCBkYSBzw6lyaWUgcGFzc2FkYSBwZWxhIGRpc3TDom5jaWEgZW50cmUgb3MgdmFsb3JlcyBtw61uaW1vcyBlIG3DoXhpbW9zIGRhIHPDqXJpZS5cclxuICAgKlxyXG4gICAqIFNlIG8gdmFsb3IgbcOtbmltbyBmb3IgbmVnYXRpdm8gbyBhbGNhbmNlIHBhcnRpcsOhIGRlbGUgY29tbyBzZW5kbyB6ZXJvICUuXHJcbiAgICpcclxuICAgKiBQb3IgZXhlbXBsbzpcclxuICAgKiAgICBtaW5WYWx1ZSA9IC0xMDtcclxuICAgKiAgICBtYXhWYWx1ZSA9IDA7XHJcbiAgICogICAgc2VyaWVWYWx1ZSA9IC04XHJcbiAgICogICAgTyByZXN1bHRhZG8gc2Vyw6EgZGUgMC4yMDtcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtaW5NYXhWYWx1ZXMgT2JqZXRvIGNvbnRlbmRvIG9zIHZhbG9yZXMgbcOtbmltbyBlIG3DoXhpbW8gZGUgdG9kYXMgYXMgc8Opcmllcy5cclxuICAgKiBAcGFyYW0gc2VyaWVWYWx1ZSBPIHZhbG9yIGRhIHPDqXJpZS5cclxuICAgKi9cclxuICBnZXRTZXJpZVBlcmNlbnRhZ2UobWluTWF4VmFsdWVzOiBhbnksIHNlcmllVmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB7IG1pblZhbHVlLCBtYXhWYWx1ZSB9ID0gbWluTWF4VmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcclxuICAgIGNvbnN0IGRpc3BsYWNlbWVudCA9IHNlcmllVmFsdWUgLSBtaW5WYWx1ZTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRpc3BsYWNlbWVudCAvIHJhbmdlO1xyXG5cclxuICAgIHJldHVybiBpc05hTihyZXN1bHQpID8gMCA6IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGEgZSByZXRvcm5hIHVtYSBsaXN0YSBkZSB2YWxvcmVzIHJlZmVyZW50ZXMgYW9zIHRleHRvcyBkb3MgZWl4b3MgWCBlbSByZWxhw6fDo28gw6AgcXVhbnRpZGFkZSBkZSBsaW5oYXMgaG9yaXpvbnRhaXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWluTWF4VmFsdWVzIE9iamV0byBjb250ZW5kbyBvcyB2YWxvcmVzIG3DrW5pbW8gZSBtw6F4aW1vIGRlIHRvZGFzIGFzIHPDqXJpZXMuXHJcbiAgICogQHBhcmFtIGdyaWRMaW5lcyBRdWFudGlkYWRlIGRlIGxpbmhhcyBob3Jpem9udGFpcy4gVmFsb3IgZGVmYXVsdCDDqSA1LlxyXG4gICAqL1xyXG4gIHJhbmdlKG1pbk1heFZhbHVlczogUG9DaGFydE1pbk1heFZhbHVlcywgZ3JpZExpbmVzOiBudW1iZXIgPSA1KSB7XHJcbiAgICBjb25zdCB7IG1pblZhbHVlLCBtYXhWYWx1ZSB9ID0gbWluTWF4VmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuZ2V0R3JpZExpbmVBcmVhKG1pbk1heFZhbHVlcywgZ3JpZExpbmVzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IG1pblZhbHVlOyBpbmRleCA8PSBtYXhWYWx1ZTsgaW5kZXggPSAoaW5kZXggKiAxMCArIHN0ZXAgKiAxMCkgLyAxMCkge1xyXG4gICAgICByZXN1bHQucHVzaChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogVmVyaWZpY2Egc2UgbyB2YWxvciBwYXNzYWRvIMOpIHVtIEludGVnZXIgb3UgRmxvYXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbnVtYmVyIE8gdmFsb3IgYSBzZXIgdmFsaWRhZG9cclxuICAgKi9cclxuICB2ZXJpZnlJZkZsb2F0T3JJbnRlZ2VyKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBub3RBQm9vbGVhbiA9IHR5cGVvZiBudW1iZXIgIT09ICdib29sZWFuJztcclxuICAgIGNvbnN0IG5vdEluZmluaXR5ID0gbnVtYmVyICE9PSBJbmZpbml0eTtcclxuXHJcbiAgICBjb25zdCBpc0ludGVnZXIgPSBOdW1iZXIobnVtYmVyKSA9PT0gbnVtYmVyICYmIG51bWJlciAlIDEgPT09IDAgJiYgbm90SW5maW5pdHk7XHJcbiAgICBjb25zdCBpc0Zsb2F0ID0gTnVtYmVyKG51bWJlcikgPT09IG51bWJlciAmJiBudW1iZXIgJSAxICE9PSAwICYmIG5vdEluZmluaXR5O1xyXG5cclxuICAgIHJldHVybiAobm90QUJvb2xlYW4gJiYgaXNJbnRlZ2VyKSB8fCAobm90QUJvb2xlYW4gJiYgaXNGbG9hdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFtb3VudE9mR3JpZExpbmVzKG9wdGlvbnM6IFBvQ2hhcnRBeGlzT3B0aW9ucyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBncmlkTGluZXMgPSBvcHRpb25zPy5ncmlkTGluZXMgPz8gUG9DaGFydEdyaWRMaW5lcztcclxuXHJcbiAgICByZXR1cm4gZ3JpZExpbmVzICYmIGdyaWRMaW5lcyA+PSAyICYmIGdyaWRMaW5lcyA8PSAxMCA/IGdyaWRMaW5lcyA6IFBvQ2hhcnRHcmlkTGluZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEF4aXNYTGFiZWxMb25nZXN0VmFsdWUoZGF0YTogQXJyYXk8UG9DaGFydFNlcmllPiwgZ3JpZExpbmVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgYWxsb3dOZWdhdGl2ZURhdGE6IGJvb2xlYW4gPSBkYXRhLmV2ZXJ5KGRhdGFJdGVtID0+IGRhdGFJdGVtLnR5cGUgPT09IFBvQ2hhcnRUeXBlLkxpbmUpO1xyXG4gICAgY29uc3QgZG9tYWluOiBQb0NoYXJ0TWluTWF4VmFsdWVzID0gdGhpcy5jYWxjdWxhdGVNaW5BbmRNYXhWYWx1ZXMoZGF0YSwgYWxsb3dOZWdhdGl2ZURhdGEpO1xyXG4gICAgY29uc3QgYXhpc1hMYWJlbHNMaXN0OiBBcnJheTxudW1iZXI+ID0gdGhpcy5yYW5nZShkb21haW4sIGdyaWRMaW5lcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9uZ2VzdERhdGE8bnVtYmVyPihheGlzWExhYmVsc0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ8OhbGN1bG8gcXVlIHJldG9ybmEgbyB2YWxvciBvYnRpZG8gZGUgZ3JpZExpbmVzIGVtIHJlbGHDp8OjbyBhbyBhbGNhbmNlIGRvcyB2YWxvcmVzIG3DrW5pbW9zIGUgbcOheGltb3MgZGFzIHPDqXJpZXMgKG1heE1pblZhbHVlcylcclxuICBwcml2YXRlIGdldEdyaWRMaW5lQXJlYShtaW5NYXhWYWx1ZXM6IFBvQ2hhcnRNaW5NYXhWYWx1ZXMsIGdyaWRMaW5lczogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBwZXJjZW50YWdlVmFsdWUgPSB0aGlzLmdldEZyYWN0aW9uRnJvbUludChncmlkTGluZXMgLSAxKTtcclxuICAgIGNvbnN0IHsgbWluVmFsdWUsIG1heFZhbHVlIH0gPSBtaW5NYXhWYWx1ZXM7XHJcbiAgICBjb25zdCByZXN1bHQgPSAocGVyY2VudGFnZVZhbHVlICogKG1heFZhbHVlIC0gbWluVmFsdWUpKSAvIDEwMDtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0ID09PSAwID8gMSA6IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIFJldG9ybmEgbyB2YWxvciBtw6F4aW1vIG91IG3DrW5pbW8gZGFzIHPDqXJpZXMgYmFzZWFkbyBubyB0aXBvIHBhc3NhZG8odHlwZSkuXHJcbiAgcHJpdmF0ZSBnZXREb21haW4oc2VyaWVzOiBBcnJheTxhbnk+LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGhbdHlwZV0oXHJcbiAgICAgIC4uLnNlcmllcy5tYXAoc2VyaWUgPT4ge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlcmllLmRhdGEpKSB7XHJcbiAgICAgICAgICByZXR1cm4gTWF0aFt0eXBlXSguLi5zZXJpZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGlzTmFOKHJlc3VsdCkgPyAwIDogcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0b3JuYSBhIGZyYcOnw6NvIGRvIG7Dum1lcm8gcGFzc2FkbyByZWZlcmVudGUgw6AgcXVhbnRpZGFkZSBkZSBsaW5oYXMgbm8gZWl4byBYIChncmlkTGluZXMpXHJcbiAgcHJpdmF0ZSBnZXRGcmFjdGlvbkZyb21JbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICgxIC8gdmFsdWUpICogKDEwMCAvIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMb25nZXN0RGF0YTxUPihzZXJpZTogQXJyYXk8VD4pOiBUIHtcclxuICAgIGNvbnN0IG5ld1NlcmllID0gWy4uLnNlcmllXTtcclxuICAgIHJldHVybiBuZXdTZXJpZS5zb3J0KChsb25nZXN0LCBjdXJyZW50KSA9PiBjdXJyZW50LnRvU3RyaW5nKCkubGVuZ3RoIC0gbG9uZ2VzdC50b1N0cmluZygpLmxlbmd0aClbJzAnXTtcclxuICB9XHJcbn1cclxuIl19