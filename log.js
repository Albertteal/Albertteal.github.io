function iniciandoSesion(){
    let botoniniciar = document.getElementById('boton-iniciar-sesion')
    botoniniciar.disabled = false
    botoniniciar.addEventListener('click', PantallaPrincipal)
}

function PantallaPrincipal(){
alert('Sesion iniciada')
location.reload()
}

window.addEventListener('load', iniciandoSesion)