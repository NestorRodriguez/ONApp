import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UserModel = new UserModel();
  constructor(private auth: AuthService,
              private router: Router,
              private authenticate: AngularFireAuth) { }

  ngOnInit() {

  }

  login(form: NgForm) {
    if (form.valid) {
      const login = this.authenticate.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
      .then( result => {
        this.router.navigateByUrl('/main-menu');
      }).catch(error => {
        console.log('Error de autenticación', error);
      })
    }
  }
}


