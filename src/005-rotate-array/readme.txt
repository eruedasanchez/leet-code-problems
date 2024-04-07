Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:

rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?

* ------------------------------------------------------------ *

ESP

Dada una matriz de números enteros, gire la matriz hacia la derecha en k pasos, donde k no es negativo.

Ejemplo 1:

Entrada: números = [1,2,3,4,5,6,7], k = 3
Salida: [5,6,7,1,2,3,4]

Explicación:

rotar 1 paso a la derecha: [7,1,2,3,4,5,6]
rotar 2 pasos a la derecha: [6,7,1,2,3,4,5]
rotar 3 pasos a la derecha: [5,6,7,1,2,3,4]

Ejemplo 2:

Entrada: números = [-1,-100,3,99], k = 2
Salida: [3,99,-1,-100]
Explicación:
rotar 1 paso a la derecha: [99,-1,-100,3]
rotar 2 pasos a la derecha: [3,99,-1,-100]
 

Restricciones:

1 <= números.longitud <= 105
-231 <= números[i] <= 231 - 1
0 <= k <= 105
 

Hacer un seguimiento:

Intente encontrar tantas soluciones como pueda. Hay al menos tres formas diferentes de solucionar este problema.
¿Podrías hacerlo in situ con O(1) espacio extra?