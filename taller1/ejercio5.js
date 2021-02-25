const Ejercio5 =() =>{

    let Faldas =  3;
    let Blusas =  5;
    let Zapatos = 2;
    let contador = 0;
  
    for (let i =1 ; i <= Faldas ; i++){
      
      for (let j=1; j <=Blusas ; j++){
      
        for (let h =1 ; h <=Zapatos ; h++){
          contador++
          console.log(contador,"faldas :",i,"blusas :",j,"zapatos :" , h)
        }
      }
    }
  }
  console.time("Ejercio5");
  console.log(Ejercio5());
  console.timeEnd("Ejercio5");
  