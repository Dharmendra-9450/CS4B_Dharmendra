console.log("first");
// document.write("From JS");
var a=10;
var a=20;
// console.log(window);
function hello(){
    if (true){
        let x=10;
        console.log("inner",x)
    }
    console.log("outer" ,x);
}
hello();

function showuser(){
    console.log("user file1",user);
}
showuser();