import { Pipe } from '@angular/core';
import { isTypeof } from '../../utils/util';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Pipe responsável por apresentar um horário baseado no formato de entrada definido na API do PO UI.
 */
export class PoTimePipe {
    transform(time, format) {
        const hourRegex = /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9][\.]?([0-9]{1,6})?$/g;
        if (isTypeof(time, 'string') && hourRegex.test(time)) {
            const amountOfF = format ? format.lastIndexOf('f') - format.indexOf('f') + 1 : 0;
            const miliseconds = this.addDotMiliseconds(time.substring(9, 9 + amountOfF), amountOfF);
            const formatMiliseconds = this.getFormatMiliseconds(amountOfF);
            return this.formatValue(time, format, formatMiliseconds, miliseconds);
        }
        return null;
    }
    addDotMiliseconds(miliseconds, amountOfF) {
        if (miliseconds && amountOfF) {
            miliseconds = '.' + miliseconds;
        }
        return miliseconds;
    }
    formatValue(time, format, formatMiliseconds, miliseconds) {
        if (time && format) {
            const hour = time.substring(0, 2);
            const minutes = time.substring(3, 5);
            const seconds = time.substring(6, 8);
            format = format.replace('HH', hour);
            format = format.replace('mm', minutes);
            format = format.replace('ss', seconds);
            format = format.replace(`.${formatMiliseconds}`, miliseconds);
            return format;
        }
        else {
            return time;
        }
    }
    getFormatMiliseconds(amountOfF) {
        let formatMiliseconds = '';
        for (let i = 0; i < amountOfF; i++) {
            formatMiliseconds += 'f';
        }
        return formatMiliseconds;
    }
}
PoTimePipe.ɵfac = function PoTimePipe_Factory(t) { return new (t || PoTimePipe)(); };
PoTimePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "po_time", type: PoTimePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoTimePipe, [{
        type: Pipe,
        args: [{
                name: 'po_time'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdGltZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9waXBlcy9wby10aW1lL3BvLXRpbWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRTVDOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFNBQVMsQ0FBQyxJQUFZLEVBQUUsTUFBZTtRQUNyQyxNQUFNLFNBQVMsR0FBRyxvRUFBb0UsQ0FBQztRQUV2RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0saUJBQWlCLEdBQVcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXZFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8saUJBQWlCLENBQUMsV0FBbUIsRUFBRSxTQUFpQjtRQUM5RCxJQUFJLFdBQVcsSUFBSSxTQUFTLEVBQUU7WUFDNUIsV0FBVyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUM7U0FDakM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU8sV0FBVyxDQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsaUJBQXlCLEVBQUUsV0FBbUI7UUFDOUYsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksaUJBQWlCLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUU5RCxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFNBQWlCO1FBQzVDLElBQUksaUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRW5DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsaUJBQWlCLElBQUksR0FBRyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDOztvRUEvQ1UsVUFBVTswRUFBVixVQUFVO3VGQUFWLFVBQVU7Y0FIdEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNUeXBlb2YgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBAZG9jc1ByaXZhdGVcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFBpcGUgcmVzcG9uc8OhdmVsIHBvciBhcHJlc2VudGFyIHVtIGhvcsOhcmlvIGJhc2VhZG8gbm8gZm9ybWF0byBkZSBlbnRyYWRhIGRlZmluaWRvIG5hIEFQSSBkbyBQTyBVSS5cclxuICovXHJcbkBQaXBlKHtcclxuICBuYW1lOiAncG9fdGltZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvVGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odGltZTogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaG91clJlZ2V4ID0gL14oKFswLTFdWzAtOV0pfCgyWzAtM10pKTpbMC01XVswLTldOlswLTVdWzAtOV1bXFwuXT8oWzAtOV17MSw2fSk/JC9nO1xyXG5cclxuICAgIGlmIChpc1R5cGVvZih0aW1lLCAnc3RyaW5nJykgJiYgaG91clJlZ2V4LnRlc3QodGltZSkpIHtcclxuICAgICAgY29uc3QgYW1vdW50T2ZGID0gZm9ybWF0ID8gZm9ybWF0Lmxhc3RJbmRleE9mKCdmJykgLSBmb3JtYXQuaW5kZXhPZignZicpICsgMSA6IDA7XHJcblxyXG4gICAgICBjb25zdCBtaWxpc2Vjb25kcyA9IHRoaXMuYWRkRG90TWlsaXNlY29uZHModGltZS5zdWJzdHJpbmcoOSwgOSArIGFtb3VudE9mRiksIGFtb3VudE9mRik7XHJcbiAgICAgIGNvbnN0IGZvcm1hdE1pbGlzZWNvbmRzOiBzdHJpbmcgPSB0aGlzLmdldEZvcm1hdE1pbGlzZWNvbmRzKGFtb3VudE9mRik7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRWYWx1ZSh0aW1lLCBmb3JtYXQsIGZvcm1hdE1pbGlzZWNvbmRzLCBtaWxpc2Vjb25kcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRG90TWlsaXNlY29uZHMobWlsaXNlY29uZHM6IHN0cmluZywgYW1vdW50T2ZGOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKG1pbGlzZWNvbmRzICYmIGFtb3VudE9mRikge1xyXG4gICAgICBtaWxpc2Vjb25kcyA9ICcuJyArIG1pbGlzZWNvbmRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pbGlzZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRWYWx1ZSh0aW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBmb3JtYXRNaWxpc2Vjb25kczogc3RyaW5nLCBtaWxpc2Vjb25kczogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aW1lICYmIGZvcm1hdCkge1xyXG4gICAgICBjb25zdCBob3VyID0gdGltZS5zdWJzdHJpbmcoMCwgMik7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0aW1lLnN1YnN0cmluZygzLCA1KTtcclxuICAgICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUuc3Vic3RyaW5nKDYsIDgpO1xyXG5cclxuICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ0hIJywgaG91cik7XHJcbiAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdtbScsIG1pbnV0ZXMpO1xyXG4gICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgnc3MnLCBzZWNvbmRzKTtcclxuICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoYC4ke2Zvcm1hdE1pbGlzZWNvbmRzfWAsIG1pbGlzZWNvbmRzKTtcclxuXHJcbiAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rm9ybWF0TWlsaXNlY29uZHMoYW1vdW50T2ZGOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGZvcm1hdE1pbGlzZWNvbmRzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudE9mRjsgaSsrKSB7XHJcbiAgICAgIGZvcm1hdE1pbGlzZWNvbmRzICs9ICdmJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybWF0TWlsaXNlY29uZHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==