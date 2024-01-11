var isToClear = document.getElementById("isToClear");
var isToAdd = document.getElementById("isToAdd");
var isToMultiply = document.getElementById("isToMultiply");
var isToSubtract = document.getElementById("isToSubtract");
var isToDivide = document.getElementById("isToDivide");
var isBackSpace = document.getElementById("isBackSpace");
var isToRemainder = document.getElementById("isToRemainder");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var point = document.getElementById("point");
var equal = document.getElementById("equal");
var leftBracket = document.getElementById("leftBracket");
var rightBracket = document.getElementById("rightBracket");
var symbol;
var str = "";

isToClear.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText = "";
});
isToAdd.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "+";
  symbol = "+";
});
isToSubtract.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "-";
  symbol = "-";
});
isToMultiply.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "*";
  symbol = "*";
});
isToDivide.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "/";
  symbol = "/";
});
isToRemainder.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "%";
  symbol = "%";
});
leftBracket.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "(";
  symbol = "(";
});
rightBracket.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += ")";
  symbol = ")";
});
one.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "1";
});
two.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "2";
});
three.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "3";
});
four.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "4";
});
five.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "5";
});
six.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "6";
});
seven.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "7";
});
eight.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "8";
});
nine.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "9";
});
zero.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += "0";
});
point.addEventListener("click", function run() {
  str = document.getElementById("displayBox").innerText += ".";
});
isBackSpace.addEventListener("click", function run() {
  var a = str.length;
  str = str.substring(0, a - 1);
  document.getElementById("displayBox").innerText = str;
});
equal.addEventListener("click", function run() {
  console.log(str, symbol);
  var result = eval(str);
  console.log(result);
  document.getElementById("displayBox").innerText = result;
});
