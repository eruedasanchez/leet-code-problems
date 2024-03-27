function singleNumber(nums: number[]): number {
    // comienzo buscando el maximo del arreglo
    let maxValue = Math.abs(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (maxValue < Math.abs(nums[i])) maxValue = Math.abs(nums[i]);
    } 
    
    let ocurrencies: Array<[number, number][]> = [];
    for (let i = 0; i <= maxValue; i++) {
        ocurrencies.push([[0,0], [0,0]]);
    }
    
    // cuento la cantidad de apariciones de cada elemento
    for (let j = 0; j < nums.length; j++) {
        console.log(nums[j]);
        if (nums[j] < 0) {
            ocurrencies[Math.abs(nums[j])][0][0] = nums[j];
            ocurrencies[Math.abs(nums[j])][0][1] += 1;
        } else {
            ocurrencies[Math.abs(nums[j])][1][0] = nums[j];
            ocurrencies[Math.abs(nums[j])][1][1] += 1;
        }
    }
    
    const singleIndex = ocurrencies.findIndex(ocurrencie => ocurrencie[0][1] === 1 || ocurrencie[1][1] === 1);
    let single = ocurrencies[singleIndex][0][0]; 
    if (ocurrencies[singleIndex][1][1] === 1) {
        single = ocurrencies[singleIndex][1][0];
    }
    
    return single;
};

