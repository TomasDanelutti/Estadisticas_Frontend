import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../services/messages.service';
import {LoginService} from '../../services/login.service';
import {Store} from '@ngxs/store';
import {SetUsuarioAction} from '../../state/usuarioLogueado.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pwdInputType: string;
  hide = true;
  loginForm: FormGroup;
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private messages: MessagesService,
      private loginService: LoginService,
      private store: Store
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: [, Validators.required],
      contrasena: [, Validators.required]
    });
  }

  ionViewWillEnter() {
    this.pwdInputType = this.hide ? 'password' : 'text';
  }

    login() {
      this.loginService.login(this.loginForm.controls.usuario.value, this.loginForm.controls.contrasena.value)
          .subscribe(usuario => {
            this.store.dispatch(new SetUsuarioAction(usuario));
            console.log(usuario);
            this.router.navigate(['/home'], {replaceUrl: true});
          }, error => this.messages.showMessage('Error', 'usuario o clave incorrecto', 5000));
    }

  pwdVisibility() {
    this.hide = !this.hide;
    this.pwdInputType = this.hide ? 'password' : 'text';
  }
}
