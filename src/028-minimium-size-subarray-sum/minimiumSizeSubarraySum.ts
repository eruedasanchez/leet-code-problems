const mergeOp = (nums1: number[], nums2: number[]) : number[] => {
    let result: number[] = [];
    let leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < nums1.length && rightIndex < nums2.length) {
        if (nums1[leftIndex] < nums2[rightIndex]) {
            result.push(nums1[leftIndex]);
            leftIndex++;
        } else {
            result.push(nums2[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < nums1.length) {
        result.push(nums1[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < nums2.length) {
        result.push(nums2[rightIndex]);
        rightIndex++;
    }
    return result;
}

const mergeSort = (nums: number[]) : number[] => {
    if (nums.length <= 1) return nums;
    
    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    
    return mergeOp(leftSorted, rightSorted);
}

function minSubArrayLen(target: number, nums: number[]) : number {
    const sortedArr = mergeSort(nums);
    let left = 0, right = sortedArr.length - 1;
    
    while (left <= right) {
        const mid = Math.trunc((left + right) / 2);
        
        if (sortedArr[mid] >= target) {
            return 1;
        }

        // Si el elemento medio es mayor que el objetivo, buscar en la mitad izquierda del arreglo
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            // Si el elemento medio es menor que el objetivo, buscar en la mitad derecha del arreglo
            left = mid + 1;
        }
    }

    // Si el objetivo no se encuentra en el arreglo, devolver -1
    return -1;
};

// Ejemplo de uso
const arr = [2,3,1,2,4,3];
const ress = minSubArrayLen(1, arr);
console.log(ress);

// [ 1, 2, 3, 4, 20, 22 ] , 10