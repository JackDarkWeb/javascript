const formController = Dom.getId('formController');
formController.addEventListener('submit', function (event) {
    event.preventDefault();

    // alert(Dom.getValuesSelects('multiple'));
    const choice_1 = Dom.getId('inlineCheckbox1');

    if(choice_1.checked === true){
        //alert(choice_1.value);
    }
    Dom.getValuesCheckedBox(['inlineCheckbox1', 'inlineCheckbox2', 'inlineCheckbox3']).forEach(alert);
    alert(Dom.getValueCheckedRadio(['inlineRadio1', 'inlineRadio2']));
    Dom.getValuesSelectsMultiple('multiple').forEach(alert);

});