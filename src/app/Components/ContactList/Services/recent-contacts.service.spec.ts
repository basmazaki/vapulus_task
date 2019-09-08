import { TestBed } from '@angular/core/testing';

import { RecentContactsService } from './recent-contacts.service';

describe('RecentContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentContactsService = TestBed.get(RecentContactsService);
    expect(service).toBeTruthy();
  });
});
