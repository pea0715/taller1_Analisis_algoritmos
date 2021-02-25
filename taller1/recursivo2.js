var contenedor = [];
var min = 50 ;

function existe(elemento)
{
	for(i=0;i<contenedor.length;i++)
	{
        if(contenedor[i]===elemento)	
        return true;
	}
	
	return false;
}
 
function aleatorio(){
	var num=Math.floor(Math.random()* 100);
	
	if(contenedor.length <min){
		if(!existe(num)){
			contenedor.push(num);
		}
		aleatorio();
	}
}
console.time("aleatorio");
aleatorio();
console.log(contenedor);
console.timeEnd("aleatorio");
