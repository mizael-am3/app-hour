function calc() {
    var resultado = document.querySelector('#result')
    var textImput = document.querySelector('#velocidade')
    var velocidade = (textImput.value)
    if (velocidade > 80) {
        resultado.innerHTML = `Sua velocidade é ${velocidade}  você foi multado`
    }
}