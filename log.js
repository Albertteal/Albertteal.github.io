function verificarContrasena() {


    const contrasenaInput = document.getElementById('contrasena');
    const enteredPassword = contrasenaInput.value;
  
    if (enteredPassword === 'Valles') {
      alert('Contraseña correcta. Accediste');
      location.href = 'pantallaprincipal.html'; // Redirect to the main screen
    } else {
      alert('Contraseña incorrecta. Intente nuevamente.');
    }
  }
  
  function PantallaRestablecerContrasena(){
    location.href = 'restablecerContraseña.html';
  }


  function RestablecerContraseña{

    const contrasenadeRestablecimiento = document.getElementById('contrasena_de_restablecimiento');
    const contrasenaIntroducidaparaEstablecer = contrasenadeRestablecimiento.value;

    if (contrasenaIntroducidaparaEstablecer === 'Q@23faalz_24412#') {
        alert('Clave correcta. Contraseña reestablecida');
        location.href = 'pantallaprincipal.html'; // Redirect to the main screen
      } else {
        alert('Contraseña incorrecta. Intente nuevamente.');
      }
  }




