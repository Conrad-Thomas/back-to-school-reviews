let contactForm = document.getElementById('contact-form')
let name = document.getElementById('contact-name')
let output = document.getElementById('get-in-touch')
let replace = document.querySelector('.contact')

//method that sends an alert with a message and grabs 
//the value of the name.

$( "#contact-form" ).submit(function( event ) {
    replace.innerHTML = `<h1 id="page-header2">Thanks for your message ${name.value}.</h1>`
    event.preventDefault();
});