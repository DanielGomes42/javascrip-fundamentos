const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10   // adicionando valor no array
console.log(valores)
console.log(valores.length) // acessa quantidades de valores no array quantos elementos

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos
console.log(valores)

console.log(valores.pop())// tirar o ultimo indice do array
delete valores[0]// deleta o indice que ele colocar !! 
console.log(valores)

console.log(typeof valores)