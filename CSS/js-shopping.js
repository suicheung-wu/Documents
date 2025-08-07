// document property
let output;
// a. document.all - HTMLAllCollection, different with HTMLCollection
output = document.all;
//console.log(output);
//
// b. document.documentElement - html tags in Text Form
output = document.documentElement;
console.log(output);
// c. document.head - head tags in Text form
output = document.head;

// d. HTMLCollectuib of head tag direct child
output = document.head.children;
//e. document other properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;
console.log(output);

// f. document.forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].action;
output = document.forms[0].method;
document,forms[0].id = "my-form";
output = document.forms[0].id;

// g.document.links
output = document.links;
output = document.links[0];
output = document.links[0].href = "https://www.goole.com";
output = document.links[0].id = "google";
output = document.links[0].className = "google";
output = document.links[0].classList;
console.log(output);

// h. document.images
output = document.images[0].src;
console.log(output);

// i. convert HTMLCollection to array
// outputs = document.forms;
// output.forEach((form) => console.log(output));

const forms = Array,from(document.forms);
forms,forEach((form) => {
  console.log(form);
  console.log(typeof form);
});

// =======================================
// select elements
// a. selector by className
const listItems = document.querySelectorAll(".item");
// select all the text content of li
console.log(listItems[1].innertext);
// return the html of li
console.log(listItems[1].innerHTML);
// apply css style into nodelist item
listItems[1].style.color = "red";
// normal array high order function applied
// queryselector update css is ok
listItems.forEach((listItem,index) => {
  listItem.style.color = "red";
  listItem.style.fontsize = "40px";
  listItem.style.fontweight  = "bold";
  listItem.style.textDecoration = "underline";
  listItem.style.textDecorationColor = "green";
  if (index = 1) {
    listItem.remove();
  }
    // can't simply modify the nodelist html structure
    // nodelist includes textnode and other Node structure
  if (index = 0) {
    listItem.innerHTML = `Milk
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});
// ======================================================
// b. select by element class name - return HTMLCollection
// print the 3rd item innerText
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2[2].InnerText);
//convert HTMLCollection to Array first, loop all items
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((listItem, index) => {
  console.log(listItem.InnerText);
})

// ======================================================
// c. select by element tag name
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);

// ======================================================
// d. select by id
const listItem4 = document.getElementById("my-form");
console.log(listItem4);

