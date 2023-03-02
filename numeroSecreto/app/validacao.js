function verfificaResposta(chute) {
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML +='<div>Valor inválido </div>'
        return
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número dito 
        precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class="btn-jogar">Jogar Novamente</button>
        `
    }
    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>`
    }
    else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})