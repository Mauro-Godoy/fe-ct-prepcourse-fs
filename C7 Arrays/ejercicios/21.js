function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesePedidos = ['enero','marzo','noviembre']
  var mesEncontrado=[]
  for(let i=0;i<arraylength;i++){
    var mes=array[i]
    if(mesePedidos.includes(mes)){
      mesEncontrado.push(mes)
    }
  }
}

module.exports = mesesDelAño;
