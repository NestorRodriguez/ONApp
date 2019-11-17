import { TestBed } from '@angular/core/testing';

import { LoadinitdataService } from './loadinitdata.service';

describe('LoadinitdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadinitdataService = TestBed.get(LoadinitdataService);
    expect(service).toBeTruthy();
  });
});
