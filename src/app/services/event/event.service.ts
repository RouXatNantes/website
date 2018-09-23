import { Injectable, Inject } from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class EventService {
  private notify = new Subject<any>();

  constructor() {
  }

  listen(): Observable<any> {
    return this.notify.asObservable();
  }

  notifyMiniMenu(mini: boolean) {
     this.notify.next(mini);
  }
}
