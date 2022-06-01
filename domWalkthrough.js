// access the dom with console.dir/////

console.dir(document);

// document.domain will show the IP Address
console.log(document.domain);

// document.url will show the location of the file 
console.log(document.URL);

// document.title will call title from the tree
console.log(document.title)

// document.doctype will show you the type of document
console.log(document.doctype);

// document.head will show all items in the head
console.log(document.head);

// document.body shows elements of the body
console.log(document.body);

// document.all shows everything that is on page EVERYTHING 
// breaks down the whole tree structure
console.log(document.all);

// document.all[number] will access a particular tree element
// calling a particular index
console.log(document.all[10]);

// finding attribute 10, and changed the element
// JS manipulation
// textContent node change the textual content of a header or <p> text
document.all[10].textContent = "Justin is very HUNGRY!!";

// used to find how many particular elements there are in a tree. is this case forms links images
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// ///////////////////////////////////////////////////////////////

///////////access the dom with getElementById //////////////

// obatining the header tag by header ID, scans the tree and finds the properties 
console.log(document.getElementById("title"));

// Creationg of an object variable, using the document function
let headerTitle = document.getElementById("title")

// calling object and changing it
// changing objects with sub functions
// Object oriented programming
headerTitle.textContent = "Justin is honestly really hungry!"
// headerTitle.innertext = "text" <------ the same thing as headerTitle.textContext

headerTitle.style.color = "white"

//////////////////// getElementById ///////////////////

//////////////getElementByClassName ///////////
// will return elements which are descendants of the specified root element with the given class name
// returns an array-like object of all child elements of the given class

var items = document.getElementsByClassName ('list-group-item');
// looking for items in the specified "class name", passing object to argument parameter
console.log(items);
console.log(items[1]);
// styling property attributes through variable
items[1].textContent = 'Salmon Nigiri';
items[1].style.backgroundColor = 'pink';
items[1].style.fontWeight = 'bold';
items[1].style.color = 'red';

items[0].textContent = 'Jasmine Rice';
items[0].style.backgroundColor = 'black';
items[0].style.fontWeight = 'bold';
items[0].style.color = 'white';

items[2].textContent = 'Medium-Rare Fatty Ribeye';
items[2].style.backgroundColor = 'red';
items[2].style.fontWeight = 'bold';
items[2].style.color = 'black';

/////////////// getElementsByClassName //////////////////

//////////////////// For Loop ///////////////
// for every item in the particular index list, the item will do something
// two-parts: header specifying the iteration / body which is executed once per iteration
// header has a loop counter / variable, allows the body to know which iteration is being executed
// variable > length > increment

// this is a counter, that loops until 10
// starts at index 1, arrays start at 0
for (let i = 1; i <=10; i++) {

    console.log(i);

} 

// 0 > 2 > 4 > 6
// counting to 20 by 2, using i +=2 "i = "number" determines starting point"
for (let i = 0; i <=20; i +=2) {
    console.log(i)
}

// descending order, decrement 100 > 98 > 96
for (let i = 100; i >= 0; i -=2){
    console.log(i)
}

// incrementing through the for loop in the header
// calling object variable and changing items if length is met
for (var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'black';
    items[i].textContent = 'Anything Works';
    items[i].style.color = 'white';
}