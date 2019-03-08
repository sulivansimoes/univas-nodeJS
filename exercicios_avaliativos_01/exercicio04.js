/**
 * 4 - Exercicio 
 * Uitlizando a biblioteca HTTP transforme o aplicativo que está sendo  executado
 * via console em uma aplicação web e exiba os resultados obitidos na questão 3
 * em uma página contendo um layout formatado por comandos html e css
 */

// Biliotecas
var fs = require("fs");
var http = require("http");
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
let html = ""

var servidor = http.createServer(function (req, res) {


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
            cNumeroApostado = "Numeros apostados \n" + cNumeroApostado.substring(1) + "\n\n";

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
            cNumeroSorteado = "Numeros sorteados \n" + cNumeroSorteado.substring(1) + "\n\n";

            //verificando acertos
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if (aNumeroSorteio[i] == aNumeroApostado[j]) {
                        aAcertos.push(aNumeroSorteio[i]);
                        cAcertos += ("-" + aAcertos[aAcertos.length - 1]);
                    }
                }
            }
            cAcertos = "Acertos obtidos:" + cAcertos.substring(1) + "<br>";
            cAcertos += "Numero de acertos: " + aAcertos.length;

            //Montando HTML
            html  = "<html>";
            html += "<body>";
            html += "<div>"+cNumeroSorteado+"</div></br>";
            html += "<div>"+cNumeroApostado+"</div></br>";
            html += "<div>"+cAcertos+"</div></br>";
            html += "</body>";
            html += "</html>";

            //Mostrando resultado em uma página web
            res.writeHead(200, { "Type": "text/html; charset=utf-8; " });
            res.write(html);
            res.end();

        });
    });
});

servidor.listen(3000, function () {
    console.log("servidor rodando na porta: " + this.address().port);
});


