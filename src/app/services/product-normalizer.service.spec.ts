import { TestBed } from '@angular/core/testing';

import { ProductNormalizerService } from './product-normalizer.service';

describe('ProductNormalizerService', () => {
  let service: ProductNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
