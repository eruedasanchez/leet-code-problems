function removeDuplicates(nums: (number | '_')[]): number {
    let duplicates: '_'[] = [];

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if(nums[j] === nums[i]){
                duplicates.push('_');
                nums.splice(i,1);
                i--;
                break;
            }
        }
    }
    
    nums = [...nums, ...duplicates];
    
    return nums.length - duplicates.length;
};
