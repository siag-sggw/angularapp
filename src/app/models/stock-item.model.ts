import { StockMomentInfo } from './stock-moment-info';

export class StockItem {
    symbol: string;
    data: StockMomentInfo[];

    constructor(symbol: string, data: StockMomentInfo[]) {
        this.symbol = symbol;
        this.data = [];
        data.forEach( (stockInfo: StockMomentInfo) => {
            this.data.push(new StockMomentInfo(
                new Date(stockInfo.date),
                stockInfo.high,
                stockInfo.low,
                stockInfo.open,
                stockInfo.close
            ));
        });
    }
}
