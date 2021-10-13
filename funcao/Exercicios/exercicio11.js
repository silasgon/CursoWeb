function anoBisexto (ano){
if (ano <= 0) {
    return false
}else if (ano % 400 == 0) {
    return true
}else if (ano % 100 == 0){
    return false
}else if (ano % 4 == 0){
    return true
}else{
    return false
}
}

console.log(anoBisexto(2021))
console.log(anoBisexto(2020))
console.log(anoBisexto(2019))
console.log(anoBisexto(2018))
console.log(anoBisexto(2017))
console.log(anoBisexto(0))