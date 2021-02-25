const factorial = (n) => {
    if (n == 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
console.log("-----------------------------------------ejercio 1 -----------------------------------------");
const Ejercio1 = () =>{
    r = factorial(10) / (factorial(10 - 4));
    console.log("la manera que se  "+ r);
}
console.time("Ejercio1");
console.log(Ejercio1());
console.timeEnd("Ejercio1");

