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
        ["Tues,24.dec", 0, "black"],
        ["Thu,26.Dec", 0, "black"],
        ["Fri,28.Dec", 0, "black"],
        ["sat,30.Dec",0, "black"]
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
      var chart = new google.visualization.ColumnChart(document.getElementById("home__chart__container__part2"));
      chart.draw(view, options)
    }
