import { TestBed, inject } from '@angular/core/testing';

import { PublicityService } from './publicity.service';

describe('PublicityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicityService]
    });
  });

  it('should be created', inject([PublicityService], (service: PublicityService) => {
    expect(service).toBeTruthy();
  }));
});
