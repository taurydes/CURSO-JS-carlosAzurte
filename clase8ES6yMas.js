// 10 funcionalidades y caracteristicas que tiene JS 

//template literals
//se resume en que antes cuando se creaba un string para concatenar teniamos que usar concatenación y agrgar los espacios en clbanco con " " eso cambio. elemplo
const nombre = "Daniel";
const apellido ="TORO";

console.log(nombre + " "+ apellido) // forma con ES5

console.log(`${nombre} ${apellido}`) // de esta manera podemos interpolar de manera mas sencilla

// Ejemplo de como podríamos utilizar la interpolación ES6 en REACT 
function Componente({backgroundColor}){
  return (<div className ={`bg-color-${backgroundColor}`}>Hola</div>)
  }


//Acortadores de nombre de JS en objetos 

// ejemplo
const nombrea = "Daniel"; 
const edad = 36;
const twitter = 'https://twitter.com/carlosazaustre';

//así se hace antes de ES6
const persona = {
  nombre : nombre,
  edad : edad, 
  twitter : twitter
}
console.log(persona)

// Con la llegada de ES6 podríamos hacer cosas como esta, no es necesario 
const persona1 = {
  nombre,
  edad, 
  twitter 
}
console.log(persona)


// para aplicarlo en REACT sería de esta manera 
function Componente({initialState, totalCount}){
  const [state, setState] = useState({initialState, totalCount});
} // si a las variables le colocar el mismo nombre que la clave, nos ahorramos el paso de colocar clave valor

// Otra funcionalidad que se agrega con el ES6 es las funciones Arrow que simplifica la declaración de una función
// ejemplo
function nombreDeLaFuncion(){ //manera de declarar funciones antes del ES6
    return "Hola";
  }
  
  const funcionFlechas = () => "Hola" // acá declaramos la función como una variable, al colocar el parentesis decimos los parametros de la función y la flecha 
  //es como si abrieramos llaves, si vamos a retornar solo una coda podemos hacerlo directamente sin escribir return, si el codigo va a ser mas extenso,
  // abrimos llaves 
  
  const funcionFlecha= () =>{
    //codigo
  }
  nombreDeLaFuncion(); // ES5
  funcionFlechas();  // ES6
  
  // así se podría usar en react 

function ListaDeTareas(){//manera de hacerlo con ES5 
    return(
    <ul>
      {listado.map(function(elemento){
      return (elemento)
    })}
    </ul>
    );
  }
  
  function ListaDeTareas2(){//manera de hacerlo con ES6 
    return(
    <ul>
      {listado.map(elemento => (<li>{elemento.nombre}</li>))}
    </ul>
    );
  } // tenemos acá con la función map una fincón que revisa la lista y me imprime los nombres 

  // Otra propiedad más que podemos usar es el destructuring de objetos y de arrays, veamos un ejemplo

const cuadrado = {
    x: 10,
    y: 10,
  }
  // si quisera calcular el area haría lo siguiente
  
  function calcularArea(cuadrado){
    return cuadrado.x * cuadrado.y;
  }
  calcularArea(cuadrado);
   
  // este codigo lo podríamos desestructurar de la siguiente manera
  function calcularArea2(cuadrado){
    const{x,y} =cuadrado; // acá desestructuramos el elemento y tomamos sus priopiedades para luego retornarlas
    return x * y;
  }
  //otra manera 
  function calcularArea3({x,y}){// acá desestructuramos el elemento y tomamos sus priopiedades para luego retornarlas
    return x * y;
  }
  calcularArea(cuadrado);

  // parametros por defecto 

function suma(a,b){
    return a+b;
  }
  suma(3); // si llamamos a una función con menos argumentos de los que posee nos aparece NaN, para corregir esto agregabamos un condificinal 
  // ejemplo
  
  function sumas(a,b){
    if(a === undefined || b === undefined){
      return('Debes introducir 2 valores')
    }
    return a+b;
  }
  sumas(3);
  // como esto era muy tedioso se agregaron lso valores por defecto, que se declarar en los argumentos
  function sumo(a = 0,b = 0){// de esta manera de no asignar un elemento a los parametros ya tienen un valor por defecto
    return a+b;
  }
  sumo(3);

  // otra caracteristica sería el xpressOperation
