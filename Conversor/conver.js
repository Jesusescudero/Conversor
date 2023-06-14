function convertirPesosADolares() {
  var pesos = parseFloat(document.getElementById("pesos").value);
  var tasaCambio = parseFloat(document.getElementById("tasa").value);
  var dolares = pesos / tasaCambio;
  document.getElementById("resultado").innerHTML = pesos + " pesos equivale a " + dolares.toFixed(2) + " dólares.";
}

function convertirDolaresAPesos() {
  var dolares = parseFloat(document.getElementById("dolares").value);
  var tasaCambio = parseFloat(document.getElementById("tasa").value);
  var pesos = dolares * tasaCambio;
  document.getElementById("resultado").innerHTML = dolares + " dólares equivale a " + pesos.toFixed(2) + " pesos.";
}