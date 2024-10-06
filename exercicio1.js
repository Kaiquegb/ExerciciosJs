/* 

    solução da lista - exercicio 1 

*/

function reverse_a_number(n)
{    
    console.log(typeof(n));
    n = n + "";
    console.log(typeof(n));
    console.log(n.split())
    console.log(n.split(""));
    console.log(n.split("").reverse())
    console.log(n.split("").reverse().join(""));
    return n.split("").reverse().join("");
   
}
console.log(reverse_a_number(123456));