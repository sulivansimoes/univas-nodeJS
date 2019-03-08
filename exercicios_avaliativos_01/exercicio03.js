/**
 * 3 - Exercicio
 * Crie um arquivo de texto que contenha  as dezenas sorteadas, os números apostados
 * e os acertos obtidos em cada jogada. O nome do arquivo deve ser a data do dia
 * formado pelos números agrupados do ano mês dia hora e minutos do momento que foi
 * executada aplicação.
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
let cAcertos  = "";
let dData = new Date();
let _cArquivo = dData.getFullYear().toString() + dData.getMonth().toString() + dData.getDate().toString() + dData.getHours().toString() + dData.getMinutes().toString()+".txt";

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
        cNumeroApostado = "Números apostados \n"+cNumeroApostado.substring(1) + "\n\n";

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
        cNumeroSorteado = "Números sorteados \n"+cNumeroSorteado.substring(1)+"\n\n";

        //verificando acertos
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (aNumeroSorteio[i] == aNumeroApostado[j]) {
                    aAcertos.push(aNumeroSorteio[i]);
                    cAcertos += ("-" + aAcertos[aAcertos.length - 1]);
                }
            }
        }
        cAcertos = "Acertos obtidos:" + cAcertos.substring(1) + "\n";
        cAcertos +="Número de acertos: " + aAcertos.length;  

        //Gerando arquivos com resultados
        fs.writeFile(_cArquivo, (cNumeroSorteado + cNumeroApostado + cAcertos) , {encoding: 'utf-8', flag: 'a'}, (err) =>{

            if(err){ throw err };
	        console.log('Arquivo gerado com sucesso!');
        });
    });
});