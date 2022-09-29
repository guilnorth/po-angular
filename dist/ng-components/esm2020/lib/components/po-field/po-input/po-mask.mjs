/**
 * Para usar o po-mask é preciso instanciar esta classe passando a máscara como
 * primeiro parâmetro, e no segundo parâmetro, deve se informado true, caso queira
 * que o model seja formatado ou false para o que o model seja limpo.
 */
export class PoMask {
    constructor(mask, formatModel) {
        this.mask = '';
        this.formatModel = false;
        // controle de posição
        this.initialPosition = 0;
        this.finalPosition = 0;
        this.pattern = '';
        this.mask = mask;
        this.formatModel = formatModel;
        this.pattern = this.getRegexFromMask(mask);
    }
    get getPattern() {
        return this.pattern;
    }
    get getValueToInput() {
        return this.valueToInput;
    }
    set setValueToInput(value) {
        this.valueToInput = value;
    }
    get getValueToModel() {
        return this.valueToModel;
    }
    set setValueToModel(value) {
        this.valueToModel = value;
    }
    keyup($event) {
        if (this.mask) {
            const value = $event.target.value;
            // formata o valor quando for colado com control + v e reposiciona o cursor
            if ($event.keyCode === 17 || $event.keyCode === 91) {
                $event.target.value = this.controlFormatting(value);
                this.resetPositions($event);
            }
            $event.preventDefault();
            switch ($event.keyCode) {
                case 37: // seta esquerda
                    if (this.initialPosition > 0) {
                        this.initialPosition--;
                    }
                    this.setPositionNotShiftKey($event);
                    this.setSelectionRange($event);
                    break;
                case 39: // seta direita
                    if (this.initialPosition < value.toString().length) {
                        this.initialPosition++;
                    }
                    this.setPositionNotShiftKey($event);
                    this.setSelectionRange($event);
                    break;
                case 35: // end
                    this.finalPosition = value.toString().length;
                    if ($event.shiftKey) {
                        this.setPositions($event);
                    }
                    else {
                        this.initialPosition = this.finalPosition;
                        this.setPositions($event);
                    }
                    break;
                case 36: // HOME
                    if ($event.shiftKey) {
                        this.finalPosition = this.initialPosition;
                        this.initialPosition = 0;
                        this.setPositions($event);
                    }
                    else {
                        this.initialPosition = 0;
                        this.finalPosition = 0;
                        this.setPositions($event);
                    }
                    break;
            }
        }
    }
    setPositionNotShiftKey($event) {
        if (!$event.shiftKey) {
            this.finalPosition = this.initialPosition;
        }
    }
    setSelectionRange($event) {
        if (this.initialPosition > this.finalPosition) {
            $event.target.setSelectionRange(this.finalPosition, this.initialPosition);
        }
        else {
            $event.target.setSelectionRange(this.initialPosition, this.finalPosition);
        }
    }
    keydown($event) {
        if (this.mask) {
            let value = $event.target.value;
            if ($event.keyCode === 9) {
                return;
            }
            if (!$event.ctrlKey && !$event.metaKey) {
                $event.preventDefault();
            }
            // Não faz nada quando for digitado CTRL ou COMMAND e V
            // Já está sendo tratado no evento keyup
            if ($event.ctrlKey ||
                ($event.metaKey && $event.keyCode !== 86) ||
                ($event.keyCode >= 37 && $event.keyCode <= 40) ||
                $event.keyCode === 16 ||
                $event.keyCode === 9) {
                return;
            }
            // Valida a tecla digitada
            if (this.isKeyValid($event.keyCode)) {
                if (this.finalPosition === null) {
                    this.finalPosition = this.initialPosition;
                }
                this.revertPositions(this.initialPosition, this.finalPosition);
                switch ($event.keyCode) {
                    case 8: // backspace
                        this.getPosition($event);
                        if (this.initialPosition < 0) {
                            this.initialPosition = 0;
                            this.setPositions($event);
                        }
                        if (this.initialPosition === this.finalPosition) {
                            this.checkMaskBefore($event, -1);
                            if (this.initialPosition !== 0) {
                                value = value.slice(0, this.initialPosition - 1) + value.slice(this.finalPosition);
                                value = this.controlFormatting(value);
                                $event.target.value = value;
                                this.changePosition($event, -1);
                                this.checkMaskBefore($event, -1);
                                this.setPositions($event);
                                this.resetPositions($event);
                            }
                        }
                        else {
                            this.clearRangeSelection(value, $event, true);
                        }
                        this.setPositions($event);
                        break;
                    case 46: // delete
                        this.getPosition($event);
                        if (this.initialPosition === this.finalPosition) {
                            this.checkMaskAfter($event, 1);
                            value = value.slice(0, this.initialPosition) + value.slice(this.finalPosition + 1);
                            value = this.controlFormatting(value);
                            $event.target.value = value;
                            this.setPositions($event);
                            this.resetPositions($event);
                        }
                        else {
                            this.clearRangeSelection(value, $event, false);
                        }
                        this.setPositions($event);
                        break;
                    default:
                        // qualquer outra tecla válida
                        this.getPosition($event);
                        value = value.slice(0, this.initialPosition) + $event.key + value.slice(this.finalPosition);
                        value = this.controlFormatting(value);
                        $event.target.value = value;
                        this.changePosition($event, 1);
                        this.checkMaskBefore($event, 1);
                        this.setPositions($event);
                        this.resetPositions($event);
                        this.setPositions($event);
                }
            }
        }
    }
    clearRangeSelection(value, $event, isBackspace) {
        value = value.slice(0, this.initialPosition) + value.slice(this.finalPosition);
        value = this.controlFormatting(value);
        $event.target.value = value;
        if (isBackspace) {
            this.checkMaskBefore($event, -1);
        }
        this.setPositions($event);
        this.resetPositions($event);
    }
    // passa a posição do click para o controle de posição
    click($event) {
        this.initialPosition = $event.target.selectionStart;
        this.finalPosition = $event.target.selectionEnd;
    }
    blur($event) {
        // Se houver algum valor definido na máscara
        if (this.mask) {
            // pega o valor do campo, formata e passa para o model
            let value = $event.target.value;
            value = this.controlFormatting(value);
            $event.target.value = value;
        }
    }
    revertPositions(initialPosition, finalPosition) {
        if (initialPosition > finalPosition) {
            // inverte o controle de posição caso o inicial esteja maior que o final
            const tempPosition = initialPosition;
            this.initialPosition = finalPosition;
            this.finalPosition = tempPosition;
        }
    }
    // reseta o controle de posição
    resetPositions($event) {
        this.initialPosition = $event.target.selectionStart;
        this.finalPosition = this.initialPosition;
    }
    // posiciona o cursor de acordo com o controle de posição
    setPositions($event) {
        $event.target.setSelectionRange(this.initialPosition, this.finalPosition);
    }
    // muda a posição do cursor e atualiza o controle de posição
    changePosition($event, value) {
        this.initialPosition = this.initialPosition + value;
        this.finalPosition = this.finalPosition + value;
        this.setPositions($event);
    }
    getPosition($event) {
        this.initialPosition = $event.target.selectionStart;
        this.finalPosition = $event.target.selectionEnd;
        this.setPositions($event);
    }
    // Método responsável por controlar a formatação e aplicar todas as máscara possíveis
    // quando houver valores opcionais (?)
    controlFormatting(value) {
        // Se o valor for vazio, retorna vazio
        if (!value) {
            this.valueToInput = '';
            this.valueToModel = '';
            return '';
        }
        let valueProcessed;
        let maskTmp = this.mask;
        // Array que será usado para armazenar todas as máscaras possíveis para
        // quando houver um valor opcional (?)
        const arrMasks = [];
        let contMasks = 0;
        // Enquanto houver algum 9? na máscara
        while (this.hasOptionalNumber(maskTmp)) {
            arrMasks.push(maskTmp);
            maskTmp = this.replaceOptionalNumber(maskTmp);
        }
        arrMasks.push(maskTmp);
        // Inverte o array
        arrMasks.reverse();
        // Informa que a formatação ainda não chegou ao fim
        this.formattingEnds = false;
        while (!this.formattingEnds) {
            // Seta a formatação como terminada
            // Então o método formatValue irá setar como não terminado caso haja
            this.formattingEnds = true;
            // Se não existe mais nenhuma máscara possível, então encerra a formatação
            if (!arrMasks[contMasks]) {
                break;
            }
            // Chama a formatação passando a máscara e o valor
            valueProcessed = this.formatValue(value, arrMasks[contMasks]);
            contMasks++;
        }
        return valueProcessed;
    }
    // Função que formata a máscara com o valor passado
    formatValue(value, mask) {
        // Remove as marcas de valor opciona (?)
        mask = mask.replace(/\?/g, '');
        // Substitui todos os caracteres que não são fixos da máscara por _
        const guide = mask.replace(this.listValidKeys(), '_');
        // Contador usado para percorrer o guide
        let contGuide = 0;
        // String final formatada
        let valueProcessed = '';
        // Remove do valor todos os caracteres fixos como ()/-+
        value = this.removeFormattingValue(value);
        // Percorre todo o valor e coloca a formatação de acordo com a máscara
        for (let i = 0; i < value.length; i++) {
            const charValue = value[i];
            // Se o guide acabou, seta a formatação como não terminada para que o método controlFormatting
            // tente formatar com outra possível máscara
            if (!guide[contGuide]) {
                this.formattingEnds = false;
                break;
            }
            // Percorre o Guide enquanto tem caracteres fixos
            while (this.isFixedCharacterGuide(guide[contGuide]) && guide[contGuide]) {
                valueProcessed += guide[contGuide];
                contGuide++;
            }
            // É um caracter válido de acordo com a máscara
            if (this.isKeyValidMask(charValue, mask[contGuide])) {
                valueProcessed += charValue;
                contGuide++;
            }
            else {
                // Se não é um caracter válido, deve interromper.
                break;
            }
        }
        if (this.formatModel) {
            this.valueToInput = valueProcessed;
            this.valueToModel = valueProcessed;
        }
        else {
            this.valueToInput = valueProcessed;
            this.valueToModel = this.removeFormattingValue(valueProcessed);
        }
        return valueProcessed;
    }
    // verifica se tem algum caracter de mascara antes do cursor
    checkMaskBefore($event, position) {
        if (this.isFixedCharacterGuide($event.target.value.toString().charAt(this.initialPosition - 1))) {
            this.changePosition($event, position);
            this.checkMaskBefore($event, position);
        }
    }
    // verifica se tem algum caracter de mascara depois do cursor
    checkMaskAfter($event, position) {
        if (this.isFixedCharacterGuide($event.target.value.toString().charAt(this.initialPosition))) {
            this.changePosition($event, position);
            this.checkMaskAfter($event, position);
        }
    }
    // Retorna a máscara sem um valor opcional
    replaceOptionalNumber(mask) {
        let i = 9;
        while (i >= 0) {
            if (mask.indexOf(i + '?') > -1) {
                return mask.replace(i + '?', '');
            }
            i--;
        }
        return mask;
    }
    // Verifica se contém caracteres permitidos somente na máscara \/() +-
    isFixedCharacterGuide(key) {
        return this.testRegex(key, this.getFixedCharacterGuide());
    }
    // Retorna caracteres permitidos somente na máscara \/() +-
    getFixedCharacterGuide() {
        return /[\\\/() +-.\:]/g;
    }
    // Caracteres permitidos de serem digitados
    listValidKeys() {
        return /[a-zA-Z0-9]/g;
    }
    // Se é um dígito válido
    isKeyValid(keyCode) {
        return this.isKeyCodeValid(keyCode);
    }
    // Verifica se a tecla digitada é permitida
    // Permite apenas números, letras, backspace e del
    isKeyCodeValid(keyCode) {
        return ((keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 65 && keyCode <= 90) ||
            (keyCode >= 96 && keyCode <= 105) ||
            keyCode === 8 ||
            keyCode === 9 ||
            keyCode === 46);
    }
    // Se está de acordo com a máscara
    isKeyValidMask(key, keyMask) {
        return this.testRegex(key, this.replaceMask(keyMask));
    }
    // Retorna se a chave foi aprovada pela expressão regular
    testRegex(key, regex) {
        return regex.test(key);
    }
    // Remove a formatacão do valor
    // É possível ser melhorado para remover pontualmente os caracteres fixos de acordo com a máscara
    removeFormattingValue(value) {
        return value.replace(this.getFixedCharacterGuide(), '');
    }
    // Verifica se contém valor opcional na máscara 0-9?
    hasOptionalNumber(mask) {
        return mask.match(/\d\?/g);
    }
    // Retorna a expressão regular correspondente ao comando passado
    replaceMask(char) {
        let regex = /./;
        switch (char) {
            case '0':
                regex = /[0]/;
                break;
            case '1':
                regex = /[0-1]/;
                break;
            case '2':
                regex = /[0-2]/;
                break;
            case '3':
                regex = /[0-3]/;
                break;
            case '4':
                regex = /[0-4]/;
                break;
            case '5':
                regex = /[0-5]/;
                break;
            case '6':
                regex = /[0-6]/;
                break;
            case '7':
                regex = /[0-7]/;
                break;
            case '8':
                regex = /[0-8]/;
                break;
            case '9':
                regex = /[0-9]/;
                break;
            case ' ':
                regex = /\s/;
                break;
            case '@':
                regex = /[a-zA-Z]/;
                break;
            case 'w':
                regex = /[a-zA-Z0-9]/;
                break;
        }
        return regex;
    }
    getRegexFromMask(mask) {
        if (mask) {
            let pattern;
            if (this.formatModel) {
                pattern = mask.replace(/\\/g, '\\\\');
                pattern = pattern.replace(/\+/g, '\\+');
                pattern = pattern.replace(/\./g, '\\.');
                pattern = pattern.replace(/-/g, '-');
                pattern = pattern.replace(/\(/g, '\\(');
                pattern = pattern.replace(/\)/g, '\\)');
                pattern = pattern.replace(/\//g, '\\/');
                pattern = pattern.replace(/\s/g, '\\s');
                pattern = pattern.replace(/:/g, '\\:');
                pattern = pattern.replace(/\@(?!\s)/g, '\\w');
                pattern = pattern.replace(/\d/g, '\\w');
            }
            else {
                pattern = mask.replace(/\\/g, '');
                pattern = pattern.replace(/\+/g, '');
                pattern = pattern.replace(/\./g, '');
                pattern = pattern.replace(/-/g, '');
                pattern = pattern.replace(/\(/g, '');
                pattern = pattern.replace(/\)/g, '');
                pattern = pattern.replace(/\//g, '');
                pattern = pattern.replace(/\s/g, '');
                pattern = pattern.replace(/:/g, '');
                pattern = pattern.replace(/\@/g, '\\w');
                pattern = pattern.replace(/\d/g, '\\w');
            }
            return pattern;
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tbWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpL3NyYy9saWIvY29tcG9uZW50cy9wby1maWVsZC9wby1pbnB1dC9wby1tYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sTUFBTTtJQThCakIsWUFBWSxJQUFZLEVBQUUsV0FBb0I7UUE3QjlDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isc0JBQXNCO1FBQ3RCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUF3Qm5CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUExQkQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFHRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFVRCxLQUFLLENBQUMsTUFBVztRQUNmLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE1BQU0sS0FB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Q0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQYXJhIHVzYXIgbyBwby1tYXNrIMOpIHByZWNpc28gaW5zdGFuY2lhciBlc3RhIGNsYXNzZSBwYXNzYW5kbyBhIG3DoXNjYXJhIGNvbW9cclxuICogcHJpbWVpcm8gcGFyw6JtZXRybywgZSBubyBzZWd1bmRvIHBhcsOibWV0cm8sIGRldmUgc2UgaW5mb3JtYWRvIHRydWUsIGNhc28gcXVlaXJhXHJcbiAqIHF1ZSBvIG1vZGVsIHNlamEgZm9ybWF0YWRvIG91IGZhbHNlIHBhcmEgbyBxdWUgbyBtb2RlbCBzZWphIGxpbXBvLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvTWFzayB7XHJcbiAgbWFzazogc3RyaW5nID0gJyc7XHJcbiAgZm9ybWF0TW9kZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvLyBjb250cm9sZSBkZSBwb3Npw6fDo29cclxuICBpbml0aWFsUG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgZmluYWxQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgcGF0dGVybjogc3RyaW5nID0gJyc7XHJcbiAgZ2V0IGdldFBhdHRlcm4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XHJcbiAgfVxyXG5cclxuICB2YWx1ZVRvSW5wdXQ6IHN0cmluZztcclxuICBnZXQgZ2V0VmFsdWVUb0lucHV0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZVRvSW5wdXQ7XHJcbiAgfVxyXG4gIHNldCBzZXRWYWx1ZVRvSW5wdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy52YWx1ZVRvSW5wdXQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHZhbHVlVG9Nb2RlbDogc3RyaW5nO1xyXG4gIGdldCBnZXRWYWx1ZVRvTW9kZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlVG9Nb2RlbDtcclxuICB9XHJcbiAgc2V0IHNldFZhbHVlVG9Nb2RlbCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnZhbHVlVG9Nb2RlbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0dGluZ0VuZHM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG1hc2s6IHN0cmluZywgZm9ybWF0TW9kZWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubWFzayA9IG1hc2s7XHJcbiAgICB0aGlzLmZvcm1hdE1vZGVsID0gZm9ybWF0TW9kZWw7XHJcbiAgICB0aGlzLnBhdHRlcm4gPSB0aGlzLmdldFJlZ2V4RnJvbU1hc2sobWFzayk7XHJcbiAgfVxyXG5cclxuICBrZXl1cCgkZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIC8vIGZvcm1hdGEgbyB2YWxvciBxdWFuZG8gZm9yIGNvbGFkbyBjb20gY29udHJvbCArIHYgZSByZXBvc2ljaW9uYSBvIGN1cnNvclxyXG4gICAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDE3IHx8ICRldmVudC5rZXlDb2RlID09PSA5MSkge1xyXG4gICAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLmNvbnRyb2xGb3JtYXR0aW5nKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgc3dpdGNoICgkZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgMzc6IC8vIHNldGEgZXNxdWVyZGFcclxuICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxQb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24tLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25Ob3RTaGlmdEtleSgkZXZlbnQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSgkZXZlbnQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzk6IC8vIHNldGEgZGlyZWl0YVxyXG4gICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFBvc2l0aW9uIDwgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24rKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25Ob3RTaGlmdEtleSgkZXZlbnQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSgkZXZlbnQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzU6IC8vIGVuZFxyXG4gICAgICAgICAgdGhpcy5maW5hbFBvc2l0aW9uID0gdmFsdWUudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICAgICAgICBpZiAoJGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMuZmluYWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbnMoJGV2ZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDM2OiAvLyBIT01FXHJcbiAgICAgICAgICBpZiAoJGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxQb3NpdGlvbiA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb25Ob3RTaGlmdEtleSgkZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKCEkZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgdGhpcy5maW5hbFBvc2l0aW9uID0gdGhpcy5pbml0aWFsUG9zaXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb25SYW5nZSgkZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuaW5pdGlhbFBvc2l0aW9uID4gdGhpcy5maW5hbFBvc2l0aW9uKSB7XHJcbiAgICAgICRldmVudC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy5maW5hbFBvc2l0aW9uLCB0aGlzLmluaXRpYWxQb3NpdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkZXZlbnQudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKHRoaXMuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLmZpbmFsUG9zaXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5ZG93bigkZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubWFzaykge1xyXG4gICAgICBsZXQgdmFsdWU6IHN0cmluZyA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEkZXZlbnQuY3RybEtleSAmJiAhJGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTsOjbyBmYXogbmFkYSBxdWFuZG8gZm9yIGRpZ2l0YWRvIENUUkwgb3UgQ09NTUFORCBlIFZcclxuICAgICAgLy8gSsOhIGVzdMOhIHNlbmRvIHRyYXRhZG8gbm8gZXZlbnRvIGtleXVwXHJcbiAgICAgIGlmIChcclxuICAgICAgICAkZXZlbnQuY3RybEtleSB8fFxyXG4gICAgICAgICgkZXZlbnQubWV0YUtleSAmJiAkZXZlbnQua2V5Q29kZSAhPT0gODYpIHx8XHJcbiAgICAgICAgKCRldmVudC5rZXlDb2RlID49IDM3ICYmICRldmVudC5rZXlDb2RlIDw9IDQwKSB8fFxyXG4gICAgICAgICRldmVudC5rZXlDb2RlID09PSAxNiB8fFxyXG4gICAgICAgICRldmVudC5rZXlDb2RlID09PSA5XHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVmFsaWRhIGEgdGVjbGEgZGlnaXRhZGFcclxuICAgICAgaWYgKHRoaXMuaXNLZXlWYWxpZCgkZXZlbnQua2V5Q29kZSkpIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbFBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbmFsUG9zaXRpb24gPSB0aGlzLmluaXRpYWxQb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXZlcnRQb3NpdGlvbnModGhpcy5pbml0aWFsUG9zaXRpb24sIHRoaXMuZmluYWxQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoJGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgIGNhc2UgODogLy8gYmFja3NwYWNlXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oJGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFBvc2l0aW9uIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9ucygkZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRpYWxQb3NpdGlvbiA9PT0gdGhpcy5maW5hbFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja01hc2tCZWZvcmUoJGV2ZW50LCAtMSk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFBvc2l0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHRoaXMuaW5pdGlhbFBvc2l0aW9uIC0gMSkgKyB2YWx1ZS5zbGljZSh0aGlzLmZpbmFsUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmNvbnRyb2xGb3JtYXR0aW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb24oJGV2ZW50LCAtMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTWFza0JlZm9yZSgkZXZlbnQsIC0xKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJSYW5nZVNlbGVjdGlvbih2YWx1ZSwgJGV2ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9ucygkZXZlbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDQ2OiAvLyBkZWxldGVcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigkZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsUG9zaXRpb24gPT09IHRoaXMuZmluYWxQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXNrQWZ0ZXIoJGV2ZW50LCAxKTtcclxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHRoaXMuaW5pdGlhbFBvc2l0aW9uKSArIHZhbHVlLnNsaWNlKHRoaXMuZmluYWxQb3NpdGlvbiArIDEpO1xyXG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb250cm9sRm9ybWF0dGluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9ucygkZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJSYW5nZVNlbGVjdGlvbih2YWx1ZSwgJGV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbnMoJGV2ZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gcXVhbHF1ZXIgb3V0cmEgdGVjbGEgdsOhbGlkYVxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCRldmVudCk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdGhpcy5pbml0aWFsUG9zaXRpb24pICsgJGV2ZW50LmtleSArIHZhbHVlLnNsaWNlKHRoaXMuZmluYWxQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb250cm9sRm9ybWF0dGluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbigkZXZlbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTWFza0JlZm9yZSgkZXZlbnQsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9ucygkZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclJhbmdlU2VsZWN0aW9uKHZhbHVlOiBzdHJpbmcsICRldmVudDogYW55LCBpc0JhY2tzcGFjZTogYm9vbGVhbikge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB0aGlzLmluaXRpYWxQb3NpdGlvbikgKyB2YWx1ZS5zbGljZSh0aGlzLmZpbmFsUG9zaXRpb24pO1xyXG4gICAgdmFsdWUgPSB0aGlzLmNvbnRyb2xGb3JtYXR0aW5nKHZhbHVlKTtcclxuICAgICRldmVudC50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAoaXNCYWNrc3BhY2UpIHtcclxuICAgICAgdGhpcy5jaGVja01hc2tCZWZvcmUoJGV2ZW50LCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbnMoJGV2ZW50KTtcclxuICAgIHRoaXMucmVzZXRQb3NpdGlvbnMoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8vIHBhc3NhIGEgcG9zacOnw6NvIGRvIGNsaWNrIHBhcmEgbyBjb250cm9sZSBkZSBwb3Npw6fDo29cclxuICBjbGljaygkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSAkZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgdGhpcy5maW5hbFBvc2l0aW9uID0gJGV2ZW50LnRhcmdldC5zZWxlY3Rpb25FbmQ7XHJcbiAgfVxyXG5cclxuICBibHVyKCRldmVudDogYW55KSB7XHJcbiAgICAvLyBTZSBob3V2ZXIgYWxndW0gdmFsb3IgZGVmaW5pZG8gbmEgbcOhc2NhcmFcclxuICAgIGlmICh0aGlzLm1hc2spIHtcclxuICAgICAgLy8gcGVnYSBvIHZhbG9yIGRvIGNhbXBvLCBmb3JtYXRhIGUgcGFzc2EgcGFyYSBvIG1vZGVsXHJcbiAgICAgIGxldCB2YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgIHZhbHVlID0gdGhpcy5jb250cm9sRm9ybWF0dGluZyh2YWx1ZSk7XHJcbiAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldmVydFBvc2l0aW9ucyhpbml0aWFsUG9zaXRpb246IG51bWJlciwgZmluYWxQb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5pdGlhbFBvc2l0aW9uID4gZmluYWxQb3NpdGlvbikge1xyXG4gICAgICAvLyBpbnZlcnRlIG8gY29udHJvbGUgZGUgcG9zacOnw6NvIGNhc28gbyBpbmljaWFsIGVzdGVqYSBtYWlvciBxdWUgbyBmaW5hbFxyXG4gICAgICBjb25zdCB0ZW1wUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb247XHJcbiAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gZmluYWxQb3NpdGlvbjtcclxuICAgICAgdGhpcy5maW5hbFBvc2l0aW9uID0gdGVtcFBvc2l0aW9uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXRhIG8gY29udHJvbGUgZGUgcG9zacOnw6NvXHJcbiAgcmVzZXRQb3NpdGlvbnMoJGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gJGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgIHRoaXMuZmluYWxQb3NpdGlvbiA9IHRoaXMuaW5pdGlhbFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gcG9zaWNpb25hIG8gY3Vyc29yIGRlIGFjb3JkbyBjb20gbyBjb250cm9sZSBkZSBwb3Npw6fDo29cclxuICBzZXRQb3NpdGlvbnMoJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC50YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UodGhpcy5pbml0aWFsUG9zaXRpb24sIHRoaXMuZmluYWxQb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICAvLyBtdWRhIGEgcG9zacOnw6NvIGRvIGN1cnNvciBlIGF0dWFsaXphIG8gY29udHJvbGUgZGUgcG9zacOnw6NvXHJcbiAgY2hhbmdlUG9zaXRpb24oJGV2ZW50OiBhbnksIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5pbml0aWFsUG9zaXRpb24gKyB2YWx1ZTtcclxuICAgIHRoaXMuZmluYWxQb3NpdGlvbiA9IHRoaXMuZmluYWxQb3NpdGlvbiArIHZhbHVlO1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbnMoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9ICRldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICB0aGlzLmZpbmFsUG9zaXRpb24gPSAkZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZDtcclxuICAgIHRoaXMuc2V0UG9zaXRpb25zKCRldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBNw6l0b2RvIHJlc3BvbnPDoXZlbCBwb3IgY29udHJvbGFyIGEgZm9ybWF0YcOnw6NvIGUgYXBsaWNhciB0b2RhcyBhcyBtw6FzY2FyYSBwb3Nzw612ZWlzXHJcbiAgLy8gcXVhbmRvIGhvdXZlciB2YWxvcmVzIG9wY2lvbmFpcyAoPylcclxuICBjb250cm9sRm9ybWF0dGluZyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBTZSBvIHZhbG9yIGZvciB2YXppbywgcmV0b3JuYSB2YXppb1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlVG9JbnB1dCA9ICcnO1xyXG4gICAgICB0aGlzLnZhbHVlVG9Nb2RlbCA9ICcnO1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBsZXQgdmFsdWVQcm9jZXNzZWQ7XHJcbiAgICBsZXQgbWFza1RtcCA9IHRoaXMubWFzaztcclxuXHJcbiAgICAvLyBBcnJheSBxdWUgc2Vyw6EgdXNhZG8gcGFyYSBhcm1hemVuYXIgdG9kYXMgYXMgbcOhc2NhcmFzIHBvc3PDrXZlaXMgcGFyYVxyXG4gICAgLy8gcXVhbmRvIGhvdXZlciB1bSB2YWxvciBvcGNpb25hbCAoPylcclxuICAgIGNvbnN0IGFyck1hc2tzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBsZXQgY29udE1hc2tzID0gMDtcclxuXHJcbiAgICAvLyBFbnF1YW50byBob3V2ZXIgYWxndW0gOT8gbmEgbcOhc2NhcmFcclxuICAgIHdoaWxlICh0aGlzLmhhc09wdGlvbmFsTnVtYmVyKG1hc2tUbXApKSB7XHJcbiAgICAgIGFyck1hc2tzLnB1c2gobWFza1RtcCk7XHJcbiAgICAgIG1hc2tUbXAgPSB0aGlzLnJlcGxhY2VPcHRpb25hbE51bWJlcihtYXNrVG1wKTtcclxuICAgIH1cclxuICAgIGFyck1hc2tzLnB1c2gobWFza1RtcCk7XHJcblxyXG4gICAgLy8gSW52ZXJ0ZSBvIGFycmF5XHJcbiAgICBhcnJNYXNrcy5yZXZlcnNlKCk7XHJcblxyXG4gICAgLy8gSW5mb3JtYSBxdWUgYSBmb3JtYXRhw6fDo28gYWluZGEgbsOjbyBjaGVnb3UgYW8gZmltXHJcbiAgICB0aGlzLmZvcm1hdHRpbmdFbmRzID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKCF0aGlzLmZvcm1hdHRpbmdFbmRzKSB7XHJcbiAgICAgIC8vIFNldGEgYSBmb3JtYXRhw6fDo28gY29tbyB0ZXJtaW5hZGFcclxuICAgICAgLy8gRW50w6NvIG8gbcOpdG9kbyBmb3JtYXRWYWx1ZSBpcsOhIHNldGFyIGNvbW8gbsOjbyB0ZXJtaW5hZG8gY2FzbyBoYWphXHJcbiAgICAgIHRoaXMuZm9ybWF0dGluZ0VuZHMgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gU2UgbsOjbyBleGlzdGUgbWFpcyBuZW5odW1hIG3DoXNjYXJhIHBvc3PDrXZlbCwgZW50w6NvIGVuY2VycmEgYSBmb3JtYXRhw6fDo29cclxuICAgICAgaWYgKCFhcnJNYXNrc1tjb250TWFza3NdKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoYW1hIGEgZm9ybWF0YcOnw6NvIHBhc3NhbmRvIGEgbcOhc2NhcmEgZSBvIHZhbG9yXHJcbiAgICAgIHZhbHVlUHJvY2Vzc2VkID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSwgYXJyTWFza3NbY29udE1hc2tzXSk7XHJcbiAgICAgIGNvbnRNYXNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZVByb2Nlc3NlZDtcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHF1ZSBmb3JtYXRhIGEgbcOhc2NhcmEgY29tIG8gdmFsb3IgcGFzc2Fkb1xyXG4gIGZvcm1hdFZhbHVlKHZhbHVlOiBzdHJpbmcsIG1hc2s6IHN0cmluZykge1xyXG4gICAgLy8gUmVtb3ZlIGFzIG1hcmNhcyBkZSB2YWxvciBvcGNpb25hICg/KVxyXG4gICAgbWFzayA9IG1hc2sucmVwbGFjZSgvXFw/L2csICcnKTtcclxuXHJcbiAgICAvLyBTdWJzdGl0dWkgdG9kb3Mgb3MgY2FyYWN0ZXJlcyBxdWUgbsOjbyBzw6NvIGZpeG9zIGRhIG3DoXNjYXJhIHBvciBfXHJcbiAgICBjb25zdCBndWlkZSA9IG1hc2sucmVwbGFjZSh0aGlzLmxpc3RWYWxpZEtleXMoKSwgJ18nKTtcclxuXHJcbiAgICAvLyBDb250YWRvciB1c2FkbyBwYXJhIHBlcmNvcnJlciBvIGd1aWRlXHJcbiAgICBsZXQgY29udEd1aWRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIFN0cmluZyBmaW5hbCBmb3JtYXRhZGFcclxuICAgIGxldCB2YWx1ZVByb2Nlc3NlZDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGRvIHZhbG9yIHRvZG9zIG9zIGNhcmFjdGVyZXMgZml4b3MgY29tbyAoKS8tK1xyXG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmdWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgLy8gUGVyY29ycmUgdG9kbyBvIHZhbG9yIGUgY29sb2NhIGEgZm9ybWF0YcOnw6NvIGRlIGFjb3JkbyBjb20gYSBtw6FzY2FyYVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGFyVmFsdWUgPSB2YWx1ZVtpXTtcclxuXHJcbiAgICAgIC8vIFNlIG8gZ3VpZGUgYWNhYm91LCBzZXRhIGEgZm9ybWF0YcOnw6NvIGNvbW8gbsOjbyB0ZXJtaW5hZGEgcGFyYSBxdWUgbyBtw6l0b2RvIGNvbnRyb2xGb3JtYXR0aW5nXHJcbiAgICAgIC8vIHRlbnRlIGZvcm1hdGFyIGNvbSBvdXRyYSBwb3Nzw612ZWwgbcOhc2NhcmFcclxuICAgICAgaWYgKCFndWlkZVtjb250R3VpZGVdKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nRW5kcyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQZXJjb3JyZSBvIEd1aWRlIGVucXVhbnRvIHRlbSBjYXJhY3RlcmVzIGZpeG9zXHJcbiAgICAgIHdoaWxlICh0aGlzLmlzRml4ZWRDaGFyYWN0ZXJHdWlkZShndWlkZVtjb250R3VpZGVdKSAmJiBndWlkZVtjb250R3VpZGVdKSB7XHJcbiAgICAgICAgdmFsdWVQcm9jZXNzZWQgKz0gZ3VpZGVbY29udEd1aWRlXTtcclxuICAgICAgICBjb250R3VpZGUrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gw4kgdW0gY2FyYWN0ZXIgdsOhbGlkbyBkZSBhY29yZG8gY29tIGEgbcOhc2NhcmFcclxuICAgICAgaWYgKHRoaXMuaXNLZXlWYWxpZE1hc2soY2hhclZhbHVlLCBtYXNrW2NvbnRHdWlkZV0pKSB7XHJcbiAgICAgICAgdmFsdWVQcm9jZXNzZWQgKz0gY2hhclZhbHVlO1xyXG4gICAgICAgIGNvbnRHdWlkZSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gw6kgdW0gY2FyYWN0ZXIgdsOhbGlkbywgZGV2ZSBpbnRlcnJvbXBlci5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZvcm1hdE1vZGVsKSB7XHJcbiAgICAgIHRoaXMudmFsdWVUb0lucHV0ID0gdmFsdWVQcm9jZXNzZWQ7XHJcbiAgICAgIHRoaXMudmFsdWVUb01vZGVsID0gdmFsdWVQcm9jZXNzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlVG9JbnB1dCA9IHZhbHVlUHJvY2Vzc2VkO1xyXG4gICAgICB0aGlzLnZhbHVlVG9Nb2RlbCA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZ1ZhbHVlKHZhbHVlUHJvY2Vzc2VkKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZVByb2Nlc3NlZDtcclxuICB9XHJcbiAgLy8gdmVyaWZpY2Egc2UgdGVtIGFsZ3VtIGNhcmFjdGVyIGRlIG1hc2NhcmEgYW50ZXMgZG8gY3Vyc29yXHJcbiAgY2hlY2tNYXNrQmVmb3JlKCRldmVudDogYW55LCBwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pc0ZpeGVkQ2hhcmFjdGVyR3VpZGUoJGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpLmNoYXJBdCh0aGlzLmluaXRpYWxQb3NpdGlvbiAtIDEpKSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uKCRldmVudCwgcG9zaXRpb24pO1xyXG4gICAgICB0aGlzLmNoZWNrTWFza0JlZm9yZSgkZXZlbnQsIHBvc2l0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHZlcmlmaWNhIHNlIHRlbSBhbGd1bSBjYXJhY3RlciBkZSBtYXNjYXJhIGRlcG9pcyBkbyBjdXJzb3JcclxuICBjaGVja01hc2tBZnRlcigkZXZlbnQ6IGFueSwgcG9zaXRpb246IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaXNGaXhlZENoYXJhY3Rlckd1aWRlKCRldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKS5jaGFyQXQodGhpcy5pbml0aWFsUG9zaXRpb24pKSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uKCRldmVudCwgcG9zaXRpb24pO1xyXG4gICAgICB0aGlzLmNoZWNrTWFza0FmdGVyKCRldmVudCwgcG9zaXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0b3JuYSBhIG3DoXNjYXJhIHNlbSB1bSB2YWxvciBvcGNpb25hbFxyXG4gIHJlcGxhY2VPcHRpb25hbE51bWJlcihtYXNrOiBzdHJpbmcpIHtcclxuICAgIGxldCBpID0gOTtcclxuICAgIHdoaWxlIChpID49IDApIHtcclxuICAgICAgaWYgKG1hc2suaW5kZXhPZihpICsgJz8nKSA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hc2sucmVwbGFjZShpICsgJz8nLCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgaS0tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hc2s7XHJcbiAgfVxyXG5cclxuICAvLyBWZXJpZmljYSBzZSBjb250w6ltIGNhcmFjdGVyZXMgcGVybWl0aWRvcyBzb21lbnRlIG5hIG3DoXNjYXJhIFxcLygpICstXHJcbiAgaXNGaXhlZENoYXJhY3Rlckd1aWRlKGtleTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZXN0UmVnZXgoa2V5LCB0aGlzLmdldEZpeGVkQ2hhcmFjdGVyR3VpZGUoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXRvcm5hIGNhcmFjdGVyZXMgcGVybWl0aWRvcyBzb21lbnRlIG5hIG3DoXNjYXJhIFxcLygpICstXHJcbiAgZ2V0Rml4ZWRDaGFyYWN0ZXJHdWlkZSgpIHtcclxuICAgIHJldHVybiAvW1xcXFxcXC8oKSArLS5cXDpdL2c7XHJcbiAgfVxyXG5cclxuICAvLyBDYXJhY3RlcmVzIHBlcm1pdGlkb3MgZGUgc2VyZW0gZGlnaXRhZG9zXHJcbiAgbGlzdFZhbGlkS2V5cygpIHtcclxuICAgIHJldHVybiAvW2EtekEtWjAtOV0vZztcclxuICB9XHJcblxyXG4gIC8vIFNlIMOpIHVtIGTDrWdpdG8gdsOhbGlkb1xyXG4gIGlzS2V5VmFsaWQoa2V5Q29kZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0tleUNvZGVWYWxpZChrZXlDb2RlKTtcclxuICB9XHJcblxyXG4gIC8vIFZlcmlmaWNhIHNlIGEgdGVjbGEgZGlnaXRhZGEgw6kgcGVybWl0aWRhXHJcbiAgLy8gUGVybWl0ZSBhcGVuYXMgbsO6bWVyb3MsIGxldHJhcywgYmFja3NwYWNlIGUgZGVsXHJcbiAgaXNLZXlDb2RlVmFsaWQoa2V5Q29kZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoa2V5Q29kZSA+PSA0OCAmJiBrZXlDb2RlIDw9IDU3KSB8fFxyXG4gICAgICAoa2V5Q29kZSA+PSA2NSAmJiBrZXlDb2RlIDw9IDkwKSB8fFxyXG4gICAgICAoa2V5Q29kZSA+PSA5NiAmJiBrZXlDb2RlIDw9IDEwNSkgfHxcclxuICAgICAga2V5Q29kZSA9PT0gOCB8fFxyXG4gICAgICBrZXlDb2RlID09PSA5IHx8XHJcbiAgICAgIGtleUNvZGUgPT09IDQ2XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gU2UgZXN0w6EgZGUgYWNvcmRvIGNvbSBhIG3DoXNjYXJhXHJcbiAgaXNLZXlWYWxpZE1hc2soa2V5OiBhbnksIGtleU1hc2s6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVzdFJlZ2V4KGtleSwgdGhpcy5yZXBsYWNlTWFzayhrZXlNYXNrKSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXRvcm5hIHNlIGEgY2hhdmUgZm9pIGFwcm92YWRhIHBlbGEgZXhwcmVzc8OjbyByZWd1bGFyXHJcbiAgdGVzdFJlZ2V4KGtleTogYW55LCByZWdleDogYW55KSB7XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChrZXkpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGEgZm9ybWF0YWPDo28gZG8gdmFsb3JcclxuICAvLyDDiSBwb3Nzw612ZWwgc2VyIG1lbGhvcmFkbyBwYXJhIHJlbW92ZXIgcG9udHVhbG1lbnRlIG9zIGNhcmFjdGVyZXMgZml4b3MgZGUgYWNvcmRvIGNvbSBhIG3DoXNjYXJhXHJcbiAgcmVtb3ZlRm9ybWF0dGluZ1ZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuZ2V0Rml4ZWRDaGFyYWN0ZXJHdWlkZSgpLCAnJyk7XHJcbiAgfVxyXG5cclxuICAvLyBWZXJpZmljYSBzZSBjb250w6ltIHZhbG9yIG9wY2lvbmFsIG5hIG3DoXNjYXJhIDAtOT9cclxuICBoYXNPcHRpb25hbE51bWJlcihtYXNrOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBtYXNrLm1hdGNoKC9cXGRcXD8vZyk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXRvcm5hIGEgZXhwcmVzc8OjbyByZWd1bGFyIGNvcnJlc3BvbmRlbnRlIGFvIGNvbWFuZG8gcGFzc2Fkb1xyXG4gIHJlcGxhY2VNYXNrKGNoYXI6IHN0cmluZykge1xyXG4gICAgbGV0IHJlZ2V4ID0gLy4vO1xyXG4gICAgc3dpdGNoIChjaGFyKSB7XHJcbiAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1swXS87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1swLTFdLztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgcmVnZXggPSAvWzAtMl0vO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgICByZWdleCA9IC9bMC0zXS87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1swLTRdLztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgcmVnZXggPSAvWzAtNV0vO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc2JzpcclxuICAgICAgICByZWdleCA9IC9bMC02XS87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1swLTddLztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnOCc6XHJcbiAgICAgICAgcmVnZXggPSAvWzAtOF0vO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc5JzpcclxuICAgICAgICByZWdleCA9IC9bMC05XS87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1xccy87XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0AnOlxyXG4gICAgICAgIHJlZ2V4ID0gL1thLXpBLVpdLztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndyc6XHJcbiAgICAgICAgcmVnZXggPSAvW2EtekEtWjAtOV0vO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZ2V4O1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVnZXhGcm9tTWFzayhtYXNrOiBzdHJpbmcpIHtcclxuICAgIGlmIChtYXNrKSB7XHJcbiAgICAgIGxldCBwYXR0ZXJuO1xyXG4gICAgICBpZiAodGhpcy5mb3JtYXRNb2RlbCkge1xyXG4gICAgICAgIHBhdHRlcm4gPSBtYXNrLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFwrL2csICdcXFxcKycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcclxuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC8tL2csICctJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFwoL2csICdcXFxcKCcpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcKS9nLCAnXFxcXCknKTtcclxuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXC8vZywgJ1xcXFwvJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFxzL2csICdcXFxccycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoLzovZywgJ1xcXFw6Jyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFxAKD8hXFxzKS9nLCAnXFxcXHcnKTtcclxuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXGQvZywgJ1xcXFx3Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0dGVybiA9IG1hc2sucmVwbGFjZSgvXFxcXC9nLCAnJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFwrL2csICcnKTtcclxuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoLy0vZywgJycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcKC9nLCAnJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFwpL2csICcnKTtcclxuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXC8vZywgJycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvOi9nLCAnJyk7XHJcbiAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvXFxAL2csICdcXFxcdycpO1xyXG4gICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoL1xcZC9nLCAnXFxcXHcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGF0dGVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=