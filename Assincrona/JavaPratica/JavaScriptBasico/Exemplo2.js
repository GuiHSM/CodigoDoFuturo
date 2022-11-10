function calculaMedia(nota1,nota2,nota3){
    let media=(nota1+nota2+nota3)/3;

    if(media<5){
        return 'Reprovado';
    }

    if(media<7){
        return 'Recuperação';
    }

    return 'Aprovado';
}
console.log(calculaMedia(10,5,7));