function convertirPesosADolares() {
    var pesos = parseFloat(document.getElementById("pesos").value);
    var tasaCambio = 0.05;
    var dolares = pesos * tasaCambio;
    document.getElementById("resultado").innerHTML = pesos + " pesos equivale a " + dolares + " dólares.";
  }
  
  function convertirDolaresAPesos() {
    var dolares = parseFloat(document.getElementById("dolares").value);
    var tasaCambio = 0.05;
    var pesos = dolares / tasaCambio;
    document.getElementById("resultado").innerHTML = dolares + " dólares equivale a " + pesos + " pesos.";
  }