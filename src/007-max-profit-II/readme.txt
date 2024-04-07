ENG 

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

Constraints:

1 <= prices.length <= 3 * 10^4
0 <= prices[i] <= 10^4

* ------------------------------------------------------------ *

ESP

Se le proporciona una matriz de precios de números enteros donde precios[i] es el precio de una acción determinada en el iésimo día.

Cada día, usted puede decidir comprar y/o vender las acciones. Sólo puede poseer como máximo una acción a la vez. Sin embargo, puedes comprarlo y venderlo inmediatamente el mismo día.

Encuentre y obtenga el máximo beneficio que pueda lograr.

Ejemplo 1:

Entrada: precios = [7,1,5,3,6,4]
Salida: 7
Explicación: Compre el día 2 (precio = 1) y venda el día 3 (precio = 5), ganancia = 5-1 = 4.
Luego compre el día 4 (precio = 3) y venda el día 5 (precio = 6), ganancia = 6-3 = 3.
La ganancia total es 4 + 3 = 7.
Ejemplo 2:

Entrada: precios = [1,2,3,4,5]
Salida: 4
Explicación: Compre el día 1 (precio = 1) y venda el día 5 (precio = 5), ganancia = 5-1 = 4.
El beneficio total es 4.
Ejemplo 3:

Entrada: precios = [7,6,4,3,1]
Salida: 0
Explicación: No hay forma de obtener una ganancia positiva, por lo que nunca compramos acciones para lograr la ganancia máxima de 0.
 

Restricciones:

1 <= precios.longitud <= 3 * 10^4
0 <= precios[i] <= 10^4