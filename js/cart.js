var shippingPercentage = 0.15;
let PERCENTAGE_SYMBOL = '%';
let PESO_SYMBOL = "UYU ";
let cantidad = "";

//Función que se utiliza para actualizar los costos de envio
function calculoCostoEnvio() {


    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");



    let cantidad = document.getElementById("prueba").value;

    let comissionToShow = Math.round((shippingPercentage * 100)) + PERCENTAGE_SYMBOL;
    let unitCostToShow = parseInt(resultadoCarrito.articles[0].unitCost) * cantidad;


    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;



}


function mostrarCarrito(array) {
    htmlContentToAppend = "";

    for (let i = 0; i < array.articles.length; i++) {


        htmlContentToAppend += `
    <tr>      
      <th scope="row"  > <img  src="`
            + array.articles[i].src + `  " height="50" ></img> 
    </th>
              <td>` + array.articles[i].name + `</td>
      <td>  
      <input type="number" class="form-control" id="prueba" placeholder=" `

            + array.articles[i].count + `" required="" value="" min="0">    
    </td>
      <td>`
            + parseInt(array.articles[i].unitCost) + ` ` + array.articles[i].currency + `
      </td>
    </tr>    
    `
        document.getElementById("mostrarProductos").innerHTML = htmlContentToAppend;


    }
}

// var testInput = document.getElementById("prueba");

//function handleInput(e) {
 //   var value = this.valueAsNumber;
 //   console.log("type: %s, value: %o", typeof value, value);
//}

//testInput.addEventListener("input", handleInput);

//handleInput.call(testInput);

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultCart) {
        if (resultCart.status === "ok") {

            resultadoCarrito = resultCart.data;



            mostrarCarrito(resultadoCarrito);
            calculoCostoEnvio();
        }
    });

    document.getElementById("goldradio").addEventListener("change", function () {
        shippingPercentage = 0.15;
        calculoCostoEnvio();
        console.log(shippingPercentage)
    });

    document.getElementById("premiumradio").addEventListener("change", function () {
        shippingPercentage = 0.07;
        calculoCostoEnvio();

    });

    document.getElementById("standardradio").addEventListener("change", function () {
        shippingPercentage = 0.05;
        calculoCostoEnvio();
    });




});