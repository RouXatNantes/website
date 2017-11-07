require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competence } from '../../components/page/accueil/competence/competence';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompetenceService {

  private competenceUrl = 'app/competence';  // URL to web api

  private competences: Competence[] = [];

  constructor(private http: HttpClient) { }

  getCompetences(): Observable<Competence[]> {
    return  this.http.get<Competence[]>(this.competenceUrl)
        .catch(this.handleError);
  }
  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
