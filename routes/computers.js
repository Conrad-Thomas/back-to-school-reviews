module.exports = (app, fetch) => {
    //when requesting /computers, grab the accessories array
    //parse the json and render the site. 
    app.get('/computers', (req, res) => {
        fetch('https://gist.githubusercontent.com/Conrad-Thomas/f01620fccdd58e7a2a0e48d567d331f5/raw/86f227fe127a2ea5e28c7fc3728630cc9c2902b5/computers.json')
            .then(res => res.json())
            .then(data => {

                //if the user types /computers?count=1
                //it will set the count to only show 1 item.
                let count = req.query.count
                if (count == null || count <= 0) {
                    count = data.length;
                }
                console.log(count)
                res.render('computers', {
                    count: count,
                    data: data
                })
            })
            .catch(err => console.log(err))
    })
}