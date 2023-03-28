
var boton = document.createElement("button");

var textoBoton = document.createTextNode("Tenemos promociones");
boton.appendChild(textoBoton);

boton.onclick = function() {
  alert("Tenemos promociones");
};
var miDiv = document.getElementById("miDiv");
miDiv.appendChild(boton);
