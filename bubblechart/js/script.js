google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
  console.log('packages have been loaded');

  const data = google.visualization.arrayToDataTable([
    ['Student', 'Age', 'Height', 'Pets', 'FB Friends'],
    ['001', 22, 168, 'Monkey', 102],
    ['002', 21, 155, 'Meerkat', 125],
    ['003', 22, 176, 'Dog', 95],
    ['004', 19, 182, 'Fox', 173],
    ['005', 25, 171, 'Dog', 69],
    ['006', 26, 180, 'Cat', 113],
    ['007', 20, 153, 'Pidgeon', 145],
    ['008', 18, 154, 'Rabbit', 124],
    ['009', 30, 158, 'Horse', 130],
    ['010', 26, 166, 'Sun Bear', 90],
    ['011', 21, 198, 'Meerkat', 87],
    ['012', 24, 182, 'Lion', 123]

  ])

  const options = {
    title: 'Data',
    hAxis: {
      title: 'Age'
    },
    vAxis: {
      title: 'Height'
    },

  }



    const chart = new google.visualization.BubbleChart(document.getElementById('chartContainer'));
    chart.draw(data, options);




}
