function insert(intervals: number[][], newInterval: number[]): number[][] {
    let nonOverlappingIntervals: number[][] = [];

    for (let start = 0; start < intervals.length; start++) {
        let currentInterval = intervals[start];
        if (newInterval[0] <= currentInterval[1]) {
            // encontre el intervalo donde se inicia. 
            // chequeo si el inicio sigue siendo el mismo o cambia por el inicio del nuevo intervalo
            if (newInterval[0] <= currentInterval[0]) currentInterval[0] = newInterval[0];
            // busco el indice del final del intervalo
            let end = start;
            while (end < intervals.length) {
                if(newInterval[1] > intervals[end][1]){
                    end++;
                } else {

                }
                end++;
            }    
        } else {
            // avanzo start
            nonOverlappingIntervals.push(currentInterval);
            start++;
        }
        
    }

    return nonOverlappingIntervals;
    
};