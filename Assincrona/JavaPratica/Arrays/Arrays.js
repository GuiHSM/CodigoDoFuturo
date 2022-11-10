const { nodeModuleNameResolver } = require("typescript");

//Definição básica de arrays
const alunasGama= ["Paula","Maria","Nina","Nicole","Clara"]

console.log(alunasGama[2]);//Arrays começam em 0, logo 2=Estela

// Operador spread (...)
// Adiciona um array anteriormente de um valor a um novo array
//Parecido com concat mas pode ser antes e independe do array
const alunasXP =[...alunasGama,"Simara"];
console.log(alunasXP);

// Métodos de Iteração
for (let index = 0; index < alunasXP.length; index++) {
    console.log(alunasXP[index]);
}
console.log("\n");
//1-Map: cria uma cópia do array com as alterações que desejamos
alunasXP.map(aluna => console.log(aluna))

//2- Filter: cria uma nova array com o filtro aplicado
const alunasFiltradas = alunasXP.filter(aluna =>aluna.charAt(0)!="N")
console.log(alunasFiltradas);

//3- find - encontra e retorna o primeiro elemento que passe pela condição
console.log(alunasXP.find(aluna=>aluna.length>5));

//4- sort - ordena o array
const alunasXPOrdenadas=alunasXP.sort((a,b) =>a.length-b.length);
console.log(alunasXPOrdenadas);

//- reduce - reduz o array a um resultado de uma operação matemática
console.log((alunasXPOrdenadas.reduce((valorAnterior,valorAtual)=>{
    let text=valorAnterior;
    return text+valorAtual.charAt(2);
})));