const ZERO = 0, THREE = 3, NOT_FOUND = -1;

function threeSum(nums: number[]): number[][] {
    let tripleIndexes: [number, number, number][] = [];
    let tripleSumEqualzero: [number, number, number] = [-1,-1,-1];

    let firstCurrentValue = 0, secondCurrentValue = 0, thirdCurrentValue = 0;

    for (let i = 0; i <= nums.length - THREE; i++) {
        firstCurrentValue = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            secondCurrentValue = nums[j];
            for (let k = j+1; k < nums.length; k++) {
                thirdCurrentValue = nums[k];
                if(firstCurrentValue + secondCurrentValue + thirdCurrentValue === ZERO){
                    tripleSumEqualzero = [firstCurrentValue, secondCurrentValue, thirdCurrentValue];
                    tripleSumEqualzero.sort((value1, value2) => value1 - value2);
                    let indexTripleInArray = tripleIndexes.findIndex(triple => { return triple.every((adder, idx) => adder === tripleSumEqualzero[idx]);});
                    if(indexTripleInArray === NOT_FOUND) tripleIndexes.push(tripleSumEqualzero);
                }
            }
        }
    }
    return tripleIndexes;
};

let resultado = threeSum([0,1,1]);
console.log(resultado);