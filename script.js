// Desafio 1
//Crie uma função que irá receber uma quatidade indeterminada de número. É tire a média desses valores:

function media(...values) {
  let sum = 0
  values.forEach(a => (sum += a))
  return sum / values.length
}

function media(...values) {
  let sum = values.reduce((acc, value) => (acc += value), 0)
  return sum / values.length
}
//Formas diferentes de possui o mesmo resultado!
console.log(media(10, 8, 9, 1, 5))
