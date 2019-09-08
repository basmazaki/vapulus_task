import { TestBed } from '@angular/core/testing';

import { ShareServicesService } from './share-services.service';

describe('ShareServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareServicesService = TestBed.get(ShareServicesService);
    expect(service).toBeTruthy();
  });
});
