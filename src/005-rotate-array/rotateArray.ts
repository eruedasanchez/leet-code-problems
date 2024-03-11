const rotate = (nums: number[], k: number) : void => {
    const lastKElements: number[] = nums.splice(nums.length - k, k) ;
    nums = lastKElements.concat(nums);
};

// En este algoritmo, comenzamos creando un arreglo con los ultimos k elementos
// de nums, lo cual tiene una complejidad espacial de k pero como k está limitada
// por el rango [0,105], a lo sumo el arreglo tendra una longitud fija de 105
// posiciones, lo cual tiene una complejidad espacial de O(1).
// Luego, el arreglo nums tiene una longitud de nums.length - k pero como 
// la longitud de nums se encuentra entre 1 y 105 y k es un numero fijo,
// nums tambien ocupa un espacio constante.
// Finalmente, al concatenar ambos arreglos de longitud constante, la complejidad
// espacial de nums es O(1) como se pedia en el enunciado.

/**
 * Otra opcion de plantear el algoritmo respetando la explicación 
 */

const rotateRightShift = (nums: number[], k: number) : void => {
    let last_tmp: number;
    
    for (let i = 0; i < k; i++) {
        last_tmp = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j-1];
        }
        nums[0] = last_tmp;
    }
};

rotate([1,2,3,4,5,6,7], 3);
rotateRightShift([1,2,3,4,5,6,7], 3);