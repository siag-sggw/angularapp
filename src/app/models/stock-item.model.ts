import { StockMomentInfo } from './stock-moment-info';

export class StockItem {
    symbol: string;
    data: StockMomentInfo[];

    constructor(symbol: string, data: StockMomentInfo[]) {
        this.symbol = symbol;
        this.data = [];
        data.forEach( (data: StockMomentInfo) => {
            this.data.push(new StockMomentInfo(
                new Date(data.date),
                data.high,
                data.low,
                data.open,
                data.close
            ));
        });
    }
}
