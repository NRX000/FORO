
// MOSTRAR BARRA DE NAVEGACION

function mostrarBarra(){
    var iconoBarra = document.getElementById("iconoBarra"); // Barra de iconos
    var navegacion = document.getElementById("navegacion"); // Barra de navegacion
    iconoBarra.setAttribute("style", "display:none;"); // funcion para ocultar el icono establecemos el atributo y con la etiqueta style lo ocutamos con display
    navegacion.classList.remove("ocultar"); //Mostramos la navegacion

}

// CERRAR BARRA DE NAVEGACION

function ocultarBarra(){
    var iconoBarra = document.getElementById("iconoBarra"); // Barra de iconos
    var navegacion = document.getElementById("navegacion"); // Barra de navegacion
    iconoBarra.setAttribute("style", "display:block;") //volvemos a mostrar el icono
    navegacion.classList.add("ocultar") // ocultamos la navegacion

}