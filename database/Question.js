const Sequelize = require('sequelize')
const connection = require('./database')

//definir o model - define é pra definir o nome na tabela. dentro do obj, os campos
const Question = connection.define('questions', {
  title: {
    type: Sequelize.STRING, //texto curto
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT, //para textos
    allowNull: false
  }
})

//caso não exista, ele cria (sync). o force: false não força a criação da tabela caso ela ja exista
Question.sync({ force: false }).then(() => {})

module.exports = Question