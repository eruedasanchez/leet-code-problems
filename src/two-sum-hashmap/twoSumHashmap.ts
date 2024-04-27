const twoSumHashmap = (nums: number[], target: number) : number[] => {
    let idxSumTarget = [];
    for (let i = 0; i < nums.length; i++) {
        let firstAddend = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let secondAddend = nums[j];
            if (firstAddend + secondAddend === target) {
                idxSumTarget.push(i);
                idxSumTarget.push(j);
                i = nums.length;
                j = nums.length;
            }
        }
    }
    return idxSumTarget;
};