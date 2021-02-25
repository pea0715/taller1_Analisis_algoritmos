let contenedor = [];
let min = 10000;

function aleatorio(){
   let num=Math.floor(Math.random()* 100);
 
   if(contenedor.length <min){
   contenedor.push(num);
 
   aleatorio();
   }
}
console.time("aleatorio");
aleatorio();
console.log(contenedor);
console.timeEnd("aleatorio");

