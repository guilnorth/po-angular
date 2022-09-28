import { Input, Directive } from '@angular/core';
import { PoPageBlockedUserReason } from './enums/po-page-blocked-user-reason.enum';
import * as i0 from "@angular/core";
const PoPageBlockedUserReasonDefault = PoPageBlockedUserReason.None;
const PoPageBlockedUserParamsDefault = { attempts: 5, days: 90, hours: 24 };
/**
 * @description
 *
 * O componente `po-page-blocked-user` é utilizado como template para tela de bloqueio de usuário.
 * É possível definir entre três tipos de telas para alertar o usuário sobre um eventual bloqueio de login.
 *
 * Cada modelo de bloqueio possui uma imagem e texto adequados à situação.
 * Os textos das telas são pré-definidos e imutáveis, porém,
 * é possível estipular parâmetros como dias, horas e tentativas de acesso esgotadas.
 *
 * Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.
 *
 * Para que as imagens sejam exibidas corretamente, é necessário incluir o caminho delas ao projeto. Para isso, edite
 * o *assets* no arquivo **angular.json** da aplicação na seguinte ordem:
 * ```
 *   "assets": [
 *     "src/assets",
 *     "src/favicon.ico",
 *     {
 *       "glob": "**\/*",
 *       "input": "node_modules/@po-ui/style/images",
 *       "output": "assets/images"
 *     }
 *   ]
 * ```
 *
 * _______________
 *
 * #### Praticidade
 * O `po-page-blocked-user`, assim como suas propriedades, pode também ser transmitido diretamente pelas configuraçãos de rota e,
 * desta maneira, dispensa-se qualquer menção e/ou importação no restante da aplicação. O exemplo abaixo exemplifica
 * a forma dinâmica com a qual o template pode ser gerado se navegasse para uma rota denominada como `/access-denied`:
 *
 *
 * ```
 *   import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';
 *
 *   ...
 *   const routes: Routes = [
 *     {
 *       path: 'access-denied', component: PoPageBlockedUserComponent, data: {
 *         contactEmail: 'dev.po@po-ui.com',
 *         contactPhone: '0800 1234 000',
 *         reason: PoPageBlockedUserReason.ExpiredPassword,
 *         urlBack: '/home'
 *       }
 *     }
 *     ...
 *   ];
 *
 *   @NgModule({
 *     imports: [RouterModule.forRoot(routes)],
 *     exports: [RouterModule]
 *   })
 *   export class AppRoutingModule { }
 * ```
 *
 * > É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.
 *
 */
