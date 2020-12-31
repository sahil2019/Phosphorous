google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Nutrients', 'kcal'],
    ['FATS',     11],
    ['PROTIEN',      2],
    ['CARBS',  2],
    
  ]);

  var options = {
    // title: 'My Daily Activities',
    pieHole: 0.4,
    legend:'none',
    chartArea: {
      left: "3%",
      top: "3%",
      height: "100%",
      width: "100%"
  }

  };

  var chart = new google.visualization.PieChart(document.getElementById('home__calories__donut__chart'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Nutrients', 'kcal'],
    ['FATS',     11],
    ['PROTIEN',      2],
    ['CARBS',  2],
    
  ]);

  var options = {
    // title: 'My Daily Activities',
    pieHole: 0.4,
    legend:'none',
    chartArea: {
      left: "3%",
      top: "3%",
      height: "100%",
      width: "100%"
  }
    
    
  };

  var chart = new google.visualization.PieChart(document.getElementById('home__calories__donut__chart_2'));
  chart.draw(data, options);
}