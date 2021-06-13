const express = require("express")
const app = express()

//usar o ejs como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req,res){
  res.render('index')
})

app.get('/ask', (req, res) => {
  res.render('ask')
})

app.listen(8081, () => { console.log("app running") })