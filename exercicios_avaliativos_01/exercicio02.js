/**
 * 2 - Exercicio
 * Utilizando a biblioteca FS(File System), altere seu sistema para que ao
 * invés de informar os seis números, estes sejam lidos a partir de um arquivo
 * que contenha as apostas de um cliente lotérico que seus 6 números sejam distribuidos em
 * 6 linhas diferentes do arquivo de texto. É importante verificar se o arquivo exite antes de 
 * fazer a leitura de seus dados.
 */

// Biliotecas
var fs = require("fs");
//Constantes
const MININO = 1;
const MAXIMO = 60;
//Variaveis
let aNumeroApostado = [];
let aNumeroSorteio = [];
let aAcertos = [];
let cNumeroApostado = "";
let cNumeroSorteado = "";
let cAcertos = "";

//verificando se arquivo existe
fs.open("aposta.txt", "r", (err, fl) => {

    if (err) { throw err };
    console.log("Arquivo existe");

    //Lendo arquivo
    fs.readFile('aposta.txt', 'utf-8', function (err, data) {

        //Pegando números apostados
        let linhas = data.split(/\r?\n/);
        linhas.forEach(function (linha) {
            aNumeroApostado.push(linha);
            cNumeroApostado += "-" + linha;
        });
        cNumeroApostado = cNumeroApostado.substring(1);

        //Gerando números aleatórios
        for (let i = 0; i < 6; i++) {

            let lIsRepetido;
            let nNumero;

            //No laço garanto que não vai ser sorteado número repetido.
            do {
                lIsRepetido = false;
                nNumero = Math.floor(Math.random() * (MAXIMO - MININO)) + MININO;

                for (let j = 0; j < aNumeroSorteio.length; j++) {

                    if (nNumero == aNumeroSorteio[j]) {
                        lIsRepetido = true;
                        break;
                    }
                }
            } while (lIsRepetido);

            aNumeroSorteio.push(nNumero);
            cNumeroSorteado += ('-' + aNumeroSorteio[i]);
        }
        cNumeroSorteado = cNumeroSorteado.substring(1);

        //verificando acertos
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (aNumeroSorteio[i] == aNumeroApostado[j]) {
                    aAcertos.push(aNumeroSorteio[i]);
                    cAcertos += ("-" + aAcertos[aAcertos.length - 1]);
                }
            }
        }
        cAcertos = cAcertos.substring(1);

        //Mostrando resultados
        console.log("Números sorteados: " + cNumeroSorteado);
        console.log("Números apostados: " + cNumeroApostado);
        if (cAcertos.trim() !== '') {
            console.log("Você acertou " + aAcertos.length + " número(s). São eles: " + cAcertos);
        } else {
            console.log("Você não acertou nenhum número!");
        }

    });
});










