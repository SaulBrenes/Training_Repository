//Variables
let vv, igv, pv;

//Entradas
vv = Number(prompt("Ingrese el valor de la venta del producto: "));

//Proceso
igv = vv * 0.19;
pv = vv + igv;

/*Salida de datos
document.write('El valor de venta es: ', vv);
document.write('El IGV(19%) es igual a: ', igv);
document.write('<br>El precio de venta es de: ', pv)
*/
document.write('<h1>Salida de datos</h1>')
document.write(`<pre>
                Valor de venta  : ${vv} <br>
                IGV             : ${igv} <br>
                Precio de venta : ${pv}
                </pre>
`);
