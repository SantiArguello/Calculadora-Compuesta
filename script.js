document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const montoInicial = parseFloat(document.getElementById('monto').value);
    const dias = parseInt(document.getElementById('dias').value);
  
    if (isNaN(montoInicial) || isNaN(dias)) {
      document.getElementById('resultado').innerText = "Por favor, ingresa valores válidos.";
      return;
    }
  
    const tasaInteres = 0.016;
    const vecesPorDia = 2;
    const montoFinal = montoInicial * Math.pow((1 + tasaInteres), vecesPorDia * dias);
  
    document.getElementById('resultado').innerText = `Monto final: $${montoFinal.toFixed(2)}`;
  });