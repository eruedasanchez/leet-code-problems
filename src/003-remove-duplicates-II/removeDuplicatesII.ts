const MAX_OCURRENCES = 2;
const UNDERSCORE = '_';

const removingDuplicates = (nums: (number | '_')[]) : number => {
    let i = 0, j = 0;
    let currentNumber = nums[i], ocurrencesCurrentNumber = 0;
    let allowedNumbers = 0;
    
    while(j < nums.length){
        if(currentNumber === nums[j] && ocurrencesCurrentNumber < MAX_OCURRENCES){
            j++;
            ocurrencesCurrentNumber++;
            allowedNumbers++;
        } else if(currentNumber !== nums[j]){
            i = j;
            currentNumber = nums[i];
            ocurrencesCurrentNumber = 0;
        } else {
            let k = j;
            while(nums[k] === nums[i]) {
                nums.splice(k, 1);
            }
            i = k;
            j = i;
            currentNumber = nums[i];
            ocurrencesCurrentNumber = 0;
        }
    }
    
    for (let m = 0; m < allowedNumbers; m++) {
        nums.push('_');
    }
    
    return allowedNumbers;
}
