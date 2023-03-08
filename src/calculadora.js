function crearImpresoraDeMensajes(tipo,estilos){
    return function mensaje(str){
        console.log(`%c ${tipo}: ${str}  `,estilos);
    }
    
}

const error=crearImpresoraDeMensajes('Error','background:red; color:white');
const waening=crearImpresoraDeMensajes('Warning','background:orange; color:white');
const exito=crearImpresoraDeMensajes('Exito','background:green; color:white');
const info=crearImpresoraDeMensajes('Info','background:blue; color:white');



function createCalculator() {
    // Tu código aquí 👈
    let total=0;
    function add(number){
        total=total+number;
        return total;
    }
    function subtract(number){
        total=total-number;
        return total;
    }
    function multiply(number){
        total=total*number
        return total;
    }
    function divide(number){
        total=total/number
        return total;
    }
    function clear(){
        total=0;
        return total;
    }
    function getTotal(){
        return total;
    }



    return{
        add,subtract,multiply
        , divide, clear,getTotal
    }
  }

  const calculator = createCalculator()
  console.log(calculator.add(10))
  console.log(calculator.add(10))
  console.log(calculator.divide(3))
  console.log(calculator.getTotal())
  console.log(calculator.clear())