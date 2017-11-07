require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Experiences } from '../../components/page/experiences/experiences';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExperienceService {

  private experienceUrl = 'app/experience';  // URL to web api

  private experiences: Experiences[] = [];

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experiences[]> {
    return  this.http.get<Experiences[]>(this.experienceUrl)
        .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