//si tenemos dos array y queremos unirlos se hacía de la siguiente manera
const array=[1,2,3,4,5,6,7];
const otroArray=[8,9,10,11,12,13];

const nuevoArray = array.concat(otroArray);// con concat, podemos unir dos arrays
console.log(nuevoArray); // acá imprimimos el nuevo array

// la nueva manera de hacerlo mas facil es la siguiente 
const novoArray=[...array, ...otroArray]; // concatenando
console.log(novoArray); // acá imprimimos el nuevo array
// los 3 puntos consecutivos se llaman rest operator  quiere decir resto de propiedades y trae consigo todas las propiedades de un objeto
// ahora veremos el mismo ejemplo pero con objetos

const obj1 ={
  a: 'a',
  b: 'b',
  c: 'c'
};
const obj2 ={
  d: 'd',
  e: 'e',
  f: 'f'
};

const nuevoObj =Object.assign({},obj1,obj2); // así se hacía anteriormente para concatenar dos objetos
console.log(nuevoObj); // imprimiendo

// para hacerlo más facil podemos hacerlo de la siguiente manera
const novoObj = {...obj1, ...obj2} // el codigo es más sencillo 
console.log(novoObj); 

function Componentes3({id, name, username, profile, }){// acá hicimos destructuring del objeto 
    return <NuevoComponente key= {id} name={name} username={ username} profile={profile}/>
  }
    //esto lo podríamos hacer de manera mas rapida así. 
    
function componentes9({id, ...props}){
    return <nuevoComponente Key= {id} {...props}/>// acá le decimos que tome el resto de las propiedades y las pase a continuación del elemento que redefinimos
}

// otra caracteristicas serían lso modulos de emmaScripts para no tener todos los modulos en un mismo fichero sino que los searas en varios archivos y luego reinsertarlos donde queramos 
// imaginemos que esto es un fichero
export default function suma(a,b){  // para usarlo usamos la palabra reservada export
    // ...
  }
    
  //------------------------------------------------------------------------------
   // imaginemos que esto es un fichero  
   export function resta(a,b){ // para usarlo usamos la palabra reservada export
    // ...
  }
    //------------------------------------------------------------------------------
   // imaginemos que esto es un fichero  
//   para usarlos acá  los importamos desde el fichero que los necesite
  import suma from './suma';
  import {resta, otrafunction} from './resta'; // cá cuando no usamos el default 
       
  function calculadora(){ // imaginemos que esto es un otro fichero que necesita usar los otros dos ficheros 
    suma();
    resta();
  }

   
// una manera de comprobar que se agrga en JS para comprobar de manera mas sencilla cuando una varible es null es el nullisequaloperator 
// veamos un ejemplo 

function suma(a,b){
    a = a == null ? 0 : a; // la corrida sería la siguiente reasignamos la variable a luego comparamos con null y el signo de interogación pregunta? si es null asignale 0 sino asignale el valor que tenía antes 
    b = b == null ? 0 : b;
    return a+b
  }
  suma(3);
  
  
  function sumo(a,b){
    a = a ?? 0; // con esto preguntamos a es null ?? si es null asignale 0 así nos ahorramos un poco de codigo, 
    b = b == null ? 0 : b;
    return a+b
  }
  sumo(3,9);
  
  // optionalchangeing
  
  // esto se usa para comprobar que dentro de un objeto dentro de sus niveles este una propiedad veamos un ejemplo
  
  const user ={
    nombre: 'daniel',
    edad: '19',
    location: {
      x: 9531,
      y: 6846,
      city:{
        zipcode : 95984,
        ldl: 5555
      }
    }
  }
  
  const zipcode = user && user.location && user.location.city && user.location.city.zipcode; // así se comprobaba que existiera la propiedad dentro del elemento
  
  const zipcode2 = user?.location?.city?.zipcode; // de esta manera hacemos lo mismo, preguntamos por la propiedad con el signo de ? y nos ahorramos un poco de codigo y nuestro codigo queda de manera más limpia 