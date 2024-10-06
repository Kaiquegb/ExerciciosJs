/* 

    solução da lista - exercicio 2

*/

function alphabet_order(str)
{
    return str.split('').sort().join('');
}

console.log(alphabet_order("webmaster"));

var given = "webmaster";
var splitted = given.split();
var bigger, smaller = "";

for( i = 0; i< splitted.length; i++){
    for( j=0; j < splitted.length; j++){
        if(splitted[i]> splitted[i + j]){
            bigger = splitted[i];
            smaller = splitted[i + j];
            splitted[i + j] = bigger;
            splitted[i] = smaller;

        }
    }
}

console.log(splitted);