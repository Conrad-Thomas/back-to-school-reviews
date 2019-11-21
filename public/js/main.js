//The document ready event signals that the 
//DOM of the page is now ready
$(document).ready(function() {

    //when the contact form has been submited
    //set .contacts html a response.
    let name = $('#contact-name').val();
    $('#contact-form').submit(function(event) {
        event.preventDefault()
        $('.contact').html(`<h1 id="page-header2">Thank you ${name}, we will get in touch soon!</h1>`)
    });

    //stars jquery code
    $(function() {
        var $rateYo = $(".rateYo").rateYo({
            "rating": 0.7
        });
        $rateYo.rateYo("option", "onChange", function() {
            $(this).next().text(rating);
        });
        $rateYo.rateYo("option", "multiColor", true);
    });


    //when the comment form has been submited
    //append a new comment onto the #comment-data div.
    $('#comment-form').submit(function(event) {
        let name = $('#comment-name').val();
        let comment = $('#comment-message').val();
        event.preventDefault()
        $('#comment-data').append(`<div class="each-comment">
                                     
                                     <p class="name"> <img id="comment-avatar" src="img/avatar.png"> ${name}</p> 
                                     <p class="comment-text">Comment:</br> ${comment}</p>
                                     <br>
                                     <p class="date">${document.lastModified}</p>
                                   </div>
                                   <br>`)
    })

})