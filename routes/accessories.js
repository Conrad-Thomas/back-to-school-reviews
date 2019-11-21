module.exports = (app, fetch) => {
    //when requesting /accessories, grab the accessories array
    //parse the json and render the site. 
    app.get('/accessories', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f7fdff970f491bc61c0407f574534b6b/raw/f939f1c5ee6a3d28846ff0365aba501215a782e6/accessories.json')
            .then(res => res.json())
            .then(data => {

                //if the user types /accessories?count=1
                //it will set the count to only show 1 item.
                let count = req.query.count
                if (count == null || count <= 0) {
                    count = data.length;
                }
                console.log(count)
                res.render('accessories', {
                    count: count,
                    data: data
                })
            })
            .catch(err => console.log(err))
    })
}