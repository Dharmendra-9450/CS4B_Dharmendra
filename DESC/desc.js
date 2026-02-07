

// const student={
//     name: "Dharmendra",
//     age: 33,
//     address: {
//         city:"Ghaziabad",
//         State: "Uttar Pradesh"
//     }
// }
// // const name= students.name;
// // const age= students.age;
// // const{name: st_name="Amit",age,
// //     address:{city}}=students;

// // console.log(st_name,age,city);

// function displaystu({name ,age}){
//     console.log(`My name is ${name }and age is ${age}`);
    
// }
// displaystu(student);
// let number=[10,20,30]
// let a,b,c=number;
// console.log(a);
// console.log(b);
// console.log(c);


let data=[1,2];
let [a=10,b=20]=data;
console.log(a);
console.log(b);

let p=5;
let q=10;
[p,q]=[q,p];
console.log(p);
console.log(q);

let colors=['red','blue','green']
