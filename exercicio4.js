/* 

Solução da Lista de Exercícios - Exercício 4

*/

var array_Clone = function(arra1) {
    return arra1.slice(0);
       };
       
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));