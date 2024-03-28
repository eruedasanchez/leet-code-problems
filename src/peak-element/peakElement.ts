const findPeakElement = (nums: number[]) : number => {
    let base = 0;
    let peak = nums.length - 1;

    while (base + 1 < peak) {
        let half = Math.trunc((base + peak) / 2);
        if (nums[half] <= nums[half+1]){
            base = half;
        } else {
            peak = half;
        }
    }
    
    if ((nums.length === 2 || peak-1 === base) && nums[base] > nums[peak]) peak = base;
    return peak;
};

