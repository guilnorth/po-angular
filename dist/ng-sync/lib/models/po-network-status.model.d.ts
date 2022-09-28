import { PoNetworkType } from './po-network-type.enum';
/**
 * @description
 *
 * Classe responsável por identificar a conexão de rede disponível no dispositivo.
 */
export declare class PoNetworkStatus {
    private _type;
    constructor(networtkType: any);
    /**
     * Retorna se o dispositivo está conectado na rede.
     *
     * @returns {boolean} Status da conexão com a rede.
     */
    get status(): boolean;
    /**
     * Retorna o tipo de conexão do dispositivo.
     *
     * @returns {PoNetworkType} Tipo da conexão com a rede.
     */
    get type(): PoNetworkType;
    set type(type: PoNetworkType);
    private setDefaultTypeNavigation;
    private setNetworkConnection;
}
