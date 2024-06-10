const buttonTap = document.getElementById("js_btn");
const someEvent = document.getElementById("info");

function clickEvent() {
  someEvent.hidden = !someEvent.hidden;
}

buttonTap.addEventListener("click", clickEvent);
