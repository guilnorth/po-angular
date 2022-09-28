import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PoLanguageService } from '@po-ui/ng-components';
import { PoPageBlockedUserReason } from '../enums/po-page-blocked-user-reason.enum';
import { PoPageBlockedUserReasonParams } from '../interfaces/po-page-blocked-user-reason-params.interface';
import * as i0 from "@angular/core";
export declare class PoPageBlockedUserReasonComponent implements OnChanges, OnInit {
    private changeDetector;
    params: PoPageBlockedUserReasonParams;
    reason: PoPageBlockedUserReason;
    literalParams: any;
    literals: {
        title: string;
        firstPhrase: string;
        secondPhrase: string;
        thirdPhrase: string;
    };
    private language;
    constructor(changeDetector: ChangeDetectorRef, languageService: PoLanguageService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    getImageByReasonType(): string;
    getParams(): void;
    private getLiterals;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageBlockedUserReasonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PoPageBlockedUserReasonComponent, "po-page-blocked-user-reason", never, { "params": "p-params"; "reason": "p-reason"; }, {}, never, never, false>;
}
