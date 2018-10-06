import { TestBed, inject } from '@angular/core/testing';

import { AdminEnterpriseService } from './admin-enterprise.service';

describe('AdminEnterpriseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminEnterpriseService]
    });
  });

  it('should be created', inject([AdminEnterpriseService], (service: AdminEnterpriseService) => {
    expect(service).toBeTruthy();
  }));
});
