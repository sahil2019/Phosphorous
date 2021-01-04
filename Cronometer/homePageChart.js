google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        
      var data = google.visualization.arrayToDataTable([
        ["Element", "consumed", { role: "style" } ],
        ["Tues,24.dec", 300, "purple"],
        ["Thu,26.Dec", 160, "red"],
        ["Fri,28.Dec", 21, "gold"],
        ["sat,30.Dec", 122, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
    //   view.setColumns([0, 1,
    //                    { calc: "stringify",
    //                      sourceColumn: 1,
    //                      type: "string",
    //                      role: "annotation" },
    //                    2]);

      var options = {
        // title: "Density of Precious Metals, in g/cm^3",
        //  width: 4,
        // // height: 400,
        bar: {groupWidth: "65%"},
        legend:'none'
        
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("home__chart__container"));
      chart.draw(view, options)
    }
