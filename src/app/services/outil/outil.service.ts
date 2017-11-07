require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutilGroupe } from '../../components/page/accueil/outil/outilGroupe';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class OutilService {

  private outilUrl = 'app/outil';  // URL to web api

  private outils: OutilGroupe[] = [];

  constructor(private http: HttpClient) { }

  getOutils(): Observable<OutilGroupe[]> {
    return  this.http.get<OutilGroupe[]>(this.outilUrl)
        .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