export class PoPageBlockedUserBaseComponent {
    constructor() {
        this._params = { ...PoPageBlockedUserParamsDefault };
        this._reason = PoPageBlockedUserReason.None;
        this._urlBack = '/';
    }
    /**
     * @optional
     *
     * @description
     *
     * Designação de valores usados para a customização da mensagem de bloqueio.
     * Confira abaixo os valores pré-definidos.
     *
     * ```
     *  const customLiterals: PoPageBlockedUserReasonParams = {
     *    attempts: 5,
     *    days: 90,
     *    hours: 24
     *  };
     * ```
     *
     * > Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.
     *
     * > Veja os parâmetros customizáveis na interface `PoPageBlockedUserReasonParams`.
     *
     */
    set params(value) {
        if (value instanceof Object) {
            const keys = Object.keys(value);
            const newParams = { ...PoPageBlockedUserParamsDefault };
            keys.forEach(key => {
                newParams[key] = value[key];
            });
            this._params = newParams;
        }
        else {
            this._params = { ...PoPageBlockedUserParamsDefault };
        }
    }
    get params() {
        return this._params;
    }
    /**
     * @optional
     *
     * @description
     *
     * Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.
     *
     * > Veja os valores válidos no *enum* `PoPageBlockedUserReason`.
     *
     * @default `PoPageBlockedUserReason.None`
     */
    set reason(value) {
        this._reason = Object.values(PoPageBlockedUserReason).includes(value)
            ? value
            : PoPageBlockedUserReasonDefault;
    }
    get reason() {
        return this._reason;
    }
    /**
     * @optional
     *
     * @description
     *
     * URL para a ação de retorno da página.
     *
     * @default `/`
     */
    set urlBack(url) {
        this._urlBack = url;
    }
    get urlBack() {
        return this._urlBack;
    }
}
PoPageBlockedUserBaseComponent.ɵfac = function PoPageBlockedUserBaseComponent_Factory(t) { return new (t || PoPageBlockedUserBaseComponent)(); };
PoPageBlockedUserBaseComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PoPageBlockedUserBaseComponent, inputs: { contactEmail: ["p-contact-email", "contactEmail"], contactPhone: ["p-contact-phone", "contactPhone"], logo: ["p-logo", "logo"], secondaryLogo: ["p-secondary-logo", "secondaryLogo"], params: ["p-params", "params"], reason: ["p-reason", "reason"], urlBack: ["p-url-back", "urlBack"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageBlockedUserBaseComponent, [{
        type: Directive
    }], null, { contactEmail: [{
            type: Input,
            args: ['p-contact-email']
        }], contactPhone: [{
            type: Input,
            args: ['p-contact-phone']
        }], logo: [{
            type: Input,
            args: ['p-logo']
        }], secondaryLogo: [{
            type: Input,
            args: ['p-secondary-logo']
        }], params: [{
            type: Input,
            args: ['p-params']
        }], reason: [{
            type: Input,
            args: ['p-reason']
        }], urlBack: [{
            type: Input,
            args: ['p-url-back']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1ibG9ja2VkLXVzZXItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2UtYmxvY2tlZC11c2VyL3BvLXBhZ2UtYmxvY2tlZC11c2VyLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUduRixNQUFNLDhCQUE4QixHQUE0Qix1QkFBdUIsQ0FBQyxJQUFJLENBQUM7QUFDN0YsTUFBTSw4QkFBOEIsR0FBa0MsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRTNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJERztBQUVILE1BQU0sT0FBTyw4QkFBOEI7SUFEM0M7UUFtQ1UsWUFBTyxHQUFrQyxFQUFFLEdBQUcsOEJBQThCLEVBQUUsQ0FBQztRQUMvRSxZQUFPLEdBQTRCLHVCQUF1QixDQUFDLElBQUksQ0FBQztRQUNoRSxhQUFRLEdBQVcsR0FBRyxDQUFDO0tBK0VoQztJQTdFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDSCxJQUF1QixNQUFNLENBQUMsS0FBb0M7UUFDaEUsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLDhCQUE4QixFQUFFLENBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyw4QkFBOEIsRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILElBQXVCLE1BQU0sQ0FBQyxLQUE4QjtRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDLDhCQUE4QixDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBeUIsT0FBTyxDQUFDLEdBQVc7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs0R0FsSFUsOEJBQThCO2lGQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxTQUFTO2dCQVVrQixZQUFZO2tCQUFyQyxLQUFLO21CQUFDLGlCQUFpQjtZQVdFLFlBQVk7a0JBQXJDLEtBQUs7bUJBQUMsaUJBQWlCO1lBR1AsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBU1ksYUFBYTtrQkFBdkMsS0FBSzttQkFBQyxrQkFBa0I7WUEyQkYsTUFBTTtrQkFBNUIsS0FBSzttQkFBQyxVQUFVO1lBOEJNLE1BQU07a0JBQTVCLEtBQUs7bUJBQUMsVUFBVTtZQW1CUSxPQUFPO2tCQUEvQixLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbiB9IGZyb20gJy4vZW51bXMvcG8tcGFnZS1ibG9ja2VkLXVzZXItcmVhc29uLmVudW0nO1xyXG5pbXBvcnQgeyBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvblBhcmFtcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1wYWdlLWJsb2NrZWQtdXNlci1yZWFzb24tcGFyYW1zLmludGVyZmFjZSc7XHJcblxyXG5jb25zdCBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbkRlZmF1bHQ6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uID0gUG9QYWdlQmxvY2tlZFVzZXJSZWFzb24uTm9uZTtcclxuY29uc3QgUG9QYWdlQmxvY2tlZFVzZXJQYXJhbXNEZWZhdWx0OiBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvblBhcmFtcyA9IHsgYXR0ZW1wdHM6IDUsIGRheXM6IDkwLCBob3VyczogMjQgfTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTyBjb21wb25lbnRlIGBwby1wYWdlLWJsb2NrZWQtdXNlcmAgw6kgdXRpbGl6YWRvIGNvbW8gdGVtcGxhdGUgcGFyYSB0ZWxhIGRlIGJsb3F1ZWlvIGRlIHVzdcOhcmlvLlxyXG4gKiDDiSBwb3Nzw612ZWwgZGVmaW5pciBlbnRyZSB0csOqcyB0aXBvcyBkZSB0ZWxhcyBwYXJhIGFsZXJ0YXIgbyB1c3XDoXJpbyBzb2JyZSB1bSBldmVudHVhbCBibG9xdWVpbyBkZSBsb2dpbi5cclxuICpcclxuICogQ2FkYSBtb2RlbG8gZGUgYmxvcXVlaW8gcG9zc3VpIHVtYSBpbWFnZW0gZSB0ZXh0byBhZGVxdWFkb3Mgw6Agc2l0dWHDp8Ojby5cclxuICogT3MgdGV4dG9zIGRhcyB0ZWxhcyBzw6NvIHByw6ktZGVmaW5pZG9zIGUgaW11dMOhdmVpcywgcG9yw6ltLFxyXG4gKiDDqSBwb3Nzw612ZWwgZXN0aXB1bGFyIHBhcsOibWV0cm9zIGNvbW8gZGlhcywgaG9yYXMgZSB0ZW50YXRpdmFzIGRlIGFjZXNzbyBlc2dvdGFkYXMuXHJcbiAqXHJcbiAqIFBvciBmaW0sIGjDoSBwcm9wcmllZGFkZXMgcGFyYSBhZGnDp8OjbyBkZSB0ZWxlZm9uZSBlL291IGVtYWlsIHBhcmEgY29udGF0byBlIHRhbWLDqW0gYSBkZWZpbmnDp8OjbyBwYXJhIGEgdXJsIGRlIHJldG9ybm8uXHJcbiAqXHJcbiAqIFBhcmEgcXVlIGFzIGltYWdlbnMgc2VqYW0gZXhpYmlkYXMgY29ycmV0YW1lbnRlLCDDqSBuZWNlc3PDoXJpbyBpbmNsdWlyIG8gY2FtaW5obyBkZWxhcyBhbyBwcm9qZXRvLiBQYXJhIGlzc28sIGVkaXRlXHJcbiAqIG8gKmFzc2V0cyogbm8gYXJxdWl2byAqKmFuZ3VsYXIuanNvbioqIGRhIGFwbGljYcOnw6NvIG5hIHNlZ3VpbnRlIG9yZGVtOlxyXG4gKiBgYGBcclxuICogICBcImFzc2V0c1wiOiBbXHJcbiAqICAgICBcInNyYy9hc3NldHNcIixcclxuICogICAgIFwic3JjL2Zhdmljb24uaWNvXCIsXHJcbiAqICAgICB7XHJcbiAqICAgICAgIFwiZ2xvYlwiOiBcIioqXFwvKlwiLFxyXG4gKiAgICAgICBcImlucHV0XCI6IFwibm9kZV9tb2R1bGVzL0Bwby11aS9zdHlsZS9pbWFnZXNcIixcclxuICogICAgICAgXCJvdXRwdXRcIjogXCJhc3NldHMvaW1hZ2VzXCJcclxuICogICAgIH1cclxuICogICBdXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBfX19fX19fX19fX19fX19cclxuICpcclxuICogIyMjIyBQcmF0aWNpZGFkZVxyXG4gKiBPIGBwby1wYWdlLWJsb2NrZWQtdXNlcmAsIGFzc2ltIGNvbW8gc3VhcyBwcm9wcmllZGFkZXMsIHBvZGUgdGFtYsOpbSBzZXIgdHJhbnNtaXRpZG8gZGlyZXRhbWVudGUgcGVsYXMgY29uZmlndXJhw6fDo29zIGRlIHJvdGEgZSxcclxuICogZGVzdGEgbWFuZWlyYSwgZGlzcGVuc2Etc2UgcXVhbHF1ZXIgbWVuw6fDo28gZS9vdSBpbXBvcnRhw6fDo28gbm8gcmVzdGFudGUgZGEgYXBsaWNhw6fDo28uIE8gZXhlbXBsbyBhYmFpeG8gZXhlbXBsaWZpY2FcclxuICogYSBmb3JtYSBkaW7Dom1pY2EgY29tIGEgcXVhbCBvIHRlbXBsYXRlIHBvZGUgc2VyIGdlcmFkbyBzZSBuYXZlZ2Fzc2UgcGFyYSB1bWEgcm90YSBkZW5vbWluYWRhIGNvbW8gYC9hY2Nlc3MtZGVuaWVkYDpcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqICAgaW1wb3J0IHsgUG9QYWdlQmxvY2tlZFVzZXJDb21wb25lbnQsIFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uIH0gZnJvbSAnQHBvLXVpL25nLXRlbXBsYXRlcyc7XHJcbiAqXHJcbiAqICAgLi4uXHJcbiAqICAgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHBhdGg6ICdhY2Nlc3MtZGVuaWVkJywgY29tcG9uZW50OiBQb1BhZ2VCbG9ja2VkVXNlckNvbXBvbmVudCwgZGF0YToge1xyXG4gKiAgICAgICAgIGNvbnRhY3RFbWFpbDogJ2Rldi5wb0Bwby11aS5jb20nLFxyXG4gKiAgICAgICAgIGNvbnRhY3RQaG9uZTogJzA4MDAgMTIzNCAwMDAnLFxyXG4gKiAgICAgICAgIHJlYXNvbjogUG9QYWdlQmxvY2tlZFVzZXJSZWFzb24uRXhwaXJlZFBhc3N3b3JkLFxyXG4gKiAgICAgICAgIHVybEJhY2s6ICcvaG9tZSdcclxuICogICAgICAgfVxyXG4gKiAgICAgfVxyXG4gKiAgICAgLi4uXHJcbiAqICAgXTtcclxuICpcclxuICogICBATmdNb2R1bGUoe1xyXG4gKiAgICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gKiAgICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxuICogICB9KVxyXG4gKiAgIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4gKiBgYGBcclxuICpcclxuICogPiDDiSBlc3NlbmNpYWwgcXVlIHNpZ2EgYSBub21lbmNsYXR1cmEgZG9zIGF0cmlidXRvcyBleGVtcGxpZmljYWRvcyBhY2ltYSBwYXJhIHN1YSBlZmV0aXZhIGZ1bmNpb25hbGlkYWRlLlxyXG4gKlxyXG4gKi9cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VCbG9ja2VkVXNlckJhc2VDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBWYWxvciBwYXJhIG8gZW1haWwgZGUgY29udGF0byBxdWUgZGV2ZSBzZXIgZXhpYmlkby4gQSBhw6fDo28gZXN0w6EgZGUgYWNvcmRvIGNvbSBvIHByb3RvY29sbyBNQUlMVE8gZSDDqSBwb3Nzw612ZWwgZGVmaW5pclxyXG4gICAqIHRhbnRvIHJvdGFzIGludGVybmFzIHF1YW50byBleHRlcm5hcy5cclxuICAgKi9cclxuICBASW5wdXQoJ3AtY29udGFjdC1lbWFpbCcpIGNvbnRhY3RFbWFpbDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogVmFsb3IgcGFyYSBvIHRlbGVmb25lIGRlIGNvbnRhdG8gcXVlIGRldmUgc2VyIGV4aWJpZG8uIEEgYcOnw6NvIGVzdMOhIGRlIGFjb3JkbyBjb20gbyBwcm90b2NvbG8gVEVMLlxyXG4gICAqXHJcbiAgICogPiBBIHByb3ByaWVkYWRlIG7Do28gY29udGVtIHRyYXRhbWVudG8gZGUgbcOhc2NhcmEsIGZpY2EgYSBjcml0w6lyaW8gZG8gZGVzZW52b2x2ZWRvciBkZWZpbmktbGEuXHJcbiAgICovXHJcbiAgQElucHV0KCdwLWNvbnRhY3QtcGhvbmUnKSBjb250YWN0UGhvbmU6IHN0cmluZztcclxuXHJcbiAgLyoqIENhbWluaG8gcGFyYSBhIGxvZ29tYXJjYSBsb2NhbGl6YWRhIG5hIHBhcnRlIHN1cGVyaW9yLCBjYXNvIG7Do28gc2VqYSBkZWZpbmlkYSBvdSBzZWphIGludsOhbGlkYSBhc3N1bWUgYSBsb2dvIHBhZHLDo28gZG8gUE8gVUkuICovXHJcbiAgQElucHV0KCdwLWxvZ28nKSBsb2dvPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQ2FtaW5obyBwYXJhIGEgbG9nb21hcmNhIGxvY2FsaXphZGEgbm8gcm9kYXDDqS5cclxuICAgKi9cclxuICBASW5wdXQoJ3Atc2Vjb25kYXJ5LWxvZ28nKSBzZWNvbmRhcnlMb2dvPzogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9wYXJhbXM6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uUGFyYW1zID0geyAuLi5Qb1BhZ2VCbG9ja2VkVXNlclBhcmFtc0RlZmF1bHQgfTtcclxuICBwcml2YXRlIF9yZWFzb246IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uID0gUG9QYWdlQmxvY2tlZFVzZXJSZWFzb24uTm9uZTtcclxuICBwcml2YXRlIF91cmxCYWNrOiBzdHJpbmcgPSAnLyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBEZXNpZ25hw6fDo28gZGUgdmFsb3JlcyB1c2Fkb3MgcGFyYSBhIGN1c3RvbWl6YcOnw6NvIGRhIG1lbnNhZ2VtIGRlIGJsb3F1ZWlvLlxyXG4gICAqIENvbmZpcmEgYWJhaXhvIG9zIHZhbG9yZXMgcHLDqS1kZWZpbmlkb3MuXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiAgY29uc3QgY3VzdG9tTGl0ZXJhbHM6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uUGFyYW1zID0ge1xyXG4gICAqICAgIGF0dGVtcHRzOiA1LFxyXG4gICAqICAgIGRheXM6IDkwLFxyXG4gICAqICAgIGhvdXJzOiAyNFxyXG4gICAqICB9O1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogPiBTYWxpZW50YW1vcyBhIGltcG9ydMOibmNpYSBlIGF0ZW7Dp8OjbyBwYXJhIGNvbmZpZ3VyYcOnw6NvIGRlc3NlcyB2YWxvcmVzIGNvbmZvcm1lIGRlZmluaWRvcyBubyBwcm9qZXRvLlxyXG4gICAqXHJcbiAgICogPiBWZWphIG9zIHBhcsOibWV0cm9zIGN1c3RvbWl6w6F2ZWlzIG5hIGludGVyZmFjZSBgUG9QYWdlQmxvY2tlZFVzZXJSZWFzb25QYXJhbXNgLlxyXG4gICAqXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXBhcmFtcycpIHNldCBwYXJhbXModmFsdWU6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uUGFyYW1zKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcclxuICAgICAgY29uc3QgbmV3UGFyYW1zID0geyAuLi5Qb1BhZ2VCbG9ja2VkVXNlclBhcmFtc0RlZmF1bHQgfTtcclxuXHJcbiAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIG5ld1BhcmFtc1trZXldID0gdmFsdWVba2V5XTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXdQYXJhbXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wYXJhbXMgPSB7IC4uLlBvUGFnZUJsb2NrZWRVc2VyUGFyYW1zRGVmYXVsdCB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmFtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogRGVmaW5pw6fDo28gZGUgbW90aXZvIGRlIGJsb3F1ZWlvIGRlIHVzdcOhcmlvLiBBcyBpbmZvcm1hw6fDtWVzIG1vZGlmaWNhbSBjb25mb3JtZSBvIG1vdGl2byBzZWxlY2lvbmFkby5cclxuICAgKlxyXG4gICAqID4gVmVqYSBvcyB2YWxvcmVzIHbDoWxpZG9zIG5vICplbnVtKiBgUG9QYWdlQmxvY2tlZFVzZXJSZWFzb25gLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uLk5vbmVgXHJcbiAgICovXHJcbiAgQElucHV0KCdwLXJlYXNvbicpIHNldCByZWFzb24odmFsdWU6IFBvUGFnZUJsb2NrZWRVc2VyUmVhc29uKSB7XHJcbiAgICB0aGlzLl9yZWFzb24gPSAoPGFueT5PYmplY3QpLnZhbHVlcyhQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbikuaW5jbHVkZXModmFsdWUpXHJcbiAgICAgID8gdmFsdWVcclxuICAgICAgOiBQb1BhZ2VCbG9ja2VkVXNlclJlYXNvbkRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVhc29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlYXNvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBVUkwgcGFyYSBhIGHDp8OjbyBkZSByZXRvcm5vIGRhIHDDoWdpbmEuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBgL2BcclxuICAgKi9cclxuICBASW5wdXQoJ3AtdXJsLWJhY2snKSBzZXQgdXJsQmFjayh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXJsQmFjayA9IHVybDtcclxuICB9XHJcblxyXG4gIGdldCB1cmxCYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VybEJhY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ==