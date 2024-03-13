function shifToRight(nums1: number[], m: number, start: number): void {
    for (let j = m-1; j >= start; j--) {
        nums1[j+1] = nums1[j];
        console.log('nums1 en auxiliar:', nums1);
    }
}

const merge = (nums1: number[], m: number, nums2: number[], n: number) : void => {
    let mainIndex, indexNums1 = 0, indexNums2 = 0;

    if(n === 0) return;
    
    for (mainIndex = 0; mainIndex < m + n && nums1[mainIndex] !== 0 && indexNums2 !== n; mainIndex++) {
        if(nums1[indexNums1] <= nums2[indexNums2]){
            indexNums1++;
            console.log('nums1 con prioridad nums1:', nums1);
        } else {
            shifToRight(nums1, m, indexNums1);
            nums1[mainIndex] = nums2[indexNums2];
            indexNums1++;
            indexNums2++;
            console.log('nums1 con prioridad nums2:', nums1);
        }
    }

    while(mainIndex < n + m && indexNums2 !== n){
        nums1[mainIndex] = nums2[indexNums2];
        indexNums2++;
        mainIndex++;
    }

    console.log('nums1 final:', nums1);
};

merge([4,5,6,0,0,0], 3, [1,2,3], 3);

// 4 console.log('nums1 en auxiliar:', nums1);
// 16 console.log('nums1 con prioridad nums1:', nums1);
// 21 console.log('nums1 con prioridad nums2:', nums1);
// 28 console.log('nums1 final:', nums1);