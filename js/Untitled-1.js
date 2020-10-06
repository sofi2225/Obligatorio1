//Función que se utiliza para actualizar los costos de envio


var shippingPercentage = 0.15;


function calculoCostoEnvio(){
    

    let unitProductCostHTML = document.getElementById("productCostText");

    let cantidad = parseInt( document.getElementById("cantidadProducto").value);

    let unitCostToShow = parseInt(resultadoCarrito.articles[0].unitCost) * cantidad   ;
    unitProductCostHTML.innerHTML = unitCostToShow;

    console.log(cantidad)
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultCart) {
        if (resultCart.status === "ok") {

            resultadoCarrito = resultCart.data;
            htmlContentToAppend = "";

       

            
            htmlContentToAppend += `
            <tr>
              
              <th scope="row"  > <img  src="`
                + resultadoCarrito.articles[0].src + `  " height="50" ></img> 
            </th>
              
                <td>` + resultadoCarrito.articles[0].name + `</td>
              <td>  
              <input type="number" class="form-control" id="cantidadProducto" placeholder="" required="`

              + resultadoCarrito.articles[0].count + `" value="" min="0">    
            </td>
              <td>`
                + parseInt(resultadoCarrito.articles[0].unitCost) + ` ` + resultadoCarrito.articles[0].currency + `
              
              </td>
            </tr>    
            `
        }

        document.getElementById("mostrarProductos").innerHTML = htmlContentToAppend;
        
        calculoCostoEnvio();
    });

    document.getElementById("goldradio").addEventListener("change", function () {
        shippingPercentage = 0.15;
        updateTotalCosts();
        console.log(shippingPercentage)
    });

    document.getElementById("premiumradio").addEventListener("change", function () {
        shippingPercentage = 0.07;
        updateTotalCosts();
    });

    document.getElementById("standardradio").addEventListener("change", function () {
        shippingPercentage = 0.05;
        updateTotalCosts();
    });


    

});