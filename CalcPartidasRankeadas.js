//Primeira forma de resolução
function calcularRank(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    switch (true) {
        case saldoVitorias < 10:
            nivel = "Ferro";
            break;

        case saldoVitorias < 20:
            nivel = "Bronze";
            break;

        case saldoVitorias < 50:
            nivel = "Prata";
            break;

        case saldoVitorias < 70:
            nivel = "Ouro";
            break;

        case saldoVitorias < 80:
            nivel = "Diamante";
            break;

        case saldoVitorias < 90:
            nivel = "Lendário";
            break;

        case saldoVitorias < 100:
            nivel = "Imortal";
            break;

        default:
            nivel = "Radiante";
    }
    return "O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel;
}

let rank = calcularRank(60, 12);
console.log(rank);

//Segunda forma de resolução
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(saldoVitorias) {
    const niveis = [
        { limite: 10, nome: "Ferro" },
        { limite: 20, nome: "Bronze" },
        { limite: 50, nome: "Prata" },
        { limite: 70, nome: "Ouro" },
        { limite: 80, nome: "Diamante" },
        { limite: 90, nome: "Lendário" },
        { limite: 100, nome: "Imortal" },
        { limite: Infinity, nome: "Radiante" }
    ];

    for (let nivel of niveis) {
        if (saldoVitorias < nivel.limite) {
            return nivel.nome;
        }
    }
}

function main() {
    const vitorias = 90;
    const derrotas = 12;

    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = calcularNivel(saldo);

    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

main();

