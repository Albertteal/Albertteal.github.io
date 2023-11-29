function aceptar() {
  // Obtener el valor de la celda seleccionada
  let celdaSeleccionada = document.querySelector(".cuadro.active");

  // Obtener el texto de la celda seleccionada
  let textoCeldaSeleccionada = celdaSeleccionada.textContent;

  // Redireccionar a otra página con el texto de la celda seleccionada
  window.location.href = "otra-pagina.html?texto=" + textoCeldaSeleccionada;
}

// Asignar un evento de click al botón "Aceptar"
document.querySelector(".boton").addEventListener("click", aceptar);
