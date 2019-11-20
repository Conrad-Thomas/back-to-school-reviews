module.exports = (app, fetch) => { 
    app.get('/', (req, res) => {
        res.render('login')
       })

    app.post('/', (req, res) => {

      const {username, password} = req.body
      let usernameStorage = localStorage.getItem('usernames')
      let passwordStorage = localStorage.getItem('passwords')
    //   console.log(req.body)
      if (username === usernameStorage && password === passwordStorage){
        res.render('index')
      }
      else{
        res.redirect('/')
      }
     })
  }

 