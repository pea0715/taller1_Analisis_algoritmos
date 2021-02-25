
const Ejercio4 = () => {
    let Paises = 20;
    let Embajador = 20;
    let contador = 1;

    for (let inicio = 1; inicio <= Paises; inicio++) {
        for (let qwerty = 1; qwerty <= Embajador; qwerty++) {
            if(inicio != qwerty){
                console.log(contador, "Resultados: " , "Pais: " , inicio, " y Enbajador pais: " , qwerty )
                contador++;
            }
        }      
    }
}
console.time("Ejercio4");
console.log(Ejercio4());
console.timeEnd("Ejercio4");