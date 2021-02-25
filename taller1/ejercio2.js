const factorial = (n) => {
    if (n == 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };

console.log("-----------------------------------------ejercio 2 -----------------------------------------");
const Ejercio2 = () => {
       pasajes =  factorial(3)/(factorial(3-1));
       console.log("las menaras que puede viajar son " + pasajes );             
  };
console.time("Ejercio2");
console.log(Ejercio2());
console.timeEnd("Ejercio2");
