//Importamos las funciones
import { doTask1, doTask2, doTask3 } from './task.js';



export function runCode() {
  const strings = [];
  return doTask1()
  //LLamamos las promesas de forma secuencial como si fuera un callback hell
    .then(res => {
      strings.push(res)
      return doTask2();
    })
    .then(res => {
      strings.push(res)
      return doTask3();
    })
    .then(res => {
      strings.push(res)
      return strings
    })
    .catch(error => {
      console.log(error)
    });
}