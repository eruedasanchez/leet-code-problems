ENG 

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing 
order, find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 
1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one 
as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. 
You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 10^4
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000

The tests are generated such that there is exactly one solution

* ------------------------------------------------------------ *

ESP

Dada una matriz de números enteros indexada en 1 que ya está ordenada en orden no decreciente
En orden, encuentre dos números que sumen un número objetivo específico.
Sean estos dos números números[índice1] y números[índice2] donde
1 <= índice1 < índice2 <= números.longitud.

Devuelve los índices de los dos números, índice1 e índice2, sumados por uno
como una matriz de enteros [índice1, índice2] de longitud 2.

Las pruebas se generan de manera que haya exactamente una solución.
No podrás utilizar el mismo elemento dos veces.

Su solución debe utilizar sólo espacio adicional constante.

Ejemplo 1:

Entrada: números = [2,7,11,15], objetivo = 9
Salida: [1,2]
Explicación: La suma de 2 y 7 es 9. Por lo tanto, índice1 = 1, índice2 = 2. Devolvemos [1, 2].
Ejemplo 2:

Entrada: números = [2,3,4], objetivo = 6
Salida: [1,3]
Explicación: La suma de 2 y 4 es 6. Por lo tanto índice1 = 1, índice2 = 3. Devolvemos [1, 3].
Ejemplo 3:

Entrada: números = [-1,0], objetivo = -1
Salida: [1,2]
Explicación: La suma de -1 y 0 es -1. Por lo tanto índice1 = 1, índice2 = 2. Devolvemos [1, 2].
 

Restricciones:

2 <= números.longitud <= 3 * 10^4
-1000 <= números[i] <= 1000
Los números se ordenan en orden no decreciente.
-1000 <= objetivo <= 1000

Las pruebas se generan de manera que haya exactamente una solución.