//JS has many dialogue Boxes:
//1. Prompt box: It is used to input a value before entering a page..after login anything
//pops for newletters or subscriptions or any important news

var name = prompt("What is your name");
//if the user enters the name , then the name will be stored inside the name variable
//if doesnot then name will have null;
document.write("Nice to meet you " + name);
//document.write is used to write on the document i.e on the html page

//Confirm Box in JS:
//This is particularly used when the webpage requirs some permission
//if the users says Ok then it will return true otherwise false

function fun() {
  var userconfirmation = confirm("Are you sure want to proceed");

  if (userconfirmation == true) {
    window.open("https://www.youtube.com/"); //used to open any other site
  } else {
    document.write("Thans for cancelling"); //rewrites the whole content
  }
}
