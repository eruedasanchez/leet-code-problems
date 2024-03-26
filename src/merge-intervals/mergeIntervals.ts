// const mergeIntervals = (intervals: number[][]) : number[][] => {
//     let nonOverlappingIntervals: number[][] = [];
//     let i = 0;
//     while (i < intervals.length) {
//         let initialInterval = intervals[i];
//         let j = i+1;
//         while (j < intervals.length) {
//             let currentInterval = intervals[j];
//             if(initialInterval[0] < currentInterval[0]){
//                 // if(initialInterval[1] > currentInterval[1]){
//                     // tupla current dentro initial
//                     // initialInterval[0] = initialInterval[0];
//                     // initialInterval[1] = initialInterval[1];
//                     // j++;
//                 // }
//                 if(initialInterval[1] < currentInterval[1]){
//                     // tupla current esta dentro de initial solo una parte
//                     initialInterval[0] = initialInterval[0];
//                     initialInterval[1] = currentInterval[1];
//                     // j++;
//                 }
//                 j++;
//             } else if(initialInterval[0] > currentInterval[0]) {
//                 if(initialInterval[1] > currentInterval[1]){
//                     // tupla current esta dentro de initial solo una parte
//                     initialInterval[0] = currentInterval[0];
//                     initialInterval[1] = initialInterval[1];
//                     // j++;
//                 } else {
//                     // tupla initial esta toda dentro de current -> if(initialInterval[1] < currentInterval[1])
//                     initialInterval[0] = currentInterval[0];
//                     initialInterval[1] = currentInterval[1];
//                     // j++;
//                 }
//                 j++;
//             } else {
//                 // insertamos en el arreglo cuando estoy en el caso 3
//                 nonOverlappingIntervals.push(initialInterval);
//                 i = j;
//                 j = intervals.length;
//             }
//         }
//     }
//     return [[1,2], [3,4]];
// };

// console.log('hola');
// let pepe = mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);
// console.log('pepe:', pepe);




// [[1,3],[2,6]] -> [1,3] -> [1,6]
// [[1,4],[2,3]] -> [1,4] -> [1,4]
// [[2,4],[1,3]] -> [2,4] -> [1,3]
// [[2,4],[7,8]] -> [2,4] -> [2,4]

// [1,3]

// [1,3] -> [1,2,3]
// [2,6] -> [2,3,4,5,6]
// [8,10] -> [8,9,10]
// [15,18] -> [15,16,17,18]

// Opciones al comparar entre tuplas

// 1. El inicio de la tupla i  es menor o igual al inicio de la tupla j y por ende al final de tupla j

// 1.1 Y el final de la tupla j es menor al final de la tupla i Por ejemplo: [[1,4],[2,3]]. Entonces,
// la tupla j esta dentro de i y  retorno [1,4]

// 1.2 Y el final de la tupla j es mayor al final de la tupla i Por ejemplo: [[1,4],[2,5]]. Entonces,
// la tupla j esta dentro de i solo una parte y retorno [1,5]

// 2. El inicio de la tupla i  es mayor o igual al inicio de la tupla j 

// 2.1  Y el final de la tupla j es menor al final de la tupla i Por ejemplo: [[2,4],[1,3]]. Entonces,
// la tupla j esta dentro de i solo una parte y retorno [1,4]

// 2.2 Y el final de la tupla j es mayor al final de la tupla i Por ejemplo: [[2,4],[1,5]]. Entonces,
// la tupla j contiene toda la tupla i y retorno [1,5]

// 3 El final de la tupla i es menor estricto que el inicio de la tupla j, entonces son disjuntos y 
// retorno i

// const mergeIntervals = (intervals: number[][]) : number[][] => {
//     let nonOverlappingIntervals: number[][] = [];
//     let i = 0;
//     while (i < intervals.length) {
//         let initialInterval = intervals[i];
//         let j = i+1;
//         while (j < intervals.length) {
//             let currentInterval = intervals[j];
//             if(initialInterval[0] < currentInterval[0]){
//                 if(initialInterval[1] < currentInterval[1]){
//                     initialInterval[0] = initialInterval[0];
//                     initialInterval[1] = currentInterval[1];
//                 }
//                 j++;
//             } else if(initialInterval[0] > currentInterval[0]) {
//                 if(initialInterval[1] > currentInterval[1]){
//                     initialInterval[0] = currentInterval[0];
//                     initialInterval[1] = initialInterval[1];
//                 } else {
//                     initialInterval[0] = currentInterval[0];
//                     initialInterval[1] = currentInterval[1];
//                 }
//                 j++;
//             } else {
//                 nonOverlappingIntervals.push(initialInterval);
//                 i = j;
//                 j = intervals.length;
//             }
//         }
//     }
//     return nonOverlappingIntervals;
// };


// algoritmo

// inciialmente la tupla se forma consigo misma (candidato a intervalo)
// y de ahi si comparo con la siguiente

// si el final de la tupla que estoy iterando es menor estricto al inicio 
// de la siguiente, entonces la pusheo -> [1,4] [6,9]

// si no, si la tupla siguiente esta toda contenida en la actual, la tupla
// actual sigue siendo la actual [1,10], [3,5] -> [1,10]

