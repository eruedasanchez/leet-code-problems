const majorityElement = (nums: number[]) : number => {
    let majorityElement = -1, maxValue = -1;
    let limitAppear = Math.round(nums.length / 2);

    // find max number in array
    for(const number of nums){
        if(number > maxValue) maxValue = number;
    }

    // creo array lleno de 0's de longitud maxValue
    let countingArray: number[] = [];
    for (let index = 0; index <= maxValue; index++) {
        countingArray[index] = 0;
    }

    
    for (let j = 0; j < nums.length; j++) {
        countingArray[nums[j]] = countingArray[nums[j]] + 1;
    }

    
    for (let k = 0; k < countingArray.length; k++) {
        if(countingArray[k] >= limitAppear){
            majorityElement = k;
            break; 
        }
    }
    
    return majorityElement;
};

let res = majorityElement([3,2,3]);
console.log(res);
