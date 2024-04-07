ENG 

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"


Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000











ESP

La cadena "PAYPALISHIRING" está escrita en un patrón de zigzag en un número determinado de filas como este: (es posible que desee mostrar este patrón en una fuente fija para una mejor legibilidad)

P   A   H   N
A P L S I I G
Y   I   R

Y luego lea línea por línea: "PAHNAPLSIIGYIR"

Escribe el código que tomará una cadena y realizará esta conversión dada una cantidad de filas:

conversión de cadena (cadena s, int numRows);

Ejemplo 1:

Entrada: s = "PAYPALISHIRING", numRows = 3
Salida: "PAHNAPLSIIGYIR"

P   A   H   N
A P L S I I G
Y   I   R
Y luego leyendo linea por linea: "PAHNAPLSIIGYIR"

Ejemplo 2:

Entrada: s = "PAYPALISHIRING", numRows = 4
Salida: "PINALSIGYAHRPI"
Explicación:
P     I    N
A   L S  I G
Y A   H R
P     I

Ejemplo 3:

Entrada: s = "A", numFilas = 1
Salida: "A"
 

Restricciones:

1 <= s.longitud <= 1000
s consta de letras inglesas (minúsculas y mayúsculas), ',' y '.'.
1 <= número de filas <= 1000
