ENG 

Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. 
In this case, both input and output will be given as a signed integer type. 
They should not affect your implementation, as the integer's internal binary representation is the same, 
whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. 
Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents 
the signed integer -1073741825.
 

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

Constraints:

The input must be a binary string of length 32

Follow up: If this function is called many times, how would you optimize it?

* ------------------------------------------------------------ *

ESP

Bits inversos de un entero sin signo de 32 bits dado.

Nota:

Tenga en cuenta que en algunos lenguajes, como Java, no existe un tipo entero sin signo.
En este caso, tanto la entrada como la salida se proporcionarán como un tipo entero con signo.
No deberían afectar su implementación, ya que la representación binaria interna del número entero es la misma,
ya sea que esté firmado o no.
En Java, el compilador representa los enteros con signo utilizando la notación en complemento a 2.
Por lo tanto, en el ejemplo 2 anterior, la entrada representa el entero con signo -3 y la salida representa
el entero con signo -1073741825.

Ejemplo 1:

Entrada: n = 00000010100101000001111010011100
Salida: 964176192 (00111001011110000010100101000000)
Explicación: La cadena binaria de entrada 00000010100101000001111010011100 representa el entero sin signo 43261596, por lo que devuelve 964176192 cuya representación binaria es 00111001011110000010100101000000.

Ejemplo 2:

Entrada: n = 11111111111111111111111111111101
Salida: 3221225471 (101111111111111111111111111111111)
Explicación: La cadena binaria de entrada 11111111111111111111111111111101 representa el entero sin signo 4294967293, por lo que devuelve 3221225471, cuya representación binaria es 101111111111111111111111111111111.

Restricciones:

La entrada debe ser una cadena binaria de longitud 32.

Seguimiento: si esta función se llama muchas veces, ¿cómo la optimizaría?

