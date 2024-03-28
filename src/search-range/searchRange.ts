const searchRange = (nums: number[], target: number) : number[] => {
    let start = 0, end = nums.length - 1;
    
    if (nums.length === 0 || target < nums[start] || target > nums[end] || 
        (nums.length === 1 && target !== nums[start])){
        return [-1, -1];
    } else if(nums[end] === target){
        start = end;
        while (start >= 0 && nums[start] === nums[end]) {
            start -= 1;
        }
        return [start+1, end];
    } else {
        let intervalElementSearched = [-1,-1];
        while (start + 1 < end) {
            let half = Math.trunc((start + end) / 2);
            if (nums[half] <= target){
                start = half;
            } else {
                end = half;
            }
        }
        
        if (nums[start] === target){
            end = start;
            start = end;
            while (start >= 0 && nums[start] === nums[end]) {
                start -= 1;
            }
            intervalElementSearched = [start+1, end]; 
        } 
        return intervalElementSearched;
    }
    
};
