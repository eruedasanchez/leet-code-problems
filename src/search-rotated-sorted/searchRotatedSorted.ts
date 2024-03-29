const findPeakElementRotated = (nums: number[]) : number => {
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
    console.log('peak:', peak);
    return peak;
};

const binarySearch = (nums: number[], target: number) : number => {
    let start = 0;
    let end = nums.length - 1;

    if (target < nums[start] || target > nums[end] || 
        (nums.length === 1 && target !== nums[start])){
        return -1;
    } else if(nums[end] === target){
        return end;
    } else {
        let indexElementSearched = -1;
        while (start + 1 < end) {
            let half = Math.trunc((start + end) / 2);
            if (nums[half] <= target){
                start = half;
            } else {
                end = half;
            }
        }
        if (nums[start] === target) indexElementSearched = start;
        return indexElementSearched;
    }
};

function search(nums: number[], target: number) : number {
    let indexTarget = -1;
    let pivotTmp = findPeakElementRotated(nums);
    let pivot = pivotTmp; 
    
    for (let i = 0; pivotTmp >= 0; i++) {
        let currentNumber = nums[0];
        nums.splice(0,1);
        pivotTmp -= 1;
        nums.splice(nums.length, 0, currentNumber);
    }

    console.log('pivot:', pivot);
    console.log('nums final:', nums);
    indexTarget = binarySearch(nums, target);
    console.log('indexTarget', indexTarget);

    if (indexTarget !== -1){
        console.log('entro aca?');
        indexTarget = (pivot + indexTarget + 1) % nums.length;
    }

    return indexTarget;
};

let busq = search([5,1,3], 1); 
console.log('res:', busq);
// 3
// [0,1,2,4,5,6,7]

// n[0] = 0 -> 3 + 1 % 7 -> [4,5,6,7,0,1,2]
// n[1] = 1 -> 3 + 2 % 7 -> [4,5,6,7,0,1,2]
// n[2] = 2 -> 3 + 3 % 7 -> [4,5,6,7,0,1,2]
// n[3] = 4 -> 3 + 4 % 7 -> [4,5,6,7,0,1,2]
// n[4] = 5 -> 3 + 5 % 7 -> [4,5,6,7,0,1,2]
// n[5] = 6 -> 3 + 6 % 7 -> [4,5,6,7,0,1,2]
// n[6] = 7 -> 3 + 7 % 7 -> [4,5,6,7,0,1,2]

//        .                        s   s
// [0,0,1,2,3,4,4,5,6] -> [2,3,4,4,5,6,0,0,1]

//    .
// [0,1,2,4,5,6,7] -> [1,2,4,5,6,7,0]

//      .
// [1,3,5] -> [5,1,3]
