function singleNumberTwo(nums: number[]): number {
    nums.sort((num1, num2) => num1 - num2);
    let single = nums[0];

    for (let j = 1; j < nums.length; j++) {
        if (single !== nums[j]) {
            single = nums[j];
        } 
    }

    console.log(nums);

    return single;
}

let singleTwo = singleNumberTwo([0,99,0,1,0,99,99]);
console.log('singleTwo:', singleTwo);

