const studentData = [
  {
    code: 'css',
    count: 5
  },
  {
    code: 'java',
    count: 5
  },
  {
    code: 'php',
    count: 1
  }

]



google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('packages have been loaded');

  const data = new google.visualization.DataTable();
  data.addColumn('string', 'code');
  data.addColumn('number', 'count');

  for (var i = 0; i < studentData.length; i++) {
      data.addRow([studentData[i].food, studentData[i].count]);
  }

  const options = {
    title: 'Facourite Coding Language'
  }

  const chart = new google.visualization.PieChart(document.getElementById('chartContainer'))
  chart.draw(data,options);

}
