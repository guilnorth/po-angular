import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { convertToBoolean } from '../../../utils/util';

/**
 * @docsPrivate
 *
 * @description
 *
 * Componente responsável por manipular os botões de aba.
 */
@Component({
  selector: 'po-tab-button',
  templateUrl: './po-tab-button.component.html',
  standalone: false
})
export class PoTabButtonComponent implements OnChanges, AfterViewInit {
  @ViewChild('tabButtom', { static: true }) tabButtom: ElementRef;

  // Desabilita o botão
  @Input('p-disabled') disabled: boolean;

  // Identificador do componente
  @Input('p-id') id: string;

  // Rótulo do botão
  @Input('p-label') label: string;

  // Função sera emitida quando a tab ficar ativada
  @Output('p-activated') activated = new EventEmitter();

  // Função sera emitida quando a tab ficar desabilitada ou escondida
  @Output('p-change-state') changeState = new EventEmitter();

  // Método recebido do usuário para ser disparado quando clicar na aba
  @Output('p-click') click = new EventEmitter();

  private _active: boolean;
  private _hide: boolean;
  widthButton;

  // Ativa o botão
  @Input('p-active') set active(value: boolean) {
    this._active = value;

    this.emitActivated();
  }

  get active() {
    return this._active;
  }

  // Oculta o botão
  @Input('p-hide') set hide(value: boolean) {
    this._hide = convertToBoolean(value);

    this.setDisplayOnHide();
  }

  get hide(): boolean {
    return this._hide;
  }

  constructor(
    private elementRef: ElementRef,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.widthButton = this.tabButtom.nativeElement.offsetWidth;
    this.changeDetector.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.hide && changes.hide.currentValue) || (changes.disabled && changes.disabled.currentValue)) {
      this.changeState.emit(this);
    }
  }

  onClick() {
    if (!this.disabled) {
      this.click.emit(this.id);
    }
  }

  private emitActivated() {
    if (this.active) {
      this.activated.emit(this);
    }
  }

  private setDisplayOnHide() {
    this.elementRef.nativeElement.style.display = this.hide ? 'none' : '';
  }
}
