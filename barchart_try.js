window.onload = function () {
    "use strict";

    // The input data
    var data = [4, 8, 15, 16, 32, 42];

    // Get the chart element.
    var chart = d3.select("body")
      .append("div")
      .attr("class", "chart");

    // Scale the width based on the input data
    var width = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range(["0px", "420px"]);

    // Link the data with the DOM element
    chart.selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", width)
      .text(String);

};