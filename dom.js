


let getForms = () =>{

    let getId = document.getElementById('first_name');
    let getClass = document.getElementsByClassName('last_name')[0];

    const first_name = getId.value;
    const last_name = getClass.value;

    alert(`${first_name} et  ${last_name} `);
};

const contents = document.getElementsByClassName('content');
//alert(Dom.getClassCount('content'));
for(const content of contents){
    //alert(content);
}

const tag = document.getElementsByTagName('p:first');
//alert(tag);

/*
querySelector()  ne renvoie pas une liste des résultats, mais le premier élément qui correspond à la recherche.
 */
const query = document.querySelector('p > a');
//alert(query);

// MODIFIER UN DOM ###############

    // Property innerHTML
let elt = document.getElementById('innerHTML');
elt.innerHTML = "<ul><li>Item 1</li><li>Item 2</li></ul>";

// Property textContent
let elmt = document.getElementById('textContent');
elmt.textContent = "<ul><li>Item 3</li><li>Item 4</li></ul>";



// MODIFIER LES CLASSES DUN ELEMENT

const classLists = () => {

    let getClass = document.getElementsByClassName('alert');

    getClass[0].classList.remove('alert-success');
    getClass[0].classList.add('alert-danger');

    getClass[1].classList.remove('alert-info');
    getClass[1].classList.add('alert-warning');
};

let element = document.getElementById('btn-success');
let div = document.getElementById('col');
element.style.backgroundColor = 'red';

// MODIFIER LES ATTRIBUTES

const img = () => {
    let atr = document.getElementsByTagName('img');
    atr[0].setAttribute('src', 'javascript.png');
};


const ShowHidePassword = () =>{

    let badges = document.getElementsByClassName('badge');
    let getId = document.getElementById('password');
    const attr = getId.getAttribute('type');

   if(attr === 'password'){

       getId.setAttribute('type', 'text');
       badges[0].classList.add('d-none');
       badges[1].classList.remove('d-none');

   }else{
       getId.setAttribute('type', 'password');
       badges[0].classList.remove('d-none');
       badges[1].classList.add('d-none');
   }

};

//AJOUT D UN ELEMENT CREER

const newElt = document.createElement("input");
elmt.appendChild(newElt);

const addInput = (string) => {

    let parent = Dom.getId('add');
    let value = string.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g, "");

    Dom.getId('user').value = value;

    const children = parent.children;

    if(value.length === 8){
        Dom.create('input', parent);
        children[0].nextElementSibling.innerHTML = '';
    }else{
        children[0].nextElementSibling.innerHTML = 'Error';
        parent.removeChild(children[2]);
    }
};


