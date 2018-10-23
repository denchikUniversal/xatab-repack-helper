import { TestBed } from '@angular/core/testing';

import { StreamServiceService } from './stream-service.service';

describe('StreamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreamServiceService = TestBed.get(StreamServiceService);
    expect(service).toBeTruthy();
  });
});
