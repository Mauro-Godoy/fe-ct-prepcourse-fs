function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length===0){
    return null
  }
  
  var min=numeros.Math.min
  var max=numeros.Math.max

  for(let i=min;i<max;i++){
    if(!numeros.include(i)){
      return i
    }
  }
  return null
}

module.exports = encontrarNumeroFaltante;