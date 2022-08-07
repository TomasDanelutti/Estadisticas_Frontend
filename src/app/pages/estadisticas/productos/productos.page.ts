import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(
      private router: Router) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(['/estadisticas'], {replaceUrl: true});
  }
}
