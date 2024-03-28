const searchInsert = (nums: number[], target: number) : number => {
    let start = 0;
    let end = nums.length - 1;

    if (target < nums[start] || (nums.length === 1 && target <= nums[start])){
        return start;
    } else if (target > nums[end] || (nums.length === 1 && target > nums[end])) {
        return end + 1; 
    } else {
        while (start + 1 < end) {
            let half = Math.trunc((start + end) / 2);
            if (nums[half] <= target){
                start = half;
            } else {
                end = half;
            }
        }

        if (nums[start] === target) {
            return start;
        } else {
            return start + 1;
        }
    }
};


