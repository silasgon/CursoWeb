function semana(dia){

    switch (dia) {
        case 1 :
           return "Domingo Fim de Semana!"
        case 2 : case 3 : case 4 : case 5 :        
            return "Dia util!"
        case 6 :
            return "Sextou, Ainda dia util!"
        case 7 :
           return "Sabado, Fim de Semana!"
        default:
            return 'Dia Inválido'
    }
}

console.log(semana(1));
console.log(semana(2));
console.log(semana(6));
 