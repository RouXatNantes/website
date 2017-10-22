/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { formationService } from './formation.service';

describe('FormationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormationService]
    });
  });

  it('should ...', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));
});
