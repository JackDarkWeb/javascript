//TRANSFORMER UNE CHAINE EN UN TABLEAU NORMAL
/*
let string  = "Je suis un hero et un vainqueur";
let tabString = Array.from(string);
tabString.forEach(value => {
    alert(value);
});

//alert(name);


/*
// let number = Number(prompt('Enter your number :'));

for(let i = 0; i <= 4; i++){
    alert(i + ' ==> A' );
}

const log  = 'Uriel';
//let name = String(prompt("Enter your name "));
while(true){
    let name = String(prompt("Enter your name "));
    if(name === log){
        alert('name');
        break;
    }
}
 /*
let products = [];
// alert(typeof(products));

let prices = 0;
//const prod = prompt('Enter name for your product ');
while (true){
    const prod = prompt('Enter name for your product ');
    const price = prompt('Enter the price for your product ');
    products.push(prod + '  ------>  ' +price);
    prices += price;
    let cont = prompt('Want continuous ?');

    if(cont === 'yes' || cont === 'y'){
        continue;
    }else{
        break;
    }
}
products.forEach(alert);
alert("Total est " + Number(prices));

let login = 'jack';
const log = prompt("Enter your login ");
while(log !== login){
    const log = prompt("Enter your login ");
    if(log === login){
        alert("You are connected !");
        break;
    }
}
*/
/*
while(isNaN(number)){

    let number = Number(prompt('Enter your number :'));
    if(number > 0){
        alert(number + ' est positif');
    }else{
        alert(number + ' est negatif');
    }
}
/*
let number = Number(prompt('Enter your number :'));
if(number > 0){
    alert(number + ' est positif');
}else{
    alert(number + ' est negatif');
}



/*const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // "36.9 37.6 37.1"


const name = String(prompt("Enter your name : "));
// const age = Number(prompt("Enter your old : "));
const age = parseInt(prompt("Enter your old : "));
alert('Hello ' + name + ' your old is ' + age);



const country = "France";
alert(`Je vis en ${country}`); // "Je vis en France"

const x = 3;
const y = 7;
alert(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"

let a = 0;
a += 3;
a++;


alert(a);



//Les fonctions anonymes

const Hello = function (name) {
    const message = `Hello ${name}`;
    return message;
}

// Autrement

const HelloTo = (name) =>{
    const message = `Hello ${name} encore`;
    return message;
}

alert(Hello("Jack"));
alert(HelloTo("Jack"));
*/

//LES OBJECTS

// Declaration object
const stylo = function (type, color,  marque) {
    this.Type = type;
    this.Color = color;
    this.Marque = marque;
};

stylo1 = new stylo('Bille', 'red', 'Bic');
stylo2 = new stylo('Bille', 'Blue', 'Bic');
let tab = [];
tab.push(stylo1, stylo2);

tab.forEach(object => {

    for(value in object){
        alert(object.value);
        // alert(value.color);
        // alert(value.marque);
    }
});



/*
//Access to the property object
stylo.color = 'blue';
stylo.price = 2;
alert(stylo.color);
alert(`Le prix du ${stylo.marque} est ${stylo.price} euro`)
*/

class Person{
    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.address = address;
    }
    static description(){
        let message = ``;

        return message;
    }
}