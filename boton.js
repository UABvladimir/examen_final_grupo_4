
var boton = document.createElement("button");

var textoBoton = document.createTextNode("Tenemos promociones");
boton.appendChild(textoBoton);

boton.onclick = function() {
  alert("Haz hecho clic en el botón");
};
var miDiv = document.getElementById("miDiv");
miDiv.appendChild(boton);
