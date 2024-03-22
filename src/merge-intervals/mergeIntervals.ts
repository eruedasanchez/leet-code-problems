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

const mergeIntervals = (intervals: number[][]) : number[][] => {
    let nonOverlappingIntervals: number[][] = [];
    let i = 0;
    while (i < intervals.length) {
        let initialInterval = intervals[i];
        let j = i+1;
        while (j < intervals.length) {
            let currentInterval = intervals[j];
            if(initialInterval[0] < currentInterval[0]){
                if(initialInterval[1] < currentInterval[1]){
                    initialInterval[0] = initialInterval[0];
                    initialInterval[1] = currentInterval[1];
                }
                j++;
            } else if(initialInterval[0] > currentInterval[0]) {
                if(initialInterval[1] > currentInterval[1]){
                    initialInterval[0] = currentInterval[0];
                    initialInterval[1] = initialInterval[1];
                } else {
                    initialInterval[0] = currentInterval[0];
                    initialInterval[1] = currentInterval[1];
                }
                j++;
            } else {
                nonOverlappingIntervals.push(initialInterval);
                i = j;
                j = intervals.length;
            }
        }
    }
    return nonOverlappingIntervals;
};









