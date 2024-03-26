const isPalindromeNumber = (x: number) : boolean => {
    const numberToArrayString = x.toString().split('');
    let i = 0
    while(i < Math.trunc(numberToArrayString.length / 2) && 
    numberToArrayString[i] === numberToArrayString[numberToArrayString.length-1-i] ) {
        i++;
    }
    return i === Math.trunc(numberToArrayString.length / 2);
};

let resultadoooo = isPalindromeNumber(123321);
console.log(resultadoooo);
