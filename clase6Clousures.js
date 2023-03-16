//CLOUSERES o CLAUSULAS o funciones de cierre

// Las funciones en JS son objetos, enrealidad todo en Js es un objeto y heredan desde la clase Object, podemos guardar una function en una variable y despues invocarla con el parentesis. ejemplo

const saludar= function(nombre){
    return "Hola " + nombre;
  };
  saludar("DANIEL");
  
  // las funciones pueden tener otras funciones dentro de ellas y para acceder a dede el exterior a las variables internas tenemos que usar dos parentesis, ejemplo
  
  const a = "hey ";
  function global(){
    const b="¿Qué ";
      function local(){
        const c = "tal?"
        return a + b + c;
      }
    return local;
  } 
  // dentro de la función global tenemos dos constantes que la función mas interna las entiende debido a que estan por encima de ella, pero desde la función global no podemos acceder a la const C esto xq la función está dentro del scop
  
  global()// al llamarla nos devuelve local esto xq la función global solo retorna a local y local es una función para ejecutarla lo ahcemos con el doble parentesis
  global()(); // con esto conseguimos acceder, y que sería un clousere ? bueh para no tener que colocar doble parentesis creamos una variable y almacenamos la function más externa y luego la ejecutamos desde la variable, ejemplo
  
  const clousure = global();
  clousure(); // de esta manera accedemos a la function más interna sin tener que usar dos parentesis,
  // lo que acabamos de ve son funciones anidadas, pero se asemejan a lo que son los clousure realmente. 
  
  // clousure: es una función que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el operador return, esto se usaba mucho antes de la llegada de las clases a JS con el ES6, esto nos permite modularizar nuestro cod
  // ejemplo:
  
  const miContador = (function(){
    let _contador = 0; // por convención cuando la variable no va a poder ser accedida desde afuera se escribe con un guión bajo al comienzo  
    function incrementar(){
      return _contador++;
    }
    
    function decrementar(){
      return _contador--;
    }
    
    function valor(){
      return _contador;
    }
    return {
      incrementar: incrementar, // así se hacía en ES5 el nombre tenia que ser igual a como lo estes llamando en el return
      decrementar, // con ES6 con solo nombrarlo es suficiente
      valor
    }
  })(); // con el parentesis concatenado hacemos que la function se ejecute al momento.
  
  miContador // acá vemos que solo nos devuelve las funciones que estamos retornando, 
  
  miContador.valor()
  miContador.incrementar()
  miContador.valor()
  miContador.incrementar()
  miContador.valor()
  miContador.decrementar()
  miContador.valor()
  miContador.incrementar()
  miContador.valor()
  // esto es un clousure, una función autoejecutable que devuelve determinadas variables o funciones y puedes trabajar con ella, es muy parecido a las clases y sus metodos.
  