import { StockMomentInfo } from './stock-moment-info';

describe('StockMomentInfo', () => {
  it('should create an instance', () => {
    expect(new StockMomentInfo(new Date(Date.now()), '1', '1', '1', '1')).toBeTruthy();
  });
});
