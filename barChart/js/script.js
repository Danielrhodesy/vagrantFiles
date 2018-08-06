google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('packages have been loaded');

  const data = google.visualization.arrayToDataTable([
      ['Year','Births','Deaths','Marrages'],
      ['2013', 58719, 29568, 19237],
      ['2014', 57243, 31062, 20125],
      ['2015', 61038, 31608, 19947],
      ['2016', 59430, 31176, 20235]

  ])

  const options = {
    title: 'Births, Deaths and Marrages from New Zealand',
    subtitle: 'From 2013 to 2017',
    hAxis: {
      title: 'Number'
    },
    vAxis: {
      title: 'Year'
    },
    legend: {
      position: 'in'
    }

  }

  const chart = new google.visualization.BarChart(document.getElementById('chartContainer'));
  chart.draw(data, options);



}

// End Of Page
