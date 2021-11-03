const pilotos = ['Vettel', 'Alonso', 'Raickkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento na ultima posição
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um primeiro elemento
console.log(pilotos)

// Splice pode adicionar e remover elementos
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa' ) // adiciona elementos após a posição 2
console.log(pilotos)

//Remover
pilotos.splice(3, 1) // remove 1 elemento após a posicao 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array com os elementos do array pilotos apartir da posicao 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array apartir do array pilotos do item 1 até o item 4
console.log(algunsPilotos2)

