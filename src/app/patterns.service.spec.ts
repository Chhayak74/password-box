/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatternsService } from './patterns.service';

describe('PatternsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatternsService]
    });
  });

  it('should ...', inject([PatternsService], (service: PatternsService) => {
    expect(service).toBeTruthy();
  }));
});
