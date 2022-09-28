import { PoCodeEditorRegisterableSuggestion } from './interfaces/po-code-editor-registerable-suggestion.interface';
import * as i0 from "@angular/core";
export declare class PoCodeEditorSuggestionService {
    private suggestions;
    constructor();
    getSuggestion(language: string, newSuggestion: Array<PoCodeEditorRegisterableSuggestion>): PoCodeEditorRegisterableSuggestion[];
    private deduplicateSuggestions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoCodeEditorSuggestionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoCodeEditorSuggestionService>;
}
