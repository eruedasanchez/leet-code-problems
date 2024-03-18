const productExceptSelf = (nums: number[]) : number[] => {
    let products: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let currentProd = 1;
        for (let j = 0; j < nums.length; j++) {
            i === j ? currentProd *= 1 : currentProd *= nums[j];
        }
        products[i] = currentProd;
    }
    return products;
}

const nums = [1, 2, 3, 4];
let ressdsjd = productExceptSelf(nums);
console.log(ressdsjd);



// Ejemplo de uso
// const nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums)); // Salida esperada: [24, 12, 8, 6]


// [5, 2, 3, 4]
// [24, 60, 40, 30]

// [5, 2] <- [2,5]
// [3, 4] <- [4,3]

// [2*1*4*3, 1*4*3, 4*2, 3*2 ]





