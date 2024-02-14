//an array is a list of related data
//an array is a special object with va;ues and keys, however,by default an array is zero indexed(elements in an arrays can be accessed using thier indexes which are numbers starting from zero from the first elements to the lastelemnt where n is the number of elemnts)
//elements in an array are separated by a comma
const numbers = [3222, 545, 6, 24, 24, 22, 2, 6, { name: "Albert", age: 90 }];

//first element
console.log(numbers[0]);
//second element
console.log(numbers[1]);
//last element
console.log(numbers[7].name);

//these are functions provided by java  that allow us to manipulate data in the array
console.log(numbers);
numbers.push(788);
console.log(numbers);

//some array methods do not mutate/change the original array while others do

//some array method have a return value,while others do not
