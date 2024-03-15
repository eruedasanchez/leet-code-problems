ENG 

Given an integer array nums sorted in non-decreasing order, 
remove some duplicates in-place such that each unique element 
appears at most twice. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

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

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements 
of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements 
of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k 
(hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

* ------------------------------------------------------------ *

ESP

Dada una matriz de números enteros ordenados en orden no decreciente,
elimine algunos duplicados in situ de modo que cada elemento único
aparece como máximo dos veces.

El orden relativo de los elementos debe mantenerse igual.

Dado que es imposible cambiar la longitud de la matriz en algunos idiomas,
en su lugar, debe colocar el resultado en la primera parte de los números 
de la matriz. 
Más formalmente, si hay k elementos después de eliminar los duplicados, 
entonces los primeros k elementos de nums deberían contener el resultado final.
 No importa lo que dejes más allá de los primeros k elementos.

Devuelve k después de colocar el resultado final en las primeras k 
ranuras de números.

No asigne espacio adicional para otra matriz. Debe hacer esto modificando 
la matriz de entrada en el lugar con O(1) memoria adicional.

Juez personalizado:

El juez probará su solución con el siguiente código:

int[] números = [...]; //matriz de entrada
int[] números esperados = [...]; // La respuesta esperada con la longitud correcta

int k = eliminarDuplicados(numeros); // Llama a tu implementación

afirmar k == números esperados.longitud;
para (int i = 0; i < k; i++) {
    afirmar números [i] == números esperados [i];
}
Si se aprueban todas las afirmaciones, se aceptará su solución.

Ejemplo 1:

Entrada: números = [1,1,1,2,2,3]
Salida: 5, números = [1,1,2,2,3,_]
Explicación: Su función debería devolver k = 5, con los primeros cinco elementos
de los números son 1, 1, 2, 2 y 3 respectivamente.
No importa lo que dejes más allá de la k devuelta (de ahí que sean guiones bajos).

Ejemplo 2:

Entrada: números = [0,0,1,1,1,1,2,3,3]
Salida: 7, números = [0,0,1,1,2,3,3,_,_]
Explicación: Su función debería devolver k = 7, con los primeros siete elementos
de los números son 0, 0, 1, 1, 2, 3 y 3 respectivamente.
No importa lo que dejes más allá de lo k devuelto
(de ahí que sean guiones bajos).
 

Restricciones:

1 <= números.longitud <= 3 * 104
-104 <= números[i] <= 104
Los números se ordenan en orden no decreciente.