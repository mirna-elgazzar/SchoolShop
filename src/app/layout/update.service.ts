import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UpdateService {
  private authUpdates: BehaviorSubject<boolean>;

  constructor() {
    this.authUpdates = new BehaviorSubject<boolean>(false);
  }

  getAuthUpdates() {
    return this.authUpdates.asObservable();
  }

  updateAuthStatus(status: boolean) {
    this.authUpdates.next(status);
  }
}
