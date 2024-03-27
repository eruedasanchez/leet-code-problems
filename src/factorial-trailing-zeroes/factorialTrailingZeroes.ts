const trailingZeroes = (n: number) : number => {
    if (n === 0) return 1;
    
    let factorial = trailingZeroes(n-1) * n;
    // let endZeroes = 0;
    // for (let i = 1; i <= n; i++) { factorial *= i; }

    // const factorialArr = factorial.toString().split('');
    // for (let digit = factorialArr.length-1; digit >= 0 && parseInt(factorialArr[digit]) === 0; digit--) {
    //     endZeroes++;
    // }
    // console.log('factorial:', factorial);
    // console.log('factorialArr:', factorialArr);
    console.log('factorial:', factorial);


    return factorial;
};

let fact = trailingZeroes(10);
console.log('fact', fact);


// 0 -> 1
// 1 -> 1 * 1 = 1
// 2 -> 1 * 2 = 2
// 3 -> 2 * 3 = 6