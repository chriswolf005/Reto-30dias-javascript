function encontrarElemento(matriz, elemento) {
    for (var i = 0; i < matriz.length; i++) { // Iterar por cada fila de la matriz
      for (var j = 0; j < matriz[i].length; j++) { // Iterar por cada columna de la fila
        if (matriz[i][j] === elemento) { // Si el elemento es igual al valor actual de la matriz
          return {
            row:[i],
            column:[j]
          }; // Devolver la fila y columna donde se encontró el elemento
        }
      }
    }
      throw new Error("Valor no encontrado"); // Si el elemento no se encontró en la matriz, devolver [-1, -1]
  }
  // Ejemplo de uso
  var miMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  var elementoABuscar = 5;
  var resultado = encontrarElemento(miMatriz, elementoABuscar);
  
  console.log(resultado); // Imprime [1, 1] ya que el número 5 se encuentra en la fila 1, columna 1 de la matriz
  


  