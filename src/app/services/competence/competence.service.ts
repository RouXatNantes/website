require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Competence } from '../../components/page/accueil/competence/competence';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompetenceService {

  private competenceUrl = 'app/competence';  // URL to web api

  private competences: Competence[] = [];

  constructor(private http: Http) { }

  getCompetences(): Promise<Competence[]> {

    const parser = new DOMParser();
    return this.http.get(this.competenceUrl)
      .toPromise()
      .then(response => this.convertXmlToCompetenceJson(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing competences' , error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToCompetenceJson(st: any): Competence[] {
    const jsObj = JSON.parse(st);
    return jsObj.root.competence as Competence[];
  }
}
