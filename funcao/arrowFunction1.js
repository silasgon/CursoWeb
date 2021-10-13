let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a;  //retorno esta implicito
console.log(dobro(Math.PI))

let olá = function(){
    return 'Olá!'
}

ola = () => 'Olá!'

ola = _ => 'Olá!' // Possui um Param *_*
console.log(ola())