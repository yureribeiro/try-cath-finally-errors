//utilize o try chath para tratar de possíveis erros na aplicação

function sum(a, b) {
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error('arguments must be two numbers')
  }

  return firstNumber + secondNumber
}

try {
console.log(sum(2, 9)) // 11
console.log(sum(true, 14)) // 15
console.log(sum(undefined, 22)) //Error
} catch(err) {
  console.log(err.message) //message = 'arguments must be two numbers'
} finally {
  console.log('calculations finished.') 
}

console.log('hello world!') 

//ao utilizar o try catch, o codigo não para de funcionar caso der algum erro, 
//pois vc ja deu estruções do que fazer caso o erro aconteça.