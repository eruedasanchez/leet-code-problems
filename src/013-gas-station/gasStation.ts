const canCompleteCircuit = (gas: number[], cost: number[]) : number => {
    let start = -1, end = -1;
    let tank = 0;
    let indexCandidateStart = 0;
    while(indexCandidateStart < gas.length){
        if(cost[indexCandidateStart] > gas[indexCandidateStart]){
            indexCandidateStart++;
        } else {
            tank = gas[indexCandidateStart];
            end = (indexCandidateStart+1) % gas.length;
            let prevEnd = end === 0 ? gas.length-1 : end-1;
            
            while(tank - cost[prevEnd] + gas[end] >= cost[end] && indexCandidateStart !== end){
                tank = tank - cost[prevEnd] + gas[end];
                end = (end+1) % gas.length;
                prevEnd = end === 0 ? gas.length-1 : end-1;
            }

            if(indexCandidateStart === end){
                start = indexCandidateStart;
                indexCandidateStart = gas.length;
            } else {
                indexCandidateStart += 1;
            }
        }
    }
    return start;
}

let result = canCompleteCircuit([2,3,4], [3,4,3]);
console.log('res:', result)

//            s
//        e                e
// gas = [2,3,4], costo = [3,4,3]

// tank = 4 star = 2 end = 0 prevEnd = 2
// tank = 4 - 3 + 2 = 3 >= 3 si -> tank = 3 end = 1 -> 0   


// 0 -> nums.length - 1 -> 2
// 1 -> nums.length - 1 -> 0
// 2 -> nums.length - 1 -> 1

// mientras el costo sea mayor moveria el inicio hasta encontrar 
// un indice donde comenzar

// tanque = 4(tanque) - 3(costo[end-1]) + 2(gas[end]) = 3 va de 0 a 1 porque costo[end] = 3 es <= tanque = 3 y avanzo e  
// tanque = 3(tanque) - 3(costo[end-1]) + 3(gas[end]) = 3 no va de 1 a 2 porque costo[1] = 4 es >= tanque = 3 