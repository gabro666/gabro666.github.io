var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var formsubmitError = document.getElementById('submit-error')

function validateName() {
var name = document.getElementById('name').name;

if(name.length == 0){
    nameError.innerHTML = 'Nome è richiesto';
    return false;
}
nameError.innerHTML = 'valid';
return true;

}

function validateEmail() {
    var email = document.getElementById('email').name;

    if (email.length == 0) {
        emailError.innerHTML = 'email richiesta';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;

}

function validateMessage() {
    var message = document.getElementById('message').name;

    if (message.length == 0) {
        messageError.innerHTML = 'Messaggio è richiesto';
        return false;
    }
    messageError.innerHTML = 'valid';
    return true;

}



function sendMail() {

if(!validateName() || !validateEmail() || !validateMessage()){
submitError.style.display = 'block';
    submitError.innerHTML = 'Correggi errore per sottoscrivere';
    setTimeout(function(){submitError.style.display = 'none';}, 3000);
retrun false;


}

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_69tak5c";
    const templateID = "template_ei5gehw"; 

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Messaggio inviato con successo!!")

        })
        .catch(err => console.log(err));

}


//

const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Nome è richiesto')
    }


    if (email.value === '' || email.value == null) {
        messages.push('email è richiesto')
    }
    
    if (message.value === '' || message.value == null) {
        messages.push('messaggio è richiesto')
    }

    if (message.value.length <= 50) {
        messages.push('Messaggio deve essere di almeno 50 caratteri')
    }

    if (message.value.length >= 500) {
        messages.push('Messaggio deve essere al massimo 500 caratteri')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

//