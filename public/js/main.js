//contact jquery code.
$( document ).ready(function() {
    let name = document.getElementById('contact-name')
    $( '#contact-form' ).submit(function( event ) {
        event.preventDefault()
        $( '.contact' ).html(`<h1 id="page-header2">Thank you ${name.value}, we will get in touch soon!</h1>`)
    });
})


//starts jquery code
$(function () {
 
    var $rateYo = $(".rateYo").rateYo({"rating": 0.7});
   
    /* set the option `onChange` */
    $rateYo.rateYo("option", "onChange", function () {
        $(this).next().text(rating);
    });
   
    /* set the option `multiColor` to show Multi Color Rating */
    $rateYo.rateYo("option", "multiColor", true);
  });


  const commentForm = document.getElementById('#comment-form')
const commentOutput = document.getElementById('comment-data')


//creates a new comment, outputs data into a div.
const newComment = (e) => {
  e.preventDefault()
  const name = document.getElementById('comment-name').value
  const comment = document.getElementById('comment-message').value
  const date = document.lastModified;
  commentOutput.innerHTML = `<div class="each-comment">
                                    <p class="name">Name: ${name}</p> 
                                    <br>
                                    <p class="comment-text">Comment: ${comment}</p>
                                    <br>
                                    <p class="date">${date}</p>
                              </div>
                              <br>` + commentOutput.innerHTML
}

//when the comment button is pressed, add the newComment.
commentForm.addEventListener('submit', newComment)