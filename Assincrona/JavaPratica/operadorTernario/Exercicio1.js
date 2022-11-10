/*idade = 15;
if(idade<18){
    console.log('Menor de Idade');
}else{
    console.log('Maior de Idade');
}*/


function calculaIdade(idade){
    return idade<18 ? 'Menor de Idade': 'Maior de Idade';
}
console.log(calculaIdade(15));