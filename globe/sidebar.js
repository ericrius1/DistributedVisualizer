var DAT = DAT || {}

DAT.SideBar = function(sidebar) {

  var stats = d3.select("#statsSideBar");
  var width = stats.style("width");
  console.log(width); 
  var sampleSVG = stats
    .append("svg")
    .attr("width",  stats.style("width"))
    .attr("height",  stats.style("height"));

  sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 80)
    .on("mouseover", function() {
    d3.select(this).style("fill", "aliceblue");
  })
    .on("mouseout", function() {
    d3.select(this).style("fill", "white");
  });
}

// usuwanie kółek

// var circle = svg.selectAll("circle").data([130, 210])
// circle.exit().remove();