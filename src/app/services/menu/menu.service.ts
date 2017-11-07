require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../components/entete/menu/menu';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService {

  private menusUrl = 'app/menu';  // URL to web api

  private menus: Menu[] = [];

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return  this.http.get<Menu[]>(this.menusUrl)
        .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }

}
