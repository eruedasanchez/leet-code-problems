function canJump(nums: number[]) : boolean {
    let reachTheFinal = true;
    let indexZero = nums.indexOf(0);

    if(indexZero === 1){
        if(nums[0] < nums.length - 1){
            reachTheFinal = false;
            return reachTheFinal;
        }
    } else if(indexZero !== -1 && indexZero !== nums.length - 1){
        // el 0 se encuentra en nums y 
        // no esta en la ultima posicion
        let i = 1
        
        while(i <= indexZero && 
            ((nums[i-1] === nums[i] + 1) || (nums[i-1] === nums[i]))){
                i++;
            } 
        
        if(indexZero === i-1){
            reachTheFinal = false;
            return reachTheFinal;
        }
    }
    return reachTheFinal;
};

let result = canJump([1,1,0,1]);
console.log(result);

// CORREGIR!