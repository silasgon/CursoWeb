function tipoTriangulo(lado1, lado2, lado3) {
    
    if(lado1 === lado2 && lado2 === lado3){
        console.log(`Este é um triângulo EQUILÁTERO`)
    }else if(lado1 === lado2 || lado2 == lado3 || lado1 == lado3){
        console.log(`Esste é um triângulo ISÓSCELES`)
    }else{
        console.log(`Este é um triângulo ESCALENO`)
    }
}

tipoTriangulo(2,2,1)