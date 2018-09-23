require('es6-shim');

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../../components/page/accueil/formation/formation';





@Injectable()
export class FormationService {

  private formationUrl = 'app/formation';  // URL to web api

  private formations: Formation[] = [];

  constructor(private http: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return  this.http.get<Formation[]>(this.formationUrl).pipe(
        catchError(this.handleError));
  }
  private handleError (error: any) {
    console.error(error);
    return observableThrowError(error);
  }
}
