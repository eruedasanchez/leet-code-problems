function addBinary(a: string, b: string) : string {
    let binarySum = '', carry = 0, sum = [];
    let firstOperand = a, secondOperand = b;
    if(b.length > a.length){
        firstOperand = b;
        secondOperand = a;
    }
    
    let j = secondOperand.length - 1;
    for(let i = firstOperand.length - 1; i >= 0; i--) {
        let currentDigitFirstOperand = parseInt(firstOperand[i]);
        let currentDigitSecondOperand = j >= 0 ? parseInt(secondOperand[j]) : 0;

        sum[i] = (currentDigitFirstOperand + currentDigitSecondOperand + carry) % 2;
        
        if((currentDigitFirstOperand + currentDigitSecondOperand + carry)  === 2
        || (currentDigitFirstOperand + currentDigitSecondOperand + carry === 3)){
            carry = 1;
        } else {
            carry = 0;
        }

        if(i === 0 && carry === 1) sum.splice(i, 0, carry);
        j--;
    }
    binarySum = sum.join('');
    return binarySum;
};
