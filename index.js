const express = require("express")
const app = express()
const connection = require('./database/database')
const Question = require('./database/question')
//chamar a conexão
connection
  .authenticate()
  .then(() => {
    console.log('success')
  })
    .catch((errorMsg) => {
      console.log(errorMsg)
  })

//permite com que envie os dados do form e o express traduz numa estrutura q consiga usar no back
//decodifica os dados enviados pelo form, em outras palavras
app.use(express.urlencoded({ extended: true }))
//permite com que leia os dados de form via json
app.use(express.json())

//usar o ejs como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res) => {
  //equivalent ao select * from questions;
  //raw: so trazer os dados e nada mais
  Question.findAll({ raw: true, order: [
    ['id', 'DESC']
  ]}).then(questions => {
    res.render('index', {
      questions
    })
  })
})

app.get('/ask', (req, res) => {
  res.render('ask')
})

app.post('/save', (req, res) => {
  const title = req.body.title
  const description = req.body.description
  //salva através do create (como se fosse o insert)
  Question.create({
    title,
    description
  }).then(() => {
    res.redirect('/')
  })
})

app.get('/question/:id', (req, res) => {
  let id = req.params.id
  Question.findOne({
    where: { id: id }
  }).then(question => {
    if(question != undefined){
      res.render('question', {
        //pra usar a variavel question na view
        question
      })
    }else {
      res.redirect('/')
    }
  })
})

app.listen(8081, () => { console.log("app running") })