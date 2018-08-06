google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart(temp) {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', temp],
  
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        // setInterval(function() {
        //   data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        //   chart.draw(data, options);
        // }, 5000);
        // setInterval(function() {
        //   data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        //   chart.draw(data, options);
        // }, 26000);
      }

      $.ajax({
          url: "https://dweet.io:443/get/dweets/for/rpi-temp",
          dataType: "json",
          type: "GET",
          success:function(thing){
            console.log(thing);
            drawChart(thing.with["0"].content["rpi-temp-core"])
          },
          error:function(error){
              console.log("ERROR");
              console.log(error);
          }
      });
