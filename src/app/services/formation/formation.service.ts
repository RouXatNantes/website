require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Formation } from '../../components/page/accueil/formation/formation';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormationService {

  private formationUrl = 'app/formation';  // URL to web api

  private formations: Formation[] = [];

  constructor(private http: Http) { }

  getFormations(): Promise<Formation[]> {

    const parser = new DOMParser();
    return this.http.get(this.formationUrl)
      .toPromise()
      .then(response => this.convertXmlToFormationJson(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing formations' , error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToFormationJson(st: any): Formation[] {
    const jsObj = JSON.parse(st);
    return jsObj.root.formation as Formation[];
  }
}
