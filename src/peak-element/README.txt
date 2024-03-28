ENG 

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. 
In other words, an element is always considered to be strictly greater 
than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-23^1 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.

* ------------------------------------------------------------ *

ESP

Un elemento pico es un elemento que es estrictamente mayor que sus vecinos.

Dada una matriz de números enteros con índice 0, busque un elemento pico y devuelva su índice.
Si la matriz contiene varios picos, devuelva el índice a cualquiera de los picos.

Puedes imaginar que nums[-1] = nums[n] = -∞.
En otras palabras, un elemento siempre se considera estrictamente mayor
que un vecino que está fuera de la matriz.

Debes escribir un algoritmo que se ejecute en tiempo O(log n).

Ejemplo 1:

Entrada: números = [1,2,3,1]
Salida: 2
Explicación: 3 es un elemento pico y su función debería devolver el número de índice 2.

Ejemplo 2:

Entrada: números = [1,2,1,3,5,6,4]
Salida: 5
Explicación: Su función puede devolver el número de índice 1 donde el elemento pico es 2 o el número de índice 5 donde el elemento pico es 6.
 

Restricciones:

1 <= números.longitud <= 1000
-23^1 <= números[i] <= 2^31 - 1
nums[i] != nums[i + 1] para todos los i válidos.



