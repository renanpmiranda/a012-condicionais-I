const nacionalidade = prompt('Escreva aqui sua nacionalidade:')

if(nacionalidade === 'brasileira' || nacionalidade === 'argentina' || nacionalidade === 'uruguaia' || nacionalidade === 'chilena' || nacionalidade === 'colombiana'){
    console.log(nacionalidade)
}else{
    console.log('nacionalidade não encontrada')
}