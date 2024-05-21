const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline1 = document.querySelector("[data-cursor-outline1]");
const cursorOutline2 = document.querySelector("[data-cursor-outline2]");
const cursorOutline3 = document.querySelector("[data-cursor-outline3]");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorOutline1.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 100, fill: "forwards"});

  cursorOutline2.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 300, fill: "forwards"});

  cursorOutline3.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});

});