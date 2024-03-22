type RomanValue = [string, number];

const Romans: Record<string, RomanValue> = {
    I: ['I', 1], 
    V: ['V', 5], 
    X: ['X', 10],
    L: ['L', 50],
    C: ['C', 100],
    D: ['D', 500], 
    M: ['M', 1000]
};

function romanToInt(s: string) : number {
    let number = s.split('');
    let integerNumber = 0, digit = 0;
    while(digit < number.length) {
        if(number[digit] === Romans.I[0] && (number[digit+1] === Romans.V[0] || number[digit+1] === Romans.X[0])){
            integerNumber = integerNumber + Romans[number[digit+1]][1] - Romans.I[1];
            digit += 2;
        } else if(number[digit] === Romans.X[0] && (number[digit+1] === Romans.L[0] || number[digit+1] === Romans.C[0]) ){
            integerNumber = integerNumber + Romans[number[digit+1]][1] - Romans.X[1];
            digit += 2;
        } else if(number[digit] === Romans.C[0] && (number[digit+1] === Romans.D[0] || number[digit+1] === Romans.M[0])){
            integerNumber = integerNumber +  Romans[number[digit+1]][1] - Romans.C[1];
            digit += 2;
        } else {
            integerNumber += Romans[number[digit]][1]; 
            digit++;
        }
    }
    return integerNumber;
};
