module.exports = (app, fetch) => { 
    app.get('/', (req, res) => {

        message = 'Login'

        res.render('login', {
          message: message,
        })
       })

    app.post('/', (req, res) => {
      
      const {username, password} = req.body
      let usernameStorage = localStorage.getItem('usernames')
      let passwordStorage = localStorage.getItem('passwords')

      if (username === usernameStorage && password === passwordStorage){
        res.render('index')
      }
      else {
        
        message = "Incorrect username and password."

        res.render('login', {
          message: message
        })
      }
     })
  }

 