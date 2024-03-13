const strStr = (haystack: string, needle: string) : number => {
    let indexNeedleInHaystack = -1;
    
    for (let idx_start = 0; idx_start < haystack.length; idx_start++) {
        for (let idx_end = idx_start+1; idx_end <= haystack.length; idx_end++) {
            if(haystack.substring(idx_start,idx_end) === needle){
                indexNeedleInHaystack = idx_start;
                idx_end = haystack.length;
                idx_start = haystack.length;
            }
        }
    }
    return indexNeedleInHaystack;
};

