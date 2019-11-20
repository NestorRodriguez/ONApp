import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData: object = {};
  private userBehavior: BehaviorSubject<object>;
  constructor() {
    this.userBehavior = new BehaviorSubject({});
   }

  public setUserData(user: object): void {
    this.userData = user;
    this.userBehavior.next(this.userData);
    console.log('tengo la data', this.userData);
  }

  public getUserData(): Observable<object> {
    return this.userBehavior.asObservable();
  }

}
