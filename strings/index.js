//Strings in JS:
//string is primitive(by default inbuilt has been defined) data type
//strings can also be seen as objects :
var firstname = new String("Yathaarth"); //firstname will be called as JS object
var name = "Yathaarth"; //name is of string type

// == This operator checks whether both are same or not in terms of value
// === This operator checks on both type as well as the value of the variables

if (firstname == name) {
  document.write("Values are same");
}
if (firstname === name) {
} else {
  document.write("Values are same but the data type are not");
}

//Properties and methods used in Strings:
var sample = "My name is Yathaarth Batra";
console.log(sample.length); //returs the length of the string(26)
console.log(sample.charAt(0)); //returns 'M'
console.log(sample.indexOf("M")); //return 0
console.log(sample.lastIndexOf("a")); //returns 25

//indexOf() gives the first occuring index of the character
//lastIndexOf() gives the last occuring index of the character
//if charcater not found they will return -1

sample.replace("Yathaarth", "Batra");
console.log(sample); //It doesnot affect the original string
console.log(sample.replace("Yathaarth", "Batra")); //My name is Batra Batra

//toUppercase()-->All the characters in the Upper case
//toLowercase()-->All the characters in the lower case

//to concatenate strings we use :
var sample1 = "Hi";
sample1.concat(sample); //Hi ...........
