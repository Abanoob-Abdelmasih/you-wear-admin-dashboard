import { TestBed } from '@angular/core/testing';

import { Convert2fileService } from './convert2file.service';

describe('Convert2fileService', () => {
  let service: Convert2fileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Convert2fileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
