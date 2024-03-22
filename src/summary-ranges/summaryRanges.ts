const summaryRanges = (nums: number[]) : string[] => {
    let ranges: string[] = [];
    let i = 0, interval = 0, currentRange = '';
    while(i < nums.length) {
        let j = i;
        while (j < nums.length && nums[i] + interval === nums[j]) {
            interval++;
            j++;
        }
        (nums[i] === nums[j-1]) ? currentRange = `${nums[i]}` : currentRange = `${nums[i]}->${nums[j-1]}`;
        ranges.push(currentRange);
        i = j;
        interval = 0;
    }
    return ranges;
};