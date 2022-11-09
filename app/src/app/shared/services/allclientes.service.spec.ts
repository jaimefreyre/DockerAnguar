import { TestBed } from '@angular/core/testing';

import { AllclientesService } from './allclientes.service';

describe('AllclientesService', () => {
  let service: AllclientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllclientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
