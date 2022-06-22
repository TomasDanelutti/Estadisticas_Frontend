import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../services/messages.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private messages: MessagesService,
      private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: [, Validators.required],
      password: [, Validators.required]
    });
  }

    login() {
    if (this.loginForm.valid){
      this.loginService.login(this.loginForm.controls.usuario.value, this.loginForm.controls.password.value)
          .subscribe(value => {
            this.router.navigate(['/cursos'], {replaceUrl: true});
          }, error => this.messages.showAlert('Error', 'usuario o clave incorrecto', 3));
    }
    else {
      this.messages.showMessage('Error', 'Usuario o contraseña incorrecto', 5000);
    }
    }

    toggleMostrarPassword() {
    }
}
