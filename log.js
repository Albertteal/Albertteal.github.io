function verificarContrasena() {


    const contrasenaInput = document.getElementById('contrasena');
    const enteredPassword = contrasenaInput.value;
  
    if (enteredPassword === '7131') {
      alert('Contraseña correcta. Accediste');
      location.href = 'pantallaprincipal.html'; // Redirect to the main screen
    } else {
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

    const NuevaContrasena = document.getElementById('Nueva_Contrasena');
    const NuevaContraParaEntrar = NuevaContrasena.value;
    location.href = 'index.html'; 
    
    NuevaContraParaEntrar == contrasenaInput
   
  }




