function ok() {
    var resultado = document.querySelector('#res')
    var nascionalidade = document.querySelector('#pais')
    if (nascionalidade != 'Brasil') {
        res.innerHTML = `Seja bem vindo estrangeiro`
    } else {
        res.innerHTML = `Patria amada ${nascionalidade}`
    }
}