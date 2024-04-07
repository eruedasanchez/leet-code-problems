const canCompleteCircuit = (gas: number[], cost: number[]) : number => {
    let start = -1, end = -1, prevEnd = -1;
    let tank = 0;
    let indexCandidateStart = 0;
    let stationsTraveled = 0;
    while(indexCandidateStart < gas.length){
        if (gas[indexCandidateStart] < cost[indexCandidateStart]) {
            indexCandidateStart++;
        } else {
            start = indexCandidateStart;
            tank = gas[start];
            end = start % gas.length;
            while (tank >= cost[end] && stationsTraveled < gas.length) {
                end = (end + 1) % gas.length;
                prevEnd = (end === 0) ? gas.length - 1 : end - 1;
                tank = tank - cost[prevEnd] + gas[end];
                stationsTraveled++;

                console.log('prevEnd:', prevEnd);
            }
            
            if (tank < cost[end]){
                // console.log('tank:', tank);
                // console.log('cost[end]:', cost[end]);
                // console.log('start:', start);
                indexCandidateStart = start + 1;
                start = -1;
                stationsTraveled = 0;
                // console.log('indexCandidateStart', indexCandidateStart)
            } else {
                console.log('tank:', tank);
                indexCandidateStart = gas.length;
            } 
        }
    }
    return start;
}

// let completeCircuit = canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]);
// console.log('res:', completeCircuit);

// let completeCircuit = canCompleteCircuit([2,3,4], [3,4,3]);
// console.log('res:', completeCircuit);

let completeCircuit = canCompleteCircuit([4,5,2,6,5,3], [3,2,7,3,2,9]);
console.log('res:', completeCircuit);




// st = 3
// t = 6
//              s                    s
//            e                    e
// gas = [4,5,2,6,5,3] cost = [3,2,7,3,2,9]


// if(cost[indexCandidateStart] > gas[indexCandidateStart]){
//     indexCandidateStart++;
// } else {
//     tank = gas[indexCandidateStart];
//     end = (indexCandidateStart+1) % gas.length;
//     let prevEnd = end === 0 ? gas.length-1 : end-1;
    
//     while(tank - cost[prevEnd] + gas[end] >= cost[end] && indexCandidateStart !== end){
//         tank = tank - cost[prevEnd] + gas[end];
//         end = (end+1) % gas.length;
//         prevEnd = end === 0 ? gas.length-1 : end-1;
//     }

//     if(indexCandidateStart === end){
//         start = indexCandidateStart;
//         indexCandidateStart = gas.length;
//     } else {
//         indexCandidateStart += 1;
//     }
// }