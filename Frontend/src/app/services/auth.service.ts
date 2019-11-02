import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyC88QqO3nhYFlpiAphFzNmPCZWFwKLHH2Q';

  constructor( private http: HttpClient) { }

  logout() {

  }

  login(usuario: UserModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${ this.url }/accounts:signInWithPassword?key=${ this.apiKey }`, authData);

  }

  nuevoUsuario(usuario: UserModel) {

  }

}
