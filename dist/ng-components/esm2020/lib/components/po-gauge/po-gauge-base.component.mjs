import { Input, Directive } from '@angular/core';
import { convertToInt } from '../../utils/util';
import { poGaugeMinHeight } from './po-gauge-default-values.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../services/po-color/po-color.service";
/**
 * @description
 *
 * O componente `po-gauge` provê a representação de um valor através de um arco. É muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
 * O `po-gauge` possui dois tipos de tratamentos:
 * - É possível demonstrar um dado percentual simples em conjunto com uma descrição resumida em seu interior;
 * - Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado.
 *
 * #### Guia de uso para Gráficos
 *
 * > Veja nosso [guia de uso para gráficos](/guides/guide-charts) para auxiliar na construção do seu gráfico,
 * informando em qual caso utilizar, o que devemos evitar e boas práticas relacionada a cores.
 */
export class PoGaugeBaseComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this._height = poGaugeMinHeight;
        this._ranges = [];
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o texto que será exibido no gauge.
     * Há dois posicionamentos para ele:
     * - Se houver definição para `p-ranges`, o descritivo será exibido no topo do container, ficando acima do gauge;
     * - Na ausência de `p-ranges`, será incorporado dentro do arco do gauge, e abaixo de `p-value`.
     *
     * Para ambos os casos, se o conteúdo ultrapassar a área designada, serão geradas automaticamente reticências.
     * No entanto, será possível visualizar a mensagem através de um tooltip no passar do mouse sobre o texto.
     *
     * > Para uma melhor experiência do usuário, é recomendado um descritivo breve e com poucas palavras.
     * Desta forma evita-se o *overflow* do texto.
     */
    set description(value) {
        this._description = value;
        this.svgContainerSize();
    }
    get description() {
        return this._description;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define a altura do gauge.
     *
     * O valor mínimo aceito é 300px.
     *
     * @default `300px`
     */
    set height(value) {
        this._height = this.setGaugeHeight(value);
        this.svgContainerSize();
    }
    get height() {
        return this._height;
    }
    /**
     * @optional
     *
     * @description
     *
     * Definição para o alcance de cores. Ao adicionar pelo menos um item na lista,
     * incorpora-se o ponteiro que assinala o valor passado em `p-value`.
     * Se o valor de `p-value` for inferior ao mínimo valor definido em `PoGaugeRanges.from`, o domínio mínimo do gauge será `p-value`.
     * A mesma regra prevalece para valores máximos.
     */
    set ranges(value) {
        this._ranges = Array.isArray(value) ? this.verifyColors(value) : [];
        this.svgContainerSize();
    }
    get ranges() {
        return this._ranges;
    }
    /**
     * @optional
     *
     * @description
     *
     * Define o título do gauge.
     */
    set title(value) {
        this._title = value;
        this.svgContainerSize();
    }
    get title() {
        return this._title;
    }
    /**
     * @optional
     *
     * @description
     *
     * Valor referente ao valor da série. Seu comportamento segue a seguintes regras:
     *
     * - Sem `p-ranges`: Os valores passados para `p-value` e `p-description` serão centralizados no interior do arco.
     * A base do valor será percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
     * A colorização do gauge será completa e o valor passado será exibido no interior do arco.
     * - Com `p-ranges`: A descrição será exibida acima do gauge e haverá um ponteiro marcando o valor passado em `p-value`.
     * Considerando que o alcance em `ranges` é aberto, então a escala de `p-value` será em relação ao menor/maior alcance
     * absoluto definido em `p-ranges`.
     * Se passado um `p-value` inferior em relação ao mínimo valor definido em `p-ranges`, o domínio mínimo do gauge partirá de `p-value`.
     * A mesma regra prevalece para valores máximos.
     *
     */
    set value(gaugeValue) {
        if (typeof gaugeValue === 'number' || (typeof gaugeValue === 'string' && gaugeValue.trim())) {
            const value = !isNaN(gaugeValue) ? Number(gaugeValue) : undefined;
            this._value = value;
        }
        else {
            this._value = undefined;
        }
    }
    get value() {
        return this._value;
    }
    verifyColors(ranges) {
        return this.colorService.getColors(ranges);
    }
    setGaugeHeight(height) {
        const gaugeHeight = convertToInt(height);
        return gaugeHeight && gaugeHeight > poGaugeMinHeight ? gaugeHeight : poGaugeMinHeight;
    }
}
PoGaugeBaseComponent.ɵfac = function PoGaugeBaseComponent_Factory(t) { return new (t || PoGaugeBaseComponent)(i0.ɵɵdirectiveInject(i1.PoColorService)); };
PoGaugeBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoGaugeBaseComponent, inputs: { description: ["p-description", "description"], height: ["p-height", "height"], ranges: ["p-ranges", "ranges"], title: ["p-title", "title"], value: ["p-value", "value"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoGaugeBaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.PoColorService }]; }, { description: [{
            type: Input,
            args: ['p-description']
        }], height: [{
            type: Input,
            args: ['p-height']
        }], ranges: [{
            type: Input,
            args: ['p-ranges']
        }], title: [{
            type: Input,
            args: ['p-title']
        }], value: [{
            type: Input,
            args: ['p-value']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tZ2F1Z2UtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS9zcmMvbGliL2NvbXBvbmVudHMvcG8tZ2F1Z2UvcG8tZ2F1Z2UtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFNdEU7Ozs7Ozs7Ozs7OztHQVlHO0FBRUgsTUFBTSxPQUFnQixvQkFBb0I7SUF3SHhDLFlBQXNCLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQXRIMUMsWUFBTyxHQUFXLGdCQUFnQixDQUFDO1FBQ25DLFlBQU8sR0FBeUIsRUFBRSxDQUFDO0lBcUhVLENBQUM7SUFqSHREOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNILElBQTRCLFdBQVcsQ0FBQyxLQUFhO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBdUIsTUFBTSxDQUFDLEtBQTJCO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQXNCLEtBQUssQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHO0lBQ0gsSUFBc0IsS0FBSyxDQUFDLFVBQWtCO1FBQzVDLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFhLFVBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ3JHLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUVsRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFJTyxZQUFZLENBQUMsTUFBNEI7UUFDL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBZ0IsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLGNBQWMsQ0FBQyxNQUFjO1FBQ25DLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QyxPQUFPLFdBQVcsSUFBSSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDeEYsQ0FBQzs7d0ZBbEltQixvQkFBb0I7dUVBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRHpDLFNBQVM7aUVBd0JvQixXQUFXO2tCQUF0QyxLQUFLO21CQUFDLGVBQWU7WUFxQkMsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVO1lBbUJNLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQWdCSyxLQUFLO2tCQUExQixLQUFLO21CQUFDLFNBQVM7WUEyQk0sS0FBSztrQkFBMUIsS0FBSzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgY29udmVydFRvSW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IHBvR2F1Z2VNaW5IZWlnaHQgfSBmcm9tICcuL3BvLWdhdWdlLWRlZmF1bHQtdmFsdWVzLmNvbnN0YW50JztcclxuXHJcbmltcG9ydCB7IFBvQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcG8tY29sb3IvcG8tY29sb3Iuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQb0dhdWdlUmFuZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWdhdWdlLXJhbmdlcy5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPIGNvbXBvbmVudGUgYHBvLWdhdWdlYCBwcm92w6ogYSByZXByZXNlbnRhw6fDo28gZGUgdW0gdmFsb3IgYXRyYXbDqXMgZGUgdW0gYXJjby4gw4kgbXVpdG8gY29tdW0sIHBvciBleGVtcGxvLCBwYXJhIGRlbW9uc3RyYXIgbyBkZXNlbXBlbmhvIG91IHByb2dyZXNzbyBkZSBhbGdvLlxyXG4gKiBPIGBwby1nYXVnZWAgcG9zc3VpIGRvaXMgdGlwb3MgZGUgdHJhdGFtZW50b3M6XHJcbiAqIC0gw4kgcG9zc8OtdmVsIGRlbW9uc3RyYXIgdW0gZGFkbyBwZXJjZW50dWFsIHNpbXBsZXMgZW0gY29uanVudG8gY29tIHVtYSBkZXNjcmnDp8OjbyByZXN1bWlkYSBlbSBzZXUgaW50ZXJpb3I7XHJcbiAqIC0gUGFyYSB1bSBkZW1vbnN0cmF0aXZvIG1haXMgZWxhYm9yYWRvLCBjb25zZWd1ZS1zZSBkZWZpbmlyIGFsY2FuY2VzIGVtIGNvcmVzLCB1bSBicmV2ZSB0ZXh0byBkZXNjcml0aXZvIGUgdW0gcG9udGVpcm8gaW5kaWNhbmRvIG8gdmFsb3IgZGVzZWphZG8uXHJcbiAqXHJcbiAqICMjIyMgR3VpYSBkZSB1c28gcGFyYSBHcsOhZmljb3NcclxuICpcclxuICogPiBWZWphIG5vc3NvIFtndWlhIGRlIHVzbyBwYXJhIGdyw6FmaWNvc10oL2d1aWRlcy9ndWlkZS1jaGFydHMpIHBhcmEgYXV4aWxpYXIgbmEgY29uc3RydcOnw6NvIGRvIHNldSBncsOhZmljbyxcclxuICogaW5mb3JtYW5kbyBlbSBxdWFsIGNhc28gdXRpbGl6YXIsIG8gcXVlIGRldmVtb3MgZXZpdGFyIGUgYm9hcyBwcsOhdGljYXMgcmVsYWNpb25hZGEgYSBjb3Jlcy5cclxuICovXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9HYXVnZUJhc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgPSBwb0dhdWdlTWluSGVpZ2h0O1xyXG4gIHByaXZhdGUgX3JhbmdlczogQXJyYXk8UG9HYXVnZVJhbmdlcz4gPSBbXTtcclxuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmUgbyB0ZXh0byBxdWUgc2Vyw6EgZXhpYmlkbyBubyBnYXVnZS5cclxuICAgKiBIw6EgZG9pcyBwb3NpY2lvbmFtZW50b3MgcGFyYSBlbGU6XHJcbiAgICogLSBTZSBob3V2ZXIgZGVmaW5pw6fDo28gcGFyYSBgcC1yYW5nZXNgLCBvIGRlc2NyaXRpdm8gc2Vyw6EgZXhpYmlkbyBubyB0b3BvIGRvIGNvbnRhaW5lciwgZmljYW5kbyBhY2ltYSBkbyBnYXVnZTtcclxuICAgKiAtIE5hIGF1c8OqbmNpYSBkZSBgcC1yYW5nZXNgLCBzZXLDoSBpbmNvcnBvcmFkbyBkZW50cm8gZG8gYXJjbyBkbyBnYXVnZSwgZSBhYmFpeG8gZGUgYHAtdmFsdWVgLlxyXG4gICAqXHJcbiAgICogUGFyYSBhbWJvcyBvcyBjYXNvcywgc2UgbyBjb250ZcO6ZG8gdWx0cmFwYXNzYXIgYSDDoXJlYSBkZXNpZ25hZGEsIHNlcsOjbyBnZXJhZGFzIGF1dG9tYXRpY2FtZW50ZSByZXRpY8OqbmNpYXMuXHJcbiAgICogTm8gZW50YW50bywgc2Vyw6EgcG9zc8OtdmVsIHZpc3VhbGl6YXIgYSBtZW5zYWdlbSBhdHJhdsOpcyBkZSB1bSB0b29sdGlwIG5vIHBhc3NhciBkbyBtb3VzZSBzb2JyZSBvIHRleHRvLlxyXG4gICAqXHJcbiAgICogPiBQYXJhIHVtYSBtZWxob3IgZXhwZXJpw6puY2lhIGRvIHVzdcOhcmlvLCDDqSByZWNvbWVuZGFkbyB1bSBkZXNjcml0aXZvIGJyZXZlIGUgY29tIHBvdWNhcyBwYWxhdnJhcy5cclxuICAgKiBEZXN0YSBmb3JtYSBldml0YS1zZSBvICpvdmVyZmxvdyogZG8gdGV4dG8uXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWRlc2NyaXB0aW9uJykgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5zdmdDb250YWluZXJTaXplKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIGEgYWx0dXJhIGRvIGdhdWdlLlxyXG4gICAqXHJcbiAgICogTyB2YWxvciBtw61uaW1vIGFjZWl0byDDqSAzMDBweC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGAzMDBweGBcclxuICAgKi9cclxuICBASW5wdXQoJ3AtaGVpZ2h0Jykgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLnNldEdhdWdlSGVpZ2h0KHZhbHVlKTtcclxuICAgIHRoaXMuc3ZnQ29udGFpbmVyU2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZWZpbmnDp8OjbyBwYXJhIG8gYWxjYW5jZSBkZSBjb3Jlcy4gQW8gYWRpY2lvbmFyIHBlbG8gbWVub3MgdW0gaXRlbSBuYSBsaXN0YSxcclxuICAgKiBpbmNvcnBvcmEtc2UgbyBwb250ZWlybyBxdWUgYXNzaW5hbGEgbyB2YWxvciBwYXNzYWRvIGVtIGBwLXZhbHVlYC5cclxuICAgKiBTZSBvIHZhbG9yIGRlIGBwLXZhbHVlYCBmb3IgaW5mZXJpb3IgYW8gbcOtbmltbyB2YWxvciBkZWZpbmlkbyBlbSBgUG9HYXVnZVJhbmdlcy5mcm9tYCwgbyBkb23DrW5pbyBtw61uaW1vIGRvIGdhdWdlIHNlcsOhIGBwLXZhbHVlYC5cclxuICAgKiBBIG1lc21hIHJlZ3JhIHByZXZhbGVjZSBwYXJhIHZhbG9yZXMgbcOheGltb3MuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJhbmdlcycpIHNldCByYW5nZXModmFsdWU6IEFycmF5PFBvR2F1Z2VSYW5nZXM+KSB7XHJcbiAgICB0aGlzLl9yYW5nZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHRoaXMudmVyaWZ5Q29sb3JzKHZhbHVlKSA6IFtdO1xyXG4gICAgdGhpcy5zdmdDb250YWluZXJTaXplKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2VzKCk6IEFycmF5PFBvR2F1Z2VSYW5nZXM+IHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5lIG8gdMOtdHVsbyBkbyBnYXVnZS5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtdGl0bGUnKSBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnN2Z0NvbnRhaW5lclNpemUoKTtcclxuICB9XHJcblxyXG4gIGdldCB0aXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBWYWxvciByZWZlcmVudGUgYW8gdmFsb3IgZGEgc8OpcmllLiBTZXUgY29tcG9ydGFtZW50byBzZWd1ZSBhIHNlZ3VpbnRlcyByZWdyYXM6XHJcbiAgICpcclxuICAgKiAtIFNlbSBgcC1yYW5nZXNgOiBPcyB2YWxvcmVzIHBhc3NhZG9zIHBhcmEgYHAtdmFsdWVgIGUgYHAtZGVzY3JpcHRpb25gIHNlcsOjbyBjZW50cmFsaXphZG9zIG5vIGludGVyaW9yIGRvIGFyY28uXHJcbiAgICogQSBiYXNlIGRvIHZhbG9yIHNlcsOhIHBlcmNlbnR1YWwgdGVuZG8gY29tbyBiYXNlIG9zIGFsY2FuY2VzIGVudHJlIHplcm8gZSAxMDAlLiBTZSBwYXNzYWRvIHVtIHZhbG9yIHN1cGVyaW9yIGEgMTAwLFxyXG4gICAqIEEgY29sb3JpemHDp8OjbyBkbyBnYXVnZSBzZXLDoSBjb21wbGV0YSBlIG8gdmFsb3IgcGFzc2FkbyBzZXLDoSBleGliaWRvIG5vIGludGVyaW9yIGRvIGFyY28uXHJcbiAgICogLSBDb20gYHAtcmFuZ2VzYDogQSBkZXNjcmnDp8OjbyBzZXLDoSBleGliaWRhIGFjaW1hIGRvIGdhdWdlIGUgaGF2ZXLDoSB1bSBwb250ZWlybyBtYXJjYW5kbyBvIHZhbG9yIHBhc3NhZG8gZW0gYHAtdmFsdWVgLlxyXG4gICAqIENvbnNpZGVyYW5kbyBxdWUgbyBhbGNhbmNlIGVtIGByYW5nZXNgIMOpIGFiZXJ0bywgZW50w6NvIGEgZXNjYWxhIGRlIGBwLXZhbHVlYCBzZXLDoSBlbSByZWxhw6fDo28gYW8gbWVub3IvbWFpb3IgYWxjYW5jZVxyXG4gICAqIGFic29sdXRvIGRlZmluaWRvIGVtIGBwLXJhbmdlc2AuXHJcbiAgICogU2UgcGFzc2FkbyB1bSBgcC12YWx1ZWAgaW5mZXJpb3IgZW0gcmVsYcOnw6NvIGFvIG3DrW5pbW8gdmFsb3IgZGVmaW5pZG8gZW0gYHAtcmFuZ2VzYCwgbyBkb23DrW5pbyBtw61uaW1vIGRvIGdhdWdlIHBhcnRpcsOhIGRlIGBwLXZhbHVlYC5cclxuICAgKiBBIG1lc21hIHJlZ3JhIHByZXZhbGVjZSBwYXJhIHZhbG9yZXMgbcOheGltb3MuXHJcbiAgICpcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdmFsdWUnKSBzZXQgdmFsdWUoZ2F1Z2VWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGdhdWdlVmFsdWUgPT09ICdudW1iZXInIHx8ICh0eXBlb2YgZ2F1Z2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgKDxzdHJpbmc+Z2F1Z2VWYWx1ZSkudHJpbSgpKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9ICFpc05hTihnYXVnZVZhbHVlKSA/IE51bWJlcihnYXVnZVZhbHVlKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbG9yU2VydmljZTogUG9Db2xvclNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgdmVyaWZ5Q29sb3JzKHJhbmdlczogQXJyYXk8UG9HYXVnZVJhbmdlcz4pIHtcclxuICAgIHJldHVybiB0aGlzLmNvbG9yU2VydmljZS5nZXRDb2xvcnM8UG9HYXVnZVJhbmdlcz4ocmFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0R2F1Z2VIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZ2F1Z2VIZWlnaHQgPSBjb252ZXJ0VG9JbnQoaGVpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4gZ2F1Z2VIZWlnaHQgJiYgZ2F1Z2VIZWlnaHQgPiBwb0dhdWdlTWluSGVpZ2h0ID8gZ2F1Z2VIZWlnaHQgOiBwb0dhdWdlTWluSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHN2Z0NvbnRhaW5lclNpemUoKTogdm9pZDtcclxufVxyXG4iXX0=