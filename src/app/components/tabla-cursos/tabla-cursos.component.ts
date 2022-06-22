import {Component, Input, OnInit} from '@angular/core';
import {Curso} from '../../model/Curso';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.scss'],
})
export class TablaCursosComponent implements OnInit {


  @Input() cursos: Curso[];
  constructor() { }

  ngOnInit() {}

}
