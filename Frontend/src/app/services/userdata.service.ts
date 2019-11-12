import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData: object = {};
  constructor() { }

  setUserData(user: object) {
    this.userData = user;
    console.log('tengo la data', this.userData);
  }

  getUserData() {
    return this.userData;
  }

}
