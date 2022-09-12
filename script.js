/*
// ************** Desafio 1**********************
//Crie uma função que irá receber uma quatidade indeterminada de número. É tire a média desses valores:

1° Opção

function media(...values) {
  let sum = 0
  values.forEach(a => (sum += a))
  return sum / values.length
}

2° Opção
function media(...values) {
  let sum = values.reduce((acc, value) => (acc += value), 0)
  return sum / values.length
}
//Formas diferentes de possui o mesmo resultado!
console.log(media(10, 8, 9, 1, 5))


// ************** Desafio 2**********************
//Faça uma impressão como neste exemplo: (chunk-chunk-chunk) de acordo o valor que colocarmos como parâmetro na função.
//Obs: Sem usar for, forEach, while, doWhile...

1° Opção

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

2° Opção

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

// ************** Desafio 3 **********************
//Inverter arrays, sem usar funções especificas do JS(reverse, forEach), utilizar estrutura de repetição básicas.. 

1° Opção

function inverter(...array) {
  let newArray = []

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  console.log(newArray)
}

2° Opção
function inverter(arr) {
  let newARray = []

  for (let i = 0; i < arr.length; i++) {
    newARray[i] = arr[arr.length - 1 - i]
  }
  // 0 = arr[4 - 1 - 0] = 3
  // 1 = arr[4 - 1 - 1] = 2
  // 2 = arr[4 - 1 - 2] = 1
  // 3 = arr[4 - 1 - 3] = 0
  return newARray
}

console.log(inverter([5, 8, 7, 3])) 

// ************** Desafio 4**********************

//Elevar o valor de cada algarismo ao quadrado é retorna-lós concatenados

1° Opção
function eleven(values) {
  let newArr = values.toString().split('')
  let valuesConc = ''
  for (let i = 0; i < newArr.length; i++) {
    valuesConc += newArr[i] * newArr[i]
  }
  console.log(Number(valuesConc))
}


2° Opção
function eleven(values) {
  let newArr = values.toString().split('')
  let valuesConc = newArr
    .map(value => {
      return value ** 2
    })
    .join('')

  console.log(Number(valuesConc))
}
eleven(3514)
*/
