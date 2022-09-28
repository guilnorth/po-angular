/**
 * @usedBy PoSyncConfig, PoNetworkStatus
 *
 * @description
 *
 * Tipos de rede existentes no dispositivo.
 */
export declare enum PoNetworkType {
    /** Define o tipo de rede como desconhecido (`unknown`). */
    unknown = 0,
    /** Define o tipo de rede como `Ethernet`. */
    ethernet = 1,
    /** Define o tipo de rede como `WiFi`. */
    wifi = 2,
    /** Define o tipo de rede como `2G`. */
    _2g = 3,
    /** Define o tipo de rede como `3G`. */
    _3g = 4,
    /** Define o tipo de rede como `4G`. */
    _4g = 5,
    /**
     * Define o tipo de rede como `cellular`. Isso acontece na utilização dos navegadores
     * dentro do dispositvo móvel, com exceção do *web view*.
     */
    cellular = 6,
    /** Define o tipo de rede como `none`. */
    none = 7
}
