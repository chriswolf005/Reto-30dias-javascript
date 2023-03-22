/*Aqui creamos un archivo donde estaran las promesas que se deben
cumplir para realizar el ejercicio */


export function doTask1() {//La funcion, retorna una promesa
    return new Promise((resolve, reject) =>//La cual se cumplira cuando se ejecute el setimeout y pasen 3 sg
      (window.setTimeout(() => resolve('Task 1'), 300))
    );
  }
  
  export function doTask2() {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => resolve('Task 2'), 300)
    })
  }
  
  export function doTask3() {
    return new Promise((resolve, reject) => 
      (window.setTimeout(() => resolve('Task 3'), 300))
    )
  }