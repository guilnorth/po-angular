import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { addZero, convertDateToISOExtended } from '../../utils/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PoPageJobSchedulerService {
    constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
            'X-PO-SCREEN-LOCK': 'true'
        });
        this.endpoint = '/';
    }
    configServiceApi(config = {}) {
        this.endpoint = config.endpoint;
    }
    // Cria um recurso
    createResource(resource) {
        const newResouce = this.convertToJobScheduler(resource);
        return this.http.post(`${this.endpoint}`, newResouce, { headers: this.headers });
    }
    getHeadProcesses() {
        const headers = { 'X-PO-No-Error': 'true' };
        return this.http.head(`${this.endpoint}/processes`, { headers });
    }
    // Busca parametros pelo processo id
    getParametersByProcess(processId) {
        return this.http
            .get(`${this.endpoint}/processes/${processId}/parameters`, { headers: this.headers })
            .pipe(map((resource) => resource.items));
    }
    // Busca um único recurso
    getProcess(id) {
        return this.http.get(`${this.endpoint}/processes/${id}`, { headers: this.headers });
    }
    // Busca uma lista de processos
    getProcesses(params = {}) {
        return this.http.get(`${this.endpoint}/processes`, { params });
    }
    // Busca um único recurso
    getResource(id) {
        return this.http
            .get(`${this.endpoint}/${id}`, { headers: this.headers })
            .pipe(map(resource => this.convertToJobSchedulerInternal(resource)));
    }
    // Atualiza um recurso
    updateResource(id, resource) {
        const newResouce = this.convertToJobScheduler(resource);
        return this.http.put(`${this.endpoint}/${id}`, newResouce, { headers: this.headers });
    }
    convertToJobScheduler(jobSchedulerInternal) {
        const jobScheduler = { ...jobSchedulerInternal };
        if (jobSchedulerInternal.periodicity) {
            if (jobSchedulerInternal.periodicity === 'single') {
                jobScheduler.recurrent = false;
            }
            else {
                Object.assign(jobScheduler, this.convertToPeriodicity(jobSchedulerInternal));
            }
        }
        if (jobSchedulerInternal.firstExecutionHour) {
            jobScheduler.firstExecution = this.replaceHourFirstExecution(jobSchedulerInternal.firstExecution, jobSchedulerInternal.firstExecutionHour);
        }
        if (jobSchedulerInternal.frequency && jobSchedulerInternal.frequency.type) {
            jobScheduler.rangeExecutions = {
                frequency: { ...jobSchedulerInternal.frequency }
            };
            if (jobSchedulerInternal.rangeLimitHour) {
                const splitRangeLimitHour = jobSchedulerInternal.rangeLimitHour.split(':');
                jobScheduler.rangeExecutions.rangeLimit = {
                    hour: parseInt(splitRangeLimitHour[0], 10),
                    minute: parseInt(splitRangeLimitHour[1], 10)
                };
            }
            if (jobSchedulerInternal.rangeLimitDay) {
                jobScheduler.rangeExecutions.rangeLimit = {
                    ...jobScheduler.rangeExecutions.rangeLimit,
                    day: jobSchedulerInternal.rangeLimitDay
                };
            }
        }
        if (!Object.keys(this.returnValidExecutionParameter(jobScheduler.executionParameter)).length) {
            delete jobScheduler.executionParameter;
        }
        this.removeInvalidKeys(jobScheduler);
        return jobScheduler;
    }
    convertToJobSchedulerInternal(jobScheduler = {}) {
        const jobSchedulerInternal = { ...jobScheduler };
        if (jobScheduler.firstExecution) {
            jobSchedulerInternal.firstExecutionHour = this.getHourFirstExecution(jobScheduler.firstExecution);
        }
        Object.assign(jobSchedulerInternal, this.convertToPeriodicityInternal(jobScheduler));
        if (jobScheduler.rangeExecutions) {
            jobSchedulerInternal.rangeLimitHour = `${jobScheduler.rangeExecutions.rangeLimit.hour < 10
                ? '0' + jobScheduler.rangeExecutions.rangeLimit.hour
                : jobScheduler.rangeExecutions.rangeLimit.hour}:${jobScheduler.rangeExecutions.rangeLimit.minute < 10
                ? '0' + jobScheduler.rangeExecutions.rangeLimit.minute
                : jobScheduler.rangeExecutions.rangeLimit.minute}`;
            jobSchedulerInternal.rangeLimitDay = jobScheduler.rangeExecutions.rangeLimit.day;
            jobSchedulerInternal.frequency = {
                type: jobScheduler.rangeExecutions.frequency.type,
                value: jobScheduler.rangeExecutions.frequency.value
            };
        }
        this.removeInvalidKeys(jobSchedulerInternal, ['weekly', 'monthly', 'daily']);
        return jobSchedulerInternal;
    }
    convertToPeriodicity(value) {
        const newValue = {};
        const valuePeriodicity = value.periodicity;
        if (valuePeriodicity) {
            newValue[valuePeriodicity] = {};
            if (valuePeriodicity === 'monthly') {
                newValue[valuePeriodicity].day = value.dayOfMonth ? parseInt(value.dayOfMonth, 10) : 0;
            }
            else if (valuePeriodicity === 'weekly') {
                newValue[valuePeriodicity].daysOfWeek = value.daysOfWeek;
            }
            newValue[valuePeriodicity].hour = value.hour ? parseInt(value.hour.split(':')[0], 10) : 0;
            newValue[valuePeriodicity].minute = value.hour ? parseInt(value.hour.split(':')[1], 10) : 0;
        }
        return newValue;
    }
    convertToPeriodicityInternal(value = {}) {
        if (value.monthly) {
            return {
                periodicity: 'monthly',
                hour: `${addZero(value.monthly.hour)}:${addZero(value.monthly.minute)}`,
                dayOfMonth: value.monthly.day
            };
        }
        else if (value.daily) {
            return {
                periodicity: 'daily',
                hour: `${addZero(value.daily.hour)}:${addZero(value.daily.minute)}`
            };
        }
        else if (value.weekly) {
            return {
                periodicity: 'weekly',
                hour: `${addZero(value.weekly.hour)}:${addZero(value.weekly.minute)}`,
                daysOfWeek: [...value.weekly.daysOfWeek]
            };
        }
        else {
            return {
                periodicity: 'single'
            };
        }
    }
    getCurrentHour(date) {
        const hours = addZero(date.getHours());
        const minutes = addZero(date.getMinutes());
        return `${hours}:${minutes}`;
    }
    getHourFirstExecution(firstExecutionDate) {
        return this.getCurrentHour(new Date(firstExecutionDate));
    }
    removeInvalidKeys(value, keys) {
        const invalidKeys = keys || [
            'periodicity',
            'hour',
            'minute',
            'day',
            'daysOfWeek',
            'dayOfMonth',
            'firstExecutionHour',
            'frequency',
            'rangeLimitHour',
            'rangeLimitDay'
        ];
        Object.keys(value).forEach(key => {
            if (invalidKeys.includes(key)) {
                delete value[key];
            }
            else if (key === 'rangeExecutions' && value['periodicity'] === 'single') {
                delete value[key];
            }
        });
    }
    replaceHourFirstExecution(date, time) {
        const firstExecutionDate = new Date(date);
        const timeSplited = time.split(':');
        const hours = parseInt(timeSplited[0], 10);
        const minutes = parseInt(timeSplited[1], 10);
        firstExecutionDate.setHours(hours, minutes);
        return convertDateToISOExtended(firstExecutionDate);
    }
    returnValidExecutionParameter(parameter) {
        const newParameter = { ...parameter };
        for (const key in newParameter) {
            if (newParameter.hasOwnProperty(key) && newParameter[key] === undefined) {
                delete newParameter[key];
            }
        }
        return newParameter;
    }
}
PoPageJobSchedulerService.ɵfac = function PoPageJobSchedulerService_Factory(t) { return new (t || PoPageJobSchedulerService)(i0.ɵɵinject(i1.HttpClient)); };
PoPageJobSchedulerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PoPageJobSchedulerService, factory: PoPageJobSchedulerService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PoPageJobSchedulerService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tcGFnZS1qb2Itc2NoZWR1bGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZW1wbGF0ZXMvc3JjL2xpYi9jb21wb25lbnRzL3BvLXBhZ2Utam9iLXNjaGVkdWxlci9wby1wYWdlLWpvYi1zY2hlZHVsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFPckUsTUFBTSxPQUFPLHlCQUF5QjtJQU9wQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjNCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLENBQUM7WUFDOUMsa0JBQWtCLEVBQUUsTUFBTTtTQUMzQixDQUFDLENBQUM7UUFFSyxhQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWdCLENBQUM7SUFFeEMsZ0JBQWdCLENBQUMsU0FBZ0MsRUFBRTtRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixjQUFjLENBQUMsUUFBUTtRQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGdCQUFn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QyxLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRTtZQUM5QixJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDdkUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDRjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2tHQW5QVSx5QkFBeUI7K0VBQXpCLHlCQUF5QixXQUF6Qix5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgYWRkWmVybywgY29udmVydERhdGVUb0lTT0V4dGVuZGVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IFBvRHluYW1pY0Zvcm1GaWVsZCB9IGZyb20gJ0Bwby11aS9uZy1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IFBvSm9iU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BvLWpvYi1zY2hlZHVsZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUG9Kb2JTY2hlZHVsZXJJbnRlcm5hbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9wby1qb2Itc2NoZWR1bGVyLWludGVybmFsLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb1BhZ2VKb2JTY2hlZHVsZXJTZXJ2aWNlIHtcclxuICByZWFkb25seSBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAnWC1QTy1TQ1JFRU4tTE9DSyc6ICd0cnVlJ1xyXG4gIH0pO1xyXG5cclxuICBwcml2YXRlIGVuZHBvaW50ID0gJy8nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIGNvbmZpZ1NlcnZpY2VBcGkoY29uZmlnOiB7IGVuZHBvaW50Pzogc3RyaW5nIH0gPSB7fSkge1xyXG4gICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcclxuICB9XHJcblxyXG4gIC8vIENyaWEgdW0gcmVjdXJzb1xyXG4gIGNyZWF0ZVJlc291cmNlKHJlc291cmNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IG5ld1Jlc291Y2UgPSB0aGlzLmNvbnZlcnRUb0pvYlNjaGVkdWxlcihyZXNvdXJjZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW5kcG9pbnR9YCwgbmV3UmVzb3VjZSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIZWFkUHJvY2Vzc2VzKCkge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgJ1gtUE8tTm8tRXJyb3InOiAndHJ1ZScgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmhlYWQoYCR7dGhpcy5lbmRwb2ludH0vcHJvY2Vzc2VzYCwgeyBoZWFkZXJzIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gQnVzY2EgcGFyYW1ldHJvcyBwZWxvIHByb2Nlc3NvIGlkXHJcbiAgZ2V0UGFyYW1ldGVyc0J5UHJvY2Vzcyhwcm9jZXNzSWQ6IHN0cmluZyB8IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvY2Vzc2VzLyR7cHJvY2Vzc0lkfS9wYXJhbWV0ZXJzYCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSlcclxuICAgICAgLnBpcGUobWFwKChyZXNvdXJjZTogeyBpdGVtczogQXJyYXk8UG9EeW5hbWljRm9ybUZpZWxkPiB9KSA9PiByZXNvdXJjZS5pdGVtcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gQnVzY2EgdW0gw7puaWNvIHJlY3Vyc29cclxuICBnZXRQcm9jZXNzKGlkOiBzdHJpbmcgfCBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vcHJvY2Vzc2VzLyR7aWR9YCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBCdXNjYSB1bWEgbGlzdGEgZGUgcHJvY2Vzc29zXHJcbiAgZ2V0UHJvY2Vzc2VzKHBhcmFtczoge30gPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmVuZHBvaW50fS9wcm9jZXNzZXNgLCB7IHBhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEJ1c2NhIHVtIMO6bmljbyByZWN1cnNvXHJcbiAgZ2V0UmVzb3VyY2UoaWQ6IHN0cmluZyB8IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQoYCR7dGhpcy5lbmRwb2ludH0vJHtpZH1gLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxyXG4gICAgICAucGlwZShtYXAocmVzb3VyY2UgPT4gdGhpcy5jb252ZXJ0VG9Kb2JTY2hlZHVsZXJJbnRlcm5hbChyZXNvdXJjZSkpKTtcclxuICB9XHJcblxyXG4gIC8vIEF0dWFsaXphIHVtIHJlY3Vyc29cclxuICB1cGRhdGVSZXNvdXJjZShpZCwgcmVzb3VyY2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgbmV3UmVzb3VjZSA9IHRoaXMuY29udmVydFRvSm9iU2NoZWR1bGVyKHJlc291cmNlKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuZW5kcG9pbnR9LyR7aWR9YCwgbmV3UmVzb3VjZSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9Kb2JTY2hlZHVsZXIoam9iU2NoZWR1bGVySW50ZXJuYWwpOiBQb0pvYlNjaGVkdWxlciB7XHJcbiAgICBjb25zdCBqb2JTY2hlZHVsZXIgPSB7IC4uLmpvYlNjaGVkdWxlckludGVybmFsIH07XHJcblxyXG4gICAgaWYgKGpvYlNjaGVkdWxlckludGVybmFsLnBlcmlvZGljaXR5KSB7XHJcbiAgICAgIGlmIChqb2JTY2hlZHVsZXJJbnRlcm5hbC5wZXJpb2RpY2l0eSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICBqb2JTY2hlZHVsZXIucmVjdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihqb2JTY2hlZHVsZXIsIHRoaXMuY29udmVydFRvUGVyaW9kaWNpdHkoam9iU2NoZWR1bGVySW50ZXJuYWwpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChqb2JTY2hlZHVsZXJJbnRlcm5hbC5maXJzdEV4ZWN1dGlvbkhvdXIpIHtcclxuICAgICAgam9iU2NoZWR1bGVyLmZpcnN0RXhlY3V0aW9uID0gdGhpcy5yZXBsYWNlSG91ckZpcnN0RXhlY3V0aW9uKFxyXG4gICAgICAgIGpvYlNjaGVkdWxlckludGVybmFsLmZpcnN0RXhlY3V0aW9uLFxyXG4gICAgICAgIGpvYlNjaGVkdWxlckludGVybmFsLmZpcnN0RXhlY3V0aW9uSG91clxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChqb2JTY2hlZHVsZXJJbnRlcm5hbC5mcmVxdWVuY3kgJiYgam9iU2NoZWR1bGVySW50ZXJuYWwuZnJlcXVlbmN5LnR5cGUpIHtcclxuICAgICAgam9iU2NoZWR1bGVyLnJhbmdlRXhlY3V0aW9ucyA9IHtcclxuICAgICAgICBmcmVxdWVuY3k6IHsgLi4uam9iU2NoZWR1bGVySW50ZXJuYWwuZnJlcXVlbmN5IH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChqb2JTY2hlZHVsZXJJbnRlcm5hbC5yYW5nZUxpbWl0SG91cikge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0UmFuZ2VMaW1pdEhvdXIgPSBqb2JTY2hlZHVsZXJJbnRlcm5hbC5yYW5nZUxpbWl0SG91ci5zcGxpdCgnOicpO1xyXG5cclxuICAgICAgICBqb2JTY2hlZHVsZXIucmFuZ2VFeGVjdXRpb25zLnJhbmdlTGltaXQgPSB7XHJcbiAgICAgICAgICBob3VyOiBwYXJzZUludChzcGxpdFJhbmdlTGltaXRIb3VyWzBdLCAxMCksXHJcbiAgICAgICAgICBtaW51dGU6IHBhcnNlSW50KHNwbGl0UmFuZ2VMaW1pdEhvdXJbMV0sIDEwKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChqb2JTY2hlZHVsZXJJbnRlcm5hbC5yYW5nZUxpbWl0RGF5KSB7XHJcbiAgICAgICAgam9iU2NoZWR1bGVyLnJhbmdlRXhlY3V0aW9ucy5yYW5nZUxpbWl0ID0ge1xyXG4gICAgICAgICAgLi4uam9iU2NoZWR1bGVyLnJhbmdlRXhlY3V0aW9ucy5yYW5nZUxpbWl0LFxyXG4gICAgICAgICAgZGF5OiBqb2JTY2hlZHVsZXJJbnRlcm5hbC5yYW5nZUxpbWl0RGF5XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghT2JqZWN0LmtleXModGhpcy5yZXR1cm5WYWxpZEV4ZWN1dGlvblBhcmFtZXRlcihqb2JTY2hlZHVsZXIuZXhlY3V0aW9uUGFyYW1ldGVyKSkubGVuZ3RoKSB7XHJcbiAgICAgIGRlbGV0ZSBqb2JTY2hlZHVsZXIuZXhlY3V0aW9uUGFyYW1ldGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlSW52YWxpZEtleXMoam9iU2NoZWR1bGVyKTtcclxuXHJcbiAgICByZXR1cm4gam9iU2NoZWR1bGVyO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRvSm9iU2NoZWR1bGVySW50ZXJuYWwoam9iU2NoZWR1bGVyID0gPGFueT57fSk6IFBvSm9iU2NoZWR1bGVySW50ZXJuYWwge1xyXG4gICAgY29uc3Qgam9iU2NoZWR1bGVySW50ZXJuYWwgPSB7IC4uLmpvYlNjaGVkdWxlciB9O1xyXG5cclxuICAgIGlmIChqb2JTY2hlZHVsZXIuZmlyc3RFeGVjdXRpb24pIHtcclxuICAgICAgam9iU2NoZWR1bGVySW50ZXJuYWwuZmlyc3RFeGVjdXRpb25Ib3VyID0gdGhpcy5nZXRIb3VyRmlyc3RFeGVjdXRpb24oam9iU2NoZWR1bGVyLmZpcnN0RXhlY3V0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGpvYlNjaGVkdWxlckludGVybmFsLCB0aGlzLmNvbnZlcnRUb1BlcmlvZGljaXR5SW50ZXJuYWwoam9iU2NoZWR1bGVyKSk7XHJcblxyXG4gICAgaWYgKGpvYlNjaGVkdWxlci5yYW5nZUV4ZWN1dGlvbnMpIHtcclxuICAgICAgam9iU2NoZWR1bGVySW50ZXJuYWwucmFuZ2VMaW1pdEhvdXIgPSBgJHtcclxuICAgICAgICBqb2JTY2hlZHVsZXIucmFuZ2VFeGVjdXRpb25zLnJhbmdlTGltaXQuaG91ciA8IDEwXHJcbiAgICAgICAgICA/ICcwJyArIGpvYlNjaGVkdWxlci5yYW5nZUV4ZWN1dGlvbnMucmFuZ2VMaW1pdC5ob3VyXHJcbiAgICAgICAgICA6IGpvYlNjaGVkdWxlci5yYW5nZUV4ZWN1dGlvbnMucmFuZ2VMaW1pdC5ob3VyXHJcbiAgICAgIH06JHtcclxuICAgICAgICBqb2JTY2hlZHVsZXIucmFuZ2VFeGVjdXRpb25zLnJhbmdlTGltaXQubWludXRlIDwgMTBcclxuICAgICAgICAgID8gJzAnICsgam9iU2NoZWR1bGVyLnJhbmdlRXhlY3V0aW9ucy5yYW5nZUxpbWl0Lm1pbnV0ZVxyXG4gICAgICAgICAgOiBqb2JTY2hlZHVsZXIucmFuZ2VFeGVjdXRpb25zLnJhbmdlTGltaXQubWludXRlXHJcbiAgICAgIH1gO1xyXG4gICAgICBqb2JTY2hlZHVsZXJJbnRlcm5hbC5yYW5nZUxpbWl0RGF5ID0gam9iU2NoZWR1bGVyLnJhbmdlRXhlY3V0aW9ucy5yYW5nZUxpbWl0LmRheTtcclxuICAgICAgam9iU2NoZWR1bGVySW50ZXJuYWwuZnJlcXVlbmN5ID0ge1xyXG4gICAgICAgIHR5cGU6IGpvYlNjaGVkdWxlci5yYW5nZUV4ZWN1dGlvbnMuZnJlcXVlbmN5LnR5cGUsXHJcbiAgICAgICAgdmFsdWU6IGpvYlNjaGVkdWxlci5yYW5nZUV4ZWN1dGlvbnMuZnJlcXVlbmN5LnZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVJbnZhbGlkS2V5cyhqb2JTY2hlZHVsZXJJbnRlcm5hbCwgWyd3ZWVrbHknLCAnbW9udGhseScsICdkYWlseSddKTtcclxuXHJcbiAgICByZXR1cm4gam9iU2NoZWR1bGVySW50ZXJuYWw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb1BlcmlvZGljaXR5KHZhbHVlOiB7XHJcbiAgICBwZXJpb2RpY2l0eTogc3RyaW5nO1xyXG4gICAgZGF5T2ZNb250aD86IHN0cmluZztcclxuICAgIGRheXNPZldlZWs/OiBudW1iZXI7XHJcbiAgICBob3VyPzogc3RyaW5nO1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0ge307XHJcbiAgICBjb25zdCB2YWx1ZVBlcmlvZGljaXR5ID0gdmFsdWUucGVyaW9kaWNpdHk7XHJcblxyXG4gICAgaWYgKHZhbHVlUGVyaW9kaWNpdHkpIHtcclxuICAgICAgbmV3VmFsdWVbdmFsdWVQZXJpb2RpY2l0eV0gPSB7fTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZVBlcmlvZGljaXR5ID09PSAnbW9udGhseScpIHtcclxuICAgICAgICBuZXdWYWx1ZVt2YWx1ZVBlcmlvZGljaXR5XS5kYXkgPSB2YWx1ZS5kYXlPZk1vbnRoID8gcGFyc2VJbnQodmFsdWUuZGF5T2ZNb250aCwgMTApIDogMDtcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZVBlcmlvZGljaXR5ID09PSAnd2Vla2x5Jykge1xyXG4gICAgICAgIG5ld1ZhbHVlW3ZhbHVlUGVyaW9kaWNpdHldLmRheXNPZldlZWsgPSB2YWx1ZS5kYXlzT2ZXZWVrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXdWYWx1ZVt2YWx1ZVBlcmlvZGljaXR5XS5ob3VyID0gdmFsdWUuaG91ciA/IHBhcnNlSW50KHZhbHVlLmhvdXIuc3BsaXQoJzonKVswXSwgMTApIDogMDtcclxuICAgICAgbmV3VmFsdWVbdmFsdWVQZXJpb2RpY2l0eV0ubWludXRlID0gdmFsdWUuaG91ciA/IHBhcnNlSW50KHZhbHVlLmhvdXIuc3BsaXQoJzonKVsxXSwgMTApIDogMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRUb1BlcmlvZGljaXR5SW50ZXJuYWwodmFsdWUgPSA8YW55Pnt9KSB7XHJcbiAgICBpZiAodmFsdWUubW9udGhseSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlcmlvZGljaXR5OiAnbW9udGhseScsXHJcbiAgICAgICAgaG91cjogYCR7YWRkWmVybyh2YWx1ZS5tb250aGx5LmhvdXIpfToke2FkZFplcm8odmFsdWUubW9udGhseS5taW51dGUpfWAsXHJcbiAgICAgICAgZGF5T2ZNb250aDogdmFsdWUubW9udGhseS5kYXlcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUuZGFpbHkpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwZXJpb2RpY2l0eTogJ2RhaWx5JyxcclxuICAgICAgICBob3VyOiBgJHthZGRaZXJvKHZhbHVlLmRhaWx5LmhvdXIpfToke2FkZFplcm8odmFsdWUuZGFpbHkubWludXRlKX1gXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLndlZWtseSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBlcmlvZGljaXR5OiAnd2Vla2x5JyxcclxuICAgICAgICBob3VyOiBgJHthZGRaZXJvKHZhbHVlLndlZWtseS5ob3VyKX06JHthZGRaZXJvKHZhbHVlLndlZWtseS5taW51dGUpfWAsXHJcbiAgICAgICAgZGF5c09mV2VlazogWy4uLnZhbHVlLndlZWtseS5kYXlzT2ZXZWVrXVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwZXJpb2RpY2l0eTogJ3NpbmdsZSdcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q3VycmVudEhvdXIoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBob3VycyA9IGFkZFplcm8oZGF0ZS5nZXRIb3VycygpKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBhZGRaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcclxuXHJcbiAgICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIb3VyRmlyc3RFeGVjdXRpb24oZmlyc3RFeGVjdXRpb25EYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEhvdXIobmV3IERhdGUoZmlyc3RFeGVjdXRpb25EYXRlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUludmFsaWRLZXlzKHZhbHVlOiBvYmplY3QsIGtleXM/OiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBjb25zdCBpbnZhbGlkS2V5cyA9IGtleXMgfHwgW1xyXG4gICAgICAncGVyaW9kaWNpdHknLFxyXG4gICAgICAnaG91cicsXHJcbiAgICAgICdtaW51dGUnLFxyXG4gICAgICAnZGF5JyxcclxuICAgICAgJ2RheXNPZldlZWsnLFxyXG4gICAgICAnZGF5T2ZNb250aCcsXHJcbiAgICAgICdmaXJzdEV4ZWN1dGlvbkhvdXInLFxyXG4gICAgICAnZnJlcXVlbmN5JyxcclxuICAgICAgJ3JhbmdlTGltaXRIb3VyJyxcclxuICAgICAgJ3JhbmdlTGltaXREYXknXHJcbiAgICBdO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGlmIChpbnZhbGlkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlW2tleV07XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmFuZ2VFeGVjdXRpb25zJyAmJiB2YWx1ZVsncGVyaW9kaWNpdHknXSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICBkZWxldGUgdmFsdWVba2V5XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VIb3VyRmlyc3RFeGVjdXRpb24oZGF0ZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmlyc3RFeGVjdXRpb25EYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGltZVNwbGl0ZWQgPSB0aW1lLnNwbGl0KCc6Jyk7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBwYXJzZUludCh0aW1lU3BsaXRlZFswXSwgMTApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KHRpbWVTcGxpdGVkWzFdLCAxMCk7XHJcblxyXG4gICAgZmlyc3RFeGVjdXRpb25EYXRlLnNldEhvdXJzKGhvdXJzLCBtaW51dGVzKTtcclxuXHJcbiAgICByZXR1cm4gY29udmVydERhdGVUb0lTT0V4dGVuZGVkKGZpcnN0RXhlY3V0aW9uRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldHVyblZhbGlkRXhlY3V0aW9uUGFyYW1ldGVyKHBhcmFtZXRlcjogb2JqZWN0KSB7XHJcbiAgICBjb25zdCBuZXdQYXJhbWV0ZXIgPSB7IC4uLnBhcmFtZXRlciB9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1BhcmFtZXRlcikge1xyXG4gICAgICBpZiAobmV3UGFyYW1ldGVyLmhhc093blByb3BlcnR5KGtleSkgJiYgbmV3UGFyYW1ldGVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGRlbGV0ZSBuZXdQYXJhbWV0ZXJba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdQYXJhbWV0ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==