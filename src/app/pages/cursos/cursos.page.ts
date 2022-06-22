import { Component, OnInit } from '@angular/core';
import {CursosService} from '../../services/cursos.service';
import {Curso} from '../../model/Curso';
import {InscripcionService} from '../../services/inscripcion.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  cursos: Curso[] = [];
  constructor(private cursoService: CursosService,
              private inscripcionService: InscripcionService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(value => this.cursos = value);
    this.inscripcionService.getCursosByUsuario().subscribe(value => console.log(value));
  }

}
