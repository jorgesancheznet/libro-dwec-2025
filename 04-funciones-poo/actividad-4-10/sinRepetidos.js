Array.prototype.sinRepetidos = function() {
  const resultado = [];
  for (let numero of this) {
    if (!resultado.includes(numero)) {
      resultado.push(numero);
    }
  }
  return resultado;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
                            5, 4, 3, 2, 1, 3, 3, 4, 2];
const numerosSinRepetidos = numeros.sinRepetidos();
console.log(numerosSinRepetidos); // Muestra [1, 2, 3, 4, 5]