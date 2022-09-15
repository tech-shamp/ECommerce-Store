const express = require('express')
const path = require('path')

const _APP = express()
const _PATH = path.join(__dirname, 'public')
const _PORT = process.env.PORT || 999

const titles = {
  home: 'Home',
  notFound: 'Page Not Found',

  tag: ' - ECommerce Store'
}

_APP.set('view engine', 'ejs')
_APP.use(express.static(_PATH))

_APP.get('/', (req, res) => {
  res.render('index', {
    pageTitle: titles.home + titles.tag
  })
})

_APP.get('*', (req, res) => {
  res.status(404).render('404', {
    pageTitle: titles.notFound
  })
})

_APP.listen(_PORT, () => {
  console.log(`Server Listening on PORT ${_PORT}`)
})
