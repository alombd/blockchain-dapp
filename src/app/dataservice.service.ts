import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataserviceService {
  private userIdSource = new BehaviorSubject<number>(0);
  currentUser = this.userIdSource.asObservable();

  private orderNumSource = new BehaviorSubject<number>(0);
  currentOrder = this.orderNumSource.asObservable();

  constructor() { }
  setUser(userid: number) {
    this.userIdSource.next(userid)
  }

   setOrderNumber(userid: number) {
    this.orderNumSource.next(userid)
  }  
}
