//a function is a reusable block of code
// defining a finction
function whatItDoes() {
  //the code to run
  let age = 90;
  console.log(age / 3);
}

function getAge(yob) {
  let age = 2024 - yob;
  console.log("You are " + age + " years old");
}
whatItDoes();
whatItDoes();
whatItDoes();
getAge();
getAge(2000);
getAge(2014);
