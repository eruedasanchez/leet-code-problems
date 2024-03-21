const minSubArrayLen = (target: number, nums: number[]) : number => {
    if(nums.length === 1){
        if(nums[0] === target){
            return 1;
        } else {
            return 0;
        }
    }
    
    let half = Math.trunc(nums.length / 2);
    let leftSubArray = nums.slice(0, half);
    let rightSubArray = nums.slice(half, nums.length);  
    let minSubArrayLeft = minSubArrayLen(target, leftSubArray);
    let minSubArrayRight = minSubArrayLen(target, rightSubArray);
    
    // let minSubArrayLeftRight = 0;
    // for (let l = 0; l < leftSubArray.length; l++){
    //     let r = l;
    //     if(leftSubArray[l] + rightSubArray[r] < target){
    //         r++;

    //     }
        
    // }


    
    // return Math.min(minSubArrayLeft, minSubArrayLeftRight, minSubArrayRight);
    return 0;
};



// [2,3,1,2,4,3]

// izq <- [2,3,1]
// der <- [2,4,3]


// [2,3,1]

// izq <- [2] <- 0
// der <- [3,1] <- 0

// la idea es recorrer por cada elemento de la izquieda e ir sumando 
// con cada uno de la derecha mientras no llegue al target, ir incrementando lo que 
// seria la longitud del subarreglo y como los enteros son positivos, el ciclo terminaria
// cuando el elemento de der que estoy recoriendo es >= target, si llegue al final de der


// [3,1]

// izq <- [3] <- 0
// der <- [1] <- 0

