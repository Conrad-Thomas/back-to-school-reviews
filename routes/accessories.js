module.exports = (app, fetch) => {
    app.get('/accessories', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f7fdff970f491bc61c0407f574534b6b/raw/3d2616bbe73df2f2b79643e03714660d285c0779/accessories.json')
            .then(res => res.json())
            .then(data => {
                res.render('accessories', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}