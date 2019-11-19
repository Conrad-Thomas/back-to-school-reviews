

//method that sends an alert with a message and grabs 
//the value of the name.

$( document ).ready(function() {
    let name = document.getElementById('contact-name')
    $( '#contact-form' ).submit(function( event ) {
        event.preventDefault()
        $( '.contact' ).html(`<h1 id="page-header2">Thank you ${name.value}, we will get in touch soon!</h1>`)
    });
})