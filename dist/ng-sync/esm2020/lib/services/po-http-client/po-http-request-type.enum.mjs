/**
 * @usedBy PoHttpClientService, PoHttpCommandResponse, PoSyncService
 *
 * @description
 *
 * Define o método de requisição HTTP.
 */
export var PoHttpRequestType;
(function (PoHttpRequestType) {
    /** Método `delete` do protocolo HTTP. */
    PoHttpRequestType["DELETE"] = "DELETE";
    /** Método `get` do protocolo HTTP. */
    PoHttpRequestType["GET"] = "GET";
    /** Método `head` do protocolo HTTP. */
    PoHttpRequestType["HEAD"] = "HEAD";
    /** Método `options` do protocolo HTTP. */
    PoHttpRequestType["OPTIONS"] = "OPTIONS";
    /** Método `patch` do protocolo HTTP. */
    PoHttpRequestType["PATCH"] = "PATCH";
    /** Método `post` do protocolo HTTP. */
    PoHttpRequestType["POST"] = "POST";
    /** Método `put` do protocolo HTTP. */
    PoHttpRequestType["PUT"] = "PUT";
})(PoHttpRequestType || (PoHttpRequestType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8taHR0cC1yZXF1ZXN0LXR5cGUuZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N5bmMvc3JjL2xpYi9zZXJ2aWNlcy9wby1odHRwLWNsaWVudC9wby1odHRwLXJlcXVlc3QtdHlwZS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBTixJQUFZLGlCQXFCWDtBQXJCRCxXQUFZLGlCQUFpQjtJQUMzQix5Q0FBeUM7SUFDekMsc0NBQWlCLENBQUE7SUFFakIsc0NBQXNDO0lBQ3RDLGdDQUFXLENBQUE7SUFFWCx1Q0FBdUM7SUFDdkMsa0NBQWEsQ0FBQTtJQUViLDBDQUEwQztJQUMxQyx3Q0FBbUIsQ0FBQTtJQUVuQix3Q0FBd0M7SUFDeEMsb0NBQWUsQ0FBQTtJQUVmLHVDQUF1QztJQUN2QyxrQ0FBYSxDQUFBO0lBRWIsc0NBQXNDO0lBQ3RDLGdDQUFXLENBQUE7QUFDYixDQUFDLEVBckJXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFxQjVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEB1c2VkQnkgUG9IdHRwQ2xpZW50U2VydmljZSwgUG9IdHRwQ29tbWFuZFJlc3BvbnNlLCBQb1N5bmNTZXJ2aWNlXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBEZWZpbmUgbyBtw6l0b2RvIGRlIHJlcXVpc2nDp8OjbyBIVFRQLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gUG9IdHRwUmVxdWVzdFR5cGUge1xyXG4gIC8qKiBNw6l0b2RvIGBkZWxldGVgIGRvIHByb3RvY29sbyBIVFRQLiAqL1xyXG4gIERFTEVURSA9ICdERUxFVEUnLFxyXG5cclxuICAvKiogTcOpdG9kbyBgZ2V0YCBkbyBwcm90b2NvbG8gSFRUUC4gKi9cclxuICBHRVQgPSAnR0VUJyxcclxuXHJcbiAgLyoqIE3DqXRvZG8gYGhlYWRgIGRvIHByb3RvY29sbyBIVFRQLiAqL1xyXG4gIEhFQUQgPSAnSEVBRCcsXHJcblxyXG4gIC8qKiBNw6l0b2RvIGBvcHRpb25zYCBkbyBwcm90b2NvbG8gSFRUUC4gKi9cclxuICBPUFRJT05TID0gJ09QVElPTlMnLFxyXG5cclxuICAvKiogTcOpdG9kbyBgcGF0Y2hgIGRvIHByb3RvY29sbyBIVFRQLiAqL1xyXG4gIFBBVENIID0gJ1BBVENIJyxcclxuXHJcbiAgLyoqIE3DqXRvZG8gYHBvc3RgIGRvIHByb3RvY29sbyBIVFRQLiAqL1xyXG4gIFBPU1QgPSAnUE9TVCcsXHJcblxyXG4gIC8qKiBNw6l0b2RvIGBwdXRgIGRvIHByb3RvY29sbyBIVFRQLiAqL1xyXG4gIFBVVCA9ICdQVVQnXHJcbn1cclxuIl19