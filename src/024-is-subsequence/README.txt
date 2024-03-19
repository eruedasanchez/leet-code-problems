ENG 

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string 
by deleting some (can be none) of the characters without disturbing the relative 
positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 
Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, 
and you want to check one by one to see if t has its subsequence. 
In this scenario, how would you change your code?

* ------------------------------------------------------------ *

ESP

Dadas dos cadenas s y t, devuelve verdadero si s es una subsecuencia de t, o falso en caso contrario.

Una subsecuencia de una cadena es una nueva cadena que se forma a partir de la cadena original.
eliminando algunos (puede ser ninguno) de los caracteres sin perturbar la relativa
posiciones de los personajes restantes.
(es decir, "ace" es una subsecuencia de "abcde" mientras que "aec" no lo es).

Ejemplo 1:

Entrada: s = "abc", t = "ahbgdc"
Salida: verdadero

Ejemplo 2:

Entrada: s = "axc", t = "ahbgdc"
Salida: falso
 
Restricciones:

0 <= s.longitud <= 100
0 <= t.longitud <= 104
s y t constan únicamente de letras inglesas minúsculas.
 
Seguimiento: supongamos que hay muchos s entrantes, digamos s1, s2, ..., sk donde k >= 109,
y desea verificar uno por uno para ver si tiene su subsecuencia.
En este escenario, ¿cómo cambiarías tu código?
