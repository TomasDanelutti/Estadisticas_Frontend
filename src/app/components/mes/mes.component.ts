import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MesService} from '../../services/mes.service';
import {Mes} from '../../model/Mes';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MesComponent
    }
  ]
})
export class MesComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private subscriptions: Subscription[] = [];
  meses: Mes[] = [];
  mesSeleccionado: Mes;
  disabled = false;

  constructor(private mesService: MesService) {
  }


  onChange = (area) => {
  }
  onTouched = () => {
  }


  writeValue(obj: any): void {
    this.mesSeleccionado = obj;
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
    this.subscriptions.push(this.mesService.getMeses()
        .subscribe(value => this.meses = value));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

  onChangeMes(event: any) {
    this.onChange(event.value);
  }
}
