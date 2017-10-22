require('es6-shim');

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { Mail } from '../../components/mail/mail';

@Injectable()
export class MailService {

  private mailUrl = environment.urlSite + '/mail.php';  // URL to web api

  private mail: Mail;

  constructor(private http: Http) { }

  sendMail(nom: string, adresse: string, msg: string): Promise<Mail> {

    const parser = new DOMParser();
    return this.http.post(this.mailUrl, JSON.stringify({ "nom": nom, "email": adresse, "mail": msg }))
      .toPromise()
      .then(response => this.convertXmlToMailJson(response.text()))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing mail', error);
    return Promise.reject(error.message || error);
  }
  private convertXmlToMailJson(st: any): Mail {
    const jsObj = JSON.parse(st);
    return jsObj.response.mail as Mail;
  }
}
