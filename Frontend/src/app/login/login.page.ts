import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UserModel = new UserModel();
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  login(form: NgForm) {
    if (form.valid) {
      console.log(form);
      this.auth.login(this.usuario).subscribe( response => {
        console.log(response);
        this.router.navigateByUrl('/main-menu');
      });
    }
  }
}
