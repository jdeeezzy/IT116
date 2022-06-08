console.log("Hello World");

var randomNumber = Math.random();

console.log(randomNumber);

// if conditions are met
// relational operators are used inside of conditonal statements
if (randomNumber < 0.5){
    console.log("Hello Justin");
    console.log(randomNumber);
}
if (randomNumber >= 0.5){
    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);
}

// else if statements are statements when conditions are not met
const nameOfCar = 'Mercedes';

if (nameOfCar === 'Honda') {

    console.log('I drive a Honda');

} else if (nameOfCar === 'BMW'){

    console.log('I drive a BMW');

} else if (nameOfCar === 'Mercedes'){

    console.log('I DRIVE A F***** MERCEDES');
}

///////////////////////////////////////////////////////
// < > operators 
const age = prompt("What's Your Age?")

if (age < 5) {
    console.log("You are not old enough to drive! Ask your mom to drive you!")
}else if (age < 10){
    console.log("Better ask your friends too!")
}else if ( age >= 16){
    console.log("YAY You can drive now! Go get your license!")
}

// ELSE - ALL Conditions in the logic have failed 
else {
    console.log("Last Resort If All Conditions Have Failed")
}

/////////////////////////////////////////

// Swtich Statements 
// each switch statement will have a case compared to 
// writing multiple else ifs
// displays whichever conditions are met
// loops keep going until conditions are met 
// once met, whatever code is in that condition will be executed
// everything else is there just in case the variable meets those other conditions
const expr = 'Watermelons';

switch (expr){

    case 'Oranges':
        console.log('Oranges are $1 pound');
        break; 
    case 'Mangoes':
        console.log('Hello Mango!');
        break;
    case 'Watermelons':
        console.log('Hello Watermelons!');
        break;
    default:
        console.log('Sorry We are out of your asked item');    

}

///////////////////////////////////////////

const password = prompt('Please Enter in a New Password');

if (password.length >= 8) {

    // this is a nested condition. within the main condition if the criteria is met 
    // strict operator ===
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password')
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {
    console.log("Password is Too Short")    
}

/////////////////////
//  Functions
// call the function in order to run

function singSong(){

    console.log('Say');
    console.log('My');
    console.log('Name');
}

singSong()

function greet(firstName) {
    // template literal
    // string literal 
    console.log(`Hey There, ${firstName}`)
}

greet('Hello Justin!')

function greet1(firstName,lastName){
    // referencing the string index
    // [0]. will prompt first initial of last name
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)

}

greet1('Mariah','Carey')

// once function is declared, call function for literals to run



//////////////////
