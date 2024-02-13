//a function is a reusable block of code
// defining a function--with no aruguments
function whatItDoes() {
  //the code to run
  let age = 90;
  console.log(age / 3);
}
//defininig a function--with arguments(data:- array,string,boolean,function)
function getAge(yob) {
  let age = 2024 - yob;
  console.log("You are " + age + " years old");
}

function squareNumber(x, user) {
  console.log("hello " + user);
  console.log("The square of " + x + " is " + x * x);
  //The return keyword is used to indicate the result of a function's operations
  return x * x;
}
//invoke or call the function

let result1 = squareNumber(4, "John");
let result2 = squareNumber(90, "Nancy");
console.log(result2);
