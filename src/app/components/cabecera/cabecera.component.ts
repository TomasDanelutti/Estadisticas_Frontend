import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Usuario} from '../../model/Usuario';
import {UsuarioLogueadoState} from '../../state/usuarioLogueado.state';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {
  @Select(UsuarioLogueadoState.getUsuario) usuarioState: Observable<Usuario>;
  usuario: Usuario;
  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioState.subscribe(value => this.usuario = value);
  }

  navegarHome() {
    this.router.navigate(['home']);
  }

}
