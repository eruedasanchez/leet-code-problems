ENG 

There are n gas stations along a circular route,
where the amount of gasoline in the ith gasoline station
It's gas[i].

You have a car with a gas tank
unlimited and it costs [i] of gasoline to travel from
the ith station to the next (i + 1)th station
season. You start the trip with an empty tank.
at one of the gas stations.

Given two sets of integers,
gas and cost, return the station index
initial service if you can travel the circuit
once clockwise;
Otherwise, return -1.
If a solution exists, it is guaranteed to be
only.

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill with 4 units of gasoline.
Your tank = 0 + 4 = 4
Travel to Station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to Station 1. Your tank = 7 - 3 + 2 = 6
Travel to Station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5.
Your gasoline is enough to travel back to
station 3.
Therefore, return 3 as the initial index.

Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You cannot start at station 0 or 1,
since there is not enough gasoline to travel to
the next station.

We start at station 2 and fill with
4 units of gasoline. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You can't go back to station 2,
since it requires 4 units of gasoline but
you only have 3.
Therefore, you cannot go around the circuit.
Once no matter where to start.

* ------------------------------------------------------------ *

ESP

Hay n gasolineras a lo largo de una ruta circular, 
donde la cantidad de gasolina en la iésima gasolinera 
es gas[i].

Tienes un automóvil con un tanque de gasolina 
ilimitado y cuesta [i] de gasolina viajar desde 
la iésima estación hasta la siguiente (i + 1)ésima
estación. Comienzas el viaje con el tanque vacío 
en una de las gasolineras.

Dados dos conjuntos de números enteros, 
gas y costo, devuelva el índice de la estación 
de servicio inicial si puede recorrer el circuito 
una vez en el sentido de las agujas del reloj; 
de lo contrario, devuelva -1. 
Si existe una solución, se garantiza que será 
única.

Ejemplo 1:

Entrada: gas = [1,2,3,4,5], costo = [3,4,5,1,2]
Salida: 3
Explicación:
Comience en la estación 3 (índice 3) y llene con 4 unidades de gasolina. 
Tu tanque = 0 + 4 = 4
Viaja a la estación 4. Tu tanque = 4 - 1 + 5 = 8
Viaja a la estación 0. Tu tanque = 8 - 2 + 1 = 7
Viaja a la estación 1. Tu tanque = 7 - 3 + 2 = 6
Viaja a la estación 2. Tu tanque = 6 - 4 + 3 = 5
Viaje a la estación 3. El costo es 5. 
Su gasolina es suficiente para viajar de regreso a
la estación 3.
Por lo tanto, devuelva 3 como índice inicial.

Ejemplo 2:

Entrada: gas = [2,3,4], costo = [3,4,3]
Salida: -1
Explicación:
No puedes empezar en la estación 0 o 1, 
ya que no hay suficiente gasolina para viajar a 
la siguiente estación.

Comencemos en la estación 2 y llenemos con 
4 unidades de gasolina. Tu tanque = 0 + 4 = 4
Viaja a la estación 0. Tu tanque = 4 - 3 + 2 = 3
Viaja a la estación 1. Tu tanque = 3 - 3 + 3 = 3
No puedes regresar a la estación 2, 
ya que requiere 4 unidades de gasolina pero 
solo tienes 3.
Por lo tanto, no puedes recorrer el circuito 
una vez sin importar dónde empieces.