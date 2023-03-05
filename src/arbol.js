var estudiantes=["maria","pedro","juan","carlos"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)


}

for (let i=0; i<estudiantes.length; i++){

    saludarEstudiantes(estudiantes[i]);

}

function arbol1(long,caracter){
 let arbol=""
 
    for(let i=0; i<long;i++){
        let linea=""
        let espacios="";
       //Construir espacios en blanco
       for(let j=0; j<long-i;j++){
      
        espacios+=" ";

       }
       //Construir la linea de caracteres correspondiente
       for(let l=0; l<i;l++){
        linea+=caracter
       }
       //Agregar la línea completa (espacios + caracteres) a la cadena del árbol
       arbol+=espacios+linea+"\n";
    }
    console.log(arbol);
}
arbol1(5,"*") 
arbol1(6,"$")
arbol1(3,"%")


function arbolArray(long,caracter){
    let rray=[]
       for(let i=0; i<long;i++){
           rray.push(caracter)
           console.log(rray)
       }
    }