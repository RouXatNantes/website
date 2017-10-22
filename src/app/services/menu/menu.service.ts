require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Menu } from '../../components/entete/menu/menu';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  private menusUrl = 'app/menu';  // URL to web api

  private menus: Menu[] = [];

  constructor(private http: Http) { }

  getMenus(): Promise<Menu[]> {

    const parser = new DOMParser();
    return this.http.get(this.menusUrl)
      .toPromise()
      .then(response => this.convertXmlToMenuJson(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing menu' , error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToMenuJson(st: any): Menu[] {
    const jsObj = JSON.parse(st);
    return jsObj.root.menu as Menu[];
  }
}
