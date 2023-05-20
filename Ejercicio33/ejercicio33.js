const textos = document.querySelectorAll("input[type=text]");
const numeros = document.querySelectorAll("input[type=number]");
const radios = document.querySelectorAll("input[type=radio]");
const checkboxs = document.querySelectorAll("input[type=checkbox]");
const area = document.querySelectorAll("textarea");
const sel = document.querySelectorAll("select");
const btn = document.getElementById("boton");

function mostrarConsola() {
    for (texto of textos) {
        console.log(texto);
    }
    for (numero of numeros) {
        console.log(numero);
    }
}

btn.addEventListener("click", mostrarConsola)

function marcadas() {
    for (radio of radios) {
        if (radio.checked) {
            console.log(radio.value)
        }
    }
}

btn.addEventListener("click", marcadas)
