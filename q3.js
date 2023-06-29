function primeNumber(a) {
  if(a===1){
   return "NO"
  } 
  for(i=2;i<a;i++){
    if(a%i === 0){
      return "NO"
      }
    }
return "YES"
  }


const a1 = 10;
const a2 = 29;
const a3 = 2;

console.log(primeNumber(a1));
console.log(primeNumber(a2));
console.log(primeNumber(a3));

module.exports = primeNumber;
