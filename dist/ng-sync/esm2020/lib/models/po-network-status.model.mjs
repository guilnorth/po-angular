import { PoNetworkType } from './po-network-type.enum';
/**
 * @description
 *
 * Classe responsável por identificar a conexão de rede disponível no dispositivo.
 */
export class PoNetworkStatus {
    constructor(networtkType) {
        this.setNetworkConnection(networtkType);
    }
    /**
     * Retorna se o dispositivo está conectado na rede.
     *
     * @returns {boolean} Status da conexão com a rede.
     */
    get status() {
        return this.type !== PoNetworkType.none;
    }
    /**
     * Retorna o tipo de conexão do dispositivo.
     *
     * @returns {PoNetworkType} Tipo da conexão com a rede.
     */
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    /* istanbul ignore next */
    setDefaultTypeNavigation() {
        return navigator.onLine ? PoNetworkType['ethernet'] : PoNetworkType.none;
    }
    setNetworkConnection(networtkType) {
        if (!networtkType) {
            this.type = this.setDefaultTypeNavigation();
        }
        else {
            const isGenerationMobile = ['2g', '3g', '4g'].includes(networtkType);
            this.type = isGenerationMobile ? PoNetworkType['_' + networtkType] : PoNetworkType[String(networtkType)];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmV0d29yay1zdGF0dXMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvbW9kZWxzL3BvLW5ldHdvcmstc3RhdHVzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBWSxZQUFZO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUFtQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsMEJBQTBCO0lBQ2xCLHdCQUF3QjtRQUM5QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDO0lBRU8sb0JBQW9CLENBQUMsWUFBWTtRQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDN0M7YUFBTTtZQUNMLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVyRSxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDMUc7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb05ldHdvcmtUeXBlIH0gZnJvbSAnLi9wby1uZXR3b3JrLXR5cGUuZW51bSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENsYXNzZSByZXNwb25zw6F2ZWwgcG9yIGlkZW50aWZpY2FyIGEgY29uZXjDo28gZGUgcmVkZSBkaXNwb27DrXZlbCBubyBkaXNwb3NpdGl2by5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb05ldHdvcmtTdGF0dXMge1xyXG4gIHByaXZhdGUgX3R5cGU6IFBvTmV0d29ya1R5cGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5ldHdvcnRrVHlwZSkge1xyXG4gICAgdGhpcy5zZXROZXR3b3JrQ29ubmVjdGlvbihuZXR3b3J0a1R5cGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0b3JuYSBzZSBvIGRpc3Bvc2l0aXZvIGVzdMOhIGNvbmVjdGFkbyBuYSByZWRlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFN0YXR1cyBkYSBjb25leMOjbyBjb20gYSByZWRlLlxyXG4gICAqL1xyXG4gIGdldCBzdGF0dXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlICE9PSBQb05ldHdvcmtUeXBlLm5vbmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRvcm5hIG8gdGlwbyBkZSBjb25leMOjbyBkbyBkaXNwb3NpdGl2by5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQb05ldHdvcmtUeXBlfSBUaXBvIGRhIGNvbmV4w6NvIGNvbSBhIHJlZGUuXHJcbiAgICovXHJcbiAgZ2V0IHR5cGUoKTogUG9OZXR3b3JrVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHNldCB0eXBlKHR5cGU6IFBvTmV0d29ya1R5cGUpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBwcml2YXRlIHNldERlZmF1bHRUeXBlTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lID8gUG9OZXR3b3JrVHlwZVsnZXRoZXJuZXQnXSA6IFBvTmV0d29ya1R5cGUubm9uZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TmV0d29ya0Nvbm5lY3Rpb24obmV0d29ydGtUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAoIW5ldHdvcnRrVHlwZSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLnNldERlZmF1bHRUeXBlTmF2aWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaXNHZW5lcmF0aW9uTW9iaWxlID0gWycyZycsICczZycsICc0ZyddLmluY2x1ZGVzKG5ldHdvcnRrVHlwZSk7XHJcblxyXG4gICAgICB0aGlzLnR5cGUgPSBpc0dlbmVyYXRpb25Nb2JpbGUgPyBQb05ldHdvcmtUeXBlWydfJyArIG5ldHdvcnRrVHlwZV0gOiBQb05ldHdvcmtUeXBlW1N0cmluZyhuZXR3b3J0a1R5cGUpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19