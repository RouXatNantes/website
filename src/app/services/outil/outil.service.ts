require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { OutilGroupe } from '../../components/page/accueil/outil/outilGroupe';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OutilService {

  private outilUrl = 'app/outil';  // URL to web api

  private outils: OutilGroupe[] = [];

  constructor(private http: Http) { }

  getOutils(): Promise<OutilGroupe[]> {

    const parser = new DOMParser();
    return this.http.get(this.outilUrl)
      .toPromise()
      .then(response => this.convertXmlToOutilJson(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing outils' , error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToOutilJson(st: any): OutilGroupe[] {
    const jsObj = JSON.parse(st);
    return jsObj.root.outils as OutilGroupe[];
  }
}
