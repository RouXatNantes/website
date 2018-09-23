require('es6-shim');

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../components/entete/menu/menu';





@Injectable()
export class MenuService {

  private menusUrl = 'app/menu';  // URL to web api

  private menus: Menu[] = [];

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return  this.http.get<Menu[]>(this.menusUrl).pipe(
        catchError(this.handleError));
  }
  private handleError (error: any) {
    console.error(error);
    return observableThrowError(error);
  }

}
