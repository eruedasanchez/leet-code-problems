const rotate = (nums: number[], k: number): void => {
    let rotatedArray = new Array(nums.length).fill(0);
    const congruence = k % nums.length; 
    
    for (let i = 0; i < nums.length; i++) {
        rotatedArray[(i + congruence) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotatedArray[i];
    }
}