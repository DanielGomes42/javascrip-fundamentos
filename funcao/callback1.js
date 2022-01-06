const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)// primeira parte acaba aqui , cada vez que o forEach encontra uma parametro de frabicantes ele executa imprimir 
fabricantes.forEach(fabricante => console.log(fabricante))