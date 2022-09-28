import { Injectable } from '@angular/core';
import { HttpEventType, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoUploadBaseService {
    constructor(http) {
        this.http = http;
        this.formField = 'files';
        this.requests = [];
    }
    /**
     * Método responsável por enviar os arquivos ao servidor, conforme o parâmetro URL.
     *
     * @param url URL da requisição a ser efetuada.
     * @param files Arquivos a serem enviados.
     * @param tOnUpload Função a ser executada quando o arquivo for enviado ao servidor.
     * @param uploadCallback Função que será executada enquanto os arquivos estiverem sendo enviados.
     * @param successCallback Função a ser executada quando a requisição for efetuada com sucesso.
     * @param errorCallback Função a ser executada quando a requisição foi efetuada com sucesso.
     */
    upload(url, files, headers, tOnUpload, uploadCallback, successCallback, errorCallback) {
        const filesLength = files.length;
        const uploadEvent = {
            data: {},
            file: null
        };
        for (let i = 0; i < filesLength; i++) {
            const formData = new FormData();
            const file = files[i];
            const fileName = file.rawFile.name;
            formData.append(this.formField, file.rawFile, fileName);
            // Função upload, onde o desenvolvedor pode enviar dados para a requisição.
            if (tOnUpload) {
                uploadEvent['file'] = file;
                tOnUpload.emit(uploadEvent);
                formData.append('data', JSON.stringify(uploadEvent.data));
            }
            this.sendFile(url, file, headers, formData, uploadCallback, successCallback, errorCallback);
        }
    }
    sendFile(url, file, headers, formData, uploadCallback, successCallback, errorCallback) {
        let request = new Subscription();
        request = this.getRequest(url, headers, formData).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.addRequest(file, request);
                const percentDone = Math.round((100 * event.loaded) / event.total);
                uploadCallback(file, percentDone);
            }
            else if (event instanceof HttpResponse) {
                // Sucesso, arquivos enviados.
                successCallback(file, event);
            }
        }, (err) => {
            errorCallback(file, err);
        });
    }
    getRequest(url, headers, formData) {
        const httpHeaders = new HttpHeaders(headers);
        const req = new HttpRequest('POST', url, formData, {
            reportProgress: true,
            headers: httpHeaders
        });
        return this.http.request(req);
    }
    stopRequestByFile(file, callback) {
        const requestObj = this.requests.find(req => req.file.uid === file.uid);
        if (requestObj) {
            const request = requestObj.request;
            request.unsubscribe();
            this.removeRequest(requestObj);
            callback();
        }
    }
    removeRequest(requestObj) {
        const index = this.requests.indexOf(requestObj);
        this.requests.splice(index, 1);
    }
    addRequest(file, request) {
        const hasRequest = this.requests.some(req => req.file.uid === file.uid);
        if (!hasRequest) {
            this.requests.push({ file, request });
        }
    }
}
PoUploadBaseService.ɵfac = function PoUploadBaseService_Factory(t) { return new (t || PoUploadBaseService)(i0.ɵɵinject(i1.HttpClient)); };
PoUploadBaseService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoUploadBaseService, factory: PoUploadBaseService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoUploadBaseService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby11cGxvYWQvcG8tdXBsb2FkLWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBRUwsYUFBYSxFQUViLFdBQVcsRUFDWCxZQUFZLEVBQ1osV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFJOUIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBR2hELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxjQUFTLEdBQVcsT0FBTyxDQUFDO1FBQzVCLGFBQVEsR0FBZSxFQUFFLENBQUM7SUFFYSxDQUFDO0lBRXhDOzs7Ozs7Ozs7T0FTRztJQUNJLE1BQU0sQ0FDWCxHQUFXLEVBQ1gsS0FBMEIsRUFDMUIsT0FBbUQsRUFDbkQsU0FBNEIsRUFDNUIsY0FBNkQsRUFDN0QsZUFBeUQsRUFDekQsYUFBdUQ7UUFFdkQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxNQUFNLFdBQVcsR0FBUTtZQUN2QixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUVGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMxQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8s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QUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFrQixFQUFFLE9BQXFCO1FBQ3pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7c0ZBbEhVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBFdmVudFR5cGUsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2UsXHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG4gIEh0dHBIZWFkZXJzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgUG9VcGxvYWRGaWxlIH0gZnJvbSAnLi9wby11cGxvYWQtZmlsZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvVXBsb2FkQmFzZVNlcnZpY2Uge1xyXG4gIGZvcm1GaWVsZDogc3RyaW5nID0gJ2ZpbGVzJztcclxuICByZXF1ZXN0czogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3DqXRvZG8gcmVzcG9uc8OhdmVsIHBvciBlbnZpYXIgb3MgYXJxdWl2b3MgYW8gc2Vydmlkb3IsIGNvbmZvcm1lIG8gcGFyw6JtZXRybyBVUkwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIFVSTCBkYSByZXF1aXNpw6fDo28gYSBzZXIgZWZldHVhZGEuXHJcbiAgICogQHBhcmFtIGZpbGVzIEFycXVpdm9zIGEgc2VyZW0gZW52aWFkb3MuXHJcbiAgICogQHBhcmFtIHRPblVwbG9hZCBGdW7Dp8OjbyBhIHNlciBleGVjdXRhZGEgcXVhbmRvIG8gYXJxdWl2byBmb3IgZW52aWFkbyBhbyBzZXJ2aWRvci5cclxuICAgKiBAcGFyYW0gdXBsb2FkQ2FsbGJhY2sgRnVuw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBlbnF1YW50byBvcyBhcnF1aXZvcyBlc3RpdmVyZW0gc2VuZG8gZW52aWFkb3MuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBGdW7Dp8OjbyBhIHNlciBleGVjdXRhZGEgcXVhbmRvIGEgcmVxdWlzacOnw6NvIGZvciBlZmV0dWFkYSBjb20gc3VjZXNzby5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBGdW7Dp8OjbyBhIHNlciBleGVjdXRhZGEgcXVhbmRvIGEgcmVxdWlzacOnw6NvIGZvaSBlZmV0dWFkYSBjb20gc3VjZXNzby5cclxuICAgKi9cclxuICBwdWJsaWMgdXBsb2FkKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBmaWxlczogQXJyYXk8UG9VcGxvYWRGaWxlPixcclxuICAgIGhlYWRlcnM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IEFycmF5PHN0cmluZz4gfSxcclxuICAgIHRPblVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4sXHJcbiAgICB1cGxvYWRDYWxsYmFjazogKGZpbGU6IFBvVXBsb2FkRmlsZSwgcGVyY2VudDogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiAoZmlsZTogUG9VcGxvYWRGaWxlLCBldmVudDogYW55KSA9PiB2b2lkLFxyXG4gICAgZXJyb3JDYWxsYmFjazogKGZpbGU6IFBvVXBsb2FkRmlsZSwgZXZlbnQ6IGFueSkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZXNMZW5ndGggPSBmaWxlcy5sZW5ndGg7XHJcbiAgICBjb25zdCB1cGxvYWRFdmVudDogYW55ID0ge1xyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgZmlsZTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcclxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlLnJhd0ZpbGUubmFtZTtcclxuXHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0aGlzLmZvcm1GaWVsZCwgZmlsZS5yYXdGaWxlLCBmaWxlTmFtZSk7XHJcblxyXG4gICAgICAvLyBGdW7Dp8OjbyB1cGxvYWQsIG9uZGUgbyBkZXNlbnZvbHZlZG9yIHBvZGUgZW52aWFyIGRhZG9zIHBhcmEgYSByZXF1aXNpw6fDo28uXHJcbiAgICAgIGlmICh0T25VcGxvYWQpIHtcclxuICAgICAgICB1cGxvYWRFdmVudFsnZmlsZSddID0gZmlsZTtcclxuICAgICAgICB0T25VcGxvYWQuZW1pdCh1cGxvYWRFdmVudCk7XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHVwbG9hZEV2ZW50LmRhdGEpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZW5kRmlsZSh1cmwsIGZpbGUsIGhlYWRlcnMsIGZvcm1EYXRhLCB1cGxvYWRDYWxsYmFjaywgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZW5kRmlsZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgZmlsZTogUG9VcGxvYWRGaWxlLFxyXG4gICAgaGVhZGVyczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB9LFxyXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgdXBsb2FkQ2FsbGJhY2s6IChmaWxlOiBQb1VwbG9hZEZpbGUsIHBlcmNlbnQ6IG51bWJlcikgPT4gdm9pZCxcclxuICAgIHN1Y2Nlc3NDYWxsYmFjazogKGZpbGU6IFBvVXBsb2FkRmlsZSwgZXZlbnQ6IGFueSkgPT4gdm9pZCxcclxuICAgIGVycm9yQ2FsbGJhY2s6IChmaWxlOiBQb1VwbG9hZEZpbGUsIGV2ZW50OiBhbnkpID0+IHZvaWRcclxuICApIHtcclxuICAgIGxldCByZXF1ZXN0OiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICByZXF1ZXN0ID0gdGhpcy5nZXRSZXF1ZXN0KHVybCwgaGVhZGVycywgZm9ybURhdGEpLnN1YnNjcmliZShcclxuICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZFJlcXVlc3QoZmlsZSwgcmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgdXBsb2FkQ2FsbGJhY2soZmlsZSwgcGVyY2VudERvbmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIFN1Y2Vzc28sIGFycXVpdm9zIGVudmlhZG9zLlxyXG4gICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpbGUsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZXJyb3JDYWxsYmFjayhmaWxlLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJlcXVlc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGhlYWRlcnM6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IEFycmF5PHN0cmluZz4gfSxcclxuICAgIGZvcm1EYXRhOiBGb3JtRGF0YVxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyhoZWFkZXJzKTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCB1cmwsIGZvcm1EYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiBodHRwSGVhZGVyc1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wUmVxdWVzdEJ5RmlsZShmaWxlOiBhbnksIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T2JqID0gdGhpcy5yZXF1ZXN0cy5maW5kKHJlcSA9PiByZXEuZmlsZS51aWQgPT09IGZpbGUudWlkKTtcclxuXHJcbiAgICBpZiAocmVxdWVzdE9iaikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gcmVxdWVzdE9iai5yZXF1ZXN0O1xyXG4gICAgICByZXF1ZXN0LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlUmVxdWVzdChyZXF1ZXN0T2JqKTtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVSZXF1ZXN0KHJlcXVlc3RPYmo6IGFueSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnJlcXVlc3RzLmluZGV4T2YocmVxdWVzdE9iaik7XHJcbiAgICB0aGlzLnJlcXVlc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUmVxdWVzdChmaWxlOiBQb1VwbG9hZEZpbGUsIHJlcXVlc3Q6IFN1YnNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgaGFzUmVxdWVzdCA9IHRoaXMucmVxdWVzdHMuc29tZShyZXEgPT4gcmVxLmZpbGUudWlkID09PSBmaWxlLnVpZCk7XHJcblxyXG4gICAgaWYgKCFoYXNSZXF1ZXN0KSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdHMucHVzaCh7IGZpbGUsIHJlcXVlc3QgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==