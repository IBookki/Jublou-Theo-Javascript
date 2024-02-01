const themeButton = document.getElementById("theme", onClick());

function onClick() {
    document.body.classList.toggle("dark")
}

let form = document.querySelector( 'form' )
form.addEventListener( 'submit', function(event) {
    event.preventDefault( );
    console.log('Envoi du form detecté !')
})

themeButton.addEventListener("click", onClick);

form.addEventListener( 'submit', function(event) {
    event.preventDefault( );
    
    let email = document.querySelector('#email')
    
    if(email.value == '') {
        console.log("invalide")
    } else {
        console.log('valide' )
    }
})

if(email.value == '') {
    console.log( "invalide")
} else {
    email.classList.add('success' )
} 


// Section d'erreur
let errorContainer = document.querySelector('.message-error' )
let errorList = document.querySelector('.message-error ul')
// Je vide les erreurs avant la nouvelle verification et recache le message
errorList. innerHTML = ""
errorContainer.classList.remove( 'visible')

// Elements du formulaire
let email = document.querySelector('#email')

// Verif email
if(email.value == '') {
    errorContainer.classList.add( 'visible')
    email. classList.remove( 'success' )
    let err = document.createElement('li')
    err. innerText = "Le champ email ne peut pas être vide"
    errorList.appendChild(err)
} else {
    email.classList.add( 'success' )
}
