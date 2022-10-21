const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



console.log('============================================');
console.log('|                Programa de               |');
console.log('|                    Menu                  |');
console.log('============================================');
console.log('|                                          |');
console.log('|           Por favor seleccione una       |');
console.log('|               de las opciones            |');
console.log('|                  del menu                |');
console.log('|                                          |');
console.log('|                                          |');
console.log('|    OPT.      Nombre                      |');
console.log('| ---------------------------------------- |');
console.log('|     1        Raiz Cuadrada               |');
console.log('|     2        Registrarse                 |');
console.log('|     3        Iniciar sesion              |');
console.log('|     4        Preguntas y respuestas      |');
console.log('|     5        Calendario                  |');
console.log('|     6        Fin de Programa             |');
console.log('|                                          |');
console.log('| ---------------------------------------- |');
console.log('|     Nota: este programa esta realizado   |');
console.log('|     noje.js con javascript como base.    |');
console.log('|                                          |');
console.log('============================================');
console.log('                                            ');

rl.question('---> Ingresa un opcion de menu: ', function (opt) {

  console.log(`---> Ingresaste la opción: ${opt}`);
  console.log('                                            ');
  Menu(opt);

 // rl.close();
});



rl.on('close', function(){
    process.exit(0);
})


function Menu(opt){

    switch (opt){
      case '1':
        console.log('                           ');
        console.log('====== Raiz Cuadrada====== ');
        console.log('                           ');
        raiz();
      break;
      case '2':
        console.log('|                           |');
        console.log('| ====== Registrarse ====== |');
        console.log('|                           |');
        //llamen la funcion que realiza la suma
        register();
      break;
      case '3': 
          console.log('                             ');
          console.log('====== Iniciar sesion ====== ');
          console.log('                             ');
          //llamen la funcion que realiza la suma
          login();
      break;
      case '4':
          console.log('                                     ');
          console.log('====== Preguntas y respuestas ====== ');
          console.log('                                     ');
          //llamen la funcion que realiza la suma
          AQ();
      break;
      case '5':
          console.log('                       ');
          console.log('====== Calendario ====== ');
          console.log('                       ');
          //llamen la funcion que realiza la suma
          schedule();
      break;
      case '6':
        console.log('====================================');
        console.log('|       Fin del programa !Adios¡   |');
        console.log('====================================');
      break;
    }



// Raiz Cuadrada ------------------------
function raiz(){
    console.log('======================================== ')
    console.log('             Raiz Cuadrada               ')
    console.log('======================================== ')
    console.log('                                         ')
    rl.question('===> Ingresa el numero ', function(num1){
        const resultado = parseInt(Math.sqrt(num1));
        console.log('                                         ');
        console.log(` >>> La raiz cuadrada de ${num1} es ${resultado} <<< `);
        console.log('                                         ');
        rl.close();
    })
}

// Registrar Usuario ------------------------
function register(){
    console.log('======================================== ')
    console.log('               Registrarse               ')
    console.log('======================================== ')
    console.log('                                         ');
    rl.question('---> Ingrese sus nombres ', function(name){
        console.log('                                         ');
        rl.question('---> Ingrese sus apellidos ', function(lastName){
            console.log('                                         ');
            rl.question('---> Ingrese su fecha de nacimiento ', function(date){
                console.log('                                         ');
                rl.question('---> Ingrese su edad ', function(age){
                    console.log('                                         ');
                    rl.question('---> Ingrese su numero de telefono ', function(phone){
                        console.log('                                         ');
                        rl.question('---> Ingrese su correo electronico ', function(email){
                            console.log('                                         ');
                            rl.question('---> Ingrese su tipo de sangre ',function(rh){
                                console.log('                                         ');
                                rl.question('---> ingrese una contraseña',function(password){
                                    console.log('                                         ');
                                console.log('======================================== ')
                                console.log('        Los datos ingresadso son         ')
                                console.log('======================================== ')
                                console.log('                                         ');
                                console.log(`>>> Su nombre y apellido es ${name} ${lastName} <<<`)
                                console.log('                                         ');
                                console.log(`>>> Su fecha de nacimiento y su edad son ${date} || ${age}años <<<`)
                                console.log('                                         ');
                                console.log(`>>> Su numero de telefono es ${phone} <<<`)
                                console.log('                                         ');
                                console.log(`>>> Su correo electronico es ${email} <<<`)
                                console.log('                                         ');
                                console.log(`>>> Su grupo sanguineo (RH) es ${rh} <<<`)
                                console.log('                                         ');
                                console.log(`>>> La contraseña ingresada es ${password} <<<`)
                                console.log('                                         ');
                                console.log('======================================== ')
                                console.log('       Usted a sido Registrado           ')
                                console.log('       Bienvenido al programa            ')
                                console.log('======================================== ')
                                rl.close();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}


// Inicio de Sesion Facebook ------------------------
function login(){
    console.log('======================================== ')
    console.log('            Iniciar Sesion               ')
    console.log('======================================== ')
    console.log('                                         ');
    console.log(`---> Ya tiene una cuenta?`)
    rl.question(`---> Si ya tiene una cuentra presione Y de lo contrario presione N `, function(register){
        console.log('                                         ');
        if(register == 'y' || register == 'Y'){
            rl.question(`---> Ingrese su correo electronico o numero de telefono `, function(phone){
                console.log('                                         ');
                console.log(`---> Ingrese su contraseña `)
                rl.question(`---> Si olvido su contraseña digite N `,function(password){
                    console.log('                                         ');
                    if(password == `N` || password == `n`){
                        rl.question(`---> Ingrese su nueva contraseña `, function(reset){
                            console.log('                                         ');
                            console.log(`Su nueva contraseña es ${reset}`)
                            rl.close();
                        })
                   }else{
                        console.log('                                         ');    
                        rl.question(`===> Desea iniciar sesion? `, function(login){
                            if(login == 'Si' || login == 'si' || login == 'SI' || login == 'sI'){
                                console.log('                                         ');
                                console.log('======================================== ')
                                console.log('       Usted a iniciado sesion           ')
                                console.log('       Bienvenido al programa            ')
                                console.log('======================================== ')
                                rl.close();
                            }else{
                                console.log('                                         ');
                                console.log('======================================== ')
                                console.log('         Hubo un error en el             ')
                                console.log('          Inicio de sesion               ')
                                console.log('      Vuelva a intentar mas tarde        ')
                                console.log('======================================== ')
                                rl.close();
                            }
                        })
                   } 
                })
                rl.close();
            })
        }else if(register == 'N' || register == 'n'){
            console.log('                                         ');
            console.log('======================================== ')
            console.log('       Usted debe registrarse            ')
            console.log('          Intente mas tarde              ')
            console.log('======================================== ')
            rl.close();
        }else{
            console.log('                                         ');
            console.log(`>>>> ¡¡La ${register} opcion no es valida!! <<<<`)
            console.log('                                         ');
            rl.close();
        }
    })
}


// Preguntas y respuestas ------------------------
function AQ(){
    console.log('======================================== ')
    console.log('       Preguntas y respuestas            ')
    console.log('======================================== ')
    console.log('                                         ');
    rl.question(`---> 1. Ingrese una pregunta: `, function(pre1){
        console.log('                                         ');
        rl.question(`---> 2. Ingrese otra pregunta: `, function(pre2){
            console.log('                                         ');
            rl.question(`---> 3. Ingrese otra pregunta: `, function(pre3){
                console.log('                                         ');
                rl.question(`---> 4. Ingrese otra pregunta: `, function(pre4){
                    console.log('                                         ');
                    rl.question(
                        "Ingrese el numero de la pregunta a contestar: ",
                        function(opt){
                            let S = "S";
                            let N = "N";
                            switch(opt){
                                case "1":
                                    console.log('                                         ');
                                    console.log(`Ingresaste la pregunta 1: `, pre1);
                                    console.log('                                         ');
                                    rl.question(`¿Deseas contestarla S/N?: `, function(resp){
                                        console.log('                                         ');
                                        if(resp == S){
                                            rl.question(`Ingresa la respuesta: `, function(respuesta){
                                                console.log('                                         ');
                                                console.log("|====================== Gracias por la respuesta! =========================|")
                                            })
                                        }else if (resp == N) {
                                            console.log('                                         ');
                                            console.log(
                                              "|====================== Fin del programa =========================|"
                                            );
                                          } else {
                                            console.log('                                         ');
                                            console.log(
                                              "|====================== Fin del programa =========================|"
                                            );
                                          }
                                    })
                                break;
                                case "2":
                                    console.log("Ingresaste a la pregunta 2: ", pre2);
                                    console.log('                                         ');
                                    rl.question("¿Deseas contestarla S/N?: ", function (resp) {
                                        console.log('                                         ');
                                      if (resp == S) {
                                        console.log('                                         ');
                                        rl.question("Ingresa la respuesta: ",function (respuesta2) {
                                            console.log('                                         ');
                                            console.log("|====================== Gracias por la respuesta! =========================|")
                      
                                        }
                                        );
                                       
                                      } else if (resp == N) {
                                        console.log('                                         ');
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      } else {
                                        console.log('                                         ');
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      }
                                    });
                      
                                    break;
                      
                                  case "3":
                                    console.log('                                         ');
                                    console.log("Ingresaste a la pregunta 3: ", pre3);
                                    console.log('                                         ');
                                    rl.question("¿Deseas contestarla S/N?: ", function (resp) {
                                        console.log('                                         ');
                                      if (resp == S) {
                                        console.log('                                         ');
                                        rl.question( "Ingresa la respuesta: ",function (respuesta3) {
                                            console.log('                                         '); 
                                            console.log("Gracias por la respuesta!")
                                      });
                                      console.log('                                         ');
                                        console.log("|====================== Gracias por la respuesta! =========================|")
                                      } else if (resp == N) {
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      } else {
                                        console.log('                                         ');
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      }
                                    });
                                    break;

                                    case "4":
                                        console.log('                                         ');
                                        console.log("Ingresaste a la pregunta 4: ", pre4);
                                        console.log('                                         ');
                                    rl.question("¿Deseas contestarla S/N?: ", function (resp) {
                                        console.log('                                         ');
                                      if (resp == S) {
                                        console.log('                                         ');
                                        rl.question( "Ingresa la respuesta: ",function (respuesta4) {
                                            console.log('                                         '); 
                                            console.log("Gracias por la respuesta!")
                                      });
                                      console.log('                                         ');
                                        console.log("|====================== Gracias por la respuesta! =========================|")
                                      } else if (resp == N) {
                                        console.log('                                         ');
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      } else {
                                        console.log('                                         ');
                                        console.log(
                                          "|====================== Fin del programa =========================|"
                                        );
                                      }
                                    });
                                    break;
                                }
                            })
                        }
                    )
                })
            })
        })
    }
}


