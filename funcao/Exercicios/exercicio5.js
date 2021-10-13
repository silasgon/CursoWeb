function cambio(valor){
    console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`)
}

cambio(0.1 + 0.2)