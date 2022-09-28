import { Observable } from 'rxjs';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { PoNetworkStatus } from './../../models';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O `PoNetworkService` é utilizado para verificar o status e o tipo da conexão de rede do dispositivo.
 */
export declare class PoNetworkService {
    private networkType;
    private networkTypeNow;
    private poNetworkStatus;
    constructor(network: Network);
    /**
     * Retorna as propriedades tipo e status da conexão do dispositivo no momento da chamada.
     *
     * @returns {PoNetworkStatus} Instância de [PoNetworkStatus](/documentation/po-network-status) com as
     * propriedades da conexão.
     */
    getConnectionStatus(): PoNetworkStatus;
    /**
     * Notifica as mudanças no tipo de conexão de rede do dispositivo.
     *
     * @returns {Observable<{ status: boolean, type: string }>} Observable com as propriedades da conexão.
     */
    onChange(): Observable<{
        status: boolean;
        type: string;
    }>;
    private getNavigatorStatus;
    private initNetwork;
    private initSubscriber;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNetworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoNetworkService>;
}
