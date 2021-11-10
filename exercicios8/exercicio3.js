function calcularSalario(horasTrabalhadas, valorDaHora) {
    const salarioBruto = horasTrabalhadas * valorDaHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return console.log(`Salario igual a R$ ${salarioLiquido}`)
}

calcularSalario(180,60)