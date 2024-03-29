ENG 

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4

* ------------------------------------------------------------ *

ESP

Se le proporciona una matriz de números enteros mx n con las dos propiedades siguientes:

Cada fila está ordenada en orden no decreciente.
El primer número entero de cada fila es mayor que el último número entero de la fila anterior.
Dado un objetivo entero, devuelve verdadero si el objetivo está en la matriz o falso en caso contrario.

Debe escribir una solución en complejidad temporal O(log (m * n)).

Ejemplo 1:

Entrada: matriz = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], objetivo = 3
Salida: verdadero

Ejemplo 2:

Entrada: matriz = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], objetivo = 13
Salida: falso

Restricciones:

m == matriz.longitud
n == matriz[i].longitud
1 <= m, n <= 100
-10^4 <= matriz[i][j], objetivo <= 10^4
