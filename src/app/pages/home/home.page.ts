import {Component, OnInit} from '@angular/core';
import {CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(value => console.log(value));
  }

}
