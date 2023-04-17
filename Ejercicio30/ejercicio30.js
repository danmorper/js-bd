var parrafo = document.getElementById("parrafo");
var opcion = document.getElementById("s");
var btn = document.querySelector("input");
function f1() {
    var p = parrafo.innerHTML;
    alert(p);
}
btn.addEventListener("click", f1)

function f2() {
    var o = opcion.value;
    var texto = opcion.selectedOptions[0].textContent;
    alert(opcion);
    console.log(texto);
}

function f3() {
    alert("estas to encima illo");
}