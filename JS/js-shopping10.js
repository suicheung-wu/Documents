// event bubbling
const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");
button.addEventListener("click", () => {
    alert("button was clicked");
    e.stopPropagation();
});

div.addEventListener("click", () => {
    alert("div was clicked");
});
form.addEventListener("click", () => {
    alert("form was clicked");
});

// window event - important
// print the content on the screen
window.addEventListener('load', () => console.log("page loaded"));
// build document tree
window.addEventListener("DOMContentLoaded", () => console.log("DOMload"));
console.log("run me");

// resize window
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
).innerText = `Resized to ${window. innerwidths} x ${window.innerHeight}`;
});

// scroll
window.addEventListener("scroll", () => {
    document.querySelector(
        "h1"
    ).innerText = `scrolled to ${window.scrollx} x ${window.scrolly}`;
    if (window.scrolly > 70) {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});

