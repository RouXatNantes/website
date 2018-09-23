require('es6-shim');

import {throwError as observableThrowError,  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Experiences } from '../../components/page/experiences/experiences';





@Injectable()
export class ExperienceService {

  private experienceUrl = 'app/experience';  // URL to web api

  private experiences: Experiences[] = [];

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experiences[]> {
    return  this.http.get<Experiences[]>(this.experienceUrl).pipe(
        catchError(this.handleError));
  }
  private handleError (error: any) {
    console.error(error);
    return observableThrowError(error);
  }
}
