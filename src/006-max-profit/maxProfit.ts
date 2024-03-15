const maxProfit = (prices: number[]) : number => {
    let maximProfit = 0;
    for (let purchaseDay = 0; purchaseDay < prices.length; purchaseDay++) {
        for (let saleDay = purchaseDay + 1; saleDay < prices.length; saleDay++) {
            if(prices[saleDay] - prices[purchaseDay] > 0 &&
            prices[saleDay] - prices[purchaseDay] > maximProfit){
                maximProfit = prices[saleDay] - prices[purchaseDay];
            }
        }
        
    }
    return maximProfit;
}

// ver opcion d&q