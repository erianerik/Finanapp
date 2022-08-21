import { TestBed } from '@angular/core/testing';

import { CustoServiceService } from './custo-service.service';

describe('CustoServiceService', () => {
  let service: CustoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
