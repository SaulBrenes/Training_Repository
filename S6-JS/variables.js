//Definición de variables
let nombre = 'Alex';
console.log(nombre);
//Forma antigua
var nombre2 = 'Romel';
console.log(nombre2)
/*Lo que sucede con var es que saltará un valor indefinido 
si usamos el nombre de la variable antes de definir, pero el programa funcionara
Mientras con let mostrara un error si usamos el nomnbre de la variable antes de definir*/

//Modificar valor de la variable
nombre = 'Saúl';
console.log(nombre);
nombre = 25.5;
console.log(nombre);

//Variable constante
const pais = 'Nicaragua';
console.log(pais);