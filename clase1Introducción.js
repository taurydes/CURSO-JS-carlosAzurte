//operador AND &&
console.log(true && false && true && true);

// operador OR || 

console.log(true || false);

//condicionales 

//sentencia IF
let operacion = 3+2;
if(operacion >=7){
    console.log("es verdadero")
}else {
    console.log("es falso")
};


// Funciones 
function saludar(nombre){
  
    return `!Hola ${nombre}!`; //nueva manera de escribir un texto concatenado en JS
    return "!Hola" + nombre + "!"; // funciona de la msima manera
}

saludar("DANIEL");


function saludar(nombre = "JOSUE"){ // usando parametros por defecto
  
    return `!Hola ${nombre}!`; //nueva manera de escribir un texto concatenado en JS
    return "!Hola" + nombre + "!"; // funciona de la msima manera
}
// se puede asignar un valor a la variable y al llamar la función si no le pasamos variable el lo toma como se definió en la función
saludar();
saludar("juanito");

// anteriormente se trabajaba JS con clases que es POO, definimos la clase que es como un molde de algo y luego hacemos las instancias a partir de esa clase
//veremos un ejemplo

// por buenas practicas se colocaba la primera letra mayusculas 
function Inventario(nombre){ 
    //con el objeto this haciamos referencias a las propiedades o atributos dentro de la clase Inventario
    this.nombre = nombre;
    this.articulos=[];
  } 
  // luego para añadirle metodos o funciones a la clase Inventario que acabamos de crear lo haciamos con prototype (nombreclase.prototype.nombremetodo = ), a continuación un ejemplo
  Inventario.prototype.getNombre = function(){return this.nombre };
  
  //acá estamos creando otro metodo para añadir articulos 
  Inventario.prototype.add = function(articulo,cantidad){
    this.articulos[articulo] = cantidad; };
  
  Inventario.prototype.cantidad = function (articulo){
    return this.articulos[articulo];
  }
  
  //ejemplo de como instanciar un objeto articulo
  let libros = new Inventario('libros');
  
  libros.getNombre();
  libros.add("Aprendiendo JavaScritp", 5);
  libros.cantidad("Aprendiendo JavaScritp");
  
  //esta es la manera de como se hacía antes, del 2015 para atras, la nueva manera es usando la palabra class, veremos un ejemplo
  
//la manera actual de crear clases es como muestra en siguiente con la palabra reservada class seguida del nombre de la clase, luego el metodo constructor para crear las propiedades que te4ndrá nuestra clase, seguido del constructor establecemos los metodos que tendrá nuestra clase
class InventarioN{
    constructor(nombre){
      this.nombre = nombre;
      this.articulos = [];
    }
    
    getNombre(){
      return this.nombre;
    }
    add(articulo,cantidad){
      this.articulos[articulo] =cantidad;
    }
    
    cantidad(articulo){
      return this.articulos[articulo]
    }
  }
  let libro = new InventarioN('libro');
  libro.getNombre();
  libro.add("Aprendiendo JavaScritp", 5);
  libro.cantidad("Aprendiendo JavaScritp");
  
  

// introduccion
// las Varibles se decretan en let o const las const(constantes) no pueden cambiar su valor a lo largo del codigo y  las let si pueden ser redefinidas
//una función pura es una función que devuelve el mismo tipo de dato que el de entrada 




// ECMAScript específicamente es el estándar que a partir del año 2015 a la actualidad 
// se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, 
// siendo este (JS – JavaScript) interpretado y procesado por multitud de plataformas,
// entre las que se encuentran los navegadores web, NodeJS u otros ambientes como el desarrollo de aplicaciones
// para los distintos sistemas operativos que actualmente existen en el mercado. 
// ES5 


// A continuación te presentamos algunas de las novedades de ECMAScript 6 (ES6) en cuanto a es5 (ECMAScript 5):

// Función Arrow: Conocidas como expresiones lambda en C# y Java,
// arrows o flechas son abreviaciones de funciones utilizando el operador => Por ejemplo:

// 		// ES5 
// 		var sum = function(y, z){ 
// 		return y+z; 
// 		} 
//  		// ES6
// 		 var sum = (y, z) => y + z;
// El código de la sintaxis de las clases ha sido actualizado de forma que sea más sencillo y de fácil comprensión
// al momento de su implementación.

// Para indicar que una variable solo va a estar definida en un bloque en particular 
// se agregara let a su inicio y al terminar el bloque la variable dejará de existir,
//  siendo de esta forma muy útil a la hora de evitar errores desde el punto de vista lógico,
//   en el momento en que se altere una variable que no debería haberse modificado.

// Las variables constantes van definidas por const en su inicio esto permitirá prevenir 
// que una variable declarada cambie de valor, convirtiéndola efectivamente en una constante.

