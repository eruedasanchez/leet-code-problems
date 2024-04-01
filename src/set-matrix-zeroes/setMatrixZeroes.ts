const VALUE_ZERO = 0;
type TupleRowColumn = [number, number];

const setZeroes = (matrix: number[][]) : void => {
    let positionZeros: TupleRowColumn[] = [];
    
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            if (matrix[row][column] === VALUE_ZERO) {
                positionZeros.push([row, column]);
            }
        }
    }

    for (const tuple of positionZeros) {
        const currentRow = tuple[0];
        const currentColumn = tuple[1];

        for (let row = 0; row < matrix.length; row++) {
            matrix[row][currentColumn] = VALUE_ZERO;
        }
        
        for (let column = 0; column < matrix[currentRow].length; column++) {
            matrix[currentRow][column] = VALUE_ZERO;
        }
    }
};
