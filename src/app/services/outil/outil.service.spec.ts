/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { outilService } from './outil.service';

describe('OutilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [OutilService]
    });
  });

  it('should ...', inject([OutilService], (service: OutilService) => {
    expect(service).toBeTruthy();
  }));
});
