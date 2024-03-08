function checkEvenOdd() {
  const value = document.getElementById("input").value;
  if (value % 2 == 0) {
    document.getElementById("result").innerHTML = "Even";
  } else {
    document.getElementById("result").innerHTML = "Odd";
  }
}
