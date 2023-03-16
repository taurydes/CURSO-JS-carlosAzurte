// ejemplo de optimización de los recorridos de bucles
const obj = {
    unArray: new Array(2000)
  }
  
  function badPerformance(){
    console.time("bad");
    for(let i=0; i<obj.unArray.length;i++){
      obj.unArray[i] = 'Hola';
    }
    console.timeEnd('bad');
  }
  
  function goodPerformance(){
    console.time("good");
    let unArray=obj.unArray;
    for(let i=0, longitud = unArray.length; i<longitud;i++){
      unArray[i] = 'Hola';
    }
    console.timeEnd('good');
  }
  
  badPerformance();
  goodPerformance();