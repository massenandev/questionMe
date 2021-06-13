const express = require("express")
const app = express()

//permite com que envie os dados do form e o express traduz numa estrutura q consiga usar no back
//decodifica os dados enviados pelo form, em outras palavras
app.use(express.urlencoded({ extended: true }))
//permite com que leia os dados de form via json
app.use(express.json())

//usar o ejs como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res) => {
  res.render('index')
})

app.get('/ask', (req, res) => {
  res.render('ask')
})

app.post('/save', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  res.send('Form accepted. Title: ' + title + '. ' + 'Description: ' + description)
})

app.listen(8081, () => { console.log("app running") })