import * as i0 from "@angular/core";
/**
 * @description
 * Classe base que deve ser estendida para o uso de componente customizado na etapa de parametrização
 */
export declare abstract class PoPageJobSchedulerParametersCustomBase {
    /**
     * @description
     * Event Emitter used to allow advancing to the wizard step
     */
    disabledAdvance: boolean;
    getExecutionParameter: () => Object;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageJobSchedulerParametersCustomBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PoPageJobSchedulerParametersCustomBase, never, never, {}, {}, never, never, false>;
}
