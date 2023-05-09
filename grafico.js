var ctx = document.getElementById('myChart').getContext('2d');

// Gerar um número aleatório entre 0 e 1
var random = Math.random();

// Elevar 1 a esse número
var result = Math.pow(1, random);

// Gerar o gráfico
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Resultado'],
    datasets: [{
      label: '1 elevado a um número aleatório',
      data: [result],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 3 // aumentar a largura da linha
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});