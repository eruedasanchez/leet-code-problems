ENG

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no integer 
x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

* ------------------------------------------------------------ *

ESP

Se le proporciona una matriz de números enteros únicos ordenados.

Un rango [a,b] es el conjunto de todos los números enteros desde a hasta b (inclusive).

Devuelve la lista ordenada más pequeña de rangos que cubren exactamente todos los números de la matriz.
Es decir, cada elemento de nums está cubierto exactamente por uno de los rangos y no existe ningún número entero.
x tal que x está en uno de los rangos pero no en números.

Cada rango [a,b] en la lista debe generarse como:

"a->b" si a != b
"a" si a == b

Ejemplo 1:

Entrada: números = [0,1,2,4,5,7]
Salida: ["0->2","4->5","7"]
Explicación: Los rangos son:
[0,2] --> "0->2"
[4.5] --> "4->5"
[7,7] --> "7"

Ejemplo 2:

Entrada: números = [0,2,3,4,6,8,9]
Salida: ["0","2->4","6","8->9"]
Explicación: Los rangos son:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Restricciones:

0 <= números.longitud <= 20
-231 <= números[i] <= 231 - 1
Todos los valores de nums son únicos.
Los números están ordenados en orden ascendente.

