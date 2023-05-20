function f1(parrafo) {
  var p = parrafo.innerHTML;
  console.log(p);
}

parrafos = document.querySelectorAll(".parrafo")
for (parrafo of parrafos) {
    parrafo.addEventListener("click",f1);
} 

// función de orden superior
p.forEach(i => i.addEventListener("click", recibeEvento))