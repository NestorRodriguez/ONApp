import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyC88QqO3nhYFlpiAphFzNmPCZWFwKLHH2Q';

  constructor( private authenticate: AngularFireAuth,
               private database: AngularFirestore) { }

  logout() {

  }

  login(usuario: UserModel): Promise<firebase.auth.UserCredential> {
      const email = usuario.email;
      const password = usuario.password;
      const login = this.authenticate.auth.signInWithEmailAndPassword(email, password);
      return login;
  }
  signNewUser(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    const register = this.authenticate.auth.createUserWithEmailAndPassword(email, pass);
    return register;

  }
  updateUser(id: string, data: any) {


    const updateUser = this.database.collection('users').doc(id).set(data);
    return updateUser;

  }
  createUser(data: any) {

    const updateUser = this.database.collection('users').doc(data.id).set(data);
    return updateUser;

  }
  async insertData(data: any) {
    data = JSON.stringify(data);
    data = JSON.parse(data);
    console.log('Voy a enviar esta data', data);
    const updateUser = await this.database.collection('inspecciones').doc('ascensores').set(data);
    console.log('INSERT', updateUser);
    return updateUser;

  }



}
