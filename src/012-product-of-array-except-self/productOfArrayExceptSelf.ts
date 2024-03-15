// const productExceptSelf = (nums: number[]) : number[] => {
//     let products: number[] = []; 
//     for (let i = 0; i < nums.length; i++) {
//         let currentProd = 1;
//         for (let j = 0; j <  nums.length; j++) {
//             if(i !== j){
//                 currentProd = currentProd * nums[j]; 
//             } else {
//                 currentProd = currentProd * 1;
//             }
//         }
//         products[i] = currentProd;
//     }
//     console.log('products:', products);
//     return products;
// };

// let juancito = productExceptSelf([1,2,3,4]);


// Entrada: números = [1,2,3,4]
// Salida: [24,12,8,6]


// [1,2,3,4]

// izq <- [1,2]
// der <- [3,4]

// [1,2,3,4]

// [1,2] - [3,4]


// [1,2] -> [1] [2]

// [3,4] -> [3] [4]




// function productExceptSelf(nums: number[]): number[] {
//     const n = nums.length;
//     const result: number[] = [];
//     if(n === 1){
//         result[0] = nums[0];
//         return result; 
//     }

//     const leftArr = nums.slice(0, n / 2);
//     const rightArr = nums.slice(n / 2 , n);
//     const leftProducts = productExceptSelf(leftArr);
//     const rightProducts = productExceptSelf(rightArr);

//     for (let i = 0; i < leftProducts.length + rightProducts.length; i++) {
//         result[i] *= 
        
//     }

//     [1, 2, 3, 4];

    // l <- p([1,2])
    // r <- p([3,4])


    // l <- p([1])
    // r <- p([2])

    

    
    // Calcula el producto total excluyendo el elemento en la posición actual
    // for (let i = 0; i < n; i++) {
    //     result[i] = leftProducts[i] * rightProducts[i];
    // }

//     return result;
// }


// Ejemplo de uso
// const nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums)); // Salida esperada: [24, 12, 8, 6]


