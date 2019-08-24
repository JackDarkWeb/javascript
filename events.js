const parent = Dom.getId('text_add');
Dom.create('input', parent);

/*const el = Dom.getTag('text_add input');
el[0].style.borderColor = 'red';
el[0].addEventListener('change', function (event) {
    alert(event.target.value);
});*/
//el.innerHTML = "Enter your username";

const input = Dom.getId('events');
const select = Dom.getId('choice');
input.style.borderColor = 'red';
select.addEventListener('change', function (event) {
    alert(event.target.value);
});
function isValid(value) {
    return /^[a-zA-Z]+$/.test(value);
}
const tester = isValid('jacK');
//alert(tester);

const form = Dom.getId('form');
form.addEventListener('submit', function (event) {
    //event.preventDefault();
   return false;
});

//alert(Validator.isValidName('username'));
// TRAITEMENT DE FORM

const formController = Dom.getId('formController');
formController.addEventListener('submit', function (event) {
    event.preventDefault();
   alert(Validator.isValidName('username'));

});
