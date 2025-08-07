// create element
const div = document.createElement("div");
// add a class to the element
div.className = "my-element";
// add id to the element
div.id = "my-element";
div.setAttribute("title", "my element");
// div class="my element" id="my element" title="my-element"></div>
const text = document.createTextNode("Hello World");
// append the text node to the element
div.appendChild(text);

// <div class="my-element" id="my element" title="my element">Hello World (child of div)</div>
document.querySelector("ul").appendChild(div);

// create items
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item}
   <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
    `;
  document,querySelector("ul"),appendChild(li);
}
createListItem("PineApple");
createListItem("Durian");

// create items method 2
function createNewItem(item) {
    //step 1 : create element
  const li = document.createElement("li");
    // step 2 : create Text Node
  li.appendChild(document.createTextNode(item));
   //  step 3 : create button
   const button = document.createElement("button");
   button.className = "remove-item btn-link text-red";
    // step 4 : create icon
  const icon = document.createElement("i");
  icon.className = "fa-solid" + mark;
    // step 5: append sub-items layer by layer
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector("ul").appendChild(li);
}

createNewItem("milk", "fa-xmark");
createNewItem("cheese", "fa-check");

