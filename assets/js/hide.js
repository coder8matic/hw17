function makeResponse(message, placeholder) {
    console.log(message);
    let dom = document;
    dom.getElementById("message").innerHTML=message;
    dom.getElementById("message").classList.remove("d-none");
    dom.getElementById("input-message").placeholder=placeholder;
    dom.getElementById("input-message").value=null;
}

function hideOrShowElement(elementId) {
    let dom = document;
    let element = dom.getElementById(elementId);
    let classes = element.classList.value;

    if (classes.includes('d-none') == true) {
        element.classList.remove('d-none');
    } else {
        element.classList.add('d-none');
    }
}

let submitButton = document.getElementById('submit-message');

submitButton.addEventListener('click', function (event){
    let myMessage = document.getElementById('input-message').value;
    let myMessagePlaceholder = `Insert a new message`;
    makeResponse(myMessage, myMessagePlaceholder);
});


let hideOrShowButton = document.getElementById('hide-or-show-message');

hideOrShowButton.addEventListener('click', function (event){
    hideOrShowElement('message');
});
