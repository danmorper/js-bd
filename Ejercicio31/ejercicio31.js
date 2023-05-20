function f1() {
  var p = parrafos.innerHTML;
  alert(p);
}

var parrafos = document.querySelectorAll("#parrafo")
console.log(parrafos)
for (let i = 0; i < parrafos.length; i++) {
  const elemento = parrafos[i];
  console.log(elemento.textContent);
}