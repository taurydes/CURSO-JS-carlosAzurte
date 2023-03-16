// ARRAYS, 7 Funciones que se usan actualmente
//ejemplo
const posts = [
    {
      id: 1,
      title: 'mi primer post',
      image: 'https://img.com/1',
      tags: ['javascript', 'webdevelopment'],
    },{
      id: 2,
      title: 'Mi experiencia en REACT',
      image: 'https://img.com/2',
      tags: ['javascript', 'webdevelopment','react','angular'],
    },{
      id: 3,
      title: 'por qué dejé angular',
      image: 'https://img.com/3',
      tags: ['javascript', 'webdevelopment','angular'],
    }
  ]
  
  // para acceder es bueno conocer los siguientes metodos, el primero es el metodo find()
  posts.find(post => post.title == 'por qué dejé angular'); // acá le pasamos como parametro una function pero en ES6
  // metodo some(), para ver si hay alguno que tenga el atributo que solicitimes, retorna true o false
  
  posts.some(post=>post.id == 1) // preguntando si hay alguno que su id sea 1 
  posts.some(post=>post.tags.includes('react')) // si le agregamos el includes, podemos verificar si el atributo, dentro posee otro elemente de interes debe ser array
  
  // lo contrario de some es every, sería verifica si en todos los elementos está
  posts.every(post=>post.tags.includes('javascript'))// verificando si en todos los elementos está javascript
  posts.every(post=>post.tags.includes('react'))// verificando si en todos los elementos está react
  
  // metodo map puede buscar el apributo que le solicitemos de cada objeto del array y nos retorna un array nuevo
  posts.map(post=>post.title); // Se usa mucho cuando usamos react, para obtener los titulos de los elementos de un blog por ejemplo
  
  // metodo filter(), con este podemos filtrar los elementos que queramos y nos devuelve un array con los objetos que cumplan la condición
  
  posts.filter(post=>post.tags.includes('angular')) // acá nos retornó  un arreglo nuevo con todos los elementos que poseen image
  
  // por ultimo el reduce(), para obtener un array que nos dé todas las etiquetas con las quye estamos trabajando solocira dos parametros
  posts.reduce((alltags,post)=>{
    return Array.from(new Set([...alltags, ...post.tags]))
  },[])
  // para que no aparezcan repetidas usamos el nuevo elemento de JS para que no aparezcan repetidos Array.from(new Set())
  // tambien podemos hacer lo mismo con filter
 