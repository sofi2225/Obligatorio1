var product = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";
    var activar;

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];


            if (i==0) activar = "active";

            else activar ="";

        htmlContentToAppend += ` <div class="carousel-item ` +activar+ ` " >

        <img src="` + imageSrc + `" class="d-block w-100" alt="Carrusel">
        </div> `
       
    }
    document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}


function showRelatedImages(array) {
    htmlContentToAppend = "";

    for (i = 0; i < category.relatedProducts.length; i++) {

        let pos = category.relatedProducts[i];
        let related = array[pos];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
        <div class="d-block mb-4 h-100">
     <img class="img-fluid img-thumbnail" src="` + related.imgSrc + `" alt="">
        </div>
        </div>  `

        document.getElementById("relatedImages").innerHTML = htmlContentToAppend;
    }
}

function mostrarEstrellas(nroEstrellasMarcadas) {
    var estrellas = "";

    for (let i = 0; i < 5; i++) {
        if (i < nroEstrellasMarcadas) {
            estrellas += `<span class="fa fa-star checked"></span>`;
        } else {
            estrellas += `<span class="fa fa-star"></span>`;
        }
    }

    return estrellas;
}

function showRelatedComments(array) {
    htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let nroComentario = array[i];

        htmlContentToAppend += ` <p> <strong>` + nroComentario.user + `</strong> - ` + nroComentario.dateTime + ` - ` + mostrarEstrellas(nroComentario.score) + ` <br> ` + nroComentario.description + `  </p>`

    }

    document.getElementById("comentario").innerHTML = htmlContentToAppend;

}


function enviarComentario(e) {
    var comentario = {
        score: e.stars.value,
        description: e.message.value,
        user: sessionStorage.getItem("botonUser"),
        dateTime: new Date()
    }

    nroComentario.push(comentario)
    showRelatedComments(nroComentario);
    return false;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);



            getJSONData(PRODUCTS_URL).then(function (resultProd) {
                if (resultProd.status === "ok") {

                    related = resultProd.data;
                    showRelatedImages(related);
                }
            });
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultComm) {
        if (resultComm.status === "ok") {

            nroComentario = resultComm.data;
            showRelatedComments(nroComentario);
        }
    });




});