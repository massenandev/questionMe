const express = require("express")
const app = express()

//usar o ejs como view engine
app.set('view engine', 'ejs')

app.get('/', function(req,res){
  //render procura diretamente na pasta views
  res.render("index")
})

app.listen(8081, () => { console.log("app running") })