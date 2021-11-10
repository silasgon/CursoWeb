function maiorOuIgual(num1, num2) {
    if (num1 > num2 || num1 === num2){
        console.log(true)
    }else{console.log(false)}
}

maiorOuIgual(0,0)
maiorOuIgual(0,"0")
maiorOuIgual(5,1)

function maiorOuIgual2(num1, num2) {
    if(typeof num1 !=  typeof num2) return false

    return num1 >= num2
}
maiorOuIgual2(0,0)
maiorOuIgual2(0,"0")
maiorOuIgual2(5,1)