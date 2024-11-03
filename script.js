document.getElementById('interestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const montoInicial = parseFloat(document.getElementById('monto').value);
  const dias = parseInt(document.getElementById('dias').value);
  const tasaInteres = parseFloat(document.getElementById('tasa').value) / 100;

  if (isNaN(montoInicial) || isNaN(dias)) {
    document.getElementById('resultado').innerText = "Por favor, ingresa valores válidos.";
    return;
  }

  const montoFinal = montoInicial * Math.pow((1 + tasaInteres), dias);
  const beneficio = montoFinal - montoInicial;

  // Mostrar resultados en el recuadro
  document.getElementById('beneficio').innerText = beneficio.toFixed(2);
  document.getElementById('montoFinal').innerText = montoFinal.toFixed(2);
  document.getElementById('resultado').style.display = 'block';
});