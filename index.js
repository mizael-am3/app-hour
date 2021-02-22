function load() {
    var time = new Date()
    var hour = time.getHours()
    // var hour = ''

    var minute = time.getMinutes()
    var text = document.querySelector('#message')
    var gif = document.querySelector('#gif')
    if (hour >= 0 && hour <= 4) {
        text.innerHTML = `Ótima madrugada, são <strong>${hour}h:${minute}min</strong>`
        gif.src = 'imgs/dusk.gif'
        document.body.style.background = '#404040'

    } else if (hour >= 5 && hour <= 11) {
        text.innerHTML = `Bom dia, são <strong>${hour}h:${minute}min</strong>`
        gif.src = 'imgs/dawn.gif'
        document.body.style.background = '#F2D0A7'

    } else if (hour >= 12 && hour <= 17) {
        text.innerHTML = `Boa tarde, são <strong>${hour}h:${minute}min</strong>`
        gif.src = 'imgs/evening.gif'
        document.body.style.background = '#59473C'

    } else if (hour >= 18 && hour <= 23) {
        text.innerHTML = `Boa noite, são <strong>${hour}h:${minute}min</strong>`
        gif.src = 'imgs/dusk.gif'
        document.body.style.background = '#606060'

    } else if (hour < 0 || hour > 23) {
        text.innerHTML = `[ ERRO ] Horario invalido`
        gif.src = 'imgs/evening.gif'
        alert('Erro')
    }
}