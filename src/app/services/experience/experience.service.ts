require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Experiences } from '../../components/page/experiences/experiences';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExperienceService {

  private experienceUrl = 'app/experience';  // URL to web api

  private experiences: Experiences[] = [];

  constructor(private http: Http) { }

  getExperiences(): Promise<Experiences[]> {

    const parser = new DOMParser();
    return this.http.get(this.experienceUrl)
      .toPromise()
      .then(response => this.convertXmlToExperienceJson(response.json().data))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing experiences' , error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToExperienceJson(st: any): Experiences[] {
    const jsObj = JSON.parse(st);
    return jsObj.root.experience as Experiences[];
  }
}
