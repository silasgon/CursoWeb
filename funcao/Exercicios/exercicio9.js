function verificaNota(nota){
    
    let notaArredondada =  arredondarNota(nota)

    if(notaArredondada < 40){
        console.log(`O aluno com a nota ${notaArredondada}, está REPROVADO`)
    }
    else{
        console.log( `O aluno com a nota ${notaArredondada}, está APROVADO`)
    }
}

function arredondarNota(nota){
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

verificaNota(39)
verificaNota(100)
verificaNota(30)
verificaNota(38)
verificaNota(88)
verificaNota(61)