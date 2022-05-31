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

var items = document.getElementsByClassName ('list-group');
// looking for items in the specified "class name"
console.log(items);
console.log(items[1]);