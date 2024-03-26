const plusOne = (digits: number[]) : number[] => {
    let sum: number[] = [];
    let carry = 0, adder = 0;
    for(let i = digits.length-1; i >= 0; i--) {
        adder = i === digits.length-1 ? 1 : 0;
        
        if(digits[i] + adder + carry === 10){
            sum[i] = 0;
            carry = 1;
            if(i === 0) sum.splice(i, 0, carry);
        } else {
            sum[i] = digits[i] + adder + carry; 
            carry = 0;
        }
    }
    return sum;
};
