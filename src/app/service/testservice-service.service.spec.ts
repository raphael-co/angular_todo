import { TestBed } from '@angular/core/testing';

import { TestserviceServiceService } from './testservice-service.service';

describe('TestserviceServiceService', () => {
  let service: TestserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
