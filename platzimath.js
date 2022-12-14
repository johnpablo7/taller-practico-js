// class PlatziMath {
// static esPar() {}
// static esImpar() {}
// static calcularMediana() {}
// }

const PlatziMath = {};

// numero / 2
// (numero % 2)
// true = 1 | false = 0
PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
  // if !(lista.length % 2) {
  //   return false;
  // } else {
  //   return true;
  // }
}

PlatziMath.esImpar = function esImpar(lista) {
  return (lista.length % 2);
  // if (lista.length % 2) {
  //   return true;
  // } else {
  //   return false;
  // }
}


PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];

  const moda = listaMaxNumber[0];
  // console.log({ listaCount, listaArray, listaOrdenada, listaMaxNumber });
  // console.log('La moda es: ' + listaMaxNumber[0]);
  return moda;
}


PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  // [10,20,30,40]
  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1; // 20 - (0,1)
    const indexMitad2ListaPar = (lista.length / 2); // 30 - (0,1,2)

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;

  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2); // 3/2 = 1.5 => 1
    const medianaListaImpar = lista[indexMitadListaImpar]; // 0, 1
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}


PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  // const ejemplo = (a,b) => a + b;
  // const sumaLista = lista.reduce((a,b) => a + b);
  const sumaLista = lista.reduce(sumarTodosElementos);

  const promedio = sumaLista / lista.length;
  // console.log(promedio);
  return promedio;
}


PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1; // Es F entonces +1
    // } else if (valorAcumulado == nuevoValor){
    //   return 0; // lo dejamos asi ..no hacemos nada
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1; // lo dejamos asi ..no hacemos nada
    // }

    return valorAcumulado - nuevoValor;
    // return 5 - 10 = -5;
    // return 5 - 5 = 0;
    // return 10 - 5 = 5; (va a hacer fly va a poner ese 10 en una posicion mas adelante)
    // Lo contrario seria los numeros- pasarian a ser numeros+ y los + pasarian a ser -
    // return nuevoValor - valorAcumluado
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  // const lista = listaDesordenada.sort((a,b) => a-b);
  return lista;
}

// [[0,1,2,3], [0,1], [0,1]]
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // return valorAcumulado[1] - nuevoValor[1];
    return valorAcumulado[i] - nuevoValor[i];
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}

