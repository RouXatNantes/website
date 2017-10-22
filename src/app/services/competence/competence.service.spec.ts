/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { competenceService } from './competence.service';

describe('CompetenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [CompetenceService]
    });
  });

  it('should ...', inject([CompetenceService], (service: CompetenceService) => {
    expect(service).toBeTruthy();
  }));
});
