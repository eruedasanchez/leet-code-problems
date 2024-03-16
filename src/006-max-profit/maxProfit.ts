const MAX_VALUE_PRICE = 10000;

const maxProfit = (prices: number[]) : number => {
    if(prices.length === 1) return 0;

    let half = Math.trunc(prices.length / 2);
    let leftValues: number[] = prices.slice(0, half);
    let rightValues: number[] = prices.slice(half, prices.length);
    let maxLeftProfit = maxProfit(leftValues);
    let maxRightProfit = maxProfit(rightValues);

    let maxLeftRightProfit = 0, minLeft = MAX_VALUE_PRICE;
    
    for (let l = 0; l < leftValues.length; l++) {
        minLeft = Math.min(minLeft, leftValues[l]);
    }
    
    for (let r = 0; r < rightValues.length; r++) {
        maxLeftRightProfit = Math.max(maxLeftRightProfit, rightValues[r] - minLeft);
    }
    
    return Math.max(maxLeftProfit, maxLeftRightProfit, maxRightProfit);
}
