import { TestBed } from '@angular/core/testing';

import { JebamoService } from './jebamo.service';

describe('JebamoService', () => {
  let service: JebamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JebamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
