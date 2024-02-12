// Variable are a way for programs to store data neede to run effectivley
// There are three ways to store variables:-using var, let, our const keyword with assignment operator

var age = 90;

let username = "Tarus Naomi";

const hieght = 168;
const unit = "cm";

username = "Naomi";
age = 25;

console.log(username + " is " + hieght + unit + " tall " + age);
// let and const were introduced in es6(2015) -- letand const are block scope(you canonly access thier value in block{}they have been defined in)
{
  var varone = 80;
  let vartwo = 90;
  const varthree = 100;
}
console.log(varone + "units");
// console.log(vartwo);
