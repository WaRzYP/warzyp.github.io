"use strict";

const circle = document.querySelector('.circle');
const link = document.querySelector('.link');
const form = document.querySelector('.forme')

window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);
link.addEventListener('mouseenter', linkEnterHandler);
link.addEventListener('mouseleave', linkLeaveHandler);
form.addEventListener('mouseenter', linkEnterHandler);
form.addEventListener('mouseleave', linkLeaveHandler);

function mouseMoveHandler(e) {
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  circle.style.opacity = 1;
  circle.style.backgroundColor = "black";
  circle.style.borderColor = 'grey';

}

function mouseUpHandler(e) {
  circle.style.transform = "scale(1)";

  if (e.target.classList.contains('link')) {
    circle.style.transform = 'scale(2)';
    circle.style.opacity = 1;
  }
}

function mouseDownHandler() {
  circle.style.transform = "scale(1.5)";
}

function linkEnterHandler() {
  circle.style.transform = "scale(1.5)";
  circle.style.borderColor = 'black';
  circle.style.backgroundColor = "black";
}

function linkLeaveHandler() {
  circle.style.transform = "scale(1)";
  circle.style.borderColor = 'black';
  circle.style.backgroundColor = "black";
}



// Nav

var nav = document.getElementById("nav")

window.onscroll = function () { functionscroll() }

function functionscroll() {

  if (window.pageYOffset > 80) {
      nav.style.backgroundColor = "white"
    } else {
        nav.style.backgroundColor = "transparent"
  }
}
