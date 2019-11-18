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

