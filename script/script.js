// Carne - 400 gr por pessoa + de 6 horas - 650 gr
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml 

// criança valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando.....");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao)
    let cerveja = cervejaPP(duracao)
    let bebidas =  bebidasPP (duracao)


    let qdtTotalCarne = carne * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalcerveja = cerveja * adultos;
    let qdtTotalbebidas = bebidas * adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalcerveja / 350)} Latinhas de cerveja`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalbebidas / 2000)} Garrafas 2L de Bebida`
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000
    }else{
        return 1200
    }
}
function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500
    }else{
        return 1000
    }
}