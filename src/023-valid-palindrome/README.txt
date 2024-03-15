ENG

A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, 
or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

* ------------------------------------------------------------ *

ESP

Una frase es un palíndromo si, después de convertir todas las letras 
mayúsculas en letras minúsculas y eliminando todos los caracteres no 
alfanuméricos, se lee igual hacia adelante y hacia atrás.
Los caracteres alfanuméricos incluyen letras y números.

Dada una cadena s, devuelve verdadero si es un palíndromo,
o falso en caso contrario.

Ejemplo 1:

Entrada: s = "Un hombre, un plan, un canal: Panamá"
Salida: verdadero
Explicación: "amanaplanacanalpanama" es un palíndromo.

Ejemplo 2:

Entrada: s = "correr con un coche"
Salida: falso
Explicación: "raceacar" no es un palíndromo.

Ejemplo 3:

Entrada: s = " "
Salida: verdadero
Explicación: s es una cadena vacía "" después de eliminar caracteres no alfanuméricos.
Dado que una cadena vacía se lee igual hacia adelante y hacia atrás, es un palíndromo.
 
Restricciones:

1 <= s.longitud <= 2 * 105
s consta únicamente de caracteres ASCII imprimibles.