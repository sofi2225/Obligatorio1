var shippingPercentage = 0.15;
let PERCENTAGE_SYMBOL = '%';
let PESO_SYMBOL = "UYU ";
var resultadoCarrito = [];


function eliminar(name) {
    newArray = [];

    resultadoCarrito.articles.forEach(article => {
        if (article.name !== name) {
            newArray.push(article)
        }
    })

    resultadoCarrito.articles = newArray;
    mostrarCarrito(resultadoCarrito);
};

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
                <td> <button type="button" value="eliminar"  class="btn btn-link" onclick="eliminar('`+ array.articles[i].name + `')" > X Eliminar</button> </td>
            </tr>`

    }
    document.getElementById("mostrarProductos").innerHTML = htmlContentToAppend;
    update();
};

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

// function validarFormulario() {

//     fetch('http://localhost:3000/RutaFormPost', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({

//             "publicacion": document.getDocumentById("goldradio").value,
//             "nombre": document.getDocumentById("envioNombre").value

//         })

//     }).then(res => res.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => console.log('Success:', response));

// }


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

    getJSONData(CART_BUY_URL).then(function (resultCart) {
        if (resultCart.status === "ok") {

            mensajeCompra = resultCart.data;


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


//Datos tarjeta de credito
$(function ($) {
    $('[data-numeric]').payment('restrictNumeric');
    $('.cc-number').payment('formatCardNumber');
    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');
    $.fn.toggleInputError = function (erred) {
        this.parent('.form-group').toggleClass('has-error', erred);
        return this;
    };
    $('form').submit(function (e) {
        e.preventDefault();
        var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);
        $('.validation').removeClass('text-danger text-success');
        $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
    });
});