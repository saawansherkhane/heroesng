import { TestBed, inject } from '@angular/core/testing';

import { HerosApiService } from './heros-api.service';

describe('HerosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerosApiService]
    });
  });

  it('should ...', inject([HerosApiService], (service: HerosApiService) => {
    expect(service).toBeTruthy();
  }));
});
