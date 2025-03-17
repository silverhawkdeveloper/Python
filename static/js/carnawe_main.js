let btnRegistro;

window.addEventListener("load", navInicio);

function navInicio() {
    btnRegistro = document.getElementById("botonesnav").children[1];
    btnLogin = document.getElementById("botonesnav").children[0];

    btnRegistro.addEventListener("click", cargarRegistro);
    btnLogin.addEventListener("click", cargarLogin);
}

function cargarRegistro() {
    window.location = "/registro";
}
function cargarLogin() {
    window.location = "/login";
}