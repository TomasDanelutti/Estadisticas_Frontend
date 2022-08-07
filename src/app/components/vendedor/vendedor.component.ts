import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VendedorService} from '../../services/vendedor.service';
import {Vendedor} from '../../model/Vendedor';
import {Subscription} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: VendedorComponent
    }
  ]
})
export class VendedorComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private subscriptions: Subscription[] = [];
  vendedores: Vendedor[] = [];
  vendedorSeleccionado: Vendedor;
  @Input() disabled = false;

  constructor(private vendedorService: VendedorService) {
  }


  onChange = (area) => {
  }
  onTouched = () => {
  }


  writeValue(obj: any): void {
    this.vendedorSeleccionado = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.subscriptions.push(this.vendedorService.getVendedores()
        .subscribe(value => this.vendedores = value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

  onChangeVendedor(event: any) {
    this.onChange(event.value);
  }
}
