import { TestBed, inject } from '@angular/core/testing';
import { OutilService } from './outil.service';

describe('OutilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:  [OutilService]
    });
  });

  it('should be created', inject([OutilService], (service: OutilService) => {
    expect(service).toBeTruthy();
  }));
});
