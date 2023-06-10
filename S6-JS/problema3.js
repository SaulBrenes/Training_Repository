//Variables
let vv, igv, pv;

//Entradas
vv = Number(prompt('Ingrese el valor de la venta del producto: '));

//Proceso
igv = vv * 0.19;
pv = vv + igv;

document.write('El IGV(19%) es igual a: ', igv);
document.write('<br>El precio de venta es de: ', pv)