function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var primerelemnto = array[0]
  for(let i = 0; i<array.length;i++){
    if(array[i]===primerelemnto){
      return true
    }
  }
  return false
}

module.exports = todosIguales;
