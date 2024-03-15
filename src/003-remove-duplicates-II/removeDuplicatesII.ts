const removingDuplicates = (nums: (number | '_')[]) : number => {
    let i = 0, j = 1, distinctCounter = 1;
    while(j < nums.length) {
        if(nums[i] === nums[j]){
            nums[j] = '_';
            j++;
        } else {
            i++;
            distinctCounter++;
            j === i ? j++ : nums[i] = nums[j];
        }
    }
    return distinctCounter;
}


// Entrada: números = [1,1,1,2,2,3]
// Salida: 5, números = [1,1,2,2,3,_]
