import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { isNull } from 'util';
import { QueriesService } from '../services/queries.service';
import { identifierModuleUrl } from '@angular/compiler';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInvalid: boolean;
  userIsvalid: boolean;
  userStorage: any[] = [];
  usuario: UserModel = new UserModel();
  query = {
    campo : 'email',
    condicion: '==',
    valor: ''
  };
  constructor(private auth: AuthService,
              private router: Router,
              private authenticate: AngularFireAuth,
              private database: QueriesService,
              private saveUserData: UserdataService,
              private localStorage: Storage ) { }
  // user = 'email@prueba.ec';
  // pass = '12345678';
  // userId: string;
  // data = {
  //   id : '',
  //   apellidos: 'Mena Correa',
  //   cargo: 'Técnico',
  //   cedula: '12312412412',
  //   codigo: 'TEC01',
  //   nombre: 'Miguel Antonio'
  // };
  ngOnInit() {
    this.localStorage.get('userAuthenticated').then( data => {
     if (isNull(data)) {
       console.log('Local storage vacío');
     } else {
       console.log('Datos del storage', data);
       for ( const i of data ) {
       this.userStorage.push( i );
       }

     }
    });
    //   }).catch(error => {
    //   console.log('Error Storage', error);
    // });
    // }
  }

  // signNewUser() {
  //   this.auth.signNewUser(this.user, this.pass)
  //   .then(result => {
  //     this.userId = result.user.uid;
  //     this.data.id = this.userId;
  //     this.auth.createUser(this.data)
  //     .then(response => {
  //       console.log('Usuario creado exitósamente', response);
  //     }).catch(error => {
  //       console.log('Error al crear el usuario', error);
  //     });
  //   })
  //   .catch(error => {
  //     console.log('Error de registro de usuario', error);
  //   });
  // }

  async login(form: NgForm) {
    if (form.valid) {
      console.log('ARRAY DE USUARIOS, ', this.userStorage);
      if ( this.userStorage.length > 0 ) {
        for (const user of this.userStorage) {
          if (user.email === this.usuario.email) {
            this.userIsvalid = false;
            console.log('El usuario coincide');
            if ( user.email === this.usuario.email && user.password === this.usuario.password ) {
              console.log('El usuario y la contraseña coinciden bienvenido');
              this.userIsvalid = true;
              console.log('user almacenado', user, ' user enviado ', this.usuario);
              this.router.navigateByUrl('/main-menu');
              break;
            } else {
              this.userIsvalid = false;
              console.log('El usuario y la contraseña no coinciden');
            }
          }
        }
        if (!this.userIsvalid) {
          console.log('datos del usuario', this.usuario);
          console.log('PRIMER AUTHONLINE');
          this.authenticateOnline(this.usuario);
        }

      } else {
        console.log('ENTRE AL SEGUNDO AUTHONLINE');
        this.authenticateOnline(this.usuario);
      }

      }


    }
    async authenticateOnline(user: UserModel) {
      this.auth.login(this.usuario).then( async success => {
        this.usuario.token = success.user.refreshToken;
        this.query.valor = this.usuario.email;
        this.assearchInDb();
        console.log('array de usuarios', this.userStorage);
        this.router.navigateByUrl('/main-menu');
      })
        .catch( error => {
          console.log('error en login');
          this.userInvalid = true;
        });
    }
    assearchInDb() {
      let userData: any;
      const dbquery =  this.database.queryCollection('users', this.query).subscribe( data => {
        userData = data[0];
        this.usuario.nombre = userData.nombre;
        this.usuario.apellidos = userData.apellidos;
        this.usuario.cargo = userData.cargo;
        this.usuario.cedula = userData.cedula;
        this.usuario.codigo = userData.codigo;
        console.log('datos completos del usuario', this.usuario);
        console.log('resultado del query', userData);
        this.userStorage.push(this.usuario);
        this.localStorage.set('userAuthenticated', this.userStorage);
      }, ( error => {
        console.log('error buscando datos del usuario', error);
      }));
      return 0;
    }

    validateClick(e: Event) {
      this.userInvalid = false;
    }

  }
