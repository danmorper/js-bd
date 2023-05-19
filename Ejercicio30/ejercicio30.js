var parrafo = document.getElementById("parrafo");
var opcion = document.getElementById("s");
var btn = document.querySelector("input");
function f1() {
    var p = parrafo.innerHTML;
    alert(p);
}
btn.addEventListener("click", f1)

function f2() {
    // var val = parseInt(opcion.value);
    // var texto = opcion.selectedOptions[0].textContent;
    // console.log(val)
    // if (val == 1) {
    //     console.log(texto);
    // }
    // if (val == 2) {
    //     alert(texto);
    // }
    const optSel = opcion.selectedOptions[0];
    const texto = optSel.textContent;
    const val = parseInt(opcion.value);
    if (val == 1) {
        console.log(texto);
    } else if (val == 2) {
        alert(texto);
    }
}

opcion.addEventListener("change", f2)

function f3() {
    console.log("estás encima del párrafo");
}

parrafo.addEventListener("mouseover", f3)