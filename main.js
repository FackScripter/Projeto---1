function GetValue() {
  var valor = document.getElementById("string").value;
  var elemento = document.getElementById("textid");
  document.getElementById("string").value = "";
  this.value = "";
  return elemento.innerHTML = valor;
}

document.getElementById("string").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      GetValue();
    }
});