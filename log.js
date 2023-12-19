var enteredPassword;
var contrasenaInput;
var NuevaContraParaEntrar;
var NuevaContrasena;
var boleta;
var nombre;
const extraerInformacion = require('./extrayendoinfo.test');
function verificarContrasena() {


  contrasenaInput = document.getElementById('contrasena');
  enteredPassword = contrasenaInput.value;

  if (enteredPassword == '7131') {
    alert('Contraseña correcta. Accediste');
    location.href = 'pantallaprincipal.html'; 

  } else if (enteredPassword == NuevaContraParaEntrar) {
    alert('Contraseña correcta. Accediste');
    location.href = 'pantallaprincipal.html'; 
  }
  else  {
    alert('Contraseña incorrecta. Intente nuevamente.');
  }

}

function PantallaRestablecerContrasena(){
  location.href = 'PruebaNuevaRestablecerContraseña.html';
}

function PantallaEscanear(){
  location.href = 'SelectordeGrupoEnFormadeHorario.html';
}
function PantallaEscanearEscanearGrupo(){
  location.href = 'SelectordeGrupoEnFormadeHorarioEscanearGrupo.html';
}
function PantallaEscaneandoGrupoyaSeleccionado(){
  location.href = 'segundaPantalladeSelectordeGrupo.html';
}
function PantallaAsistenciaGrupoYaExistente(){
  location.href = 'vistaAsis.html' ;
}

function RestablecerContraseña(){

  const contrasenadeRestablecimiento = document.getElementById('contrasena_de_restablecimiento');
  const contrasenaIntroducidaparaEstablecer = contrasenadeRestablecimiento.value;

  if (contrasenaIntroducidaparaEstablecer === '123') {
      alert('Clave correcta. Contraseña reestablecida');
      ReestableciendoContrasena();
     
    } else {  
      alert('Contraseña incorrecta. Intente nuevamente.');
    }
    
}

function ReestableciendoContrasena(){

  NuevaContrasena = document.getElementById('Nueva_Contrasena');
  NuevaContraParaEntrar = NuevaContrasena.value;
  enteredPassword = NuevaContraParaEntrar;
  location.href = 'pruebadeNuevoFrontPagInicioSesion.html'; 
  alert(enteredPassword)
  location.href = 'index.html'; 
  
  
 
}

async function extraer_informacion() {
  const extraccion = await extraerInformacion();
  boleta = extraccion.boleta;
  nombre = extraccion.nombre;
  console.log('La boleta desde el test: ', boleta);
  console.log('El nombre desde el test: ', nombre);
  SacarPantalla(boleta, nombre); // Llamar a SacarPantalla con los valores actualizados
}

function SacarPantalla(boleta, nombre) {
  console.log('La boleta ya fuera de la funcion test es: ', boleta);
  console.log('El nombre ya fuera de la funcion test es: ', nombre);
}

function AbrirEmergente(){
  window.open("https://javascript.info/");
}
extraer_informacion();
