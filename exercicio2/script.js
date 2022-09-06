let idade = Number(prompt('Forneça a idade da pessoa:'))
let isMaiorIdade = Boolean(prompt('A pessoa já terminou o ensino médio?'))
let isCursandoOutraFaculdade = Boolean(prompt('A pessoa está cursando outra faculdade?'))

if(idade >= 18){
    console.log('A pessoa é maior de idade.')
}else{
	console.log('A pessoa é menor de idade.')
}

if(isMaiorIdade){
    console.log('A pessoa terminou o ensino médio.')
}else{
    console.log('A pessoa não terminou o ensino médio.')
}

if(isCursandoOutraFaculdade){
    console.log('A pessoa está cursando outra faculdade.')
}else{
    console.log('A pessoa não está cursando outra faculdade.')
}