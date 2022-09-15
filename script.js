const container = document.querySelector(".container")
const cards = document.querySelector(".cards")

let isPressedDown = false;

let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    console.log(e.offsetX);
});

window.addEventListener('mouseup', () => {
    isPressedDown = false;
})

container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
  });



