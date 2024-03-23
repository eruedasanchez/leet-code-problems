ENG

Given an array of integers citations where citations[i] 
is the number of citations a researcher received for their ith paper, 
return the researcher's h-index.

According to the definition of h-index on Wikipedia: 
The h-index is defined as the maximum value of h such that 
the given researcher has published at least h papers 
that have each been cited at least h times.

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1
 

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000

* ------------------------------------------------------------ *

ESP

Dada una serie de citas enteras donde citas[i]
es el número de citas que recibió un investigador por su iésimo artículo,
devolver el índice h del investigador.

Según la definición de índice h en Wikipedia:
El índice h se define como el valor máximo de h tal que
el investigador dado ha publicado al menos h artículos
que han sido citados al menos h veces cada uno.

Ejemplo 1:

Entrada: citas = [3,0,6,1,5]
Salida: 3
Explicación: [3,0,6,1,5] significa que el investigador tiene 5 artículos en total y cada uno de ellos recibió 3, 0, 6, 1, 5 citas respectivamente.
Dado que el investigador tiene 3 artículos con al menos 3 citas cada uno y los dos restantes con no más de 3 citas cada uno, su índice h es 3.

Ejemplo 2:

Entrada: citas = [1,3,1]
Salida: 1
 

Restricciones:

n == citas.longitud
1 <= norte <= 5000
0 <= citas[i] <= 1000
