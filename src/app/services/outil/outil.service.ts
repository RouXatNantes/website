require('es6-shim');

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutilGroupe } from '../../components/page/accueil/outil/outilGroupe';





@Injectable()
export class OutilService {

  private outilUrl = 'app/outil';  // URL to web api

  private outils: OutilGroupe[] = [];

  constructor(private http: HttpClient) { }

  getOutils(): Observable<OutilGroupe[]> {
    return  this.http.get<OutilGroupe[]>(this.outilUrl).pipe(
        catchError(this.handleError));
  }
  private handleError (error: any) {
    console.error(error);
    return observableThrowError(error);
  }
}
