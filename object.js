//  a js object-a datatype used in sollctions of data  and functionality.
// we can create objects using{}, Object construtor function or using Oject.create() mathod
// js is dynamically type language.

const user = {
  name: "albert",
  age: "28",
  isKenyan: true,
  likesCars: false,
  height: 5.9,
  role: "instuctor",
  skills: ["coding", "public speaking", "dancing", "eating"],
  favColor: "green",
  favDrink: null,
  "fav place": "nakuru",
  favPlace: null,
  caluculateAge: function getAge(yob) {
    let age = 2024 - yob;
    console.log("You are" + age + " years old");
  },
};

// accessing values stored in an object
//usin the dot noation
console.log(user.height);
console.log(typeof user);
console.log(typeof user.isKenyan); //boolean
user.caluculateAge(2003);
//a function inside an object is called a method for that object

//using bracket notation
console.log(user["favColor"]);
console.log(user["fav place"]); //nakuru

//json(Java Script Object Notation) data exchange format--used by APIs abd other communication devices
