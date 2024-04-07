ENG 

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 10^4
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

* ------------------------------------------------------------ *

ESP

Dada una matriz de números enteros ordenados en orden no decreciente, elimine los duplicados en el lugar de modo que cada elemento único aparezca solo una vez. El orden relativo de los elementos debe mantenerse igual. Luego devuelve el número de elementos únicos en números.

Considere que la cantidad de elementos únicos de nums es k; para ser aceptado, debe hacer lo siguiente:

Cambie los números de la matriz de modo que los primeros k elementos de nums contengan los elementos únicos en el orden en que estaban presentes en nums inicialmente. Los elementos restantes de nums no son tan importantes como el tamaño de nums.
Regresar k.
Juez personalizado:

El juez probará su solución con el siguiente código:

int[] números = [...]; // matriz de entrada
int[] números esperados = [...]; // La respuesta esperada con la longitud correcta

int k = eliminarDuplicados(numeros); // Llama a tu implementación

afirmar k == números esperados.longitud;
para (int i = 0; i < k; i++) {
    afirmar números [i] == números esperados [i];
}
Si se aprueban todas las afirmaciones, se aceptará su solución.

Ejemplo 1:

Entrada: números = [1,1,2]
Salida: 2, números = [1,2,_]
Explicación: Su función debería devolver k = 2, siendo los dos primeros elementos de nums 1 y 2 respectivamente.
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
Ejemplo 2:

Entrada: números = [0,0,1,1,1,2,2,3,3,4]
Salida: 5, números = [0,1,2,3,4,_,_,_,_,_]
Explicación: Su función debería devolver k = 5, siendo los primeros cinco elementos de nums 0, 1, 2, 3 y 4 respectivamente.
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).
 

Restricciones:

1 <= números.longitud <= 3 * 10^4
-100 <= números[i] <= 100
nums se ordena en orden no decreciente.