const hammingWeight = (n: number) : number => {
    let OnesQuantity = 0;

    while (n >= 2) {
        if (n % 2 === 1) OnesQuantity += 1;
        n = Math.trunc(n / 2); 
    }

    if (n === 1) OnesQuantity += 1
    
    return OnesQuantity;
};
