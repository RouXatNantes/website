require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../../components/page/accueil/formation/formation';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FormationService {

  private formationUrl = 'app/formation';  // URL to web api

  private formations: Formation[] = [];

  constructor(private http: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return  this.http.get<Formation[]>(this.formationUrl)
        .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
