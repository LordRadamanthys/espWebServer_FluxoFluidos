const obterDadosArquivo = require('../utils')

module.exports = {
    async fluxo(req, res) {
        var objectJason = await obterDadosArquivo('../espWebServer/data/config.json');
        // console.log(objectJason)
        
        return res.send(objectJason)
    }
}


