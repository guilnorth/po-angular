import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpResponse, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PoUploadBaseService } from './po-upload-base.service';
import { PoUploadFile } from './po-upload-file';

describe('PoUploadBaseService:', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PoUploadBaseService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    });
  });

  it('should call removeRequest', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    spyOn(service, 'removeRequest');
    const fakeThis = {
      requests: [
        {
          file: { uid: 10 },
          request: { unsubscribe: function () {} }
        }
      ],
      removeRequest: service.removeRequest
    };
    service.stopRequestByFile.call(fakeThis, { uid: 10 }, function () {});
    expect(service.removeRequest).toHaveBeenCalled();
  }));

  it('should not call removeRequest', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    spyOn(service, 'removeRequest');
    const fakeThis = {
      requests: [
        {
          file: { uid: 1 },
          request: { unsubscribe: function () {} }
        }
      ],
      removeRequest: service.removeRequest
    };
    service.stopRequestByFile.call(fakeThis, { uid: 10 }, function () {});
    expect(service.removeRequest).not.toHaveBeenCalled();
  }));

  it('should remove request', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const fakeThis = {
      requests: ['first', 'second']
    };

    service.removeRequest.call(fakeThis, 'first');
    expect(fakeThis.requests.length).toBe(1);
  }));

  it('should add request', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const fakeThis = {
      requests: Array()
    };

    service.addRequest.call(fakeThis, { uid: 1 }, null);
    expect(fakeThis.requests.length).toBe(1);

    // Já existia, por isso não deve incluir outro request com o mesmo uid
    service.addRequest.call(fakeThis, { uid: 1 }, null);
    expect(fakeThis.requests.length).toBe(1);
  }));

  it('should call sendFiles', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const fakeFile = new Blob([]);
    fakeFile['lastModified'] = 1504558774471;
    fakeFile['lastModifiedDate'] = new Date();
    fakeFile['name'] = 'Teste';
    fakeFile['webkitRelativePath'] = '';
    const files = [new PoUploadFile(<File>fakeFile)];
    const headers = { Authorization: '145236' };
    const tOnUpload = new EventEmitter<any>();
    const callback = (file: PoUploadFile, event: any) => '';

    spyOn(service, 'sendFile');
    service.upload('', files, headers, tOnUpload, callback, callback, callback);
    expect(service.sendFile).toHaveBeenCalled();

    service.upload('', files, headers, undefined, callback, callback, callback);
    expect(service.sendFile).toHaveBeenCalled();
  }));

  it('should call formData.append with correct parameters', inject(
    [PoUploadBaseService],
    (service: PoUploadBaseService) => {
      const fakeFile = new Blob([]);
      fakeFile['lastModified'] = 1504558774471;
      fakeFile['lastModifiedDate'] = new Date();
      fakeFile['name'] = 'Teste';
      fakeFile['webkitRelativePath'] = '';
      const files = [new PoUploadFile(<File>fakeFile)];
      const headers = { Authorization: '145236' };
      const tOnUpload = new EventEmitter<any>();
      const callback = (file: PoUploadFile, event: any) => '';

      const formData = new FormData();
      spyOn(window, 'FormData').and.returnValue(formData);
      spyOn(formData, 'append');

      const uploadEvent = {
        extraFormData: { param1: 'value1', param2: 'value2' },
        data: { key: 'value' },
        url: 'http://example.com/upload',
        headers: { 'Content-Type': 'application/json' }
      };

      spyOn(tOnUpload, 'emit').and.callFake(event => {
        event.extraFormData = uploadEvent.extraFormData;
        event.data = uploadEvent.data;
        event.url = uploadEvent.url;
        event.headers = uploadEvent.headers;
      });

      service.upload('', files, headers, tOnUpload, callback, callback, callback);

      expect(formData.append).toHaveBeenCalled();
    }
  ));

  it('should execute uploadCallback function', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const methods = returnMethodsCallback();
    const fakeThis = {
      getRequest: (url: any, headers: any, formData: any) =>
        new Observable(observer => {
          observer.next({ type: 1 });
          observer.complete();
        }),
      addRequest: service.addRequest,
      requests: service.requests
    };

    spyOn(methods, 'uploadCallback');
    service.sendFile.call(
      fakeThis,
      '',
      {},
      null,
      new FormData(),
      methods.uploadCallback,
      methods.successCallback,
      methods.errorCallback
    );

    expect(methods.uploadCallback).toHaveBeenCalled();
  }));
  it('should execute successCallback function', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const methods = returnMethodsCallback();
    const fakeThis = {
      getRequest: (url: any, headers: any, formData: any) =>
        new Observable(observer => {
          observer.next(new HttpResponse());
          observer.complete();
        }),
      addRequest: service.addRequest,
      requests: service.requests
    };

    spyOn(methods, 'successCallback');
    service.sendFile.call(
      fakeThis,
      '',
      {},
      null,
      new FormData(),
      methods.uploadCallback,
      methods.successCallback,
      methods.errorCallback
    );

    expect(methods.successCallback).toHaveBeenCalled();
  }));

  it('should not execute a callback function', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const methods = returnMethodsCallback();
    const fakeThis = {
      getRequest: (url: any, formData: any) =>
        new Observable(observer => {
          observer.next({});
          observer.complete();
        }),
      addRequest: service.addRequest,
      requests: service.requests
    };

    spyOn(methods, 'successCallback');
    service.sendFile.call(
      fakeThis,
      '',
      {},
      null,
      new FormData(),
      methods.uploadCallback,
      methods.successCallback,
      methods.errorCallback
    );

    expect(methods.successCallback).not.toHaveBeenCalled();
  }));

  it('should execute errorCallback function', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const methods = returnMethodsCallback();
    const fakeThis = {
      getRequest: (url: any, headers: any, formData: any) =>
        new Observable(observer => {
          observer.error();
        }),
      addRequest: service.addRequest,
      requests: service.requests
    };

    spyOn(methods, 'errorCallback');
    service.sendFile.call(
      fakeThis,
      '',
      {},
      null,
      new FormData(),
      methods.uploadCallback,
      methods.successCallback,
      methods.errorCallback
    );
    expect(methods.errorCallback).toHaveBeenCalled();
  }));

  it('should return a promisse', inject([PoUploadBaseService], (service: PoUploadBaseService) => {
    const req = service.getRequest('', {}, new FormData());
    expect(typeof req.subscribe()).toBe('object');
  }));
});

function returnMethodsCallback() {
  return {
    uploadCallback: (file: PoUploadFile, event: any) => '',
    successCallback: (file: PoUploadFile, event: any) => '',
    errorCallback: (file: PoUploadFile, event: any) => ''
  };
}
