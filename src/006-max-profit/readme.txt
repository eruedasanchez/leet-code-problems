You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0

Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4

* ------------------------------------------------------------ *

ESP

Se le proporciona una matriz de precios donde precios[i] es el precio de una acción determinada en el iésimo día.

Quiere maximizar sus ganancias eligiendo un solo día para comprar una acción y eligiendo un día diferente en el futuro para vender esa acción.

Devuelve el máximo beneficio que puedas obtener de esta transacción. Si no puede obtener ningún beneficio, devuelva 0.

Ejemplo 1:

Entrada: precios = [7,1,5,3,6,4]
Salida: 5

Explicación: Compre el día 2 (precio = 1) y venda el día 5 (precio = 6), ganancia = 6-1 = 5.
Tenga en cuenta que no está permitido comprar el día 2 y vender el día 1 porque debe comprar antes de vender.

Ejemplo 2:

Entrada: precios = [7,6,4,3,1]
Salida: 0

Explicación: En este caso, no se realizan transacciones y el beneficio máximo = 0.
 
Restricciones:

1 <= precios.longitud <= 10^5
0 <= precios[i] <= 10^4

