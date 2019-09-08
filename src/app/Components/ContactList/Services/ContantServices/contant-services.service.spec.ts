import { TestBed } from '@angular/core/testing';

import { ContantServicesService } from './contant-services.service';

describe('ContantServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContantServicesService = TestBed.get(ContantServicesService);
    expect(service).toBeTruthy();
  });
});
