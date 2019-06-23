import { TestBed } from '@angular/core/testing';

import { FavoriteStocksService } from './favorite-stocks.service';

describe('FavoriteStocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteStocksService = TestBed.get(FavoriteStocksService);
    expect(service).toBeTruthy();
  });
});
