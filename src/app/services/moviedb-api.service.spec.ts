import { TestBed } from '@angular/core/testing';

import { MoviedbApiService } from './moviedb-api.service';

describe('MoviedbApiService', () => {
  let service: MoviedbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviedbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
