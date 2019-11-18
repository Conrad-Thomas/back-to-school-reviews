module.exports = (app, fetch) => {
    app.get('/accessories', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f7fdff970f491bc61c0407f574534b6b/raw/f939f1c5ee6a3d28846ff0365aba501215a782e6/accessories.json')
            .then(res => res.json())
            .then(data => {
                res.render('accessories', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}