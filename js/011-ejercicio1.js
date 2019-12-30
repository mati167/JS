'use strict'

var numero1 = parseInt(prompt('ingrese un numero'));
while(!Number.isInteger(numero1)){
	numero1 = parseInt(prompt('TE DIJE UN NUMERO, PELOTUDO'));
}
console.log(numero1);