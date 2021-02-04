const express = require('express')
const app = express()

//Para poder pegar o dado do body que é enviado. 
const bodyParser = require('body-parser')


const porta = 4000;
const buscarCep = require('./src/functions/buscarCep')

//Permite a utilização do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Declarando a utilização do ejs 
app.set('view engine', 'ejs')
// Indica para o express onde está a pasta views
app.set('views', './src/views')


//Renderizando página princial
app.get('/', (req, res) => {
    res.render('index') //chamando o arquivo index da pasta views.
})


//Pegando os dados da view. O método POST é necessário. O req(require), res(response) vem do Node.
app.post('/envia-cep', async (req, res) => {
    const { uf, localidade, logradouro  } = req.body
    const resultado = await buscarCep(uf, localidade, logradouro)

    
    console.log(resultado)//aparecendo no console.
    res.render('resultado', {dado: resultado})
})


app.listen(porta, () => console.log(`Rodando na porta ${porta}`));