const minSubArrayLen = (target: number, nums: number[]) : number =>  {
    let minimalLength = 0;
    
    
    
    return minimalLength;
    
};

// [2,3,1,2,4,3], 7



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

