// OBJETO THIS
// this es un objeto especiialñ de js que hace referencia al contexto en el que se está ejecutando la función.

// comenzaremos con ES3
//ya no declaramos variables con var,y el this no funcionaba ya que no sabía en que función el estaba haciendo referencia, se solucionaba creando una variable
// that y asignandole el elemento this.
var obj ={
    foo: function(){return 'foo'},
    barr: function(){
      var that = this;
      document.addEventListener('click',function(event){
        that.foo()
      })
    }
  }
  //esto cambio con el ES5 cuando se agrega un metodo especial llamado bin que nos permitía hacer un elazamiento del contexto 
  var obj ={
    foo: function(){return 'foo'},
    barr: function(){
        document.addEventListener('click',function(event){
        this.foo()
      }).bind(this)// aca se esta agg la función bind y los this no se 
    }
  }
  
  //luego llega el ES6 con las arrow function 
  var obj ={
    foo: function(){return 'foo'},
    barr: function(){
        document.addEventListener('click',event => this.foo())// aca se con la arrow function es una especie de bind implicito
    }
  }