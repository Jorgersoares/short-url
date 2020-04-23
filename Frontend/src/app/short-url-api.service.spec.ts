import { TestBed } from '@angular/core/testing';

import { ShortUrlApiService } from './short-url-api.service';

describe('ShortUrlApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortUrlApiService = TestBed.get(ShortUrlApiService);
    expect(service).toBeTruthy();
  });
});
