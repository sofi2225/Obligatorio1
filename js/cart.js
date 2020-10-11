var shippingPercentage = 0.15;
let PERCENTAGE_SYMBOL = '%';
let PESO_SYMBOL = "UYU ";

function mostrarCarrito(array) {
    htmlContentToAppend = "";

    for (let i = 0; i < array.articles.length; i++) {


        htmlContentToAppend += `
   

    <tr>
            <td>  <img  src="`+ array.articles[i].src + `  " height="50" ></img>    </td>
            <td>   ` + array.articles[i].name + `  </td>
            <td>  <input type="number" class="form-control" id="prueba`+ [i + 1] + `" placeholder=" " required="" value="` + array.articles[i].count + `" min="0" onchange="update()" >    </td>
            <td>`+ parseInt(array.articles[i].unitCost) + ` ` + array.articles[i].currency + `</td>
            <td id="subtotal`+ [i + 1] + `">   </td>
    </tr>
      
    `
        document.getElementById("mostrarProductos").innerHTML = htmlContentToAppend;

    }
}

function update() {
    var sub = 0;

    for (let i = 0; i < resultadoCarrito.articles.length; i++) {

        var a = 1;

        if (resultadoCarrito.articles[i].currency == "USD") {
            a = 40;
        }

        // Calcula lo que se ve en la tabla 
        var unitCost = resultadoCarrito.articles[i].unitCost;
        var cantidad = document.getElementById("prueba" + [i + 1]).value;

        var itemPrice = (cantidad * unitCost * a)
        sub += itemPrice;

        document.getElementById("subtotal" + [i + 1]).innerHTML = itemPrice + ` UYU  `;
    }

    //Calcula lo que se ve abajo(subtotal, envio y total)

    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostTextHTML = document.getElementById("totalCostText");

    let comissionToShow = shippingPercentage * sub + PESO_SYMBOL;
    let unitCostToShow = sub + PESO_SYMBOL;
    let totalCostTextToShow = shippingPercentage * (sub) + (sub) + PESO_SYMBOL;

    comissionCostHTML.innerHTML = comissionToShow;
    unitProductCostHTML.innerHTML = unitCostToShow;
    totalCostTextHTML.innerHTML = totalCostTextToShow;

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (resultCart) {
        if (resultCart.status === "ok") {

            resultadoCarrito = resultCart.data;


            mostrarCarrito(resultadoCarrito);

            update();
        }
    });

    document.getElementById("goldradio").addEventListener("change", function () {
        shippingPercentage = 0.15;
        update();
        console.log(shippingPercentage)
    });



    document.getElementById("premiumradio").addEventListener("change", function () {
        shippingPercentage = 0.07;
        update();

    });

    document.getElementById("standardradio").addEventListener("change", function () {
        shippingPercentage = 0.05;
        update();
    });


});