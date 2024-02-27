/**
 * Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index = 0, index1 = 0, index2 = 0;
    
    // index < m + n &&
    for(index = 0; nums1[index1] !== 0; index++){
        if(n !== 0 || nums1[index1] > nums2[index2]){
            index1++;
        } else {
            let tmp = nums1[index1]; 
            nums1[index] = nums2[index2];
            nums1[index + 1] = tmp;
            index1++;
            index2++;
        }
    }

    while(index < n + m){
        nums1[index] = nums2[index2];
        index2++;
        index++;
    }

    console.log(nums1);
};

let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6], n = 3;

merge(nums1, 3, nums2, 3);