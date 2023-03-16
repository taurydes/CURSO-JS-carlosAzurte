//BUCLES dependiendo del caso de uso veremos cual de los bucles necesitamos, existen 3 elementos que necesitamos 
 // 1°inicialización
 // 2°condición de permanencia
 // 3° Actualización de la variabl que controla la condición

// primer bucle es el while. ejemplo
// while(condición ){
//   // codigo
// }
function bucleWhile(num){
    let i=0;
    while(i<num){
    console.log(i);
    i++;
    }//cierre de while
  }//cierre function
  bucleWhile(11);
  
  // segundo bucle es el do while, que se ejecuta por lo menos una vez, así no se cumpla la condición. ejemplo
  //do{
  //  codigo
  // }while(condición );
  function doWhile(num){
    let i=0;
    do{
    console.log(i);
    i++;
    }while(i<num)//cierre de while
    
  }//cierre function
  doWhile(11);
  
    
    //tercer bucle, bucle for
    //for(inicializacion; condicion; actualizacion ){
    // codigo
    // }
  function bucleFor(num){
  
    for(let i=0; i<num ; i++){
      console.log(i);
      
    }
  }//cierre function
  bucleFor(11);
  
//ARRAYS: estructura de datos en la ual podemos almacenar diversos slot o huecos, o otros estructuras de datos, donde todo está encapsulado en la misma variable, declaración de un array const array =[];
//array[0] ="1";
//array[1] ="2";
//array[2] ="3";

const obj ={
    unArray: new Array(1000)
  };
  //para ahorrar procesamiento a la hora de correr un array muy extenso, lo mejor y para tener buenas practicas sería almacenar la longitud del array en una variable y así el programa no va a llamar a lña función length 1000 veces, sino que ya sabe cuanto va a recorrer, 
  for(let i = 0;i<obj.unArray.length;i++){
    obj.unArray[i] = 'Hola';
  }
  //de esta manera 
  let longitud = obj.unArray.length;
  for(let u = 0;u<longitud;u++){
    obj.unArray[u] = 'Hola';
  }
  
  // o tambien pudiera ser  de esta manera< ya que el array va a leer la condición  de inicialización solo una sola vez
  
const unArray = obj.unArray
  for(let x = 0, longitud2 = unArray.length ;x<longitud2;x++){
    obj.unArray[x] = 'Hola';
  }
  //con estos metodos de optimización aunque se ahorre poco es bueno xq cada vez que se tenga que acceder a un objeto o estructura y luego a lo que este adentro, hace que se monten bloques en memoria


//otra manera es instanciando la clase core o primitiva array y le pasamos un valor, esto sería pasarle la longitud. 
// const array = new Array(10000);


// debido a que mi array es un un objeto array podemos utilizar los metodos que poseen todos los array, en este caso vemos el forEach para recorrer el array sin necesidad de usar el for común y preguntar por su tamaño
const miArray =[1,2,3,4];
miArray.forEach(function(item,index){
  console.log("El valor de la posición " + index+ " es: "+ item);
})
//con la nueva manera  ECMAScript6 o ES6
const miArray2 =[1,2,3,4];
miArray2.forEach((item,index) => {
  console.log(`El valor de la posición ${index} es: ${item}`);
})

// MANERA PARA IMPRIMIR LAS PROPIEDADES DE UN OBJETO CON forEach
const libro ={
    titulo: "Aprendiendo JavaScript",
    autor: "carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24.90"
  }
  
  //para recorrer no nos sirve forEach porque es de la clase array, para recorrer podemos usar una propiedad que tiene la calse objet
  // Object.getOwnPropertyNames(nombredelobjeto);
  const props = Object.getOwnPropertyNames(libro);
  props.forEach(name => {
    let valor=Object.getOwnPropertyDescriptor(libro, name).value;
    console.log(`La prop ${name} Contiene: ${valor}`);
  })
  
  // con esto convertimos a las propiedades del objeto en un array, con la propiedad getOwnPropertyNames y con la propiedad getOwnPropertyDescriptor nos devuelve su valor 
  
  
//Acá tenemos otra manera con ForIn que apareció en ES6 la sintaxis sería la siguiente
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

  for (let prop in libro) {
    console.log(`La prop ${prop} contiene: ${libro[prop]} `)
  }

//