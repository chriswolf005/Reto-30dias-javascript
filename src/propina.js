/*
En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.

Recibirás 2 parámetros:

billAmount: El costo total de lo que hayan consumido.
tipPercentage: El porcentaje de propina que deban dejar.
Ambos valores serán de tipo Number.
Los valores serán siempre positivos incluyendo el 0.
deberá devolver el valor de la propina como un número.
Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: calculateTip(100, 10);
Output: 10;

Ejemplo 2:

Input: calculateTip(1524.33, 25);
Output: 381.0825;

*/

function calculateTip(billAmount, tipPercentage) {
    // Tu código aquí 👈
    let respuesta;
    respuesta=billAmount*tipPercentage /100;
    return respuesta;
    
  }

 console.log(calculateTip(100,10));