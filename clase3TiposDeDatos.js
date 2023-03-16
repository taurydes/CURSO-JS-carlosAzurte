// Clases CORE y los modulos de JS, clases que forman el nucleo de lo que es el lenguaje
// primero veremos la clase Object
// ejemplo de un objeto
const libro ={
    titulo: "Aprendiendo JavaScript",
    autor: "carlos Azaustre",
    numPaginas: 100,
    editorial: "carlosazaustre.es",
    precio: "24.90",
    leer : function(){
      console.log("he leido el libro")
    }
  }
// las propiedades son pares clave : valor, para acceder a ellas podemos usar la notación del punto o las notación tipo array ejemplo
libro.titulo;
libro["titulo"];
libro["editorial"];
//se usan para acceder a un objetos y depende, de la situación nos puede convenir una u otra,es importante saber que a pesar de que el objeto sea una constante sus propiedades si podemos modificarlas ejemplo:
libro.titulo = "desarrollo Web con React";
libro["titulo"] = "Aprendiendo nuevos lenguajes";

//ya que usamos la notación de corchetes, nada nos impide crear una variable let pages y llamar a algun atributo que tenga el mismo nombre ejemplo

let pages = "numPaginas";
libro[pages]; // acá muestra la cantidad de páginas del objeto que asignamos a la variable let anteriormente
libro.pages; // esto no lo entiende xq no es una propiedad del objeto

// tambien podemos crear propiedades dentro de un objeto que sea una función y llamarla mas adelante
libro.leer();

// Para crear un objeto tenmos dos formas, podemos crear el objeto con llaves como hemos hecho anteriormente o crear una instancia de object
let librito = {
     titulo: "librito JavaScript",
     autor: "carlos Azaustre",
}
librito.titulo;
// o podemos crearlo con instancia 

let librote = new Object({
   titulo: "librote JavaScript",
    autor: "carlos Azaustre",
})

librote.titulo;


// un objeto tambien puede tener varios niveles, una propiedad puede tener otro objeto con mas propiedades

let libron ={
  titulo : "Aprendiendo JS",
    autor: {
      nombre : 'carlos Azaustre',
      edad : 36,
          redes :{
            twitch : "twitch.tv/carlos",
            tiktok: "tiktok/carlos"
          }
    }
}
// y para acceder a ellos usamos la nomenclatura del punto o como arrays
libron.autor.nombre; //manera punto 
libron['autor']['redes']['tiktok'] // mood arrays
libron['autor']['redes'] // mood arrays

// cuando vayamos a comparar objetos es recomendable usar los === a no ser que compartar la referencia, xq pueden tener los mismos atributos y ser diferentes, por ejemplo


const coche1 = {marca: "tesla", modelo: "X"};
const coche2 = {marca: "tesla", modelo: "X"};

coche1 === coche2; // retorna falso xq a pesar de que tienen los mismos atributos no son el mismo objeto
coche1.marca === coche2.marca; // retorna true xq las marcas de los dos coches si son la misma

const coche3 = coche1;
coche1 === coche3;  //// retorna true xq los objetos tienen la misma referencia,  son lo mismo, por así decirlo,

// CLASE NUMBER  clase CORE
// nos permite representar los conjuntos numericos 
// por ejemplo
25
25.5
//hexadecimal se representa con el 0 seguido de la x
0x1F //31
0x10 //10
0xFF //255
//coma flotante 
5.4e2 // 5.4 * 10^2
1/0 // infinito
-1/0 // menos infinito 
1e1000 // ininito de nuevo 
"a"/0 // error de que no es un tipo numerico

let numero = new Number(5); // esto no se utiliza pero es lo mismo 
parseInt("15"); //la confiable parseInt para tomar la parte numerica entera de un string 
parseInt("1111", 16) // acá con dos parametros pasamos de binario a hexadecimal 
parseInt("1111", 2) // acá con dos parametros pasamos de binario a decimal 
parseFloat("5e3") // acá similar pero con los float 
let n = 2.5678; 
n.toFixed(2);  //Esta funciona para redondear el argumento es la cantidad de decimales que queramos pero nos devuelve un string debemos usar el parseInt o parseFloat para tomar su parte numerica, con el 0 lo redondea a 3 
parseInt(n.toFixed(0));

