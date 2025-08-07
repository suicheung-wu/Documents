// event object's properties
const logo = document.querySelector("img");
logo.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.currentTarget);
});

// target - the element that triggered the event
// currentTarget - the element that is currently handling the event
// type - event type
// timeStamp - timestamp of the event tiggered
// clientX - x position of the mouse click relative to window
// clientY - y position of the mouse click relative to window
// offsetX - x position of the mouse click relative to element
// offsetY - y position of the mouse click relative to element
// pageX - x position of the mouse click relative to page
// pageY - y position of the mouse click relative to page
// screenX - x position of the mouse click relative to screen
// screenY - y position of the mouse click relative to screen

// 
document.querySelector('a').addEventListener("click", function (e) {
    e.preventDefault();
    console.log("a link was clicked");
});

function onDrag(e) {
    document.querySelector("h1").textContent = `X: ${e.clientX} Y: ${e.clientY}`;
}

logo.addEventListener("drag", onDrag);

// ==========================================
// keyboard events
const iteminput = document.getElementById("item-input");

const onkeypress = (e) => console.log("keypress");
iteminput.addEventListener("keypress", onkeypress);
// key up
const onkeyup = (e) => console.log("key up");
iteminput.addEventListener("keyup", onkeyup);

// key down
const onkeydown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        console.log("enter was pressed");
    }
    if (e.code === "Digit1") {
        console.log("you press 1");
    }
    if (e.repeat) {
        console.log("you are holding down" + e.key);
    }
    console.log("Shift:" + e.shiftkey);
    console.log("Control:" + e.ctrlkey);
    console.log("Alt:" + e.altkey);
    if (e.shiftkey && e.key === "K") {
        console.log("you pressed shift and k");
    }
}
iteminput.addEventListener("keydown", onkeydown);

// =============================================
// input events
const iteminput2 = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.querySelector("checkbox");
const heading = document.querySelector("h1")

function onInput(e) {
    heading.textContent = e.target.value;
}

iteminput2.addEventListener("input", onInput);


// checkbox
function onChecked(e) {
    const isChecked = e.target.checked;
    console.log(isChecked);
    heading.textContent = isChecked ? "checked" : "not checked"
}
checkbox.addEventListener("Input", onChecked);

// select the input field
function onChecked() {
    console.log{"Input is focused"};
    iteminput2.style.outlineStyle = "solid";
    iteminput2.style.outlineColor = "red";
    iteminput2.style.outlineWidth = "2px";
}
iteminput2.addEventListener("focus", onfocus);
// unselect the iput field
function onBlur() {
    console.log{"Input is not focused"};
    iteminput2.style.outlineStyle = "none";
}
iteminput2.addEventListener("blur", onBlur);
// react style onChange
priorityInput.addEventListener("change", onInput);

// ===============================================
// form submit
// method 1 : add event listener
const form = document.getElementById("item-form");
function onSubmit(e) {
    e.preventDefault();
    console.log("Form was submitted");
    const item = document.getElementById("priority-input").value;
    const priority = document.getElementById("priority-input").value;
    if (item === ** || priority === "0") {
        alert("please enter an item and priority");
        return;
    }
    console.log (item, priority);
}

form.addEventListener("submit", onSubmit);

// method 2 : formData object
function onSubmit2(e) {
    e.preventDefault();
    const formData = new formData(form);
    const item = FormData.get("item");
    const priority = FormData,get("priority");
    console.log(item, priority);
    const entries = formData.entries();
    console.log(entries);
    for (const entry of entries) {
        console.log(entry[0]);
    }
}
form.addEventListener("submit", onSubmit2);
