window.onload = function () {
    "use strict";

    // The input data
    var data = [4, 8, 15, 16, 32, 42];

    // height constants
    var chart_width = 420;
    var chart_height = 20 * data.length;

    // Get the chart element.
    var chart = d3.select("body").append("svg")
        .attr("class", "chart")
        .attr("width", chart_width+20)
        .attr("height", chart_height+20)
        .append("g")
            .attr("transform", "translate(10,15)");

    // Scale the width based on the input data
    var bar_width = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, chart_width]);

    // Scale the height based on the input data
    var bar_height = d3.scale.ordinal()
        .domain(data)
        .rangeBands([0, chart_height]);

    var bar_text_height = function (d) {
        return bar_height(d) + bar_height.rangeBand() / 2;
    };

    // Adding reference lines
    chart.selectAll("line")
        .data(bar_width.ticks(10))
    .enter().append("line")
        .attr("x1", bar_width)
        .attr("x2", bar_width)
        .attr("y1", 0)
        .attr("y2", chart_height)
        .style("stroke", "#ccc");

    // Link the data with the DOM element
    chart.selectAll("rect")
        .data(data)
    .enter().append("rect")
        .attr("y", bar_height)
        .attr("width", bar_width)
        .attr("height", bar_height.rangeBand());

    // Labels for the bars
    chart.selectAll("text")
        .data(data)
    .enter().append("text")
        .attr("x", bar_width)
        .attr("y", bar_text_height)
        .attr("dx", -3) // padding-right
        .attr("dy", ".35em") // vertical-align: middle
        .attr("text-anchor", "end") // text-align: right
        .text(String);

    // Adding labels to the reference lines
    chart.selectAll(".rule")
        .data(bar_width.ticks(10))
    .enter().append("text")
        .attr("class", "rule")
        .attr("x", bar_width)
        .attr("y", 0)
        .attr("dy", -3)
        .attr("text-anchor", "middle")
        .text(String);

    // Adding a line
    chart.append("line")
       .attr("y1", 0)
       .attr("y2", chart_height)
       .style("stroke", "#000");

};
