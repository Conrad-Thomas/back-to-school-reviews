module.exports = (app, fetch) => {
    app.get('/computers', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f01620fccdd58e7a2a0e48d567d331f5/raw/1646cf2137019205b6fde092fe917431cda6ad07/data.json')
            .then(res => res.json())
            .then(data => {
                res.render('computers', {
                    data: data,
                })
            })
            .catch(err => console.log(err))
    })
}