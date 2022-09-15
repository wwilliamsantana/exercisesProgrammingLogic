//**********DESAFIO 7 *********************
//Receber uma array bidimensional. É colocar todos os elementos dentro de uma array simples com os valores em ordem crescente
/*
function organizeArray(arr) {
  let newArr = []

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     newArr.push(arr[i][j])
  //   }
  // }

  // arr.map(a => {
  //   a.map(b => {
  //     newArr.push(b)
  //   })
  // })

  arr.forEach(list => {
    newArr.push(...list)
  })

  return newArr.sort((a, b) => a - b)
}

console.log(
  organizeArray([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103]
  ])
)
*/

//**********DESAFIO 8 *********************
//Receba uma string com um nome completo. É retorne o ultimo nome em letra maiúsculo + Iniciais
//Ex: William Silva de Santana -> SANTANA W. S.

function alterationName(name) {
  let arr = name.toUpperCase().split(' ')
  // let sobrenomes = arr.splice(0, arr.length - 1)
  // let newName = `${arr[arr.length - 1]}, `

  // sobrenomes.map(a => {
  //   newName += a.substr(0, 1) + '. '
  // })

  let iniciais = ' '

  for (let i = 0; i < arr.length - 1; i++) {
    iniciais += `${arr[i][0]}. `
  }
  console.log(`${arr[arr.length - 1]}, ${iniciais}`)
  //console.log(newName)
}

alterationName('Isaac Larrubia Ferreira Pontes')
