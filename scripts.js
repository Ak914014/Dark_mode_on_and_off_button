var count = 0;
function darkmode() {
  if (count % 2 === 0) {
    boll.style.marginLeft = "128px";
    boll.style.transition = "all ease-in-out 0.5s";
    body.style.backgroundColor = "black";
    heading.style.color = "white";
  } else {
    boll.style.marginLeft = "0";
    boll.style.transition = "all ease-in-out 0.5s";
    body.style.backgroundColor = "white";
    heading.style.color = "black";
  }
  count++;
}
var heading = document.getElementById("heading");
var container = document.getElementById("container");
var boll = document.getElementById("boll");
var body = document.getElementById("body");
container.addEventListener("click", darkmode);
