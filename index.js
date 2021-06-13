const express = require("express")
const app = express()

//usar o ejs como view engine
app.set('view engine', 'ejs')

app.get('/:name/:lang', function(req,res){
  //render procura diretamente na pasta views
  let name = req.params.name
  let lang = req.params.lang
  let showMsg = false
  res.render("index", {
    name,
    lang,
    company: "Co",
    subscribers: 8000,
    msg: showMsg
  })
})

app.listen(8081, () => { console.log("app running") })