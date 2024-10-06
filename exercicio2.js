/* 

    solução da lista - exercicio 2

*/

function combo2(str)
{
    var StArr = str.split("");
    var temp = "";

    for(var i = 0; i <StArr.length; i++){
        temp = StArr[i];
        console.log(temp);
        for(var j = i+1; j <StArr.length; j++){
            temp += StArr[j];
            console.log(temp);
        }
    }
}

console.log(combo2('dog'));