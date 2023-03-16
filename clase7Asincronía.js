// ASINCRONÍA
//en concreto el uso de promesas y tambien asynaway
// para la practica usaremos JS Bin,que es una aplicación web que nos permite ejecutar codigo JS,html, css y poder ver la salida sin usar nigun editor y hacer la demostración más rápido

const datos =[{
    id:1,
    title: 'Iron Man',
    year: 2008
  },{
    id:2,
    title: 'Spiderman: HomeComing',
    year: 2017
  },{
    id:3,
    title: 'Avengers: Endgame',
    year: 2019
  }];
  
  const getDatos = () => {
    return datos;
  }
  
  console.log(getDatos());
  
  // para simular el comportamiento de un servidor, donde las funciones no se ejecutan al momento usaremos la función
  const muestraDatos = () => {
    setTimeout(() => {
    return datos;
    },1500);
  }
  console.log(muestraDatos()); // podemos ver que nos devuelve undefined, xq como tiene que esperar la respuesta, a la hora de llamar la función no sabe que hacer con el tiempo de espera, esto se resuelve con las promesas, que es un objeto especial de JS que nos permite ejecutar un trozo de codigo y cuando esté listo se devuelve, y si hay algún error devuelve error, lo unico que va a pasar ese tiempo de asincronía, veremos un ejemplo 
  
  const promesaDatos = () => {
    return new Promise((resolve, reject) => {  
    setTimeout(() => {
    resolve(datos); // acá le decimos que si el flujo el normal nos retorne los datos
    },1500);
    })
  }
  // console.log(promesaDatos()); // vemos que no podemos llamarla de manera normal esto debido a que estamos returnando un objeto promise, para llamarla hacemos lo siguiente
  //promesaDatos().then((datos) => console.log(datos)); // acá vemos como simulamos el comportamiento del server, que 
  
  // otra manera de hacerlo sería la siguiente
  
  async function fechingData(){ // debemos declarar la función como asíncrona para poder usar el await dentro de ella, y esperar que la promise se tome su tiempo para ejecutar 
    try{
         const datosFetched = await promesaDatos();
      console.log(datosFetched);
    }catch(err){
      console.log(err);
    }
  }
    fechingData();