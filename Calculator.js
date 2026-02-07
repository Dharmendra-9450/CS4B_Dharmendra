// const calculator=()=>({
//     add: (a,b)=>a+b,
//     sub:(a,b)=>a-b,
//     mul: (a,b)=>a*b,
//     div: (a,b)=>b!=0?a/b:"Cannot not divide"
// })

// const calc = calculator();

// console.log(calc.add(10, 5)); 
// console.log(calc.sub(10, 5)); 
// console.log(calc.mul(10, 5));
// console.log(calc.div(10, 5));


// Calculator using switch case
const calculator = (op,a,b) => {
  switch (op) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    case '/':
      return b !== 0 ? a / b : "Cannot divide by zero";

    default:
      return "Invalid operator";
  }
};


console.log(calculator('+',10, 5)); 
console.log(calculator('-',10, 5 )); 
console.log(calculator('*',10, 5)); 
console.log(calculator('/',10, 0 ))
