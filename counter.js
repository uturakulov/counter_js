var number = document.getElementById("number");
var count = 0;
const dcr = document.getElementById("decrease");
const rst = document.getElementById("reset");
const incr = document.getElementById("increase");

dcr.onclick = function () {
  count -= 1;
  number.innerHTML = count;
};
incr.onclick = function () {
  count += 1;
  number.innerHTML = count;
};
rst.onclick = function () {
  count = 0;
  number.innerHTML = count;
};
