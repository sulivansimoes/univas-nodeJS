/**
 * 1 - Exercicio
 * Criar uma aplicação Javascript para ser executada via console e que permita
 * ao usuário sortear 6 números de 1 a 60 e guardar num array. 
 * Depois informe 6 números sua prefêrecnia e guarde-os em um outro array.
 * A lógica da plicação deve decobrir quantos números você acertou.
 * Rode diversas vezes o programa e veririque quantas vezes acertou seus números preferidos.
 */

//Constantes
const MININO = 1;
const MAXIMO = 60;
//Variaveis
let aNumeroApostado = [19,2,43,14,35,17];
let aNumeroSorteio  = [];
let aAcertos        = [];
let cNumeroApostado = "";
let cNumeroSorteado = "";
let cAcertos        = "";

//Lendo números digitados pelo usuário.

//Exibindo números digitados
for(let i = 0; i < 6; i++){
    cNumeroApostado +=  ("-" + aNumeroApostado[i] ); 
}
cNumeroApostado = cNumeroApostado.substring(1);

//Gerando números aleatórios
for(let i = 0; i < 6; i++){

    let lIsRepetido;
    let nNumero;

    //No laço garanto que não vai ser sorteado número repetido.
    do {
        lIsRepetido = false;
        nNumero = Math.floor( Math.random() * (MAXIMO - MININO)) + MININO;

        for(let j = 0; j < aNumeroSorteio.length; j++){

            if(nNumero == aNumeroSorteio[j]){
                lIsRepetido = true;
                break;
            }
        }
    }while(lIsRepetido);

    aNumeroSorteio.push(nNumero);
    cNumeroSorteado += ( '-' + aNumeroSorteio[i] );
}
cNumeroSorteado = cNumeroSorteado.substring(1);

//verificando acertos
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 6; j++){
        if(aNumeroSorteio[i] == aNumeroApostado[j]){
           aAcertos.push(aNumeroSorteio[i]);
           cAcertos +=  ("-" + aAcertos[aAcertos.length-1] );
        }
    }
}
cAcertos = cAcertos.substring(1);

//Mostrando resultados
console.log("Números sorteados: " + cNumeroSorteado);
console.log("Números apostados: " + cNumeroApostado);
if(cAcertos.trim() !== ''){
    console.log("Você acertou "+aAcertos.length+" número(s). São eles: "+cAcertos);
}else{
    console.log("Você não acertou nenhum número!");
}
