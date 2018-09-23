require('es6-shim');

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competence } from '../../components/page/accueil/competence/competence';





@Injectable()
export class CompetenceService {

  private competenceUrl = 'app/competence';  // URL to web api

  private competences: Competence[] = [];

  constructor(private http: HttpClient) { }

  getCompetences(): Observable<Competence[]> {
    return  this.http.get<Competence[]>(this.competenceUrl).pipe(
        catchError(this.handleError));
  }
  private handleError (error: any) {
    console.error(error);
    return observableThrowError(error);
  }
}
