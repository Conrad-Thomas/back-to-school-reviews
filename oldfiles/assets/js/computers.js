const items = document.getElementById('items')

// Load the items as well as the star rating for the computers page
const loadItems = () => {
    //fetches the computers.json file, where all the computer
    //information is stored.
    fetch('computers.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(p => {
                const { image, name, position, price, buy } = p
                items.innerHTML = items.innerHTML + `<div class="item">
                                                        <img id="computer-pic" src="${image}">
                                                        <div class="info"> 
                                                            <p id="name">${name}</p>
                                                            <p id="position">${position}</p>
                                                            <p id="price">Price: $${price}</p>
                                                            <p id="buy"><a href="${buy}" target="_blank">Click here to buy or view information!</a></p>
                                                         </div>
                                                         <form id="rating-form">
                                                         <div class="rating-star">
                                                             <input type="radio" name="rating" value="5"><span class="star"></span>
                                                             <input type="radio" name="rating" value="4"><span class="star"></span>
                                                             <input type="radio" name="rating" value="3"><span class="star"></span>
                                                             <input type="radio" name="rating" value="2"><span class="star"></span>
                                                             <input type="radio" name="rating" value="1"><span class="star"></span>
                                                         </div>
                                                         </form>
                                                      </div>
                                                      </br>`
            })
        })
        .catch(err => console.log(err))
}

//when the dom content has loaded, load the items.
document.addEventListener('DOMContentLoaded', loadItems)