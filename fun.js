(function show(){
    console.log("Welcome to CSB")
})();

const user = {
    name: "aj", age:22,
    welcome:function(){
        console.log('hello ${this.name}');
        console.log(this)
    }
};

user.welcome();
// user.name='Dharmendra Patel';
// user.welcome();

// const f=user.welcome;
// console.log(f);