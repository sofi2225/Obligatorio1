//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {




});


function submitFormulario() {

    var nombre = document.getElementById("firstName").value;
    var segundoNombre = document.getElementById("secondName").value;
    var apellido = document.getElementById("fisrtLastName").value;
    var segundoApellido = document.getElementById("firstName").value;
    var mail = document.getElementById("secondName").value;
    var telefono = document.getElementById("fisrtLastName").value;

 
    arrDataUser = JSON.parse(localStorage.getItem("myProfile"));

    var correo = sessionStorage.getItem("botonUser");
    var bandera = false;
    var indice;

    for (let i = 0; i < arrDataUser.length; i++) {
        if (arrDataUser[i].email == correo) {

            bandera = true;
            indice = i;
            break;
        }
    }


    if (bandera == true){
        arrDataUser[indice].firstName = nombre; 
        arrDataUser[indice].secondName = segundoNombre; 
        arrDataUser[indice].fisrtLastName = apellido; 
        arrDataUser[indice].secondLastName = segundoApellido; 
        arrDataUser[indice].email = mail; 
        arrDataUser[indice].phoneNumber = telefono; 
      
    } else {


        
        arrDataUser[indice].firstName = nombre; 
        arrDataUser[indice].secondName = segundoNombre; 
        arrDataUser[indice].fisrtLastName = apellido; 
        arrDataUser[indice].secondLastName = segundoApellido; 
        arrDataUser[indice].email = mail; 
        arrDataUser[indice].phoneNumber = telefono; 

    }

    //arrDataUser.push(object);

    localStorage.setItem("myProfile", JSON.stringify(arrDataUser));


    //   var perfil = localStorage.getItem("object");






    //let mensajeBienvenida = document.getElementById("mensajeBienvenida");

   // mensajeBienvenida.innerHTML = arrayPerfil;


    return false;

}


// for (var user in arrDataUser) {

//     if (user.email != "") {

//         existeUser = user;
//         break;

//     }
// }

