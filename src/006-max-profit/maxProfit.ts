const profits = (day: number, prices: number[]) : number[] => {
    const purchaseValue = prices[day];
    let profitsInDays : number[] = [];

    for (let i = day; i < prices.length; i++) {
        profitsInDays.push(prices[i] - purchaseValue);
    }

    return profitsInDays;  
};


function maxProfit(prices: number[]) : number {
    let maximProfit = 0;

    for (let day = 0; day < prices.length; day++) {
        let profitsOnSelling = profits(day, prices);
        let maxProfitCurrentDay = Math.max(...profitsOnSelling);

        if(maxProfitCurrentDay > maximProfit){
            // actualización del valor de maxima ganancia
            maximProfit = maxProfitCurrentDay;
        } 
    }
    
    return maximProfit;
};

