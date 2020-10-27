let custoProduto = 200
let valorDeVenda = 300
let imposto = 20
let custoProdutoFinal = custoProduto *1000
let valorDeVendaFinal = valorDeVenda *1000 
let ImpostoDoProduto = ((custoProdutoFinal * imposto) / 100) 
let custoTotal = custoProdutoFinal +  ImpostoDoProduto

let lucro =  (valorDeVendaFinal - custoTotal);

console.log (lucro)