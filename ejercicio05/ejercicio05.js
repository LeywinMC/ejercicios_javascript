<<<<<<< HEAD
console.log('-------');
console.log('Manipulacion de Arreglos');
console.log('------')
let arreglo = [10,20,30];
console.log(arreglo);
arreglo.push(40,50);
arreglo.push(90);
arreglo.push(60);
console.log('*******');
console.log(arreglo.length);

for(let ciclo = 0; ciclo < arreglo.length; ciclo++){
    console.log('el valor es '+ arreglo[ciclo]);
}
=======
console.log('------');
console.log('Manipulación de Arreglos');
console.log('-----');
let arreglo = [10, 20, 30];
// push metodo que agrega un nuevo elemento al arreglo al
// final del mismo
arreglo.push(50);
arreglo.push(60);
arreglo.push(70);
console.log('********');
console.log(arreglo);
console.log('--------');
// pop Elimina el ultimo elemento del arreglo
arreglo.pop();
// unshift Inicio
arreglo.unshift(90);
// 
arreglo.shift();
// length nos trae el tamaño de nuestro arreglo
// nos trea el numero de posiciones que tiene el arreglo
for(let ciclo = 0; ciclo < arreglo.length; ciclo++){
    console.log( 'El valor es ->'+arreglo[ciclo]);
}


console.log(arreglo);

///// Metodos o funciones 
//    sinonimo de acciones
>>>>>>> 3aad8df44ff5b29a9dfafc3d8434197c54e6b3cd
