//1. Siempre hambriento
function alwaysHungry(arr) {
  let recibioComida = false;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === "comida") {
      recibioComida = true;
      console.log("delicioso");
    }
  }
  if (!recibioComida) {
    console.log("Tengo hambre");
  }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//2. Filtro paso alto

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > cutoff) {
      filteredArr.push(arr[index]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//3. Mejores que el promedio

function betterThanAverage(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  let promedio = sum / arr.length;
  var count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > promedio) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

//4.Arreglo invertido

function reverse(arr) {
  const arregloInvertido = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    arregloInvertido.push(arr[index]);
  }
  // tu código aquí
  return arregloInvertido;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//5. Arreglo de Fibonacci

function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  const fibArr = [0, 1];
  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
