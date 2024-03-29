const binarySearchRowMatrix = (nums: number[], target: number) : number => {
    let start = 0;
    let end = nums.length - 1;

    if (target < nums[start] || target > nums[end] || (nums.length === 1 && target !== nums[start])){
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


function searchMatrix(matrix: number[][], target: number): boolean {
    let start = 0, end = matrix.length - 1;
    let findTarget = false;
    
    let firstValueLastRow = matrix[end][start];
    if (firstValueLastRow <= target) start = end;
    
    while (start + 1 < end) {
        let half = Math.trunc((start + end) / 2);
        if (matrix[half][0] <= target){
            start = half;
        } else {
            end = half;
        }
    }
    let indexElementInRow = binarySearchRowMatrix(matrix[start], target);
    if (indexElementInRow !== -1 && matrix[start][indexElementInRow] === target){
        findTarget = true;
    }
    return findTarget;
};