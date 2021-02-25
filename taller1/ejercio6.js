const Ejercio6 =() =>{

    let Fideos =  5;
    let Carnes = 4 ;
    let Salsas = 6;
    let contador = 0;
  
    for (let i =1 ; i <= Fideos ; i++){
      
      for (let j=1; j <=Carnes ; j++){
        
        for (let h =1 ; h <=Salsas ; h++){
          contador++
          console.log(contador,"Fideos :",i,"Carnes :",j,"Salsas :" , h)
        }
      }
    }
  }
  console.time("Ejercio6");
  console.log(Ejercio6());
  console.timeEnd("Ejercio6");
  