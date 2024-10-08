
/* 

Solução da Lista de Exercícios - Exercício 5

*/

function getMostFrequent(arr) {

	// cria um objeto para a contagem de elemento do array
    let freq = {};

    for (let item of arr) {
       if (freq[item] == undefined) { 
       	freq[item] = 1
       }
       else {
       	freq[item] += 1
       }
    }

    console.log(freq);

    // verifica o elemento do array com maior contagem
    let frequency = 0;
    let element = "";
    
    for (let i in freq) {
        if (freq[i] > frequency) {
            frequency = freq[i];
            element = i;
        }
    }
    console.log(element + "(" + frequency + " vezes)") ;
}

getMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);