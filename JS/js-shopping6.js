// insert adjust element
function insertElement() {
    const filter = document.querySelector("filter");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1,textcontent = "h1 insert Adjacent Element";
    h2,textcontent = "h2 insert Adjacent Element";
    // paste h1 above the filter element - beforebegin
    filter.insertAdjacentElement("beforebegin", h1);
    // paste h1 after the filter element - afterend
    filter.insertAdjacentElement("afterend",h1);
}

insertElement();

// insert adjust text
function insertText() {
    const item = document.querySelector("li:first-child(1)");
    // insert text before the 'Apple' - after begin
    item.insertAdjacentText("afterbegin", "insert adjacent text");
    // insert text before the end of li, before the font - before end
    item.insertAdjacentText("beforeend", "insert Adjacent text");
}

insertText();
// c. insert adjust html
function inserthtml() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.insertAdjacentHTML("beforebegin", "<h2>insert adjacent html</h2>");
    clearBtn.insertAdjacentHTML("afterend", "<h2>insert adjacent html</h2>");
}

inserthtml();

// d. insertBefore(newItem, existing)
function insertBeforeItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insert before item";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

// e. custom made insertAfter() - Node
function insertAfter(newEl, existingEL) {
    existingEL.parentElement.insertBefore(newEl, existingEL.nextSibling);
}

const li = document.createElement("li");
li.textContent = "Insert Me after";
const firstItem = document.querySelector("li:nth-child(1)");
insertAfter(li, firstItem);

// replaceWith() - node function
function replacefirstItem() {
    const firstItem = Document.querySelector(li:firstchild);
const newElement = document.createElement("li");
newElement.textContent = "Replace First Item";
firstItem.replaceWith(newElement);
}
replacefirstItem();

// g. replaceChild() - node function
function replaceChildHeading() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");
    const h2 = "app-title";



}
replaceChildHeading();

// h. outerHTML - replace html component
function replaceAllItem() {
    const lis = document.querySelectorAll("li");
    lis.forEach((item, index) => {
        item.outerHTML = index === 1 ? "<li>SecondItem</li>" : "<li>Item</li>";
  });
}
replaceAllItem();

// i. remove() - node function
function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}

removeClearButton();
// j. removeChild() - node function
// a. template literal method
function removeItem(itemNumber) {
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    // string template literal
    const li = 
    ul.removeChild(li);

}

removeItem(2);
// b. node list index methos
function removeItem2(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];
    ul.removeChild(li);
}
removeItem2(2);
// c. node list direct remove element
function removeItem3(itemNumber) {
    return document.querySelectorAll("li")[itemNumber - 1].remove();
     // li[itemNumber - 1].remove();
}
removeItem3(1);


