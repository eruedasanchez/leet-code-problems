const removeDuplicates = (nums: (number | '_')[]) : number => {
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
