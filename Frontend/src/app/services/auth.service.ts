import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth  } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyC88QqO3nhYFlpiAphFzNmPCZWFwKLHH2Q';

  constructor( private auth: AngularFireAuth,
               private database: AngularFirestore
    ) { }

  logout() {

  }

  login(usuario: UserModel) {

      const email = usuario.email;
      const password = usuario.password;

      const db = this.database.collection('inspeccion_ascensor').valueChanges();
      db.subscribe( data => {
      console.log('Data', data);
    });
      console.log('Resultado', db);

      const login = this.auth.auth.signInWithEmailAndPassword(email, password).then(result => {
        console.log('LOGIN', result);
      }).catch(error => {
        console.log('Error de autenticación', error);
      });

      return login;

  }

  nuevoUsuario(usuario: UserModel) {

  }

}
