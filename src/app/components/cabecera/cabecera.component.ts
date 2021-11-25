import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {}

  navegarHome() {
    this.router.navigate(['home']);
  }

}
