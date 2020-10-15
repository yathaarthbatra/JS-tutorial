//setTimeout function: It is used to call the function after a given
//time and is called only once

var a = setTimeout(message, 3000);
clearInterval(a);
//message is a function
//1000ms=1sec...so it executes after 3 sec

function message() {
  alert("How are you doing my boy?");
}

//now to clear this functionality or time lapse
//we use clearInterval

//SetInterval() and ClearInterval
//setInterval() calls the function after given time repeatdly until is cleared out
//by the clearInterval() method
