/* **************Desafio 1
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




// ************** Desafio 2
//Faça uma impressão como neste exemplo: (chunk-chunk-chunk) de acordo o valor que colocarmos como parâmetro na função.
//Obs: Sem usar for, forEach, while, doWhile...

1° Conclusão

function print(value) { 
  let i = 0

  if (value > i) {
    i++
    if (value === 1) {
      return 'value'
    }
    return 'value-' + print(value - 1)
  }
}

2° Conclusão + aprimorado

function print(value) { 
  if (value === 0) {
    return ' '
  }

  if (value === 1) {
    return 'chunk'
  } else {
    return 'chunk-' + print(value - 1)
  }
}
*/
