function verificarContrasena() {

    // Get the input field for password
    const contrasenaInput = document.getElementById('contrasena');
  
    // Get the entered password
    const enteredPassword = contrasenaInput.value;
  
    // Check if the entered password matches the correct password
    if (enteredPassword === 'Valles') {
      alert('Contraseña correcta. Accediste');
      location.href = 'pantallaprincipal.html'; // Redirect to the main screen
    } else {
      alert('Contraseña incorrecta. Intente nuevamente.');
    }
  }
  