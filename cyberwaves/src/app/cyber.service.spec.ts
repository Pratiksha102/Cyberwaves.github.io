import { TestBed } from '@angular/core/testing';

import { CyberService } from './cyber.service';

describe('CyberService', () => {
  let service: CyberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
