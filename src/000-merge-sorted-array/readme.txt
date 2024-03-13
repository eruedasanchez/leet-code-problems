ENG 

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. 
The 0 is only there to ensure the merge result can fit in nums1.
 
Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

* ------------------------------------------------------------ *

ESP

Se le proporcionan dos matrices de números enteros nums1 y nums2, 
ordenadas en orden no decreciente, y dos números enteros m y n, 
que representan el número de elementos en nums1 y nums2 
respectivamente.

Fusione nums1 y nums2 en una única matriz ordenada en orden no 
decreciente.

La función no debe devolver la matriz ordenada final, 
sino que debe almacenarse dentro de la matriz nums1. 
Para dar cabida a esto, nums1 tiene una longitud de m + n, 
donde los primeros m elementos denotan los elementos que deben 
fusionarse, y los últimos n elementos se establecen en 0 
y deben ignorarse. nums2 tiene una longitud de n.

Ejemplo 1:

Entrada: 
números1 = [1,2,3,0,0,0], m = 3, 
números2 = [2,5,6], n = 3
Salida: [1,2,2,3,5,6]
Explicación: Las matrices que estamos fusionando son 
[1,2,3] y [2,5,6].
El resultado de la fusión es [1,2,2,3,5,6] con los elementos 
subrayados provenientes de nums1.

Ejemplo 2:

Entrada: números1 = [1], m = 1, números2 = [], n = 0
Salida: [1]
Explicación: Las matrices que estamos fusionando son [1] y [].
El resultado de la fusión es [1].

Ejemplo 3:

Entrada: números1 = [0], m = 0, números2 = [1], n = 1
Salida: [1]
Explicación: Las matrices que estamos fusionando son [] y [1].
El resultado de la fusión es [1].
Tenga en cuenta que como m = 0, no hay elementos en nums1.
El 0 solo está ahí para garantizar que el resultado de la fusión quepa en nums1.
 
Restricciones:

números1.longitud == m + n
números2.longitud == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= números1[i], números2[j] <= 109



