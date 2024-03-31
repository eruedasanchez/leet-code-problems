const singleNumberTwo = (nums: number[]) : number => {
    nums.sort((num1, num2) => num1 - num2);
    
    let i = 0;
    let single = nums[i];
    let ocurrenciesSingleNumber = 0;
    while (i < nums.length) {
        let j = i;
        while (j < nums.length && single === nums[j]) {
            ocurrenciesSingleNumber++;
            j++;
        } 
        
        if (single !== nums[j]) {
            if (ocurrenciesSingleNumber === 3) {
                single = nums[j];
                ocurrenciesSingleNumber = 0;
                i = j;
            } else {
                single = nums[j-1];
                i = nums.length;
            }
        }
    }
    
    return single;
}

let singleTwo = singleNumberTwo([2,2,3,2]);
console.log('singleTwo:', singleTwo);


// [2,2,3,2] -> [2,2,2,3] 




[0,0,0,1,1,1,2,2,2,3,6,6,6,7,7,7]