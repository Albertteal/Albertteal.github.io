var enteredPassword;
var contrasenaInput;
var NuevaContraParaEntrar;
var NuevaContrasena;

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
  location.href = 'restablecerContraseña.html';
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
  alert(enteredPassword)
  location.href = 'index.html'; 
  
  
 
}