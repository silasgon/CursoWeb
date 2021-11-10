function inverso(params) {
    const tipo = typeof params
    if (tipo == "boolean") return !params
    if(tipo == "number" ) return -params
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("true"))
console.log(inverso(false))