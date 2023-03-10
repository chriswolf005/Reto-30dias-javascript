

 function myMap(array,func) {
    // Tu código aquí 👈
    let arrayNew=[]
    for(item of array){
     arrayNew.push(func(item))
   
    }
    return arrayNew
}
console.log( myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name))
