// cada vez que un boton sea pulsado, Seleccionar cada elemento de entrada de texto o de n´umero e imprimir por consola su nombre y su valor
// evento
boton.addEventListener("click", function() {
    var inputs = document.queryselector("input[type=text], input[type=number]");
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].name + ": " + inputs[i].value);
    }
});
