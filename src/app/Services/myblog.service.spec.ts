import { TestBed } from '@angular/core/testing';

import { MyblogService } from './myblog.service';

describe('MyblogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyblogService = TestBed.get(MyblogService);
    expect(service).toBeTruthy();
  });
});
