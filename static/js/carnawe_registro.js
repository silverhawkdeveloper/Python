
let formularioRegistro;

window.addEventListener("load", inicio);

function inicio() {
    let formularioRegistro = document.getElementById("formularioRegistro");

    document.getElementById("contenedorRegistro").scrollIntoView({behavior: "smooth"});

    formularioRegistro.addEventListener("submit", validarRegistro);
}

function validarRegistro() {
    if (validarContrsIguales()) {
        window.location = "/";
    }
}

function validarContrsIguales() {
    let contr = document.getElementById("contrReg");
    let repContr = document.getElementById("repContrReg");

    let contrsCoinciden = contr.value !== "" && contr.value === repContr.value;

    console.log(contr.value, repContr.value);

    if (!contrsCoinciden) alert("Las contraseñas no coinciden");

    return contrsCoinciden;
}

