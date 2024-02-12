// two caregories of data types

// primitive or simple:--number,string,boolean,null,undefined
let age = 50;
let height = 80.78;
let isRight = true;
let isLoading = false;
let male = true;
let skiaa = false;
let startingPoint = null;

let grow; //undefined
// check the data typeof keyword
console.log(typeof age); //number

// complex datatypes or non-primitive:--object,array,function
let car = {
  brand: "toyota",
  model: "vitz",
  yom: 2014,
};
let color = ["yellow", "red", "blue"];
function dance() {
  return "dancing";
}
console.log(typeof car);
console.log(typeof color);
console.log(typeof dance);
// special:--date,regexp

// everyhing in js is an object
