import { TestBed } from '@angular/core/testing';

import { ValidationRegexService } from './validation-regex.service';

describe('ValidationRegexService', () => {
  let service: ValidationRegexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationRegexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
