/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { experienceService } from './experience.service';

describe('ExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [ExperienceService]
    });
  });

  it('should ...', inject([ExperienceService], (service: ExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
