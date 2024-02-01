let nickName = "Raffavairo";
let rankingJogador;
let resultado;
calculadoraRank(100,10)

function calculadoraRank(vitorias,derrotas){
    resultado = vitorias - derrotas
    return resultado
}

if (resultado<=10){
    rankingJogador = "Ferro"}
    else if(resultado>10 & resultado<=20){
        rankingJogador = "Bronze"}
        else if(resultado>20 & resultado<=50){
            rankingJogador = "Prata"}
            else if(resultado>50 & resultado<=80){
                rankingJogador = "Ouro"}
                else if(resultado>80 & resultado<=90){
                    rankingJogador = "Diamante"}
                    else if(resultado>90 & resultado<=100){
                    rankingJogador = "Lendário"}
                    else if(resultado>=101){
                        rankingJogador = "Imortal"
                    }

console.log(`O jogador ${nickName} tem de saldo de ${resultado} e está no ranking ${rankingJogador}`)