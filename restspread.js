function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3)); // 6

function add(numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
// REST operator JavaScript me use hota hai multiple values ko ek single variable (array) me collect karne ke liye.

// 👉 Symbol hota hai: ... (three dots)


// using rest operator  
function addAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(addAll(1,2,3,4,5)); // 15

function student(name, ...marks) {
    console.log("Name:", name);
    console.log("Marks:", marks);
}

student("Dharmendra", 80, 85, 90);

// #destructureing me bhi rest operator ka use hota hai, jisse hum array ke baaki elements ko ek variable me store kar sakte hain.
let a=[1,2,3,34,45,88];
let[first,second,...rest]=a;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 34, 45, 88] 

// spread operator JavaScript me use hota hai ek array ya object ke elements ko dusre array ya object me spread karne ke liye.

// using spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }          

// spread operator ko function arguments me bhi use kar sakte hain, jisse hum array ke elements ko individual arguments ke roop me pass kar sakte hain.
function test(...args) {
    console.log(args);
}
let arr = [1, 2, 3];
test(...arr); // [1, 2, 3]

// Write a Arrow function isEven that takes a number and returns "Even" Or "Odd" based on the number is even or odd.
const isEven = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd


// Write an  arrow function reverseString that return the reverse of a string.
const reverseString = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello Dharmendra Patel  ")); // olleH

// Write an arrow function avgMarks to compute aavg marks and return "Pass" if avg>= 40 otherwise return "Fail".
const avgMarks = (...marks) => {
    let total = 0;      
    for (let mark of marks) {
        total += mark;
    }               
    let avg = total / marks.length;
    return avg >= 40 ? "Pass" : "Fail";
}   
console.log(avgMarks(50, 60, 70)); // Pass
console.log(avgMarks(30, 35, 25)); // Fail      

