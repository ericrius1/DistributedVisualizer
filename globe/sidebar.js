var DAT = DAT || {}

DAT.SideBar = function() {
  debugger;
  var svg = d3.select("#statsSideBar")
    .append("svg")
    .attr("width", 800)
    .attr("height", 500);

  var data = [{
      "x": 0,
      "y": 250
    }, {
      "x": 20,
      "y": 250
    }
  ];

  var circle = svg.selectAll("circle");

  circle.data(data)
    .enter().append("circle")
    .attr("cx", function(d) {
    return d.x;
  })
    .attr("cy", function(d) {
    return d.y;
  })
    .attr("r", 75);

  //svg.selectAll("circle").attr("cx", function() {
  //  return Math.random() * 600 + 100;
  //});

  svg.selectAll("circle").data([130, 210, 340])
    .attr("cy", function(d) {
    return d;
  }) // .attr("cy", String)
  .attr("r", function(d) {
    return 4 * Math.sqrt(d);
  }); // .attr("r", Math.sqrt)

  var circle = svg.selectAll("circle").data([130, 210, 340, 600])
  var enter = circle.enter().append("circle")
  enter.attr("cy", 150).attr("cx", String).attr("r", 100).style("fill", "#731630");
}

// usuwanie kółek

// var circle = svg.selectAll("circle").data([130, 210])
// circle.exit().remove();