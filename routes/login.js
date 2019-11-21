module.exports = (app, fetch) => {
  //when requesting /login, render the login
  //page with the message Login.
  app.get('/', (req, res) => {
    message = 'Login'
    res.render('login', {
      message: message,
    })
  })

  //when the user presses submit, compare the information
  //and if the information is correct, render the index (home) page.
  app.post('/', (req, res) => {

    const { username, password } = req.body
    let usernameStorage = localStorage.getItem('usernames')
    let passwordStorage = localStorage.getItem('passwords')

    if (username === usernameStorage && password === passwordStorage) {
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