n.toExponential(2);  //Esta funciona para exponenciales el argumento es la cantidad de decimales que queramos pero nos devuelve un string debemos usar el parseInt o parseFloat para tomar su parte numerica, con el 0 lo redondea a 3 

// y podemos hace los mismo para pasar  un numero a string 
(1111).toString(10)// el argumento 10 es decimal, el 2 es binario y el 16 es hexadecimal

// ahora veremos la clase math que nos ahorra muchisimo tiempo

Math.PI
Math.E
// parseInt((Math.random()*100).toFixed(0)); // par obtener numeros aleatorios del 0 al 100 
Math.min(2,4,6)//minimo
Math.max(1,3,5) //maximo 
Math.pow(9,9) // potencias 


//CLASE ARRAY 
// podemos crearla con corchetes o con instanciación
//puede ser de numeros, strings, objetos 
let miArrau =[
    {propiedad : "valor"},
    {propiedad : "valor"}
    
  ];
  let miArray2 =[
    [2,4],
    [3,6]
    
  ]
  let miArray3 =[ // podemos tener un valor con multiplos objetos dentro de distintos tipos
    1,
    true,
    [3,2],
    "hola",
    {clave: "valor"} 
  ]
  
  let miArray4 =[3,6,1,4]
  miArray4.sort();//ordena el array
  miArray4.pop(); // elimina el ultimo elemento del array
  miArray4;
  miArray4.push(2); // introduce un elemento de ultimo
  miArray4
  miArray4.sort();
  miArray4.reverse() // le da la vuelta a como está en ese momento
  
  
  // un metodo muy util que tiene la clase array es el metodo Join que nos permite unir todos los elementos del array en uno solo con el identificador del parametro. 
  //Ejemplo
    let valor = 5
    const template =[
      "<li>",
      valor,
      "</li>"
    ]
    console.log(template);
  // aplicando el join
    let val = 3
    const templa =[
      "<li>",
      val,
      "</li>"
    ].join(""); // y así pudieramos usar esto para agg contenido html 
    console.log(templa);
  
  //otro metodo muy utilizado es el metodo map, nos permite utilizar una funcion con todos los elementos del array  luego crea otro array con los elementos modificados
  
  let miArrays = [2,4,6,8];
  let raices = miArrays.map(function(item){
    return Math.sqrt(item)
  })
  console.log(raices)
  
  // o con ES6
  let raicesES6 = miArrays.map((item) => Math.sqrt(item))
  console.log(raicesES6)
  
  // y si la función que vas a implementar va a trabajar solo con el mismo elemento el item, podemos obviarnos esa parte 
  let rai = miArrays.map(Math.sqrt)
  console.log(rai)


  // otra función común es para filtrar elementos de un array

let miArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let resultado = miArray.filter(item => item % 3 === 0) // con el porcentaje usamos el modulo , es decir que el residuo de la division entre 3 nos de 0 
resultado;
// para trocear arrays usamos  slice(dessde donde comienza a cortar, hasta donde corta)
miArray.slice(2);
miArray.slice(2,5);
// si aplicamos negativos nos resta elementos del final

miArray.slice(2,-2); // menos los dos ultimos

//ahora veremos la clase string  veremos algunos ejemplos 
//la clase string se comporta como un array
"JavaScript"[2] // nos devuelve el caracter 2
"JavaScript".length; //tamaño del string
"JavaScript".charCodeAt(2);//pasandole una posición nos devuelve el numero en unicode del caracter que seleccionemos en el parametro
"JavaScript".indexOf("scritp")// si nos devuelve -1 no existe si nos devuelve un valor es que desde allí comienza la palabra que etamos buscando 
"JavaScript".substring(2,4)// obtenemos  la parte cortada del numero de caracter que estamos solicitando por parametro

// ahora para declarar un string es sencillo 
let texto = "Hola"; // así se usan 
let text = new String("Hola") // no se usa 

// y por ultimo tenemos un metodo para transformar un texto en array parecio al JOin pero contrario, veamos un ejemplo
const fecha = new Date(); // instanciación de un object tipo fecha
fecha.toString();
// ahora si queremos dividirlo en un array  
//el argumento nos dice con que criterio el va a dividir el string en elementos del array
fecha.toString().split(" ")[4] // con corchetes le pedimos el numero que queremos 
fecha.toString().split(" ")[4].split(":")// si queremos podemos volver a dividir el mismo string

