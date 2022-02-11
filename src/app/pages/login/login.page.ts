import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../services/messages.service';

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
      private messages: MessagesService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: [, Validators.required],
      password: [, Validators.required]
    });
  }

    login() {
    if (this.loginForm.valid){
      this.router.navigate(['/home'], {replaceUrl: true});
    }
    else {
      this.messages.showMessage('Error', 'Usuario o contraseña incorrecto', 5000);
    }
    }
}
