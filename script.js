let clickmebutton = document.querySelector(".clickme");
let openWindow = document.querySelector(".open");
let closebutton = document.querySelector(".close");
let overlay = document.querySelector(".overlay");

let openModal = function () {
  openWindow.classList.remove("clicktoclose");
  overlay.classList.remove("clicktoclose");
};

let closeModal = function () {
  openWindow.classList.add("clicktoclose");
  overlay.classList.add("clicktoclose");
};

clickmebutton.addEventListener("click", () => {
  console.log("clicked");
  openModal();
});

closebutton.addEventListener("click", () => {
  closeModal();
});

overlay.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    openModal();
  }
});
