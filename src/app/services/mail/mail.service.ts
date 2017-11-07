require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Mail } from '../../components/mail/mail';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MailService {

  private mailUrl = environment.urlSite + '/mail.php';  // URL to web api

  private mail: Mail;

  constructor(private http: HttpClient) { }

  sendMail(nom: string, adresse: string, msg: string): Promise<Mail> {
    return this.http.post(this.mailUrl, JSON.stringify({ 'nom': nom, 'email': adresse, 'mail': msg }))
      .toPromise()
      .catch((error: any) => {
          console.error('Impossible de récupérer les infos sur le mail', error);
          return Observable.throw(error.message || error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('error parsing mail', error);
    return Promise.reject(error.message || error);
  }
}
