const express = require('express')
const app = express()
const port = 3000

const handlebars = require('express-handlebars')
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({ defaultLayout: 'layout' }))

app.get('/', (req, res) => {
  res.render(`index`)
})

app.listen(port, (req, res) => {
  console.log(`express is running on http://localhost:${port}`)
})