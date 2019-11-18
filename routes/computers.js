module.exports = (app, fetch) => {
    app.get('/computers', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f01620fccdd58e7a2a0e48d567d331f5/raw/86f227fe127a2ea5e28c7fc3728630cc9c2902b5/computers.json')
            .then(res => res.json())
            .then(data => {
                res.render('computers', {
                    data: data
                })
            })
            .catch(err => console.log(err))
    })
}