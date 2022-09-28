/**
 * @usedBy PoSyncConfig, PoNetworkStatus
 *
 * @description
 *
 * Tipos de rede existentes no dispositivo.
 */
export var PoNetworkType;
(function (PoNetworkType) {
    /** Define o tipo de rede como desconhecido (`unknown`). */
    PoNetworkType[PoNetworkType["unknown"] = 0] = "unknown";
    /** Define o tipo de rede como `Ethernet`. */
    PoNetworkType[PoNetworkType["ethernet"] = 1] = "ethernet";
    /** Define o tipo de rede como `WiFi`. */
    PoNetworkType[PoNetworkType["wifi"] = 2] = "wifi";
    /** Define o tipo de rede como `2G`. */
    PoNetworkType[PoNetworkType["_2g"] = 3] = "_2g";
    /** Define o tipo de rede como `3G`. */
    PoNetworkType[PoNetworkType["_3g"] = 4] = "_3g";
    /** Define o tipo de rede como `4G`. */
    PoNetworkType[PoNetworkType["_4g"] = 5] = "_4g";
    /**
     * Define o tipo de rede como `cellular`. Isso acontece na utilização dos navegadores
     * dentro do dispositvo móvel, com exceção do *web view*.
     */
    PoNetworkType[PoNetworkType["cellular"] = 6] = "cellular";
    /** Define o tipo de rede como `none`. */
    PoNetworkType[PoNetworkType["none"] = 7] = "none";
})(PoNetworkType || (PoNetworkType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbmV0d29yay10eXBlLmVudW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvbW9kZWxzL3BvLW5ldHdvcmstdHlwZS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sQ0FBTixJQUFZLGFBMkJYO0FBM0JELFdBQVksYUFBYTtJQUN2QiwyREFBMkQ7SUFDM0QsdURBQU8sQ0FBQTtJQUVQLDZDQUE2QztJQUM3Qyx5REFBUSxDQUFBO0lBRVIseUNBQXlDO0lBQ3pDLGlEQUFJLENBQUE7SUFFSix1Q0FBdUM7SUFDdkMsK0NBQUcsQ0FBQTtJQUVILHVDQUF1QztJQUN2QywrQ0FBRyxDQUFBO0lBRUgsdUNBQXVDO0lBQ3ZDLCtDQUFHLENBQUE7SUFFSDs7O09BR0c7SUFDSCx5REFBUSxDQUFBO0lBRVIseUNBQXlDO0lBQ3pDLGlEQUFJLENBQUE7QUFDTixDQUFDLEVBM0JXLGFBQWEsS0FBYixhQUFhLFFBMkJ4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAdXNlZEJ5IFBvU3luY0NvbmZpZywgUG9OZXR3b3JrU3RhdHVzXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBUaXBvcyBkZSByZWRlIGV4aXN0ZW50ZXMgbm8gZGlzcG9zaXRpdm8uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGVudW0gUG9OZXR3b3JrVHlwZSB7XHJcbiAgLyoqIERlZmluZSBvIHRpcG8gZGUgcmVkZSBjb21vIGRlc2NvbmhlY2lkbyAoYHVua25vd25gKS4gKi9cclxuICB1bmtub3duLFxyXG5cclxuICAvKiogRGVmaW5lIG8gdGlwbyBkZSByZWRlIGNvbW8gYEV0aGVybmV0YC4gKi9cclxuICBldGhlcm5ldCxcclxuXHJcbiAgLyoqIERlZmluZSBvIHRpcG8gZGUgcmVkZSBjb21vIGBXaUZpYC4gKi9cclxuICB3aWZpLFxyXG5cclxuICAvKiogRGVmaW5lIG8gdGlwbyBkZSByZWRlIGNvbW8gYDJHYC4gKi9cclxuICBfMmcsXHJcblxyXG4gIC8qKiBEZWZpbmUgbyB0aXBvIGRlIHJlZGUgY29tbyBgM0dgLiAqL1xyXG4gIF8zZyxcclxuXHJcbiAgLyoqIERlZmluZSBvIHRpcG8gZGUgcmVkZSBjb21vIGA0R2AuICovXHJcbiAgXzRnLFxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmUgbyB0aXBvIGRlIHJlZGUgY29tbyBgY2VsbHVsYXJgLiBJc3NvIGFjb250ZWNlIG5hIHV0aWxpemHDp8OjbyBkb3MgbmF2ZWdhZG9yZXNcclxuICAgKiBkZW50cm8gZG8gZGlzcG9zaXR2byBtw7N2ZWwsIGNvbSBleGNlw6fDo28gZG8gKndlYiB2aWV3Ki5cclxuICAgKi9cclxuICBjZWxsdWxhcixcclxuXHJcbiAgLyoqIERlZmluZSBvIHRpcG8gZGUgcmVkZSBjb21vIGBub25lYC4gKi9cclxuICBub25lXHJcbn1cclxuIl19