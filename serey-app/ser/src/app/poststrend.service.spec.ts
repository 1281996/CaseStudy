import { TestBed } from '@angular/core/testing';

import { PoststrendService } from './poststrend.service';

describe('PoststrendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoststrendService = TestBed.get(PoststrendService);
    expect(service).toBeTruthy();
  });
});
