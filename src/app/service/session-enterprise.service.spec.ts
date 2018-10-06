import { TestBed, inject } from '@angular/core/testing';

import { SessionEnterpriseService } from './session-enterprise.service';

describe('SessionEnterpriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionEnterpriseService]
    });
  });

  it('should be created', inject([SessionEnterpriseService], (service: SessionEnterpriseService) => {
    expect(service).toBeTruthy();
  }));
});
