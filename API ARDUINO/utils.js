const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify
} = require("util")


const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

async function obterDadosArquivo(pathNameFile) {
    const arquivo = await readFileAsync(pathNameFile, 'utf8')
    const json = JSON.parse(arquivo)
   
    console.log(json.volume)
    var date =Date(Date.now())
    let newJsonFluxo = { 
        valor: 78,
        data: date,
        vazao: json.vazao ,
        volume: json.volume 
    };
    
    let data = JSON.stringify(newJsonFluxo);

    return JSON.parse(data)
}

module.exports = obterDadosArquivo
//https://stackabuse.com/reading-and-writing-json-files-with-node-js/