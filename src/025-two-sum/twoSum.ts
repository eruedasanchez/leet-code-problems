function twoSum(numbers: number[], target: number): number[] {
    let indexesSumTwo: [number, number] = [-1, -1];
    
    for (let i = 0; i < numbers.length-1 && numbers[i] <= Math.abs(target); i++) {
        for (let j = i+1; j < numbers.length && numbers[i] + numbers[j] <= Math.abs(target); j++) {
            if(numbers[i] + numbers[j] === target){
                indexesSumTwo[0] = i+1;
                indexesSumTwo[1] = j+1;
                j = numbers.length;
                i = numbers.length;
            }
        }
    }
    return indexesSumTwo;
};

let res = twoSum([-3,3,4,90], 0);
console.log(res);
