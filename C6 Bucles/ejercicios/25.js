function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   var string2 = ''
   for (let i = string.length; i >= 0; i--) {
      string2 += string[i]
   }
   if (string === string2) {
      return true
   } else {
      return false
   }
}

module.exports = esPalindromo;
