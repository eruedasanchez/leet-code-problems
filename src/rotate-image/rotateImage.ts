/**
 * Do not return anything, modify matrix in-place instead.
 */

const rotateImage = (matrix: number[][]) : void => {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            matrix[row][column] = matrix[column][row];
        }
    }
};

// [[1,2,3],[4,5,6],[7,8,9]] -> [[3,6,1],[4,5,2],[7,8,9]] 
// [[1,2,3],[4,5,6],[7,8,9]] -> 



// 123          3 6 9
// 456    ----> 4 5 2
// 789          7 8 3


// [0,0] -> [0,2]
// [] -> []