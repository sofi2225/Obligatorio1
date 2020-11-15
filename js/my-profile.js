//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

   
    mostarDatos();


});

function reemplazarFoto() {
    var reemplazo = "";

    var valorUrl = document.getElementById("valorFoto").value;
    alert(document.getElementById("valorFoto").value);

    reemplazo = `<a id="fotoPerfil" href="https://imgbb.com/"><img src=" ` + valorUrl + ` " alt="images-q-tbn-ANd9-Gc-Sd-Jzhx8ywr6z2-ILPFn-Md-UIFmp-Qzk6hoi-Rw-usqp-CAU" border="0" heigth="200px" width="200px"></a>`

    localStorage.setItem("Foto", reemplazo);

   


}

function mostarDatos() {



    var perfil = JSON.parse(localStorage.getItem("myProfile"));


    if (document.getElementById("email").value != null) {
        

        document.getElementById("email").value = localStorage.getItem("botonUser");
        

    }




    document.getElementById("mostrarFoto").innerHTML = localStorage.getItem("Foto");

    // foto = `<a  id="fotoPerfil" href="https://imgbb.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd_Jzhx8ywr6z2ILPFnMdUIFmp-Qzk6hoiRw&usqp=CAU " alt="images-q-tbn-ANd9-Gc-Sd-Jzhx8ywr6z2-ILPFn-Md-UIFmp-Qzk6hoi-Rw-usqp-CAU" border="0" heigth="200px" width="200px"  ></a>`
    // document.getElementById("mostrarFoto").innerHTML = foto;



    document.getElementById("firstName").value = perfil.firstName;
    document.getElementById("secondName").value = perfil.secondName;
    document.getElementById("firstLastName").value = perfil.firstLastName;
    document.getElementById("secondLastName").value = perfil.secondLastName;
    document.getElementById("email").value = perfil.email;
    document.getElementById("phoneNumber").value = perfil.phoneNumber;


    // Poner info en el perfil
    document.getElementById("nombreInfo").innerHTML = perfil.firstName;
    document.getElementById("sNombreInfo").innerHTML = perfil.secondName;
    document.getElementById("apellidoInfo").innerHTML = perfil.firstLastName;
    document.getElementById("sApellidoInfo").innerHTML = perfil.secondLastName;
    document.getElementById("emailInfo").innerHTML = perfil.email;
    document.getElementById("telefonoInfo").innerHTML = perfil.phoneNumber;

}





var arrDataUser = [];

var user = {

    firstName: firstName.value,
    secondName: secondName.value,
    firstLastName: firstLastName.value,
    secondLastName: secondLastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value

};

function submitFormulario() {


    var user = {

        firstName: firstName.value,
        secondName: secondName.value,
        firstLastName: firstLastName.value,
        secondLastName: secondLastName.value,
        email: email.value,
        phoneNumber: phoneNumber.value

    };

    localStorage.setItem("myProfile", JSON.stringify(user));

    var perfil = JSON.parse(localStorage.getItem("myProfile"));

    alert(perfil.firstName);




    document.getElementById("email").value = perfil.email;





    // var arrayPerfil =JSON.parse();

    //  console.log(arrayPerfil);
    return false;




}


