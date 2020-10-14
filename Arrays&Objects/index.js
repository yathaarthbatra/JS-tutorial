//ARRAY in JS:
//These are used to store the similar as well as different elements or variables
//Array index starts from zero

var arr = [1, 2, 3];
console.log(arr); //[1,2,3]
console.log(arr[0]); //1

var arr1 = []; //empty array

//2nd way using new keyword
var arr3 = new Array(1, 2, 3, 4);
console.log(arr3); //[1,2,3,4]

var names = new Array("yathaarth", "batra", "Khatra");
console.log(names); //["yathaarth","batra","Khatra"]

//Different functions and properties used in the array

//-->.length-->It sets or returns the length of the array
console.log(names.length);

//-->Sort method-->Sort the elements in the array
names.sort();
console.log(names);
//sort fn sorts the elements in the array acc. to ascending order or alphabetically order
//acc. to the data types of the elements.

//pop()-->This fn removes the element from the last and returns the removed element
//push()--> This fn adds the element in the end and returns the length of the new

//shift()--> This fn removes the element from the beginning and returns the removed element
//unshift()--> This fn adds the new element in the beginning and returns the new length

//reverse()--> This functions reverses the elements in the array

//Array.isArray()--> This fn tells whether the array is actually an array or not and this returns bool value
var check = Array.isArray(names);
console.log(check);

//.concat()--> This fn concatenates the two arrays
console.log(arr3.concat(names)); //[ 1, 2, 3, 4, "Khatra", "batra", "yathaarth" ]

//indexOf()--->will tell you the index of the array
