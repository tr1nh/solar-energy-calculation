/* CHART AREA */
var chartArea;

function initChartArea(element, data) {
  var ctx = element.getContext('2d')

  return new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

function updateChartAreaLabel(instance, data) {
  instance.data.datasets[0].data = data
  instance.update()
}