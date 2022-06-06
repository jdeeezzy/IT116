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

// recommended to use single quotes
// created an array, and a for loop to iterate through array
const myFood = ['Sushi','Steak','Adobo','Lumpia','Fried Chicken'];
// producing the variable, and the variable index
for (let i = 0; i < myFood.length; i++){
    console.log(i, myFood[i]);
}


/////////////////////////////////////////////////

//////////// getElementsByTagName ///////////
// gives a list of items with the given tag name, in the order of which they appear in the tree
// the tag name we used below is  "li" list items
var li = document.getElementsByTagName('li');
// li is the name of the variable created
console.log(li);
// calling list item by line item
console.log(li[1]);
// calling by the index, change the element using document function 
li[1].textContent = "Ribeye";
// get element by tag name, access the index, and change element
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "hotpink";
li[1].style.color= "black";

for (var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'lightgrey';
    li[i].textContent = 'Changed Food';
}

/////////////////////////////////////////////////////



//////////// Query Selector ////////////////
// returns the FIRST element within the document that matches the specified selector or group of selectors

var header = document.querySelector('#main-header');
// created variable, using query selector, and being giving the ability to change the specified selector
// below we changed the header
header.style.borderBottom = 'solid 8px black';

// returns the FIRST element, the first input in our document is text. Changed the value in the text box
var input = document.querySelector('input');
input.value = "Give Justin Food / Drink Ideas";

// double quotes outside, single quote inside
// specifies the type through attribute
var submit = document.querySelector("input[type='submit']");
submit.value = 'Suggest';

var item = document.querySelector('.list-group-item');
item.style.color = 'goldenrod'

// calling the LAST item / last child is the last item in the particular list / tree
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'hotpink';

// querySelectorAll will prompt a node list with 'titles'
// created variable named titles
// given the ability to change all nodes with the class name title, in this case the H2
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Suggest Some Food'

// inquiring about the odd / even numbers in a list / tree
// matches every element 'n'th child of the parent
// n= number / keyword (odd,even) / formula (a+b)
// this will prompt all list item, the first item is the parent node. nth will start at the parent node 
// 1 = parent 2,3,4,5 etc = child nodes 
// odd will prompt all odd number list items 
 var odd = document.querySelectorAll('li:nth-child(odd)');
 var even = document.querySelectorAll('li:nth-child(even)');

//  for loop iterating through both created variables 
// manipulating odd / even list items for created variable of 'i'
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'red';
    even[i].style.backgroundColor = 'black';
    even[i].style.color = 'white';
    odd[i].style.color = 'white';
}


