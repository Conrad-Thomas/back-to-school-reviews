
$(document).ready(function() {
    //contact jquery code.
    let name = $('#contact-name').val();
    $('#contact-form').submit(function(event) {
        event.preventDefault()
        $('.contact').html(`<h1 id="page-header2">Thank you ${name}, we will get in touch soon!</h1>`)
    });

    //starts jquery code
    $(function() {
        var $rateYo = $(".rateYo").rateYo({
            "rating": 0.7
        });
        $rateYo.rateYo("option", "onChange", function() {
            $(this).next().text(rating);
        });
        $rateYo.rateYo("option", "multiColor", true);
    });


    //comment code
    $('#comment-form').submit(function(event) {
        let name = $('#comment-name').val();
        let comment = $('#comment-message').val();
        event.preventDefault()
        $('#comment-data').append(`<div class="each-comment">
                                     <p class="name">Name: ${name}</p> 
                                     <img src=""></img>
                                     <br>
                                     <p class="comment-text">Comment: ${comment}</p>
                                     <br>
                                     <p class="date">${document.lastModified}</p>
                                   </div>
                                   <br>`)
    })

})