// HTML Collection
let output;
// a. get child from parent
const parent = document.querySelector(".container");
console.log(parent);
// b. get children from parent - return html collection
output = parent.children;
// c. get forth child from parent
output = parent.children[3];
output.innerText;
console.log(output.innerText);
console.log(output.classmate);
console.log(output,nodeName);
// update children property
output.innerText = "new text";
output.style.color = "red";

// d. from child to get parent
parent1 = output.parentElement;
console.log(parent1);

// e. get first child from parent
firstchild = parent1.firstElementchild;
console.log(firstchild);

// f. get last child from parent
lastchild = parent1.lastElementChild
console,log(lastchild);

// g. get next sibling from child
secondChild = firstChild.nextElementSibling;
console.log(secondChild);

// h. get previous sibling from child
forthChild = lastchild.previousElementSibling;
console.log("forthChild" + forthChild);

// nodelist
const lastFormChild = document.querySelector("#item-form:nth-child(1)");
console.log(lastFormChild);


