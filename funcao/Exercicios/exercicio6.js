function jurosSimples(capIni, txJuros, tempoAplic) {
    return capIni + (capIni * txJuros * tempoAplic)
}

function jurosCompostos(capIni, txJuros, tempoAplic) {
    return capIni * (1 + txJuros) ** tempoAplic
}

console.log(jurosSimples(10,10/100,2))
console.log(jurosCompostos(10,10/100,2))