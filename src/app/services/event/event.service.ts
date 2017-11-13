import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
