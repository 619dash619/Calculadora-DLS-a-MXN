function convertir() {
  const tasaCambio = 17.5; // Puedes actualizar esta tasa según el tipo de cambio actual
  const usd = parseFloat(document.getElementById('usdInput').value);

  if (isNaN(usd)) {
    document.getElementById('resultado').textContent = "Por favor ingresa una cantidad válida.";
    return;
  }

  const mxn = usd * tasaCambio;
  document.getElementById('resultado').textContent = `$${usd.toFixed(2)} USD equivalen a $${mxn.toFixed(2)} MXN`;
}
