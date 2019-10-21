const {
    readFile,
} = require('fs')

const {
    promisify
} = require("util")

const readFileAsync = promisify(readFile)

async function obterDadosArquivo(pathNameFile) {
    const arquivo = await readFileAsync(pathNameFile, 'utf8')
    return JSON.parse(arquivo)
}

module.exports = obterDadosArquivo