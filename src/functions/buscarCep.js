const fetch = require('node-fetch')

module.exports = async function buscarCep(uf, localidade, logradouro) {
    const response = await fetch(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`)
    const json = await response.json()

    return json

   
}

