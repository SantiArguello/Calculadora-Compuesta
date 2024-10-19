document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const montoInicial = parseFloat(document.getElementById('monto').value);
    const dias = parseInt(document.getElementById('dias').value);
    const tasaInteres = parseFloat(document.getElementById('tasa').value) / 100; // Tasa seleccionada
  
    if (isNaN(montoInicial) || isNaN(dias)) {
      document.getElementById('resultado').innerText = "Por favor, ingresa valores válidos.";
      return;
    }
  
    const vecesPorDia = 2;
    const montoFinal = montoInicial * Math.pow((1 + tasaInteres), vecesPorDia * dias);
  
    document.getElementById('resultado').innerText = `Monto final: $${montoFinal.toFixed(2)}`;
  });