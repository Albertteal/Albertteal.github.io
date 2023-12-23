var enteredPassword;
var contrasenaInput;
var NuevaContraParaEntrar;
var NuevaContrasena;
import puppeteer from "puppeteer"
var nombre;
var boleta;



//const extraerInformacion = require('./extrayendoinfo.test');


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
function PantallaEscanearConsultaGrupo(){
  location.href = 'SelectordeGrupoEnFormadeHorarioConsultarGrupo.html';
}
function PantallaEscaneandoGrupoyaSeleccionado(){
  location.href = 'SelectordeGrupoEnFormadeHorarioEscanearGrupo.html';
}
function PantallaAsistenciaGrupoYaExistente(){
  location.href = 'vistaAsis.html';
}
function PantallaEscanearGrupo(){
  location.href = 'PantallaEscanear.html';
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

function AbrirEmergente(){
  window.open("https://javascript.info/");
}






// async function openWebpage(){
//     const browser = await puppeteer.launch({
//         headless: false
//     })
//     const page = await browser.newPage()
//     await page.goto('https://servicios.dae.ipn.mx/vcred/?h=5d7213f96deaedc96c19290932eadcc9fc6465ef22d0242905414e19c555d0b9')
    
    
//    nombre = await page.$eval('#wrapper > div.nombre', (div) => div.textContent);
//    boleta = await page.$eval('#wrapper > div.boleta', (div) => div.textContent);

//   //console.log(nombre, boleta);
//   console.log('La boleta desde el test: ', boleta);
//   console.log('El nombre desde el test: ', nombre);
    
//     await browser.close()


    
// }
// openWebpage();


