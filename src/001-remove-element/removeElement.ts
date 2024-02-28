function removeElement(nums: (number | '_')[], val: number): number {
    let distinctVal: '_'[] = [];  
    
    for (let index = 0; index < nums.length; index++) {
        while(nums[index] === val){
            nums.splice(index, 1);
            distinctVal.push('_');
        }
    }
    
    nums = [...nums, ...distinctVal];
    return nums.length - distinctVal.length;
};
