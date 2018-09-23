require('es6-shim');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Mail } from '../../components/mail/mail';



@Injectable()
export class MailService {

  private mailUrl = environment.urlSite + '/mail.php';  // URL to web api

  constructor(private http: HttpClient) { }

  sendMail(nom: string, adresse: string, msg: string): Observable<Mail> {
    return this.http.post<any>(this.mailUrl, JSON.stringify({ 'nom': nom, 'email': adresse, 'mail': msg }))
               .pipe(map(res => res.response.mail))
               .pipe(
                  catchError(this.handleError('sendMail'))
               );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
