// const rotate = (nums: number[], k: number) : void => {
//     const lastKElements: number[] = nums.splice(nums.length - k, k) ;
//     nums = lastKElements.concat(nums);
//     console.log(nums);
// };

const rotate = (nums: number[], k: number) : void => {
    for (let i = 0; i < k; i++) {
        let lastValue = nums[nums.length - 1];
        for (let j = nums.length - 1; j >= 0; j--) {
            j === 0 ? nums[0] = lastValue : nums[j] = nums[j-1];
        }
    }
}

rotate([-1,-100,3,99], 2);
