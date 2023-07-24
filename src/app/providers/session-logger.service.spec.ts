import { TestBed } from '@angular/core/testing';

import { SessionLoggerService } from './session-logger.service';

describe('SessionLoggerService', () => {
  let service: SessionLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
