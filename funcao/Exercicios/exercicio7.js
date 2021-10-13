function bhaskara(a = 0, b = 0, c = 0) {

    const delta = (Math.pow(b, 2) - 4 * a * c)

    if (delta < 0) {
       return console.log('Delta é negativo') 
    }else{

        let x1, x2;
        var result = []

        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)

        result.push(x1)
        result.push(x2)
   
        //return console.log(`O valor do X1 = ${x1} e X2 = ${x2}`)
        return result

    }

    
}

console.log(bhaskara(4, 2, -6))
//bhaskara(7, 3, 4)