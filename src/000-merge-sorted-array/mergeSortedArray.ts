const merge = (nums1: number[], m: number, nums2: number[], n: number) : void => {
    for (let indexNums2 = 0; indexNums2 < n; indexNums2++) {
        nums1[m + indexNums2] = nums2[indexNums2];  
    }

    for (let j = m; j < m + n; j++) {
        let i = j;
        while (i > 0 && nums1[i] < nums1[i-1]) {
            let tmp = nums1[i-1];
            nums1[i-1] = nums1[i];
            nums1[i] = tmp;
            i--;
        }
    }
}
