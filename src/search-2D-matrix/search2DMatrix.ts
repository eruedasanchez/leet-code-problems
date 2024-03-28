// const searchMatrix = (matrix: number[][], target: number) : boolean => {
//     let start = 0;
//     let end = matrix.length - 1;
    
//     if (target < matrix[start][0] || (matrix.length === 1 && target < matrix[start][0])){
//         return false;
//     } else if (target > matrix[end][matrix[end].length-1] || 
//         (matrix.length === 1 && target > matrix[0][matrix[0].length-1])) {
//             return false; 
//     } else {
//         while (start + 1 < end) {
//             let half = Math.trunc((start + end) / 2);
//             if (target <= matrix[half][0]) end = half;
//             if (target >= matrix[half][matrix[half].length-1]) start = half;
//         }
//     }
// };

// // [[1,3,5,7],[10,11,16,20],[23,30,34,60], [70,72,78,80]], target = 11
// //     s                          h                                             e
// // [[1,3,5,7],[10,11,16,20],[23,30,34,60], [70,72,78,80] , [82,84,86,88], [92,94,95,97]], target = 86


// // const searchInsert = (nums: number[], target: number) : number => {
// //     let start = 0;
// //     let end = nums.length - 1;

// //     if (target < nums[start] || (nums.length === 1 && target <= nums[start])){
// //         return start;
// //     } else if (target > nums[end] || (nums.length === 1 && target > nums[end])) {
// //         return end + 1; 
// //     } else {
// //         while (start + 1 < end) {
// //             let half = Math.trunc((start + end) / 2);
// //             if (nums[half] <= target){
// //                 start = half;
// //             } else {
// //                 end = half;
// //             }
// //         }

// //         if (nums[start] === target) {
// //             return start;
// //         } else {
// //             return start + 1;
// //         }
// //     }
// // };

// // let search = searchInsert([1,3,5,6], 2);
// // console.log('res:', search);


