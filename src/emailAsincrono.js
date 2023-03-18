 function sendEmail(email, subject, body) {
  // De entrada empezamos retornando una promesa
  // La cual nos provee de resolve y reject dependiendo si hay éxito en esta
  return new Promise((resolve, reject) => {
    // Primero validamos que todos los aspectos del email estén disponibles
    if (email && subject && body) {
      // De ser así, creamos un timeout para "enviar" el email
      // Recuerden hacer uso de window para que las pruebas pasen
      setTimeout(() => {
        // Dentro del timeout definimos un objeto con
        // todos los datos recibidos
        const mensaje = {
          email,
          subject,
          body,
        };

        // Y lo pasamos a la resolución exitosa de la promesa
        // Para que esto sea "enviado" después de 2 segundos
        resolve(mensaje);
      }, 2000);
    } else {
      // En caso de faltar algún dato, lanzamos un error indicándolo
      reject(new Error("Hacen falta datos para poder enviar el correo"));
    }
  });
}

  sendEmail("gola@gmail","eso mimo","anja")
.then((mensaje)=>console.log(mensaje))


//Como funcionaria el asincronismo en humus
  console.log("shawarma 1");
  console.log("shawarma 2");
  console.log("shawarma 3");

  setTimeout(()=>{
    console.log("Carne");
  },500)

  console.log("shawarma 4");