function FunctionToDecreaseValue() {
  var decrease = document.getElementById("number").innerText;
  decrease = --decrease;
  document.getElementById("number").innerText = decrease;
  if (decrease < 0) {
    document.getElementById("number").style.color = "red";
  }
   else if (decrease > 0) {
     document.getElementById("number").style.color = "green";
   } else {
     document.getElementById("number").style.color = "black";
   }
  //fetching the data
  //store the data ina a variable
  //we have to decrease the value
  //and then update the value in the same place
}

function FunctionForReset() {
  var reset = document.getElementById("number").innerText;
  if (reset != 0) {
    document.getElementById("number").innerText = 0;
    document.getElementById("number").style.color = "black";
  }
}

function FunctionToIncreaseValue() {
  var increase = document.getElementById("number").innerText;
  increase = ++increase;
  document.getElementById("number").innerText = increase;
 if (increase < 0) {
   document.getElementById("number").style.color = "red";
 } else if (increase > 0) {
   document.getElementById("number").style.color = "green";
 } else {
   document.getElementById("number").style.color = "black";
 }
  //fetching the data
  //store the data ina a variable
  //we have to decrease the value
  //and then update the value in the same place
}
