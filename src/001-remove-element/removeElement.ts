const removeElement = (nums: (number | '_')[], val: number) : number => {
    let valueOccurrences = 0;
    let tmpValue: number | '_' = 0;

    for (let i = 0; i < nums.length - valueOccurrences; i++) {
        if(nums[i] === val){
            valueOccurrences++;
            tmpValue = nums[nums.length-valueOccurrences];
            nums[i] = tmpValue;

            if(tmpValue === val) i--;
            
            nums[nums.length-valueOccurrences] = '_'; 
        }
    }
    return nums.length - valueOccurrences;
}