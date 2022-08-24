import { TestBed } from '@angular/core/testing';

import { CustoService } from './custo-service.service';

describe('CustoServiceService', () => {
  let service: CustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
