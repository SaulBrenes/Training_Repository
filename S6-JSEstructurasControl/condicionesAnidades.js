let n = 0,
    resultado = "es un entero";
if (n != 0) {
  if (n > 0) {
    resultado += " positivo";
  } else {
    resultado += " negativo";
  }

  if (n % 2 == 0) {
    resultado += " par";
  } else {
    resultado += " impar";
  }
}
console.log(`${n} ${resultado}`);
