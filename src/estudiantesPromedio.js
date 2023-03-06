let estudiantes=[ {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]

function promedio(estudiantes){//creamos una funcion para sacar el promedio de los estudiantes
    let promedioMid=[]//creamos un promedio medio donde estara en un array la suma de cada promedio de las notas de los estudiantes
    let promedioTotal=[]//aqui pondremos el promedio maximo de todas las notas sumadas
estudiantes.forEach(estudiante => { //hacemos un foreach para iterar cada elemento
    const sacarpromedio= estudiante.grades.reduce((acc,not)=>{//aqui entramos a la propiedad notas del estudiante, con reduce sumamos cada una de las notas
        return Math.round (acc+not/3)//aqui realizamos la suma y lo dividimos en 3, ya que es la cantidad de elementos que hay para mas info(investiga como se saca un promedio)
    },0)//inicialisamos en 0
    
    promedioMid.push(sacarpromedio)//Aqui introducimos cada resultado del promedio
    
});
console.log(promedioMid)//lo presentamos en consola

/*
Resolver esta parte de aqui, ya 
tenemos los promedios en un array,
solo falta recorrer este nuevo array 
para sacar el promedio total

*/

 promedioMid.forEach(item=>{
    const calcular=item.reduce((acc,i)=>{
        return Math.round (acc+i/3)
    },0)
    promedioTotal.push(calcular)
 });
console.log(promedioTotal)
}

promedio(estudiantes)

/*
1 sacamos el promedio maximo
2 sacamos los estudiantes que esten por sensima del promedio maximo
3 validamos que el parametro que nos pasen sea number


*/