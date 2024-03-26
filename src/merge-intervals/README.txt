ENG 

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

* ------------------------------------------------------------ *

ESP

Dada una matriz de intervalos donde intervalos [i] = [starti, endi], fusiona todos los intervalos superpuestos,
y devolver una matriz de intervalos no superpuestos que cubren todos los intervalos en la entrada.

Ejemplo 1:

Entrada: intervalos = [[1,3],[2,6],[8,10],[15,18]]
Salida: [[1,6],[8,10],[15,18]]
Explicación: Dado que los intervalos [1,3] y [2,6] se superponen, combínelos en [1,6].

Ejemplo 2:

Entrada: intervalos = [[1,4],[4,5]]
Salida: [[1,5]]
Explicación: Los intervalos [1,4] y [4,5] se consideran superpuestos.
 
Restricciones:

1 <= intervalos.longitud <= 104
intervalos[i].longitud == 2
0 <= inicio <= final <= 104