// si la tupla siguiente a la actual contiene totalmente a la actual, entonces
// la tupla actual pasa a ser la que tiene el rol de siguiente [3,5], [1,10] -> [1,10]

// si el inicio de la tupla siguiente a la actual es menor que el inicio de la
// actual, el inicio de la tupla que ahora va a ser actual es el inicio
// de la siguiente y si el final de la actual es mayor o igual a fin de la
// siguiente, el fin de la actual sigue siendo el fin de la actual [3,5], [1,4] -> [1,5]

// si el inicio de la tupla siguiente a la actual es mayor que el inicio de la
// actual, el inicio de la tupla que ahora va a ser actual sigue siendo la actual
// y si el final de la actual es menor a fin de la
// siguiente, el fin de la actual es el fin de la siguiente [3,5], [4,8] -> [3,8]


//     let nonOverlappingIntervals: number[][] = [];
//     let i = 0;
//     while(i < intervals.length) {
//         let currentInterval = intervals[i];
//         let j = i;
//         while (j < intervals.length && currentInterval[1] >= intervals[j][0]) {
//             if (currentInterval[0] > intervals[j][1]) {
//                 // intervalos desordenados
//                 let tmpInterval = currentInterval;
//                 intervals[i] = intervals[j];
//                 intervals[j] = tmpInterval;
//                 currentInterval = intervals[i]; 
//                 // console.log('currentInterval:', currentInterval);
//                 // console.log('intervals:', intervals);
//                 j = i;
//             } else {
//                 // intervalos ordenados
//                 if(currentInterval[0] <= intervals[j][0]){
//                     if(currentInterval[1] < intervals[j][1]){
//                         // [3,5], [4,8] -> [3,8]
//                         currentInterval[1] = intervals[j][1];
//                     }
//                 } else if(currentInterval[1] < intervals[j][1]){
//                     // tupla siguiente a la actual contiene totalmente a la actual [3,5] -> [1,10] -> [1,10]
//                     currentInterval = intervals[j];
//                 } else {
//                     // [3,5], [1,4] -> [1,5]
//                     currentInterval[0] = intervals[j][0];
//                 }
//                 j++;
//             }
//         }
//         nonOverlappingIntervals.push(currentInterval);
//         i = j;
//     }
//     return nonOverlappingIntervals
// }

// let roberto = mergeIntervals([[2,3],[4,5],[6,7],[8,9],[1,10]]);
// console.log('roberto:', roberto);


//     i
//     j
// [ [0,0], [1,4] ]






// [1,4], [8,0]



// if(currentInterval[0] <= intervals[j][0] && currentInterval[1] >= intervals[j][1]){
//     // [3,10], [4,9] -> [3,10]
//     j++;
// }



// if(currentInterval[0] <= intervals[j][0] && currentInterval[1] < intervals[j][1]){
//     // [3,5], [4,8] -> [3,8]
//     currentInterval[1] = intervals[j][1];
//     j++;
// }



// if(currentInterval[0] > intervals[j][0] && currentInterval[1] < intervals[j][1]){
//     // tupla siguiente a la actual contiene totalmente a la actual [3,5] -> [1,10] -> [1,10]
//     currentInterval = intervals[j];
//     j++;
// }

// if(currentInterval[0] > intervals[j][0] && currentInterval[1] >= intervals[j][1]){
//     // [3,5], [1,4] -> [1,5]
//     currentInterval[0] = intervals[j][0];
//     j++;
// }

// if(currentInterval[0] > intervals[j][0]){
    // if(currentInterval[1] < intervals[j][1])){
        // tupla siguiente a la actual contiene totalmente a la actual [3,5] -> [1,10] -> [1,10]
        // currentInterval = intervals[j];
        // j++;
    // }
    // if(currentInterval[1] >= intervals[j][1]){
        //     // [3,5], [1,4] -> [1,5]
        //     currentInterval[0] = intervals[j][0];
        //     j++;
        // if(intervals[j][1] < currentInterval[0]){
            // caso donde no se respta el orden
        //     // [1,4], [0,0] -> [0,0], [1,54]
        //     currentInterval[0] = intervals[j][0];
        //     j++;
    // }
    // }
    
// }



const mergeIntervals = (intervals: number[][]) : number[][] => {
    let nonOverlappingIntervals: number[][] = [];
    intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);
    
    let i = 0;
    while(i < intervals.length) {
        let currentInterval = intervals[i];
        let j = i;
        while (j < intervals.length && currentInterval[1] >= intervals[j][0]) {
            if(currentInterval[0] <= intervals[j][0]){
                if(currentInterval[1] < intervals[j][1]){
                    // [3,5], [4,8] -> [3,8]
                    currentInterval[1] = intervals[j][1];
                }
            } else if(currentInterval[1] < intervals[j][1]){
                // tupla siguiente a la actual contiene totalmente a la actual [3,5] -> [1,10] -> [1,10]
                currentInterval = intervals[j];
            } else {
                // [3,5], [1,4] -> [1,5]
                currentInterval[0] = intervals[j][0];
            }
            j++;
        }
        nonOverlappingIntervals.push(currentInterval);
        i = j;
    }
    return nonOverlappingIntervals
}


