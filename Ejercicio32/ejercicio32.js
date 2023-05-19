function mostrarCodigoElemento(evento) {
    var p = document.querySelector("p");
    p.addEventListener("mouseover", mostrarCodigoElemento);
  }


// Recorra con alg´un tipo de bucle los elementos anteriores. Dentro del bucle, asocie a
// cada uno de los elementos anteriores, como manejador del evento de pulsar sobre el
// p´arrafo en cuesti´on, la funci´on creada en el primer apartado
for (var i = 0; i < p.length; i++) {
    p[i].addEventListener("mouseover", mostrarCodigoElemento);
}

// i++ es lo mismo que i = i + 1 y es lo mismo que i += 1. Se añade en el paréntesis del for 
// para que aumente uno después de cada ciclo. Si no se pone, se queda en el primer elemento.
