var cuadroSeleccionado = null;

function seleccionarCuadro(celda) {
  if (cuadroSeleccionado !== null) {
    cuadroSeleccionado.classList.remove("seleccionado");
  }

  cuadroSeleccionado = celda;
  cuadroSeleccionado.classList.add("seleccionado");
}

function redirigirPagina() {
  if (cuadroSeleccionado !== null) {
    if (cuadroSeleccionado.innerHTML.trim() === "") {
      window.location.href = "vistaAsis.html";
    } else {
      window.location.href = "VistaAsis.html";
    }
  } else {
    alert("Por favor, selecciona un cuadro antes de hacer clic en Aceptar.");
  }
}