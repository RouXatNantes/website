/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { mailService } from './mail.service';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [MailService]
    });
  });

  it('should ...', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
