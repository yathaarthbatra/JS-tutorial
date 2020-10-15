//to show the complete time and date
//we will use Date fn and localstring function
function dynamicTime() {
  var time = new Date();
  var showTime = time.toLocaleTimeString();
  var fetch = document.getElementById("clock");
  fetch.innerHTML = showTime;
}

var set = setInterval(() => {
  dynamicTime();
}, 1000);
