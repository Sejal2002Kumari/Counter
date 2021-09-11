function FunctionToSetValue(btn) {
  var num = 0;

  if (btn.innerText == "DECREASE") {
    num = Number(document.getElementById("number").innerText);
    num= num-1;
    document.getElementById("number").innerText = num;
  } else if (btn.innerText == "RESET") {
    num = Number(document.getElementById("number").innerText);
    // if (num != 0) {
      document.getElementById("number").innerText = 0;
      num = 0;
    // }
  } else {
    num = Number(document.getElementById("number").innerText);
    num = num+1;
    document.getElementById("number").innerText = num;
  }
  ChangeColor(num);
}
function ChangeColor(number) {
    
  if (number < 0) {
    document.getElementById("number").style.color = "red";
  } else if (number == 0) {
    document.getElementById("number").style.color = "black";
  }
  if (number > 0) {
    document.getElementById("number").style.color = "green";
  }
}
