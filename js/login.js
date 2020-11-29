//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){


    
});


function DataLogin() {
  var DataLogin = [];
}

function validar() {

  // Obtener valores 
  var email = document.getElementById("usuario").value;
  var contraseña = document.getElementById("clave").value;
  localStorage.setItem("botonUser", email);

  // Validacion
  if (email === "") {
    alert("Debes ingresar un usuario");
    return false;
  }

  else if (contraseña === "") {
    alert("Debes ingresar una contraseña");
    return false;
  }

  else if (contraseña.length < 3) {
    alert("La contraseña debe tener más de 3 caracteres")
    return false;
  }

  else {
    alert("Usuario creado con exito");
    window.location.replace("index.html");
    contL = 1;
    localStorage.setItem("VariableContador", contL);
    return false;
  }
}
