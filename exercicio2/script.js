let idade = Number(prompt('Forneça a idade da pessoa:'))
let terminouEnsinoMedio = confirm('A pessoa já terminou o ensino médio?')
let isCursandoOutraFaculdade = confirm('A pessoa NÃO está cursando outra faculdade?')

if(idade >= 18){
    console.log('A pessoa é maior de idade.')
}else{
	console.log('A pessoa é menor de idade.')
}

if(terminouEnsinoMedio){
    console.log('A pessoa terminou o ensino médio.')
}else{
    console.log('A pessoa não terminou o ensino médio.')
}

if(isCursandoOutraFaculdade){
    console.log('A pessoa NÃO está cursando outra faculdade.')
}else{
    console.log('A pessoa está cursando outra faculdade.')
}