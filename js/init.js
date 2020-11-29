//Json cargados desde la pagina

const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";



//Json cargados desde localhost:3000
// const CATEGORIES_URL = "http://localhost:3000/categoriesJson";
// const PUBLISH_PRODUCT_URL = "http://localhost:3000/messagePublishJson";
// const CATEGORY_INFO_URL = "http://localhost:3000/categoryInfoJson";
// const PRODUCTS_URL = "http://localhost:3000/productsJson";
// const PRODUCT_INFO_URL = "http://localhost:3000/productInfoJson";
// const CART_INFO_URL = "http://localhost:3000/cartInfoJson";
// const CART_BUY_URL = "http://localhost:3000/messageSellJson";


//Funciones para cargar spinner
var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}
//Funciones para ocultar spinner
var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});


var loginUser= localStorage.getItem("botonUser");
document.getElementById("datosUsuario").innerHTML = loginUser;

  
function cerrarSesion() {
  var contL = localStorage.getItem("VariableContador", contL);
  contL = 0;
  localStorage.setItem("VariableContador", contL);

  alert("Sesión Cerrada con exito");
  window.location.href = "login.html";
}

