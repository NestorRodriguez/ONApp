import { TestBed } from '@angular/core/testing';

import { SaveInspectionService } from './save-inspection.service';

describe('SaveInspectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveInspectionService = TestBed.get(SaveInspectionService);
    expect(service).toBeTruthy();
  });
});
