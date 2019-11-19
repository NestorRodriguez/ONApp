import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private userData = new Subject<any>();
  constructor() { }

  setUserData(user: object) {
    console.log('tengo la data', user);
    this.userData.next(user);
  }

  getUserData(): Observable<any> {
  return this.userData.asObservable();
  }

}
