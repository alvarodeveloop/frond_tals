import { TestBed, inject } from '@angular/core/testing';

import { TicketsAdminService } from './tickets-admin.service';

describe('TicketsAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketsAdminService]
    });
  });

  it('should be created', inject([TicketsAdminService], (service: TicketsAdminService) => {
    expect(service).toBeTruthy();
  }));
});
