ENG 

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-2^31 <= matrix[i][j] <= 2^31 - 1

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

* ------------------------------------------------------------ *

ESP

Dada una matriz de números enteros m x n, si un elemento es 0, establezca toda su fila y columna en 0.

Debes hacerlo en el lugar.

Ejemplo 1:

Entrada: matriz = [[1,1,1],[1,0,1],[1,1,1]]
Salida: [[1,0,1],[0,0,0],[1,0,1]]

Ejemplo 2:

Entrada: matriz = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Salida: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Restricciones:

m == matriz.longitud
n == matriz[0].longitud
1 <= m, n <= 200
-2^31 <= matriz[i][j] <= 2^31 - 1

Hacer un seguimiento:

Una solución simple que utilice el espacio O(mn) probablemente sea una mala idea.
Una mejora simple utiliza el espacio O(m + n), pero aún no es la mejor solución.
¿Podría aconsejarnos una solución de espacio constante?

