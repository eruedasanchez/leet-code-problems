ENG 

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. 
The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 
 Follow-up: If the string data type is mutable in your language, 
 can you solve it in-place with O(1) extra space?

* ------------------------------------------------------------ *

ESP

Dada una cadena de entrada s, invierta el orden de las palabras.

Una palabra se define como una secuencia de caracteres que no son espacios.
Las palabras en s estarán separadas por al menos un espacio.

Devuelve una cadena de palabras en orden inverso concatenadas por un solo espacio.

Tenga en cuenta que s puede contener espacios iniciales o finales o varios espacios entre dos palabras. La cadena devuelta solo debe tener un espacio que separe las palabras. No incluya espacios adicionales.

Ejemplo 1:

Entrada: s = "el cielo es azul"
Salida: "azul es cielo el"

Ejemplo 2:

Entrada: s = "  hola mundo   "
Salida: "mundo hola"
Explicación: Su cadena invertida no debe contener espacios iniciales ni finales.

Ejemplo 3:

Entrada: s = "un buen    ejemplo"
Salida: "ejemplo buen un"
Explicación: Debe reducir varios espacios entre dos palabras a un solo espacio en la cadena invertida.
 

Restricciones:

1 <= s.longitud <= 104
s contiene letras inglesas (mayúsculas y minúsculas), dígitos y espacios ' '.
Hay al menos una palabra en s.
 
 Seguimiento: si el tipo de datos de cadena es mutable en su lenguage,
 ¿Puedes resolverlo in situ con O(1) espacio extra?
